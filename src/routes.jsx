import { Routes, Route } from "react-router-dom";
import { App } from "./App";
import { Infinite } from "./components/Infinite";
import { PaginationComp } from "./components/PaginationComp";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/infinite" element={<Infinite />} />
      <Route path="/pagination" element={<PaginationComp />} />
    </Routes>
  );
};

export { AppRouter };
