import * as pd from 'pareto-core-data'

import * as g_liana from "lib-liana/dist/submodules/liana"
import {
    array,
    component,
    dictionary,
    globalType,
    group, option, prop, r,
    taggedUnion,
    terminal
} from "lib-liana/dist/submodules/liana/shorthands"

const d = pd.d

export const $: g_liana.T.Type__Library<pd.SourceLocation> = {
    'imports': d({}),
    'terminal types': d({
        "text": null
    }),
    'global types': d({
        "Block": globalType({}, array(component("BlockElement", {}))),
        "BlockElement": globalType({}, taggedUnion({
            "line": option(terminal("text")),
            "nestedLine": option(component("NestedLine", {})),
        })),
        "LineElement": globalType({}, taggedUnion({
            "snippet": option(terminal("text")),
            "indent": option(component("Block", {})),
        })),
        "NestedLine": globalType({}, array(component("LineElement", {}))),
        "Directory": globalType({}, dictionary(component("Node", {}))),
        "Node": globalType({}, taggedUnion({
            "directory": option(component("Directory", {})),
            "file": option(component("Block", {})),
            "allowedGenerated": option(group({})),
            "allowedManual": option(group({})),
            "template": option(component("Block", {})),
        })),
    }),
}