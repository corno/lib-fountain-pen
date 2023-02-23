import * as pt from 'pareto-core-types'
import * as ps from 'pareto-core-state'

import * as gapi from "../api"
import * as gcommon from "glo-pareto-common"

function getEntry<T, RT>(
    dictionary: pt.Dictionary<T>,
    key: string,
    exists: ($: T) => RT,
    notExists: () => RT
): RT {
    let entry: T | undefined = undefined
    dictionary.__mapWithKey(($, thisKey) => {
        if (thisKey === key) {
            entry = $
        }
    })
    if (entry !== undefined) {
        return exists(entry)
    } else {
        return notExists()
    }
}

import { CcreateUnboundWriterCreator } from "../api"

export const $$:CcreateUnboundWriterCreator = ($d) => {
    return ($, $c) => {
        //const contextPath = $.path
        function createWriterImp(newPath: gcommon.T.Path, $c: ($i: gapi.IWriter) => void): void {
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
 
                    getEntry(
                        y,
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

