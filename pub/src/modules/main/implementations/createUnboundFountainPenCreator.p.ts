import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"

import * as api from "../api"

export const icreateUnboundFountainPenCreator: api.CcreateUnboundFountainPenCreator = ($, $d) => {
    return ($i, $c) => {
        const config = $
        let isFirstLine = true
        function createSubBlock(
            currentIndentation: string,
            flush: ($: {}) => void,
            $c: ($i: api.BBlock) => void,
        ): void {
            function line($$c: ($i: api.BLine) => void) {

                let currentLine: null | pm.ArrayBuilder<string> = pm.createArrayBuilder()
                currentLine.push(currentIndentation)
                flush({})
                if (isFirstLine) {
                } else {
                    $i($.newline)
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
                                    $i($d.getArrayAsString({
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
                            $i($.newline)
                            currentLine = pm.createArrayBuilder()
                            currentLine.push(currentIndentation)
                            currentLine.push($2)
                        }
                    },
                })
                if (pl.isNotNull(currentLine)) {
                    $i($d.getArrayAsString({
                        array: currentLine.getArray(),
                        separator: ""
                    }))
                }
            }
            $c({
                'literal': ($) => {
                    line(($i) => {
                        $i.snippet($)
                    })
                },
                'line': ($$c) => {
                    line($$c)
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
    }
}