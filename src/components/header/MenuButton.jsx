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
            <div id="menu-button">
                <button onClick={handleClick}>
                    <Image 
                    src= "/resources/founders/menu-open-button.png"
                    alt="menu-open-button"
                    width={25}
                    height={25}/>
                    </button>
                { menuStatus && 
                    <div id="menu-open">
                        <ul>
                            <li><button onClick={handleClick}><Image 
                                src= "/resources/founders/menu-close-button.png"
                                alt="menu-close-button"
                                width={25}
                                height={25}
                            /></button></li>
                            <li><Link href="/" onClick={handleClick} >Home</Link></li>
                            
                            <li><Link href="/founders" onClick={handleClick} >Founders</Link></li>
                        </ul>
                    </div> 
                    }
            </div>
        </>
    )
}
