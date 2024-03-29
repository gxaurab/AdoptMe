import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";

const Details = () => {
  const { id } = useParams();
  const results = useQuery(["details", id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🌀</h2>
      </div>
    );
  }
  const pet = results.data.pets[0];

  return (
    <div className="details">
      <div>
        <Carousel images={pet.images} />;<h1> {pet.name}</h1>
        {pet.animal},{pet.cityl} ,{pet.state}
        <button> Adopt {pet.name}</button>
        <p> {pet.description}</p>
      </div>
    </div>
  );
};
export default Details;
