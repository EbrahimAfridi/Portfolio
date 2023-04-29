import instagram from '../assets/icons/icons8-instagram.svg'
import twitter from '../assets/icons/icons8-twitter (1).svg'
import github from '../assets/icons/icons8-github.svg'
import linkedin from '../assets/icons/icons8-linkedin (1).svg'

function ReachOut(){
    return(
        <div className="grid gap-2 m-16 mt-20 mb-24 gird-rows-2 sm:grid-cols-2">
            <div className="grid ">
                <p className="mt-4 mb-12 text-4xl font-bold selection:bg-black selection:text-white">
                    Just say hi.
                </p>
                <p className="text-xl leading-relaxed sm:mr-32 sm:mb-12 selection:bg-black selection:text-white">
                    I'm always open to discuss your project and talk about new things.
                </p>
                <div className="grid mt-8 sm:grid-cols-2 selection:bg-black selection:text-white">
                    <div>
                        <p className="mb-2 font-thin sm:mb-4">Mail me at</p>
                        <a href="http://gmail.com" target="_blank" rel="noopener noreferrer">
                            afridiebrahimck@gmail.com
                        </a>
                    </div>
                    <div>
                        <p className="mt-4 mb-3 font-thin sm:mt-0">Follow me</p>
                        <div className="flex flex-row items-center gap-5 mb-20 select-none sm:mb-0 ">
                            <a href="https://www.linkedin.com/in/ebrahim-afridi-83188b219/" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="linkedin logo" />
                            </a>
                            <a href="https://github.com/EbrahimAfridi" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="github logo" />
                            </a>
                            <a href="https://twitter.com/EbrahimAfridi3" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="twitter logo" />
                            </a>
                            <a href="https://www.instagram.com/ebrahim_afridi12/" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="instagram logo" />
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
            
            {/* Black Box */}
            <div className='selection:bg-black selection:text-white bg-[#212121] p-8'>
                <div>
                    <input type="text" placeholder='Your name' className='placeholder:text-[#F1F1F1] text-sm text-[#F1F1F1] bg-transparent w-full outline-none ' />
                    <hr className='mt-1 mb-6 text-[#F1F1F1]'/>
                </div>
                <div>
                    <input type="email" placeholder='Your email address' className='placeholder:text-[#F1F1F1] text-sm text-[#F1F1F1] bg-transparent w-full outline-none ' />
                    <hr className='mt-1 mb-6 text-[#F1F1F1]'/>
                </div>
                <div>
                    <input type="text" placeholder='Your budget (optional)' className='placeholder:text-[#F1F1F1] text-sm text-[#F1F1F1] bg-transparent w-full outline-none ' />
                    <hr className='mt-1 mb-6 text-[#F1F1F1]'/>
                </div>
                <div>
                    <input type="text" placeholder='Your project description' className=' placeholder:text-[#F1F1F1] text-sm text-[#F1F1F1] bg-transparent w-full outline-none ' />
                    <hr className='mt-16 mb-6 text-[#F1F1F1]'/>
                </div>
                <div className='flex flex-row-reverse'>
                    <button type="submit" className='bg-[#F1F1F1] text-[#3f3f3f] text-thin px-4 py-1'>SUBMIT</button>
                </div>
            </div>
        </div>
    )
}

export default ReachOut;