interface WebfontList {
    kind: string;
    items: WebfontFamily[];
}

interface WebfontFamily {
    category?: string | undefined;
    kind: string;
    family: string;
    subsets: string[];
    variants: string[];
    version: string;
    lastModified: string;
    files: { [variant: string]: string };
}

import _fonts from "./fonts.json"

const fonts: WebfontList = <WebfontList>_fonts
const items = fonts.items

export function findFamily(family: string) : WebfontFamily[] {
  return items.reduce((previous: WebfontFamily[], current: WebfontFamily) => {
    let result = current.family == family ? [...previous, current] : previous
    return result
  }, [])
}

export function nameIncludes(includes: string) : WebfontFamily[] {
  return items.reduce((previous: WebfontFamily[], current: WebfontFamily) => {
    let result = current.family.includes(includes) ? [...previous, current] : previous
    return result
  }, [])
}
