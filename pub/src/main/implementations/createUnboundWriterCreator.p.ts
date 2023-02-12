import * as ps from 'pareto-core-state'
import * as pr from 'pareto-core-raw'


import * as api from "../api"

import * as mcommon from "glo-pareto-common"

export const $$: api.CcreateUnboundWriterCreator = ($d) => {
    return ($, $c) => {
        //const contextPath = $.path
        function createWriterImp(newPath: mcommon.T.Path, $c: ($i: api.IWriter) => void): void {
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
                    $d.createWriteStream(
                        [newPath, $],
                        ($i) => {
                            $d.pipeFountainPen(
                                null,
                                $c,
                                $i,
                            )
                        },
                    )
                }
            })
            const y = x.getDictionary()
            $d.getNodes(newPath)._execute(($) => {
                $.forEach(() => false, ($, key) => {
                    pr.getEntry(
                        y,
                        key,
                        () => {
                            //
                        },
                        () => {
                            $d.reportSuperfluousNode({
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

