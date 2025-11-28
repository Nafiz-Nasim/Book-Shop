import React from 'react'
import { data } from 'react-router'

export default function ReadListbook({list}) {
    const{bookName,author, review}=list
  return (
 <div className="card card-border bg-base-100 w-96">
  <div className="card-body">
    <h2 className="card-title">{bookName}</h2>
    <p>{review}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  )
}
