import * as pd from 'pareto-core-data'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as api } from "./api.data"

export const $: mproject.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "makes it straightforward to generate properly indented source code files",
    'license': "ISC",

    'dependencies': d({
        "glo-pareto-common": {},
        "lib-pareto-filesystem": {},
        //"res-pareto-filesystem": {},
        "res-pareto-tostring": {},
    }),
    'type': ['library', {
        'main': {
            'definition': api,
        },
        'submodules': d({
        }),
        'executables': d({}),
        'test': {
            'dependencies': d({
                "res-pareto-tostring": {},
            }),
            'glossary': {
                'functions': d({}),
                'imports': d({}),
                'parameters': d({}),
                'types': d({}),
                'interfaces': d({}),
            },
        }
    }],
}