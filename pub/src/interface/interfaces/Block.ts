import { ILine } from "./Line"

export type IBlock = {
    readonly "line": (
        $: {},
        $i: (
            line: ILine
        ) => void
    ) => void
}
