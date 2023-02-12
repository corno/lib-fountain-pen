import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"

export type IBlock = {
    'line': ($: mcommon.T.String, ) => void
    'nestedLine': ($c: ($i: ILine) => void) => void
}

export type ILine = {
    'indent': ($c: ($i: IBlock) => void) => void
    'snippet': ($: mcommon.T.String, ) => void
}

export type IWriter = {
    'allowed': ($: mcommon.T.String, ) => void
    'directory': ($: mcommon.T.String, $c: ($i: IWriter) => void) => void
    'file': ($: mcommon.T.String, $c: ($i: IBlock) => void) => void
}

export type IWriteString = ($: mcommon.T.String, ) => void

export type FCreateSuperfluousNodeMessage = ($: T.SuperfluousNode,) => mcommon.T.String

export type FCreateWriter = ($: mcommon.T.Path, $c: ($i: IWriter) => void,) => void

export type FCreateWriteStream = ($: mcommon.T.Path, $c: ($i: IWriteString) => void,) => void

export type FFountainPen = ($: mcommon.T.Null, $c: ($i: IBlock) => void, $i: IWriteString,) => void

export type FGetNodes = ($: mcommon.T.Path,) => pt.AsyncValue<T.Nodes>

export type FReportSuperfluousNode = ($: T.SuperfluousNode,) => void