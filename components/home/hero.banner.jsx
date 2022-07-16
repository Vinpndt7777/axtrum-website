import headercss from '../../styles/header.module.scss'
export default function HeroBanner() {
    return (
        <>
            <div className={`${headercss.bgimage}  bg-blue-100 p-32 text-center`}>

                <h1 className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Welcome to Axtrum</h1>

                <p className="text-gray-700 text-lg mb-8">Technology enabled business solutions</p>

                <div className="space-x-2">
                    <a href="#" className="py-3 px-8 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 rounded-lg hover:shadow-xl transition duration-300">Find out more</a>
                </div>

            </div>
        </>
    )
}