import * as pt from 'pareto-core-types'

import * as gcommon from "glo-pareto-common"

export namespace T {
    
    export namespace Configuration {
        
        export type indentation = string
        
        export type newline = string
    }
    
    export type Configuration = {
        readonly 'indentation': string
        readonly 'newline': string
    }
    
    export namespace Nodes {
        
        export type D = string
    }
    
    export type Nodes = pt.Dictionary<string>
    
    export namespace SuperfluousNode {
        
        export type name = string
        
        export type path = gcommon.T.Path
    }
    
    export type SuperfluousNode = {
        readonly 'name': string
        readonly 'path': gcommon.T.Path
    }
}