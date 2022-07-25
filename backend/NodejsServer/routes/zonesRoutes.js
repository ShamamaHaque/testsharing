const express = require("express");
const router = express.Router();

const { showZones } = require("../controllers/zonesControllers");

// ## Return all zones under the city . where '1' represent cityID . If we provide cityID in the end it will
//    return all the zones that are in that city.
router.route("/showZones").get(showZones);

module.exports = router;
