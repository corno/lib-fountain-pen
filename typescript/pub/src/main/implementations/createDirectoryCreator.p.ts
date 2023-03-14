import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as pa from 'pareto-core-async'
import * as pm from 'pareto-core-map'
import * as pd from 'pareto-core-dev'

import * as g_fsr from "res-pareto-filesystem"
import * as g_fs from "lib-pareto-filesystem"

import { $a } from "../.."

import { $$ as cwc } from "../../main/implementations/createUnboundDirectoryCreator.p"

import { createDirectoryCreator } from "../api.generated"

export const $$: createDirectoryCreator = ($d) => {
    return ($c) => {
        $c(($, $c) => {
            cwc(
                {
                    'reportNodes': $d.report.nodes,
                    'createWriteStream': ($, $c) => {
                        const fw = g_fsr.$r.createFileWriter(
                            {
                                path: $,
                                createContainingDirectories: true,
                            },
                            $d.report.onWriteFileError,
                        )
                        $c(($) => {
                            fw.data($)
                        })
                        fw.end()
                    },
                    'pipeFountainPen': $a.fountainPen,
                    'getNodes': ($) => {
                        return g_fs.$a.createReadDirectoryOrAbort({
                            'onError': ($) => {
                                return ($) => {
                                    if ($.error[0] !== 'no entity') {
                                        $d.report.onReadDirError($)
                                    }
                                }
                            },
                            'readDirectory': g_fsr.$r.readDirectory,
                        })({
                            'path': $.path
                        })
                        // .map<pt.Dictionary<string>>(($) => {
                        //     switch ($[0]) {
                        //         case 'error':
                        //             return pl.cc($[1], ($) => {
                        //                 return pa.asyncValue(pm.wrapRawDictionary({}))
                        //             })
                        //         case 'success':
                        //             return pl.cc($[1], ($) => {
                        //                 return pa.asyncValue($.__mapWithKey(($, key) => key))
                        //             })
                        //         default: return pl.au($[0])
                        //     }
                        // })
                    },
                },
            )(($b) => {
                $b($, $c)
            })

        })
    }
}