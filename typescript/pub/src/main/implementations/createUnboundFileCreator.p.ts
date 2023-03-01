
import { CcreateUnboundFileCreator } from "../api"

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

