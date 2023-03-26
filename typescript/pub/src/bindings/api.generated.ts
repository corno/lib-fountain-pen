import * as pt from 'pareto-core-types'

import * as g_main from "../main"
import * as g_this from "./glossary"

export namespace A {
    
    export type createDirectory = () => g_this.SYNC.A.P.CreateDirectory
    
    export type fountainPen = () => g_main.SYNC.A.P.FountainPen
}

export type API = {
    readonly 'createDirectory': A.createDirectory
    readonly 'fountainPen': A.fountainPen
}