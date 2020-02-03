import React from "react";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Cool Place",
    description: "One of the coolest places",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Forsyth_Barr_Building%2C_Christchurch_02.JPG/1200px-Forsyth_Barr_Building%2C_Christchurch_02.JPG",
    address: "1855 Hillsdale Ave, San Jose, CA 95124 ",
    location: {
      lat: 37.2634991,
      lng: 121.921082
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Cool Place",
    description: "One of the coolest places",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Forsyth_Barr_Building%2C_Christchurch_02.JPG/1200px-Forsyth_Barr_Building%2C_Christchurch_02.JPG",
    address: "1855 Hillsdale Ave, San Jose, CA 95124 ",
    location: {
      lat: 37.2634991,
      lng: 121.921082
    },
    creator: "u2"
  }
];

const UserPlaces = () => {
  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;
