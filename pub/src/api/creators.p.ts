
import { IWriter } from "./algorithms.p"
import { IBlock } from "./interfaces/Block.p"
import { TConfiguration } from "./types/Configuration.p"

import * as fs from "res-pareto-filesystem"

export type CCreateFountainPen = (
    $: TConfiguration,
    $i:  ($: string) => void,
    $c: ($i: IBlock) => void,
) => void

export type CCreateWriter = (
    $: {
        path: fs.TPath,
        configuration: TConfiguration,
    },
    $i: {
        onError: fs.IOnWriteFileError
    }
) => IWriter