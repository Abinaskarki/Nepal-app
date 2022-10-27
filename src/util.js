// import json_data from "../data.json";
const json_data = require("./data.json");

export const getDataByDistrictName = (district) => {
  const filtered_data = json_data.filter((item) => item.District === district);
  return filtered_data;
};
