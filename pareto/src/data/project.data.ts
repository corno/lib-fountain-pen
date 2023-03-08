import * as pd from 'pareto-core-data'

import * as gproject from "lib-pareto-typescript-project/dist/submodules/project"

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
        "res-pareto-filesystem": null,
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
            'bindings': {
                'api': {
                    'root': bindings,

                    'imports': d({
                        "common": external("glo-pareto-common"),
                        "fs": external("res-pareto-filesystem"),
                        "tostring": external("res-pareto-tostring"),
                        "this": this_(),
                    }),
                },
                'implementation': ['typescript', null],

            },
            'pure algorithms': {
                'api': {
                    'root': pure,

                    'imports': d({
                        "common": external("glo-pareto-common"),
                        "fs": external("res-pareto-filesystem"),
                        "tostring": external("res-pareto-tostring"),
                        "this": this_(),
                    }),
                },
                'implementation': ['typescript', null],

            },
        },
        'submodules': d({
        }),
        'executables': d({}),
        'test': {
            'dependencies': d({
                "res-pareto-tostring": null,
                "res-pareto-build": null,
            }),
            'glossary': {
                'functions': d({}),
                'parameters': d({}),
                'types': d({}),
                'builders': d({}),
                'interfaces': d({}),
            },
            'imports': d({}),
        }
    }],
}