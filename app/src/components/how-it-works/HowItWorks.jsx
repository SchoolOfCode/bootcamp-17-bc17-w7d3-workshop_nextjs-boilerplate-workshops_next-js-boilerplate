export default function HowItWorks(props) {
    return (
        <>
            <section className="how-it-works">
                <img src={props.img} alt="" />
                <h3>{props.title}</h3>
                <p>
                  {props.description}
                </p>
            </section>
        </>
    )
}