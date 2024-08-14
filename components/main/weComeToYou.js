function WeComeToYou({title, description}) {
    return (
        <article className="tile">
            <img
                src="/images/how-it-works-2.png"
                alt="Home visit illustration"
                className="tile-image"
            />

            <h3>{title}</h3>
            <p>
                {description}
            </p>
        </article>
    );
}

export default WeComeToYou