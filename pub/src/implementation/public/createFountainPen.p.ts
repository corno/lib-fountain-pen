import * as pl from "pareto-core-lib"
import * as pm from "pareto-core-state"

import * as iface from "../../api"
import { CCreateFountainPen } from "../creators.p"

export const f_createContext: CCreateFountainPen = ($, $i, $f, $c) => {
    const config = $
    let isFirstLine = true
    function createSubBlock(
        currentIndentation: string,
        flush: ($: {}) => void,
        $c: ($i: iface.IBlock) => void,
    ): void {
        function line($$c: ($i: iface.ILine) => void)  {

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
                        $f.joinNestedStrings({
                            strings: [currentIndentation, $.indentation],
                            separator: ""
                        }),
                        () => {
                            if (pl.isNotNull(currentLine)) {
                                $i($f.getArrayAsString({
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
                $i($f.getArrayAsString({
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
