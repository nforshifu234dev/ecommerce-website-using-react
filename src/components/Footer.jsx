import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container bg-black p-8" >

      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">

        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="Logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            {/* Get shoes ready for the new term at your nearest nike store. Find your perfect size in store. Get rewards */}
            This ecommerce website is a fusion of <a href="/" target="_blank" className="text-coral-red" >FakeStore API</a>, <a href="/" target="_blank" className="text-coral-red" >Paystack API</a>, <a href="/" target="_blank" className="text-coral-red" >React JS</a>, 
            <a href="/" target="_blank" className="text-coral-red" >____ Youtube Video</a> & <a href="/" target="_blank" className="text-coral-red" >____ Youtube Video</a>. Click 
            <a href="/" target="_blank" className="text-coral-red" > here</a> to find out more
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon)=>(
              <a href={icon.url} target="_blank" rel="noreferrer" className="flex justify-center items-center w-12 h-12 bg-white rounded-full" key={icon.alt}>
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section)=>(
              <div key={section}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
                <ul>
                  {section.links.map((link)=>(
                    <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                      {/* <a href={link.link} {link.newTab ?? '' } >{link.name}</a> */}
                      <a href={link.link} target={link.newTab ? '_blank' : '_self' } rel="noopener noreferrer" >{link.name}</a>

                    </li>
                  ))}
                </ul>
              </div>
          ))}
        </div>

      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">

        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img src={copyrightSign} alt="Copyright" width={20} height={20} className="rounded-full m-0" />
          <p>Copyright. All Rights Reserved</p>
        </div>

        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>

      </div>

    </footer>
  )
}

export default Footer