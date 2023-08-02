import { initI18n } from 'i18n-pro'
import esDefault from './Spanish.json';
import itDefault from './Italian.json';
import jaDefault from './Japanese.json';
import ruDefault from './Russian.json';
import zhDefault from './Chinese.json';
import enDefault from './English.json';
import koDefault from './Korean.json';

// for blog
import esBlog from './blog/Spanish.json';
import itBlog from './blog/Italian.json';
import jaBlog from './blog/Japanese.json';
import ruBlog from './blog/Russian.json';
import zhBlog from './blog/Chinese.json';
import enBlog from './blog/English.json';
import koBlog from './blog/Korean.json';

const en = Object.assign(enBlog, enDefault);
const es = Object.assign(esBlog, esDefault);
const it = Object.assign(itBlog, itDefault);
const ru = Object.assign(ruBlog, ruDefault);
const ko = Object.assign(koBlog, koDefault);
const zh = Object.assign(zhBlog, zhDefault);
const ja = Object.assign(jaBlog, jaDefault);


const {
  t,
  setI18n,
  withI18n,
  
} = initI18n({
  namespace: 'academyTranslations',
  langs: {
    en,
    es,
    it,
    ja,
    ru,
    zh,
    ko,
  },
  locale: typeof window !== "undefined" ? (window.localStorage.getItem('locale') || 'en') : 'en'
})



export {
  t,
  setI18n,
  withI18n,
}