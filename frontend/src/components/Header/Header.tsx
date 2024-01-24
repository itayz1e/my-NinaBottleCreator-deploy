// ** React Imports
import React from "react";

// ** Third Party Imports
import Icon_Logo from "../../assets/logo/Icon_Logo";

const Header: React.FC = () => {
  return (
    <div className="header">
      <Icon_Logo />
      <span className="header-title">SPIRIT CREATOR</span>
    </div>
  );
};

export default Header;
