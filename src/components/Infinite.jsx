import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetPokemons } from "../RTK/getPokemonsSlice";
import "../index.css";

const Infinite = () => {
  const dispatch = useDispatch();
  const [loadedItems, setLoadedItems] = useState(20);
  const { results } = useSelector((state) => state.getPokemons);
  const itemsPerLoad = 20;

  const scrollHandler = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 50 >=
      document.documentElement.offsetHeight
    ) {
      loadMoreData();
    }
  };

  const loadMoreData = () => {
    setLoadedItems((prev) => prev + itemsPerLoad);
  };

  useEffect(() => {
    dispatch(asyncGetPokemons(loadedItems));
  }, [dispatch, loadedItems]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="container mx-auto max-w-[600px] p-5 bg-gray-100 border border-gray-300">
      {results.slice(0, loadedItems).map((item) => (
        <div key={item.name} className="item p-2 border-b border-gray-400">
          {item.name}
        </div>
      ))}
    </div>
  );
};

export { Infinite };
