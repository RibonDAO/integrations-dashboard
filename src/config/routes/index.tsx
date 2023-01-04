import CommunityParticipationPage from "pages/CommunityParticipationPage";
import ErrorPage from "pages/ErrorPage";
import {Routes, Route, Navigate, useLocation} from "react-router-dom";

function RoutesComponent(): JSX.Element {
  const {search} = useLocation();

  return (
    <Routes>
      <Route path="/" element={<CommunityParticipationPage />} />

      <Route path="/error" element={<ErrorPage />} />

      <Route path="*" element={<Navigate to={{pathname: "/", search}} />} />
    </Routes>
  );
}

export default RoutesComponent;
