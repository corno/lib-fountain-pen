import { API } from "./api.generated"
import { $$ as icreateDirectory } from "./implementations/createDirectory.p"
import { $$ as ifountainPen } from "./implementations/fountainPen.p"

export const $api: API = {
    'createDirectory': icreateDirectory,
    'fountainPen': ifountainPen,
}