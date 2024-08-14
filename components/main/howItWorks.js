import GiveUsACall from "./giveUsACall";
import WeComeToYou from "./weComeToYou"; 
import WeRecommend from "./weRecommend";

const components = [ ]

function HowItWorks() {
    return (
        <section id="how-it-works" className="how-it-works-section">
            <h2 className="how-it-works-text">How It Works</h2>
            <div className="tiles">
              <GiveUsACall title="Give us a cal..." description="Call us and book in a Design Consultation on a date and time to suit you" />
              <WeComeToYou title="We come to you..." description="We come to your home to do an assessment of the space and to
                  your style preference." />
              <WeRecommend title="We recommend..." description="We send you a bespoke set of fireplace recommendations. "/>
            </div>
        </section>    
    );
}

export default HowItWorks