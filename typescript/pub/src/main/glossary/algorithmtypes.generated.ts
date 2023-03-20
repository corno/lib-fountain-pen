import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_fs from "res-pareto-filesystem"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type Block = {
            'line': ($: g_common.T.String, ) => void
            'nestedLine': ($c: ($b: SYNC.I.Line) => void) => void
        }
        
        export type CreateDirectory = ($: g_common.T.Path, $c: ($b: SYNC.I.Directory) => void) => void
        
        export type CreateFile = ($: g_common.T.Path, $c: ($b: SYNC.I.Block) => void) => void
        
        export type CreateWriteStream = ($: g_common.T.Path, $c: ($b: g_common.SYNC.I.String) => void) => void
        
        export type Directory = {
            'allowedGenerated': ($: g_common.T.String, ) => void
            'allowedManual': ($: g_common.T.String, ) => void
            'directory': ($: g_common.T.String, $c: ($b: SYNC.I.Directory) => void) => void
            'file': ($: g_common.T.String, $c: ($b: SYNC.I.Block) => void) => void
        }
        
        export type Line = {
            'indent': ($c: ($b: SYNC.I.Block) => void) => void
            'snippet': ($: g_common.T.String, ) => void
        }
        
        export type Nothing = {}
        
        export type OnReadDirError = ($: g_fs.T.AnnotatedReadDirError, ) => void
        
        export type OnWriteFileError = ($: g_fs.T.AnnotatedWriteFileError, ) => void
        
        export type Report = {
            'nodes': SYNC.I.ReportNodes
            'onReadDirError': SYNC.I.OnReadDirError
            'onWriteFileError': SYNC.I.OnWriteFileError
        }
        
        export type ReportNodes = {
            'manualNode': ($: T.Node, ) => void
            'superfluousNode': ($: T.Node, ) => void
        }
    }
    
    export namespace IW {
        
        export type Block = ($c: ($b: I.Block) => void) => void
        
        export type CreateDirectory = ($c: ($b: I.CreateDirectory) => void) => void
        
        export type CreateFile = ($c: ($b: I.CreateFile) => void) => void
        
        export type CreateWriteStream = ($c: ($b: I.CreateWriteStream) => void) => void
        
        export type Directory = ($c: ($b: I.Directory) => void) => void
        
        export type Line = ($c: ($b: I.Line) => void) => void
        
        export type Nothing = ($c: ($b: I.Nothing) => void) => void
        
        export type OnReadDirError = ($c: ($b: I.OnReadDirError) => void) => void
        
        export type OnWriteFileError = ($c: ($b: I.OnWriteFileError) => void) => void
        
        export type Report = ($c: ($b: I.Report) => void) => void
        
        export type ReportNodes = ($c: ($b: I.ReportNodes) => void) => void
    }
    
    export namespace A {
        
        
        export namespace C {
            export type CreateDirectory = ($i: SYNC.I.Nothing, $c: ($b: SYNC.I.CreateDirectory) => void) => void
        }
        
        
        export namespace C {
            export type CreateFile = ($i: SYNC.I.Nothing, $c: ($b: SYNC.I.CreateFile) => void) => void
        }
        
        
        export namespace F {
            export type CreateNodeMessage = ($: T.Node) => g_common.T.String
        }
        
        
        export namespace C {
            export type FountainPen = ($i: g_common.SYNC.I.String, $c: ($b: SYNC.I.Block) => void) => void
        }
    }
}