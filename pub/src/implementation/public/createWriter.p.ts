

import { TPath } from "res-pareto-filesystem"
import * as api from "../../api"
import { CCreateWriter } from "../creators.p"


export const createWriter: CCreateWriter = ($, $i, $d) => {
    const config = $
    function cw(newPath: TPath): api.IWriter {
        return {
            createDirectory: ($, $c) => {
                $c(cw(
                    [newPath, $],
                ))
            },
            createFile: ($, $c) => {
                $d.createWriteStream(
                    {
                        path: [newPath, $],
                        createContainingDirectories: true,
                    },
                    ($i) => {
                        $d.createFountainPen(
                            {
                                indentation: "    ",
                                newline: "\n",
                            },
                            ($) => {
                                $i($)
                            },
                            ($i) => {
                                $c($i)
                            },
                        )
                    },
                    {
                        onError: $i.onError
                    },
                    ($, $i) => $._execute($i)
                )
            }
        }

    }
    return cw(config.path)
}

