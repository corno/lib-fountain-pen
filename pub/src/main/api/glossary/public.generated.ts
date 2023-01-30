import * as pt from 'pareto-core-types'

import * as t from './types.generated'

import * as mcommon from "glo-pareto-common"

export type TConfiguration = t.UConfiguration

export type TNodes = t.UNodes

export type TSuperfluousNode = t.USuperfluousNode

export type IBlock = {
    'line': ($: mcommon.TString, ) => void
    'nestedLine': ($c: ($i: ILine) => void) => void
}

export type ILine = {
    'indent': ($c: ($i: IBlock) => void) => void
    'snippet': ($: mcommon.TString, ) => void
}

export type IWriter = {
    'allowed': ($: mcommon.TString, ) => void
    'directory': ($: mcommon.TString, $c: ($i: IWriter) => void) => void
    'file': ($: mcommon.TString, $c: ($i: IBlock) => void) => void
}

export type IWriteString = ($: mcommon.TString, ) => void

export type FCreateSuperfluousNodeMessage = ($: TSuperfluousNode,) => mcommon.TString

export type FCreateWriter = ($: mcommon.TPath, $c: ($i: IWriter) => void,) => void

export type FCreateWriteStream = ($: mcommon.TPath, $c: ($i: IWriteString) => void,) => void

export type FFountainPen = ($: mcommon.TNull, $c: ($i: IBlock) => void, $i: IWriteString,) => void

export type FGetNodes = ($: mcommon.TPath,) => pt.AsyncValue<TNodes>

export type FReportSuperfluousNode = ($: TSuperfluousNode,) => void