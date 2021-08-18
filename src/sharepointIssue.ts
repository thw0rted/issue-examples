import { Web } from "@pnp/sp/webs";

export async function checkWeb(url: string) {
    const web = Web(url).configure({
        credentials: "include",
        mode: "cors",
        headers: {
            Accept: "application/json;odata=verbose",
        },
    });
    return web.getParentWeb();
}
