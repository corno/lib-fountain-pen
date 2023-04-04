import * as a_fsr from "res-pareto-filesystem"
import * as a_fse from "lib-pareto-filesystem/dist/submodules/errormessagecreators"
import * as a_fs from "lib-pareto-filesystem"

import { $$ as fp } from "./fountainPen.b"

import { $a } from "../../main"

import { A } from "../api.generated"

export const $$: A.createFile = () => {
    return ($c, $i) => {
        $c(($, $c) => {
            $a.createFileCreator(
                {
                    'pipeFountainPen': fp(),
                },
            )(
                ($b) => {
                    $b($, $c)
                },
                ($, $c) => {
                    //before                    
                    const fw = a_fsr.$r.createFileWriter().construct(
                        {
                            'onWriteFileError': ($) => {
                                $i.logError(a_fse.$a.writeFile()($.error))
                            },
                        },

                    )({
                        'path': $,
                        'create containing directories': true,
                        'overwrite if exists': true,
                    })
                    //callback
                    $c(($) => {
                        fw.data($)
                    })
                    //after
                    fw.end()
                },)

        })
    }
}