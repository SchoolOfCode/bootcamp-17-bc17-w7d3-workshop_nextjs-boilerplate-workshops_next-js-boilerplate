import Image from 'next/image'

function Header(props) {
  return (
    <header className="header-container">
      <h1>🔥 Fireplace Palace</h1>
      <Image 
      onClick={props.onClick}
      src="/images/menu-open-button.png"
      alt="burger menu"
      height="50"
      width="50"/>
    </header>
  );
}

export default Header;
