import ToolBar from './ToolBar';

function Header() {
    return (
        <div
            style={{
                borderBottom: '5px solid #1d1d1dd2',
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <div>Header</div>
            <div>
                <ToolBar />
            </div>
        </div>
    );
}

export default Header;
