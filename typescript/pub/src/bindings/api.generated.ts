import * as pt from 'pareto-core-types'

import * as g_main from "../main"

export namespace A {
    
    export type createDirectoryCreator = ($se: {
        readonly 'report': g_main.SYNC.I.Report
    }, ) => g_main.SYNC.A.P.CreateDirectory
    
    export type createFileCreator = ($se: {
        readonly 'onWriteFileError': g_main.SYNC.I.OnWriteFileError
    }, ) => g_main.SYNC.A.P.CreateFile
    
    export type fountainPen = () => g_main.SYNC.A.P.FountainPen
}

export type API = {
    readonly 'createDirectoryCreator': A.createDirectoryCreator
    readonly 'createFileCreator': A.createFileCreator
    readonly 'fountainPen': A.fountainPen
}