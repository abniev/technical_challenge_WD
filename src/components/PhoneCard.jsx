import { Link } from "react-router-dom";

function PhoneCard({ imageFileName, manufacturer, color, name, price, id }) {
  return (
    <div key={id} className="container">
      <Link to={`/phones/${id}`}>
        <img className="" src={`/assets/images/${imageFileName}`} alt="" />
        <p>
          {manufacturer} {name}
        </p>
        <p>Color: {color}</p>
        <p className="mb-4">${price}</p>
      </Link>
    </div>
  );
}

export default PhoneCard;
