import * as ps from 'pareto-core-state'

import * as g_this from "../glossary"

import { createUnboundFountainPen } from "../api.generated"

export const $$:createUnboundFountainPen = ($, $d) => {
    return ($c, $i) => {
        let isFirstLine = true
        function createSubBlock(
            currentIndentation: string,
            flush: ($: {}) => void,
            $c: ($i: g_this.B.Block) => void,
        ): void {
            function line($$c: ($i: g_this.B.Line) => void) {

                let currentLine: null | ps.ArrayBuilder<string> = ps.createArrayBuilder()
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
                            $d.joinNestedStrings([currentIndentation, $.indentation]),
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
                            $i($.newline)
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
                'nestedLine': ($c) => {
                    line($c)
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