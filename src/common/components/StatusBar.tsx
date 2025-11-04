function StatusBar({ line, column }: { line: number; column: number }) {
    return (
        <div
            style={{
                borderTop: '5px solid #1d1d1dd2',
                display: 'flex',
                justifyContent: 'space-between',
                margin: '0 1rem'
            }}
        >
            <div>StatusBar</div>
            <div>
                Ln {line}, Col {column}
            </div>
        </div>
    );
}

export default StatusBar;
