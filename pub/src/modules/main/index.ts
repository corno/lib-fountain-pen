import { API } from "./api"
import { icreateFountainPenCreator } from "./implementations/createFountainPenCreator.p"
import { icreateWriterCreator } from "./implementations/createWriterCreator.p"
import { icreateUnboundFountainPenCreator } from "./implementations/createUnboundFountainPenCreator.p"

export * from "./api"

export const $a: API = {
    "createFountainPenCreator": icreateFountainPenCreator,
    "createWriterCreator": icreateWriterCreator,
    "createUnboundFountainPenCreator": icreateUnboundFountainPenCreator,
}