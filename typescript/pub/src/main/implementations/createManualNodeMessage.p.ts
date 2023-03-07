import * as gtostring from "res-pareto-tostring"

import { createSuperfluousNodeMessage } from "../definition/api.generated"

export const $$:createSuperfluousNodeMessage = ($) => {

    const red = "\x1b[31m"
    const green = "\x1b[32m"
    const reset = "\x1b[0m"
    return `${green}manual node: ${gtostring.$r.joinNestedStrings({
        separator: "/",
        'maximum': [false],

    }, {})($.path)}/${$.name}${reset}`
}