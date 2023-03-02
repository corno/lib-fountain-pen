import * as gtostring from "res-pareto-tostring"

import { CcreateSuperfluousNodeMessage } from "../definition/api.generated"

export const $$:CcreateSuperfluousNodeMessage = ($) => {

    const red = "\x1b[31m"
    const green = "\x1b[32m"
    const reset = "\x1b[0m"
    return `${red}superfluous node: ${gtostring.$a.joinNestedStrings({
        separator: "/",
        'maximum': [false],

    }, {})($.path)}/${$.name}${reset}`
}