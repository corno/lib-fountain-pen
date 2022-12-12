import { API } from "../api/api.p"
import { f_createContext } from "./public/createContext.p"

import * as tostring from "res-pareto-tostring"

export const $a: API = {
    createFountainPen: ($, $i, $c) => {
        f_createContext($, $i, {
            joinNestedStrings: tostring.joinNestedStrings,
            getArrayAsString: tostring.f_getArrayAsString,
        },
        $c)
    }
}