import { ImageCard } from "@/components/image/image";

function Hero() {
  return (
    <section className="hero-section">
      <ImageCard
        src="/images/hero-mobile.png"
        alt="Fireplace with a stool next to it"
        width="360"
        height="360"
        className="hero-image"
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
