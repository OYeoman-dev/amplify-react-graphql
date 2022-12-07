import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { listFish } from "../../graphql/queries";
import { deleteFish as deleteFishMutation } from "../../graphql/mutations";
import { API, Storage } from "aws-amplify";
import {
  Card,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  View,
  withAuthenticator,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  useTheme,
} from "@aws-amplify/ui-react";
import Gallary from "../Gallary/Gallary";

const FishCreateForm = () => {
  const [fish, setFish] = useState([]);

  const { tokens } = useTheme();

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
      <Heading level={1} margin="3rem 0">
        All Fish
      </Heading>
      <View>
        {/* <Gallary /> */}
      </View>
      {fish.map((fish) => (
        <View
          backgroundColor={tokens.colors.background.secondary}
          padding={tokens.space.medium}
        >
          <Card>
            <Flex direction="row" alignItems="flex-start">
              {fish.image && (
                <Image
                  src={fish.image}
                  alt={`visual aid for ${fish.name}`}
                  width="30%"
                />
              )}
              <Flex
                direction="column"
                alignItems="flex-start"
                gap={tokens.space.xs}
                width="70%"
              >
                <Heading level={5}>{fish.name}</Heading>

                <Text as="span">{fish.description}</Text>

                <Table caption="" highlightOnHover={false}>
                  <TableHead>
                    <TableRow>
                      <TableCell as="th">Temp</TableCell>
                      <TableCell as="th">Ammonia</TableCell>
                      <TableCell as="th">NO2</TableCell>
                      <TableCell as="th">NO3</TableCell>
                      <TableCell as="th">PH</TableCell>
                      <TableCell as="th">GH</TableCell>
                      <TableCell as="th">KH</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{fish.temperature}</TableCell>
                      <TableCell>{fish.ammonia}</TableCell>
                      <TableCell>{fish.no2}</TableCell>
                      <TableCell>{fish.no3}</TableCell>
                      <TableCell>{fish.ph}</TableCell>
                      <TableCell>{fish.gh}</TableCell>
                      <TableCell>{fish.kh}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Flex>
            </Flex>
          </Card>
          <Button
            style={{
              backgroundColor: "white",
              color: "red",
              borderColor: "red",
            }}
            onClick={() => deleteFish(fish)}
          >
            Delete fish
          </Button>
        </View>
      ))}
    </View>
  );
};

export default withAuthenticator(FishCreateForm);
