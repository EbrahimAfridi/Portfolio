import profileImage from '../assets/profileImage.png'
import github from '../assets/icons/icons8-github.svg';
import linkedIn from '../assets/icons/icons8-linkedin (1).svg';
import twitter from '../assets/icons/icons8-twitter (1).svg';
import instagram from '../assets/icons/icons8-instagram.svg';

function HomePage () {
    return(
        <div className="grid grid-cols-3 gap-2 m-16 grid-rows-[95%]">
            
            {/* Text Grid */}
            <div className="selection:bg-black selection:text-white mb-20 col-start-1 col-end-3 pt-20 pl-5 text-5xl pr-36̥">
                I am <span className="font-bold ">Ebrahim Afridi </span>
                <br />
            <span className="text-2xl ">Front-end developer, community leader, freelancer, open source countributer and student.</span> 
            </div>
            {/* Image Grid */}
            <div className= "col-start-3 mb-20 ml-20 bg-black rounded-sm w-fit h-fit">
                <img className="h-[300px] select-none" src={profileImage} alt="Profile Picture" />
            </div>

            {/* Home Page Footer */}
            
            <div className="  flex flex-row items-center justify-between col-span-3 grid-rows-[5%]">
                <div className='flex flex-row gap-8 pl-4 select-none'>
                    
                    <a href="https://www.linkedin.com/in/ebrahim-afridi-83188b219/" target="_blank" rel="noopener noreferrer">
                        <img className='flex flex-row justify-between hover:cursor-pointe' src={linkedIn} alt="linked in logo" />
                    </a>
                    
                    <a href="https://twitter.com/EbrahimAfridi3" target="_blank" rel="noopener noreferrer">
                        <img className='flex flex-row justify-between hover:cursor-pointer ' src={twitter} alt="twitter logo" />
                    </a>
                    
                    <a href="https://github.com/EbrahimAfridi" target="_blank" rel="noopener noreferrer">
                        <img className='flex flex-row justify-between hover:cursor-pointer ' src={github} alt="github logo" />
                    </a>
                    
                    <a href="https://www.instagram.com/ebrahim_afridi12/" target="_blank" rel="noopener noreferrer">
                        <img className='flex flex-row justify-between hover:cursor-pointer ' src={instagram} alt="instagram logo" />
                    </a>
                
                </div>
                <a href="http://gmail.com" target="_blank" rel="noopener noreferrer" className='mr-12'>
                    <p className=' selection:bg-black selection:text-white hover:cursor-pointer font-rubik'>afridiebrahimck@gmail.com</p>
                </a>
                
            </div>
          
        </div>
    )
}

export default HomePage;