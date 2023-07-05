const DisplayImages = ({images, displayImage, setShowImages, setDisplayImage}) => {
  return (
    <div className="flex gap-4 w-full">
      <div className='w-[70%] flex flex-col gap-4'>
        <img src={images[displayImage]} alt="image" className='w-full h-[calc(100%_-_230px)] aspect-square object-cover rounded-xl'/>
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
          <img key={index} onClick={() => setDisplayImage(index)} className='rounded-xl shadow-inner object-cover hover:cursor-pointer' src={image} alt="showcase" />
        ))}
      </div> 
    </div>
  )
}

export default DisplayImages