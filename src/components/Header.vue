<template>

<header class="header">
  <nav class="nav">
    <ul>
      <li>
        <g-link exact :class="{'active': !$route.path.includes('about') && !$route.path.includes('blog')}" to="/">{{ $t('home') }}</g-link>
      </li>
      <li>
        <g-link :class="{'active': $route.path.includes('about')}" to="/about/">{{ $t('about') }}</g-link>
      </li>
      <li>
        <g-link to="/blog/welcome">{{ $t('blog') }}</g-link>
      </li>
    </ul>
  </nav>
  <select class="language-select" v-if="locales" tabindex="0" @change="onSelectChange($event)">

    <template v-for="(item) in locales">
      <option v-bind:key="item.id" :selected="item.abbr == locale" v-bind:value="item.lang">
        {{item.lang}}
      </option>
    </template>

  </select>
</header>
  
</template>

<script>
 import locales from '@/data/locales.yaml'
export default {

  data() {
    return {
      locale: 'en'
    }
  },

  computed: {
    locales() {
      return locales
    }
  },

  methods: {

    getLocale(lang) {
      return locales.filter(item => item.lang === lang);
    },

    resolveI18n() {
      let locale = this.locale
      this.$setI18n({
        locale,
      })
    },

    initPath() {
      if(localStorage.getItem('locale') ) {
        this.locale = localStorage.getItem('locale');

        setTimeout(() => {
          this.$emit('setShow', true)
        }, 100)
      }  
    },

    onSelectChange(e) {
      this.$setLocale(this.getLocale(e.target.value)[0].abbr)
      let newpath = this.$tp(this.$route.path, this.getLocale(e.target.value)[0].abbr);
      window.location.href = newpath;
    },
  },

  mounted() {
    this.$emit('setShow', false)
    this.initPath();
    this.resolveI18n();
  }
}
</script>

<style scoped>
  .nav ul {
    display: flex;
    align-items: center;
    list-style: none;
    padding: 0;
  }

  .nav li:not(:last-child) {
    margin-right: 1rem;;
  } 

  .nav a {
    text-decoration: none;
    color: #333;
    font-weight: 500;
  }

  .nav a.active {
    color: #152bb9;
  }

  select {
    padding: 0.3rem 1rem;
    border-radius: 10px;
    font-family: inherit;
  }

</style>