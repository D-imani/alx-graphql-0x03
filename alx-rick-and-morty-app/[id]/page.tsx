"use client";

import { useQuery } from "@apollo/client";
import { GET_CHARACTER } from "@/graphql/apolloClient";

export default function CharacterPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { character } = data;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{character.name}</h1>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <img
        src={character.image}
        alt={character.name}
        className="rounded-lg mt-4"
      />
    </div>
  );
}
