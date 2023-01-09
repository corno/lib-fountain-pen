import * as pt from "pareto-core-types"

import * as glo from "./types.generated"

import * as mtostring from "res-pareto-tostring"

export type CcreateFountainPen = ($d: {}) => glo.PFountainPen

export type CcreateUnboundFountainPen = ($: glo.TConfiguration, $d: {
    readonly "sf_getArrayAsString": mtostring.FGetArrayAsString
    readonly "sf_joinNestedStrings": mtostring.FJoinNestedString
}) => glo.PFountainPen

export type CcreateWriterCreator = ($d: {
    readonly "if_createWriteStream": glo.ICreateWriteStream
    readonly "pi_pipeFountainPen": glo.PFountainPen
}) => glo.ICreateWriter

export type API = {
    createFountainPen: CcreateFountainPen
    createUnboundFountainPen: CcreateUnboundFountainPen
    createWriterCreator: CcreateWriterCreator
}