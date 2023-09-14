import React from 'react'
import { Link } from 'react-router-dom'

export default function About(props) {
  return (
    <div className='container my-3' style={{ color: props.mode === 'dark' ? '#D0D2D6' : 'black' }}>
      <h1>Our Story</h1>
      <div className="card my-3" style={{ color: props.mode === 'dark' ? '#D0D2D6' : 'black' }}>
        <h5 className="card-header" style={{ backgroundColor: props.mode === 'dark' ? '#2E3235' : 'white' }}>Featured</h5>
        <div className="card-body" style={{ backgroundColor: props.mode === 'dark' ? '#212529' : 'white'}}>
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <Link to="/" className="btn btn-primary">Go To App</Link>
        </div>
      </div>
    </div>
  )
}
