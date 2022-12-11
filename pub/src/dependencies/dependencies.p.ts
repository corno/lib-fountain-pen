
import * as tostring from "res-pareto-tostring"

import * as api from "../api"


export const dependencies: api.DDependencies = {
    joinNestedStrings: tostring.joinNestedStrings,
    getArrayAsString: tostring.f_getArrayAsString,
}