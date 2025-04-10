import type { PropertyDef as $PropertyDef } from '@osdk/client';
import { $osdkMetadata } from '../../OntologyMetadata.js';
import type { ObjectTypeDefinition as $ObjectTypeDefinition } from '@osdk/client';
import type { ObjectSet as $ObjectSet, Osdk as $Osdk, PropertyValueWireToClient as $PropType } from '@osdk/client';
export declare namespace Person {
    type PropertyKeys = 'id' | 'role' | 'startDate' | 'name' | 'aboutMe' | 'location' | 'affinityGroups' | 'lead' | 'concatStrings' | 'interests' | 'slackLink' | 'imageUrl';
    type Links = {};
    interface Props {
        readonly aboutMe: $PropType['string'] | undefined;
        readonly affinityGroups: $PropType['string'] | undefined;
        readonly concatStrings: $PropType['string'] | undefined;
        readonly id: $PropType['string'];
        readonly imageUrl: $PropType['string'] | undefined;
        readonly interests: $PropType['string'] | undefined;
        readonly lead: $PropType['string'] | undefined;
        readonly location: $PropType['string'] | undefined;
        readonly name: $PropType['string'] | undefined;
        readonly role: $PropType['string'] | undefined;
        readonly slackLink: $PropType['string'] | undefined;
        readonly startDate: $PropType['string'] | undefined;
    }
    type StrictProps = Props;
    interface ObjectSet extends $ObjectSet<Person, Person.ObjectSet> {
    }
    type OsdkInstance<OPTIONS extends never | '$rid' = never, K extends keyof Person.Props = keyof Person.Props> = $Osdk.Instance<Person, OPTIONS, K>;
    /** @deprecated use OsdkInstance */
    type OsdkObject<OPTIONS extends never | '$rid' = never, K extends keyof Person.Props = keyof Person.Props> = OsdkInstance<OPTIONS, K>;
}
export interface Person extends $ObjectTypeDefinition {
    osdkMetadata: typeof $osdkMetadata;
    type: 'object';
    apiName: 'Person';
    __DefinitionMetadata?: {
        objectSet: Person.ObjectSet;
        props: Person.Props;
        linksType: Person.Links;
        strictProps: Person.StrictProps;
        apiName: 'Person';
        description: '';
        displayName: 'Person';
        icon: {
            type: 'blueprint';
            color: '#4C90F0';
            name: 'cube';
        };
        implements: [];
        interfaceMap: {};
        inverseInterfaceMap: {};
        links: {};
        pluralDisplayName: 'People';
        primaryKeyApiName: 'id';
        primaryKeyType: 'string';
        properties: {
            /**
             *   display name: 'About Me'
             */
            aboutMe: $PropertyDef<'string', 'nullable', 'single'>;
            /**
             *   display name: 'Affinity Groups'
             */
            affinityGroups: $PropertyDef<'string', 'nullable', 'single'>;
            /**
             *   display name: 'Concat Strings'
             */
            concatStrings: $PropertyDef<'string', 'nullable', 'single'>;
            /**
             *   display name: 'Id'
             */
            id: $PropertyDef<'string', 'non-nullable', 'single'>;
            /**
             *   display name: 'Image Url'
             */
            imageUrl: $PropertyDef<'string', 'nullable', 'single'>;
            /**
             *   display name: 'Interests'
             */
            interests: $PropertyDef<'string', 'nullable', 'single'>;
            /**
             *   display name: 'Lead'
             */
            lead: $PropertyDef<'string', 'nullable', 'single'>;
            /**
             *   display name: 'Location'
             */
            location: $PropertyDef<'string', 'nullable', 'single'>;
            /**
             *   display name: 'Name'
             */
            name: $PropertyDef<'string', 'nullable', 'single'>;
            /**
             *   display name: 'Role'
             */
            role: $PropertyDef<'string', 'nullable', 'single'>;
            /**
             *   display name: 'Slack Link'
             */
            slackLink: $PropertyDef<'string', 'nullable', 'single'>;
            /**
             *   display name: 'Start Date'
             */
            startDate: $PropertyDef<'string', 'nullable', 'single'>;
        };
        rid: 'ri.ontology.main.object-type.e67e49a6-b445-41ce-9970-6c6eead1973c';
        status: 'EXPERIMENTAL';
        titleProperty: 'name';
        type: 'object';
        visibility: 'NORMAL';
    };
}
export declare const Person: Person;
