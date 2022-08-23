
export type IBlock = {
    readonly "line": (
        $: {},
        $i: (
            line: ILine
        ) => void
    ) => void
}

export type ILine = {
    readonly "snippet": (
        $: string,
    ) => void
    readonly "indent": (
        $: {},
        $i: (block: IBlock) => void
    ) => void
}
