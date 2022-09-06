import { DDependencies } from "../dependencies/dependencies"
import { IBlock } from "../interfaces/Block"
import { IStreamConsumer } from "../interfaces/StreamConsumer"
import { TConfiguration } from "../types/Configuration"

export type PCreateContext = (
    $: TConfiguration,
    $c: ($i: IBlock) => void,
    $i: {
        readonly "consumer": IStreamConsumer,
    },
    $d: DDependencies
) => void
