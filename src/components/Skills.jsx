import tailwind from '../assets/icons/tailwind-svgrepo-com.svg'
import javascript from '../assets/icons/javascript-155-svgrepo-com.svg'
import react from '../assets/icons/react-svgrepo-com.svg'
import css from '../assets/icons/css.svg'
import html from '../assets/icons/html.svg'
import linux from '../assets/icons/terminal-linux-svgrepo-com.svg'
import bash from '../assets/icons/bash.svg'
import git from '../assets/icons/git-svgrepo-com.svg'

function Skills(){
    return(
        <div className='p-5 m-16 mt-0 selection:bg-black selection:text-white'>
            <p className='mb-10 text-4xl font-black'>Skills</p>
            
            {/* Skills grid */}
            <div className='grid grid-cols-2 gap-12 sm:grid-cols-3 md:grid-flow-row'>
                <div className='col-span-1'>
                    <img className='block h-8 mb-4 mr-4 select-none sm:inline' src={html} alt="html logo" />
                    <p className='block text-lg sm:inline '>HTML 5</p>
                </div>
                <div className='col-span-1 '>
                    <img className='block h-8 mb-4 mr-4 select-none sm:inline' src={css} alt="css logo" />
                    <p className='block text-lg sm:inline '>CSS 3</p>
                </div>
                <div className='col-span-1'>
                    <img className='block h-8 mb-4 mr-4 select-none sm:inline' src={tailwind} alt="tailwind logo" />
                    <p className='block text-lg sm:inline'>Tailwind</p>
                </div>
                <div className="col-span-1 ">
                    <img className='block h-8 mb-4 mr-4 select-none sm:inline' src={javascript} alt="javascript logo" />
                    <p className='block text-lg sm:inline'>JavaScript</p>
                </div>
                <div className='col-span-1 '>
                    <img className='block mb-4 select-none sm:mr-4 sm:inline h-9' src={react} alt="react logo" />
                    <p className='block text-lg sm:inline'>React</p>
                </div>
            </div>

            <hr className='mt-8 mb-8 border-[1.3px] border-[#a09e9e]'/>
            
            <div className='grid grid-cols-3 gap-12 md:grid-flow-row'>
                <div className='col-span-1 '>
                    <img className='block mr-4 select-none sm:inline ' src={git} alt="git logo" />
                    <p className='block ml-2 text-lg sm:inline'>Git</p>
                </div> 
                <div className='col-span-1 '>
                    <img className='block mr-4 select-none sm:inline' src={linux} alt="linux logo" />
                    <p className='block text-lg sm:inline '>Linux</p>
                </div>
                <div className='col-span-1 '>
                    <img className='block mr-4 select-none sm:inline' src={bash} alt="bash logo" />
                    <p className='block ml-1 text-lg sm:inline'>Bash</p>
                </div>
            </div>
            
        </div>
    )
}

export default Skills;