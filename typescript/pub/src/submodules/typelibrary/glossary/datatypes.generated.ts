import * as pt from 'pareto-core-types'


export namespace N {
    
    export namespace Block {
        
        export namespace N {
            
            export namespace A {
                
                export namespace N {}
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
    
    export namespace BlockElement {
        
        export namespace N {
            
            export namespace TU {
                
                export namespace N {
                    
                    export namespace line {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                    
                    export namespace nestedLine {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                }
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
    
    export namespace Directory {
        
        export namespace N {
            
            export namespace D {
                
                export namespace N {}
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
    
    export namespace LineElement {
        
        export namespace N {
            
            export namespace TU {
                
                export namespace N {
                    
                    export namespace indent {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                    
                    export namespace snippet {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                }
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
    
    export namespace NestedLine {
        
        export namespace N {
            
            export namespace A {
                
                export namespace N {}
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
    
    export namespace Node {
        
        export namespace N {
            
            export namespace TU {
                
                export namespace N {
                    
                    export namespace allowedGenerated {
                        
                        export namespace N {
                            
                            export namespace G {
                                
                                export namespace N {}
                                
                                export namespace T {}
                            }
                        }
                        
                        export namespace T {}
                    }
                    
                    export namespace allowedManual {
                        
                        export namespace N {
                            
                            export namespace G {
                                
                                export namespace N {}
                                
                                export namespace T {}
                            }
                        }
                        
                        export namespace T {}
                    }
                    
                    export namespace directory {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                    
                    export namespace file {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                    
                    export namespace template {
                        
                        export namespace N {}
                        
                        export namespace T {}
                    }
                }
                
                export namespace T {}
            }
        }
        
        export namespace T {}
    }
}

export namespace T {
    
    export namespace Block {
        
        export type A<GAnnotation> = T.BlockElement<GAnnotation>
    }
    
    export type Block<GAnnotation> = pt.Array<T.BlockElement<GAnnotation>>
    
    export namespace BlockElement {
        
        export type line<GAnnotation> = string
        
        export type nestedLine<GAnnotation> = T.NestedLine<GAnnotation>
    }
    
    export type BlockElement<GAnnotation> = 
        | ['line', string]
        | ['nestedLine', T.NestedLine<GAnnotation>]
    
    export namespace Directory {
        
        export type D<GAnnotation> = T.Node<GAnnotation>
    }
    
    export type Directory<GAnnotation> = pt.Dictionary<T.Node<GAnnotation>>
    
    export namespace LineElement {
        
        export type indent<GAnnotation> = T.Block<GAnnotation>
        
        export type snippet<GAnnotation> = string
    }
    
    export type LineElement<GAnnotation> = 
        | ['indent', T.Block<GAnnotation>]
        | ['snippet', string]
    
    export namespace NestedLine {
        
        export type A<GAnnotation> = T.LineElement<GAnnotation>
    }
    
    export type NestedLine<GAnnotation> = pt.Array<T.LineElement<GAnnotation>>
    
    export namespace Node {
        
        export namespace allowedGenerated {}
        
        export type allowedGenerated<GAnnotation> = null
        
        export namespace allowedManual {}
        
        export type allowedManual<GAnnotation> = null
        
        export type directory<GAnnotation> = T.Directory<GAnnotation>
        
        export type file<GAnnotation> = T.Block<GAnnotation>
        
        export type template<GAnnotation> = T.Block<GAnnotation>
    }
    
    export type Node<GAnnotation> = 
        | ['allowedGenerated', null]
        | ['allowedManual', null]
        | ['directory', T.Directory<GAnnotation>]
        | ['file', T.Block<GAnnotation>]
        | ['template', T.Block<GAnnotation>]
}