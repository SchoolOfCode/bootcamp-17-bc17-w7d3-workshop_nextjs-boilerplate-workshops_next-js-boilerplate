function WeRecommend ({title, description}) {
    return (
        <article className="tile">
            <img
                src="/images/how-it-works-3.png"
                alt="Fireplace recommendation illustration"
                className="tile-image"
            />
            <h3>We recommend...</h3>
                <p>We send you a bespoke set of fireplace recommendations.</p>
        </article>
    );
}

export default WeRecommend;