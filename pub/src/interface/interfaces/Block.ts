import { ILine } from "./Line"

export type IBlock = {
    readonly "line": (
        $: {},
        $c: (
            $i: ILine
        ) => void
    ) => void
}
