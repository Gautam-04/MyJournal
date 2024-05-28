import Image from 'next/image'
import React from 'react'
import './FeedBack.css'

type Props = {}

const FeedBack:React.FC<Props> = () => {
  return (
    <main className="FeedbackMainContanier">
        <div className="Container1">
            <div className="Container1Img">
                <Image src={"https://imgs.search.brave.com/Vs8GeotIgbKrJCm6OrU5eky8PhalFGb5H0qRO93Lq50/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzA5LzY4LzQx/LzM2MF9GXzMwOTY4/NDExN19nOVdraE5m/NVRuc05OaTNqdEdT/QlFIOHhiU3dWOHJv/Zi5qcGc"} alt='person.png' width={500} height={500} className='Container1Img1'/>
            </div>
            <div className="Container1Details">
                <p>Writing in this online journal has been a therapeutic experience for me. It’s a safe space to share my daily thoughts and connect with others.</p>
                <h5>Aditya K</h5>
            </div>
        </div>

         <div className="Container2">
            <div className="Container1Img">
                <Image src={"https://imgs.search.brave.com/6jjvtxnP_tbBrJ-SoNqpUpSuWVfyYREhfCNtAJaMSsQ/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQ2/MDg5NjUxOC9waG90/by9iZWF1dGlmdWwt/bWlkZGxlLWFnZWQt/d29tYW4uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPVpNZjVx/ZE41MzZFVXg5UWxx/TURBUndIQ2NrWWNY/OVVIR0plZGdSRXBP/QUU9"} alt='person.png' width={500} height={500} className='Container1Img1'/>
            </div>
            <div className="Container1Details">
                <p>This journal site has transformed how I reflect on my day-to-day life. It’s easy to use, and I enjoy reading about others’ experiences too.</p>
                <h5>Sophia K.</h5>
            </div>
        </div>

         <div className="Container1">
            <div className="Container1Img">
                <Image src={"https://imgs.search.brave.com/G_nJG8vG-oogfKhn64iLtiF0-pL2UVYimnOKdu94Kwo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzI1LzczLzU5/LzM2MF9GXzMyNTcz/NTkwOF9Ua3hIVTdv/a29yOUNUV0hCaGtH/ZmRSdW1PTldmSURF/Yi5qcGc"} alt='person.png' width={500} height={500} className='Container1Img1'/>
            </div>
            <div className="Container1Details">
                <p>I love documenting my everyday moments here. The platform is intuitive, and the community is so supportive. It feels like a digital diary with friends!</p>
                <h5>Michael S</h5>
            </div>
        </div>
    </main>
  )
}

export default FeedBack