import { IBlock } from "./interfaces/Block"
import { IStreamConsumer } from "./interfaces/StreamConsumer"
import { TConfiguration } from "./types/Configuration"


export type CreateContext = (
    $: TConfiguration,
    $c: ($: IBlock) => void,
    $i: {
        consumer: IStreamConsumer,
    }
) => void
