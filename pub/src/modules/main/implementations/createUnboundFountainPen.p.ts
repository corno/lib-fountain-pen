import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'

import * as api from "../api"

export const $$: api.CcreateUnboundFountainPen = ($x, $d) => {
    return ($, $c, $i) => {
        const config = $
        let isFirstLine = true
        function createSubBlock(
            currentIndentation: string,
            flush: ($: {}) => void,
            $c: ($i: api.IBlock) => void,
        ): void {
            function line($$c: ($i: api.ILine) => void) {

                let currentLine: null | ps.ArrayBuilder<string> = ps.createArrayBuilder()
                currentLine.push(currentIndentation)
                flush({})
                if (isFirstLine) {
                } else {
                    $i($x.newline)
                }
                isFirstLine = false
                $$c({
                    'indent': ($c) => {
                        createSubBlock(
                            $d.joinNestedStrings({
                                strings: [currentIndentation, $x.indentation],
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
                            $i($x.newline)
                            currentLine = ps.createArrayBuilder()
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