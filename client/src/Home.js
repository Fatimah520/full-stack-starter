import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useAuthContext } from './AuthContext';
import Item from './Components/Item';

function Home() {
  const { user } = useAuthContext();
  const [items, setItems] = useState([]);

  useEffect(function () {
    fetch('/api/bowls')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <main className="container">
      <h1 className="exotic">Inayahs Exotic Stirs</h1>
      {user?.isAdmin && (
        <p>
          <Link to="/bowls/new" className="btn btn-primary">
            New Bowl
          </Link>
        </p>
      )}
      <div className="row">
        {items.map((item) => (
          <Item Title={item.Title} Subtitle={item.Subtitle} Tagline={item.Tagline} Image={item.Image} id={item.id} />
        ))}
      </div>
    </main>
  );
}

export default Home;
