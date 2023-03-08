import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as pa from 'pareto-core-async'
import * as pm from 'pareto-core-map'

import * as gfs from "res-pareto-filesystem"

import { $a } from "../.."

import { $$ as cwc } from "../../pure/implementations/createUnboundDirectoryCreator.p"

import { createDirectory } from "../api.generated"

export const $$: createDirectory = ($, $c, $i) => {
    cwc(
        {
            createWriteStream: ($, $c) => {
                gfs.$r.writeFile(

                    {
                        path: $,
                        createContainingDirectories: true,
                    },
                    $c,
                    $i.error,
                )
            },
            pipeFountainPen: $a.fountainPen,
            getNodes: ($) => {
                return gfs.$r.readDirectory({
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
        },
    )($, $c, $i.nodes)
}