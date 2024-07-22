import { Link } from "react-router-dom";
import { ICar } from "../../components/Interface/ICar";

interface CarItemProps {
  car: ICar;
}

const CarItem: React.FC<CarItemProps> = (props) => {
  return (
    <div className="item-card">
      <p>Marke: {props.car.CarMake}</p>
      <p>Model: {props.car.carModel}</p>
      <Link to={`/our-cars/${props.car.id}`}>read more...</Link>
    </div>
  );
};

export default CarItem;
