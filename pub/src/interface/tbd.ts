import { CProcessBlock } from "."

export type ProcessBlock = (
    trimRight: (str: string) => string,
) => CProcessBlock

