import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'

import * as api from "../api"

import * as mtostring from "res-pareto-tostring"

import { $a } from "../index"

import { $$ as cufp } from "./createUnboundFountainPen.p"

export const $$: api.CfountainPen = cufp(
    {
        'newline': `\r\n`,
        'indentation': `    `,
    },
    {
        sf_joinNestedStrings: mtostring.$a.joinNestedStrings,
        sf_getArrayAsString: mtostring.$a.getArrayAsString,
    },

)