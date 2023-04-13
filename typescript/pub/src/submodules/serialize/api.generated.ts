import * as pt from 'pareto-core-types'

import * as g_this from "./glossary"

export namespace D {
    
    
    
    
    
    
    
    
    
    
    
}

export namespace A {
    
    export type allowedGenerated = <GAnnotation>() => g_this.SYNC.A.F.AllowedGenerated<GAnnotation>
    
    export type allowedManual = <GAnnotation>() => g_this.SYNC.A.F.AllowedManual<GAnnotation>
    
    export type directory = <GAnnotation>() => g_this.SYNC.A.F.Directory<GAnnotation>
    
    export type file = <GAnnotation>() => g_this.SYNC.A.F.File<GAnnotation>
    
    export type indent = <GAnnotation>() => g_this.SYNC.A.F.Indent<GAnnotation>
    
    export type line = <GAnnotation>() => g_this.SYNC.A.F.Line<GAnnotation>
    
    export type nestedLine = <GAnnotation>() => g_this.SYNC.A.F.NestedLine<GAnnotation>
    
    export type serializeBlock = <GAnnotation>() => g_this.SYNC.A.P.SerializeBlock<GAnnotation>
    
    export type serializeDirectory = <GAnnotation>() => g_this.SYNC.A.P.SerializeDirectory<GAnnotation>
    
    export type snippet = <GAnnotation>() => g_this.SYNC.A.F.Snippet<GAnnotation>
    
    export type template = <GAnnotation>() => g_this.SYNC.A.F.Template<GAnnotation>
}

export type API = {
    readonly 'allowedGenerated': A.allowedGenerated
    readonly 'allowedManual': A.allowedManual
    readonly 'directory': A.directory
    readonly 'file': A.file
    readonly 'indent': A.indent
    readonly 'line': A.line
    readonly 'nestedLine': A.nestedLine
    readonly 'serializeBlock': A.serializeBlock
    readonly 'serializeDirectory': A.serializeDirectory
    readonly 'snippet': A.snippet
    readonly 'template': A.template
}