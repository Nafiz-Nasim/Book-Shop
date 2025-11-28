import React from "react";
import { Link } from "react-router";

export default function Nav() {
  return (
    <section className=" ">
      <div className=" py-5 full flex items-center justify-between  mx-auto sm:max-w-2xl lg:max-w-7xl sm:mx-auto lg:mx-auto">
        <div className="left">
          <h3 className=" font-bold text-2xl">Book Vibe</h3>
        </div>
        <div className="center flex gap-10">
          <Link  to={`/`}> <button className="btn btn-outline btn-success">Home</button></Link>
         
          <Link   to={`/about`}><button  className="btn btn-outline btn-success">About</button></Link>
          
          <Link   to={`/ReadList`}><button  className="btn btn-outline btn-success">Pages to Read</button></Link>

          
        </div>
        <div className="right flex gap-10">
          <button class="btn btn-soft btn-primary">Sign In</button>
          <button class="btn btn-soft btn-secondary">Sign Up</button>
        </div>
      </div>
    </section>
  );
}
