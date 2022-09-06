import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"

import * as iface from "../../interface"

export const createContext: iface.PCreateContext = ($, $c, $i, $d) => {
    let isFirstLine = true
    function createSubBlock(
        currentIndentation: string,
        flush: ($: {}) => void,
        $c: ($i: iface.IBlock) => void,
    ): void {
        $c({
            'line': ($$c) => {
                let currentLine: null | pm.ArrayBuilder<string> = pm.createArrayBuilder()
                currentLine.push(currentIndentation)
                flush({})
                if (isFirstLine) {
                } else {
                    $i.consumer.onData($.newline)
                }
                isFirstLine = false
                $$c({
                    'indent': ($c) => {
                        createSubBlock(
                            $d.joinNestedStrings({
                                strings: [currentIndentation, $.indentation],
                                separator: ""
                            }),
                            () => {
                                if (pl.isNotNull(currentLine)) {
                                    $i.consumer.onData($d.getArrayAsString({
                                        array: currentLine.getArray(),
                                        separator: ""
                                    }))
                                    currentLine = null
                                }
                            },
                            $c
                        )
                    },
                    'snippet': ($2) => {
                        if (pl.isNotNull(currentLine)) {
                            currentLine.push($2)
                        } else {
                            $i.consumer.onData($.newline)
                            currentLine = pm.createArrayBuilder()
                            currentLine.push(currentIndentation)
                            currentLine.push($2)
                        }
                    },
                })
                if (pl.isNotNull(currentLine)) {
                    $i.consumer.onData($d.getArrayAsString({
                        array: currentLine.getArray(),
                        separator: ""
                    }))
                }
            },
        })
    }
    createSubBlock(
        ``,
        ($) => {
            //no flushing
        },
        $c,
    )
    $i.consumer.onEnd()
}
