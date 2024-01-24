// ** React Imports
import React from "react";

// ** Third Party Imports
import Header from "../Header/Header";
import { LayoutProps } from "../../Models/interface";


const Layout: React.FC<LayoutProps> = ({ isAuthenticated, children }) => {
  return (
    <div>
      <Header />
      {isAuthenticated ? children : null}
    </div>
  );
};

export default Layout;
