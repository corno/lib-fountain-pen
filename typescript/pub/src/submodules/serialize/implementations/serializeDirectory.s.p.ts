import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import * as g_fp from "../../fountainpen"
import * as g_main from "../../../main"

import { $$ as serializeBlock } from "./serializeBock.s.p"

import { A } from "../api.generated"

export const $$: A.serializeDirectory = <Annotation>() => {
    function serializeDirectory($: g_fp.T.Directory<Annotation>, $i: g_main.SYNC.I.Directory) {
        $.__forEach(() => false, ($, key) => {
            switch ($[0]) {
                case 'allowedGenerated':
                    pl.ss($, ($) => {
                        $i.allowedGenerated(key)
                    })
                    break
                case 'allowedManual':
                    pl.ss($, ($) => {
                        $i.allowedManual(key)
                    })
                    break
                case 'directory':
                    pl.ss($, ($) => {
                        $i.directory(key, ($i) => {
                            serializeDirectory($, $i)
                        })
                    })
                    break
                case 'file':
                    pl.ss($, ($) => {
                        $i.file(key, ($i) => {
                            serializeBlock()($, $i)
                        })
                    })
                    break
                case 'template':
                    pl.ss($, ($) => {
                        $i.template(key, ($i) => {
                            serializeBlock()($, $i)
                        })
                    })
                    break
                default: pl.au($[0])
            }
        })
    }

    return serializeDirectory
}