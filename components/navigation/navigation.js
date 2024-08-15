import Link from "next/link";
import { ImageCard } from "@/components/image/image";
import ImageCard from "./components/image/image.js";

function Navigation(props) {
  const state []; //create useState function
const [stateMenu, setStateMenu] = useState(null);
  // handler openMenu
  function openMenu() {
    setStateMenu(true);
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
         <Link href="/"> Home </Link>
         <Link href="/founders"> Founders </Link>
        </div>
      )}
    </>
  );
}

export default Navigation; // import it to the header
