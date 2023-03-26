
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'

import * as g_test from "lib-pareto-test"
import * as g_pub from "../../../../../pub"

import * as g_tostring from "res-pareto-tostring"
import * as g_build from "res-pareto-build"

import { A } from "../api.generated"

export const $$: A.getTestSet = () => {
    const builder = ps.createUnsafeDictionaryBuilder<g_test.T.TestElement>()
    function doTest(
        $: {
            readonly "name": string,
            readonly "trim": boolean,
            readonly "expected": string,
        },
        $c: ($: g_pub.SYNC.I.Block) => void,
    ): void {

        builder.add($.name, {
            type: ['test', {
                type: ['short string', {
                    actual: g_tostring.$r.getArrayAsString({
                        'separator': "",
                        'maximum': [false],
                    })(g_build.$r.buildArray()(($i) => {
                        g_pub.$b.fountainPen()(
                            $c,
                            $i,
                        )
                    })),
                    expected: $.expected
                }]
            }]
        })
    }
    doTest(
        {
            'name': `block behaviour`,
            'trim': true,
            'expected': `A`,
        },
        ($) => {
            $.nestedLine(($) => {
                $.snippet(`A`)
            })
        },
    )
    doTest(
        {
            'name': `line behaviour`,
            'trim': true,
            'expected': `XYZ`,
        },
        ($) => {
            $.nestedLine(($) => {
                $.snippet(`X`)
                $.snippet(`Y`)
                $.snippet(`Z`)
            })
        },
    )
    doTest(
        {
            'name': `indentation behaviour`,
            'trim': true,
            'expected': `BEFORE\r\n    B\r\nAFTER`,
        },
        ($) => {
            $.nestedLine(($) => {
                $.snippet(`BEFORE`)
                $.indent(($) => {
                    $.nestedLine(($) => {
                        $.snippet(`B`)
                    })
                })
                $.snippet(`AFTER`)
            })
        },
    )
    // doTest(
    //     {
    //         'name': `trimming`,
    //         'trim': true,
    //         'expected': `line ending with spaces`,
    //     },
    //     ($) => {
    //         $.nestedLine({}, ($) => {
    //             $.snippet(`line ending with spaces     `)
    //         })
    //     },
    // )
    doTest(
        {
            'name': `non-trimming`,
            'trim': false,
            'expected': `line ending with spaces     `,
        },
        ($) => {
            $.nestedLine(($) => {
                $.snippet(`line ending with spaces     `)
            })
        },
    )

    function createTest(name: string, actual: string, expected: string) {
        builder.add(name, {
            type: ['test', {
                type: ['short string', {
                    actual: actual,
                    expected: expected
                }]
            }]
        })
    }

    return pa.asyncValue({
        elements: builder.getDictionary()
    })
}