import { API } from "../api/api.p"
import { f_createContext } from "./public/createContext.p"

import * as fs from "res-pareto-filesystem"
import * as tostring from "res-pareto-tostring"
import { createWriter } from "./public/createWriter.p"

export const $a: API = {
    createFountainPen: ($, $i, $c) => {
        f_createContext($, $i, {
            joinNestedStrings: tostring.joinNestedStrings,
            getArrayAsString: tostring.f_getArrayAsString,
        },
        $c)
    },
    createWriter: ($, $i) => {
        return createWriter($, $i, {
            createFountainPen: $a.createFountainPen,
            createWriteStream: fs.f_createWriteStream,
        })
    }
}