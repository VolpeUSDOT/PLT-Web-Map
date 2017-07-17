//RegionFinder.js

//used to find the region number
//based on service as those are not located in the geojson file


//For FWS
function fwsFinder(regionName){
var reg_num
  switch(regionName){
    case "Pacific Region":
      reg_num = "1";
      break;

    case "Southwest Region":
      reg_num = "2";
      break;

    case "Midwest Region":
      reg_num = "3";
      break;

    case "Southeast Region":
      reg_num = "4";
      break;

    case "Northeast Region":
      reg_num = "5";
      break;

    case "Mountain Prairie Region":
      reg_num = "6";
      break;

    case "Alaska Region":
      reg_num = "7";
      break;

    case "Pacific Southwest Region":
      reg_num = "8";
      break;
  }
  return reg_num;
}
