import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    array,
    component,
    dictionary,
    globalTypeDeclaration,
    globalTypeDefinition,
    group, option, prop, r,
    taggedUnion,
    terminal
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d

export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': d({}),
    'labels': {
        'atom types': d({
            "text": null
        }),
    },
    'global types': {
        'declarations': d({
            "Block": globalTypeDeclaration({}),
            "BlockElement": globalTypeDeclaration({}),
            "LineElement": globalTypeDeclaration({}),
            "NestedLine": globalTypeDeclaration({}),
            "Directory": globalTypeDeclaration({}),
            "Node": globalTypeDeclaration({}),
        }),
        'definitions': d({
            "Block": globalTypeDefinition(array(component("BlockElement", {}))),
            "BlockElement": globalTypeDefinition(taggedUnion({
                "line": option(terminal("text")),
                "nestedLine": option(component("NestedLine", {})),
            })),
            "LineElement": globalTypeDefinition(taggedUnion({
                "snippet": option(terminal("text")),
                "indent": option(component("Block", {})),
            })),
            "NestedLine": globalTypeDefinition(array(component("LineElement", {}))),
            "Directory": globalTypeDefinition(dictionary(component("Node", {}))),
            "Node": globalTypeDefinition(taggedUnion({
                "directory": option(component("Directory", {})),
                "file": option(component("Block", {})),
                "allowedGenerated": option(group({})),
                "allowedManual": option(group({})),
                "template": option(component("Block", {})),
            })),
        }),
    }
}