import React from "react";

export default function Footer() {

  const userTime = new Date().getHours();
  const activeTime = 9;
  const inactiveTime = 19;

  const isActive = userTime >= activeTime && userTime < inactiveTime;
  console.log(isActive)

  return (

    <>
   <div className="">
      {
        isActive ? ( 
          <p>You can still join</p>
         ) : (
          <p>You can't join this task</p>
         )
      }
   </div>

    <header>
      <nav
        className="navbar navbar-expand bg-dark border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container">
          <a href="#" className="navbar-brand">
            Footer
          </a>
        </div>
      </nav>
    </header>
    </>
  );
}
