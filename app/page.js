import "./page.css";
import Hero from './src/components/hero/hero'
import Trusted from "./src/components/trusted/Trusted";
import HowItWorksContainer from "./src/components/how-it-works/HowItWorksContainer";

export default function Home() {
  return (
      <main className="site-main">
      
        <Hero/>

        <Trusted />

        <HowItWorksContainer />

      </main>
  );
}
