import { API } from "./api"
import { icreateFountainPen } from "./implementations/createFountainPen.p"
import { icreateUnboundFountainPen } from "./implementations/createUnboundFountainPen.p"
import { icreateWriterCreator } from "./implementations/createWriterCreator.p"

export * from "./api"

export const $a: API = {
    "createFountainPen": icreateFountainPen,
    "createUnboundFountainPen": icreateUnboundFountainPen,
    "createWriterCreator": icreateWriterCreator,
}