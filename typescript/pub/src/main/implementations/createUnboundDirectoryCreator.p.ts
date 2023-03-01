import * as pt from 'pareto-core-types'
import * as ps from 'pareto-core-state'

import * as gapi from "../api"
import * as gcommon from "glo-pareto-common"

import { CcreateUnboundDirectoryCreator } from "../api"

export const $$: CcreateUnboundDirectoryCreator = ($d) => {
    return ($, $c) => {
        //const contextPath = $.path
        function createWriterImp(newPath: gcommon.T.Path, $c: ($i: gapi.IDirectory) => void): void {
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
            $d.getNodes(newPath).__execute(($) => {
                $.__forEach(() => false, ($, key) => {

                    y.__getEntry(
                        key,
                        ($) => {
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

