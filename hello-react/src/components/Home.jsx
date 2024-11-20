import Gorev from "./Gorev";

const tasks = [
  {
    title: "Watch Video",
    description: "Complete the mission and earn money",
    image: "video.jpg",
    price: 2,
    is_active: true
  },
  {
    title: "Download App",
    description: "Complete the mission and earn money",
    image: "video.jpg",
    price: 40,
    is_active: true
  },
  {
    title: "Follow Instagram",
    description: "Complete the mission and earn money",
    image: "video.jpg",
    price: 5,
    is_active: false
  },
];

export default function () {
  return (
    <>
      <div className="home">
        <p className="">Home</p>
        <div className="row row-cols-2 row-cols-md-3 row-cols-xlg-4 g-4">
          {tasks.length > 0 ? (
            tasks.map((p, index) => <Gorev taskDetails={p} key={index} />)
          ) : 
            <p>There is no task</p>
          }
        </div>
      </div>
    </>
  );
}
