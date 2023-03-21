import * as g_fs from "res-pareto-filesystem"

import { $$ as fp } from "./fountainPen.p"

import { $a } from "../../main"

import { A } from "../api.generated"

export const $$: A.createFileCreator = ($se) => {

    return ($i, $c) => {
        $c(($, $c) => {
            $a.createFileCreator(
                {
                    'pipeFountainPen': fp,
                },
            )(($, $c) => {
                const fw = g_fs.$r.createFileWriter(
                )({
                    'onWriteFileError': $se.onWriteFileError,
                })({
                    'path': $,
                    'createContainingDirectories': true,
                })
                $c(($) => {
                    fw.data($)
                })
                fw.end()
            }, ($b) => {
                $b($, $c)
            })
        })
    }
}