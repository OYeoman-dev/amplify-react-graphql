import React from "react";
import "@aws-amplify/ui-react/styles.css";
import { listFish } from "../../graphql/queries";
import { API, Storage } from "aws-amplify";
import {withAuthenticator} from "@aws-amplify/ui-react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const images = [{
        original: String,
        thumbnail: String,
    }
];

async function fetchFishPhotos() {
    const apiData = await API.graphql({ query: listFish });
    const fishFromAPI = apiData.data.listFish.items;
    await Promise.all(
        fishFromAPI.map(async (fish) => {
            if (fish.image) {
                const url = await Storage.get(fish.name);
                fish.image = url;
                images.push({
                    original: fish.image,
                    thumbnail: fish.image
                });
                images.thumbnail.push(fish.image);
                console.log(images);
            }
            return fish.image;
        })
    );
}
fetchFishPhotos();

class MyGallery extends React.Component {

    render() {
        return <ImageGallery items={images} />;
    }
}

export default withAuthenticator(MyGallery);