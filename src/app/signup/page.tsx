"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { toast } from 'react-toastify'

type Props = {}

const page:React.FC<Props> = () => {
  const router = useRouter();


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [onelineInfo, setOneLineInfo] = useState("")
    

   const [loading, setLoading] = useState(false);

  async function handleSubmit(e:React.FormEvent) {
    e.preventDefault()
    console.log(email,password,username,onelineInfo)
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", {username,email,password,onelineInfo});
      console.log("Signup success", response.data);
      toast.success("Signup Successful");
      router.push("/signin");
    } catch (error: any) {
      console.log("Signup failed", error);
      toast.error("Signup Unsuccessful");
    }finally{
      setLoading(false);
    }
  }
  return (
    <main className='AuthMain'>
      <div className="AuthMainDiv">
        <div className="authDiv">
            <Image src={"https://imgs.search.brave.com/B6Jrj_sbwpnA4T7DzlqRSMGVhlXBKMbMvZYrWuUJkDY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MjI4ODE0NTEyNTUt/ZjU5YWQ4MzZmZGZi/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRKOGZI/ZHlhWFJwYm1kOFpX/NThNSHg4TUh4OGZE/QT0.jpeg"}
            alt='random.png'
            width={500}
            height={500}
            className='authImg'
            />
        </div>
        <div className='AuthContainer'>
            <h1>Sign Up</h1>
            <input required type="email" placeholder='Add your email'  className='authinput' value={email}
            onChange={(e) => setEmail(e.target.value)}/>
            <input required type="text" placeholder='Add your username'  className='authinput' value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <input required type="password" placeholder='Add your password'  className='authinput' value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <input required type="text" placeholder='Give one line bio about yourself'  className='authinput'value={onelineInfo}
            onChange={(e) => setOneLineInfo( e.target.value)}
            />
            <button type="submit" className='authButton' onClick={handleSubmit}>Register Yourself</button>
            <p>If you have an account :-  <Link href={"/signin"} style={{color: "red"}}>Sign In</Link></p>
        </div>
      </div>
    </main>
  )
}

export default page