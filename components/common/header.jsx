import headercss from  '../../styles/header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
export default function Header() {
    return (
        <>
            <div className="w-full bg-black">
                <nav className="py-2 md:py-4 nav-bg">
                    <div className={`${headercss.container} px-4 mx-auto md:flex md:items-center`}>
                        <div className="flex justify-between items-center">
                            <a href="#" className="font-bold text-xl text-indigo-600">
                                <Image
                                    src="/images/logo.png"
                                    alt="logo"
                                    width={70}
                                    height={72}
                                />
                            </a>
                            <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                                <i className="fas fa-bars"></i>
                            </button>
                        </div>
                        <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                            <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 font-18">Home</a>
                            <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 font-18">About</a>
                            <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 font-18">Careers</a>
                            <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 font-18">Services</a>
                            <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 font-18">Projects</a>
                            <a href="#" className="p-2 lg:px-4 md:mx-2 text-white text-center border border-solid border-white-600 rounded hover:border-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1 font-18">Contact</a>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}