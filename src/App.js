import './App.css';
import AuthProvider from './context/AuthProvider';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import AppRouter from './router/AppRouter';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <AppRouter />
            </AuthProvider>
        </div>
    );
}

export default App;
