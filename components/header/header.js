function Header(props) {
  return (
    <header className="header-container">
      <h1 onClick={props.onClick}>🔥 Fireplace Palace</h1>
    </header>
  );
}

export default Header;
