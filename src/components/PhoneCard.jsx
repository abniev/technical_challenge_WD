import { Link } from "react-router-dom";

function PhoneCard({ imgSrc, manufacturer, color, name, price, id }) {
  return (
    <div key={id} className="">
      <Link to={`/phone/${id}`}>
        <img className="" src={`images/${imgSrc}`} alt={phone.imageFileName} />
        <p>
          {manufacturer} {name}
        </p>
        <p>Color: {color}</p>
        <p className="">${price}</p>
      </Link>
    </div>
  );
}

export default PhoneCard;
