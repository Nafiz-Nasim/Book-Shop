import React from 'react'

export default function Banner() {
  return (
    <section className=' my-10 px-10 full flex sm:flex-row flex-col items-center  justify-between   mx-auto sm:max-w-2xl lg:max-w-7xl sm:mx-auto lg:mx-auto'>
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="/src/assets/books.jpg"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
     
      <button className="btn btn-primary mt-10">View The List</button>
    </div>
  </div>
</div>


    </section>
  )
}
