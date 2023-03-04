import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as pa from 'pareto-core-async'
import * as pm from 'pareto-core-map'

import * as gfs from "res-pareto-filesystem"

import { $a } from ".."

import { $$ as cwc } from "./createUnboundDirectoryCreator.p"

import { CcreateDirectory } from "../definition/api.generated"

export const $$:CcreateDirectory = ($d) => {
    return cwc(
        {
            createWriteStream: ($, $c) => {
                gfs.$a.createWriteStream(
                    {
                        // onError: ($) => {
                        //     $d.onError(`${gfslib.$a.createWriteFileErrorMessage($.error)} @ ${$.path}`)
                        // }
                        onError: $d.onError,
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
                return gfs.$a.readDirectory({
                    path: $
                }).map<pt.Dictionary<string>>(($) => {
                    switch ($[0]) {
                        case 'error':
                            return pl.cc($[1], ($) => {
                                return pa.asyncValue(pm.wrapRawDictionary({}))
                            })
                        case 'success':
                            return pl.cc($[1], ($) => {
                                return pa.asyncValue($.__mapWithKey(($, key) => key))
                            })
                        default: return pl.au($[0])
                    }
                })
            },
            reportSuperfluousNode: $d.reportSuperfluousNode,
        },
    )
}