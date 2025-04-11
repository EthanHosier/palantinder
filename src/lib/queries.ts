import { Osdk } from "@osdk/client";
import { client } from "./osdk";
import { getLikedPersonsBy, getPersonFromName, getSimilarPersonsTo, handleSwipeAction, Person } from "@palantinder/sdk";
import { useMutation, useQuery } from '@tanstack/react-query';
import { queryClient } from "./utils";

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
    return Promise.all(result.map(async (person) => {
        return getUserFromId(person.$primaryKey);
    }));
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

export const handleSwipe = async (userID: string, personID: string, action: 'like' | 'dislike') => {
    const result = await client(handleSwipeAction).applyAction(
        {
            swiperID: userID,
            swipedID: personID,
            didLike: action === 'like'
        },
        {
            $returnEdits: true
        }
    );

    if (result.type === "edits") {
        const updatedObject = result.editedObjectTypes[0];
        return updatedObject;
    }
    throw new Error("Unexpected response type");
}

export const useGetPersonFromName = (name: string) => {
    return useQuery<PersonResponse, Error>({
        queryKey: ['person', name] as const,
        queryFn: () => getPersonFromNameQuery(name),
        enabled: !!name,
        refetchInterval: 99999999
    });
};

export const useGetSimilarPersonsTo = (userID: string) => {
    return useQuery<PersonResponse[], Error>({
        queryKey: ['similarPersonsTo', userID] as const,
        queryFn: () => getSimilarPersonsToQuery(userID),
        enabled: !!userID,
        cacheTime: 0,
    });
};

export const useGetUser = (userID: string) => {
    return useQuery<PersonResponse, Error>({
        queryKey: ['user', userID] as const,
        queryFn: () => getUserFromId(userID),
        enabled: !!userID,
    });
};

export const useGetLikes = (userID: string) => {
    return useQuery<PersonResponse[], Error>({ 
        queryKey: ['likes', userID] as const, 
        queryFn: () => getLikesQuery(userID),
        enabled: !!userID,
    });
};      