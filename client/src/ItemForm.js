import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Api from './Api';

function ItemForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    Title: 'Test1',
    Subtitle: 'hello1',
    Tagline: 'join1',
    Image: 'welcome1',
  });

  useEffect(() => {
    if (id) {
      Api.bowls.get(id).then((response) => setData(response.data));
    }
  }, [id]);

  async function onSubmit(event) {
    event.preventDefault();
    try {
      let response;
      if (id) {
        response = await Api.bowls.update(id, data);
      } else {
        response = await Api.bowls.create(data);
      }
      navigate(`/new/${response.data.id}`);
    } catch (error) {
      console.log(error);
    }
  }

  function onChange(event) {
    const newData = { ...data };
    newData[event.target.name] = event.target.value;
    setData(newData);
  }

  return (
    <main className="container">
      <div className="row justify-content-center">
        <div className="col col-sm-10 col-md-8 col-lg-6 col-xl-4">
          <h1>Item</h1>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="Title">
                Title
              </label>
              <input type="text" className="form-control" id="Title" name="Title" onChange={onChange} value={data.Title} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Subtitle">
                Subtitle
              </label>
              <input type="text" className="form-control" id="Subtitle" name="Subtitle" onChange={onChange} value={data.Subtitle} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Tagline">
                Tagline
              </label>
              <input type="text" className="form-control" id="Tagline" name="Tagline" onChange={onChange} value={data.Tagline} />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="Image">
                Image
              </label>
              <input type="text" className="form-control" id="Image" name="Image" onChange={onChange} value={data.Image} />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
export default ItemForm;
