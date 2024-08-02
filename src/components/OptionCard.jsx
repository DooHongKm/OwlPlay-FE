import React from 'react'
import './OptionCard.css'

export default function OptionCard({ num, info, nextPage }) {

  const i = {num}.num + 1
  const d = {info}.info
  const arr = d.split(',').map(value => value.trim());

  const sendData = () => {
    nextPage(i, arr[0])
  }

  return (
    <div className='optioncard-container'>
      <button onClick={sendData} style={{ backgroundImage: `url(${arr[1]})` }}>{arr[0]}</button>
    </div>
  )
}
