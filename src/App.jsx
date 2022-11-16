import { Navigate, Route, Routes } from "react-router-dom";

import AuthContainer from "./pages/Auth/AuthContainer";
import HomeContainer from "./pages/Home/HomeContainer";
import NetworkContainer from "./pages/Network/NetworkContainer";
import MusicContainer from "./pages/Music/MusicContainer";
import ProfileContainer from "./pages/Profile/ProfileContainer";
import MessagingContainer from "./pages/Messaging/MessagingContainer";

const App = () => {

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/auth' element={<AuthContainer />} />
        <Route path='/home' element={<HomeContainer />} />
        <Route path='/messaging/*' element={<MessagingContainer />} />
        <Route path='/network' element={<NetworkContainer />} />
        <Route path='/music' element={<MusicContainer />} />
        <Route path='/profile/:userId' element={<ProfileContainer />} />
      </Routes>
    </div>
  );
}

export default App;
