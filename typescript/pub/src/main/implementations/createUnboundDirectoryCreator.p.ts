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
                },
                allowedGenerated: ($) => {
                    createdFilesBuilder.add($, false)

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
                const nodes = $
                createdFiles.__forEach(() => false, ($, key) => {
                    if ($) {
                        nodes.__getEntry(
                            key,
                            ($) => {
                                $i.manualNode({
                                    path: newPath,
                                    name: key,
                                })
                            },
                            () => {
                            }
                        )
                        $i.manualNode({
                            path: newPath,
                            name: key,
                        })
                    }
                })
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

