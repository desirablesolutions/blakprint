const tsconfig = () => {
    return {
        "extends": "astro/tsconfigs/base",
        "compilerOptions": {
            "jsx": "react-jsx",
            "baseUrl": "./src/",
            "jsxImportSource": "react",
            "paths": {
                "@views/*": [
                    "views/*"
                ],
                "@blackprint/*": [
                    "controllers/libs/blackprint/*"
                ],
                "@models/*": [
                    "models/*"
                ],
                "@controllers/*": [
                    "controllers/*"
                ],
                "@layouts/*": [
                    "views/layouts/*"
                ],
                "@includes/*": [
                    "views/includes/*"
                ],
                "@hooks/*": [
                    "controllers/hooks/*"
                ],
                "@components/*": [
                    "views/components/*"
                ],
                "@db/*": [
                    "models/data/db/*"
                ],
                "@pages/*": [
                    "models/data/pages/*"
                ],
                "@services/*": [
                    "controllers/services/*"
                ],
                "@styles/*": [
                    "views/styles/*"
                ],
                "@libs/*": [
                    "views/libs/*"
                ],
                "@configs/*": [
                    "models/configs/*"
                ],
                "@typings/*": [
                    "models/typings/*"
                ],
                "@utils/*": [
                    "controllers/utils/*"
                ]
            }
        }
    }
}

export default tsconfig