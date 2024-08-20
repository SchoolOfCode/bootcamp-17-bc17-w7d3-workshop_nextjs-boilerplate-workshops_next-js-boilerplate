import HowItWorks from "./HowItWorks"

export default function HowItWorksContainer() {
    return (
        <section className="how-it-works">
          <h2>How it works.</h2>

          <HowItWorks 
            img={"resources/how-it-works-1.png"}
            title={"Give us a call ..."}
            description={'Call us and book in a "Design Consultation" on a date and time to suit you.'}
          />

          <HowItWorks 
            img={"resources/how-it-works-2.png"}
            title={"We come to you ..."}
            description={'We come to your home to do an assessment of the space and to your style preference.'}
          />

          <HowItWorks 
            img={"resources/how-it-works-3.png"}
            title={"We recommend ..."}
            description={'We send you a bespoke set of fireplace recommendations.'}
          />

        </section>
    )
}