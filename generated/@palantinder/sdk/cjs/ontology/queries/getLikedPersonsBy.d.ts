import type { QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Person } from '../objects/Person.js';
export declare namespace getLikedPersonsBy {
    interface Signature {
        (query: getLikedPersonsBy.Parameters): Promise<getLikedPersonsBy.ReturnType>;
    }
    interface Parameters {
        /**
         * (no ontology metadata)
         */
        readonly userID: QueryParam.PrimitiveType<'string'>;
    }
    type ReturnType = Array<QueryResult.ObjectType<Person>>;
}
export interface getLikedPersonsBy extends QueryDefinition<getLikedPersonsBy.Signature>, VersionBound<$ExpectedClientVersion> {
    __DefinitionMetadata?: {
        apiName: 'getLikedPersonsBy';
        displayName: 'getLikedPersonsBy';
        rid: 'ri.function-registry.main.function.8b9e0433-8ea7-4b8d-b9f8-db12338ee6d4';
        type: 'query';
        version: '1.2.1';
        parameters: {
            /**
             * (no ontology metadata)
             */
            userID: {
                nullable: false;
                type: 'string';
            };
        };
        output: {
            multiplicity: true;
            nullable: false;
            object: 'Person';
            type: 'object';
        };
        signature: getLikedPersonsBy.Signature;
    };
    apiName: 'getLikedPersonsBy';
    type: 'query';
    version: '1.2.1';
    osdkMetadata: typeof $osdkMetadata;
}
export declare const getLikedPersonsBy: getLikedPersonsBy;
