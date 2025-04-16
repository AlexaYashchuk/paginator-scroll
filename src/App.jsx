import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="container mx-auto max-w-[600px] p-5 bg-gray-100 border border-gray-300">
      <div className="item p-2 border-b border-gray-400">
        <Link to="/pagination">
          <Button color="primary" variant="filled">
            Pagination
          </Button>
        </Link>
      </div>
      <div className="item p-2 border-gray-400">
        <Link to="/infinite">
          <Button color="primary" variant="filled">
            Infinite
          </Button>
        </Link>
      </div>
    </div>
  );
};

export { App };
