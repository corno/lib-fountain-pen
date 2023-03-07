import * as pt from 'pareto-core-types'
import * as ps from 'pareto-core-state'

import * as gapi from "../definition/glossary"
import * as gcommon from "glo-pareto-common"

import { createUnboundDirectoryCreator } from "../definition/api.generated"

export const $$: createUnboundDirectoryCreator = ($d) => {
    return ($, $c, $i) => {
        //const contextPath = $.path
        function createWriterImp(newPath: gcommon.T.Path, $c: ($i: gapi.B.Directory) => void): void {
            const createdFilesBuilder = ps.createUnsafeDictionaryBuilder<null>()

            $c({
                allowed: ($) => {
                    createdFilesBuilder.add($, null)
                },
                directory: ($, $c) => {
                    createdFilesBuilder.add($, null)
                    createWriterImp(
                        [newPath, $],
                        $c,
                    )
                },
                file: ($, $c) => {
                    createdFilesBuilder.add($, null)
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
            const createdFiles = createdFilesBuilder.getDictionary()
            createdFiles.__forEach(() => false, ($, key) => {
                $i.manualNode({
                    path: newPath,
                    name: key,
                })
            })
            $d.getNodes(newPath).__execute(($) => {
                $.__forEach(() => false, ($, key) => {

                    createdFiles.__getEntry(
                        key,
                        ($) => {
                            //
                        },
                        () => {
                            $i.superfluousNode({
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

