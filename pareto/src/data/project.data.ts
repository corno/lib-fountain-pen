import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

import { $ as bindings } from "./bindings/moduledefintion.data"
import { $ as main } from "./main/module.data"
import { $ as fountainpen } from "./submodules/fountainpen/module.data"
import { $ as serialize } from "./submodules/serialize/module.data"

import { external, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"


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
        'main': main,
        'submodules': d({
            "fountainpen": fountainpen,
            "serialize": serialize,
        }),
        'bindings': [true, {
            'definition': bindings,
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
                        'root': {
                            'namespaces': d({}),
                            'types': d({}),
                        },
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