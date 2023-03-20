
import { A } from "../api.generated"

export const $$: A.createFileCreator = ($d, $se) => {
    return ({}, $c) => {
        $c(($, $c) => {
            $se.createWriteStream(
                $,
                ($i) => {
                    $d.pipeFountainPen(
                        $i,
                        $c,
                    )
                },
            )
        })
    }
}

