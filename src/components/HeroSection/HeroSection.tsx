"use client"

import React from 'react'
import './Hero.css'
import Image from 'next/image'
import HeroImg from "../../../public/unrecognizable-man-writing-plan-journal-gadgets-lying-around-desk_1098-20132.webp"
import { useRouter } from 'next/navigation'

type Props = {}

const HeroSection:React.FC<Props> = ({}) => {
     const router = useRouter();

  const handleLoginRedirect = () => {
    router.push('/signin');
  };
  return (
    <>
    <div className="HeroSectionMainDiv">
        <div className="HeroSectionDiv1">
            <h1>Welcome to My Journal</h1>
            <p>Your personal space to document your day-to-day experiences, thoughts, and reflections.</p>
            <p>Start journaling today and keep track of your life's journey. Click the button below to log in and begin writing!</p>
            <button className="loginButton" onClick={handleLoginRedirect}>
            Login
            </button>
        </div>
        <div className="HeroSectionDiv2">
            <Image src={HeroImg} alt='random.png' width={500} height={500} className='HeroSectionImg1'/>
        </div>
    </div>
    </>
  )
}

export default HeroSection