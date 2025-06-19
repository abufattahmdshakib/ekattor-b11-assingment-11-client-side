import React from "react";
import { Outlet } from "react-router";
import NavBar from "../Components/NavBar/NavBar";
import Footer from "./../Components/Footer/Footer";

const HomeLayout = () => {
  return (
    <div>
      <nav>
        <NavBar></NavBar>
      </nav>
      <main className="min-h-[calc(100vh-330px)] max-w-11/12 mx-auto">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default HomeLayout;
