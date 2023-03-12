import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'

import * as gtostring from "res-pareto-tostring"

import { $$ as cufp } from "./createUnboundFountainPen.p"

import { fountainPen } from "../api.generated"

export const $$:fountainPen = cufp(
    {
        'newline': `\r\n`,
        'indentation': `    `,
    },
    {
        joinNestedStrings: gtostring.$r.joinNestedStrings({
            "maximum": [false],
            "separator": "",
        }, {}),
        getArrayAsString: gtostring.$r.getArrayAsString({
            "maximum": [false],
            "separator": "",
        }, {}),
    },

)