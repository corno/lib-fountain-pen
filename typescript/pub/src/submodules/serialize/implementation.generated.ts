import { API } from "./api.generated"
import { $$ as iallowedGenerated } from "./implementations/allowedGenerated.s.f"
import { $$ as iallowedManual } from "./implementations/allowedManual.s.f"
import { $$ as ifile } from "./implementations/file.s.f"
import { $$ as iindent } from "./implementations/indent.s.f"
import { $$ as iline } from "./implementations/line.s.f"
import { $$ as inestedLine } from "./implementations/nestedLine.s.f"
import { $$ as iserializeBock } from "./implementations/serializeBock.s.p"
import { $$ as iserializeDirectory } from "./implementations/serializeDirectory.s.p"
import { $$ as isnippet } from "./implementations/snippet.s.f"
import { $$ as itemplate } from "./implementations/template.s.f"

export const $api: API = {
    'allowedGenerated': iallowedGenerated,
    'allowedManual': iallowedManual,
    'file': ifile,
    'indent': iindent,
    'line': iline,
    'nestedLine': inestedLine,
    'serializeBock': iserializeBock,
    'serializeDirectory': iserializeDirectory,
    'snippet': isnippet,
    'template': itemplate,
}