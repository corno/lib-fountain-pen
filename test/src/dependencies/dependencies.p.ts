import * as api from "../../../pub"

import * as tostring from "res-pareto-tostring"
import { joinNestedStrings } from "pareto-core-tostring"

export const dependencies: api.DDependencies = {
    getArrayAsString: tostring.getArrayAsString,
    joinNestedStrings: tostring.joinNestedStrings,
}