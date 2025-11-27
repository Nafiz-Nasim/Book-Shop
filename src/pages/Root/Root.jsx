import React from "react";
import Nav from "../../components/Header/Nav";
import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";

export default function Root() {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
