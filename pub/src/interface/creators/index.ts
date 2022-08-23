
import { IBlock } from "../interfaces"
import { TBlockData } from "../types"

export type IStreamConsumer<DataType, EndDataType> = {
    onData(data: DataType): void;
    onEnd(data: EndDataType): void;
}

export type CProcessBlock = (
    $i: IStreamConsumer<string, null>,
    $: TBlockData,
    $c: ($: IBlock) => void,
) => void
