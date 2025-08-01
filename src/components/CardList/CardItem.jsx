import getImageUrl from "@/utils/getImageUrl";

export default function CardItem({ title, image }) {
  return (
    <div className="card-item">
      <div className="card-wrapper">
        <div className="card-image-wrapper">
          <div
            className="card-image"
            style={{ backgroundImage: `url(${getImageUrl(image, 500)})` }}
          ></div>
        </div>
        <a href="#">
          <h4>{title}</h4>
        </a>
      </div>
    </div>
  );
}
