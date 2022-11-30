import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { listFish } from "../../graphql/queries";
import {
    // createFish as createFishMutation,
    createWaterParameters as createWaterParametersMutation,
    deleteFish as deleteFishMutation,
} from "../../graphql/mutations";
import { API, Storage } from 'aws-amplify';
import {
    Button,
    Flex,
    Heading,
    Image,
    Text,
    TextField,
    View,
    withAuthenticator,
} from '@aws-amplify/ui-react';



const FishCreateForm = ({ signOut }) => {
    const [fish, setFish] = useState([]);

    useEffect(() => {
        fetchFish();
    }, []);



    async function fetchFish() {
        const apiData = await API.graphql({ query: listFish });
        const fishFromAPI = apiData.data.listFish.items;
        await Promise.all(
            fishFromAPI.map(async (fish) => {
                if (fish.image) {
                    const url = await Storage.get(fish.name);
                    fish.image = url;
                }
                return fish;
            })
        );
        setFish(fishFromAPI);
    }



    async function createFish(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const image = form.get("image");
        console.log(form.get("name"));
        console.log(image);

        const parameters = {
            temperature: form.get("parameters.temperature"),
            ammonia: form.get("parameters.ammonia"),
            no2: form.get("parameters.no2"),
            no3: form.get("parameters.no3"),
            ph: form.get("parameters.ph"),
            gh: form.get("parameters.gh"),
            kh: form.get("parameters.kh")
        };

        console.log(parameters);

        API.graphql({
            query: createWaterParametersMutation,
            variables: { input: parameters },
        })


        // const data = {
        //     name: form.get("name"),
        //     description: form.get("description"),
        //     image: image.name,
        //     parameters: parameters
        // };

        // console.log(data);
        // if (!!data.image) await Storage.put(data.name, image);
        // await API.graphql({
        //     query: createFishMutation,
        //     variables: { input: data },
        // });
        fetchFish();
        event.target.reset();
    }



    async function deleteFish({ id, name }) {
        const newFish = fish.filter((fish) => fish.id !== id);
        setFish(newFish);
        await Storage.remove(name);
        await API.graphql({
            query: deleteFishMutation,
            variables: { input: { id } },
        });
    }



    return (
        <View className="FishCreateForm">
            <Heading level={1}>My Notes App</Heading>
            <View as="form" margin="3rem 0" onSubmit={createFish}>
                <Flex direction="row" justifyContent="center">
                    <TextField
                        name="name"
                        placeholder="Fish Name"
                        label="Fish Name"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <TextField
                        name="description"
                        placeholder="Fish Description"
                        label="Fish Description"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <TextField
                        name="parameters.temperature"
                        placeholder="Temperature Range"
                        label="Temperature Range"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <TextField
                        name="parameters.ammonia"
                        placeholder="Ammonia"
                        label="Ammonia"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <TextField
                        name="parameters.no2"
                        placeholder="Ideal NO2 Range"
                        label="Ideal NO2 Range"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <TextField
                        name="parameters.no3"
                        placeholder="Ideal NO3 Range"
                        label="Ideal NO3 Range"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <TextField
                        name="parameters.ph"
                        placeholder="PH Range"
                        label="PH Range"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <TextField
                        name="parameters.gh"
                        placeholder="GH Range"
                        label="GH Range"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <TextField
                        name="parameters.kh"
                        placeholder="KH Range"
                        label="KH Range"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <View
                        name="image"
                        as="input"
                        type="file"
                        style={{ alignSelf: "end" }}
                    />
                    <Button type="submit" variation="primary">
                        Create Fish
                    </Button>
                </Flex>
            </View>
            <Heading level={2}>Current Fishs'</Heading>
            <View margin="3rem 0">
                {fish.map((fish) => (
                    <Flex
                        key={fish.id || fish.name}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Text as="strong" fontWeight={700}>
                            {fish.name}
                        </Text>
                        <Text as="span">{fish.description}</Text>
                        <Text as="span">{fish.parameters.temperature}</Text>
                        <Text as="span">{fish.parameters.ammonia}</Text>
                        <Text as="span">{fish.parameters.no2}</Text>
                        <Text as="span">{fish.parameters.no3}</Text>
                        <Text as="span">{fish.parameters.ph}</Text>
                        <Text as="span">{fish.parameters.gh}</Text>
                        <Text as="span">{fish.parameters.kh}</Text>

                        {fish.image && (
                            <Image
                                src={fish.image}
                                alt={`visual aid for ${fish.name}`}
                                style={{ width: 400 }}
                            />
                        )}
                        <Button variation="link" onClick={() => deleteFish(fish)}>
                            Delete fish
                        </Button>
                    </Flex>
                ))}
            </View>
            <Button onClick={signOut}>Sign Out</Button>

        </View>
    );
};

export default withAuthenticator(FishCreateForm);