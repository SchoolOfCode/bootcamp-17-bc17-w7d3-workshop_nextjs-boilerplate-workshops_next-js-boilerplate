import { ImageCard } from "@/components/image/image";
function Founders() {
  return (
    <main>
      <section className="founders-section">
        <div className="founders-container">
          <p className="founders-headline">
            Meet the artisans behind our masterpieces!
          </p>
          <p className="founders-headline">Mike and Mandy</p>
          <ImageCard
            src="/images/founder-mike-and-mandy.png"
            alt="description"
            width="340"
            height="340"
            className="founder-image"
          />
        </div>
      </section>

      <section className="our-expertice"></section>
    </main>
  );
}

export default Founders;
