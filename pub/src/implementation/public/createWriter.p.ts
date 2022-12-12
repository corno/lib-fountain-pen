

import * as api from "../../api"
import { CCreateWriter } from "../creators.p"


export const createWriter: CCreateWriter = ($, $i, $d) => {
    const path = $
    return {
        createDirectory: ($, $c) => {
            $c(createWriter(
                [path, $],
                $i,
                $d,
            ))
        },
        createFile: ($, $c) => {
            $d.createWriteStream(
                {
                    path: [path, $],
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

