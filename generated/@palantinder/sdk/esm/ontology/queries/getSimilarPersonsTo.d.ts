import type { QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Person } from '../objects/Person.js';
export declare namespace getSimilarPersonsTo {
    interface Signature {
        (query: getSimilarPersonsTo.Parameters): Promise<getSimilarPersonsTo.ReturnType>;
    }
    interface Parameters {
        /**
         * (no ontology metadata)
         */
        readonly userID: QueryParam.PrimitiveType<'string'>;
    }
    type ReturnType = Array<QueryResult.ObjectType<Person>>;
}
export interface getSimilarPersonsTo extends QueryDefinition<getSimilarPersonsTo.Signature>, VersionBound<$ExpectedClientVersion> {
    __DefinitionMetadata?: {
        apiName: 'getSimilarPersonsTo';
        displayName: 'getSimilarPersonsTo';
        rid: 'ri.function-registry.main.function.75d4b6c2-5a27-4872-b941-556332233c51';
        type: 'query';
        version: '1.6.0';
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
        signature: getSimilarPersonsTo.Signature;
    };
    apiName: 'getSimilarPersonsTo';
    type: 'query';
    version: '1.6.0';
    osdkMetadata: typeof $osdkMetadata;
}
export declare const getSimilarPersonsTo: getSimilarPersonsTo;
