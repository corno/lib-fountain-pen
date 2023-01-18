import { API } from "./api"
import { $$ as icreateFountainPen } from "./implementations/createFountainPen.p"
import { $$ as icreateUnboundFountainPen } from "./implementations/createUnboundFountainPen.p"
import { $$ as icreateWriterCreator } from "./implementations/createWriterCreator.p"

export const $a: API = {
    'createFountainPen': icreateFountainPen,
    'createUnboundFountainPen': icreateUnboundFountainPen,
    'createWriterCreator': icreateWriterCreator,
}