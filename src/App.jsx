import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = ({
  users,
  publications,
  messages,
  dialogs
}) => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Main
        users={users}
        publications={publications}
        messages={messages}
        dialogs={dialogs}
      />
      <Footer />
    </div>
  );
}

export default App;
