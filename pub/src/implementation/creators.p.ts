
import * as fs from "res-pareto-filesystem"
import * as toString from "res-pareto-tostring"
import * as api from "../api"

export type CCreateFountainPen = (
    $: api.TConfiguration,
    $i:  ($: string) => void,
    $f: {
        readonly "joinNestedStrings": toString.FJoinNestedString
        readonly "getArrayAsString": toString.FGetArrayAsString
    },
    $c: ($i: api.IBlock) => void,
) => void

export type CCreateWriter = (
    $: fs.TPath,
    $i: {
        onError: fs.IOnWriteFileError
    },
    $d: {
        createWriteStream: fs.FCreateWriteStream
        createFountainPen: api.CCreateFountainPen
    }
) => api.IWriter