import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const Footer = ({match: {path}}) => {
  const isActive = targetPath => path === targetPath

  return <div className="footer">
    <div className={isActive('/') ? `footerNav activeNav` : `footerNav`}>
      <Link to={`/`}>
        <img className="footerIcon" src={isActive('/') ? `/icons/Home-active.svg` : `/icons/Home.svg`}/>
        <div>Home</div>
      </Link>
    </div>

    <div className={isActive('/favorites') ? `footerNav activeNav` : `footerNav`}>
      <Link to={`/favorites`}>
        <img className="footerIcon"
             src={isActive('/favorites') ? `/icons/Favorites-active.svg` : `/icons/Favorites.svg`}/>
        <div>
          Favorites
        </div>
      </Link>
    </div>

    <div className={isActive('/notifications') ? `footerNav activeNav` : `footerNav`}>
      <Link to={`/notifications`}>
        <img className="footerIcon"
             src={isActive('/notifications') ? `/icons/Notifications-active.svg` : `/icons/Notifications.svg`}/>
        <div>
          Notifications
        </div>
      </Link>
    </div>

    <div className={isActive('/settings') ? `footerNav activeNav` : `footerNav`}>
      <Link to={`/settings`}>
        <img className="footerIcon" src={isActive('/settings') ? `/icons/Settings-active.svg` : `/icons/Settings.svg`}/>
        <div>
          Settings
        </div>
      </Link>
    </div>
  </div>
}

export default withRouter(Footer)
