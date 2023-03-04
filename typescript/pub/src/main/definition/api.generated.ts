import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"
import * as gfs from "res-pareto-filesystem"
import * as gthis from "./glossary"
import * as gtostring from "res-pareto-tostring"

export type CcreateDirectory = ($d: {
    readonly 'onError': gfs.FHandleError
    readonly 'reportSuperfluousNode': gthis.FReportSuperfluousNode
}) => gthis.FCreateDirectory

export type CcreateFile = ($d: {
    readonly 'onError': gfs.FHandleError
}) => gthis.FCreateFile

export type CcreateSuperfluousNodeMessage = gthis.FCreateSuperfluousNodeMessage

export type CcreateUnboundDirectoryCreator = ($d: {
    readonly 'createWriteStream': gthis.FCreateWriteStream
    readonly 'getNodes': gthis.FGetNodes
    readonly 'pipeFountainPen': gthis.FFountainPen
    readonly 'reportSuperfluousNode': gthis.FReportSuperfluousNode
}) => gthis.FCreateDirectory

export type CcreateUnboundFileCreator = ($d: {
    readonly 'createWriteStream': gthis.FCreateWriteStream
    readonly 'pipeFountainPen': gthis.FFountainPen
}) => gthis.FCreateFile

export type CcreateUnboundFountainPen = ($: gthis.T.Configuration, $d: {
    readonly 'getArrayAsString': gtostring.FGetArrayAsString
    readonly 'joinNestedStrings': gtostring.FJoinNestedStrings
}) => gthis.FFountainPen

export type CfountainPen = gthis.FFountainPen

export type API = {
    createDirectory: CcreateDirectory
    createFile: CcreateFile
    createSuperfluousNodeMessage: CcreateSuperfluousNodeMessage
    createUnboundDirectoryCreator: CcreateUnboundDirectoryCreator
    createUnboundFileCreator: CcreateUnboundFileCreator
    createUnboundFountainPen: CcreateUnboundFountainPen
    fountainPen: CfountainPen
}