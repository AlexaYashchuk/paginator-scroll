import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Link to="/pagination">
        <Button color="primary" variant="filled">
          Pagination
        </Button>
      </Link>
      <Link to="/infinite">
        <Button color="primary" variant="filled">
          Infinite
        </Button>
      </Link>
    </div>
  );
};

export { App };
