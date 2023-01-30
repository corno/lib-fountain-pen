import * as pt from 'pareto-core-types'

import * as mcommon from "glo-pareto-common"

export namespace GConfiguration {}
export type GConfiguration = {
    readonly 'indentation': string
    readonly 'newline': string
}
export type UConfiguration = GConfiguration

export namespace GNodes {}
export type GNodes = pt.Dictionary<string>
export type UNodes = GNodes

export namespace GSuperfluousNode {}
export type GSuperfluousNode = {
    readonly 'name': string
    readonly 'path': mcommon.TPath
}
export type USuperfluousNode = GSuperfluousNode