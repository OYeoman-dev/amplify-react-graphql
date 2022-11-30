/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const createFish = /* GraphQL */ `
  mutation CreateFish(
    $input: CreateFishInput!
    $condition: ModelFishConditionInput
  ) {
    createFish(input: $input, condition: $condition) {
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
export const updateFish = /* GraphQL */ `
  mutation UpdateFish(
    $input: UpdateFishInput!
    $condition: ModelFishConditionInput
  ) {
    updateFish(input: $input, condition: $condition) {
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
export const deleteFish = /* GraphQL */ `
  mutation DeleteFish(
    $input: DeleteFishInput!
    $condition: ModelFishConditionInput
  ) {
    deleteFish(input: $input, condition: $condition) {
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
export const createWaterParameters = /* GraphQL */ `
  mutation CreateWaterParameters(
    $input: CreateWaterParametersInput!
    $condition: ModelWaterParametersConditionInput
  ) {
    createWaterParameters(input: $input, condition: $condition) {
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
export const updateWaterParameters = /* GraphQL */ `
  mutation UpdateWaterParameters(
    $input: UpdateWaterParametersInput!
    $condition: ModelWaterParametersConditionInput
  ) {
    updateWaterParameters(input: $input, condition: $condition) {
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
export const deleteWaterParameters = /* GraphQL */ `
  mutation DeleteWaterParameters(
    $input: DeleteWaterParametersInput!
    $condition: ModelWaterParametersConditionInput
  ) {
    deleteWaterParameters(input: $input, condition: $condition) {
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
