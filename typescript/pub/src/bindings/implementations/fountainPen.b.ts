import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'

import * as g_string from "res-pareto-string"

import { $$ as cufp } from "../../main/implementations/createFountainPen.s.p"

import { A } from "../api.generated"

export const $$: A.fountainPen = () => {
    return cufp(
        {
            'newline': `\r\n`,
            'indentation': `    `,
        },
        {
            join: g_string.$r.join(),
        },
    )
}