import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"
import { data, externalTypeReference, glossaryParameter, imp, procedure, sExternalInterfaceReference, sInterfaceReference, sfunction } from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

const d = pd.d
const a = pd.a

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'parameters': d({
        "Annotation": null,
    }),
    'imports': d({
        "typelibrary": imp({ "Annotation": glossaryParameter("Annotation")}),
        "main": imp({}),
        "common": imp({}),
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
            "SerializeDirectory": procedure(data(externalTypeReference("typelibrary", "Directory")), sExternalInterfaceReference("main", "Directory")),
            "SerializeBlock": procedure(data(externalTypeReference("typelibrary", "Block")), sExternalInterfaceReference("main", "Block")),
            "Snippet": sfunction(externalTypeReference("typelibrary", "LineElement"), data(externalTypeReference("common", "String"))),
            "Indent": sfunction(externalTypeReference("typelibrary", "LineElement"), data(externalTypeReference("typelibrary", "Block"))),
            "NestedLine": sfunction(externalTypeReference("typelibrary", "BlockElement"), data(externalTypeReference("typelibrary", "NestedLine"))),
            "Line": sfunction(externalTypeReference("typelibrary", "BlockElement"), data(externalTypeReference("common", "String"))),
            "Directory": sfunction(externalTypeReference("typelibrary", "Node"), data(externalTypeReference("typelibrary", "Directory"))),
            "File": sfunction(externalTypeReference("typelibrary", "Node"), data(externalTypeReference("typelibrary", "Block"))),
            "Template": sfunction(externalTypeReference("typelibrary", "Node"), data(externalTypeReference("typelibrary", "Block"))),
            "AllowedGenerated": sfunction(externalTypeReference("typelibrary", "Node"), data(externalTypeReference("common", "Null"))),
            "AllowedManual": sfunction(externalTypeReference("typelibrary", "Node"), data(externalTypeReference("common", "Null"))),
        }),
    },
}