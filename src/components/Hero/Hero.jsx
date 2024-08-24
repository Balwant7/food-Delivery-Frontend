

const Hero = () => {
  return (
    <div id='hero' className="relative bg-[url(/header_img.png)] bg-contain h-[34vw] w-full mx-auto my-8 bg-no-repeat">
        <div id='hero_container' className='absolute flex flex-col items-start max-w-[50%] gap-5 bottom-[10%] left-[6vw]'>
            <h2 className="text-white text-[4.5vw]">Order your favourite food here</h2>
            <p className="text-white text-[1vw]">Choose from the diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our mission is to satisfy your craving and elevate your dining experience, one delicious meal at a time.  </p>
            <button className="text-[#747474] bg-white rounded-full px-6 py-3 text-sm">View Menu</button>
        </div>
    </div>
  )
}

export default Hero