
import { A } from "../api.generated"

export const $$: A.createFileCreator = ($d) => {
    return ($c, $i) => {
        $c(($, $c) => {
            $i(
                {
                    'overwrite': true,
                    'path': $,
                },
                ($i) => {
                    $d.pipeFountainPen(
                        $c,
                        $i,
                    )
                },
            )
        })
    }
}

