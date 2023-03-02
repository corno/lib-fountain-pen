
import { CcreateUnboundFileCreator } from "../definition/api.generated"

export const $$: CcreateUnboundFileCreator = ($d) => {
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

