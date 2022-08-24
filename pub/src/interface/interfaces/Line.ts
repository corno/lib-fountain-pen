import { IBlock } from "./Block"

export type ILine = {
    readonly "snippet": (
        $: string,
    ) => void
    readonly "indent": (
        $: {},
        $i: (block: IBlock) => void
    ) => void
}
