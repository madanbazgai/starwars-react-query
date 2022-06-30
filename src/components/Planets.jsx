import { useQueryClient } from "react-query";
import { useQuery } from "react-query";

const fetchPlanets = async () => {
  const res = await fetch("https://swapi.dev/api/planets");
  const data = await res.json();
};
const Planets = () => {
  const queryClient = useQueryClient();
  const { data, status } = useQuery("planet", fetchPlanets);
  return <div>planets</div>;
};

export default Planets;
