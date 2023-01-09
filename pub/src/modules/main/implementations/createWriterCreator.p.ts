


import * as api from "../api"

import * as mcommon from "glo-pareto-common"

export const icreateWriterCreator: api.CcreateWriterCreator = ($d) => {
    return ($, $c) => {
        //const contextPath = $.path
        function createWriterImp(newPath: mcommon.TPath): api.IWriter {
            return {
                createDirectory: ($, $c) => {
                    $c(createWriterImp(
                        [newPath, $],
                    ))
                },
                createFile: ($, $c) => {
                    $d.if_createWriteStream(
                        [newPath, $],
                        ($i) => {
                            $d.pi_pipeFountainPen(
                                $i,
                                $c,
                            )
                        },
                    )
                }
            }
    
        }
        $c(createWriterImp([$]))
    }
}

