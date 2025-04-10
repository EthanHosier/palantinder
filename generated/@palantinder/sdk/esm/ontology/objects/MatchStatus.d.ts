import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { ObjectTypeDefinition as $ObjectTypeDefinition } from '@osdk/client';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/client';
export declare namespace MatchStatus {
    type PropertyKeys = 'id' | 'actionStatus' | 'personFrom' | 'concatStrings' | 'personTo';
    type Links = {};
    interface Props {
        readonly actionStatus: $PropType['boolean'] | undefined;
        readonly concatStrings: $PropType['string'] | undefined;
        readonly id: $PropType['string'];
        readonly personFrom: $PropType['string'] | undefined;
        readonly personTo: $PropType['string'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends $ObjectSet<MatchStatus, MatchStatus.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof MatchStatus.Props = keyof MatchStatus.Props> = $Osdk.Instance<MatchStatus, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof MatchStatus.Props = keyof MatchStatus.Props> = OsdkInstance<OPTIONS, K>;
}
export interface MatchStatus extends $ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'MatchStatus';
    __DefinitionMetadata?: {
        objectSet: MatchStatus.ObjectSet;
        props: MatchStatus.Props;
        linksType: MatchStatus.Links;
        strictProps: MatchStatus.StrictProps;
        apiName: 'MatchStatus';
        description: '';
        displayName: 'Match Status';
        icon: {
            type: 'blueprint';
            color: '#4C90F0';
            name: 'cube';
        };
        implements: [];
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {};
        pluralDisplayName: 'Match Statuses';
        primaryKeyApiName: 'id';
        primaryKeyType: 'string';
        properties: {
            /**
             *   display name: 'Action Status'
             */
            actionStatus: $PropertyDef<'boolean', 'nullable', 'single'>;
            /**
             *   display name: 'Concat Strings'
             */
            concatStrings: $PropertyDef<'string', 'nullable', 'single'>;
            /**
             *   display name: 'Id'
             */
            id: $PropertyDef<'string', 'non-nullable', 'single'>;
            /**
             *   display name: 'Person From'
             */
            personFrom: $PropertyDef<'string', 'nullable', 'single'>;
            /**
             *   display name: 'Person To'
             */
            personTo: $PropertyDef<'string', 'nullable', 'single'>;
        };
        rid: 'ri.ontology.main.object-type.b37a80f5-8c5b-4a9a-b46d-f741d3e67f36';
        status: 'EXPERIMENTAL';
        titleProperty: 'concatStrings';
        type: 'object';
        visibility: 'NORMAL';
    };
}
export declare const MatchStatus: MatchStatus;
