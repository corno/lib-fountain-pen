import * as pl from 'pareto-core-lib'
import * as pm from 'pareto-core-state'

import * as api from "../api"

import * as mtostring from "res-pareto-tostring"

import { icreateUnboundFountainPen } from "./createUnboundFountainPen.p"

export const icreateFountainPen: api.CcreateFountainPen = ($d) => {
    return icreateUnboundFountainPen(
        {
            'newline': `\r\n`,
            'indentation': `    `,
        },
        {
            sf_joinNestedStrings: mtostring.$a.joinNestedStrings,
            sf_getArrayAsString: mtostring.$a.getArrayAsString,
        },
        
    )
}
