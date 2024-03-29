import { API } from "./api.generated"
import { $$ as icreateDirectory } from "./implementations/createDirectory.b"
import { $$ as icreateFile } from "./implementations/createFile.b"
import { $$ as ifountainPen } from "./implementations/fountainPen.b"

export const $api: API = {
    'createDirectory': icreateDirectory,
    'createFile': icreateFile,
    'fountainPen': ifountainPen,
}