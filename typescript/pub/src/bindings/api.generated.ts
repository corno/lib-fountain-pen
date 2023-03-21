import * as pt from 'pareto-core-types'

import * as g_main from "../main"

export namespace A {
    
    export type createDirectoryCreator = ($d: null, $se: {
        readonly 'report': g_main.SYNC.I.Report
    }) => g_main.SYNC.A.C.CreateDirectory
    
    export type createFileCreator = ($d: null, $se: {
        readonly 'onWriteFileError': g_main.SYNC.I.OnWriteFileError
    }) => g_main.SYNC.A.C.CreateFile
    
    export type fountainPen = () => g_main.SYNC.A.C.FountainPen
}

export type API = {
    readonly 'createDirectoryCreator': A.createDirectoryCreator
    readonly 'createFileCreator': A.createFileCreator
    readonly 'fountainPen': A.fountainPen
}