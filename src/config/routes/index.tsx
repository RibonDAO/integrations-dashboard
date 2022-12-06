import HomePage from "pages/HomePage";
import { Routes, Route } from "react-router-dom";

function RoutesComponent(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default RoutesComponent;
