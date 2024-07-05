import api from "../api";
import { useState, useEffect } from "react";
import PhoneCard from "../components/PhoneCard";

function HomePage() {
  const [phones, setPhones] = useState(null);

  const getAllPhones = async () => {
    try {
      const response = await api.get("/phones");
      setPhones(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPhones();
  }, []);

  return (
    <div>
      <h1 className="">All Phones</h1>

      {phones ? (
        <div>
          {phones.map((phone) => {
            return <PhoneCard key={phone.id} {...phone} />;
          })}
        </div>
      ) : (
        <p>Loading ...😈</p>
      )}
    </div>
  );
}

export default HomePage;
