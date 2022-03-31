/* tslint:disable */
/* eslint-disable */
/**
 * PK.PHCalc.OutsourcingDummy
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
    MaterialDTO,
    MaterialDTOFromJSON,
    MaterialDTOToJSON,
} from '../models';

export interface MaterialUpdateRequest {
    model: Array<MaterialDTO>;
}

/**
 * 
 */
export class MaterialApi extends runtime.BaseAPI {

    /**
     */
    async materialGetRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<Array<MaterialDTO>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/material`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MaterialDTOFromJSON));
    }

    /**
     */
    async materialGet(initOverrides?: RequestInit): Promise<Array<MaterialDTO>> {
        const response = await this.materialGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async materialUpdateRaw(requestParameters: MaterialUpdateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.model === null || requestParameters.model === undefined) {
            throw new runtime.RequiredError('model','Required parameter requestParameters.model was null or undefined when calling materialUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/material`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.model.map(MaterialDTOToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async materialUpdate(requestParameters: MaterialUpdateRequest, initOverrides?: RequestInit): Promise<object> {
        const response = await this.materialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
