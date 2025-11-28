import React from "react";
import Banner from "../../components/Banner/Banner";
import Books from "../Books/Books";
import { data, useLoaderData } from "react-router";


export default function Home() {
  const data=useLoaderData();


  
  return (
    <section>
     
      <Banner></Banner>
      <Books data={data} />
    </section>
  );
}
