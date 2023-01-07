import { Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

import AuthContainer from "./pages/Auth/AuthContainer";
import HomeContainer from "./pages/Home/HomeContainer";
import NetworkContainer from "./pages/Network/NetworkContainer";
import CommunityContainer from "./pages/Community/CommunityContainer";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import MessagingContainer from "./pages/Messaging/MessagingContainer";
import Error from "./pages/Error/Error";

const App = () => {
  const authUserId = useSelector((state) => state.auth.authUser.id);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/auth" element={<AuthContainer />} />
        <Route path="/home" element={<HomeContainer />} />
        <Route path="/messaging/*" element={<MessagingContainer />} />
        <Route path="/network" element={<NetworkContainer />} />
        <Route path="/community" element={<CommunityContainer />} />
        <Route path="/profile/:userId" element={<ProfileContainer />} />
        <Route
          path="/profile"
          element={<Navigate to={`/profile/${authUserId}`} />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
