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

                let currentLine: pt.OptionalValue<string> = pl.set(currentIndentation)
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
                                currentLine.map(
                                    ($) => {
                                        $i($)
                                        currentLine = pl.notSet()
                                    },
                                    () => {
                                    }
                                )
                            },
                            $c
                        )
                    },
                    'snippet': ($2) => {
                        currentLine.map(
                            ($) => {
                                currentLine = pl.set($d.join({
                                    'first': $,
                                    'second': $2,
                                }))
                            },
                            () => {
                                $i($.newline)
                                currentLine = pl.set($d.join({
                                    'first': currentIndentation,
                                    'second': $2,
                                }))
                            }
                        )
                    },
                })
                currentLine.map(
                    ($) => {
                        $i($)
                    },
                    () => {}
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