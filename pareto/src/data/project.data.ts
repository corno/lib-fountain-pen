import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"
import * as gglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

import { $ as bindings } from "./bindings.api.data"
import { $ as pure } from "./pure.api.data"
import { $ as glossary } from "./glossary.data"

import { external, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"


export const $: gproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "makes it straightforward to generate properly indented source code files",
    'license': "TBD",

    'dependencies': d({
        "glo-pareto-common": null,
        "lib-pareto-filesystem": null,
        "res-pareto-tostring": null,
    }),
    'type': ['library', {
        'main': {
            'glossary': {
                'root': glossary,
                'imports': d({
                    "common": external("glo-pareto-common"),
                    "fs": external("res-pareto-filesystem"),
                }),
            },
            'api': {
                'root': pure,

                'imports': d({
                    "common": external("glo-pareto-common"),
                    "fs": external("lib-pareto-filesystem"),
                    "tostring": external("res-pareto-tostring"),
                    "this": this_(),
                }),
            },
            'implementation': ['typescript', null],

        },
        'submodules': d({
        }),

        'bindings': [true, {
            'api': {
                'root': bindings,

                'imports': d({
                    "common": external("glo-pareto-common"),
                    "fs": external("lib-pareto-filesystem"),
                    "tostring": external("res-pareto-tostring"),
                    "this": this_(),
                }),
            },
            'implementation': ['typescript', null],

        }],
        'executables': d({}),
        'test': {
            'dependencies': d({
                "res-pareto-tostring": null,
                "res-pareto-build": null,
            }),
            'glossary': {
                'parameters': d({}),
                'types': d({}),
                'type': ['synchronous', {
                    'builders': d({}),
                    'functions': d<gglossary.T.Glossary._ltype.synchronous.functions.D<pd.SourceLocation>>({}),
                }],
            },
            'imports': d({}),
        }
    }],
}