"use client"

import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

type Props = {}

const page:React.FC<Props> = () => {

  const router = useRouter()

  const [email, setEmail] = useState<string>("")
  const [password,setPassword] = useState<string>("")

     const [loading, setLoading] = useState(false);

async function handleSubmit(e: React.FormEvent){
  e.preventDefault();
  console.log(email,password)
  try {
    setLoading(true)
    const res = await axios.post("/api/users/signin",{email,password})
    console.log("Login success", res.data);
    toast.success("Login Successful");
    router.push("/profile")
  } catch (error: any) {
    toast.error("Login Unsuccessful");
    console.log("Login failed" , error)
  }finally{
    setLoading(false)
  }
}


  return (
    <>
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
            <h1>Sign In</h1>
            <input type="email" placeholder='Add your email'  className='authinput' value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setEmail(e.target.value)}}/>

            <input type="password" placeholder='Add your password'  className='authinput' value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>{setPassword(e.target.value)}}/>

            <button type="submit" className='authButton' onClick={handleSubmit}>Sign In</button>
            <p>If you don't have an account :-  <Link href={"/signup"} style={{color: "red"}}>Register</Link></p>
        </div>
      </div>
    </main>
    <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default page