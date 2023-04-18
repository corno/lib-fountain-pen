import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/main"

import { $ as schema } from "./models/fountainpen.data"

export const $: g_liana.T.CompileParameters<pd.SourceLocation> = {
    'outputs': pd.a([
        {
            'path': pd.a([`../../pareto/src/data/submodules/typelibrary/glossary.generated.ts`]),
            'data': {
                'settings': {
                    'annotations': true,
                    'datamodel': [true, {
                        'constraints mapping': {
                            'terminal values': true,
                            'constraints': [false]
                        },
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