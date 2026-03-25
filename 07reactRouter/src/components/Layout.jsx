import React from "react";
import { Outlet } from "react-router-dom"; // 1. Ye import karna zaroori hai
import Header from "./header/Header"; // (Agar aapke paas Header component hai)
import Footer from "./footer/Footers"; // (Agar aapke paas Footer component hai)

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
