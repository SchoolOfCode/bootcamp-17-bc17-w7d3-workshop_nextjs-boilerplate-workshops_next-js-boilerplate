function Card(props) {
  return (
    <article className="tile">
      {/* <img srcSet="#" alt="" className="tile-image" /> */}
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </article>
  );
}

export default Card;
