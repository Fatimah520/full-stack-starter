import { useState, useEffect } from 'react';
import Item from './Components/Item';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(function () {
    fetch('/api/bowls')
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <main className="container">
      <h1>Inayahs Exotik Stirs</h1>
      <br />
      <br />
      <div className="row">
        {items.map((item) => (
          <Item Title={item.Title} Subtitle={item.Subtitle} Tagline={item.Tagline} Image={item.Image} id={item.id} />
        ))}
      </div>
    </main>
  );
}

export default Home;
