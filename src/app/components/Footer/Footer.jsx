import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../public/logo-icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FooterSocial from './FooterSocial';

const Footer = () => {
  return (
    <div>
      <div className='h-[728px] w-screen bg-black flex justify-center items-center'>
        <div className='h-[70%] w-[80%]  flex justify-around spay'>
          <div className='w-[30%] flex flex-col  h-full space-y-7 '>
            <div className='flex items-center'>
              <Logo />
              <p className='text-6xl'>Rasm</p>
            </div>
            <p>Centric applications productize front end portals visualize front end.</p>
            <div className='flex space-x-6 items-center '>
              <div className='h-10 w-10 bg-[#AB6A49] flex justify-center items-center'>
                <FontAwesomeIcon icon={faPhone} className='fa-light text-white' />
              </div>
              <p className='text-xl'>+256 214 203 215</p>
            </div>
            <div className='flex space-x-6 items-center '>
              <div className='h-10 w-10 bg-[#AB6A49] flex justify-center items-center'>
                <FontAwesomeIcon icon={faEnvelope} className='fa-light text-white' />
              </div>
              <p className='text-xl'>info@rasm.com</p>
            </div>
            <FooterSocial />
          </div>

          {/** second part */}
          <div className='w-[20%] h-[80%]  flex-col flex justify-between '>
            <p className='text-4xl font-semibold'>Quick Links</p>
            <p className='cursor-progress'>-- About Us</p>
            <p>-- Work Gallery</p>
            <p>-- Privacy Policy</p>
            <p>-- Our Services</p>
            <p>-- Pricing Plans</p>
            <p>-- Contact Us</p>
          </div>
          <div className='w-[20%] h-[80%]  flex-col flex justify-between '>
            <p className='text-4xl font-semibold'>Quick Links</p>
            <p>-- Hands & Feet</p>
            <p>-- Facials Waxing</p>
            <p>-- Body Waxing</p>
            <p>-- Brows & Lashes</p>
            <p>-- Body Massage</p>
            <p>-- Nail Art</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
