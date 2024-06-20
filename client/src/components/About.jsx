
import Image from "../../images/6.png";

const AboutUs = () => {
  return (
    <div id="about" className="w-full min-h-screen flex flex-col md:flex-row gradient-bg-services">

      <div className="w-full md:w-1/2 p-0 md:p-8 flex items-center justify-center ">
       
        
          <img
            src={Image}
            alt="About Us"
            className="w-full h-auto object-cover rounded-tr-full rounded-bl-ful"
          />
        </div>
  


      <div className="w-full md:w-1/2 p-4 md:p-8  bg-black flex items-center justify-center">
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-blue-500">
          About <span className="text-white">Us</span>
          </h2>        
          <p className="text-lg md:text-xl text-gray-400 mb-8">
          Our platform offers a wide range of land properties and investment opportunities, from residential and commercial plots to agricultural and industrial land. We leverage the latest technology and data analytics to provide our clients with accurate and up-to-date information, enabling them to make informed investment decisions.
            <br/>
            <br/>
            Our team of experts is committed to providing personalized service and tailored solutions to meet each client's unique needs and goals. We work closely with our clients to understand their investment objectives, risk tolerance, and time horizon, and provide customized recommendations and strategies to help them achieve their goals.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
