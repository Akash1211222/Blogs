import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  return (
    <div>
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}
