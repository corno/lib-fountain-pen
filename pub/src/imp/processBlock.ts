import * as pa from "pareto-core-types"

import * as iface from "../interface"

export function processBlock(
    trimRight: (str: string) => string,
): iface.CProcessBlock {
    return (
        $i,
        $,
        $c,
    ) => {
        let isFirstLine = true
        function createSubBlock(
            currentIndentation: string,
            flush: ($: {}) => void,
            $c: ($i: iface.IBlock) => void,
        ): void {
            $c({
                'line': ($_, $i2) => {
                    let currentLine: null | string = currentIndentation
                    flush({})
                    if (!isFirstLine) {
                        $i.onData($.newline)
                    }
                    isFirstLine = false
                    $i2({
                        'indent': ($_, $i3) => {
                            createSubBlock(
                                currentIndentation + $.indentation,
                                () => {
                                    if (currentLine !== null) {
                                        $i.onData($.trimLines ? trimRight(currentLine) : currentLine)
                                        currentLine = null
                                    }
                                },
                                $i3
                            )
                        },
                        'snippet': ($2) => {
                            if (currentLine !== null) {
                                currentLine += `${$2}`
                            } else {
                                $i.onData($.newline)
                                currentLine = `${currentIndentation}${$2}`
                            }
                        },
                    })
                    if (currentLine !== null) {
                        $i.onData($.trimLines ? trimRight(currentLine) : currentLine)
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
        $i.onEnd(null)
    }
}
