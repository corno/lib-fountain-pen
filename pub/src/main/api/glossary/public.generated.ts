import * as pt from 'pareto-core-types'

import { T   } from './types.generated'

import * as mcommon from "glo-pareto-common"
import * as mh from "glo-astn-handlers"

export type FCreateDummyRequiredValueHandler = <GPAnnotation>($: mcommon.T.Null,) => mh.IRequiredValueHandler<T.Annotation<GPAnnotation>>