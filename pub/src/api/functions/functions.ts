import { DDependencies } from "../dependencies/dependencies.p"
import { IBlock } from "../interfaces/Block.p"
import { TConfiguration } from "../types/Configuration.p"

export type FCreateContext = (
    $: TConfiguration,
    $c: ($i: IBlock) => void,
    $i: ($: string) => void,
    $d: DDependencies
) => void
