import * as ps from 'pareto-core-state'
import * as pl from 'pareto-core-lib'

import * as g_this from "../glossary"
import * as g_common from "glo-pareto-common"

import { createUnboundDirectoryCreator } from "../api.generated"

export const $$: createUnboundDirectoryCreator = ($d) => {
    return ($c) => {
        $c(($, $c) => {
            //const contextPath = $.path
            function createWriterImp(newPath: g_common.T.Path, $c: ($i: g_this.B.Directory) => void): void {
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
                                    $c,
                                    $i,
                                )
                            },
                        )
                    }
                })
                const createdFiles = createdFilesBuilder.getDictionary()
                pl.processAsyncValue(
                    $d.getNodes({
                        'path': newPath,
                    }),
                    ($) => {
                        const nodes = $
                        createdFiles.__forEach(() => false, ($, key) => {
                            if ($) {
                                nodes.__getEntry(
                                    key,
                                    ($) => {
                                        $d.reportNodes.manualNode({
                                            path: newPath,
                                            name: key,
                                        })
                                    },
                                    () => {
                                    }
                                )
                            }
                        })
                        $.__forEach(() => false, ($, key) => {
    
                            createdFiles.__getEntry(
                                key,
                                ($) => {
                                    //
                                },
                                () => {
                                    $d.reportNodes.superfluousNode({
                                        path: newPath,
                                        name: key,
                                    })
                                }
                            )
                        })
                    }
                )
            }
            createWriterImp([$], $c)
        })
    }
}

