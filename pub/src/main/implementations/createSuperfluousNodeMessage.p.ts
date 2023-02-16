import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'

import * as api from "../api"

import * as mtostring from "res-pareto-tostring"
import * as mfs from "res-pareto-filesystem"

import { $a } from "../index"

import { $$ as cwc } from "./createUnboundWriterCreator.p"


export const $$: api.CcreateSuperfluousNodeMessage = ($) => {

    const red = "\x1b[31m"
    const green = "\x1b[32m"
    const reset = "\x1b[0m"
    return `${red}superfluous node: ${mtostring.$a.joinNestedStrings({
        strings: $.path,
        separator: "/",
    })}/${$.name}${reset}`
}