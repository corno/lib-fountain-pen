import * as test from "lib-pareto-test"
import { DDependencies } from "../../../../pub/dist"

export type FCreateGetTestset = (
    $d: DDependencies
) => test.FGetTestSet