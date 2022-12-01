import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { listFish } from "../../graphql/queries";
import {
    deleteFish as deleteFishMutation,
} from "../../graphql/mutations";
import { API, Storage } from 'aws-amplify';
import {
    Button,
    Flex,
    Heading,
    Image,
    Text,
    View,
    withAuthenticator,
} from '@aws-amplify/ui-react';



const FishCreateForm = () => {
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
            <Heading level={1}>Current Fishs'</Heading>
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
                        <Text as="span">{fish.temperature}</Text>
                        <Text as="span">{fish.ammonia}</Text>
                        <Text as="span">{fish.no2}</Text>
                        <Text as="span">{fish.no3}</Text>
                        <Text as="span">{fish.ph}</Text>
                        <Text as="span">{fish.gh}</Text>
                        <Text as="span">{fish.kh}</Text>

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
        </View>
    );
};

export default withAuthenticator(FishCreateForm);