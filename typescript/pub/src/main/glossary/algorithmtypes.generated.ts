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
            readonly 'report': SYNC.I.ReportNodes
        }
        
        export type CreateFile = ($: g_common.T.Path, $c: ($b: SYNC.I.Block) => void) => void
        
        export type CreateWriteStream = ($: T.WriteStreamParameters, $c: ($b: g_common.SYNC.I.String) => void) => void
        
        export type Directory = {
            readonly 'allowedGenerated': ($: g_common.T.String, ) => void
            readonly 'allowedManual': ($: g_common.T.String, ) => void
            readonly 'directory': ($: g_common.T.String, $c: ($b: SYNC.I.Directory) => void) => void
            readonly 'file': ($: g_common.T.String, $c: ($b: SYNC.I.Block) => void) => void
            readonly 'template': ($: g_common.T.String, $c: ($b: SYNC.I.Block) => void) => void
        }
        
        export type Line = {
            readonly 'indent': ($c: ($b: SYNC.I.Block) => void) => void
            readonly 'snippet': ($: g_common.T.String, ) => void
        }
        
        export type LogAndLogError = {
            readonly 'log': g_common.SYNC.I.String
            readonly 'logError': g_common.SYNC.I.String
        }
        
        export type LogError = {
            readonly 'logError': g_common.SYNC.I.String
        }
        
        export type OnReadDirError = ($: g_fs.T.AnnotatedReadDirError, ) => void
        
        export type OnWriteFileError = ($: g_fs.T.AnnotatedWriteFileError, ) => void
        
        export type ReportNodes = {
            readonly 'manualNode': ($: T.Node, ) => void
            readonly 'superfluousNode': ($: T.Node, ) => void
        }
    }
    
    export namespace A {
        
        
        export namespace P {
            export type CreateDirectory = ($c: ($i: SYNC.I.CreateDirectory) => void, $i: SYNC.I.LogAndLogError) => void
        }
        
        
        export namespace P {
            export type CreateDirectoryCreator = ($c: ($i: SYNC.I.CreateDirectory) => void, $i: SYNC.I.CreateDirectoryHandler) => void
        }
        
        
        export namespace P {
            export type CreateFile = ($c: ($i: SYNC.I.CreateFile) => void, $i: SYNC.I.LogError) => void
        }
        
        
        export namespace P {
            export type CreateFileCreator = ($c: ($i: SYNC.I.CreateFile) => void, $i: SYNC.I.CreateWriteStream) => void
        }
        
        
        export namespace F {
            export type CreateNodeMessage = ($: T.Node) => g_common.T.String
        }
        
        
        export namespace P {
            export type FountainPen = ($c: ($i: SYNC.I.Block) => void, $i: g_common.SYNC.I.String) => void
        }
    }
}