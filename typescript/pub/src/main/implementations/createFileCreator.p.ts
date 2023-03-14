import * as g_fs from "lib-pareto-filesystem"
import * as g_fsr from "res-pareto-filesystem"

import { $a } from "../.."

import { $$ as cfc } from "../../main/implementations/createUnboundFileCreator.p"

import { createFileCreator } from "../api.generated"

export const $$: createFileCreator = ($d) => {

    return ($c) => {
        $c(($, $c) => {
            cfc({
                createWriteStream: ($, $c) => {
                    const fw = g_fsr.$r.createFileWriter(
                        {
                            path: $,
                            createContainingDirectories: true,
                        },
                        $d.onWriteFileError,
                    )
                    $c(($) => {
                        fw.data($)
                    })
                    fw.end()
                },
                pipeFountainPen: $a.fountainPen,
            })(($b) => {
                $b($, $c)
            })
        })
    }
}