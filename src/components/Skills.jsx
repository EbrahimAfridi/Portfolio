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
        <div className='p-5 m-16'>
            <p className='mb-10 text-4xl font-black '>Skills</p>
            
            <div className='grid grid-cols-3 gap-12 md:grid-flow-row'>
                <div className='col-span-1'>
                    <img className='inline mr-4' src={html} alt="" />
                    <p className='inline text-lg'>HTML 5</p>
                </div>
                <div className='col-span-1 '>
                    <img className='inline mr-4' src={css} alt="" />
                    <p className='inline text-lg'>CSS 3</p>
                </div>
                <div className='col-span-1'>
                    <img className='inline mr-4' src={tailwind} alt="" />
                    <p className='inline text-lg'>Tailwind</p>
                </div>
                <div className="col-span-1 ">
                    <img className='inline mr-4' src={javascript} alt="" />
                    <p className='inline text-lg'>JavaScript</p>
                </div>
                <div className='col-span-1 '>
                    <img className='inline mr-4' src={react} alt="" />
                    <p className='inline text-lg'>React</p>
                </div>
            </div>

            <hr className='mt-8 mb-8 border-[1.3px] border-[#a09e9e]'/>
            
            <div className='grid grid-cols-3 gap-12 md:grid-flow-row'>
                <div className='col-span-1 '>
                    <img className='inline mr-4' src={git} alt="" />
                    <p className='inline text-lg'>Git</p>
                </div>
                <div className='col-span-1 '>
                    <img className='inline mr-4' src={linux} alt="" />
                    <p className='inline text-lg'>Linux</p>
                </div>
                <div className='col-span-1 '>
                    <img className='inline mr-4' src={bash} alt="" />
                    <p className='inline text-lg'>Bash</p>
                </div>
            </div>
            
        </div>
    )
}

export default Skills;