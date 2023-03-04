import * as pt from 'pareto-core-types'
import * as pl from 'pareto-core-lib'
import * as pa from 'pareto-core-async'
import * as pm from 'pareto-core-map'

import * as gfs from "res-pareto-filesystem"
import * as gfslib from "lib-pareto-filesystem"

import { $a } from ".."

import { $$ as cfc } from "./createUnboundFileCreator.p"

import { CcreateFile } from "../definition/api.generated"

export const $$:CcreateFile = ($d) => {
    return cfc(
        {
            createWriteStream: ($, $c) => {
                gfs.$a.createWriteStream(
                    {
                        // onError: ($) => {
                        //     $d.onError(`${gfslib.$a.createWriteFileErrorMessage($.error)} @ ${$.path}`)
                        // },
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
        },
    )
}