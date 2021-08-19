import React from 'react';
import PropTypes from 'prop-types';

import { Header } from './Header';
import './page.css';

export const Page = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
    <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />

    <section>
      <h2>Popular</h2>
        <div class="movie-banner">
          <figure>
              <img src="https://static.posters.cz/image/750/posters/pulp-fiction-cover-i1288.jpg" alt="" />
              <figcaption>Movie 1</figcaption>
          </figure>
          <figure>
            <img src="https://m.media-amazon.com/images/M/MV5BMTEwNjg2MjM2ODFeQTJeQWpwZ15BbWU4MDQ1MDU5OTEx._V1_.jpg" alt="" />
              <figcaption>Movie 2</figcaption>
          </figure>
          <figure>
            <img src="https://upload.wikimedia.org/wikipedia/en/7/7f/WillyWonkaMoviePoster.jpg" alt="" />
              <figcaption>Movie 3</figcaption>
          </figure>
          <figure>
              <img src="https://m.media-amazon.com/images/M/MV5BMTYzODYzNzg2MF5BMl5BanBnXkFtZTcwMTkzOTQzMw@@._V1_.jpg" alt="" />
              <figcaption>Movie 4</figcaption>
          </figure>
          <figure>
              <img src="https://cdn.shopify.com/s/files/1/1416/8662/products/pocahontas_1995_original_film_art_1200x.jpg?v=1591929441" alt="" />
              <figcaption>Movie 5</figcaption>
          </figure>
        </div>
    </section>
  </article>
);
Page.propTypes = {
  user: PropTypes.shape({}),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Page.defaultProps = {
  user: null,
};
