import * as test from "lib-pareto-test"
import { DDependencies } from "../../../../pub"

export type FCreateGetTestset = (
    $: null,
    $d: DDependencies,
) => test.FGetTestSet