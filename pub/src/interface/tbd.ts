import { IBlock } from "./interfaces/Block"
import { IStreamConsumer } from "./interfaces/StreamConsumer"
import { TBlockData } from "./types"


export type CreateContext = (
    $: TBlockData,
    $c: ($: IBlock) => void,
    $i: {
        consumer: IStreamConsumer,
    }
) => void
