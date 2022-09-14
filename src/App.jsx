import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = ({ state }) => {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Main
        users={state.users}
        publications={state.publications}
        messages={state.messages}
        dialogs={state.dialogs}
      />
      <Footer />
    </div>
  );
}

export default App;
