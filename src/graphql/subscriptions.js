/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onCreateFish = /* GraphQL */ `
  subscription OnCreateFish($filter: ModelSubscriptionFishFilterInput) {
    onCreateFish(filter: $filter) {
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
export const onUpdateFish = /* GraphQL */ `
  subscription OnUpdateFish($filter: ModelSubscriptionFishFilterInput) {
    onUpdateFish(filter: $filter) {
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
export const onDeleteFish = /* GraphQL */ `
  subscription OnDeleteFish($filter: ModelSubscriptionFishFilterInput) {
    onDeleteFish(filter: $filter) {
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
export const onCreateWaterParameters = /* GraphQL */ `
  subscription OnCreateWaterParameters(
    $filter: ModelSubscriptionWaterParametersFilterInput
  ) {
    onCreateWaterParameters(filter: $filter) {
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
export const onUpdateWaterParameters = /* GraphQL */ `
  subscription OnUpdateWaterParameters(
    $filter: ModelSubscriptionWaterParametersFilterInput
  ) {
    onUpdateWaterParameters(filter: $filter) {
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
export const onDeleteWaterParameters = /* GraphQL */ `
  subscription OnDeleteWaterParameters(
    $filter: ModelSubscriptionWaterParametersFilterInput
  ) {
    onDeleteWaterParameters(filter: $filter) {
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
