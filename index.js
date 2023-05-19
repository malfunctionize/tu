const tumblr = require('tumblr.js');
class Tumblr {
  /*
    params := {
      header: {
        name
        config
      },
      body: {
        text
        base64
      }
    }
  */
  async publish(req, ondata, kernel) {
    ondata({ raw: "Publishing...\n\r" })
    let params = req.params
    const client = tumblr.createClient({...params.header.config, returnPromises: true })
    let r = await client.createPhotoPost(params.header.name, {
      caption: params.body.text,
      data64: params.body.base64
    })
    ondata({ raw: "Published!\n\r" })
    return r
  }
}
module.exports = Tumblr
