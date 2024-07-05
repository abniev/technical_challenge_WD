import React, { useState, useEffect } from "react";
import api from "../api";
import { useNavigate, useParams } from "react-router-dom";

function PhonesDetailsPage() {
  const [phone, setPhone] = useState(null);
  const { phoneId } = useParams();
  const navigate = useNavigate;

  useEffect(
    () => {
      const fetchSinglePhone = async () => {
        try {
          const response = await api.get("/phones/" + id, body);

          setPhone(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchSinglePhone();
    },
    { phoneId }
  );

  return (
    <div>
      <>
        <img src={phone.imageFileName} alt={phone.name}></img>

        <h3>{phone.name}</h3>
        <p>Manufacturer: {phone.manufacturer}</p>
        <p>Color: {phone.color}</p>
        <p>Price: ${phone.price}</p>
        <p>Screen: {phone.screen}</p>
        <p>Processor: {phone.processor}</p>
        <p>RAM: {phone.ram}</p>

        <button
          className="btn"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </>
    </div>
  );
}

export default PhonesDetailsPage;
