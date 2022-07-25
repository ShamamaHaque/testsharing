const express = require("express");
const router = express.Router();

const {
  showRegionsList,
  showCities,
} = require("../controllers/regionsControllers");


// ## Return all regions list registered in database
router.route("/registered").get(showRegionsList);

// ## Returns all cities under the region .where '1' represent regionID. if we provide region ID in the end
//    will return all cities list that are in that region
router.route("/cities").get(showCities);

module.exports = router;
