import  { useContext } from "react";

import { TransactionContext } from "../context/TransactionContext";

//import useFetch from "../hooks/useFetch";
//import dummyData from "../utils/dummyData";
import { shortenAddress } from "../utils/address";
import block from "../../images/block.png"
// eslint-disable-next-line react/prop-types
const TransactionsCard = ({ addressTo, addressFrom, timestamp, propertyname, propertyprice }) => {
 

  return (
    <div className="bg-[#181918] m-4 flex flex-1
      2xl:min-w-[450px]
      2xl:max-w-[500px]
      sm:min-w-[270px]
      sm:max-w-[300px]
      min-w-full
      flex-col p-3 rounded-md hover:shadow-2xl
      hover:scale-110 duration-500"
    >
      <div className="flex flex-col items-center w-full mt-3">
        <div className="display-flex justify-start w-full mb-6 p-2">
          <a href={`https://sepolia.etherscan.io/address/${addressFrom}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">Buyer Address: {shortenAddress(addressFrom)}</p>
          </a>
          <a href={`https://sepolia.etherscan.io/address/${addressTo}`} target="_blank" rel="noreferrer">
            <p className="text-white text-base">Seller Address: {shortenAddress(addressTo)}</p>
          </a>
          <p className="text-white text-base">Property Price: {propertyprice} ETH</p>
          {propertyname && (
            <>
              <br />
              <p className="text-white text-base">Property Name: {propertyname}</p>
            </>
          )}
        </div>
        <img
          src={block}
          alt="nature"
          className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"
        />
        <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
          <p className="text-[#37c7da] font-bold">{timestamp}</p>
        </div>
      </div>
    </div>
  );
};

const Transactions = () => {
  const {currentAccount , transactions} = useContext(TransactionContext);

  return (
    <div name="transactions" className="flex w-full min-h-screen justify-center items-center 2xl:px-20 gradient-bg-services">
      <div className="flex flex-col md:p-12 py-12 px-4">
        {currentAccount ? (
          <h3 className="text-white text-3xl text-center my-2">
            Latest Property Transactions
          </h3>
          
        ) : (
          <h3 className="text-white text-3xl text-center my-2">
            Connect your account to see the latest transactions
          </h3>
        )}

        <div className="flex flex-wrap justify-center items-center mt-10">
          {transactions.reverse().map((transaction, i) => (
            <TransactionsCard key={i} {...transaction} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;