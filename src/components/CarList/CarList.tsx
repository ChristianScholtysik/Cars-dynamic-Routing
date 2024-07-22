import "./CarList.css";

import { useEffect, useState } from "react";
import "./CarList.css";
import data from "../../../public/data.json";
import { ICar } from "../../components/Interface/ICar";
import CarItem from "../Car/CarItem";

const CarList = () => {
  const [carData, setCarData] = useState<ICar[] | null>(null);

  useEffect(() => {
    setCarData(data);
  }, []);

  return (
    <div className="list">
      {carData?.map((item, index) => (
        <CarItem car={item} key={index} />
      ))}
    </div>
  );
};

export default CarList;
