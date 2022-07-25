const express = require("express");
const router = express.Router();

const {
  showTeamLeaderList,
  showRegisteredTeamLeaders,
} = require("../controllers/teamleadersControllers");

// return list of team leaders with their respective(assigned) zone city and region
router.route("/list").get(showTeamLeaderList);

// Return all team leaders registered in database
router.route("/registered").get(showRegisteredTeamLeaders);



module.exports = router;
