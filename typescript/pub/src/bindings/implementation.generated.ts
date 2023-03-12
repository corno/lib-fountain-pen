import { API } from "./api.generated"
import { $$ as icreateDirectory } from "./implementations/createDirectory.p"
import { $$ as icreateFile } from "./implementations/createFile.p"

export const $api: API = {
    'createDirectory': icreateDirectory,
    'createFile': icreateFile,
}