import profileImage from '../assets/profileImage.png'
import github from '../assets/icons/icons8-github.svg';
import linkedIn from '../assets/icons/icons8-linkedin (1).svg';
import twitter from '../assets/icons/icons8-twitter (1).svg';
import instagram from '../assets/icons/icons8-instagram.svg';

function HomePage () {
    return(
        <div>
            <div className="grid grid-rows-2 m-16 sm:grid-rows-1 sm:grid-cols-4 sm:gap-2">
            
                {/* Text Grid */}
                <div className="row-span-1 text-5xl sm:col-end-4 sm:col-start-1 selection:bg-black selection:text-white sm:mb-20 sm:pt-20 sm:pl-5 sm:pr-36 ">
                    <p>I am</p> <p className="mb-4 font-bold">Ebrahim Afridi </p>
                    <p className="text-lg leading-relaxed sm:leading-7 sm:text-2xl">Front-end developer, community leader, freelancer, open source countributer and student.</p> 
                </div>
                
                {/* Image Grid */}
                <div className= "col-start-1 row-start-2 bg-black rounded-sm sm:row-start-1 sm:col-start-4 w-fit h-fit sm:ml-20 sm:mb-20">
                    <img className="h-fit w-fit sm:h-[300px] select-none" src={profileImage} alt="Profile Picture" />
                </div>

                {/* Home Page Footer  Links */}
            
             <div className="flex flex-col col-span-4 gap-4 mt-8 sm:flex-row sm:items-center sm:justify-between">
                    <div className='flex flex-row gap-8 select-none sm:pl-4'>
                        
                        {/* Social Links */}
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

                    {/* Gmail Id Link */}
                    <a href="http://gmail.com" target="_blank" rel="noopener noreferrer" className=''>
                        <p className=' selection:bg-black selection:text-white hover:cursor-pointer font-rubik'>afridiebrahimck@gmail.com</p>
                    </a>
                    
                </div>
                
          
            </div>
             
    </div>
       
    )
}

export default HomePage;