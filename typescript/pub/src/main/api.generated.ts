import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_fs from "lib-pareto-filesystem"
import * as g_this from "./glossary"
import * as g_tostring from "res-pareto-tostring"

export namespace A {
    
    export type createAllowedNodeMessage = g_this.SYNC.A.F.CreateNodeMessage
    
    export type createDirectoryCreator = ($d: {
        readonly 'getNodes': g_fs.ASYNC.A.F.ReadDirectoryOrAbort
        readonly 'pipeFountainPen': g_this.SYNC.A.C.FountainPen
    }, $se: {
        readonly 'createWriteStream': g_this.SYNC.I.CreateWriteStream
        readonly 'reportNodes': g_this.SYNC.I.ReportNodes
    }) => g_this.SYNC.A.C.CreateDirectory
    
    export type createFileCreator = ($d: {
        readonly 'pipeFountainPen': g_this.SYNC.A.C.FountainPen
    }, $se: {
        readonly 'createWriteStream': g_this.SYNC.I.CreateWriteStream
    }) => g_this.SYNC.A.C.CreateFile
    
    export type createFountainPen = ($: g_this.T.Configuration, $d: {
        readonly 'getArrayAsString': g_tostring.SYNC.A.F.GetArrayAsString
        readonly 'joinNestedStrings': g_tostring.SYNC.A.F.JoinNestedStrings
    }, $se: {}) => g_this.SYNC.A.C.FountainPen
    
    export type createSuperfluousNodeMessage = g_this.SYNC.A.F.CreateNodeMessage
}

export type API = {
    createAllowedNodeMessage: A.createAllowedNodeMessage
    createDirectoryCreator: A.createDirectoryCreator
    createFileCreator: A.createFileCreator
    createFountainPen: A.createFountainPen
    createSuperfluousNodeMessage: A.createSuperfluousNodeMessage
}