import * as pub from "../../../../pub"
import { CRunTests } from "../../interface"


export function runTests(
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
                    $c: ($: pub.IBlock) => void,
                ): void {
                    let out = ``

                    pub.$.createContext(
                        {
                            'newline': `\r\n`,
                            'indentation': `    `,
                            'trimLines': $.trim,
                        },
                        ($) => {
                            $c($)
                        },
                        {
                            consumer: {
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
                            }
                        },
                        {
                            trimRight: ($) => $
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