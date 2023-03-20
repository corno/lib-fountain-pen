import * as g_tostring from "res-pareto-tostring"

import { A } from "../api.generated"

export const $$: A.createSuperfluousNodeMessage = ($) => {

    const red = "\x1b[31m"
    const green = "\x1b[32m"
    const reset = "\x1b[0m"
    return `${green}allowed node: ${g_tostring.$r.joinNestedStrings({
        separator: "/",
        'maximum': [false],

    }, {}, {})($.path)}/${$.name}${reset}`
}