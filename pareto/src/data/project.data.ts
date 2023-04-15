import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"
import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

import { $ as m_bindings } from "./bindings/moduledefintion.data"
import { $ as m_main } from "./main/module.data"
import { $ as m_typelibrary } from "./submodules/typelibrary/module.data"
import { $ as m_serialize } from "./submodules/serialize/module.data"

import { external, this_ } from "lib-pareto-typescript-project/dist/submodules/project/shorthands"


export const $: g_project.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "makes it straightforward to generate properly indented source code files",
    'license': "TBD",

    'dependencies': d({
        "glo-pareto-common": null,
        "lib-pareto-filesystem": null,
        "res-pareto-array": null,
        "res-pareto-tostring": null,
        "res-pareto-string": null,
    }),
    'type': ['library', {
        'main': m_main,
        'submodules': d({
            "typelibrary": m_typelibrary,
            "serialize": m_serialize,
        }),
        'bindings': [true, {
            'definition': m_bindings,
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