import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as gcommon from "glo-pareto-common"

export type IBlock = {
    'line': ($: gcommon.T.String, ) => void
    'nestedLine': ($c: ($i: ILine) => void) => void
}

export type ILine = {
    'indent': ($c: ($i: IBlock) => void) => void
    'snippet': ($: gcommon.T.String, ) => void
}

export type IWriter = {
    'allowed': ($: gcommon.T.String, ) => void
    'directory': ($: gcommon.T.String, $c: ($i: IWriter) => void) => void
    'file': ($: gcommon.T.String, $c: ($i: IBlock) => void) => void
}

export type IWriteString = ($: gcommon.T.String, ) => void

export type FCreateSuperfluousNodeMessage = ($: T.SuperfluousNode,) => gcommon.T.String

export type FCreateWriter = ($: gcommon.T.Path, $c: ($i: IWriter) => void,) => void

export type FCreateWriteStream = ($: gcommon.T.Path, $c: ($i: IWriteString) => void,) => void

export type FFountainPen = ($: gcommon.T.Null, $c: ($i: IBlock) => void, $i: IWriteString,) => void

export type FGetNodes = ($: gcommon.T.Path,) => pt.AsyncValue<T.Nodes>

export type FReportSuperfluousNode = ($: T.SuperfluousNode,) => void