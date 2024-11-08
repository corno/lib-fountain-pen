import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    array,
    resolvedSiblingComponent,
    dictionary,
    globalType,
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
    'global types': d({
        "Block": globalType({}, array(resolvedSiblingComponent("BlockElement", {}))),
        "BlockElement": globalType({}, taggedUnion({
            "line": option(terminal("text")),
            "nestedLine": option(resolvedSiblingComponent("NestedLine", {})),
        })),
        "LineElement": globalType({}, taggedUnion({
            "snippet": option(terminal("text")),
            "indent": option(resolvedSiblingComponent("Block", {})),
        })),
        "NestedLine": globalType({}, array(resolvedSiblingComponent("LineElement", {}))),
        "Directory": globalType({}, dictionary(resolvedSiblingComponent("Node", {}))),
        "Node": globalType({}, taggedUnion({
            "directory": option(resolvedSiblingComponent("Directory", {})),
            "file": option(resolvedSiblingComponent("Block", {})),
            "allowedGenerated": option(group({})),
            /**
             * 
             */
            "allowedManual": option(group({})),
            "template": option(resolvedSiblingComponent("Block", {})),
        })),
    }),
}