import * as pt from 'pareto-core-types'

import { T } from './types.generated'

import * as g_common from "glo-pareto-common"
import * as g_fs from "res-pareto-filesystem"

export namespace B {
    
    export type Block = {
        'line': ($: g_common.T.String, ) => void
        'nestedLine': ($c: ($b: B.Line) => void) => void
    }
    
    export type CreateDirectory = ($: g_common.T.Path, $c: ($b: B.Directory) => void) => void
    
    export type CreateFile = ($: g_common.T.Path, $c: ($b: B.Block) => void) => void
    
    export type CreateWriteStream = ($: g_common.T.Path, $c: ($b: B.WriteString) => void) => void
    
    export type Directory = {
        'allowedGenerated': ($: g_common.T.String, ) => void
        'allowedManual': ($: g_common.T.String, ) => void
        'directory': ($: g_common.T.String, $c: ($b: B.Directory) => void) => void
        'file': ($: g_common.T.String, $c: ($b: B.Block) => void) => void
    }
    
    export type Line = {
        'indent': ($c: ($b: B.Block) => void) => void
        'snippet': ($: g_common.T.String, ) => void
    }
    
    export type OnReadDirError = ($: g_fs.T.AnnotatedReadDirError, ) => void
    
    export type OnWriteFileError = ($: g_fs.T.AnnotatedWriteFileError, ) => void
    
    export type Report = {
        'nodes': B.ReportNodes
        'onReadDirError': B.OnReadDirError
        'onWriteFileError': B.OnWriteFileError
    }
    
    export type ReportNodes = {
        'manualNode': ($: T.Node, ) => void
        'superfluousNode': ($: T.Node, ) => void
    }
    
    export type WriteString = ($: g_common.T.String, ) => void
}

export namespace C {
    
    export type Block = ($b: B.Block) => void
    
    export type CreateDirectory = ($b: B.CreateDirectory) => void
    
    export type CreateFile = ($b: B.CreateFile) => void
    
    export type CreateWriteStream = ($b: B.CreateWriteStream) => void
    
    export type Directory = ($b: B.Directory) => void
    
    export type Line = ($b: B.Line) => void
    
    export type OnReadDirError = ($b: B.OnReadDirError) => void
    
    export type OnWriteFileError = ($b: B.OnWriteFileError) => void
    
    export type Report = ($b: B.Report) => void
    
    export type ReportNodes = ($b: B.ReportNodes) => void
    
    export type WriteString = ($b: B.WriteString) => void
}

export namespace F {
    
    export type CreateNodeMessage = ($: T.Node) => g_common.T.String
    
    export type FountainPen = ($c: ($b: B.Block) => void, $b: B.WriteString) => void
}