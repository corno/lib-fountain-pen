import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/modules/project"

const d = pr.wrapRawDictionary

import { $ as api } from "./api.p"

export const $: mproject.TProject = {
    'name': "lib-fountain-pen",

    'author': "Corno",
    'description': "makes it straightforward to generate properly indented source code files",
    'license': "ISC",

    'type': ['library', {}],
    'modules': d({
        "main": {
            'definition': api,

        },
    }),
    'main': "main",
    'pubdependencies': d({
        "glo-pareto-common": {},
        "lib-pareto-filesystem": {},
        //"res-pareto-filesystem": {},
        "res-pareto-tostring": {},
    }),
    'testdependencies': d({
        "res-pareto-tostring": {},
    }),
}