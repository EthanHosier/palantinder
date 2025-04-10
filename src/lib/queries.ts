import { Osdk } from "@osdk/client";
import { client } from "./osdk";
import { getLikedPersonsBy, getPersonFromName, Person } from "@palantinder/sdk";
import { useQuery } from '@tanstack/react-query';

export type PersonDTO = {
    name: string
    aboutMe: string
    interests: string
    lead: string
    location: string
    role: string
    startDate: string
    slackLink?: string
    imageUrl: string
}

const getPersonFromNameQuery = async (name: string): Promise<PersonDTO> => {
    const result = await client(getPersonFromName).executeFunction({
        name
    });
    const responseNoErrorWrapper: Osdk.Instance<Person> = await client(Person).fetchOne(result.$primaryKey);
    return {
        name: responseNoErrorWrapper.name ?? '',
        aboutMe: responseNoErrorWrapper.aboutMe ?? '',
        interests: responseNoErrorWrapper.interests ?? '',
        lead: responseNoErrorWrapper.lead ?? '',
        location: responseNoErrorWrapper.location ?? '',
        role: responseNoErrorWrapper.role ?? '',
        startDate: responseNoErrorWrapper.startDate ?? '',
        slackLink: responseNoErrorWrapper.slackLink,
        imageUrl: responseNoErrorWrapper.imageUrl ?? ''
    };
};

const getLikedPersonsByQuery = async (userID: string) => {
    const result = await client(getLikedPersonsBy).executeFunction({
        userID
    });
};

export const useGetPersonFromName = (name: string) => {
    return useQuery({
        queryKey: ['person', name],
        queryFn: () => getPersonFromNameQuery(name),
        enabled: !!name,
    });
};

