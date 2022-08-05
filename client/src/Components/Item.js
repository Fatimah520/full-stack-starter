import './Item.scss';
import { Link } from 'react-router-dom';
function Item({ id, Title, Subtitle, Tagline, Image }) {
  return (
    <div className="card bowl">
      <div className="card-body">
        <h5 className="card-title">{Title}</h5>
        <p className="card-text">{Subtitle}</p>
        <p className="tagline">{Tagline}</p>
        <p className="">
          <img src={Image} className="pic" />
        </p>

        <Link to={`/bowls/${id}`} class="btn btn-light">
          Show more
        </Link>
      </div>
    </div>
  );
}

export default Item;
