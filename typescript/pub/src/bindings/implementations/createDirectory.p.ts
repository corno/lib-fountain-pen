import * as a_fsr from "res-pareto-filesystem"
import * as a_fse from "lib-pareto-filesystem/dist/submodules/errormessagecreators"
import * as a_fs from "lib-pareto-filesystem"

import { $$ as fp } from "./fountainPen.p"

import { $a } from "../../main"

import { A } from "../api.generated"

export const $$: A.createDirectory = () => {
    return ($c, $i) => {
        $c(($, $c) => {
            $a.createDirectoryCreator(
                {
                    'pipeFountainPen': fp,
                    'getNodes': ($) => {
                        return a_fs.$a.createReadDirectoryOrAbort({
                            'readDirectory': a_fsr.$r.readDirectory(),
                        }, {
                            'onError': ($) => {
                                if ($.error[0] !== 'no entity') {
                                    $i.logError(a_fse.$a.readDir()($.error))
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
            )(
                ($b) => {
                    $b($, $c)
                },
                {
                    'report': {
                        'manualNode': ($) => {
                            $i.log($a.createAllowedNodeMessage()($))
                        },
                        'superfluousNode': ($) => {
                            $i.log($a.createSuperfluousNodeMessage()($))

                        },
                    },
                    'createWriteStream': ($, $c) => {
                        //before
                        const fw = a_fsr.$r.createFileWriter()(
                            {
                                'onWriteFileError': ($) => {
                                    $i.logError(a_fse.$a.writeFile()($.error))
                                },
                            },

                        )({
                            path: $,
                            createContainingDirectories: true,
                        })
                        //callback
                        $c(($) => {
                            fw.data($)
                        })
                        //after
                        fw.end()
                    },

                })

        })
    }
}