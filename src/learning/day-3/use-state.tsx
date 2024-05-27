// ----------------- useState + conditional rendering -----------------

import { useState } from "react";

export function Card() {
    const [isShowed, setIsShowed] = useState<boolean>(true)

    // if (isShowed) {
    //     return (
    //         <>
    //         <div style={{border:"2px solid black", width: "100px", height: "50px"}}>Card</div>
    //         <button>Munculkan Kartu</button>
    //         </>
    //     )
    // } else {
    //     return (
    //         <h1>Tidak ada data</h1>
    //     )
    // }

    // return (
    //     <>
    //     {isShowed && (
    //         <>
    //         <div style={{border:"2px solid black", width: "100px", height: "50px"}}>Card</div>
    //         <button>Munculkan Kartu</button>
    //         </>
    //     )}

    //     {!isShowed && (
    //         <>
    //         <button>Munculkan Kartu</button>
    //         </>
    //     )}
    //     </>
    // )

    return (
        <>
        {isShowed ? (
            <>
            <div style={{border:"2px solid black", width: "100px", height: "50px"}}>Card</div>
            <button onClick={() =>{setIsShowed(false)}}>Hilangkan Kartu</button>
            </>
        ) : (
            <>
            <button onClick={() =>{setIsShowed(true)}}>Munculkan Kartu</button>
            </>
        )}
        </>
    )
}

