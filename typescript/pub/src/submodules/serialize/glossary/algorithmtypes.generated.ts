import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"

import * as g_common from "glo-pareto-common"
import * as g_main from "../../../main"
import * as g_typelibrary from "../../typelibrary"

export namespace ASYNC {
    
    export namespace I {}
    
    export namespace A {}
}

export namespace SYNC {
    
    export namespace A {
        
        
        export namespace F {
            export type AllowedGenerated<GAnnotation> = ($: g_common.T.Null) => g_typelibrary.T.Node<GAnnotation>
        }
        
        
        export namespace F {
            export type AllowedManual<GAnnotation> = ($: g_common.T.Null) => g_typelibrary.T.Node<GAnnotation>
        }
        
        
        export namespace F {
            export type Directory<GAnnotation> = ($: g_typelibrary.T.Directory<GAnnotation>) => g_typelibrary.T.Node<GAnnotation>
        }
        
        
        export namespace F {
            export type File<GAnnotation> = ($: g_typelibrary.T.Block<GAnnotation>) => g_typelibrary.T.Node<GAnnotation>
        }
        
        
        export namespace F {
            export type Indent<GAnnotation> = ($: g_typelibrary.T.Block<GAnnotation>) => g_typelibrary.T.LineElement<GAnnotation>
        }
        
        
        export namespace F {
            export type Line<GAnnotation> = ($: g_common.T.String) => g_typelibrary.T.BlockElement<GAnnotation>
        }
        
        
        export namespace F {
            export type NestedLine<GAnnotation> = ($: g_typelibrary.T.NestedLine<GAnnotation>) => g_typelibrary.T.BlockElement<GAnnotation>
        }
        
        
        export namespace P {
            export type SerializeBlock<GAnnotation> = ($: g_typelibrary.T.Block<GAnnotation>, $i: g_main.SYNC.I.Block) => void
        }
        
        
        export namespace P {
            export type SerializeDirectory<GAnnotation> = ($: g_typelibrary.T.Directory<GAnnotation>, $i: g_main.SYNC.I.Directory) => void
        }
        
        
        export namespace F {
            export type Snippet<GAnnotation> = ($: g_common.T.String) => g_typelibrary.T.LineElement<GAnnotation>
        }
        
        
        export namespace F {
            export type Template<GAnnotation> = ($: g_typelibrary.T.Block<GAnnotation>) => g_typelibrary.T.Node<GAnnotation>
        }
    }
}