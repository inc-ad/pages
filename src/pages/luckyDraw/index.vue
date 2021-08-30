<template>
  <div id="app">
    <div id="A001">
      i am a page content
      <div @click="loadRemoteComp">click to load comp</div>
      <p style="font-size:16px" v-show="compLoading">comp is coming, please wait a moment</p>
      <remote-component-loader v-if="compConfig.name" :obj="compAward" :config="compConfig" @close="close">
      </remote-component-loader>
    </div>
  </div>
</template>

<script>
  export default {
    components: {},
    data() {
      return {
        compConfig: {
          name:'',
          version:''
        },
        compLoading:false,
        compAward: {},
      }
    },
    watch: {

    },
    methods: {
      close() {
        this.compConfig = {};
        console.log('我知道啦')
      },
      loadRemoteComp() {
        this.compLoading = true;
        setTimeout(() => {
          this.compAward = {
            link: 'http://baidu.com',
            src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
          };
          this.compConfig = {
            name: 'coco-global-banner',
            version: '0.0.1'
          }
          this.compLoading = false;
        }, 1000)
      }
    },
    computed: {

    },
    created() {
      console.log(window.common)

    },
    mounted() {
      console.log(window.common)
    }
  }

</script>

<style lang="scss" scoped>
  @import "./index.scss";

</style>
