import * as gfs from "res-pareto-filesystem"

import { $a } from "../.."

import { $$ as cfc } from "../../pure/implementations/createUnboundFileCreator.p"

import { createFile } from "../api.generated"

export const $$: createFile = ($, $c, $i) => {
    cfc({
        createWriteStream: ($, $c) => {
            gfs.$r.writeFile(
                {
                    path: $,
                    createContainingDirectories: true,
                },
                $c,
                $i,
            )
        },
        pipeFountainPen: $a.fountainPen,
    })($, $c)
}