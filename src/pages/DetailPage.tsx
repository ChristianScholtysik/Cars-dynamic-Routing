import "./Detailpage.css";
import { useEffect, useState } from "react";
import { ICar } from "../components/Interface/ICar";
import { useParams } from "react-router-dom";
import data from "../../public/data.json";

const Detailpage = () => {
  const [allCars, setAllCars] = useState<ICar[] | null>(null);
  const [filteredCar, setFilteredCar] = useState<ICar | null>(null);

  const { carId } = useParams<{ carId?: string }>();
  console.log(carId);

  useEffect(() => {
    setAllCars(data);
  }, []);

  useEffect(() => {
    if (allCars && carId) {
      const getCar = allCars.find((item) => item.id === Number(carId));
      setFilteredCar(getCar !== undefined ? getCar : null);
    }
  }, [carId, allCars]);
  console.log("filtered", filteredCar);

  return (
    <div className="car-details">
      <h3>{filteredCar?.CarMake}</h3>
      <p>{filteredCar?.carModel}</p>
      <p>{filteredCar?.CarYear}</p>
    </div>
  );
};

export default Detailpage;
