import * as pr from 'pareto-core-raw'
import {
    reference,
    string,
    typeReference,
    interfaceReference,
    method, dictionary, group, member, taggedUnion, types, func, data, type, inf, parametrizedInterfaceReference, glossaryParameter
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import { algorithm, constructor, definitionReference, } from "lib-pareto-typescript-project/dist/submodules/moduleDefinition/shorthands.p"

import * as mmoduleDefinition from "lib-pareto-typescript-project/dist/submodules/moduleDefinition"

const d = pr.wrapRawDictionary

export const $: mmoduleDefinition.T.ModuleDefinition = {
    'glossary': {
        'imports': d({
            "common": "glo-pareto-common",
            "h": "glo-astn-handlers",
        }),
        'functions': d({
            "CreateDummyRequiredValueHandler": func(typeReference("common", "Null"), null, null, inf(parametrizedInterfaceReference("h", { "Annotation": typeReference("Annotation") }, "RequiredValueHandler"))),
        }),
        'parameters': d({
            "Annotation": {},
        }),
        'types': d({
            "Annotation": type(glossaryParameter("Annotation")),
        }),
        'interfaces': d({}),
    },
    'api': {
        'imports': d({
        }),
        'algorithms': d({
            "createDummyRequiredValueHandler": algorithm(definitionReference("CreateDummyRequiredValueHandler"))
        })
    },
}