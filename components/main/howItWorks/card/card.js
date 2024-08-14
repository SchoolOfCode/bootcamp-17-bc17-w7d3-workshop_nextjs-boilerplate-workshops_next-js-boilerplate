function Card(props) {
  return (
    <article className="tile">
      {props.image}
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </article>
  );
}

export default Card;
