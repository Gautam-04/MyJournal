import React from 'react'
import './Header.css'
import { SiLivejournal } from 'react-icons/si'
import Link from 'next/link'

type Props = {}

const Header:React.FC<Props> = ({}) => {
  return (
    <div className='HeaderDiv'>
            <Link href={"/"} className='HeaderLink'>
        <div className='InternalHeaderDiv'>
            <SiLivejournal width={50} className='HeaderIcon'/>
            <h1 className="Headerh1">My Journal</h1>
        </div>
            </Link>
    </div>
  )
}

export default Header