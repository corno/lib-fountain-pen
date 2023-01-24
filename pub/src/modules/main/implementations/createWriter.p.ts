import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as ps from 'pareto-core-state'

import * as api from "../api"

import * as mtemp from "res-pareto-tostring"
import * as mtostring from "res-pareto-tostring"
import * as mfs from "res-pareto-filesystem"
import * as mfsl from "lib-pareto-filesystem"

import { $a } from "../index"

import { $$ as cwc } from "./createUnboundWriterCreator.p"


export const $$: api.CcreateWriter = ($d) => {
    return cwc(
        {
            createWriteStream: ($, $c) => {
                mfs.$a.createWriteStream(
                    {
                        onError: ($) => {
                            $d.onError(`${mfsl.$a.createWriteFileErrorMessage($.error)} @ ${$.path}`)
                        }
                    },
                )(

                    {
                        path: $,
                        createContainingDirectories: true,
                    },
                    $c,
                )
            },
            pipeFountainPen: $a.fountainPen,
            getNodes: ($) => {
                return mfs.$a.readDirectory({
                    path: $
                }).map<pt.Dictionary<string>>(($) => {
                    switch ($[0]) {
                        case 'error':
                            return pl.cc($[1], ($) => {
                                return pl.asyncValue(pl.createEmptyDictionary())
                            })
                        case 'success':
                            return pl.cc($[1], ($) => {
                                return pl.asyncValue($.map(($, key) => key))
                            })
                        default: return pl.au($[0])
                    }
                })
            },
            reportSuperfluousNode: $d.reportSuperfluousNode,
        },

    )
}