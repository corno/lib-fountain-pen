import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_fs from "res-pareto-filesystem"
import * as g_this from "./glossary"
import * as g_tostring from "res-pareto-tostring"

export type createDirectory = ($d: {
    readonly 'onError': g_fs.F.HandleWriteFileError
}) => g_this.F.CreateDirectory

export type createFile = ($d: {
    readonly 'onError': g_fs.F.HandleWriteFileError
}) => g_this.F.CreateFile

export type createManualNodeMessage = g_this.F.CreateNodeMessage

export type createSuperfluousNodeMessage = g_this.F.CreateNodeMessage

export type createUnboundDirectoryCreator = ($d: {
    readonly 'createWriteStream': g_this.F.CreateWriteStream
    readonly 'getNodes': g_this.F.GetNodes
    readonly 'pipeFountainPen': g_this.F.FountainPen
}) => g_this.F.CreateDirectory

export type createUnboundFileCreator = ($d: {
    readonly 'createWriteStream': g_this.F.CreateWriteStream
    readonly 'pipeFountainPen': g_this.F.FountainPen
}) => g_this.F.CreateFile

export type createUnboundFountainPen = ($: g_this.T.Configuration, $d: {
    readonly 'getArrayAsString': g_tostring.F.GetArrayAsString
    readonly 'joinNestedStrings': g_tostring.F.JoinNestedStrings
}) => g_this.F.FountainPen

export type fountainPen = g_this.F.FountainPen

export type API = {
    createDirectory: createDirectory
    createFile: createFile
    createManualNodeMessage: createManualNodeMessage
    createSuperfluousNodeMessage: createSuperfluousNodeMessage
    createUnboundDirectoryCreator: createUnboundDirectoryCreator
    createUnboundFileCreator: createUnboundFileCreator
    createUnboundFountainPen: createUnboundFountainPen
    fountainPen: fountainPen
}