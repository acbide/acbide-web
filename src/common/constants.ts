export interface FolderStructure {
    id: string;
    name: string;
    path: string;
    isFolder: boolean;
    children?: FolderStructure[];
}

const folderStructure: FolderStructure[] = [
    {
        id: 'public',
        name: 'public',
        path: 'public',
        isFolder: true,
        children: [
            {
                id: 'vite.svg',
                name: 'vite.svg',
                path: 'public/vite.svg',
                isFolder: false
            }
        ]
    },
    {
        id: 'src',
        name: 'src',
        path: 'src',
        isFolder: true,
        children: [
            {
                id: 'common',
                name: 'common',
                path: 'src/common',
                isFolder: true,
                children: [
                    {
                        id: 'components',
                        name: 'components',
                        path: 'src/common/components',
                        isFolder: true,
                        children: [
                            {
                                id: 'ActivityBar',
                                name: 'ActivityBar.tsx',
                                path: 'src/common/components/ActivityBar.tsx',
                                isFolder: false
                            }]
                    }
                ]
            },
            {
                id: 'assets',
                name: 'assets',
                path: 'src/assets',
                isFolder: true,
                children: [
                    {
                        id: 'react.svg',
                        name: 'react.svg',
                        path: 'src/assets/react.svg',
                        isFolder: false
                    }
                ]
            },
            {
                id: 'App.tsx',
                name: 'App.tsx',
                path: 'src/App.tsx',
                isFolder: false
            },
            {
                id: 'main.tsx',
                name: 'main.tsx',
                path: 'src/main.tsx',
                isFolder: false
            },
            {
                id: 'index.css',
                name: 'index.css',
                path: 'src/index.css',
                isFolder: false
            },
            {
                id: 'App.css',
                name: 'App.css',
                path: 'src/App.css',
                isFolder: false
            }
        ]
    }
]


export { folderStructure }