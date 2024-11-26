import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p className="m-0 text-center">© {currentYear} copyright all rights reserved</p>
      </div>
    </footer>
  );
}
