import { IBlock } from "../interfaces/Block"
import { IStreamConsumer } from "../interfaces/StreamConsumer"
import { TConfiguration } from "../types/Configuration"

export type FCreateContext = (
    $: TConfiguration,
    $i: {
        readonly "consumer": IStreamConsumer,
    }
) => IBlock
