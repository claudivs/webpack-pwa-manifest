import { parseRaw } from '../../builders/icons'

export default function (utils) {
  return parseRaw(utils, utils._options.manifest.icons)
}
