<template>
  <div id="app">
    <div id="A001">
      <div class="A001_banner">
        <div class="A001_rule"></div>
        <div class="A001_award"></div>
      </div>
      <div id="coin-contaier"></div>
      <img class="A001_main_bg" src="./images/1ec077c2-3f78-46e5-a0e3-5ad295a5f1df.jpg">
      <div class="A001_main">
        <div class="A001_jointime">
          Remaining：
          <span></span>
        </div>
        <div class="A001_panel">
          <div class="A001_start">
            <div class="guide_circle"></div>
            <div class="hand"></div>
          </div>
          <div class="A001_wheel">
            <div class="A001_core">
              <div class="core-box"></div>
            </div>
            <div class="A001_lump"></div>
          </div>
        </div>
      </div>
      <remote-component-loader :obj="{link:'http://baidu.com',src:bannerSrc}"
        :config="{name:'coco-global-banner',version:'0.0.1'}" @close="close"></remote-component-loader>
    </div>
  </div>
</template>

<script>
  import data from './data.json';
  export default {
    components: {},
    data() {
      return {
        bannerSrc: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
      }
    },
    watch: {

    },
    methods: {
      close() {
        console.log('我知道啦')
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
