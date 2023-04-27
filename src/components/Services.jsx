import website from '../assets/icons/website-svg.svg'
import freelance from '../assets/icons/freelancer-new.svg'
import teacher from '../assets/icons/online-teacher.svg'
function Services(){
    return(
        <div className="p-5 m-16">
            <div className="mb-16 text-3xl font-black text-[212121] ">
                What I do?
            </div>
            
            <div className="flex flex-row gap-4">
                <div className="flex flex-col items-start gap-4 basis-1/3">
                    <img className='h-14 ' src={website} alt="" />
                    <h4 className='text-xl font-bold'>Website</h4>
                    <p>
                    I create visually stunning and fully functional websites.
                    I specialize in coding languages like HTML, CSS, and JavaScript and React.
                    </p>    
                </div>
                <div className="flex flex-col items-start gap-4 basis-1/3">
                    <img className='h-14 ' src={freelance} alt="" />
                    <h4 className='text-xl font-bold'>Freelance</h4>
                    <p>
                        I am a freelance web developer with many satisfied clients from my service. I am open to new projects.
                    </p>    
                </div>
                <div className="flex flex-col items-start gap-4 basis-1/3">
                    <img className='h-14' src={teacher} alt="" />
                    <h4 className='text-xl font-bold'>Coaching</h4>
                    <p>I coach students and help them learn to code and build projects with solution to real world problems.</p>    
                </div>
            </div>
        </div>
    )
}

export default Services;