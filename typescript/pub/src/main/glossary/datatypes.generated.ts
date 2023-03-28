import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_fs from "res-pareto-filesystem"

export namespace N {}

export namespace T {
    
    export namespace Configuration {
        
        export type indentation = string
        
        export type newline = string
    }
    
    export type Configuration = {
        readonly 'indentation': string
        readonly 'newline': string
    }
    
    export namespace Node {
        
        export type name = string
        
        export type path = g_common.T.Path
    }
    
    export type Node = {
        readonly 'name': string
        readonly 'path': g_common.T.Path
    }
}