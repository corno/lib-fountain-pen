import * as g_fs from "res-pareto-filesystem"

import { $$ as fp } from "./fountainPen.p"

import { $a } from "../../main"

import { A } from "../api.generated"

export const $$: A.createFileCreator = ($d, $se) => {

    return ($i, $c) => {
        $c(($, $c) => {
            $a.createFileCreator(
                {
                    pipeFountainPen: fp,
                },
                {
                    createWriteStream: ($, $c) => {
                        const fw = g_fs.$r.createFileWriter(
                            {
                                path: $,
                                createContainingDirectories: true,
                            },
                            $se.onWriteFileError,
                        )
                        $c(($) => {
                            fw.data($)
                        })
                        fw.end()
                    },
                }
            )({}, ($b) => {
                $b($, $c)
            })
        })
    }
}