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
                                if (currentLine !== null) {
                                    $i($d.getArrayAsString(currentLine.getArray()))
                                    currentLine = null
                                }
                            },
                            $c
                        )
                    },
                    'snippet': ($2) => {
                        if (currentLine !== null) {
                            currentLine.push($2)
                        } else {
                            $i($x.newline)
                            currentLine = ps.createArrayBuilder()
                            currentLine.push(currentIndentation)
                            currentLine.push($2)
                        }
                    },
                })
                if (currentLine !== null) {
                    $i($d.getArrayAsString(currentLine.getArray()))
                }
            }
            $c({
                'line': ($) => {
                    line(($i) => {
                        $i.snippet($)
                    })
                },
                'nestedLine': ($$c) => {
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