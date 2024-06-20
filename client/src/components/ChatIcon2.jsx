import React, { useState } from 'react';
import { Segment } from 'semantic-ui-react';
import ChatBot from 'react-simple-chatbot';
import { propertyList } from "../data/Data";
import PropTypes from 'prop-types';

const PropertyRecommendation = ({ selectedProperties }) => {
  return (
    <div>
      {selectedProperties.length > 0 ? (
        <div>
          <p>Based on your preferences, I recommend the following properties:</p>
          {selectedProperties.map((property, index) => (
            <div key={index}>
              Address: {property.address}
              <br />
              Description: {property.description}
              <br />
              Price: {property.price}
              <br />
              ETH Price: {property.ethPrice}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>Sorry, I could not find any properties that match your preferences.</p>
        </div>
      )}
    </div>
  );
};

PropertyRecommendation.propTypes = {
  selectedProperties: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      ethPrice: PropTypes.string.isRequired,
    })
  ),
};

const Chat = () => {
  const [showChat, setShowChat] = useState(false);
  const [selectedProperties, setSelectedProperties] = useState([]);

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const handleEnd = ({ values }) => {
    const beds = parseInt(values["beds"]);
    const baths = parseInt(values["baths"]);
    const ethPrice = parseFloat(values["ethPrice"]);
    const squareFeet = parseInt(values["squarefeet"]);
    const yearBuilt = parseInt(values["yearBuilt"]);
    const numFloors = parseInt(values["numFloors"]);
    const propertyType = values["propertyType"];
    const allowedPets = values["allowedPets"];
    const schoolDistrict = values["schoolDistrict"];
    const priority = values["priority"];

    const filteredProperties = propertyList.filter(
      (property) =>
        property.beds === beds &&
        property.baths === baths &&
        property.ethPrice <= ethPrice &&
        property.squarefeet >= squareFeet &&
        property.yearBuilt === yearBuilt &&
        property.numFloors === numFloors &&
        property.propertyType === propertyType &&
        property.allowedPets === allowedPets &&
        property.schoolDistrict === schoolDistrict
    );

    let recommendedProperties;
    
    if (filteredProperties.length > 0) {
      if (priority === "price") {
        recommendedProperties = filteredProperties.sort((a, b) => a.price - b.price).slice(0, 3);
      } else if (priority === "location") {
        recommendedProperties = filteredProperties.sort((a, b) => a.address.localeCompare(b.address)).slice(0, 3);
      } else if (priority === "size") {
        recommendedProperties = filteredProperties.sort((a, b) => a.squarefeet - b.squarefeet).slice(0, 3);
      }
    }

    setSelectedProperties(recommendedProperties || []);
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
     id:'4', 
     message:'What is your preferred square footage?', 
     trigger:'squareFeet'
  },
  {
     id:'squareFeet', 
     user:true, 
     trigger:'yearBuiltQuestion', 
     validator:(value)=>{
       if(isNaN(value) || parseInt(value) <=0 ){
         return "Please enter a valid number above zero.";
       }
       return true;
     }
  },
  {
     id:'yearBuiltQuestion', 
     message:'What is the year built of the property?', 
     trigger:'yearBuilt'
  },
  {
     id:'yearBuilt', 
     user:true, 
     trigger:'numFloorsQuestion', 
     validator:(value)=>{
       if(isNaN(value)){
         return "Please enter a valid year.";
       }
       return true;
     }
  },
  {
     id:'numFloorsQuestion', 
     message:'How many floors does the property have?', 
     trigger:'numFloors'
  },
  {
     id:'numFloors', 
     user:true, 
     trigger:'propertyTypeQuestion', 
     validator:(value)=>{
       if(isNaN(value)){
         return "Please enter a valid number.";
       }
       return true;
     }
  },
  {
    id: 'propertyTypeQuestion',
    message: 'What is the property type (house, condo, townhome etc.)?',
    trigger: 'propertyType',
  },
  {
    id: 'propertyType',
    user: true,
    trigger: 'allowedPetsQuestion',
  },
  {
    id: 'allowedPetsQuestion',
    message: 'Are pets allowed in the property?',
    trigger: 'allowedPets',
  },
  {
    id: 'allowedPets',
    user: true,
    trigger: 'schoolDistrictQuestion',
  },
  {
    id: 'schoolDistrictQuestion',
    message: 'Which school district are you interested in?',
    trigger: 'schoolDistrict',
  },
  {
    id: 'schoolDistrict',
    user: true,
    trigger: 'priority',
  },
  {
      id:'priority', 
      message:'What is your priority? (price, location, size)', 
      trigger:'priorityChoice'
   },
   {
      id:'priorityChoice', 
      options:[
         {value:'price', label:'Price',trigger:'5'},
         {value:'location', label:'Location',trigger:'5'},
         {value:'size', label:'Size',trigger:'5'}
      ]
   },
   {
      id:'5', 
      component:<PropertyRecommendation selectedProperties={selectedProperties} />, 
      asMessage:true
   }
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
          zIndex: 999,
          width:'60px',
          height:'60px'
        }}
        onClick={toggleChat}
      >
        <img src="../../images/bot.png" alt="Chat icon" />
      </div>
      {showChat && (
        <Segment
          style={{
            position:'fixed',
            bottom:'20px',
            right:'20px',
            width:'400px',
            height:'580px',
            zIndex:'111'
          }}
        >
          <ChatBot steps={steps} handleEnd={handleEnd} />
        </Segment>
      )}
    </div>
  );
};

export default Chat;