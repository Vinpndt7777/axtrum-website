import headercss from '../../styles/header.module.scss'
export default function Footer() {
  return (
    <>
      <div className="footer-2 nav-bg pt-6 md:pt-12">
        <div className={`${headercss.container} px-4 mx-auto"`}>

          <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">

            <div className="footer-info lg:w-1/3 md:px-4">
              <h4 className="text-white text-2xl mb-4">Why Axtrum?</h4>
              <p className="text-gray-400">We craft solutions to your business problems, technology included! With a fresh new approach and innovative out of the box holistic thinking, we constantly review if there is a better, smarter and more efficient way of doing things.</p>
            </div>

            <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-10 mt-12 lg:mt-0">
              <div className="sm:flex">
                <div className="sm:flex-1">
                  <h6 className="text-base font-medium text-white uppercase mb-2">About</h6>
                  <div>
                    <a href="#" className="text-gray-400 py-1 block hover:underline">Company</a>
                    <a href="#" className="text-gray-400 py-1 block hover:underline">Projects</a>
                    <a href="#" className="text-gray-400 py-1 block hover:underline">Services</a>
                    <a href="#" className="text-gray-400 py-1 block hover:underline">Careers</a>
                  </div>
                </div>
                <div className="sm:flex-1 mt-4 sm:mt-0">
                  <h6 className="text-base font-medium text-white uppercase mb-2">Address</h6>
                  <div>
                    <p className="text-gray-400 py-1 block hover:underline">Axtrum Solutions Limited
                      Kemp House
                      152-160 City Road
                      London, EC1V 2NX</p>
                    <p className="text-gray-400 py-1 block hover:underline">Unit No. 1206, Express Trade Towers2
                      B-36, Sector 132, Noida
                      Uttar Pradesh 201304
                      </p>

                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 md:px-4 md:text-right mt-12 lg:mt-0">
              <h5 className="text-lg text-white font-medium mb-4">Want to know more</h5>
              <p className="text-gray-400 py-1 block hover:underline mb-4">We are here to listen and help. Get in touch today to start the conversation.</p>
              <button className="bg-indigo-600 text-white hover:bg-indigo-700 rounded py-2 px-6 md:px-12 transition-colors duration-300">Lets make it happen</button>
            </div>

          </div>

        </div>

        <div className="border-t border-solid border-gray-900 mt-4 py-4">
          <div className={`${headercss.container} px-4 mx-auto"`}>

            <div className="md:flex md:-mx-4 md:items-center">
              <div className="md:flex-1 md:px-4 text-center md:text-left">
                <p className="text-white">&copy; <strong>Axtrum</strong></p>
              </div>
              <div className="md:flex-1 md:px-4 text-center md:text-right">
                <a href="#" className="py-2 px-4 text-white inline-block hover:underline">Terms of Service</a>
                <a href="#" className="py-2 px-4 text-white inline-block hover:underline">Privacy Policy</a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </>
  )
}