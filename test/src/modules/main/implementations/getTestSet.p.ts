
import * as ps from 'pareto-core-state'
import * as pa from 'pareto-core-async'
import * as pt from 'pareto-core-types'

import * as gtest from "lib-pareto-test"
import * as gpub from "../../../../../pub"
import * as gtostring from "res-pareto-tostring"

function buildArray<T>($c: (push: (value: T) => void) => void): pt.Array<T> {
    const temp = ps.createArrayBuilder<T>()
    $c((value) => {
        temp.push(value)
    })
    return temp.getArray()
}

import { CgetTestSet } from "../api"

export const $$:CgetTestSet = () => {
    const builder = ps.createUnsafeDictionaryBuilder<gtest.T.TestElement>()
    function doTest(
        $: {
            readonly "name": string,
            readonly "trim": boolean,
            readonly "expected": string,
        },
        $c: ($: gpub.IBlock) => void,
    ): void {

        builder.add($.name, {
            type: ['test', {
                type: ['short string', {
                    actual: gtostring.$a.getArrayAsString({
                        'separator': "",
                        'maximum': [false],
                    }, {})(buildArray((push) => {

                        gpub.$a.fountainPen(
                            null,
                            ($i) => {
                                $c($i)
                            },
                            ($) => {
                                push($)
                            },
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