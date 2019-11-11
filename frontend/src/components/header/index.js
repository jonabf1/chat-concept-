import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { BrowserRouter } from 'react-router-dom';

export default function Header({ img, visibleLeft, visibleImage }) {
  return (
    <div className="header">
      <BrowserRouter>
        <a href="/">
          {visibleLeft && <FaChevronLeft color="#fff" size={20} />}
        </a>
      </BrowserRouter>
      <h2>chat</h2>
      {visibleImage ? (
        <img src={img && img} alt="avatar" />
      ) : (
        <FaChevronLeft color="transparent" size={0} />
      )}
    </div>
  );
}
