// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import { t, setI18n, withI18n } from '../translations/i18n.js'

export default function (Vue, { router, head, isClient, isServer }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.prototype.$t = t; 
  Vue.prototype.$setI18n = setI18n;
  Vue.prototype.$withI18n = withI18n;

}
