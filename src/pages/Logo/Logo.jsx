import React from 'react'
import './Logo.css'
import {ReactComponent as OwlLogo} from '../../OwlLogo.svg'

export default function Logo() {
  return (
    <div className='logo-container'>
      <OwlLogo/>
    </div>
  )
}
