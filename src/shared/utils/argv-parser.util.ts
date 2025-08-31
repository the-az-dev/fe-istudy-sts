import {isNode} from "./exec-detection.util.ts";
import * as util from "util";
import * as process from "node:process";

function getArguments(options: util.ParseArgsOptionsConfig | undefined) {
    return util.parseArgs({
        args: !isNode ? Bun.argv : process.argv,
        options,
        strict: true,
        allowPositionals: true,
    });
}

export default getArguments;