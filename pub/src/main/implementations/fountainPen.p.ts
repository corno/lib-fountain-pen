import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'



import * as gtostring from "res-pareto-tostring"

import { $a } from "../index"

import { $$ as cufp } from "./createUnboundFountainPen.p"

import { CfountainPen } from "../api"

export const $$:CfountainPen = cufp(
    {
        'newline': `\r\n`,
        'indentation': `    `,
    },
    {
        joinNestedStrings: gtostring.$a.joinNestedStrings({
            "maximum": [false],
            "separator": "",
        }, {}),
        getArrayAsString: gtostring.$a.getArrayAsString({
            "maximum": [false],
            "separator": "",
        }, {}),
    },

)