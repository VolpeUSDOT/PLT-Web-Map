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


//For USFS
function fsFinder(regionName){
var reg_num

  switch(regionName){
    case "Northern":
      reg_num = "R1";
      break;

    case "Rocky Mountain":
      reg_num = "R2";
      break;

    case "Southwestern":
      reg_num = "R3";
      break;

    case "Intermountain":
      reg_num = "R4";
      break;

    case "Pacific Southwest":
      reg_num = "R5";
      break;

    case "Pacific Northwest":
      reg_num = "R6";
      break;

    case "Southern":
      reg_num = "R8";
      break;

    case "Eastern":
      reg_num = "R9";
      break;

    case "Alaska":
      reg_num = "R10";
      break;
  }


  return reg_num;
}
