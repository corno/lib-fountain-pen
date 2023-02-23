import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'

import * as mapi from "../api"

export const $$: mapi.CcreateUnboundFountainPen = ($x, $d) => {
    return ($, $c, $i) => {
        const config = $
        let isFirstLine = true
        function createSubBlock(
            currentIndentation: string,
            flush: ($: {}) => void,
            $c: ($i: mapi.IBlock) => void,
        ): void {
            function line($$c: ($i: mapi.ILine) => void) {

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
                            $d.joinNestedStrings([currentIndentation, $x.indentation]),
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