const expressAsyncHandler = require("express-async-handler");
const res = require("express/lib/response");
const axios = require("axios");

const showZones = expressAsyncHandler(async (req, res) => {
  // console.log("Working");
  var myData = [];
  await axios
    .get("http://127.0.0.1:10331//get_all_zones_in_city/1")
    .then((res) => {
      myData = res.data;
      // console.log(myData);
    })
    .catch((err) => console.log(err));

  res.status(200).json({
    success: true,
    myData,
  });
});

module.exports = { showZones };
