import { data } from "autoprefixer";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";

const Blogs = ({}) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <>
      <div>
        <h3 className="font-bold text-4xl">Blogs: {blogs.length}</h3>
      </div>
    </>
  );
};

Blogs.propTypes = {};

export default Blogs;
