import React from "react";

const Navshift = () => {
  return (
    <div className="navshift">
      <div className="shift-type shift-active">
        <div className="shift-img-div delivery-color">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
            alt="delivery"
            className="shift-img img-delivery"
          />
        </div>
        <p className="type-name delivery">Delivery</p>
      </div>
      <div className="shift-type">
        <div className="shift-img-div dining-color">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
            alt="dining out"
            className="shift-img img-dining"
          />
        </div>
        <p className="type-name dining-out">Dining Out</p>
      </div>
      <div className="shift-type">
        <div className="shift-img-div night-color">
          <img
            src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
            alt="nightlife"
            className="shift-img img-night"
          />
        </div>
        <p className="type-name night-life">Nightlife</p>
      </div>
    </div>
  );
};

export default Navshift;
