import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks } from "../constants";
import { socialMedia } from "../constants";

const Footer = () => {
  return (
    <div className="bg-black px-16 pt-16 max-sm:px-6 text-white ">
      <div className="flex flex-1 justify-between max-lg:gap-16 flex-wrap max-sm:justify-center">
        <div className="mr-18 ">
          <a href="/">
            <img src={footerLogo} alt="Footer Logo" width={155} height={45} />
          </a>
          <p className="max-w-sm text-white-400 font-montserrat leading-7 my-4">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex mt-6">
            {socialMedia.map((icon) => (
              <img
                className="bg-white p-3 rounded-full mr-6"
                src={icon.src}
                alt={icon.alt}
              />
            ))}
          </div>
        </div>
        {footerLinks.map((section) => (
          <div className="font-montserrat mb-01">
            <h4 className="text-2xl mb-8">{section.title}</h4>
            <ul>
              {section.links.map((item) => (
                <li className="text-white-400 my-3 hover:text-slate-gray">
                  <a href={item.link}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div
        className="flex justify-between font-montserrat flex-wrap max-sm:justify-center 
      text-white-400 pt-20 pb-10 max-sm:text-xs"
      >
        <div className="flex">
          <img src={copyrightSign} alt="copy right sign" className="mr-3" />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p>Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
