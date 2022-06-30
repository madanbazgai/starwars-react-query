const Navbar = ({ setPage }) => {
  return (
    <>
      <button onClick={() => setPage("planets")}>Planet</button>
      <button onClick={() => setPage("people")}>People</button>
    </>
  );
};

export default Navbar;
