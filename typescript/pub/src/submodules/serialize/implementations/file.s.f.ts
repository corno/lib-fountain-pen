import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import { A } from "../api.generated"

export const $$: A.file = () => {
    return ($) => {
        return ['file', $]
    }
}