import * as test from "lib-pareto-test"

import * as tostring from "res-pareto-tostring"

export type FCreateGetTestset = (
    $: null,
    $d: {
        getArrayAsString: tostring.FGetArrayAsString
    },
) => test.FGetTestSet