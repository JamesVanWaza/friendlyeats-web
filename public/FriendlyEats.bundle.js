/*! For license information please see FriendlyEats.bundle.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/js/FriendlyEats/FriendlyEats.js":()=>{eval("/**\n * Copyright 2017 Google Inc. All Rights Reserved.\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *      http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n\n/** Initializes the FriendlyEats app */\nfunction FriendlyEats() {\n  this.filters = {\n    city: '',\n    price: '',\n    category: '',\n    sort: 'Rating'\n  };\n  this.dialogs = {};\n  var that = this;\n  firebase.auth().signInAnonymously().then(function () {\n    that.initTemplates();\n    that.initRouter();\n    that.initReviewDialog();\n    that.initFilterDialog();\n  })[\"catch\"](function (err) {\n    console.log(err);\n  });\n}\n\n/** Initialixed the router for the FriendlyEats app */\nFriendlyEats.prototype.initRouter = function () {\n  this.router = new Navigo();\n  var that = this;\n  this.router.on({\n    '/': function _() {\n      that.updateQuery(that.filters);\n    }\n  }).on({\n    '/setup': function setup() {\n      that.viewSetup();\n    }\n  }).on({\n    '/restaurants/*': function restaurants() {\n      var path = that.getCleanPath(document.location.pathname);\n      var id = path.split('/')[2];\n      that.viewRestaurant(id);\n    }\n  }).resolve();\n  firebase.firestore().collection('restaurants').limit(1).onSnapshot(function (snapshot) {\n    if (snapshot.empty) {\n      that.router.navigate('/setup');\n    }\n  });\n};\nFriendlyEats.prototype.getCleanPath = function (dirtyPath) {\n  if (dirtyPath.startsWith('/index.html')) {\n    return dirtyPath.split('/').slice(1).join('/');\n  } else {\n    return dirtyPath;\n  }\n};\nFriendlyEats.prototype.getFirebaseConfig = function () {\n  return firebase.app().options;\n};\nFriendlyEats.prototype.getRandomItem = function (arr) {\n  return arr[Math.floor(Math.random() * arr.length)];\n};\nFriendlyEats.prototype.data = {\n  words: ['Bar', 'Fire', 'Grill', 'Drive Thru', 'Place', 'Best', 'Spot', 'Prime', 'Eatin\\''],\n  cities: ['Albuquerque', 'Arlington', 'Atlanta', 'Austin', 'Baltimore', 'Boston', 'Charlotte', 'Chicago', 'Cleveland', 'Colorado Springs', 'Columbus', 'Dallas', 'Denver', 'Detroit', 'El Paso', 'Fort Worth', 'Fresno', 'Houston', 'Indianapolis', 'Jacksonville', 'Kansas City', 'Las Vegas', 'Long Island', 'Los Angeles', 'Louisville', 'Memphis', 'Mesa', 'Miami', 'Milwaukee', 'Nashville', 'New York', 'Oakland', 'Oklahoma', 'Omaha', 'Philadelphia', 'Phoenix', 'Portland', 'Raleigh', 'Sacramento', 'San Antonio', 'San Diego', 'San Francisco', 'San Jose', 'Tucson', 'Tulsa', 'Virginia Beach', 'Washington'],\n  categories: ['Brunch', 'Burgers', 'Coffee', 'Deli', 'Dim Sum', 'Indian', 'Italian', 'Mediterranean', 'Mexican', 'Pizza', 'Ramen', 'Sushi'],\n  ratings: [{\n    rating: 1,\n    text: 'Would never eat here again!'\n  }, {\n    rating: 2,\n    text: 'Not my cup of tea'\n  }, {\n    rating: 3,\n    text: 'Exactly okay :/'\n  }, {\n    rating: 4,\n    text: 'Actually pretty good, would recommend!'\n  }, {\n    rating: 5,\n    text: 'This is my favorite place. Literally'\n  }]\n};\nwindow.onload = function () {\n  window.app = new FriendlyEats();\n};\n\n//# sourceURL=webpack://friendlyeats-web/./src/js/FriendlyEats/FriendlyEats.js?")}},__webpack_exports__={};__webpack_modules__["./src/js/FriendlyEats/FriendlyEats.js"]()})();