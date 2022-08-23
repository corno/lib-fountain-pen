import * as api from "../interface"
import { processBlock } from "./processBlock"

type API = {
    processBlock: api.ProcessBlock
}

export const $: API = {
    processBlock: processBlock
}