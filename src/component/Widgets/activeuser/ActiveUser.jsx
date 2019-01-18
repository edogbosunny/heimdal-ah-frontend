import React from 'react';

const ActiveUser = () => (
  <div className="active_user_logo">
    <div className="dropdown">
      <img className="notification_icon dropbtn" src="/src/images/Icons.png" alt="notification-logo" />
      <div className="dropdown-content">
        <div className='username'>Notification</div>
        <div><a to="/">a 1</a></div>
        <div><a to="/">a 2</a></div>
        <div><a to="/">a 3</a></div>
      </div>
    </div>
    <div className='dropdown'>
      <img className="profile-icon" src='/src/images/Group 2.1.png' alt="profile-logo" />
      <div className="dropdown-content">
        <div className='username'>@el-Joft</div>
        <div><a to="/dashboard">Dashboard</a></div>
        <div><a to="/create-article">Write An Article</a></div>
        <div><a to="/reading-stats">Reading Stats</a></div>
        <div><a to="/bookmarks">Bookmarks</a></div>
        <div><a to="/notifications">Notification</a></div>
        <div><a to="/publication">Publication</a></div>
        <div className='user-settings'>
          <div><a to="/user-profile">Profile</a></div>
          <div><a to="/logout">Logout</a></div>
        </div>
      </div>
    </div>
  </div>
);

export default ActiveUser;