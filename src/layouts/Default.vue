<template>
  <div class="layout">
    <div class="wrapper" v-show="isShown">
      <Header @setShow="setShow"/>
      <slot/>
      <Footer/>
    </div>
    <Spinner v-if="!isShown"/>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  components: {
    Header: () => import('~/components/Header.vue'),
    Spinner: () => import('~/components/Spinner.vue'),
    Footer: () => import('~/components/Footer.vue'),
  },

  data() {
    return {
      isShown: false,
      loading: false
    }
  },

  methods: {

    setShow(show) {
      this.isShown = show
    }
  },
}
</script>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
