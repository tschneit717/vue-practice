const path = require("path")
const pages = require("./pages.json")

module.exports = {
  filenameHashing: false,
  pages,
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "~assets/styles/global.scss";
        `
      }
    }
  },
  devServer: {
    // https: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },
  configureWebpack: {
    performance: {
      hints: false
    },
    resolve: {
      alias: {
        app: path.resolve(__dirname, "src/app/"),
        utils: path.resolve(__dirname, "src/app/utils/"),
        components: path.resolve(__dirname, "src/app/components/"),
        animations: path.resolve(__dirname, "src/app/animations/"),
        pages: path.resolve(__dirname, "src/app/pages/"),
        styles: path.resolve(__dirname, "src/assets/styles/"),
        images: path.resolve(__dirname, "src/assets/images/"),
        assets: path.resolve(__dirname, "src/assets/")
      }
    }
  },
  chainWebpack: config => {
    if (config.plugins.has("copy")) {
      config.plugin("copy").tap(options => {
        const option = options[0][0]
        option.ignore = [...option.ignore, "pages/*", "partials/*", "head.html"]
        return options
      })
    }
    if (config.plugins.has("html")) {
      config.plugin("html").tap(options => {
        const option = options[0]
        option.minify = false
        return options
      })
    }
  }
}
