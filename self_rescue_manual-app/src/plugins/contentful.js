const contentful = require('contentful')

const config = {
  space: process.env.VUE_APP_SPACE_ID,
  accessToken: process.env.VUE_APP_ACCESS_TOKEN
}

module.exports = {
  createClient () {
    return contentful.createClient(config)
  }

}
