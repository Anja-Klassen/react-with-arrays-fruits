import "./Card.css";

export default function Card({ name, color }) {
  const cardClassName = `card card--${color}`;
  return <p className={cardClassName}>{name}</p>;
}
