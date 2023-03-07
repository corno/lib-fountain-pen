import * as pt from 'pareto-core-types'
import * as ps from 'pareto-core-state'

import * as gapi from "../definition/glossary"
import * as gcommon from "glo-pareto-common"

import { createUnboundDirectoryCreator } from "../definition/api.generated"

export const $$: createUnboundDirectoryCreator = ($d) => {
    return ($, $c, $i) => {
        //const contextPath = $.path
        function createWriterImp(newPath: gcommon.T.Path, $c: ($i: gapi.B.Directory) => void): void {
            const createdFilesBuilder = ps.createUnsafeDictionaryBuilder<boolean>()

            $c({
                allowedManual: ($) => {
                    createdFilesBuilder.add($, true)

                    $i.manualNode({
                        path: newPath,
                        name: $,
                    })
                },
                allowedGenerated: ($) => {
                    createdFilesBuilder.add($, true)

                },
                directory: ($, $c) => {
                    createdFilesBuilder.add($, false)
                    createWriterImp(
                        [newPath, $],
                        $c,
                    )
                },
                file: ($, $c) => {
                    createdFilesBuilder.add($, false)
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
        }
        createWriterImp([$], $c)
    }
}

