// Returns a map of the attribtues of the first node matching the passed selector
export function getChildAttrs(doc: Document, selector: string): Map<string,string> {
    const child = doc.querySelector(selector);
    const ret = new Map<string, string>();
    if (child) {
        Array.from(child.attributes).forEach(attr => ret.set(attr.name, attr.value));
    }
    return ret;
}
