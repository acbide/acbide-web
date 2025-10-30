import './App.css';
import ActivityBar from './common/components/ActivityBar';
import SearchBar from './common/components/SearchBar';
import StatusBar from './common/components/StatusBar';
import AppLayout from './common/layouts/AppLayout';

function App() {
    return (
        <>
            <div
                style={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div>
                    <SearchBar />
                </div>
                <div
                    style={{
                        height: '100%',
                        width: '100%',
                        display: 'flex'
                    }}
                >
                    <ActivityBar />
                    <div
                        style={{
                            height: '100%',
                            width: '100%',
                        }}
                    >
                        <AppLayout />
                    </div>
                </div>
                <div>
                    <StatusBar />
                </div>
            </div>
        </>
    );
}

export default App;
