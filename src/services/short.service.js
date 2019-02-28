const shortLinks = require("../utils/data").shortLinks;

class ShortService {

   constructor(){};

   getAll(){
       return shortLinks;
   }
}

module.exports.ShortService = ShortService;
