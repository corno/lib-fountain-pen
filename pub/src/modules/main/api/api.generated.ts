import * as pt from 'pareto-core-types'

import * as glo from "./glossary"

import * as mcommon from "glo-pareto-common"
import * as mtostring from "res-pareto-tostring"

export type CcreateSuperfluousNodeMessage = glo.FCreateSuperfluousNodeMessage

export type CcreateUnboundFountainPen = ($: glo.TConfiguration, $d: {
    readonly 'getArrayAsString': mtostring.FGetArrayAsString
    readonly 'joinNestedStrings': mtostring.FJoinNestedStrings
}) => glo.FFountainPen

export type CcreateUnboundWriterCreator = ($d: {
    readonly 'createWriteStream': glo.FCreateWriteStream
    readonly 'getNodes': glo.FGetNodes
    readonly 'pipeFountainPen': glo.FFountainPen
    readonly 'reportSuperfluousNode': glo.FReportSuperfluousNode
}) => glo.FCreateWriter

export type CcreateWriter = ($d: {
    readonly 'onError': mcommon.FLog
    readonly 'reportSuperfluousNode': glo.FReportSuperfluousNode
}) => glo.FCreateWriter

export type CfountainPen = glo.FFountainPen

export type API = {
    createSuperfluousNodeMessage: CcreateSuperfluousNodeMessage
    createUnboundFountainPen: CcreateUnboundFountainPen
    createUnboundWriterCreator: CcreateUnboundWriterCreator
    createWriter: CcreateWriter
    fountainPen: CfountainPen
}