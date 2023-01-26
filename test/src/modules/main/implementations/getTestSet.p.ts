
import * as ps from 'pareto-core-state'
import * as pl from 'pareto-core-lib'

import * as mtest from "lib-pareto-test"

import * as api from "../api"

import * as pub from "../../../../../pub"
import * as mtostring from "res-pareto-tostring"

export const $$: api.CgetTestSet = () => {
    const builder = ps.createUnsafeDictionaryBuilder<mtest.TTestElement>()
    function doTest(
        $: {
            readonly "name": string,
            readonly "trim": boolean,
            readonly "expected": string,
        },
        $c: ($: pub.IBlock) => void,
    ): void {
        let out = ps.createArrayBuilder<string>()

        pub.$a.fountainPen(
            null,
            ($i) => {
                $c($i)
            },
            ($) => {
                out.push($)
            },
        )
        builder.add($.name, {
            type: ['test', {
                type: ['short string', {
                    actual: mtostring.$a.getArrayAsString({
                        array: out.getArray(),
                        separator: ""
                    }),
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

    return pl.asyncValue({
        elements: builder.getDictionary()
    })
}