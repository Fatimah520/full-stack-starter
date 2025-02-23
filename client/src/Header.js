import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import './Header.scss';
import Api from './Api';
import { useAuthContext } from './AuthContext';

function Header() {
  const navigate = useNavigate();
  const { user, setUser } = useAuthContext();

  useEffect(
    function () {
      Api.users.me().then((response) => {
        if (response.status === 204) {
          setUser(null);
        } else {
          setUser(response.data);
        }
      });
    },
    [setUser]
  );

  async function onLogout(event) {
    event.preventDefault();
    await Api.auth.logout();
    setUser(null);
    navigate('/');
  }

  return (
    <nav className="header navbar navbar-expand-md navbar-light bg-light fixed-top">
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
          img
          src="https://cdn.glitch.com/02323891-d81b-4238-8928-df1bf7508f76%2Fkisspng-palm-branch-clip-art-palm-trees-palm-leaf-manuscri-5b67cc7f62b5f4.0254050915335292154043-removebg-preview%20copy%202.png?v=1628410324005">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav flex-grow-1 mb-2 mb-md-0">
            <li className="nav-item active">
              <Link className="nav-link" aria-current="page" to="/"></Link>
            </li>
            <div className="flex-grow-1 d-flex justify-content-end">
              {user && (
                <>
                  <li className="nav-item me-3">
                    <span className="nav-link d-inline-block">
                      Hello, <Link to="/account">{user.firstName}!</Link>
                    </span>
                    {user.pictureUrl && <div className="header__picture" style={{ backgroundImage: `url(${user.pictureUrl})` }}></div>}
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/logout" onClick={onLogout}>
                      Log out
                    </a>
                  </li>
                </>
              )}
              {!user && (
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Log in
                  </Link>
                </li>
              )}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
