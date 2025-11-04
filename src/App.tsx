import { useState } from 'react';
import './App.css';
import ActivityBar from './common/components/ActivityBar';
import SearchBar from './common/components/SearchBar';
import StatusBar from './common/components/StatusBar';
import AppLayout from './common/layouts/AppLayout';
import * as monaco from 'monaco-editor';

function App() {
    const [position, setPosition] =
        useState<monaco.editor.ICursorPositionChangedEvent['position']>();
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
                        display: 'flex',
                    }}
                >
                    <ActivityBar />
                    <div
                        style={{
                            height: '100%',
                            width: '100%',
                        }}
                    >
                        <AppLayout setPosition={setPosition} />
                    </div>
                </div>
                <div>
                    <StatusBar
                        line={position?.lineNumber ?? 0}
                        column={position?.column ?? 0}
                    />
                </div>
            </div>
        </>
    );
}

export default App;
