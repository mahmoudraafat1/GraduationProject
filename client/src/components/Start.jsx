import { useNavigate } from "react-router-dom";

const Start = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/signup");
  };

  return (
    <div name="start" className='hero-container'>
      <video src='../../images/video-1111.mp4' autoPlay loop muted />
      <h1>My Real Estate</h1>
      <p className="text-lg md:text-xl lg:text-2xl">Explore the power of blockchain to buy and sell properties</p>
      <div className="flex flex-col md:flex-row items-center">
        <button
          type="button"
          className="flex justify-center items-center my-5 border-2 border-white bg-black p-3 rounded-full cursor-pointer hover:bg-[#2546bd] px-8 md:px-12 lg:px-16 mx-2 md:mx-4 transition-colors duration-500 transform-gpu hover:scale-105"
          onClick={handleLoginClick}
        >
          <p className="text-white text-base md:text-lg lg:text-xl font-semibold">Log In</p>
        </button>
        <button
          type="button"
          className="flex justify-center items-center my-5 border-2 border-white bg-black p-3 rounded-full cursor-pointer hover:bg-[#2546bd] px-8 md:px-12 lg:px-16 mx-2 md:mx-4 transition-colors duration-500 transform-gpu hover:scale-105"
          onClick={handleSignUpClick}
        >
          <p className="text-white text-base md:text-lg lg:text-xl font-semibold">Sign Up</p>
        </button>
      </div>
    </div>
  );
};

export default Start;