import { useState } from "react"
import {generateImages} from '../api/generate'
import GeneratorInput from "../components/GeneratorInput"
import DisplayImages from "../components/DisplayImages"
import Loading from "../components/Loading"

const GeneratePage = () => {

  const [showImages, setShowImages] = useState(false)
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(false)
  const [displayImage, setDisplayImage] = useState(0)

  const [data, setData] = useState({
    "guidanceScale": 7,
    "height": 1152,
    "model": "lexica-aperture-v3",
    "negativePrompt": "",
    "prompt": "Cute monkey",
    "width": 768
  })

  const handleGenerateImages = async (data) => {
    setLoading(true)
    setShowImages(true)
    const res = await generateImages(data)
    setImages(res['images'])
    setLoading(false)
  }

  return(
    <div className='p-10 generate'>

      <GeneratorInput data={data} setData={setData} setShowImages={setImages} handleGenerateImages={handleGenerateImages} />
      
      {showImages && 
        <div className="fixed generate bg-[#1B1A1F] z-20 top-0 w-[calc(100%_-_300px)] h-screen left-[300px] slidein p-10 pt-16 flex gap-4 overflow-hidden">
          <div className="fixed bg-brand text-[#111] font-semibold top-3 rounded-xl w-full p-2 pl-6">
            model: {data['model']} | 
            prompt: {data['prompt']} |
            negativePrompt: {data['negativePrompt']} | 
            height: {data['height']} |
            width:{data['width']} | 
            guidanceScale: {data['guidanceScale']} 
          </div>

          {loading && <Loading /> || <DisplayImages images={images} displayImage={displayImage} setShowImages={setShowImages} setDisplayImage={setDisplayImage} />}
        
        </div>
      }
    </div>
  )
}
export default GeneratePage