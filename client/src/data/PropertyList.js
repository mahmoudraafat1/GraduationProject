import { propertyList } from './PropertyList';

const model = await tf.loadLayersModel('model.json');

function preprocessData(data) {
  return tf.tensor2d([data.beds, data.baths, data.squarefeet], [1, 3]);
}


function postprocessData(prediction) {
  return prediction.dataSync()[0];
}

for (let i = 0; i < propertyList.length; i++) {
  const property = propertyList[i];
  const inputData = preprocessData(property);
  const prediction = model.predict(inputData);
  const predictedPrice = postprocessData(prediction);
  property.price = `$${predictedPrice.toFixed(2)}`;

  function convertToEthers(priceInDollars, ethPriceInDollars) {
    const priceInEthers = priceInDollars / ethPriceInDollars;
    return priceInEthers.toFixed(4); 

    function usdToEth(priceUsd) {
      const ethPricePerUsd = 0.00039; // Replace with current ETH price if needed
      const priceEth = priceUsd * ethPricePerUsd;
      return priceEth;
    }
    
  }

}

export { propertyList };