import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'

import * as g_tostring from "res-pareto-tostring"

import { $$ as cufp } from "./createUnboundFountainPen.p"

import { fountainPen } from "../api.generated"

export const $$:fountainPen = cufp(
    {
        'newline': `\r\n`,
        'indentation': `    `,
    },
    {
        joinNestedStrings: g_tostring.$r.joinNestedStrings({
            "maximum": [false],
            "separator": "",
        }, {}),
        getArrayAsString: g_tostring.$r.getArrayAsString({
            "maximum": [false],
            "separator": "",
        }, {}),
    },

)