//import * as pr from "pareto-runtime"
import * as fp from "../../../../pub"
import { CSimpleExample } from "../../interface"

export function simpleExample(
    processBlock: fp.CProcessBlock,
): CSimpleExample {
    return ($i) => {
        processBlock(
            $i,
            {
                'indentation': `    `, //usually 4 spaces or a tab character
                'newline': `\r\n`, //usually `\r\n` or `\n`,
                'trimLines': true, //removes whitespace at the end of the line
            },
            ($i) => {
                $i.line({}, ($i) => {//the fp.line function concatenates all content on one line, except for indented content
                    $i.snippet(`Foo`)
                    $i.snippet(`Bar`)//this will be concatenated to the previous snippet
                    $i.indent({}, ($i) => {//a line can be indented, if this is the case, the line continues after the indentation is finished
                        $i.line({}, ($i) => {
                            $i.snippet(`indented`)
                        })
                    })

                    $i.snippet(`function myFunction (`)
                    $i.indent({}, ($i) => {
                        $i.line({}, ($i) => {
                            $i.snippet(`str: string,`)
                        })
                    })
                    $i.snippet(`) {`)
                    $i.indent({}, ($i) => {
                        $i.line({}, ($i) => {
                            $i.snippet(`console.log(str)`)
                        })
                    })
                    $i.snippet(`}`)
                })


                /*
                output:
                FooBar
                    indented
                function myFunction (
                    str: string,
                ) {
                    console.log(str)
                }
                */
            }

        )
    }

}

// simpleExample(
//     fp.createContext(
//         pr.trimRight,
//     )
// )