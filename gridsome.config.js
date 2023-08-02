// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const yaml = require('js-yaml')
const fs   = require('fs')

module.exports = {
  siteName: 'Translation with ai',
  plugins: [
    {
      use: "gridsome-plugin-translateit",
      options: {
        locales: ['en', 'es', 'ko', "zh", "ru", "it", "ja"],
        defaultLocale: "en",
        translations: [],
        exclude: ["/blog/"],
        routes: yaml.load(fs.readFileSync('./src/data/routes.yaml', 'utf8')),
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Post',
        baseDir: './posts', 
        // pathPrefix: '/online-course',
        template: './src/templates/Post.vue',
      }
    },
  ]
}
