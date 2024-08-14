import Card from "./card/card";

const contents = [
  {
    title: "Give a a call",
    description:
      "Call us and book in a 'Design Consultation' on a date and time that suits you.",
  },
  {
    title: "We come to you",
    description:
      "We come to your home to do an assessment of the space and to your style preference.",
  },
  {
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
          <Card title={content.title} description={content.description} />
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
