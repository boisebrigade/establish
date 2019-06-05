import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const Footer = ({match: {path}}) => {
  const isActive = targetPath => path === targetPath

  return <div className="footer mt-auto">
    <div className={isActive('/') ? `footerNav activeNav` : `footerNav`}>
      <Link to={`/`}>
        <img className="footerIcon" src={isActive('/') ? `/assets/screens/home-active.svg` : `/assets/screens/home.svg`} alt='Home' />
        <div>Home</div>
      </Link>
    </div>

    <div className={isActive('/favorites') ? `footerNav activeNav` : `footerNav`}>
      <Link to={`/favorites`}>
        <img className="footerIcon"
             src={isActive('/favorites') ? `/assets/screens/favorite-active.svg` : `/assets/screens/favorite.svg`} alt='Favorites' />
        <div>
          Favorites
        </div>
      </Link>
    </div>

    <div className={`dn ` + (isActive('/notifications') ? `footerNav activeNav` : `footerNav`)}>
      <Link to={`/notifications`}>
        <img className="footerIcon"
             src={isActive('/notifications') ? `/assets/screens/notification-active.svg` : `/assets/screens/notification.svg`} alt='Notifications'/>
        <div>
          Notifications
        </div>
      </Link>
    </div>

    <div className={`dn ` + (isActive('/settings') ? `footerNav activeNav` : `footerNav`)}>
      <Link to={`/settings`}>
        <img className="footerIcon" src={isActive('/settings') ? `/assets/screens/setting-active.svg` : `/assets/screens/setting.svg`} alt='Settings' />
        <div>
          Settings
        </div>
      </Link>
    </div>
  </div>
}

export default withRouter(Footer)
