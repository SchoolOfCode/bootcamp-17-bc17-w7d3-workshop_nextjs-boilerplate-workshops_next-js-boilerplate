"use client"

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

export default function MenuButton() {
    const [menuStatus, setMenuStatus] = useState(false)

    function handleClick() {
        setMenuStatus(!menuStatus)
    }

    return (
        <>
            <div>
                <button onClick={handleClick}>
                    <Image 
                    src= "/resources/founders/menu-open-button.png"
                    alt="menu-open-button"
                    width={25}
                    height={25}/>
                    </button>
                { menuStatus && 
                    <p>
                        <Link href="/">Home</Link>
                        <Link href="/founders">Founders</Link>
                    </p> 
                    }
            </div>
        </>
    )
}
