import * as pt from "pareto-core-types"

import * as mcommon from "res-pareto-filesystem"

export type TConfiguration = {
    readonly "indentation": string
    readonly "newline": string
}

export type BBlock = {
    "line": ($c: ($i: BLine) => void) => void
    "literal": ($: string, ) => void
}

export type BCreateWriteStream = ($: mcommon.TPath, $c: ($i: ($: string) => void) => void) => void

export type BLine = {
    "indent": ($c: ($i: BBlock) => void) => void
    "snippet": ($: string, ) => void
}

export type BWriter = {
    "createDirectory": ($: string, $c: ($i: BWriter) => void) => void
    "createFile": ($: string, $c: ($i: BBlock) => void) => void
}

export type BCreateWriter = (
    $: {
        path: mcommon.TPath,
    },
    $c: ($i: BWriter) => void
) => void

export type PPipeFountainPen = (
    $i: ($: string, ) => void,
    $c: ($i: BBlock) => void,
) => void
