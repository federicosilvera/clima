import React from 'react'
import '../styles/spinner.css'

const Spinner = () => {
  return (
    <div className='spinner-container'>
        <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </div>
    </div>

  )
}

export default Spinner