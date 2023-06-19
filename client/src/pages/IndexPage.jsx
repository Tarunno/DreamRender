const IndexPage = () => {
  return(
    <div className='h-full overflow-x-hidden'>
      <div className='hero p-10 flex gap-4'>
        <div>
          <h1 className='text-[36px]'>Unleash your creativity with free Ai image generation tool</h1>
          <p className='text-gray-400 mt-4'>Developed by reverse engineering Lexica. Lexica is a search engine and art gallery for artwork created with Stable Diffusion, one of the more popular AI art models.</p>
          <button className='bg-brand text-[17px] px-6 py-2 rounded-full mt-4'>
            Start Generating
          </button>
        </div>
        <div className='mr-[-130px] w-2/3'>
          <img src="./showcase.png" alt="hero" className='object-cover h-full overflow-visible'/>
        </div>
      </div>
      <div className="p-6 h-fit">
        <div className='w-full bg-[#202128] rounded-xl shadow-xl p-4'>
          <div className='flex justify-between items-center'>
            <div>
              <h1 className='text-[20px]'>Forum</h1>
              <p className='text-gray-400'>Share you creativity and checkout others</p>
            </div>
            <button className='flex items-center gap-1 p-2 hover:text-brand transition-colors duration-200'>
              Checkout
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
          <div className="flex overflow-x-hidden gap-4 mt-4 mr-[-15px]">
            <img className='w-[30%] rounded-xl shadow-inner object-cover' src="./showcase2.png" alt="showcase" />
            <img className='w-[30%] rounded-xl shadow-inner object-cover' src="./showcase3.jpg" alt="showcase" />
            <img className='w-[30%] rounded-xl shadow-inner object-cover' src="./showcase4.jpg" alt="showcase" />
            <img className='w-[30%] rounded-xl shadow-inner object-cover' src="./showcase5.png" alt="showcase" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default IndexPage