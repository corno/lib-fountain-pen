import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

import { $ as bindings } from "./bindings.api.data"
import { $ as api } from "./main/api.data"
import { $ as glossary } from "./main/glossary.data"

import { external, this_, main } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"


export const $: g_project.T.Project<pd.SourceLocation> = {
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
            'definition': {
                'glossary': {
                    'root': glossary,
                    'imports': d({
                        "common": external("glo-pareto-common"),
                        "fs": external("res-pareto-filesystem"),
                        //"this": this_(),
                    }),
                },
                'api': {
                    'root': api,

                    'imports': d({
                        "common": external("glo-pareto-common"),
                        "fs": external("lib-pareto-filesystem"),
                        "tostring": external("res-pareto-tostring"),
                        "this": this_(),
                    }),
                },
            },
            'implementation': ['typescript', null],

        },
        'submodules': d({
        }),

        'bindings': [true, {
            'definition': {
                'glossary': {

                    'root': {
                        'parameters': d({}),
                        'imports': d({}),
                        'types': d({}),
                        'asynchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                            
                        },
                        'synchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                            
                        },
                    },
                    'imports': d({}),
                },
                'api': {
                    'root': bindings,

                    'imports': d({
                        // "common": external("glo-pareto-common"),
                        // "fs": external("lib-pareto-filesystem"),
                        // "tostring": external("res-pareto-tostring"),
                        "main": ['main', null],
                    }),
                },

            },
            'implementation': ['typescript', null],

        }],
        'executables': d({}),
        'test': {
            'dependencies': d({
                "res-pareto-tostring": null,
                "res-pareto-build": null,
            }),
            'definition': {
                'glossary': {
                    'root': {
                        'parameters': d({}),
                        'imports': d({}),
                        'types': d({}),
                        'asynchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                            
                        },
                        'synchronous': {
                            'interfaces': d({}),
                            'algorithms': d({}),
                            
                        },
                    },
                    'imports': d({}),
                },
                'api': {
                    'root': {
                        'algorithms': d({}),
                    },
                    'imports': d({
                    }),
                },

            },
            'imports': d({}),
        }
    }],
}