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
      waterParameters {
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
      fishWaterParametersId
    }
  }
`;
export const listFish = /* GraphQL */ `
  query ListFish(
    $id: ID
    $filter: ModelFishFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listFish(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        description
        image
        waterParameters {
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
        fishWaterParametersId
      }
      nextToken
    }
  }
`;
export const getWaterParameters = /* GraphQL */ `
  query GetWaterParameters($id: ID!) {
    getWaterParameters(id: $id) {
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
export const listWaterParameters = /* GraphQL */ `
  query ListWaterParameters(
    $id: ID
    $filter: ModelWaterParametersFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listWaterParameters(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
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
