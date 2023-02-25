import { ToastContainer } from 'react-toastify';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AppRouter from './router/AppRouter';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <AppRouter />
                <ToastContainer />
            </AuthProvider>
        </div>
    );
}

export default App;
