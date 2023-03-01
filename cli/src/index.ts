#!/usr/bin/env node

import controllers from "@blackprint/controllers";
import models from "@blackprint/models";
import views from "@blackprint/views";
import type { BlackprintModules } from "@typings/Blackprint";

export const blackprint = (): BlackprintModules => {

    const lib = {
        _root: {
            defineConfiguration: () => { }
        },
        models,
        controllers,
        views
    } as BlackprintModules

    return lib
};