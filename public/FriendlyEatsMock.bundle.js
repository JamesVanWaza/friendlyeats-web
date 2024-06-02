/*! For license information please see FriendlyEatsMock.bundle.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/js/FriendlyEats/FriendlyEats.Mock.js":()=>{eval("/**\n * Copyright 2017 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the 'License');\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an 'AS IS' BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n\n/** Adds a set of mock Restaurants to the Cloud Firestore */\nFriendlyEats.prototype.addMockRestaurants = function () {\n  var promises = [];\n  for (var i = 0; i < 20; i++) {\n    var name = this.getRandomItem(this.data.words) + '' + this.getRandomItem(this.data.words);\n    var category = this.getRandomItem(this.data.categories);\n    var city = this.getRandomItem(this.data.cities);\n    var price = Math.floor(Math.random() * 4) + 1;\n    var photoID = Math.floor(Math.random() * 22) + 1;\n    var photo = 'https://storage.googleapis.com/firestorequickstarts.appspot.com/food_' + photoID + '.png';\n    var numRatings = 0;\n    var avgRating = 0;\n    var promise = this.addRestaurant({\n      name: name,\n      category: category,\n      price: price,\n      city: city,\n      numRatings: numRatings,\n      avgRating: avgRating,\n      photo: photo\n    });\n    if (!promise) {\n      alert('addRestaurant() is not implemented yet!');\n      return Promise.reject();\n    } else {\n      promises.push(promise);\n    }\n  }\n  return Promise.all(promise);\n};\n\n/** Adds a set of mock Ratings to the given Restaurant */\nFriendlyEats.prototype.addMockRatings = function (restaurantID) {\n  var ratingPromises = [];\n  for (var r = 0; r < 5 * Math.random(); r++) {\n    var rating = this.data.ratings[parseInt(this.data.ratings.length * Math.random())];\n    rating.userName = 'Bot (Web)';\n    rating.timeStamp = new Date();\n    rating.userId = firebase.auth().currentUser.uid;\n    ratingPromises.push(this.addRating(restaurantID, rating));\n  }\n  return Promise.all(ratingPromises);\n};\n\n//# sourceURL=webpack://friendlyeats-web/./src/js/FriendlyEats/FriendlyEats.Mock.js?")}},__webpack_exports__={};__webpack_modules__["./src/js/FriendlyEats/FriendlyEats.Mock.js"]()})();