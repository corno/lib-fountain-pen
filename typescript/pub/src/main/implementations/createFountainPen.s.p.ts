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

                let currentLine: pt.OptionalValue<string> = [true, currentIndentation]
                flush({})
                if (isFirstLine) {
                } else {
                    $i($.newline)
                }
                isFirstLine = false
                $$c({
                    'indent': ($c) => {
                        createSubBlock(
                            $d.join({
                                'first': currentIndentation,
                                'second': $.indentation,
                            }),
                            () => {
                                if (currentLine[0] === true) {
                                    $i(currentLine[1])
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
                                currentLine[1] = $d.join({
                                    'first': currentLine[1],
                                    'second': $2,
                                })
                            },
                            () => {
                                $i($.newline)
                                currentLine = [true, $d.join({
                                    'first': currentIndentation,
                                    'second': $2,
                                })]
                            }
                        )
                    },
                })
                pl.optional(
                    currentLine,
                    ($) => {
                        $i($)
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