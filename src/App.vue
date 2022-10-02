<template>
  <div class="wrap">
    <ModalPop />
    <GoTop />
    <MobileMenu />
    <FixMenu />
    <HeaderView />
    <VisualView />
    <ItemView />
    <BeverageView/>
    <FranchiserView/>
    <SnsView/>
    <FooterView />
  </div>
</template>

<script>
  import ModalPop from '@/components/ModalPop.vue'
  import GoTop from '@/components/GoTop.vue'
  import MobileMenu from '@/components/MobileMenu.vue'
  import FixMenu from '@/components/FixMenu.vue'
  import HeaderView from '@/components/HeaderView.vue'
  import VisualView from '@/components/VisualView.vue'
  import ItemView from '@/components/ItemView.vue'
  import BeverageView from '@/components/BeverageView.vue'
  import FranchiserView from '@/components/FranchiserView.vue'
  import SnsView from '@/components/SnsView.vue'
  import FooterView from '@/components/FooterView.vue'
  import {useStore} from 'vuex'
  export default {
    name: 'App',
    components: {
      ModalPop,
      GoTop,
      MobileMenu,
      FixMenu,
      HeaderView,
      VisualView,
      ItemView,
      BeverageView,
      FranchiserView,
      SnsView,
      FooterView
    },
    setup() {
      const store = useStore();
      store.dispatch('fetchMenudata')
      return {}
    }
  }
</script>

<style>
  @charset 'utf-8';

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline-style: none;
  }

  ul,
  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #333;
  }

  img {
    vertical-align: top;
    border: 0;
  }

  html {
    font-size: 16px;
    overflow-x: hidden;
  }


  body {
    font-family: 'NanumSquare', 'Malgun Gothic', '맑은 고딕', "돋움", Verdana, sans-serif;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.5px;
    line-height: 1.6;
    color: #888;
    overflow-x: hidden;
  }

  /* 공통(재사용) */
  .inner {
    position: relative;
    display: block;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }

  /* float를 해제 */
  .clearfix::after {
    content: '';
    position: relative;
    display: block;
    width: 100%;
    clear: both;
  }
</style>