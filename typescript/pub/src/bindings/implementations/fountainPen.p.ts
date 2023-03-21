import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'

import * as g_tostring from "res-pareto-tostring"

import { $$ as cufp } from "../../main/implementations/createFountainPen.s.c"

import { A } from "../api.generated"

export const $$: A.fountainPen = () => {
    return cufp(
        {
            'newline': `\r\n`,
            'indentation': `    `,
        },
        {
            joinNestedStrings: g_tostring.$r.joinNestedStrings({
                "maximum": [false],
                "separator": "",
            }, null, null),
            getArrayAsString: g_tostring.$r.getArrayAsString({
                "maximum": [false],
                "separator": "",
            }, null, null),
        },
        null,
    )
}