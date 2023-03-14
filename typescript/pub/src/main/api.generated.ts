import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_fs from "lib-pareto-filesystem"
import * as g_this from "./glossary"
import * as g_tostring from "res-pareto-tostring"

export type createAllowedNodeMessage = g_this.F.CreateNodeMessage

export type createDirectoryCreator = ($d: {
    readonly 'report': g_this.B.Report
}) => ($c: ($b: g_this.B.CreateDirectory) => void) => void

export type createFileCreator = ($d: {
    readonly 'onWriteFileError': g_this.B.OnWriteFileError
}) => ($c: ($b: g_this.B.CreateFile) => void) => void

export type createSuperfluousNodeMessage = g_this.F.CreateNodeMessage

export type createUnboundDirectoryCreator = ($d: {
    readonly 'createWriteStream': g_this.B.CreateWriteStream
    readonly 'getNodes': g_fs.F.ReadDirectoryOrAbort
    readonly 'pipeFountainPen': g_this.F.FountainPen
    readonly 'reportNodes': g_this.B.ReportNodes
}) => ($c: ($b: g_this.B.CreateDirectory) => void) => void

export type createUnboundFileCreator = ($d: {
    readonly 'createWriteStream': g_this.B.CreateWriteStream
    readonly 'pipeFountainPen': g_this.F.FountainPen
}) => ($c: ($b: g_this.B.CreateFile) => void) => void

export type createUnboundFountainPen = ($: g_this.T.Configuration, $d: {
    readonly 'getArrayAsString': g_tostring.F.GetArrayAsString
    readonly 'joinNestedStrings': g_tostring.F.JoinNestedStrings
}) => g_this.F.FountainPen

export type fountainPen = g_this.F.FountainPen

export type API = {
    createAllowedNodeMessage: createAllowedNodeMessage
    createDirectoryCreator: createDirectoryCreator
    createFileCreator: createFileCreator
    createSuperfluousNodeMessage: createSuperfluousNodeMessage
    createUnboundDirectoryCreator: createUnboundDirectoryCreator
    createUnboundFileCreator: createUnboundFileCreator
    createUnboundFountainPen: createUnboundFountainPen
    fountainPen: fountainPen
}