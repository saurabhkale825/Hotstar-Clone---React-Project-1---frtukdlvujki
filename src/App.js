import './App.css';
import MainNavigation from './Components/NavBar/MainNavigation';
// import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <ToastContainer
                position="bottom-right"
                type="success"
                theme="light"
                autoClose={5000}
                closeOnClick={true}
              />

    </div>
  );
}

export default App;

// reportWebVitals();
