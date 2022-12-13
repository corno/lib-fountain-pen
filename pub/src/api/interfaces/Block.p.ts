import { ILine } from "./Line.p"

export type IBlock = {
    readonly "line": (
        $c: (
            $i: ILine
        ) => void
    ) => void

    readonly "literal": (
        $: string,
    ) => void
}
