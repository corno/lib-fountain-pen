import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_main from "../../main"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace I {
        
        export type Log = {
            readonly 'log': g_common.SYNC.I.String
            readonly 'logError': g_common.SYNC.I.String
        }
    }
    
    export namespace A {
        
        
        export namespace P {
            export type CreateDirectory = ($c: ($i: g_main.SYNC.I.CreateDirectory) => void, $i: SYNC.I.Log) => void
        }
    }
}