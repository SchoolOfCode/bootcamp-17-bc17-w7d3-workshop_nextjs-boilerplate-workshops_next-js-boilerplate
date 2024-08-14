function Card(props) {
  return (
    <article className="tile">
      <img src="" alt="" className="tile-image" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </article>
  );
}

export default Card;
