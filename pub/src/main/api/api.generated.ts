import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gcommon from "glo-pareto-common"
import * as gtostring from "res-pareto-tostring"

export type CcreateDirectory = ($d: {
    readonly 'onError': gcommon.FLog
    readonly 'reportSuperfluousNode': gglo.FReportSuperfluousNode
}) => gglo.FCreateDirectory

export type CcreateFile = ($d: {
    readonly 'onError': gcommon.FLog
}) => gglo.FCreateFile

export type CcreateSuperfluousNodeMessage = gglo.FCreateSuperfluousNodeMessage

export type CcreateUnboundDirectoryCreator = ($d: {
    readonly 'createWriteStream': gglo.FCreateWriteStream
    readonly 'getNodes': gglo.FGetNodes
    readonly 'pipeFountainPen': gglo.FFountainPen
    readonly 'reportSuperfluousNode': gglo.FReportSuperfluousNode
}) => gglo.FCreateDirectory

export type CcreateUnboundFileCreator = ($d: {
    readonly 'createWriteStream': gglo.FCreateWriteStream
    readonly 'pipeFountainPen': gglo.FFountainPen
}) => gglo.FCreateFile

export type CcreateUnboundFountainPen = ($: gglo.T.Configuration, $d: {
    readonly 'getArrayAsString': gtostring.FGetArrayAsString
    readonly 'joinNestedStrings': gtostring.FJoinNestedStrings
}) => gglo.FFountainPen

export type CfountainPen = gglo.FFountainPen

export type API = {
    createDirectory: CcreateDirectory
    createFile: CcreateFile
    createSuperfluousNodeMessage: CcreateSuperfluousNodeMessage
    createUnboundDirectoryCreator: CcreateUnboundDirectoryCreator
    createUnboundFileCreator: CcreateUnboundFileCreator
    createUnboundFountainPen: CcreateUnboundFountainPen
    fountainPen: CfountainPen
}