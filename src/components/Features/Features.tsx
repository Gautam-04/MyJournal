"use client"
import React from 'react'
import './Features.css'
import Image from 'next/image'
import Privacy from '../../../public/privacy.svg'
import Themes from '../../../public/themes.svg'
import Images from '../../../public/Images.svg'
import { toast } from 'react-toastify'

type Props = {}

const Features:React.FC<Props> = () => {
  return (
    <>
    <div className="FeaturesMainDiv">
      <div className="FeaturesContainer1">
        <div className="FeaturesContainer1Details">
          <h1>Privacy First</h1>
          <h6>"Your Thoughts, Your Privacy"</h6>
          <p>Rest assured, your entries are kept private and secure. Share your experiences with peace of mind, knowing that your journal is for your eyes only.</p>
        </div>
        <Image src={Privacy} alt='privacy.png' width={400} height={400} className='FeatuesImg'/>
      </div>
       <div className="FeaturesContainer2">
        <div className="FeaturesContainer1Details">
          <h1>Customizable Themes</h1>
          <h6>"Express Yourself in Style"</h6>
          <p>Personalize your journal with a variety of themes and layouts. Make your digital diary as unique as your experiences, adding a personal touch to every entry.</p>
        </div>
        <Image src={Themes} alt='privacy.png' width={400} height={400} className='FeatuesImg'/>
      </div>
       <div className="FeaturesContainer1">
        <div className="FeaturesContainer1Details">
          <h1>Easy Photo Integration</h1>
          <h6>"Capture and Cherish Your Moments"</h6>
          <p>Easily add photos to your journal entries to bring your stories to life. Upload and embed images seamlessly to preserve your cherished memories visually.</p>
        </div>
        <Image src={Images} alt='privacy.png' width={400} height={400} className='FeatuesImg'/>
      </div>
    </div>
    <div className="RecommendedBy">
        <Image src={"https://www.goodnightjournal.com/gnj-as-seen-on.png"} alt='icons.png' width={500} height={100} className='IconsImg'/>
    </div>
    </>
  )
}

export default Features