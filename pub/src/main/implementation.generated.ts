import { API } from "./api"
import { $$ as icreateDummyRequiredValueHandler } from "./implementations/createDummyRequiredValueHandler.p"

export const $a: API = {
    'createDummyRequiredValueHandler': icreateDummyRequiredValueHandler,
}