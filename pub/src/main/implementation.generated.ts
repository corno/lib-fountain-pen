import { API } from "./api"
import { $$ as icreateSuperfluousNodeMessage } from "./implementations/createSuperfluousNodeMessage.p"
import { $$ as icreateUnboundFountainPen } from "./implementations/createUnboundFountainPen.p"
import { $$ as icreateUnboundWriterCreator } from "./implementations/createUnboundWriterCreator.p"
import { $$ as icreateWriter } from "./implementations/createWriter.p"
import { $$ as ifountainPen } from "./implementations/fountainPen.p"

export const $a: API = {
    'createSuperfluousNodeMessage': icreateSuperfluousNodeMessage,
    'createUnboundFountainPen': icreateUnboundFountainPen,
    'createUnboundWriterCreator': icreateUnboundWriterCreator,
    'createWriter': icreateWriter,
    'fountainPen': ifountainPen,
}