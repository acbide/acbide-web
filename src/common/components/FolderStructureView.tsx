import type { FolderStructure } from '../constants';

function FileExplorerView({
    folderData,
}: {
    folderData: FolderStructure[];
}) {
    return (
        <div style={{ paddingLeft: '10px' }}>
            {folderData.map((parent) => {
                return (
                    <div key={parent.id}>
                        <span>{parent.name}</span>
                        <div>
                            {parent.children && (
                                <FileExplorerView
                                    folderData={parent.children}
                                />
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default FileExplorerView;
