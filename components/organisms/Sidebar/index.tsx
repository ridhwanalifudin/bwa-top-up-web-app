import React from "react";
import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="menu-overview" active/>
          <MenuItem title="Transactions" icon="menu-transaction"/>
          <MenuItem title="Messages"icon="menu-messages"/>
          <MenuItem title="Card" icon="menu-card"/>
          <MenuItem title="Rewards" icon="menu-rewards"/>
          <MenuItem title="Settings" icon="menu-settings"/>
          <MenuItem title="Log Out" icon="menu-logout"/>
        </div>
        <Footer />
      </div>
    </section>
  );
}
