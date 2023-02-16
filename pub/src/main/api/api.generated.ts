import * as pt from 'pareto-core-types'

import * as glo from "./glossary"


export type CcreateDummyRequiredValueHandler = glo.FCreateDummyRequiredValueHandler

export type API = {
    createDummyRequiredValueHandler: CcreateDummyRequiredValueHandler
}