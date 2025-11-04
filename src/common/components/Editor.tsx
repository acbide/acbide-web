import { useEffect, useRef, useState } from 'react';

import * as monaco from 'monaco-editor';
import { Editor, type Monaco } from '@monaco-editor/react';

import './editor.css';

function EditorView({ setPosition }: any) {
    const [editorData, setEditorData] = useState<string | undefined>('');
    const [editorError, setEditorError] = useState<monaco.editor.IMarker[]>([]);

    const editorRef = useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

    function handleEditorDidMount(
        editor: monaco.editor.IStandaloneCodeEditor,
        monaco: Monaco,
    ) {
        editorRef.current = editor;
        editorRef.current?.onDidChangeCursorPosition((ev) => {
                setPosition(ev.position);
        });
    }

    const handleEditorDataChange = (
        value: string | undefined,
        ev: monaco.editor.IModelContentChangedEvent,
    ) => {
        setEditorData(value);
        console.log({ value, ev });
    };

    const handleValidate = (markers: monaco.editor.IMarker[]) => {
        setEditorError(markers);
    };

    useEffect(() => {
        if (editorError.length) {
            return;
        }
    }, [editorData]);

    return (
        <Editor
            key={'editor'}
            defaultLanguage="typescript"
            defaultValue="// some comment"
            theme="vs-dark"
            className="editor"
            value={editorData}
            onChange={handleEditorDataChange}
            onValidate={handleValidate}
            onMount={handleEditorDidMount}
        />
    );
}

export default EditorView;
