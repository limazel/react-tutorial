export default function Gorev({taskDetails}) {

    if (!taskDetails.is_active) return null;
  

  return (
    <div className="col">
      <div className="card">
        <img
          src={"/img/" + taskDetails.image}
          className="card-img-top p-2 p-md-3 border-bottom"
        />
        <div className="card-body">
          <h2 className="card-title">{taskDetails.title}</h2>
          <p className="card-text">{taskDetails.description}</p>



          
          <span className={`badge ${taskDetails.price >= 10 ? "text-bg-danger" : "text-bg-primary"}`}>{taskDetails.price} $</span>




        </div>
      </div>
    </div>
  );
}
