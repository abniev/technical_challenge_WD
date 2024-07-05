import { useEffect, useState } from "react";
import api from "../api";

function AllPhonesPage({ onSelectPhone }) {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPhones = async () => {
      try {
        const response = await api.get("/phones");

        setPhones(response.data);
        setLoading(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getPhones();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {phones.map((phone) => (
        <li key={phone.id} onClick={() => onSelectPhone(phone.id)}>
          {phone.name}
        </li>
      ))}
    </ul>
  );
}
export default AllPhonesPage;
