import { createClient } from "@osdk/client";
import type { Client } from "@osdk/client";
import { createPublicOauthClient } from "@osdk/oauth";

const client_id: string = "68b09c37a0ad9cd80dae8288a3b8457d";
const palantirUrl: string = "https://ehosier.usw-1-dev.palantirfoundry.com";
const apiUrl: string = "http://localhost:5173/palantir-api";
const ontologyRid: string = "ri.ontology.main.ontology.4617afa9-a322-4ded-9ce8-b9b45c9e4559";
const redirectUrl: string = "http://localhost:5173/";
const scopes: string[] = [
	"api:ontologies-read",
	"api:ontologies-write",
	"api:mediasets-read",
	"api:mediasets-write"
];

export const auth = createPublicOauthClient(client_id, palantirUrl, redirectUrl, true, undefined, window.location.toString(), scopes);
export const client: Client = createClient(apiUrl, ontologyRid, auth);