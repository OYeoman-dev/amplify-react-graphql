import React from "react";
import "@aws-amplify/ui-react/styles.css";
import {
    createFish as createFishMutation,
} from "../../graphql/mutations";
import { API, Storage } from 'aws-amplify';
import {
    Button,
    Flex,
    Heading,
    TextField,
    View,
    withAuthenticator,
} from '@aws-amplify/ui-react';



const FishCreateForm = () => {

    async function createFish(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const image = form.get("image");
        console.log(form.get("name"));
        console.log(image);

        const data = {
            name: form.get("name"),
            description: form.get("description"),
            image: image.name,
            temperature: form.get("temperature"),
            ammonia: form.get("ammonia"),
            no2: form.get("no2"),
            no3: form.get("no3"),
            ph: form.get("ph"),
            gh: form.get("gh"),
            kh: form.get("kh")
        };

        console.log(data);
        if (!!data.image) await Storage.put(data.name, image);
        await API.graphql({
            query: createFishMutation,
            variables: { input: data },
        });
        event.target.reset();
    }

    return (
        <View className="FishCreateForm">
            <Heading level={1}>Upload fish details</Heading>
            <View as="form" margin="3rem 0" onSubmit={createFish}>
                <Flex direction="column" justifyContent="center">
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
                        name="temperature"
                        placeholder="Temperature Range"
                        label="Temperature Range"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <TextField
                        name="ammonia"
                        placeholder="Ammonia"
                        label="Ammonia"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <TextField
                        name="no2"
                        placeholder="Ideal NO2 Range"
                        label="Ideal NO2 Range"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <TextField
                        name="no3"
                        placeholder="Ideal NO3 Range"
                        label="Ideal NO3 Range"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <TextField
                        name="ph"
                        placeholder="PH Range"
                        label="PH Range"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <TextField
                        name="gh"
                        placeholder="GH Range"
                        label="GH Range"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <TextField
                        name="kh"
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
                        style={{ alignSelf: "center" }}
                    />
                    <Button type="submit" variation="primary">
                        Create Fish
                    </Button>
                </Flex>
            </View>
        </View>
    );
};

export default withAuthenticator(FishCreateForm);