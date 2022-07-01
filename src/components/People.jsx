import { useQueryClient } from "react-query";
import { useQuery } from "react-query";
import Person from "./Person";

const fetchPeople = async () => {
  const res = await fetch("https://swapi.dev/api/people");
  return res.json();
};
const People = () => {
  const queryClient = useQueryClient();
  const { data, status } = useQuery("people", fetchPeople);
  console.log(data);
  return (
    <div>
      <h2>People</h2>
      {status === "loading" && <div>loading data</div>}
      {status === "error" && <div>error fetching data</div>}
      {status === "success" && (
        <div>
          {data.results.map((person) => (
            <Person person={person} />
          ))}
        </div>
      )}
    </div>
  );
};

export default People;
