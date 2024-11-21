import Gorev from "./Gorev";
export default function () {
  return (
    <>
      <div className="home">
        <p className="">Home</p>
        <div className="row row-cols-2 row-cols-md-3 row-cols-xlg-4 g-4">
          {tasks.length > 0 ? (
            tasks.map((p, index) => <Gorev taskDetails={p} key={index} />)
          ) : (
            <p>There is no task</p>
          )}
        </div>
      </div>
    </>
  );
}
