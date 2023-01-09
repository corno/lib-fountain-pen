


import * as api from "../api"

import * as mfs from "res-pareto-filesystem"
import * as mcommon from "res-pareto-filesystem"

import { icreateFountainPenCreator } from "./createFountainPenCreator.p"
// import { _defaultSettings } from "../../../data"

// {
//     //onError: $d.onError,
//     createWriteStream: ($, $c) => mfs.f_createWriteStream(
//         {
//             path: [contextPath, $],
//             createContainingDirectories: true,
//         },
//         $c,
//         {
//             onError: $d.onError,
//         },
//         ($, $i) => $._execute($i)
//     ),
//     pipeFountainPen: icreateFountainPenCreator(
//         _defaultSettings,
//         {},
//     )
// },


export const icreateWriterCreator: api.CcreateWriterCreator = ($, $d) => {
    return ($, $c) => {
        //const contextPath = $.path
        function createWriterImp(newPath: mcommon.TPath): api.BWriter {
            return {
                createDirectory: ($, $c) => {
                    $c(createWriterImp(
                        [newPath, $],
                    ))
                },
                createFile: ($, $c) => {
                    $d.createWriteStream(
                        [newPath, $],
                        ($i) => {
                            $d.pipeFountainPen(
                                ($) => {
                                    $i($)
                                },
                                $c,
                            )
                        },
                    )
                }
            }
    
        }
        $c(createWriterImp([$.path]))
    }
}

