const GeneratorInput = ({data, setData, handleGenerateImages}) => {

  const inputHeader = (primary, secondary) => {
    return (
      <div className='mb-1'>
        <h1 className='text-[20px]'>{primary}</h1>
        <p className='text-gray-400'>{secondary}</p>
      </div>
    )
  }

  return (
    <div>
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
              <span className='flex gap-2'>
                <button className="bg-brand text-white px-2 py-1 rounded-lg" 
                  style={{background: data['model'] !== 'lexica-aperture-v2'? '#202128': null}}
                  onClick={() => setData(data => ({...data, model:'lexica-aperture-v2'}))}>Lexica Aperture v2</button>
                <button className="bg-brand text-white px-2 py-1 rounded-lg" 
                  style={{background: data['model'] !== 'lexica-aperture-v3'? '#202128': null}}
                  onClick={() => setData(data => ({...data, model:'lexica-aperture-v3'}))}>Lexica Aperture v3</button>
              </span>
            </p>
          </div>
        </div>
      </div>
      <button className='px-4 py-2 bg-brand text-[17px] rounded-full mt-4'
        onClick={() => {
          handleGenerateImages(data)
        }}
        >Generate
      </button>
    </div>
  )
}

export default GeneratorInput