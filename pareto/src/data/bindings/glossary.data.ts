import * as pd from 'pareto-core-data'

import { imp, inf, procedure, sExternalInterfaceReference, sInterface, sInterfaceReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({}),
    'imports': d({
        "main": imp({}),
        "common": imp({}),
    }),
    'types': d({}),
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({
            "Log": sInterface(['group', {
                'members': d({
                    "log": ['reference', sExternalInterfaceReference("common", "String")],
                    "logError": ['reference', sExternalInterfaceReference("common", "String")],
                }),
            }]),
        }),
        'algorithms': d({
            "CreateDirectory": procedure(inf(sExternalInterfaceReference("main", "CreateDirectory")), sInterfaceReference("Log")),
        }),

    },
}