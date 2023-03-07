import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"

export namespace I {}

export namespace B {
    
    export type Block = {
        'line': ($: g_common.T.String, ) => void
        'nestedLine': ($c: ($b: B.Line) => void) => void
    }
    
    export type Directory = {
        'allowed': ($: g_common.T.String, ) => void
        'directory': ($: g_common.T.String, $c: ($b: B.Directory) => void) => void
        'file': ($: g_common.T.String, $c: ($b: B.Block) => void) => void
    }
    
    export type Line = {
        'indent': ($c: ($b: B.Block) => void) => void
        'snippet': ($: g_common.T.String, ) => void
    }
    
    export type Report = {
        'manualNode': ($: T.Node, ) => void
        'superfluousNode': ($: T.Node, ) => void
    }
    
    export type WriteString = ($: g_common.T.String, ) => void
}

export namespace F {
    
    export type CreateDirectory = ($: g_common.T.Path, $c: ($b: B.Directory) => void, $b: B.Report,) => void
    
    export type CreateFile = ($: g_common.T.Path, $c: ($b: B.Block) => void,) => void
    
    export type CreateNodeMessage = ($: T.Node,) => g_common.T.String
    
    export type CreateWriteStream = ($: g_common.T.Path, $c: ($b: B.WriteString) => void,) => void
    
    export type FountainPen = ($: g_common.T.Null, $c: ($b: B.Block) => void, $b: B.WriteString,) => void
    
    export type GetNodes = ($: g_common.T.Path,) => pt.AsyncValue<T.Nodes>
}