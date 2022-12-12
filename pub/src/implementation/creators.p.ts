

import * as toString from "res-pareto-tostring"
import { IBlock, TConfiguration } from "../api"

export type CCreateFountainPen = (
    $: TConfiguration,
    $i:  ($: string) => void,
    $f: {
        readonly "joinNestedStrings": toString.FJoinNestedString
        readonly "getArrayAsString": toString.FGetArrayAsString
    },
    $c: ($i: IBlock) => void,
) => void


// export type FCreateWriter = (
//     $: fs.TPath,
//     $i: {
//         onError: fs.IOnWriteFileError
//     },
//     $d: DCreateWriter
// ) => pareto.IWriter