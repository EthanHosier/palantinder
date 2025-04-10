import { Osdk } from "@osdk/client";
import { client } from "./osdk";
import { getLikedPersonsBy, getPersonFromName, getSimilarPersonsTo, Person } from "@palantinder/sdk";
import { useQuery } from '@tanstack/react-query';

export type PersonResponse = {
    id: string
    name: string
    aboutMe: string
    interests: string
    affinityGroups: string
    lead: string
    location: string
    role: string
    startDate: string
    slackLink?: string
    imageUrl: string
}

const getUserFromId = async (id: string): Promise<PersonResponse> => {
    const responseNoErrorWrapper: Osdk.Instance<Person> = await client(Person).fetchOne(id);
    return {
        id: responseNoErrorWrapper.$primaryKey,
        name: responseNoErrorWrapper.name ?? '',
        aboutMe: responseNoErrorWrapper.aboutMe ?? '',
        interests: responseNoErrorWrapper.interests ?? '',
        affinityGroups: responseNoErrorWrapper.affinityGroups ?? '',
        lead: responseNoErrorWrapper.lead ?? '',
        location: responseNoErrorWrapper.location ?? '',
        role: responseNoErrorWrapper.role ?? '',
        startDate: responseNoErrorWrapper.startDate ?? '',
        slackLink: responseNoErrorWrapper.slackLink,
        imageUrl: responseNoErrorWrapper.imageUrl ?? '',
    };
};

const getPersonFromNameQuery = async (name: string): Promise<PersonResponse> => {
    const result = await client(getPersonFromName).executeFunction({
        name
    });
    return getUserFromId(result.$primaryKey);
};

const getLikesQuery = async (userID: string) => {
    const result = await client(getLikedPersonsBy).executeFunction({
        userID
    });
    return result;
};

export const getSimilarPersonsToQuery = async (userID: string) => {
    const result = await client(getSimilarPersonsTo).executeFunction({
        userID
    });
    const taskPromises = result.map(async (person) => {
        return getUserFromId(person.$primaryKey);
    });
    return Promise.all(taskPromises);
};

export const useGetPersonFromName = (name: string) => {
    return useQuery<PersonResponse, Error>({
        queryKey: ['person', name],
        queryFn: () => getPersonFromNameQuery(name),
        enabled: !!name,
        refetchInterval: 99999999
    });
};

export const useGetSimilarPersonsTo = (userID: string) => {
    return useQuery<PersonResponse[], Error>({
        queryKey: ['similarPersonsTo', userID],
        queryFn: () => getSimilarPersonsToQuery(userID),
        enabled: !!userID,
    });
};
