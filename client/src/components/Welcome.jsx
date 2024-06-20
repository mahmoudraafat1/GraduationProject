import Image from "../../images/main.png";
import { AiFillPlayCircle } from "react-icons/ai";
import { useContext } from "react"; // Import the useContext hook
import { TransactionContext } from "../context/TransactionContext";

const Welcome = () => {
  const companyCommonStyles =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

  // Retrieve the required variables and functions from the context
  const { currentAccount, connectWallet} = useContext(TransactionContext);

 

  return (
    <div id="welcome" className="w-full min-h-screen p-8 flex items-center gradient-bg-home">
      <div className="max-w-7xl mx-auto md:flex md:flex-row-reverse md:items-center">
        <div className="md:w-1/2 md:pr-8 my-11">
          <img
            src={Image}
            alt="Home"
            className="w-full h-auto object-cover rounded-tr-full rounded-bl-full"
          />
        </div>
        <div className="md:w-1/2 md:pl-8">
          <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">

<span className="text-blue-500">Find Your</span> <span className="text-white">Land</span>

</h1>
            <p className="text-lg text-gray-400 mb-8">
            Welcome to our premier land property and investment trading platform, where finding the right investment opportunity is our top priority. Our team of experienced professionals is dedicated to providing exceptional service and helping you navigate the complex world of land property and investment trading
            </p>

            <div className="text-center md:text-left">
              <div className="grid sm:grid-cols-4 grid-cols-2 mt-10">
                <div className={`${companyCommonStyles}`}>Web 3.0</div>
                <div className={companyCommonStyles}>Ethereum</div>
                <div className={`${companyCommonStyles}`}>MetaMask</div>
                <div className={`${companyCommonStyles}`}>Blockchain</div>
              </div>
              <br />
              <div className="flex flex-row sm:flex-row items-center">
                {!currentAccount ? (
                  <button
                    type="button"
                    onClick={connectWallet}
                    className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] px-20"
                  >
                    <AiFillPlayCircle className="text-white mr-2" />
                    <p className="text-white text-base font-semibold">Connect Wallet</p>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={connectWallet}
                    className="flex flex-row justify-center items-center my-5 bg-green-500 p-3 rounded-full cursor-pointer hover:bg-green-700 px-20"
                  >
                    <AiFillPlayCircle className="text-white mr-2" />
                    <p className="text-white text-base font-semibold">Connected</p>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;