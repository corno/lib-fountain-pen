import * as mapi from "../api"
import * as mtostring from "res-pareto-tostring"

export const $$: mapi.CcreateSuperfluousNodeMessage = ($) => {

    const red = "\x1b[31m"
    const green = "\x1b[32m"
    const reset = "\x1b[0m"
    return `${red}superfluous node: ${mtostring.$a.joinNestedStrings({
        separator: "/",
        'maximum': [false],

    }, {})($.path)}/${$.name}${reset}`
}