import React from 'react'
import { useLoaderData, useParams } from 'react-router'
import { addToStoredDB } from '../../Utility/addToDB';

export default function BookDetails() {
    const data=useLoaderData();
    const {id}=useParams();
    const{bookId}=data
const singlebookdetails= data.find(book=>book.bookId==id)
console.log(singlebookdetails);
const {image,bookName,author,review,category,yearOfPublishing}=singlebookdetails

const markAsRead=(ID)=>{
 addToStoredDB(ID);

}
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
      <button onClick={()=>markAsRead(id)} className="btn btn-primary"> Mark as Read</button>
      <button className="btn btn-primary">Add to Wish List</button>
    </div>
  </div>
</div>

    </section>
  )
}
