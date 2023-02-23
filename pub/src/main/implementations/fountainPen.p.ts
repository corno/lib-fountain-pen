import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'

import * as mapi from "../api"

import * as mtostring from "res-pareto-tostring"

import { $a } from "../index"

import { $$ as cufp } from "./createUnboundFountainPen.p"

export const $$: mapi.CfountainPen = cufp(
    {
        'newline': `\r\n`,
        'indentation': `    `,
    },
    {
        joinNestedStrings: mtostring.$a.joinNestedStrings({
            "maximum": [false],
            "separator": "",
        }, {}),
        getArrayAsString: mtostring.$a.getArrayAsString({
            "maximum": [false],
            "separator": "",
        }, {}),
    },

)