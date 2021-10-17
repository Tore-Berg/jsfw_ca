import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="wrapper">{children}</main>
      <Footer />
    </>
  );
}
