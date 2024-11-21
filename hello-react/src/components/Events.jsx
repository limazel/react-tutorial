import { tasks } from "../data.js";

export default function Events() {
  let index = 1;
  let task = tasks[index];
  console.log(task);

  function handlePreviousClick() {
    index = index - 1;
  }

  function handleNextClick() {
    index = index + 1;
  }

  return (
    <div className="container mt-4">
      <button className="btn btn-primary me-2" onClick={handlePreviousClick}>
        Previous
      </button>
      <button className="btn btn-primary" onClick={handleNextClick}>
        Next
      </button>
      <div className="card" style={{ width: "200px" }}>
        <img
          src={"/img/" + task.image}
          className="card-img-top p-2 p-md-3 border-bottom"
        />
        <div className="card-body">
          <h2 className="card-title">{task.title}</h2>
          <p className="card-text">{task.description}</p>

          <span
            className={`badge ${
              task.price >= 10 ? "text-bg-danger" : "text-bg-primary"
            }`}
          >
            {task.price} $
          </span>
        </div>
      </div>
    </div>
  );
}
