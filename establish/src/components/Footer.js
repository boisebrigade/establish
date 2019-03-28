import React from 'react';
import { Link } from 'react-router-dom';

import footer from '../footer.json';

const Footer = () =>
  <div className="footer">
    {footer.map((navigation, n) => {
      const className = (window.location.href.indexOf(navigation.link)) > -1 ? "footerNav activeNav" : "footerNav";
      const imgSrc = (window.location.href.indexOf(navigation.link)) > -1 ? `/icons/${navigation.activeIcon}` : `/icons/${navigation.icon}`

      return (
        <React.Fragment key={n}>
          <div className={className}>
            <img className="footerIcon" src={imgSrc} alt={navigation.icon} />
            <div>
              <Link to={navigation.href}>
                {navigation.name}
              </Link>
            </div>
          </div>
        </React.Fragment>
      )
    })}
  </div>

export default Footer
