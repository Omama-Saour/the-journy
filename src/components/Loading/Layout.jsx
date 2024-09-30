import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
  const navigate=useNavigate()
  return (
    <div className="flex flex-col">
      <Header
        onOldUserClick={()=> navigate('/login',{replace:true})}
        onNewUserClick= {()=> navigate('/register',{replace:true})}
      />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
