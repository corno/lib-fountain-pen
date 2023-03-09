
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'

import * as gtest from "lib-pareto-test"
import * as gpub from "../../../../../pub"

import * as gtostring from "res-pareto-tostring"
import * as gbuild from "res-pareto-build"

import { getTestSet } from "../api.generated"

export const $$:getTestSet = () => {
    const builder = ps.createUnsafeDictionaryBuilder<gtest.T.TestElement>()
    function doTest(
        $: {
            readonly "name": string,
            readonly "trim": boolean,
            readonly "expected": string,
        },
        $c: ($: gpub.B.Block) => void,
    ): void {

        builder.add($.name, {
            type: ['test', {
                type: ['short string', {
                    actual: gtostring.$r.getArrayAsString({
                        'separator': "",
                        'maximum': [false],
                    }, {})(gbuild.$r.buildArray(null, ($i) => {
                        gpub.$a.fountainPen(
                            null,
                            ($i) => {
                                $c($i)
                            },
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