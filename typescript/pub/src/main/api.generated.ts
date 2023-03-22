import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_fs from "lib-pareto-filesystem"
import * as g_this from "./glossary"
import * as g_tostring from "res-pareto-tostring"

export namespace A {
    
    export type createAllowedNodeMessage = () => g_this.SYNC.A.F.CreateNodeMessage
    
    export type createDirectoryCreator = ($d: {
        readonly 'getNodes': g_fs.ASYNC.A.F.ReadDirectoryOrAbort
        readonly 'pipeFountainPen': g_this.SYNC.A.B.FountainPen
    }, ) => g_this.SYNC.A.C.CreateDirectoryCreator
    
    export type createFileCreator = ($d: {
        readonly 'pipeFountainPen': g_this.SYNC.A.B.FountainPen
    }, ) => g_this.SYNC.A.C.CreateFileCreator
    
    export type createFountainPen = ($: g_this.T.Configuration, $d: {
        readonly 'getArrayAsString': g_tostring.SYNC.A.F.GetArrayAsString
        readonly 'joinNestedStrings': g_tostring.SYNC.A.F.JoinNestedStrings
    }, ) => g_this.SYNC.A.B.FountainPen
    
    export type createSuperfluousNodeMessage = () => g_this.SYNC.A.F.CreateNodeMessage
}

export type API = {
    readonly 'createAllowedNodeMessage': A.createAllowedNodeMessage
    readonly 'createDirectoryCreator': A.createDirectoryCreator
    readonly 'createFileCreator': A.createFileCreator
    readonly 'createFountainPen': A.createFountainPen
    readonly 'createSuperfluousNodeMessage': A.createSuperfluousNodeMessage
}