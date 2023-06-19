const asyncHandler = require('express-async-handler')
const {v4: uuidv4} = require("uuid")
const fetch = require('node-fetch');


const GenerateImages = asyncHandler(async(req, res) => {
  const data = {
      "enableHiresFix": false,
      "generateSources": [],
      "guidanceScale": 7,
      "height": 1152,
      "id": "JeESzc3iK0PqAvsd4MPB",
      "model": "lexica-aperture-v3",
      "negativePrompt": "",
      "prompt": "hello",
      "requestId": uuidv4(),
      "width": 768
  }
  
  const response = await fetch('https://z.lexica.art/api/generator', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cookie": process.env.COOKIE
    },
    body: JSON.stringify(data)
  })
  const result = await response.json()
  let images = []
  
  for(let i=0; i<result['images'].length; i++){
    images.push(result['images'][i]['url'])
  }

  res.status(200)
  res.json({'images': images})
})

module.exports = {
  GenerateImages
}
