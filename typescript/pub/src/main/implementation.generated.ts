import { API } from "./api.generated"
import { $$ as icreateAllowedNodeMessage } from "./implementations/createAllowedNodeMessage.s.f"
import { $$ as icreateDirectoryCreator } from "./implementations/createDirectoryCreator.s.p"
import { $$ as icreateFileCreator } from "./implementations/createFileCreator.s.p"
import { $$ as icreateFountainPen } from "./implementations/createFountainPen.s.p"
import { $$ as icreateSuperfluousNodeMessage } from "./implementations/createSuperfluousNodeMessage.s.f"

export const $api: API = {
    'createAllowedNodeMessage': icreateAllowedNodeMessage,
    'createDirectoryCreator': icreateDirectoryCreator,
    'createFileCreator': icreateFileCreator,
    'createFountainPen': icreateFountainPen,
    'createSuperfluousNodeMessage': icreateSuperfluousNodeMessage,
}