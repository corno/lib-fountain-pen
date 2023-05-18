import * as pd from 'pareto-core-data'

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d
const a = pd.a

export const $: g_glossary.T.Glossary<null> = {
    'imports': d({}),
    'glossary parameters': d({
        "Annotation": null,
    }),
    'root': {
        'types': d({
            "Block": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['array', <g_glossary.T.Type<null>>['reference', ['type', {
                    'context': ['local', null],
                    'typeXX': "BlockElement",
                    'tailXX': a([]),
                    'type arguments': d({}),
                }]]]
            },
            "BlockElement": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                    "line": <g_glossary.T.Type<null>>['string', null],
                    "nestedLine": <g_glossary.T.Type<null>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "NestedLine",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                })]
            },
            "Directory": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['dictionary', <g_glossary.T.Type<null>>['reference', ['type', {
                    'context': ['local', null],
                    'typeXX': "Node",
                    'tailXX': a([]),
                    'type arguments': d({}),
                }]]]
            },
            "LineElement": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                    "indent": <g_glossary.T.Type<null>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Block",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "snippet": <g_glossary.T.Type<null>>['string', null],
                })]
            },
            "NestedLine": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['array', <g_glossary.T.Type<null>>['reference', ['type', {
                    'context': ['local', null],
                    'typeXX': "LineElement",
                    'tailXX': a([]),
                    'type arguments': d({}),
                }]]]
            },
            "Node": {
                'parameters': d({}),
                'type': <g_glossary.T.Type<null>>['taggedUnion', d({
                    "allowedGenerated": <g_glossary.T.Type<null>>['group', d({})],
                    "allowedManual": <g_glossary.T.Type<null>>['group', d({})],
                    "directory": <g_glossary.T.Type<null>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Directory",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "file": <g_glossary.T.Type<null>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Block",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                    "template": <g_glossary.T.Type<null>>['reference', ['type', {
                        'context': ['local', null],
                        'typeXX': "Block",
                        'tailXX': a([]),
                        'type arguments': d({}),
                    }]],
                })]
            },
        }),
        'namespaces': d({
            "Block": {
                'types': d({}),
                'namespaces': d({
                    "A": {
                        'types': d({}),
                        'namespaces': d({}),
                    },
                }),
            },
            "BlockElement": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "line": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "nestedLine": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "Directory": {
                'types': d({}),
                'namespaces': d({
                    "D": {
                        'types': d({}),
                        'namespaces': d({}),
                    },
                }),
            },
            "LineElement": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "indent": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "snippet": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
            "NestedLine": {
                'types': d({}),
                'namespaces': d({
                    "A": {
                        'types': d({}),
                        'namespaces': d({}),
                    },
                }),
            },
            "Node": {
                'types': d({}),
                'namespaces': d({
                    "TU": {
                        'types': d({}),
                        'namespaces': d({
                            "allowedGenerated": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "allowedManual": {
                                'types': d({}),
                                'namespaces': d({
                                    "G": {
                                        'types': d({}),
                                        'namespaces': d({}),
                                    },
                                }),
                            },
                            "directory": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "file": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                            "template": {
                                'types': d({}),
                                'namespaces': d({}),
                            },
                        }),
                    },
                }),
            },
        }),
    },
    'asynchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}