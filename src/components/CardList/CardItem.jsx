import { Link } from "react-router-dom";

import getImageUrl from "@/utils/getImageUrl";

export default function CardItem({ title, image, linkTo }) {
  return (
    <div className="card-item">
      <div className="card-wrapper">
        <div className="card-image-wrapper">
          <Link to={linkTo}>
            <div
              className="card-image"
              style={{ backgroundImage: `url(${getImageUrl(image, 500)})` }}
            ></div>
          </Link>
        </div>
        <Link to={linkTo}>
          <h4>{title}</h4>
        </Link>
      </div>
    </div>
  );
}
