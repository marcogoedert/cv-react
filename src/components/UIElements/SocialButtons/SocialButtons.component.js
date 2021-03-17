import React from "react";

import './SocialButtons.styles.css';

const SocialButtons = (props) => {

  const linksSummary = Object.keys(props.links).map(key => {
    console.log(props.links[key]);
    if (props.links[key]) {
      return (
        <a href={props.links[key]} className="social-link" target="_blank">
            <i className={props.linkIcons[key]}></i>
        </a>
      );
    }
    return null;
  });

  return (
      <nav className="social-links">
        <div>
          {linksSummary}
        </div>
      </nav>
  )
};

export default SocialButtons;