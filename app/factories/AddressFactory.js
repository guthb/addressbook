'use strict';
app.factory("addressStorage", function($q, $http, firebaseURL){

  var getAddressList = function(){
    var addresses = [];
      return $q(function(resolve, reject){
        $http.get(firebaseURL + `addresses.json`)  //firebaase
          .success(function(addressObject){
          // var itemCollection = itemObject.items; //local
            var addressCollection = addressObject;
            console.log("addressbject", addressObject);
          // returns all the key in an array
            Object.keys(addressCollection).forEach(function(key){
            // goes through every key in this array and writes back to the object the id as  a property
              addressCollection[key].id=key;
              addresses.push(addressCollection[key]);
             });
            resolve(addresses);
          })
          .error(function(error){
             reject(error);
          });
      });
  };

  var deleteAddress = function (addressId){
    return $q(function(resolve, reject){
      $http
        .delete(firebaseURL +`addresses/${addressId}.json`)
        .success(function(objectFromFirebase){
            resolve(objectFromFirebase);
        });

        });
  };

  var postNewAddress = function(newAddress){
    return $q(function(resolve, reject) {
      $http.post(
        firebaseURL + `addresses.json`,
          JSON.stringify({
            name: newAddress.name,
            lastName: newAddress.lastName,
            lastUpdate: newAddress.lastUpdate,
            biz: newAddress.biz,
            location: newAddress.location,
            city: newAddress.city,
            facts: newAddress.facts
          })
      )
      .success(
        function(objectFromFirebase) {
          resolve(objectFromFirebase); //promise word
        }
      );
    });
  };


  var getSingleAddress = function(addressId){
    return $q(function(resolve, reject){
    $http.get(firebaseURL + `addresses/${addressId}.json`)  //firebaase
      .success(function(addressObject){
        resolve(addressObject);
      })
      .error(function(error){
        reject(error);
      });
    });
  };


  var putAddress = function(addressId, newAddress){
    return $q(function(resolve, reject) {
      $http.put(
        firebaseURL + `addresses/${addressId}.json`,
        JSON.stringify({
          name: newAddress.name,
          lastName: newAddress.lastName,
          lastUpdate: newAddress.lastUpdate,
          biz: newAddress.biz,
          location: newAddress.location,
          city: newAddress.city,
          facts: newAddress.facts
        })
      )
      .success(
        function(objectFromFirebase) {
          resolve(objectFromFirebase); //promise word
        }
      );
    });
  };


  var updateLastStatus = function(newAddress){
    return $q(function(resolve, reject) {
      $http.put(
        firebaseURL + `addresses/${newAddress.id}.json`,
        JSON.stringify({
          name: newAddress.name,
          lastName: newAddress.lastName,
          lastUpdate: newAddress.lastUpdate,
          biz: newAddress.biz,
          location: newAddress.location,
          city: newAddress.city,
          facts: newAddress.facts
        })
      )
      .success(
        function(objectFromFirebase) {
          resolve(objectFromFirebase); //promise word
        }
      );
    });
  };


  return {getAddressList:getAddressList,
          deleteAddress:deleteAddress,
          postNewAddress:postNewAddress,
          getSingleAddress:getSingleAddress,
          putAddress:putAddress,
          updateLastStatus:updateLastStatus
  };


});