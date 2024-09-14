import * as pt from 'pareto-core-types'

import * as g_main from "../main"

export namespace D {
    
    
    
}

export namespace A {
    
    export type createDirectory = () => g_main.SYNC.A.P.CreateDirectory
    
    export type createFile = () => g_main.SYNC.A.P.CreateFile
    
    export type fountainPen = () => g_main.SYNC.A.P.FountainPen
}

export type API = {
    readonly 'createDirectory': A.createDirectory
    readonly 'createFile': A.createFile
    readonly 'fountainPen': A.fountainPen
}