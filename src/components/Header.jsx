
function Header () {
    return(
        <div className="items-center justify-between hidden px-12 py-5 sm:flex sm:py-10 sm:px-20 selection:bg-black selection:text-white">
           
            <img className="select-none hover:cursor-pointer" src="../../public/vite.svg" alt="Logo" />
           
            {/* Right Part */}
            <div className="flex sm:gap-6 hover:cursor-pointer justify-evenly">
                <a href="#" rel="noopener noreferrer">
                <span className="hover:underline underline-offset-4">Home</span>
                </a>
                <span className="hover:underline underline-offset-4">Service</span>
                <span className="hover:underline underline-offset-4">Experience</span>
                <span className="hover:underline underline-offset-4">Skills</span>
                <a href="http://linktr.ee/ebrahimafridi" target="_blank" rel="noopener noreferrer">
                    <span className="hover:underline underline-offset-4">Contact</span>
                </a>
            </div>
        </div>
    )
}

export default Header;