import Card from "./card/card";

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-it-works-section">
      <h2 className="how-it-works-text">How It Works</h2>
      <div className="tiles">
        <Card
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
        />
      </div>
    </section>
  );
}

export default HowItWorks;
