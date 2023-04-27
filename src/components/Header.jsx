
function Header () {
    return(
        <div className="flex items-center justify-between px-20 py-10 ">
            <img className="hover:cursor-pointer" src="../../public/vite.svg" alt="Logo" />
            <div className="flex gap-6 hover:cursor-pointer justify-evenly">
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