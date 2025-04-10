import type { QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { Person } from '../objects/Person.js';
export declare namespace getPerson {
    interface Signature {
        (query: getPerson.Parameters): Promise<getPerson.ReturnType>;
    }
    interface Parameters {
        /**
         * (no ontology metadata)
         */
        readonly userID: QueryParam.PrimitiveType<'string'>;
    }
    type ReturnType = QueryResult.ObjectType<Person>;
}
export interface getPerson extends QueryDefinition<getPerson.Signature>, VersionBound<$ExpectedClientVersion> {
    __DefinitionMetadata?: {
        apiName: 'getPerson';
        displayName: 'getPerson';
        rid: 'ri.function-registry.main.function.f0d1e747-460b-49c4-806a-83991259b0cc';
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
            nullable: false;
            object: 'Person';
            type: 'object';
            __OsdkTargetType?: Person;
        };
        signature: getPerson.Signature;
    };
    apiName: 'getPerson';
    type: 'query';
    version: '1.2.1';
    osdkMetadata: typeof $osdkMetadata;
}
export declare const getPerson: getPerson;
