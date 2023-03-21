export interface BlackprintModule { }

export interface BlackprintViewsModule extends BlackprintModule {

}

export interface BlackprintComponent extends BlackprintViewsModule {

}

export interface BlackprintLibraryOptions {
    module?: "views" | "models" | "controllers" | "includes" | "components" |
    "styles" | "libs" | "services" | "controllers" | "configs"
    | "db" | "build" | "utils" | "plugins" | "hooks" | "*";
}


