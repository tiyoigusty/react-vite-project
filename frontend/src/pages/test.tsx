import { useEffect, useState } from "react";
import Threads from "../datas/thread.json";

export function Test() {
    const [posts, setPosts] = useState([])

    function getPosts() {
      const response = Threads   
      console.log(response);
    }
    
    useEffect(() => {
      getPosts()
    }, [])

    return (
        <>
        {Threads.map} ()
        </>
    )
}