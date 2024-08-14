function GiveUsACall ({title, description}) {
    return (
        <article className="tile">
            <img
                src="/images/how-it-works-1.png"
                alt="Phone call illustration"
                className="tile-image"
            />
            <h3>{title}</h3>
            <p>
                {description}
            </p>
        </article>
    );
}

export default GiveUsACall 