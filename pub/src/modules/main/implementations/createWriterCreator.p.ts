import * as ps from "pareto-core-state"
import * as pr from "pareto-core-raw"


import * as api from "../api"

import * as mcommon from "glo-pareto-common"

export const icreateWriterCreator: api.CcreateWriterCreator = ($d) => {
    return ($, $c) => {
        //const contextPath = $.path
        function createWriterImp(newPath: mcommon.TPath, $c: ($i: api.IWriter) => void): void {
            const x = ps.createUnsafeDictionaryBuilder<null>()

            $c({
                allowed: ($) => {
                    x.add($, null)
                },
                directory: ($, $c) => {
                    x.add($, null)
                    createWriterImp(
                        [newPath, $],
                        $c,
                    )
                },
                file: ($, $c) => {
                    x.add($, null)
                    $d.if_createWriteStream(
                        [newPath, $],
                        ($i) => {
                            $d.pi_pipeFountainPen(
                                $i,
                                $c,
                            )
                        },
                    )
                }
            })
            const y = x.getDictionary()
            $d.af_getNodes(newPath)._execute(($) => {
                $.forEach(() => false, ($, key) => {
                    pr.getEntry(
                        y,
                        key,
                        () => {
                            //
                        },
                        () => {
                            $d.pr_reportSuperfluousNode({
                                path: newPath,
                                name: key,
                            })
                        }
                    )
                })
            })
            //x.getDictionary().
        }
        createWriterImp([$], $c)
    }
}

