
import { createUnboundFileCreator } from "../api.generated"

export const $$: createUnboundFileCreator = ($d) => {
    return ($c) => {
        $c(($, $c) => {
            $d.createWriteStream(
                $,
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

