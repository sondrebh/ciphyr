// Contrib
import React from 'react';

// Logo
import logoSvg from '../../../icons/ciphyrLogo.svg';

// Comps
import RoomView from '../RoomView/RoomView';

const SidebarComp = () => { 
    return (
      <div className='SidebarComp'>
        <img src={logoSvg} />
        <RoomView />
      </div>
    );
  };
  
  export default SidebarComp;