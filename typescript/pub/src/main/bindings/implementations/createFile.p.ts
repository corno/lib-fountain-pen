import * as g_fs from "lib-pareto-filesystem"
import * as g_fsr from "res-pareto-filesystem"

import { $a } from "../.."

import { $$ as cfc } from "../../pure/implementations/createUnboundFileCreator.p"

import { createFile } from "../api.generated"

export const $$: createFile = ($, $c, $i) => {
    cfc({
        createWriteStream: ($, $c) => {
            const fw = g_fsr.$r.createFileWriter(
                {
                    path: $,
                    createContainingDirectories: true,
                },
                $i,
            )
            $c(($) => {
                fw.data($)
            })
            fw.end()
        },
        pipeFountainPen: $a.fountainPen,
    })($, $c)
}