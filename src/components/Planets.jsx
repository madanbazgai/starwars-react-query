import { useState } from "react";
import { useQuery } from "react-query";
import Planet from "./Planet";

const Planets = () => {
  const [page, setPage] = useState(1);
  const fetchPlanets = async ({ queryKey }) => {
    const res = await fetch(`http://swapi.dev/api/planets/?page=${queryKey[1]}`);
    return res.json();
  };
  const { data, status, isPreviousData } = useQuery(["planets", page], fetchPlanets, {
    keepPreviousData: true,
  });
  console.log(isPreviousData);
  return (
    <div>
      <h2>Planets</h2>
      {status === "loading" && <div>loading data</div>}
      {status === "error" && <div>error fetching data</div>}
      {status === "success" && (
        <>
          <button disabled={!isPreviousData && page === 1} onClick={() => setPage((old) => old - 1)}>
            Previous
          </button>
          <button>{page}</button>
          {/* Disable the Next Page button until we know a next page is available */}
          <button disabled={isPreviousData || !data.next} onClick={() => setPage((old) => old + 1)}>
            Next
          </button>
          <div>
            {data.results.map((planet) => (
              <Planet planet={planet} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Planets;
