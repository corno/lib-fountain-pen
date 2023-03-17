import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_fs from "lib-pareto-filesystem"
import * as g_this from "./glossary"
import * as g_tostring from "res-pareto-tostring"
export namespace A {
    
    export type fountainPen = g_this.F.FountainPen
}

export type API = {
    fountainPen: A.fountainPen
}