import * as api from "../../../../pub"
import { CRunTests } from "../../interface"


export function runTests(
    fountainPen: api.CProcessBlock,
): CRunTests {
    return ($i) => {
        $i.subset(
            `fountain pen`,
            ($i) => {
                function doTest(
                    $: {
                        readonly "name": string,
                        readonly "trim": boolean,
                        readonly "expected": string,
                    },
                    $c: ($: api.IBlock) => void,
                ): void {
                    let out = ``

                    fountainPen(
                        {
                            'onData': ($) => {
                                out += $
                            },
                            'onEnd': () => {
                                $i.testString({
                                    'testName': $.name,
                                    'expected': $.expected,
                                    'actual': out,
                                })
                            },
                        },
                        {
                            'newline': `\r\n`,
                            'indentation': `    `,
                            'trimLines': $.trim,
                        },
                        ($) => {
                            $c($)
                        }
                    )
                }
                doTest(
                    {
                        'name': `block behaviour`,
                        'trim': true,
                        'expected': `A`,
                    },
                    ($) => {
                        $.line({}, ($) => {
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
                        $.line({}, ($) => {
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
                        $.line({}, ($) => {
                            $.snippet(`BEFORE`)
                            $.indent({}, ($) => {
                                $.line({}, ($) => {
                                    $.snippet(`B`)
                                })
                            })
                            $.snippet(`AFTER`)
                        })
                    },
                )
                doTest(
                    {
                        'name': `trimming`,
                        'trim': true,
                        'expected': `line ending with spaces`,
                    },
                    ($) => {
                        $.line({}, ($) => {
                            $.snippet(`line ending with spaces     `)
                        })
                    },
                )
                doTest(
                    {
                        'name': `non-trimming`,
                        'trim': false,
                        'expected': `line ending with spaces     `,
                    },
                    ($) => {
                        $.line({}, ($) => {
                            $.snippet(`line ending with spaces     `)
                        })
                    },
                )
            }
        )
    }
}