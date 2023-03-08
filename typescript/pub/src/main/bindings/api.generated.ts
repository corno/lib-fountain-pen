import * as pt from 'pareto-core-types'

import * as g_common from "glo-pareto-common"
import * as g_fs from "res-pareto-filesystem"
import * as g_this from "../glossary"
import * as g_tostring from "res-pareto-tostring"

export type createDirectory = g_this.F.CreateDirectory

export type createFile = g_this.F.CreateFile

export type API = {
    createDirectory: createDirectory
    createFile: createFile
}