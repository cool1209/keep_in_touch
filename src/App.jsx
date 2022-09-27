import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

const App = ({ store }) => {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Main store={store} />
      <Footer />
    </div>
  );
}

export default App;
