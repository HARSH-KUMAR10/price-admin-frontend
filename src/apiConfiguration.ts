import { Configuration } from "./api";

export function getApiConfiguration(): Configuration {
    return new Configuration({
        basePath: 'http://price-admin.und-fertig.de/',
    });
}