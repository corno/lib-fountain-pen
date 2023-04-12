import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/main"

import { $ as schema } from "./models/fountainpen.data"

export const $: g_liana.T.CompileParameters<pd.SourceLocation> = {
    'outputs': pd.a([
        {
            'path': `../../pareto/src/data/submodules/fountainpen/glossary.generated.ts`,
            'data': {
                'settings': {
                    'datamodel': [true, {
                        'annotations': true,
                        'properties optional': false,
                        'reference mapping': ['string', null],
                    }],
                    'visitor interface': [false],
                    'algorithms': {
                        'serialize': [false],
                    },
                },
                'mapped library': {
                    'library': schema,

                    'terminal mapping': pd.d({
                        "text": ['string', null],
                    }),
                },
            }
        }
    ])
}