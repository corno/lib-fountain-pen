import * as test from "lib-pareto-test"
import { DDependencies } from "../../../../pub"

export type FCreateGetTestset = (
    $d: DDependencies
) => test.GetTestSet