import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import { data, externalTypeReference, glossaryParameter, imp, procedure, sExternalInterfaceReference, sInterfaceReference, sfunction } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

const d = pd.d
const a = pd.a

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'imports': d({
        "typelibrary": imp(),
        "main": imp(),
        "common": imp(),
    }),
    'glossary parameters': d({
        "Annotation": null,
    }),
    'root': {
        'types': d({
        }),
        'namespaces': d({
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({
            "SerializeDirectory": procedure(data(externalTypeReference("typelibrary", "Directory", { "Annotation": glossaryParameter("Annotation") })), sExternalInterfaceReference("main", "Directory")),
            "SerializeBlock": procedure(data(externalTypeReference("typelibrary", "Block", { "Annotation": glossaryParameter("Annotation") })), sExternalInterfaceReference("main", "Block")),
            "Snippet": sfunction(externalTypeReference("typelibrary", "LineElement", { "Annotation": glossaryParameter("Annotation") }), data(externalTypeReference("common", "String"))),
            "Indent": sfunction(externalTypeReference("typelibrary", "LineElement", { "Annotation": glossaryParameter("Annotation") }), data(externalTypeReference("typelibrary", "Block", { "Annotation": glossaryParameter("Annotation") }))),
            "NestedLine": sfunction(externalTypeReference("typelibrary", "BlockElement", { "Annotation": glossaryParameter("Annotation") }), data(externalTypeReference("typelibrary", "NestedLine", { "Annotation": glossaryParameter("Annotation") }))),
            "Line": sfunction(externalTypeReference("typelibrary", "BlockElement", { "Annotation": glossaryParameter("Annotation") }), data(externalTypeReference("common", "String"))),
            "Directory": sfunction(externalTypeReference("typelibrary", "Node", { "Annotation": glossaryParameter("Annotation") }), data(externalTypeReference("typelibrary", "Directory", { "Annotation": glossaryParameter("Annotation") }))),
            "File": sfunction(externalTypeReference("typelibrary", "Node", { "Annotation": glossaryParameter("Annotation") }), data(externalTypeReference("typelibrary", "Block", { "Annotation": glossaryParameter("Annotation") }))),
            "Template": sfunction(externalTypeReference("typelibrary", "Node", { "Annotation": glossaryParameter("Annotation") }), data(externalTypeReference("typelibrary", "Block", { "Annotation": glossaryParameter("Annotation") }))),
            "AllowedGenerated": sfunction(externalTypeReference("typelibrary", "Node", { "Annotation": glossaryParameter("Annotation") }), data(externalTypeReference("common", "Null"))),
            "AllowedManual": sfunction(externalTypeReference("typelibrary", "Node", { "Annotation": glossaryParameter("Annotation") }), data(externalTypeReference("common", "Null"))),
        }),
    },
}