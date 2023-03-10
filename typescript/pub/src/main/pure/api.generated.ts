import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_fs from "lib-pareto-filesystem"
import * as g_this from "../glossary"
import * as g_tostring from "res-pareto-tostring"

export type createAllowedNodeMessage = g_this.F.CreateNodeMessage

export type createSuperfluousNodeMessage = g_this.F.CreateNodeMessage

export type createUnboundDirectoryCreator = ($d: {
    readonly 'createWriteStream': g_this.F.CreateWriteStream
    readonly 'getNodes': g_fs.F.ReadDirectoryOrAbort
    readonly 'pipeFountainPen': g_this.F.FountainPen
}) => g_this.F.UnboundCreateDirectory

export type createUnboundFileCreator = ($d: {
    readonly 'createWriteStream': g_this.F.CreateWriteStream
    readonly 'pipeFountainPen': g_this.F.FountainPen
}) => g_this.F.UnboundCreateFile

export type createUnboundFountainPen = ($: g_this.T.Configuration, $d: {
    readonly 'getArrayAsString': g_tostring.F.GetArrayAsString
    readonly 'joinNestedStrings': g_tostring.F.JoinNestedStrings
}) => g_this.F.FountainPen

export type fountainPen = g_this.F.FountainPen

export type API = {
    createAllowedNodeMessage: createAllowedNodeMessage
    createSuperfluousNodeMessage: createSuperfluousNodeMessage
    createUnboundDirectoryCreator: createUnboundDirectoryCreator
    createUnboundFileCreator: createUnboundFileCreator
    createUnboundFountainPen: createUnboundFountainPen
    fountainPen: fountainPen
}