<h1 align="center">My Real Estate</h1>
<p align="center">My Real Estate - Blockchain-powered Real Estate Platform</p>
<p align="center">
  

![blockchain](https://github.com/mahmoudraafat1/GraduationProject/assets/81190585/dc5f5e77-9da6-49a0-9d06-257610de3638)

</p>
<h1 align="center">Project Description </h1>

My Real Estate is an innovative real estate project that aims to revolutionize the industry by leveraging the power of blockchain technology. The project focuses on developing a user-friendly web application that enables seamless buying and selling of real estate properties while ensuring transparency, security, and immutability of transactions. This project will be implemented in two or three phases, with the initial phase involving the integration of blockchain technology for transactional purposes, and the subsequent phase incorporating Non-Fungible Tokens (NFTs) to establish property ownership.

Importance of Blockchain in the Real Estate Field:
Blockchain technology offers a multitude of benefits to the real estate industry, addressing various challenges and providing unprecedented opportunities. By utilizing blockchain, My Real Estate aims to overcome the following key issues:

Transparency and Trust: Blockchain's decentralized nature ensures transparency, making it possible to track and verify property ownership, historical transactions, and legal records. This fosters trust among buyers, sellers, and other stakeholders involved in real estate transactions.

Security and Fraud Prevention: The blockchain's immutable and tamper-proof nature provides enhanced security, reducing the risk of fraud, forgery, and unauthorized alterations to property records. Smart contracts, written in Solidity using the Hardhat framework, further strengthen security by automating contract execution and eliminating the need for intermediaries.

Efficiency and Cost Reduction: By utilizing blockchain technology, the real estate process can be streamlined, reducing paperwork, minimizing the need for intermediaries, and eliminating manual errors. This leads to increased efficiency, reduced costs, and faster transaction settlements.

Project Phases:

Phase 1 - Real Estate Web App with Blockchain Integration:
In the initial phase, My Real Estate will develop a web application using React.js for the frontend and integrate blockchain technology for transactional purposes. The web app will provide a user-friendly interface for buying and selling real estate properties. Users will be able to browse available properties, view property details, place bids, and execute transactions securely using MetaMask wallet integration with the Ethereum network.

The backend infrastructure will be built using the Hardhat framework, and smart contracts written in Solidity will facilitate the execution of transactions. These smart contracts will ensure the secure transfer of property ownership, handle escrow services, and maintain an immutable record of all transactions on the blockchain.

Phase 2 and 3 - Ownership Establishment using NFTs:
Building upon the success of Phase 1, the second phase of the project will introduce Non-Fungible Tokens (NFTs) to establish ownership of real estate properties. By tokenizing properties as unique NFT assets, My Real Estate will provide individuals with digital certificates of ownership that can be securely transferred and verified on the blockchain. This will enable fractional ownership, facilitate property investment, and open up new opportunities for liquidity and asset diversification.

<hr>

<h1 align="center">🚀 Folder Structure</h1>

clinet --> Vite(React JS) for the front-end

```

└── client/
    ├── src/
    │   ├── assets/
    |   ├── context/
    |            └── TransactionContext.jsx
    |   ├── hooks/
    |   ├── utlis/
    |            └── adress.js
    |            └── constant.js
    |   ├── components/
    |            └── Client.jsx
    |            └── Contact.jsx
    |            └── Footer.jsx
    |            └── Home.jsx
    |            └── index.js
    |            └── Loader.jsx
    |            └── Navbar.jsx
    |            └── Services.jsx
    |            └── Transactions.jsx
    |            └── Welcome.jsx
    └── App.css
    └── App.jsx
    └── index.css
    └── main.jsx

```

backend --> HardHat for the block chain and solidity(Smart Contract)

```

└── backend/
    │   ├── contracts/
    |            └── Lock.sol
    |   ├── scripts/
    |            └── deploy.js
    |   ├── test/
    |            └── Lock.js
    └── hardhat.config.js

```

server --> Express for NodeJs


<hr>
<h1 align="center">🚀 How to run the project</h1>

<p align="left">For the client side</p>

1) Open terminal
2) write cd client
3) npm install
4) write npm run dev
5) client side has been initialized  ✔ ✔ 

client --> cd client --> npm run dev

------------------------------------

<p align="left">For the backend side</p>

backend --> cd backend --> npm install

1) For Compiling : npx hardhat compile
2) For Testing   : npx hardhat test 
3) For Deploying : npx hardhat run --network <your-network> scripts/deploy.js ✔ ✔ 

------------------------------------

<p align="left">For the server side</p>

server --> cd server --> ??

<hr>

## Author(s)
**Mostafa Hassan**
</br>
**Mahmoud Raafat**
<hr>
<h1 align="center">Languages and Tools that used in this project</h1>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
      </a><a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
      </a>
      <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
      </a><a href="https://reactjs.org/" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/>
      </a><a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
        <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/>
      </a>
       </a><a href="https://solidity/" target="_blank" rel="noreferrer">
        <img src="Solidity" alt="solidity" width="40" height="40"/>
      </a>
       </a><a href="https://hardhat/" target="_blank" rel="noreferrer">
        <img src="Hardhat" alt="hardhat" width="40" height="40"/>
      </a>
