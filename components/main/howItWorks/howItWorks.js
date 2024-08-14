import Card from "./card/card";
import { ImageCard } from "@/components/image/image";

const contents = [
  {
    image: "/images/how-it-works-1.png",
    alt: "description",
    title: "Give a a call",
    description:
      "Call us and book in a 'Design Consultation' on a date and time that suits you.",
  },
  {
    image: "/images/how-it-works-2.png",
    alt: "description",
    title: "We come to you",
    description:
      "We come to your home to do an assessment of the space and to your style preference.",
  },
  {
    image: "/images/how-it-works-3.png",
    alt: "description",
    title: "We reccomend",
    description: "We send you a bespoke set of fireplace recommendations.",
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <h2 className="how-it-works-text">How It Works</h2>
      <div className="tiles">
        {contents.map((content) => (
          <Card
            image={<ImageCard src={content.image}  alt={content.alt}/>}
            key={content.title}
            title={content.title}
            description={content.description}
          />
        ))}

        {/* <Card
          title="Give a a call"
          description="Call us and book in a 'Design Consultation' on a date and time that suits you."
        />
        <Card
          title="We come to you"
          description="We come to your home to do an assessment of the space and to
                  your style preference."
        />
        <Card
          title="We reccomend"
          description="We send you a bespoke set of fireplace recommendations."
        /> */}
      </div>
    </section>
  );
}

export default HowItWorks;
