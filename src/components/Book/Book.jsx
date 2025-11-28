import { Star } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

export default function Book({singlebook}) {
    const {image,bookName,tags,author,rating,bookId}=singlebook
  return (
    <Link to={`/bookDetails/${bookId}`}><section>
        <div className="card bg-base-100 w-96 shadow-sm " >
  <figure>
    <img 
      src={image}
      alt="Shoes"  className='h-50'/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
    <p>{author}</p>
    <div className="icons flex items-center justify-between">
 <div className="left flex gap-5 items-center justify-center"> <Star /><p>{rating}</p></div>

<div className="card-actions justify-end">
       
      <button className="btn btn-primary">Buy Now</button>
    </div>
    </div>
    
  </div>
</div>



    </section></Link>
  )
}
