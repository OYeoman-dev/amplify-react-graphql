import React from "react";
import "@aws-amplify/ui-react/styles.css";
import {withAuthenticator} from "@aws-amplify/ui-react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

class MyGallery extends React.Component {

    render() {
        return <ImageGallery items={this.props.images} />;
    }
}

export default withAuthenticator(MyGallery);
