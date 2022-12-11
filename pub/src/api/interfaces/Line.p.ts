import { IBlock } from "./Block.p"

export type ILine = {
    readonly "snippet": (
        $: string,
    ) => void
    readonly "indent": (
        $c: ($i: IBlock) => void
    ) => void
}
