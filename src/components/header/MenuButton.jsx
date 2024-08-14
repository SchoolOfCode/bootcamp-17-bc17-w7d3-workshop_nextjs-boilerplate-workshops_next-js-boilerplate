"use client"

import { useState } from 'react';
import Link from 'next/link';

export default function MenuButton() {
    const [menuStatus, setMenuStatus] = useState(false)

    function handleClick() {
        setMenuStatus(!menuStatus)
    }

    return (
        <>
            <div>
                <button onClick={handleClick}>Menu</button>
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
