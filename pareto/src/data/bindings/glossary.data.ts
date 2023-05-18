import * as pd from 'pareto-core-data'

import { imp, procedure, sExternalInterfaceReference, sInterface, sInterfaceReference } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
    }),
    'glossary parameters': d({}),
    'root': {
        'namespaces': d({}),
        'types': d({}),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({
        }),
        'algorithms': d({
        }),

    },
}