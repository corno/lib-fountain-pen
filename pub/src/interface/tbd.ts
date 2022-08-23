import { IBlock } from "./interfaces"
import { IStreamConsumer } from "./interfaces/IStreamConsumer"
import { TBlockData } from "./types"


export type CreateContext = (
    $: TBlockData,
    $c: ($: IBlock) => void,
    $i: {
        consumer: IStreamConsumer<string, null>,
    }
) => void
