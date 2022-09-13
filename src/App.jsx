import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = ({ state }) => {
  return (
    <div className="App">
      <Header />
      <Navbar />
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
