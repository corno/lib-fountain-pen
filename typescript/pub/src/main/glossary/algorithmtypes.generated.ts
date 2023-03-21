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
            readonly 'line': ($: g_common.T.String, ) => void
            readonly 'nestedLine': ($c: ($b: SYNC.I.Line) => void) => void
        }
        
        export type CreateDirectory = ($: g_common.T.Path, $c: ($b: SYNC.I.Directory) => void) => void
        
        export type CreateDirectoryHandler = {
            readonly 'createWriteStream': SYNC.I.CreateWriteStream
            readonly 'report': SYNC.I.Report
        }
        
        export type CreateFile = ($: g_common.T.Path, $c: ($b: SYNC.I.Block) => void) => void
        
        export type CreateWriteStream = ($: g_common.T.Path, $c: ($b: g_common.SYNC.I.String) => void) => void
        
        export type Directory = {
            readonly 'allowedGenerated': ($: g_common.T.String, ) => void
            readonly 'allowedManual': ($: g_common.T.String, ) => void
            readonly 'directory': ($: g_common.T.String, $c: ($b: SYNC.I.Directory) => void) => void
            readonly 'file': ($: g_common.T.String, $c: ($b: SYNC.I.Block) => void) => void
        }
        
        export type Line = {
            readonly 'indent': ($c: ($b: SYNC.I.Block) => void) => void
            readonly 'snippet': ($: g_common.T.String, ) => void
        }
        
        export type Nothing = null
        
        export type OnReadDirError = ($: g_fs.T.AnnotatedReadDirError, ) => void
        
        export type OnWriteFileError = ($: g_fs.T.AnnotatedWriteFileError, ) => void
        
        export type Report = {
            readonly 'nodes': SYNC.I.ReportNodes
            readonly 'onReadDirError': SYNC.I.OnReadDirError
            readonly 'onWriteFileError': SYNC.I.OnWriteFileError
        }
        
        export type ReportNodes = {
            readonly 'manualNode': ($: T.Node, ) => void
            readonly 'superfluousNode': ($: T.Node, ) => void
        }
    }
    
    export namespace A {
        
        
        export namespace C {
            export type CreateDirectory = ($i: SYNC.I.Nothing, $c: ($b: SYNC.I.CreateDirectory) => void) => void
        }
        
        
        export namespace C {
            export type CreateDirectoryCreator = ($i: SYNC.I.CreateDirectoryHandler, $c: ($b: SYNC.I.CreateDirectory) => void) => void
        }
        
        
        export namespace C {
            export type CreateFile = ($i: SYNC.I.Nothing, $c: ($b: SYNC.I.CreateFile) => void) => void
        }
        
        
        export namespace C {
            export type CreateFileCreator = ($i: SYNC.I.CreateWriteStream, $c: ($b: SYNC.I.CreateFile) => void) => void
        }
        
        
        export namespace F {
            export type CreateNodeMessage = ($: T.Node) => g_common.T.String
        }
        
        
        export namespace C {
            export type FountainPen = ($i: g_common.SYNC.I.String, $c: ($b: SYNC.I.Block) => void) => void
        }
    }
}