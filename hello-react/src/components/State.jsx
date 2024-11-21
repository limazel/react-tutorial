import { useState } from "react";
import { tasks } from "../data.js";

export default function State() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  let task = tasks[index];

  function handlePreviousClick() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(tasks.length - 1);
    }
  }

  function handleNextClick() {
    if (index < tasks.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  return (
    <div className="container mt-4">
      <button className="btn btn-primary me-2" onClick={handlePreviousClick}>
        Previous
      </button>
      <button className="btn btn-primary" onClick={handleNextClick}>
        Next
      </button>
      <div className="card" style={{ width: "300px" }}>
        <img
          src={"/img/" + task.image}
          className="card-img-top p-2 p-md-3 border-bottom"
        />
        <div className="card-body">
          <h2 className="card-title">
            {task.title}{" "}
            <button onClick={handleMoreClick} className="btn btn-link p-0">
              {showMore ? (
                <i className="bi bi-caret-up-fill"></i>
              ) : (
                <i className="bi bi-caret-down"></i>
              )}
            </button>
          </h2>

          {showMore && <p className="card-text">{task.description}</p>}
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
