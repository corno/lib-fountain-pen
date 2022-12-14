import * as pt from "pareto-core-types"
import * as pr from "pareto-core-raw"
import * as pl from "pareto-core-lib"

import { test as main_createFountainPen } from "../modules/main/createFountainPen.p"
import { test as main_createUnboundFountainPen } from "../modules/main/createUnboundFountainPen.p"
import { test as main_createWriterCreator } from "../modules/main/createWriterCreator.p"

const x = pr.wrapRawDictionary({
    "main": pr.wrapRawDictionary({
        "createFountainPen": main_createFountainPen,
        "createUnboundFountainPen": main_createUnboundFountainPen,
        "createWriterCreator": main_createWriterCreator,
    }),
}).asyncMap(($, key) => $.asyncMap(($, key) => $()))