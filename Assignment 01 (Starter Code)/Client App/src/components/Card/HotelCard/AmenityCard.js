import React from "react";
import FreeWifiIcon from "../HotelCard/icons/FreeWifiIcon";
import SwimmingPoolIcon from "../HotelCard/icons/SwimmingPoolIcon";
import FitnessCenterIcon from "../HotelCard/icons/FitnessCenterIcon";
import SpaIcon from "../HotelCard/icons/SpaIcon";
import RestaurantIcon from "../HotelCard/icons/Restarurant";

const iconComponents = {
  "Free Wi-Fi": {
    component: FreeWifiIcon,
    bgColor: "#2B5C2D",
  },
  "Swimming Pool": {
    component: SwimmingPoolIcon,
    bgColor: "#2B5C2D",
  },
  "Fitness Center": {
    component: FitnessCenterIcon,
    bgColor: "#2B5C2D",
  },
  Spa: {
    component: SpaIcon,
    bgColor: "#2B5C2D",
  },
  Restaurant: {
    component: RestaurantIcon,
    bgColor: "#7643ea",
  },
};

const AmenitiesCard = ({ amenity }) => {
  const { component: IconComponent, bgColor } =
    iconComponents[amenity.name] || {};

  return (
    <div
      className="text-white text-0.5rem flex items-center p-2 w-24 h-10 rounded-lg mr-2"
      style={{ backgroundColor: "#E2C698" }}
    >
      {IconComponent && <IconComponent />}
      <span className="pl-2 text-[0.6rem] text-purple-950">{amenity.name}</span>
    </div>
  );
};

export default AmenitiesCard;
