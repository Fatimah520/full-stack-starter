import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function New() {
  const { id } = useParams();

  const [data, setData] = useState();

  useEffect(
    function () {
      if (id) {
        fetch(`https://api.airtable.com/v0/appZ5I5hWkEFGBtuy/Table%201/${id}?api_key=keyv4rciCGYhYGZiY`)
          .then((response) => response.json())
          .then((data) => setData(data));
      }
    },
    [id]
  );

  return (
    <main className="container">
      <h1> {data?.fields?.Title} </h1>
      <p>{JSON.stringify(data)}</p>
    </main>
  );
}
export default New;
