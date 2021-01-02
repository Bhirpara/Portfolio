import React from "react";
import "./footer.style.css";

const FooterPanel = () => {
  return (
    <div>
      <div className="py-2 text-center footer-style">© Bansari Hirpara &nbsp; {new Date().getFullYear()}</div>
      <div className=" text-center footer-note">Website Under Construction</div>
    </div>
  );
};

export default FooterPanel;
