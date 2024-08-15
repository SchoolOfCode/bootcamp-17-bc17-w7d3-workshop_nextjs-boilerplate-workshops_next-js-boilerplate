import { ImageCard } from "@/components/image/image";

function Hero() {
  return (
    <section className="hero-section">
      <ImageCard
        src="/images/hero-mobile.png"
        alt="Fireplace with a stool next to it"
        width="340"
        height="340"
      />

      <div className="hero-description">
        <p className="hero-headline">
          Discover the <br />
          perfect fireplace ...
        </p>
        <p className="consultation-paragraph">
          Book consultation: <span className="number-span">0121 345 6789</span>
        </p>
      </div>
    </section>
  );
}

export default Hero;
