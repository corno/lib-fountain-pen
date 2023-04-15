import * as a_array from "res-pareto-array"
import * as a_fsr from "res-pareto-filesystem"
import * as a_fse from "lib-pareto-filesystem/dist/submodules/errormessagecreators"
import * as a_fs from "lib-pareto-filesystem"

import { $$ as fp } from "./fountainPen.b"

import { $a } from "../../main"

import { A } from "../api.generated"

export const $$: A.createDirectory = () => {
    return ($c, $i) => {
        $c(($, $c) => {
            $a.createDirectoryCreator(
                {
                    'pipeFountainPen': fp(),
                    'getNodes': ($) => a_fs.$a.createReadDirectoryOrAbort({
                        'readDirectory': a_fsr.$r.readDirectory(),
                    }, {
                        'onError': ($) => {
                            if ($.error[0] !== 'no entity') {
                                $i.logError(a_fse.$a.readDir()($.error))
                            }
                        },

                    })({
                        'path': $.path
                    }),
                    'push': a_array.$r.push()
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
                        const fw = a_fsr.$r.createFileWriter().construct(
                            {
                                'onWriteFileError': ($) => {
                                    $i.logError(a_fse.$a.writeFile()($.error))
                                },
                            },

                        )({
                            path: $.path,
                            'create containing directories': true,
                            'overwrite if exists': $.overwrite,
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