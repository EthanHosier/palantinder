import type { QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Person } from '../objects/Person.js';
export declare namespace getPersonFromName {
    interface Signature {
        (query: getPersonFromName.Parameters): Promise<getPersonFromName.ReturnType>;
    }
    interface Parameters {
        /**
         * (no ontology metadata)
         */
        readonly name: QueryParam.PrimitiveType<'string'>;
    }
    type ReturnType = QueryResult.ObjectType<Person>;
}
export interface getPersonFromName extends QueryDefinition<getPersonFromName.Signature>, VersionBound<$ExpectedClientVersion> {
    __DefinitionMetadata?: {
        apiName: 'getPersonFromName';
        displayName: 'getPersonFromName';
        rid: 'ri.function-registry.main.function.0a7479f5-63b5-4b60-9da0-6b7c35627b3f';
        type: 'query';
        version: '1.6.0';
        parameters: {
            /**
             * (no ontology metadata)
             */
            name: {
                nullable: false;
                type: 'string';
            };
        };
        output: {
            nullable: false;
            object: 'Person';
            type: 'object';
            __OsdkTargetType?: Person;
        };
        signature: getPersonFromName.Signature;
    };
    apiName: 'getPersonFromName';
    type: 'query';
    version: '1.6.0';
    osdkMetadata: typeof $osdkMetadata;
}
export declare const getPersonFromName: getPersonFromName;
