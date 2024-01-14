var property = artifacts.require("./property.sol");

contract("property", function(accounts){

    var propertyReginstance;
    var propertyInspector = accounts[0];
    var seller = accounts[1];
    var buyer = accounts[2];

    it("Initialize with 1 property Inspector", function(){
        return property.deployed().then(function(instance){
            return instance.inspectorsCount();
        }).then(function(count){
            assert.equal(count, 1);
        });
    });

    it("it initializes the property Inspector with the correct values", function(){
        return property.deployed().then(function(instance) {
            propertyReginstance = instance;
            return propertyReginstance.InspectorMapping(1);
        }).then(function(inspector) {
            assert.equal(inspector[0],1 , "contains the correct id");
            assert.equal(inspector[1], "Inspector 1" , "contains the correct name");
            assert.equal(inspector[2], 45, "contains the correct agee");
            assert.equal(inspector[3],"Tehsil Manager", "contains the correct designation");
        })
    });

    it("allows a seller to register", function() {
        return property.deployed().then(function(instance) {
            propertyReginstance = instance;
            return propertyReginstance.registerSeller("Vrinda", 20, "abc", "xyz", "many", "QmYdztkcPJLmGmwLmM4nyBfVatoBMRDuUjmgBupjmTodAP", {from: seller});
        }).then(function(receipt) {
          assert.equal(receipt.logs.length, 1, "an event was triggered");
          assert.equal(receipt.logs[0].event, "Registration", "the event type is correct");
          return propertyReginstance.sellersCount();
        }).then(function(count) {
          assert.equal(count, 1, "first seller registered");
        })
      });
    
    it("allows a buyer to register", function() {
        return property.deployed().then(function(instance) {
            propertyReginstance = instance;
            return propertyReginstance.registerBuyer("Vrinda", 20, "akola", "aadhar123456", "pan1234567", "QmYdztkcPJLmGmwLmM4nyBfVatoBMRDuUjmgBupjmTodAP", "vvahuja2000@gmail.com", {from: buyer});
        }).then(function(receipt) {
          assert.equal(receipt.logs.length, 1, "an event was triggered");
          assert.equal(receipt.logs[0].event, "Registration", "the event type is correct");
          return propertyReginstance.buyersCount();
        }).then(function(count) {
          assert.equal(count, 1, "first buyer registered");
        })
    });


    it("allows to verify a seller by property Inspector", function(){
        return property.deployed().then(function(instance) {
            propertyReginstance = instance;
            return propertyReginstance.verifySeller(seller, {from: propertyInspector});
        }).then(function(receipt) {
            assert.equal(receipt.logs.length, 1, "an event was triggered"); 
            assert.equal(receipt.logs[0].event, "Verified", "the event type is correct");
        })
    });

    it("allows to verify a Buyer by property Inspector", function(){
        return property.deployed().then(function(instance) {
            propertyReginstance = instance;
            return propertyReginstance.verifyBuyer(buyer, {from: propertyInspector});
        }).then(function(receipt) {
            assert.equal(receipt.logs.length, 1, "an event was triggered"); 
            assert.equal(receipt.logs[0].event, "Verified", "the event type is correct");
        })
    });
    
    it("allows to add a property by a verified Seller", function(){
        return property.deployed().then(function(instance) {
            propertyReginstance = instance;
            return propertyReginstance.addproperty(500,"Akola","Maharashtra", 20000, 567,1890, "QmYdztkcPJLmGmwLmM4nyBfVatoBMRDuUjmgBupjmTodAP","QmYdztkcPJLmGmwLmM4nyBfVatoBMRDuUjmgBupjmTodAP", {from: seller});
        }).then(function(receipt) {
            assert.equal(receipt.logs.length, 0, "Receipt"); 
            return propertyReginstance.propertysCount();
        }).then(function(count) {
            assert.equal(count, 1, "first property added.");
          })
    });

    it("allows to request property by a Verified Buyer", function(){
        return property.deployed().then(function(instance) {
            propertyReginstance = instance;
            return propertyReginstance.requestproperty(seller,1, {from: buyer});
        }).then(function(receipt) {
            assert.equal(receipt.logs.length, 1, "Receipt"); 
            assert.equal(receipt.logs[0].event, "propertyrequested", "the event type is correct");
            return propertyReginstance.requestsCount();
        }).then(function(count) {
            assert.equal(count, 1, "Successful Request for property made.");
          })
    });

    it("allows Seller to approve the property Request by Buyer", function(){
        return property.deployed().then(function(instance) {
            propertyReginstance = instance;
            return propertyReginstance.approveRequest(1, {from: seller});
        }).then(function(receipt) {
            assert.equal(receipt.logs.length, 0, "Receipt"); 
            return propertyReginstance.RequestStatus(1);
        }).then(function(reqStatus) {
            assert.equal(reqStatus, true, "Approved the property request!");
          })
    });

    it("allows buyer to make payment for the property after approved request ", function(){
        return property.deployed().then(function(instance) {
            propertyReginstance = instance;
            return propertyReginstance.getPrice(1);
        }).then(function(price) {
            price = price*0.0000057;
            return propertyReginstance.payment(seller, 1, {from: buyer, value: web3.utils.toWei(price.toString(), "ether")});
        }).then(function(receipt) {
            assert.equal(receipt.logs.length, 0, "Receipt"); 
            return propertyReginstance.isPaid(1);
        }).then(function(paymentStatus) {
            assert.equal(paymentStatus, true, "Payment done successfully!");
        })
    });

    it("property Ownership transfer from Seller to Buyer", function(){
        return property.deployed().then(function(instance) {
            propertyReginstance = instance;
            return propertyReginstance.propertyOwnershipTransfer(1, buyer, {from: propertyInspector})
        }).then(function(receipt) {
            assert.equal(receipt.logs.length, 0, "Receipt");
            return propertyReginstance.propertyOwner(1)
        }).then(function(newOwner) {
            assert.equal(newOwner, buyer, "property Ownership successfully transfered.")
        })
    });

    it("allows a registered and verified seller to edit his/her profile", function() {
        return property.deployed().then(function(instance) {
            propertyReginstance = instance;
            return propertyReginstance.updateSeller("Vrinda Ahuja", 21, "aadhar123456", "pannumber", "ten", {from: seller});
        }).then(function(receipt) {
          assert.equal(receipt.logs.length, 0, "Receipt");
          return propertyReginstance.sellersCount();
        }).then(function(count) {
          assert.equal(count, 1, "seller edited");
        })
      });

});