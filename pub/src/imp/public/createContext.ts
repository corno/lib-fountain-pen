import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"
import * as p2 from "pareto-core-tostring"

import * as iface from "../../interface"

export const createContext: iface.PCreateContext = ($, $c, $i,) => {
    let isFirstLine = true
    function createSubBlock(
        currentIndentation: string,
        flush: ($: {}) => void,
        $c: ($i: iface.IBlock) => void,
    ): void {
        $c({
            'line': ($_, $i2) => {
                let currentLine: null | pm.ArrayBuilder<string> = pm.createArrayBuilder()
                currentLine.push(currentIndentation)
                flush({})
                if (isFirstLine) {
                } else {
                    $i.consumer.onData($.newline)
                }
                isFirstLine = false
                $i2({
                    'indent': ($_, $i3) => {
                        createSubBlock(
                            p2.joinNestedStrings([currentIndentation, $.indentation]),
                            () => {
                                if (pl.isNotNull(currentLine)) {
                                    $i.consumer.onData(p2.getArrayAsString(currentLine.getArray(), ""))
                                    currentLine = null
                                }
                            },
                            $i3
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
                    $i.consumer.onData(p2.getArrayAsString(currentLine.getArray(), ""))
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
