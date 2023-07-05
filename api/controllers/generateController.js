const asyncHandler = require('express-async-handler')
const {v4: uuidv4} = require("uuid")
const fetch = require('node-fetch');


const GenerateImages = asyncHandler(async(req, res) => {
  let data = {
      "enableHiresFix": false,
      "generateSources": [],
      "id": "JeESzc3iK0PqAvsd4MPB",
      "requestId": uuidv4(),
  }

  const {
    guidanceScale, height, model, negativePrompt, prompt, width
  } = req.body

  data['guidanceScale'] = guidanceScale
  data['height'] = height
  data['model'] = model
  data['negativePrompt'] = negativePrompt
  data['prompt'] = prompt
  data['width'] = width

  console.log(data);
  
  const response = await fetch('https://z.lexica.art/api/generator', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Cookie": process.env.COOKIE
    },
    body: JSON.stringify(data)
  })
  const result = await response.json()
  console.log('LEXICA RESPONSE (apature): ', result);
  
  if(!result['images']){
    if(data['prompt'] == ''){
      data['prompt'] = 'Interstellar'
    }
    const response = await fetch('https://lexica.art/api/v1/search?q=' + data['prompt'])
    const result = await response.json()
    console.log('LEXICA RESPONSE (search): ', result);

    let images = []
  
    for(let i=0; i<Math.min(6, result['images'].length); i++){
      images.push(result['images'][i]['src'])
    }

    res.status(200)
    return res.json({'images': images})
  }
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
