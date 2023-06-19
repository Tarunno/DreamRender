import { useState } from "react"
import {generateImages} from '../api/generate'

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
    "prompt": "Abstract colors blur",
    "width": 768
  })

  const handleGenerateImages = async (data) => {
    setLoading(true)
    const res = await generateImages(data)
    setImages(res['images'])
    console.log(res)
    setLoading(false)
  }

  const inputHeader = (primary, secondary) => {
    return (
      <div className='mb-1'>
        <h1 className='text-[20px]'>{primary}</h1>
        <p className='text-gray-400'>{secondary}</p>
      </div>
    )
  }

  return(
    <div className='p-10 generate'>
      <div>
        {inputHeader('Describe you image', 'Describe about the subject and perspective of you image')}
        <input type="text" 
          className="rounded-xl px-4 py-3 bg-[#202128] w-full mb-4"
          placeholder="Cute monkey"
          onChange={(e) => setData(data => ({...data, prompt:e.target.value}))}
        />
        {inputHeader('Negative prompt', 'Things you are trying not to include')}
        <input type="text"
          className="rounded-xl px-4 py-3 bg-[#202128] w-full"
          placeholder="Text, blurry"
          onChange={(e) => setData(data => ({...data, negativePrompt:e.target.value}))}
        />
      </div>
      <div className="mt-6 flex gap-4">
        <div className=' p-4 bg-[#202128] rounded-xl shadow-xl flex-1'>
          {inputHeader('Dimensions', 'Pick a image dimension')}
          <div className='flex gap-2 items-start'>
            <div onClick={() => setData(data => ({...data, width:1152, height:768}))} 
              className='w-[100px] h-[60px] bg-[#292B2F] p-2 items-center justify-center flex rounded-lg hover:text-brand transition cursor-pointer'
              style={{border: (data['width'] === 1152 && data['height'] === 768)? '2px solid #73C051': null}}>
              <p>1152 x 768</p>
            </div>
            <div onClick={() => setData(data => ({...data, width:1088, height:896}))} 
              className='w-[100px] h-[80px] bg-[#292B2F] p-2 items-center justify-center flex rounded-lg hover:text-brand transition cursor-pointer'
              style={{border: (data['width'] === 1088 && data['height'] === 896)? '2px solid #73C051': null}}>
              <p>1088 x 896</p>
            </div>
            <div onClick={() => setData(data => ({...data, width:1024, height:1024}))} 
              className='w-[100px] h-[100px] bg-[#292B2F] p-2 items-center justify-center flex rounded-lg hover:text-brand transition cursor-pointer'
              style={{border: (data['width'] === 1024 && data['height'] === 1024)? '2px solid #73C051': null}}>
              <p>1024 x 1024</p>
            </div>
            <div onClick={() => setData(data => ({...data, width:896, height:1088}))} 
              className='w-[80px] h-[100px] bg-[#292B2F] p-2 items-center justify-center flex rounded-lg hover:text-brand transition cursor-pointer'
              style={{border: (data['width'] === 896 && data['height'] === 1088)? '2px solid #73C051': null}}>
              <p>896 x 1088</p>
            </div>
            <div onClick={() => setData(data => ({...data, width:768, height:1152}))} 
              className='w-[60px] h-[100px] bg-[#292B2F] p-2 items-center justify-center flex rounded-lg hover:text-brand transition cursor-pointer'
              style={{border: (data['width'] === 768 && data['height'] === 1152)? '2px solid #73C051': null}}>
              <p>768 x 1152</p>
            </div>
          </div>
        </div>
        <div className=' p-4 bg-[#202128] rounded-xl shadow-xl flex-1'>
          {inputHeader('Advanced')}
          <div className='flex flex-col gap-2 items-start'>
            <p className='text-gray-400 flex items-center gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
              </svg>
              Guidance scale
            </p>
            <input type="range" min="2" max="13" value={data['guidanceScale']} onChange={(e) => setData(data => ({...data, guidanceScale:e.target.value}))}/>
            <p className='text-gray-400 flex flex-col gap-1'>
              <span className='flex gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
                Model type
              </span>
              <div className='flex gap-2'>
                <button className="bg-brand text-white px-2 py-1 rounded-lg" 
                  style={{background: data['model'] !== 'lexica-aperture-v2'? '#202128': null}}
                  onClick={() => setData(data => ({...data, model:'lexica-aperture-v2'}))}>Lexica Aperture v2</button>
                <button className="bg-brand text-white px-2 py-1 rounded-lg" 
                  style={{background: data['model'] !== 'lexica-aperture-v3'? '#202128': null}}
                  onClick={() => setData(data => ({...data, model:'lexica-aperture-v3'}))}>Lexica Aperture v3</button>
              </div>
            </p>
          </div>
        </div>
      </div>
      <button className='px-4 py-2 bg-brand text-[17px] rounded-full mt-4'
        onClick={() => {
          setShowImages(true)
          handleGenerateImages(data)
        }}
        >Generate
      </button>
      {showImages && 
        <div className="fixed generate bg-[#1B1A1F] z-20 top-0 h-screen left-[300px] slidein p-10 pt-16 flex gap-4 overflow-hidden">
          <div className="fixed bg-brand top-3 rounded-xl w-full p-2">
            model: {data['model']} | 
            prompt: {data['prompt']} |
            negativePrompt: {data['negativePrompt']} | 
            height: {data['width']} |
            width:{data['width']} | 
            guidanceScale: {data['guidanceScale']} 
          </div>
          {loading && <div className='w-screen h-screen flex items-center justify-center ml-[-160px] mt-[-40px]'>
            <svg className="w-[150px]" version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 100 100" enable-background="new 0 0 0 0" space="preserve">
                <circle fill="#73C051" stroke="none" cx="6" cy="50" r="6">
                  <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite"
                    begin="0.1"/>    
                </circle>
                <circle fill="#73C051" stroke="none" cx="26" cy="50" r="6">
                  <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite" 
                    begin="0.2"/>       
                </circle>
                <circle fill="#73C051" stroke="none" cx="46" cy="50" r="6">
                  <animate
                    attributeName="opacity"
                    dur="1s"
                    values="0;1;0"
                    repeatCount="indefinite" 
                    begin="0.3"/>     
                </circle>
              </svg>
            </div> || <>
            <div className='w-[70%] flex flex-col gap-4'>
              <img src={images[displayImage]} alt="image" className='w-full h-[500px] aspect-square object-cover rounded-xl'/>
              <div className='bg-[#202128] flex gap-1 w-full p-4 rounded-xl font-bold shadow-xl justify-between'>
                <div className='flex gap-1'>
                  <button className='px-2 py-1 flex items-center rounded-lg border border-brand bg-brand mr-1 text-[13px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z" />
                    </svg>
                    Share
                  </button> 
                  <a href={images[displayImage]} download target="blank"><button className='px-4 py-2 flex items-center rounded-lg text-brand border border-brand mr-1 text-[13px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15" />
                    </svg>
                    Export
                  </button></a>
                </div>
                <button className='px-4 py-2 flex items-center rounded-lg text-red-600 border border-red-600 mr-1 text-[13px]'
                  onClick={() => setShowImages(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                    Close
                  </button>
              </div>
            </div>
            <div className='w-[40%] flex flex-col gap-4 overflow-y-scroll h-screen extraImages pb-20'>
              {images && images.map((image, index) => (
                <img onClick={() =>  setDisplayImage(index)} className='rounded-xl shadow-inner object-cover hover:cursor-pointer' src={image} alt="showcase" />
              ))}
            </div> </>
          }
        </div>
      }
    </div>
  )
}
export default GeneratePage