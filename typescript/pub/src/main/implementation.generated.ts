import { API } from "./definition/api.generated"
import { $$ as icreateDirectory } from "./implementations/createDirectory.p"
import { $$ as icreateFile } from "./implementations/createFile.p"
import { $$ as icreateSuperfluousNodeMessage } from "./implementations/createSuperfluousNodeMessage.p"
import { $$ as icreateUnboundDirectoryCreator } from "./implementations/createUnboundDirectoryCreator.p"
import { $$ as icreateUnboundFileCreator } from "./implementations/createUnboundFileCreator.p"
import { $$ as icreateUnboundFountainPen } from "./implementations/createUnboundFountainPen.p"
import { $$ as ifountainPen } from "./implementations/fountainPen.p"

export const $a: API = {
    'createDirectory': icreateDirectory,
    'createFile': icreateFile,
    'createSuperfluousNodeMessage': icreateSuperfluousNodeMessage,
    'createUnboundDirectoryCreator': icreateUnboundDirectoryCreator,
    'createUnboundFileCreator': icreateUnboundFileCreator,
    'createUnboundFountainPen': icreateUnboundFountainPen,
    'fountainPen': ifountainPen,
}