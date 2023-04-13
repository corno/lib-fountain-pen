import * as pl from 'pareto-core-lib'
import * as pd from 'pareto-core-dev'

import { A } from "../api.generated"

export const $$: A.directory = () => {
    return ($) => {
        return pd.implementMe(`IMPLEMENT directory`)
    }
}