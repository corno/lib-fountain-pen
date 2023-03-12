import { API } from "./api.generated"
import { $$ as icreateAllowedNodeMessage } from "./implementations/createAllowedNodeMessage.p"
import { $$ as icreateSuperfluousNodeMessage } from "./implementations/createSuperfluousNodeMessage.p"
import { $$ as icreateUnboundDirectoryCreator } from "./implementations/createUnboundDirectoryCreator.p"
import { $$ as icreateUnboundFileCreator } from "./implementations/createUnboundFileCreator.p"
import { $$ as icreateUnboundFountainPen } from "./implementations/createUnboundFountainPen.p"
import { $$ as ifountainPen } from "./implementations/fountainPen.p"

export const $api: API = {
    'createAllowedNodeMessage': icreateAllowedNodeMessage,
    'createSuperfluousNodeMessage': icreateSuperfluousNodeMessage,
    'createUnboundDirectoryCreator': icreateUnboundDirectoryCreator,
    'createUnboundFileCreator': icreateUnboundFileCreator,
    'createUnboundFountainPen': icreateUnboundFountainPen,
    'fountainPen': ifountainPen,
}