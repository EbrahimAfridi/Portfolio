import instagram from '../assets/icons/icons8-instagram.svg'
import twitter from '../assets/icons/icons8-twitter (1).svg'
import github from '../assets/icons/icons8-github.svg'
import linkedin from '../assets/icons/icons8-linkedin (1).svg'

function ReachOut(){
    return(
        <div className="grid grid-cols-2 gap-2 m-16 mb-24">
            <div className="grid grid-rows-3">
                <p className="mt-4 mb-12 text-4xl font-bold selection:bg-black selection:text-white">Just say hi.</p>
                <p className="mb-12 mr-32 text-xl selection:bg-black selection:text-white">I'm always open to discuss your project and talk about new things.</p>
                <div className="grid grid-cols-2 mt-8 selection:bg-black selection:text-white">
                    <div>
                        <p className="mb-4 font-thin">Mail me at</p>
                        <a href="http://gmail.com" target="_blank" rel="noopener noreferrer">afridiebrahimck@gmail.com</a>
                    </div>
                    <div>
                        <p className="mb-3 font-thin">Follow me</p>
                        <div className="flex flex-row items-center gap-5 select-none ">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <img src={linkedin} alt="" />
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="" />
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <img src={twitter} alt="" />
                            </a>
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <img src={instagram} alt="" />
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