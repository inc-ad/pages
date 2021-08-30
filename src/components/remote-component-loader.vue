<template>
  <div v-if="component" :is="component" @close="$emit('close')" @toland="$emit('toland')" :obj='obj' />
</template>

<script>
  import Vue from 'vue';
  import envConfig from '@/utils/env';
  export default {
    name: 'remote-component-loader',
    props: {
      config: {
        type: Object,
        default: () => {
          return {
            name:'',
            version:''
          }
        }
      },
      obj: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        data: {},
        component: '',
      }
    },
    computed: {
      compAdress() {
        return this.config && `${envConfig.load[process.env.NODE_ENV]}/${this.config.name}/${this.config.name}.${this.config.version}`
      }
    },
    created() {
      // 动态添加组件，用于可视化编辑场景
      const {
        name,
        version
      } = this.config;
      if(!name) return;
      const component = window[name];
      
      const compName = `${name}.${version}`;
      if (!component) {
        const script = document.createElement('script');
        const link = document.createElement('link');
        script.src = `${this.compAdress}.umd.min.js`;
        link.href = `${this.compAdress}.css`;
        link.rel = 'stylesheet';
        document.head.appendChild(link);
        document.body.appendChild(script);
        script.onload = () => {
          this.$emit('onRemoteComponentLoad', {
            ...window[compName],
          });
          this.component = Vue.extend(window[compName].Component);
        }
      } else {
        // 非动态化添加，用于构建场景
        this.$emit('onRemoteComponentLoad', {
          ...window[compName],
        });
        // 先有 props 再挂组件，不然 props 是 null 可能会有错
        this.$nextTick(() => {
          this.component = Vue.extend(window[compName].Component);
        });
      }
    },
    watch: {
      'config.name'(val) {
        this.component = Vue.extend(window[`${this.config.name}.${this.config.version}`].Component);
      }
    }
  }

</script>
