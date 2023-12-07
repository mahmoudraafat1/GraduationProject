import { useState } from "react";
import  { useContext } from "react";
import { propertyList } from "../data/Data";
import { TransactionContext } from "../context/TransactionContext";
import Loader from './Loader';

//const companyCommonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

// eslint-disable-next-line react/prop-types
const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);
const Features = () => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const {handleChange, sendTransaction, formData,isLoading} = useContext(TransactionContext);

 
  const handlePropertyClick = (property) => {
    setSelectedProperty(property);
  };

  const handleBuyNowClick = (e) => {
    if (selectedProperty) {
      console.log("Buy now clicked for property:", selectedProperty.ethPrice);
      // Perform any necessary actions, such as navigating to a checkout page
      const { addressTo, propertyprice, propertyname } = formData;

      e.preventDefault();
    
      if (!addressTo || !propertyprice || !propertyname) return;
    
      sendTransaction();
    
      window.alert("Connecting to Meta Mask....");
      //e.target.reset();
      
    }
  };

  const handleCloseClick = () => {
    setSelectedProperty(null);
  };

  return (
    <div id="home" className="w-full min-h-screen p-2 flex items-center gradient-bg-services">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6">
          Feature <span className="text-red-500">Properties</span>
        </h2>
        <p className="text-lg text-white mb-8">
          Here are some of our featured properties
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {propertyList.map((property) => (
            <div
              key={property.id}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 white-glassmorphism"
              onClick={() => handlePropertyClick(property)}
            >
              <div className="bg-transparent rounded-lg shadow-lg">
                <img
                  src={property.image}
                  alt="Property"
                  className="w-full max-h-64 object-cover rounded-t-lg h-1/3 md:h-64"
                />
                <div className="py-6 px-4">
                  <h3 className="text-lg font-medium text-gray-400">
                    {property.address}
                  </h3>
                  <p className="text-sm text-red-500">{property.description}</p>
                  <p className="text-lg font-bold text-gray-300 mt-4">
                    {property.price}
                  </p>
                  <p className="text-lg font-bold text-green-300 mt-4">
                    {property.ethPrice} <span>ETH</span>
                  </p>
                  <button
                    className="mt-6 px-4 py-2 bg-white text-black rounded-md hover:bg-gray-400"
                    onClick={handleBuyNowClick}
                  >
                    View details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProperty && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 home__details  ">
           <div className='home__details'>     
                <div className="home__overview">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 home__close"
            onClick={handleCloseClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            
          </button>
          </div>
          <br/>
           <div className="mr-6">
          <img src={selectedProperty.image} alt="Property" className="w-80 h-60 object-cover rounded-lg" />
          <br/>
        </div>
        <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
          <p>Buy Property Form</p>
            <Input placeholder="Account Seller Address" name="addressTo" type="text" handleChange={handleChange} />
            <Input placeholder="Property Price" name="propertyprice" type="number" handleChange={handleChange} />         
            <Input placeholder="Property Name" name="propertyname" type="text" handleChange={handleChange} />
          
                 
          </div>
          <h2 className="text-2xl font-semibold mb-4">Property Name : {selectedProperty.address}</h2>
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          
          <h5 className="text-gray-500 mb-4">You can buy this property using Ethereum or dollars</h5>
          <p className="text-lg font-bold text-green-500 mb-4">For buying this property</p>
         
          <p className="text-lg font-bold text-green-500 mb-4">Eth Price: {selectedProperty.ethPrice} <span>ETH</span></p>
          <h2 className="text-1xl text-red-500 mb-4">

          Account Seller 
          <br/>
          {selectedProperty.account}
            <span className="text-gray-400 mb-4" ></span>

          </h2>
          <p className="text-lg font-bold text-gray-700 mb-4">Price: {selectedProperty.price}</p>
         
              <button
                className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
                onClick={handleBuyNowClick}
              >
                  {isLoading
              ? <Loader/>
              : (<p>Buy Now</p> )}
              </button>
        
        </div>
        </div>
        
      )}
    </div>
  );
};

export default Features;