
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footerr = () => {
return (
  <div className="gradient-bg-transactions text-gray-400">
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-auto mb-4 md:mb-0">
          <h2 className="font-bold text-lg mb-2">Contact Me</h2>
           <a className="inline-block mr-4">
           <FaEnvelope className="inline-block mr-2" />
            Email
          </a>
        </div>

     
      <div className="w-full md:w-auto mb-4 md:mb-0">
          <h2 className="font-bold text-lg mb-2">Social Media</h2>
            <a className="inline-block mr-4">
            <FaInstagram className="inline-block mr-2" />
              Instagram
            </a>
            <a  className="inline-block mr-4">
            <FaLinkedin className="inline-block mr-2" />
              LinkedIn
            </a>
            <a  className="inline-block">
            <FaGithub className="inline-block mr-2" />
              GitHub
            </a>
        </div>
    </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between">
          <div className="text-sm text-gray-400">
            <p>Terms of Service | Contact Us | Social Media</p>
          </div>

          <div className="text-sm text-gray-400">
            <p>
            &copy; 2024 Mahmoud Raafat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footerr;