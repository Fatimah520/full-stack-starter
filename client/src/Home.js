import { useState, useEffect } from 'react';
import Item from './Components/Item';

function Home() {
  const [items, setItems] = useState([]);

  useEffect(function () {
    const request = fetch(
      'https://api.airtable.com/v0/appZ5I5hWkEFGBtuy/Table%201?api_key=keyv4rciCGYhYGZiY&maxRecords=3&view=Grid%20view'
    );
    request.then((response) => response.json()).then((data) => setItems(data.records));
  }, []);

  return (
    <main className="container">
      <h1>Inayahs Exotik Stirs</h1>
      <br />
      <br />
      <div className="row">
        {items.map((item) => (
          <Item Title={item.fields.Title} Subtitle={item.fields.Subtitle} Tagline={item.fields.Tagline} Image={item.fields.Image[0].url} />
        ))}
      </div>
    </main>
  );
}

export default Home;
