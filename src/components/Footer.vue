<template>
  <footer class="footer">
    <div v-if="locale != 'en'">
      <span class="footer-text">{{ $t('Translation was executed by AI so there may be some inaccuracies') }}</span>
      {{ $t('kindly') }} <g-link to="/">{{ $t('contact us') }}</g-link> {{ $t('if you find any') }}
    </div>
  </footer>
</template>

<script>
export default {

  computed: {
    locale() {
      return this.$locale
    }
  }

}
</script>

<style scoped>

  .footer {
    padding-top: 2rem;
    text-align: right;
    font-weight: 300;
    font-size: 0.5rem;
    font-style: italic;
    color: #2b2b2b;
  }

  .footer-text {
    display: block;
  }

  .footer a {
    font-weight: 500;
    color: inherit;
  }
</style>