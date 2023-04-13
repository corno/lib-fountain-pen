import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_fountainpen from "../../fountainpen"
import * as g_main from "../../../main"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type AllowedGenerated<GAnnotation> = ($: g_common.T.Null) => g_fountainpen.T.Node<GAnnotation>
        }
        
        
        export namespace F {
            export type AllowedManual<GAnnotation> = ($: g_common.T.Null) => g_fountainpen.T.Node<GAnnotation>
        }
        
        
        export namespace F {
            export type Directory<GAnnotation> = ($: g_fountainpen.T.Directory<GAnnotation>) => g_fountainpen.T.Node<GAnnotation>
        }
        
        
        export namespace F {
            export type File<GAnnotation> = ($: g_fountainpen.T.Block<GAnnotation>) => g_fountainpen.T.Node<GAnnotation>
        }
        
        
        export namespace F {
            export type Indent<GAnnotation> = ($: g_fountainpen.T.Block<GAnnotation>) => g_fountainpen.T.LineElement<GAnnotation>
        }
        
        
        export namespace F {
            export type Line<GAnnotation> = ($: g_common.T.String) => g_fountainpen.T.BlockElement<GAnnotation>
        }
        
        
        export namespace F {
            export type NestedLine<GAnnotation> = ($: g_fountainpen.T.NestedLine<GAnnotation>) => g_fountainpen.T.BlockElement<GAnnotation>
        }
        
        
        export namespace P {
            export type SerializeBlock<GAnnotation> = ($: g_fountainpen.T.Block<GAnnotation>, $i: g_main.SYNC.I.Block) => void
        }
        
        
        export namespace P {
            export type SerializeDirectory<GAnnotation> = ($: g_fountainpen.T.Directory<GAnnotation>, $i: g_main.SYNC.I.Directory) => void
        }
        
        
        export namespace F {
            export type Snippet<GAnnotation> = ($: g_common.T.String) => g_fountainpen.T.LineElement<GAnnotation>
        }
        
        
        export namespace F {
            export type Template<GAnnotation> = ($: g_fountainpen.T.Block<GAnnotation>) => g_fountainpen.T.Node<GAnnotation>
        }
    }
}