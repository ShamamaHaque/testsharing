const expressAsyncHandler = require("express-async-handler");
const res = require("express/lib/response");
const axios = require("axios");

const showRegionsList = expressAsyncHandler(async (req, res) => {
  // console.log("Working");
  var myData = [];
  await axios
    .get("http://127.0.0.1:1113/get_all_region_list")
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

const showCities = expressAsyncHandler(async (req, res) => {
  // console.log("Working");
  var myData = [];
  await axios
    .get("http://127.0.0.1:1113/get_all_cities_in_region/1	")
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

module.exports = { showRegionsList, showCities };
