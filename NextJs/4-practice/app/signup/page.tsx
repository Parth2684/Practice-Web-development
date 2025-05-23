"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()
    
    return <div className="w-screen h-screen flex items-center justify-center">
        <div className="border p-2">
            <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)} />

            <button onClick={async() => {
                const res = await axios.post("http://localhost:3000/api/v1/signup", {username, password})
                if(res.data.ok){
                    router.push("/user")
                }
            }}>Signup</button>
        </div>

    </div>
}