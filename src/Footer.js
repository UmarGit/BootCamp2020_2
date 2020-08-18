import React from 'react';

function Footer(props) {
  return (
    <footer className={` ${props.darkMode ? 'footerDark' : 'footerLight'} `}>
        {props.footer} <a href='https://github.com/UmarGit' target='_blank' rel="noopener noreferrer">UmarGit</a> <span role="img" aria-label="emoji">🤓</span>
    </footer>
  );
}

export default Footer;
