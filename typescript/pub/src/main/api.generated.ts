import * as pt from 'pareto-core-types'

import * as g_array from "res-pareto-array"
import * as g_common from "glo-pareto-common"
import * as g_fs from "lib-pareto-filesystem"
import * as g_string from "res-pareto-string"
import * as g_this from "./glossary"

export namespace D {
    
    
    export type createDirectoryCreator = {
        readonly 'getNodes': g_fs.ASYNC.A.F.ReadDirectoryOrAbort
        readonly 'pipeFountainPen': g_this.SYNC.A.P.FountainPen
        readonly 'push': g_array.SYNC.A.F.Push
    }
    
    export type createFileCreator = {
        readonly 'pipeFountainPen': g_this.SYNC.A.P.FountainPen
    }
    
    export type createFountainPen = {
        readonly 'join': g_string.SYNC.A.F.Join
    }
    
}

export namespace A {
    
    export type createAllowedNodeMessage = () => g_this.SYNC.A.F.CreateNodeMessage
    
    export type createDirectoryCreator = ($d: D.createDirectoryCreator, ) => g_this.SYNC.A.P.CreateDirectoryCreator
    
    export type createFileCreator = ($d: D.createFileCreator, ) => g_this.SYNC.A.P.CreateFileCreator
    
    export type createFountainPen = ($: g_this.T.Configuration, $d: D.createFountainPen, ) => g_this.SYNC.A.P.FountainPen
    
    export type createSuperfluousNodeMessage = () => g_this.SYNC.A.F.CreateNodeMessage
}

export type API = {
    readonly 'createAllowedNodeMessage': A.createAllowedNodeMessage
    readonly 'createDirectoryCreator': A.createDirectoryCreator
    readonly 'createFileCreator': A.createFileCreator
    readonly 'createFountainPen': A.createFountainPen
    readonly 'createSuperfluousNodeMessage': A.createSuperfluousNodeMessage
}