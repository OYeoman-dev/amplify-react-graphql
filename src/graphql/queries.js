/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFish = /* GraphQL */ `
  query GetFish($id: ID!) {
    getFish(id: $id) {
      id
      name
      description
      image
      parameters {
        id
        temperature
        ammonia
        no2
        no3
        ph
        gh
        kh
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listFish = /* GraphQL */ `
  query ListFish(
    $filter: ModelFishFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFish(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        parameters {
          id
          temperature
          ammonia
          no2
          no3
          ph
          gh
          kh
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getParameters = /* GraphQL */ `
  query GetParameters($id: ID!) {
    getParameters(id: $id) {
      id
      temperature
      ammonia
      no2
      no3
      ph
      gh
      kh
      createdAt
      updatedAt
    }
  }
`;
export const listParameters = /* GraphQL */ `
  query ListParameters(
    $filter: ModelParametersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParameters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        temperature
        ammonia
        no2
        no3
        ph
        gh
        kh
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
