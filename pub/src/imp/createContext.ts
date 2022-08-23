
import * as iface from "../interface"

export const createContext: iface.CreateContext = (
    $,
    $c,
    $i,
    $d,
) => {
    let isFirstLine = true
    function createSubBlock(
        currentIndentation: string,
        flush: ($: {}) => void,
        $c: ($i: iface.IBlock) => void,
    ): void {
        $c({
            'line': ($_, $i2) => {
                let currentLine: null | string = currentIndentation
                flush({})
                if (!isFirstLine) {
                    $i.consumer.onData($.newline)
                }
                isFirstLine = false
                $i2({
                    'indent': ($_, $i3) => {
                        createSubBlock(
                            currentIndentation + $.indentation,
                            () => {
                                if (currentLine !== null) {
                                    $i.consumer.onData($.trimLines ? $d.trimRight(currentLine) : currentLine)
                                    currentLine = null
                                }
                            },
                            $i3
                        )
                    },
                    'snippet': ($2) => {
                        if (currentLine !== null) {
                            currentLine += `${$2}`
                        } else {
                            $i.consumer.onData($.newline)
                            currentLine = `${currentIndentation}${$2}`
                        }
                    },
                })
                if (currentLine !== null) {
                    $i.consumer.onData($.trimLines ? $d.trimRight(currentLine) : currentLine)
                }
            },
        })
    }
    createSubBlock(
        ``,
        ($) => {
            //no flushing
        },
        $c,
    )
    $i.consumer.onEnd(null)
}
