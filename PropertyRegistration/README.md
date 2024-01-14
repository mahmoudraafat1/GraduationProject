# property Registration System with Blockchain  

<img src="https://img.shields.io/badge/Ethereum-20232A?style=for-the-badge&logo=ethereum&logoColor=white"> <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">



## Tech Stack Used:

	Frontend:
	* Javascript
    * React Framework
	* CSS
    * Metamask Chrome Extension

	Backend:
	* Ethereum Blockchain (Truffle Suite)
    * Solidity
    * Ganache


## Application features:  

Core Features:

    NFT-based Property Representation:
        Each property is represented as a unique NFT on the Hyperledger blockchain.
        NFTs store essential property details:
            Address
            Description
            Ownership history
            Legal documents (hashes or links)
            Property metadata (images, videos, 3D models)

    Decentralized Ownership Management:
        Transfer of ownership is recorded immutably on the blockchain.
        Clear and transparent ownership history for each property.
        Eliminates disputes and fraudulent claims.

    Role-Based Access Control (RBAC):
        Define roles with specific permissions:
            Buyer
            Seller
            Property inspector
            Government authorities
            Mortgage lenders
        Secure access and control over property data based on roles.

    Secure Property Inspections:
        Property inspectors can securely record inspection reports on the blockchain.
        Immutable history of property condition and maintenance records.

    Smart Contract-Based Transactions:
        Use Solidity smart contracts to automate and enforce:
            Property listings
            Offers and bidding
            Sale agreements
            Payment processing
            Title transfers
            Escrow services

Additional Features:

    NFT Marketplace Integration:
        Allow listing and trading of properties on a dedicated NFT marketplace.
    Property Valuation:
        Integrate with oracles or external data sources for property valuation.
    Mortgage and Lending:
        Facilitate mortgage applications and loan disbursements through smart contracts.
    Regulatory Compliance:
        Implement KYC/AML checks and adhere to local regulations.
    Dispute Resolution:
        Utilize blockchain-based dispute resolution mechanisms for property-related conflicts.

Development Tools:

    Solidity: Smart contract language for defining property ownership logic and transactions.
    Truffle: Development framework for building, testing, and deploying contracts on Hyperledger.

Key Considerations:

    Hyperledger Framework: Choose the appropriate Hyperledger framework (Fabric, Sawtooth, Besu) based on specific needs and network requirements.
    Integration with External Systems: Integrate with existing real estate databases, government registries, and financial systems for seamless data exchange.
    User Experience: Design user-friendly interfaces for property owners, buyers, inspectors, and other stakeholders to interact with the system effectively.

  



## Steps to run the application:
1. Clone the github repository and cd to the folder 
2. Open _Ganache_ and keep it running in the Background.
3. Make sure you have Metamask Extension in your browser.
4. In the root directory run _truffle migrate --reset_.
5. cd to the _client_ folder and run _npm install_.
6. Run _npm start_.

