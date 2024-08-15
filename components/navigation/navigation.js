// import links and useState
// import ImageCard

function Navigation(props) {
  const state = false; //create useState function

  // handler openMenu
  function openMenu() {
    // change sate (false to true)
    console.log("open");
  }

  // handler closeMenu
  function closeMenu() {
    // change state (true to false)
    console.log("close");
  }

  return (
    <>
      <button onClick={openMenu}>{"burger menu"}</button>
      {/* this will not display due to a false status */}
      {state && (
        <div>
          <button onClick={closeMenu}>{"x"}</button>
          {props.link}
        </div>
      )}
    </>
  );
}

export default Navigation;
