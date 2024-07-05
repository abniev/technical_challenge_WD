import React, { useState, useEffect } from "react";
import api from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  bordercolor: "red",
};

function PhonesDetailsPage({
  imageFileName,
  manufacturer,
  color,
  name,
  price,

  description,
  screen,
}) {
  const [phone, setPhone] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getSinglePhone = async () => {
      try {
        const response = await api.get("/phones/" + id);
        console.log("api response:", response.data);

        setPhone(response.data);
      } catch (error) {
        console.log("error fetching phone data:", error);
      }
    };
    getSinglePhone();
  }, []);

  return (
    <div className="w-full max-w-[600px] mx-auto text-center my-12 bg-slate-200 border-2 border-slate-200 rounded-md">
      <h1>Phone Details</h1>
      {phone ? (
        <div className="container flex flex-column gap-2 py-4 px-4">
          {phone.imageFileName ? (
            <img
              src={`/assets/images/${phone.imageFileName}`}
              alt={phone.name}
            ></img>
          ) : (
            <p className="mb-5">Image not available</p>
          )}

          <h3>{phone.name}</h3>
          <p>Manufacturer: {phone.manufacturer}</p>
          <p>Color: {phone.color}</p>
          <p>Price: ${phone.price}</p>
          <p>Description: {phone.description}</p>
          <p>Screen: {phone.screen}</p>
          <p>Processor: {phone.processor}</p>
          <p>RAM: {phone.ram}</p>

          <button
            className="button"
            onClick={() => {
              navigate("/");
            }}
          >
            Back
          </button>
        </div>
      ) : (
        <ClipLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </div>
  );
}

export default PhonesDetailsPage;
