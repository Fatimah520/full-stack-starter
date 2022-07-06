import './Item.scss';
import { Link } from 'react-router-dom';
function Item({ id, title, text }) {
  return (
    <div className="card">
      <div className="card-body">
        <img
          src="https://cdn.glitch.com/02323891-d81b-4238-8928-df1bf7508f76%2Fkisspng-palm-branch-clip-art-palm-trees-palm-leaf-manuscri-5b67cc7f62b5f4.0254050915335292154043-removebg-preview%20copy%202.png?v=1628410324005"
          className="palm"
        />
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <img
          src="https://cdn.glitch.com/02323891-d81b-4238-8928-df1bf7508f76%2Fwords%20copy%203.png?v=1628550060628
          "
          className="initial"
        />
        <img
          src="https://cdn.glitch.global/02323891-d81b-4238-8928-df1bf7508f76/image.png?v=1655690120602
          "
          className="left"
        />
        <img
          src="https://cdn.glitch.global/02323891-d81b-4238-8928-df1bf7508f76/right tree?v=1628547498360
          "
          className="right"
        />
        <img
          src="https://cdn.glitch.com/02323891-d81b-4238-8928-df1bf7508f76%2Fboo%20copy.png?v=1628559293054
          "
          className="join"
        />
        <a href="#" className="btn btn-primary"></a>
        <Link to={`/new/${id}`} class="btn btn-light">
          Show more
        </Link>
      </div>
    </div>
  );
}

export default Item;
