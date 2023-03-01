import controllers from "@controllers/index"

export const blackprint = () => {

    const lib: BlackprintModules = {
        _root: {
            defineConfiguration: () => { },
            c: controllers
        },

        models: {
            _root: {

            },
            configs: configs,
            data: {
                db: db,
                pages: pages
            }
        },

        controllers: {
            _root: {

            },
            utils: utils,
            hooks: hooks,
            services: services
        },

        views: {
            _root: {
            },
            components: components,
            layouts: {},
            includes: {},
        }
    }

    return lib as BlackprintModules
};
