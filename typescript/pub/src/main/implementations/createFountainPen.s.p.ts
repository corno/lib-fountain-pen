import * as ps from 'pareto-core-state'
import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'

import * as g_this from "../glossary"

import { A } from "../api.generated"

export const $$: A.createFountainPen = ($, $d) => {


    return ($c, $i) => {
        let isFirstLine = true
        function createSubBlock(
            currentIndentation: string,
            flush: ($: {}) => void,
            $c: ($i: g_this.SYNC.I.Block) => void,
        ): void {
            function line($$c: ($i: g_this.SYNC.I.Line) => void) {

                let currentLine: pt.OptionalValue<ps.ArrayBuilder<string>> = [true, ps.createArrayBuilder()]
                currentLine[1].push(currentIndentation)
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
                                if (currentLine[0] === true) {
                                    $i($d.getArrayAsString(currentLine[1].getArray()))
                                    currentLine = [false]
                                }
                            },
                            $c
                        )
                    },
                    'snippet': ($2) => {
                        pl.optional(
                            currentLine,
                            ($) => {
                                $.push($2)
                            },
                            () => {
                                $i($.newline)
                                currentLine = [true, ps.createArrayBuilder()]
                                currentLine[1].push(currentIndentation)
                                currentLine[1].push($2)
                            }
                        )
                    },
                })
                pl.optional(
                    currentLine,
                    ($) => {
                        $i($d.getArrayAsString($.getArray()))
                    },
                    () => { }
                )
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