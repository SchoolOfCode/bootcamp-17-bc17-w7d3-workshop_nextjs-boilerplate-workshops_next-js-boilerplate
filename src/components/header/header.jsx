import Link from 'next/link';
import MenuButton from './MenuButton';


export default function Header() {
    return (
        <>
            <header className="site-header">
                <h1>🔥 Fireplace Palace</h1>
                <MenuButton />

                {/* Menu button 
                
                onClick={showMenu}
                
                */}

                {/* 
                
                Menu
                    ul:
                    <Link href="/">Home</Link>
                    <Link href="/founders">Founders</Link>
                    
                */}
             </header>
        </>
    )    
}



