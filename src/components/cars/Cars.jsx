import React from "react";
import Caritem from "../caritem/Caritem";
import "./cars.css";

function Cars({ fetchedCars }) {
  return (
    <div className="cars">
      {fetchedCars.map((car) => (
        <Caritem
          milage={car.milage}
          description={car.car_description}
          images={car.images}
          registration={car.registration_no}
          is_hired={car.is_hired}
        />
      ))}
    </div>
  );
}
export default Cars