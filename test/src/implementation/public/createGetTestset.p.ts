
import * as pm from "pareto-core-state"
import * as pl from "pareto-core-lib"

import * as test from "lib-pareto-test"

import * as api from "../../interface"

import * as pub from "../../../../pub"

export const createGetTestset: api.FCreateGetTestset = ($, $d) => {
    return () => {
        const builder = pm.createUnsafeDictionaryBuilder<test.TTestElement>()
        function doTest(
            $: {
                readonly "name": string,
                readonly "trim": boolean,
                readonly "expected": string,
            },
            $c: ($: pub.IBlock) => void,
        ): void {
            let out = pm.createArrayBuilder<string>()

            pub.$a.createFountainPen(
                {}
            )(
                ($) => {
                    out.push($)
                },
                ($i) => {
                    $c($i)
                },
            )
            builder.add($.name, {
                type: ["test", {
                    type: ["short string", {
                        actual: $d.getArrayAsString({
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
                $.line(($) => {
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
                $.line(($) => {
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
                $.line(($) => {
                    $.snippet(`BEFORE`)
                    $.indent(($) => {
                        $.line(($) => {
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
        //         $.line({}, ($) => {
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
                $.line(($) => {
                    $.snippet(`line ending with spaces     `)
                })
            },
        )

        function createTest(name: string, actual: string, expected: string) {
            builder.add(name, {
                type: ["test", {
                    type: ["short string", {
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
}