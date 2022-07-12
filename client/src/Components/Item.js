import './Item.scss';
import { Link } from 'react-router-dom';
function Item({ id, Title, Subtitle, Tagline, Image }) {
  return (
    <div className="card bowl">
      <div className="card-body">
        <img
          src="https://cdn.glitch.com/02323891-d81b-4238-8928-df1bf7508f76%2Fkisspng-palm-branch-clip-art-palm-trees-palm-leaf-manuscri-5b67cc7f62b5f4.0254050915335292154043-removebg-preview%20copy%202.png?v=1628410324005"
          className="palm"
        />
        <h5 className="card-title">{Title}</h5>
        <p className="card-text">{Subtitle}</p>
        <p className="">{Tagline}</p>
        <p className="">
          <img src={Image} className="" />
        </p>
        <a href="#" className="btn btn-primary"></a>
        <Link to={`/new/${id}`} class="btn btn-light">
          Show more
        </Link>
      </div>
    </div>
  );
}

export default Item;
