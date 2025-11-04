import { useEffect, useRef, useState } from 'react';
import { Terminal } from '@xterm/xterm';
import '@xterm/xterm/css/xterm.css';
import { FitAddon } from '@xterm/addon-fit';

function TerminalView() {
    const terminalRef = useRef(null);
    const terminal = useRef<Terminal>(null);

    const handleOnData = (arg1: string) => {
        console.log('data entered', arg1);
        terminal.current?.write(arg1);
    };

    const handleOnKey = ({
        key,
        domEvent,
    }: {
        key: string;
        domEvent: KeyboardEvent;
    }) => {
        console.log('key pressed', key, domEvent);
        if (domEvent.code === 'Enter') {
            terminal.current?.writeln('')
        }
    };

    
    useEffect(() => {
        if (!terminalRef.current) {
            return;
        }
        terminal.current = new Terminal({
            theme: {
                background: '#1e1e1e',
            },
        });
        const fitAddon = new FitAddon();
        terminal.current.loadAddon(fitAddon);

        terminal.current.open(terminalRef.current);
        fitAddon.fit();


        terminal.current.onData(handleOnData);
        terminal.current.onKey(handleOnKey);

        console.log('here');
        terminal.current.writeln('I am ready...');
        console.log('here2');

        return () => terminal.current?.dispose();
    }, []);

    return (
        <div
            className="terminal"
            ref={terminalRef}
            style={{
                height: '100%',
                width: '100%',
            }}
        />
    );
}

export default TerminalView;
