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
        "fountainpen": imp({ "Annotation": glossaryParameter("Annotation")}),
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
            "SerializeDirectory": procedure(data(externalTypeReference("fountainpen", "Directory")), sExternalInterfaceReference("main", "Directory")),
            "SerializeBlock": procedure(data(externalTypeReference("fountainpen", "Block")), sExternalInterfaceReference("main", "Block")),
            "Snippet": sfunction(externalTypeReference("fountainpen", "LineElement"), data(externalTypeReference("common", "String"))),
            "Indent": sfunction(externalTypeReference("fountainpen", "LineElement"), data(externalTypeReference("fountainpen", "Block"))),
            "NestedLine": sfunction(externalTypeReference("fountainpen", "BlockElement"), data(externalTypeReference("fountainpen", "NestedLine"))),
            "Line": sfunction(externalTypeReference("fountainpen", "BlockElement"), data(externalTypeReference("common", "String"))),
            "Directory": sfunction(externalTypeReference("fountainpen", "Node"), data(externalTypeReference("fountainpen", "Directory"))),
            "File": sfunction(externalTypeReference("fountainpen", "Node"), data(externalTypeReference("fountainpen", "Block"))),
            "Template": sfunction(externalTypeReference("fountainpen", "Node"), data(externalTypeReference("fountainpen", "Block"))),
            "AllowedGenerated": sfunction(externalTypeReference("fountainpen", "Node"), data(externalTypeReference("common", "Null"))),
            "AllowedManual": sfunction(externalTypeReference("fountainpen", "Node"), data(externalTypeReference("common", "Null"))),
        }),
    },
}