import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const LINKS = [
    { to: '/', text: 'Home' },
    { to: '/starred', text: 'Starred' },
  ];

  return (
    <div>
      <ul>
        {LINKS.map(element => {
          return (
            <li>
              <Link to={element.to}>{element.text}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavigationBar;
