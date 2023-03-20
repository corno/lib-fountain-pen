import * as pt from 'pareto-core-types'

import * as g_main from "../main"

export namespace A {
    
    export type createDirectoryCreator = ($d: {}, $se: {
        readonly 'report': g_main.SYNC.I.Report
    }) => g_main.SYNC.A.C.CreateDirectory
    
    export type createFileCreator = ($d: {}, $se: {
        readonly 'onWriteFileError': g_main.SYNC.I.OnWriteFileError
    }) => g_main.SYNC.A.C.CreateFile
    
    export type fountainPen = g_main.SYNC.A.C.FountainPen
}

export type API = {
    createDirectoryCreator: A.createDirectoryCreator
    createFileCreator: A.createFileCreator
    fountainPen: A.fountainPen
}