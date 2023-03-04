
import { createUnboundFileCreator } from "../definition/api.generated"

export const $$: createUnboundFileCreator = ($d) => {
    return ($, $c) => {
        $d.createWriteStream(
            $,
            ($i) => {
                $d.pipeFountainPen(
                    null,
                    $c,
                    $i,
                )
            },
        )
    }
}

