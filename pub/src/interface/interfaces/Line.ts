import { IBlock } from "./Block"

export type ILine = {
    readonly "snippet": (
        $: string,
    ) => void
    readonly "indent": (
        $: {},
        $c: ($i: IBlock) => void
    ) => void
}
