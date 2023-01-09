import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"

import * as api from "../api"

import * as mtostring from "res-pareto-tostring"

import { icreateUnboundFountainPenCreator } from "./createUnboundFountainPenCreator.p"

export const icreateFountainPenCreator: api.CcreateFountainPenCreator = ($, $d) => {
    return icreateUnboundFountainPenCreator(
        $,
        {
            joinNestedStrings: mtostring.joinNestedStrings,
            getArrayAsString: mtostring.f_getArrayAsString,
        },
        
    )
}
