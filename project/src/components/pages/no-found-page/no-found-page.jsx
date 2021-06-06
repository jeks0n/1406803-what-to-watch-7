import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../logo/logo';

function NoFoundPage() {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">404: Stop Horsing Around</h1>
      </header>

      <section>
        <img src="img/arnold-cigar-gun.jpg"
          alt="Arny doesn't like you!"
          width="466px"
          height="311px"
          style={{
            display: 'block',
            margin: 'auto',
          }}
        />
        <p style={{textAlign: 'center'}}>You&apos;d better not make me sad — go to the&nbsp;
          <Link style={{
            textDecoration: 'underline',
            cursor: 'pointer',
          }} to="/"
          >main page
          </Link> and give me the highest rating
        </p>

      </section>

      <footer className="page-footer">
        <Logo isFooter />

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default NoFoundPage;
