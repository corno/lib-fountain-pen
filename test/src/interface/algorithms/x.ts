import * as test from "lib-pareto-test"
import { DDependencies } from "../../../../pub"

export type XCreateGetTestset = (
    $d: DDependencies
) => test.GetTestSet