export default function Gorev() {

    const title = "Watch Video";
    const description = "Complete the mission and earn money";


    return (
        <div className="col">
            <div className="card">
               
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className="card-text">{ description }</p>
                    <span className="badge text-bg-primary">200 Tl</span>
                </div>
            </div>
        </div>
    );
}