

import React from 'react'
import { useLoaderData, useParams } from 'react-router'

export default function BookDetails() {
    const data=useLoaderData();
    const {id}=useParams();
    const{bookId}=data
const singlebookdetails= data.find(book=>book.bookId==id)
console.log(singlebookdetails);
const {image,bookName,author,review,category,yearOfPublishing}=singlebookdetails

  return (
    <section className=' mx-auto sm:max-w-2xl lg:max-w-7xl sm:mx-auto lg:mx-auto my-20'>



<div className="card card-side bg-base-100 shadow-sm">
  <figure className='w-full'>
    <div> <img className='h-96 '
      src={image}
      alt="Movie" /></div>
   
  </figure>
  <div className="card-body px-16">
    <h2 className="card-title">{bookName}</h2>
    <p>{review}</p>
    <p>{author}</p>
    <div className="card-actions justify-end flex gap-10">
      <button className="btn btn-primary">Read</button>
      <button className="btn btn-primary">Wish List</button>
    </div>
  </div>
</div>

    </section>
  )
}
