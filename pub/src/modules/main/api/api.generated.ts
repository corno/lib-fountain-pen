import * as pt from 'pareto-core-types'

import * as glo from "./types.generated"

import * as mcommon from "glo-pareto-common"
import * as mtostring from "res-pareto-tostring"

export type CcreateSuperfluousNodeMessage = glo.FCreateSuperfluousNodeMessage

export type CcreateUnboundFountainPen = ($: glo.TConfiguration, $d: {
    readonly 'sf_getArrayAsString': mtostring.FGetArrayAsString
    readonly 'sf_joinNestedStrings': mtostring.FJoinNestedStrings
}) => glo.PFountainPen

export type CcreateUnboundWriterCreator = ($d: {
    readonly 'if_createWriteStream': glo.ICreateWriteStream
    readonly 'af_getNodes': glo.AGetNodes
    readonly 'pi_pipeFountainPen': glo.PFountainPen
    readonly 'pr_reportSuperfluousNode': pt.Procedure<glo.TSuperfluousNode>
}) => glo.ICreateWriter

export type CcreateWriter = ($d: {
    readonly 'pr_onError': pt.Procedure<mcommon.TString>
    readonly 'pr_reportSuperfluousNode': pt.Procedure<glo.TSuperfluousNode>
}) => glo.ICreateWriter

export type CfountainPen = glo.PFountainPen

export type API = {
    createSuperfluousNodeMessage: CcreateSuperfluousNodeMessage
    createUnboundFountainPen: CcreateUnboundFountainPen
    createUnboundWriterCreator: CcreateUnboundWriterCreator
    createWriter: CcreateWriter
    fountainPen: CfountainPen
}