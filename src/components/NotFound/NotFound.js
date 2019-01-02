import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.style.css'

const NotFound = () => (
  <div className="notFound">
    <h2>
      The page you are looking for was not found.
    </h2>
    <p>
      ( Hint: try
      <Link to="/">
        this one.
      </Link>
      ;-)
    </p>
  </div>
)

export default NotFound
