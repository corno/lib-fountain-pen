import * as pt from 'pareto-core-types'

import * as gglo from "./glossary"

import * as gcommon from "glo-pareto-common"
import * as gtostring from "res-pareto-tostring"

export type CcreateSuperfluousNodeMessage = gglo.FCreateSuperfluousNodeMessage

export type CcreateUnboundFountainPen = ($: gglo.T.Configuration, $d: {
    readonly 'getArrayAsString': gtostring.FGetArrayAsString
    readonly 'joinNestedStrings': gtostring.FJoinNestedStrings
}) => gglo.FFountainPen

export type CcreateUnboundWriterCreator = ($d: {
    readonly 'createWriteStream': gglo.FCreateWriteStream
    readonly 'getNodes': gglo.FGetNodes
    readonly 'pipeFountainPen': gglo.FFountainPen
    readonly 'reportSuperfluousNode': gglo.FReportSuperfluousNode
}) => gglo.FCreateWriter

export type CcreateWriter = ($d: {
    readonly 'onError': gcommon.FLog
    readonly 'reportSuperfluousNode': gglo.FReportSuperfluousNode
}) => gglo.FCreateWriter

export type CfountainPen = gglo.FFountainPen

export type API = {
    createSuperfluousNodeMessage: CcreateSuperfluousNodeMessage
    createUnboundFountainPen: CcreateUnboundFountainPen
    createUnboundWriterCreator: CcreateUnboundWriterCreator
    createWriter: CcreateWriter
    fountainPen: CfountainPen
}