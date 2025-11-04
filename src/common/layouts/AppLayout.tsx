import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';

import Header from '../components/Header';
import ToolBar from '../components/ToolBar';

import './appLayout.css';
import EditorView from '../components/Editor';

function AppLayout({ setPosition }: any) {
    return (
        <PanelGroup direction="horizontal" autoSaveId={'app-layout'}>
            <Panel
                style={{
                    height: '100%',
                }}
                collapsible={true}
                collapsedSize={10}
                minSize={10}
            >
                <div
                    style={{
                        borderBottom: '5px solid #1d1d1dd2',
                    }}
                >
                    <ToolBar />
                </div>
                File Explorer
            </Panel>
            <PanelResizeHandle className="resize-handle" />
            <Panel>
                <PanelGroup direction="vertical">
                    <Header />
                    <Panel>
                        <EditorView setPosition={setPosition} />
                    </Panel>
                    <PanelResizeHandle className="resize-handle-horizontal" />
                    <Panel collapsible={true} collapsedSize={0} minSize={0}>
                        <div
                            style={{
                                borderBottom: '3px solid #1d1d1dd2',
                            }}
                        >
                            <ToolBar />
                        </div>
                        <PanelGroup direction="horizontal">
                            <Panel defaultSize={40}>Terminal</Panel>
                            <PanelResizeHandle className="resize-handle" />
                            <Panel defaultSize={10}>Terminal number</Panel>
                        </PanelGroup>
                    </Panel>
                </PanelGroup>
            </Panel>
            <PanelResizeHandle className="resize-handle" />
            <Panel>
                <div
                    style={{
                        borderBottom: '5px solid #1d1d1dd2',
                    }}
                >
                    <ToolBar />
                </div>
                Preview
            </Panel>
        </PanelGroup>
    );
};

export default AppLayout;
