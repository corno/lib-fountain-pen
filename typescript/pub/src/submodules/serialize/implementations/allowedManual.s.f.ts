import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import { A } from "../api.generated"

export const $$: A.allowedManual = () => {
    return ($) => {
        return ['allowedManual', $]
    }
}