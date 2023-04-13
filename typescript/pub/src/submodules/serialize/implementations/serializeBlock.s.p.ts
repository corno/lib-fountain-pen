import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as g_fp from "../../fountainpen"
import * as g_main from "../../../main"

import { A } from "../api.generated"

export const $$: A.serializeBlock = <Annotation>() => {
    function serializeBlock($: g_fp.T.Block<Annotation>, $i: g_main.SYNC.I.Block) {
        $.__forEach(($) => {
            switch ($[0]) {
                case 'line':
                    pl.ss($, ($) => {
                        $i.line($)
                    })
                    break
                case 'nestedLine':
                    pl.ss($, ($) => {
                        $.__forEach(($) => {
                            $i.nestedLine(($i) => {
                                switch ($[0]) {
                                    case 'indent':
                                        pl.ss($, ($) => {
                                            $i.indent(($i) => {
                                                serializeBlock($, $i)
                                            })
                                        })
                                        break
                                    case 'snippet':
                                        pl.ss($, ($) => {
                                            $i.snippet($)
                                        })
                                        break
                                    default: pl.au($[0])
                                }
                            })
                        })
                    })
                    break
                default: pl.au($[0])
            }
        })
    }
    return ($, $i) => {
        serializeBlock($, $i)
    }
}