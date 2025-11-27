import React from "react";
import { Suspense } from "react";
import { useEffect } from "react";
import Book from "../../components/Book/Book";

export default function books({ data }) {
  return (
    <section className="my-10 px-10 full flex  flex-col items-center justify-center    mx-auto sm:max-w-2xl lg:max-w-7xl sm:mx-auto lg:mx-auto">
    <h2 className="text-3xl">  Books</h2>
      <div className="flex flex-row items-center justify-center gap-10 flex-wrap mt-16">
 <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        {data.map((singlebook) => (
          <Book singlebook={singlebook} key={data.bookId} />
        ))}
      </Suspense>
      </div>
     
    </section>
  );
}
