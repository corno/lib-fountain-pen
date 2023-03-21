import * as g_fsr from "res-pareto-filesystem"
import * as g_fs from "lib-pareto-filesystem"

import { $$ as fp } from "./fountainPen.p"

import { $a } from "../../main"

import { A } from "../api.generated"

export const $$: A.createDirectoryCreator = ($d, $se) => {
    return ($i, $c) => {
        $c(($, $c) => {
            $a.createDirectoryCreator(
                {
                    'pipeFountainPen': fp,
                    'getNodes': ($) => {
                        return g_fs.$a.createReadDirectoryOrAbort({
                            'readDirectory': g_fsr.$r.readDirectory(),
                        }, {
                            'onError': ($) => {
                                if ($.error[0] !== 'no entity') {
                                    $se.report.onReadDirError($)
                                }
                            },

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
                null,
            )({
                'report': {
                    'nodes': $se.report.nodes,
                    'onReadDirError': $se.report.onReadDirError,
                    'onWriteFileError': $se.report.onWriteFileError,
                },
                'createWriteStream': ($, $c) => {
                    const fw = g_fsr.$r.createFileWriter()(
                        {
                            'onWriteFileError': $se.report.onWriteFileError,

                        },

                    )({
                        path: $,
                        createContainingDirectories: true,
                    })
                    $c(($) => {
                        fw.data($)
                    })
                    fw.end()
                },

            }, ($b) => {
                $b($, $c)
            })

        })
    }
}