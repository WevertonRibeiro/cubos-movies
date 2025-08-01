import "./styles.scss";

export default function CardList({ children }) {
  return (
    <div className="card-list">
      <div className="card-list-wrapper">{children}</div>
    </div>
  );
}
