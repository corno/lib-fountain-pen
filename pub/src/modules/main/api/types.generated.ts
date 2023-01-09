import * as pt from "pareto-core-types"
import * as mcommon from "glo-pareto-common"

export type TConfiguration = {
    readonly "indentation": string
    readonly "newline": string
}

export type IBlock = {
    "line": ($c: ($i: ILine) => void) => void
    "literal": ($: string, ) => void
}

export type ICreateWriter = ($: mcommon.TPath, $c: ($i: IWriter) => void) => void

export type ICreateWriteStream = ($: mcommon.TPath, $c: ($i: IWriteString) => void) => void

export type ILine = {
    "indent": ($c: ($i: IBlock) => void) => void
    "snippet": ($: string, ) => void
}

export type IWriter = {
    "createDirectory": ($: string, $c: ($i: IWriter) => void) => void
    "createFile": ($: string, $c: ($i: IBlock) => void) => void
}

export type IWriteString = ($: string, ) => void

export type PFountainPen = ($i: IWriteString, $c: ($i: IBlock) => void) => void