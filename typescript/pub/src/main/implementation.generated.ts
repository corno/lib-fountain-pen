import { API } from "./api.generated"
import { $$ as icreateAllowedNodeMessage } from "./implementations/createAllowedNodeMessage.s.f"
import { $$ as icreateDirectoryCreator } from "./implementations/createDirectoryCreator.s.c"
import { $$ as icreateFileCreator } from "./implementations/createFileCreator.s.c"
import { $$ as icreateFountainPen } from "./implementations/createFountainPen.s.c"
import { $$ as icreateSuperfluousNodeMessage } from "./implementations/createSuperfluousNodeMessage.s.f"

export const $api: API = {
    'createAllowedNodeMessage': icreateAllowedNodeMessage,
    'createDirectoryCreator': icreateDirectoryCreator,
    'createFileCreator': icreateFileCreator,
    'createFountainPen': icreateFountainPen,
    'createSuperfluousNodeMessage': icreateSuperfluousNodeMessage,
}