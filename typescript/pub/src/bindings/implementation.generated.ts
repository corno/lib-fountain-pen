import { API } from "./api.generated"
import { $$ as icreateDirectoryCreator } from "./implementations/createDirectoryCreator.p"
import { $$ as icreateFileCreator } from "./implementations/createFileCreator.p"
import { $$ as ifountainPen } from "./implementations/fountainPen.p"

export const $api: API = {
    'createDirectoryCreator': icreateDirectoryCreator,
    'createFileCreator': icreateFileCreator,
    'fountainPen': ifountainPen,
}