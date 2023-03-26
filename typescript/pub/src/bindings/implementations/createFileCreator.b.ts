import * as g_fs from "res-pareto-filesystem"

// import { $$ as fp } from "./fountainPen.p"

// import { $a } from "../../main"

// import { A } from "../api.generated"

// export const $$: A.createFileCreator = ($se) => {

//     return ($c, $i) => {
//         $c(($, $c) => {
//             $a.createFileCreator(
//                 {
//                     'pipeFountainPen': fp,
//                 },
//             )(
//                 ($b) => {
//                     $b($, $c)
//                 },
//                 ($, $c) => {
//                     const fw = g_fs.$r.createFileWriter(
//                     )({
//                         'onWriteFileError': $se.onWriteFileError,
//                     })({
//                         'path': $,
//                         'createContainingDirectories': true,
//                     })
//                     $c(($) => {
//                         fw.data($)
//                     })
//                     fw.end()
//                 },
//             )
//         })
//     }
// }