import CommunityParticipationPage from "pages/CommunityParticipationPage";
import ErrorPage from "pages/ErrorPage";
import { Routes, Route } from "react-router-dom";

function RoutesComponent(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<CommunityParticipationPage />} />

      <Route path="/error" element={<ErrorPage />} />

      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default RoutesComponent;
