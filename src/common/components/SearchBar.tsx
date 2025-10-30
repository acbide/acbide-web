import ToolBar from "./ToolBar";

function SearchBar() {
    return (
        <div
            style={{
                borderBottom: '5px solid #1d1d1dd2',
                display: 'flex',
                justifyContent: 'space-between'
            }}
        >
            <div>
                AcBIde
            </div>
            <div>SearchBar</div>
            <div
                style={{
                    borderBottom: '5px solid #1d1d1dd2',
                }}
            >
                <ToolBar />
            </div>
        </div>
    );
}

export default SearchBar;
