
import { IBlock } from "./interfaces/Block.p"
import { TConfiguration } from "./types/Configuration.p"

export type CCreateFountainPen = (
    $: TConfiguration,
    $i:  ($: string) => void,
    $c: ($i: IBlock) => void,
) => void


// export type FCreateWriter = (
//     $: fs.TPath,
//     $i: {
//         onError: fs.IOnWriteFileError
//     },
//     $d: DCreateWriter
// ) => pareto.IWriter