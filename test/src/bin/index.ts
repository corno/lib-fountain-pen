
import * as pl from "pareto-core-lib"
import * as fp from "../../../pub/dist"
import * as rt from "../imp/procedures/runTests"

pl.logDebugMessage("IMPLEMENT TESTS")

// testLib.$.createTestContext(
//     {
//         numberOfFirstLine: 1,
//     },
//     {
//         callback: ($) => {
//             rt.runTests(
//                 fp.processBlock(
//                     pr.trimRight,
//                 ),
//             )(
//                 $,
//                 {}
//             )

//         },
//         onEnd: ($) => {
//             pt.init().serializeTestResult(
//                 {
//                     testResult: $.result,
//                     showSummary: true,
//                 },
//                 ($) => {
//                     // @ts-ignore: Unreachable code error
//                     console.log($)
//                 }
//             )
//             const summ = pt.summarize($.result)
//             if (summ.numberOfErrors > 0) {
//                 pr.processExit(1)
//             }
//         },

//     },
//     diff.init()
// )