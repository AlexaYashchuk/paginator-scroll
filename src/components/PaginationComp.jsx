import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetPokemons } from "../RTK/getPokemonsSlice";
import { useEffect, useState } from "react";
import "../index.css";

const PaginationComp = () => {
  const dispatch = useDispatch();
  const { results } = useSelector((state) => state.getPokemons);

  useEffect(() => {
    dispatch(asyncGetPokemons());
  }, [dispatch]);

  const itemsPerPage = 15;
  const [currentPage, setCurrentPage] = useState(1);

  const data = results;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = data.slice(startIndex, endIndex);

  const totalItems = data.length;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      {currentItems.map((item) => (
        <div key={crypto.randomUUID()} className="item">
          {item.name}
        </div>
      ))}
      <Pagination
        className="item"
        current={currentPage}
        pageSize={itemsPerPage}
        total={totalItems}
        onChange={handlePageChange}
        showSizeChanger={false}
      />
    </div>
  );
};

export { PaginationComp };
