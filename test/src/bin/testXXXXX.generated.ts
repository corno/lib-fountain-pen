import * as pt from "pareto-core-types"
import * as pr from "pareto-core-raw"
import * as pl from "pareto-core-lib"

import { test as main_createFountainPen } from "../modules/main/createFountainPen.p"
import { test as main_createWriter } from "../modules/main/createWriter.p"

const x = pr.wrapRawDictionary({
    "main": pr.wrapRawDictionary({
        "createFountainPen": main_createFountainPen,
        "createWriter": main_createWriter,
    }),
}).asyncMap(($, key) => $.asyncMap(($, key) => $()))