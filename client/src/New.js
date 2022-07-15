import './New.scss';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function New() {
  const { id } = useParams();

  const [data, setData] = useState();

  useEffect(
    function () {
      if (id) {
        fetch(`/api/bowls/${id}`)
          .then((response) => response.json())
          .then((data) => setData(data));
      }
    },
    [id]
  );

  return (
    <main className="container">
      <h1> {data?.Title} </h1>
      {/* <p>{JSON.stringify(data)}</p> */}
      <h2 className="Subtitle">{data?.Subtitle} </h2>
    </main>
  );
}
export default New;
