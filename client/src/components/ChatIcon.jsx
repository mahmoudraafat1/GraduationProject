import { useState } from 'react';
import { Segment } from 'semantic-ui-react';
import ChatBot from 'react-simple-chatbot';
import { propertyList } from "../data/Data";
import PropTypes from 'prop-types';
const PropertyRecommendation = ({ selectedProperty }) => {
  return (
    <div>
      {selectedProperty ? (
        <div>
          <p>Based on your preferences, I recommend the following property:</p>
       
            Address: {selectedProperty.address}
            <br />
            Description: {selectedProperty.description}
            <br />
            Price: {selectedProperty.price}
            <br />
            ETH Price: {selectedProperty.ethPrice}
        </div>
      ) : (
        <div>
          <p>Sorry, I could not find a property that matches your preferences.</p>
        </div>
      )}
    </div>
  );
};

PropertyRecommendation.propTypes = {
  selectedProperty: PropTypes.shape({
    address: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    ethPrice: PropTypes.string.isRequired,
  }),
};

const Chat = () => {
  const [showChat, setShowChat] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const handleEnd = ({values }) => {
    
    const beds = parseInt(values["beds"]);
    const baths = parseInt(values["baths"]);
    const ethPrice = parseFloat(values["ethPrice"]);
    const squareFeet = parseInt(values["squarefeet"]);

    const filteredProperties = propertyList.filter(
      (property) =>
        property.beds === beds &&
        property.baths === baths &&
        property.ethPrice <= ethPrice &&
        property.squarefeet >= squareFeet
    );

    const randomIndex = Math.floor(Math.random() * filteredProperties.length);
    const recommendedProperty = filteredProperties[randomIndex];

    setSelectedProperty(recommendedProperty);
  };

  const steps = [
    {
      id: '1',
      message: 'How many bedrooms are you looking for?',
      trigger: 'beds',
    },
    {
      id: 'beds',
      user: true,
      trigger: '2',
      validator: (value) => {
        if (isNaN(value)) {
          return 'Please enter a valid number.';
        }
        return true;
      },
    },
    {
      id: '2',
      message: 'How many bathrooms are you looking for?',
      trigger: 'baths',
    },
    {
      id: 'baths',
      user: true,
      trigger: '3',
      validator: (value) => {
        if (isNaN(value)) {
          return 'Please enter a valid number.';
        }
        return true;
      },
    },
    {
      id: '3',
      message: 'What is your preferred price range in ETH?',
      trigger: 'ethPrice',
    },
    {
      id: 'ethPrice',
      user: true,
      trigger: '4',
      validator: (value) => {
        if (isNaN(value)) {
          return 'Please enter a valid number.';
        }
        return true;
      },
    },
    {
      id: '4',
      message: 'What is your preferred square footage?',
      trigger: 'squareFeet',
    },
    {
      id: 'squareFeet',
      user: true,
      trigger: '5',
      validator: (value) => {
        if (isNaN(value)) {
          return 'Please enter a valid number.';
        }
        return true;
      },
    },
    {
      id: '5',
      component: <PropertyRecommendation selectedProperty={selectedProperty} />,
      asMessage: true,
    
    },
  ];

  return (
    <div>
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          borderRadius: '50%',
          backgroundColor: 'white',
          padding: '10px',
          cursor: 'pointer',
          zIndex: '999',
          width: '60px',
          height: '60px',
        }}
        onClick={toggleChat}
      >
        <img src="../../images/bot.png" alt="Chat icon" />
      </div>
      {showChat && (
        <Segment
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '400px',
            height: '580px',
            zIndex: '111',
          }}
        >
          <ChatBot steps={steps} handleEnd={handleEnd} />
        </Segment>
      )}
    </div>
  );
};
export default Chat;