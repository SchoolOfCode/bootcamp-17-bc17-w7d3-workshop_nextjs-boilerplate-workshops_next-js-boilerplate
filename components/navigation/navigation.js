import Link from "next/link";
import { useState } from "react";
import { ImageCard } from "../image/image";

function Navigation() {
  const [stateMenu, setStateMenu] = useState(null);

  // handler openMenu
  function openMenu() {
    setStateMenu(true);
  }

  // handler closeMenu
  function closeMenu() {
    setStateMenu(false);
  }

  return (
    <>
      <button onClick={openMenu}>
        <ImageCard
          src="/images/menu-open-button.png"
          alt="any"
          width="40"
          height="40"
        />
      </button>

      {stateMenu && (
        <div>
          <button onClick={closeMenu}>x</button>
          <Link href="/"> Home </Link>
          <Link href="/founders"> Founders </Link>
        </div>
      )}
    </>
  );
}

export default Navigation; // import it to the header
