import type { QueryDefinition, QueryParam, QueryResult, VersionBound } from '@osdk/client';
import type { $ExpectedClientVersion } from '../../OntologyMetadata.js';
import { $osdkMetadata } from '../../OntologyMetadata.js';
export declare namespace generateConversationTopics {
    interface Signature {
        (query: generateConversationTopics.Parameters): Promise<generateConversationTopics.ReturnType>;
    }
    interface Parameters {
        /**
         * (no ontology metadata)
         */
        readonly personFromId: QueryParam.PrimitiveType<'string'>;
        /**
         * (no ontology metadata)
         */
        readonly personToId: QueryParam.PrimitiveType<'string'>;
    }
    type ReturnType = QueryResult.PrimitiveType<'string'>;
}
export interface generateConversationTopics extends QueryDefinition<generateConversationTopics.Signature>, VersionBound<$ExpectedClientVersion> {
    __DefinitionMetadata?: {
        apiName: 'generateConversationTopics';
        displayName: 'generateConversationTopics';
        rid: 'ri.function-registry.main.function.f44cc600-7f52-4ff9-b616-6b681bf9d5f4';
        type: 'query';
        version: '1.6.0';
        parameters: {
            /**
             * (no ontology metadata)
             */
            personFromId: {
                nullable: false;
                type: 'string';
            };
            /**
             * (no ontology metadata)
             */
            personToId: {
                nullable: false;
                type: 'string';
            };
        };
        output: {
            nullable: false;
            type: 'string';
        };
        signature: generateConversationTopics.Signature;
    };
    apiName: 'generateConversationTopics';
    type: 'query';
    version: '1.6.0';
    osdkMetadata: typeof $osdkMetadata;
}
export declare const generateConversationTopics: generateConversationTopics;
