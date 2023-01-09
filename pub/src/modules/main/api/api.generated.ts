import * as pt from "pareto-core-types"


import * as glo from "./types.generated"

import * as common from "res-pareto-filesystem"
import * as mfs from "res-pareto-filesystem"
import * as mtostring from "res-pareto-tostring"


export type CcreateUnboundFountainPenCreator = (
    $: glo.TConfiguration,
    $d: {
        readonly "joinNestedStrings": mtostring.FJoinNestedString
        readonly "getArrayAsString": mtostring.FGetArrayAsString
    },
) => glo.PPipeFountainPen

export type CcreateFountainPenCreator = (
    $: glo.TConfiguration,
    $d: {},
) => glo.PPipeFountainPen

export type CcreateWriterCreator = (
    $: {
        //path: common.TPath,
    },
    $d: {
        createWriteStream: glo.BCreateWriteStream
        pipeFountainPen: glo.PPipeFountainPen
        onError: mfs.IOnWriteFileError
    }
) => glo.BCreateWriter

export type API = {
    createUnboundFountainPenCreator: CcreateUnboundFountainPenCreator
    createFountainPenCreator: CcreateFountainPenCreator
    createWriterCreator: CcreateWriterCreator
}