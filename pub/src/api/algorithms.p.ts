import { IBlock } from "./interfaces/Block.p"

export type IWriter = {
    createDirectory: ($: string, $c: ($i: IWriter) => void) => void
    createFile: ($: string, $c: ($i: IBlock) => void) => void
}