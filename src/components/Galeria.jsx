import React from "react";
import Gallery from "react-grid-gallery";
import { Container } from "react-bootstrap";
import './Gallery.css'

const IMAGES = [
  {
    src: "https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2FARTISTICO%2F0009-28.jpg?alt=media&token=d2018730-1698-4a9c-8ccf-6a860cae35f7",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2FARTISTICO%2F0009-28.jpg?alt=media&token=d2018730-1698-4a9c-8ccf-6a860cae35f7",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
    caption: "Foto por Martin Cerna"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2FPareja%2F0012-73.jpg?alt=media&token=29f9f43a-089f-493d-badb-01cd239d942f",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2FPareja%2F0012-73.jpg?alt=media&token=29f9f43a-089f-493d-badb-01cd239d942f",
    thumbnailWidth: 140,
    thumbnailHeight: 200,
    caption: "Foto pareja (Martin Cerna)"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2FARTISTICO%2F0018-3-HDR-6.jpg?alt=media&token=393152af-9bd9-401d-a433-3a4c00c321c1",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2FARTISTICO%2F0018-3-HDR-6.jpg?alt=media&token=393152af-9bd9-401d-a433-3a4c00c321c1",
    thumbnailWidth: 520,
    thumbnailHeight: 312,
    tags: [
      { value: "Martin", title: "Cerna" },
      { value: "Martin", title: "Cerna" }
    ],
    caption: "Foto por Martin Cerna"
  },

  {
    src: "https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2FCUMPLEANIOS%2F0016-15.jpg?alt=media&token=b39d8e25-7bc3-48dd-8b5e-ba6906c6546e",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2FCUMPLEANIOS%2F0016-15.jpg?alt=media&token=b39d8e25-7bc3-48dd-8b5e-ba6906c6546e",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },

  {
    src: "https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2FRETRATO%2F0014-210.jpg?alt=media&token=555ac1be-d70d-47cc-8d08-45665150081a",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2FRETRATO%2F0014-210.jpg?alt=media&token=555ac1be-d70d-47cc-8d08-45665150081a",
    thumbnailWidth: 300,
    thumbnailHeight: 412,
    tags: [
      { value: "Martin", title: "Cerna" },
      { value: "Martin", title: "Cerna" }
    ],
    caption: "Foto por Martin Cerna"
  },

  {
    src: "https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2Feventos%2F26062021-_DSC4373.JPG?alt=media&token=e1c0c38b-a690-4ec3-bb1b-c02996b597dd",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2Feventos%2F26062021-_DSC4373.JPG?alt=media&token=e1c0c38b-a690-4ec3-bb1b-c02996b597dd",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2Ffamilia%2F13062021-DSC03023.2.jpg?alt=media&token=930f20e2-6403-4c0e-b465-94c2c9eea952",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2Ffamilia%2F13062021-DSC03023.2.jpg?alt=media&token=930f20e2-6403-4c0e-b465-94c2c9eea952",
    thumbnailWidth: 320,
    thumbnailHeight: 200,
    caption: "Foto por Martin Cerna"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2FDoc%2F15062021-_DSC3133.JPG?alt=media&token=ac61380b-806c-4cb2-b562-9d4c86bd6e79",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2FDoc%2F15062021-_DSC3133.JPG?alt=media&token=ac61380b-806c-4cb2-b562-9d4c86bd6e79",
    thumbnailWidth: 120,
    thumbnailHeight: 212,
    tags: [
      { value: "Martin", title: "Cerna" },
      { value: "Martin", title: "Cerna" }
    ],
    caption: "Foto por Martin Cerna"
  },

  {
    src: "https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2FDoc%2F15062021-_DSC3160.JPG?alt=media&token=e0cdac4a-9542-490d-b665-fe4b4e856b62",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2FDoc%2F15062021-_DSC3160.JPG?alt=media&token=e0cdac4a-9542-490d-b665-fe4b4e856b62",
    thumbnailWidth: 320,
    thumbnailHeight: 212
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2FPareja%2F0012-63.jpg?alt=media&token=c805d343-81a2-4d1d-875b-e9e42ed9dda5",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2FPareja%2F0012-63.jpg?alt=media&token=c805d343-81a2-4d1d-875b-e9e42ed9dda5",
    thumbnailWidth: 120,
    thumbnailHeight: 174,
    caption: "Foto por Martin Cerna"
  },
  {
    src: "https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2FBici%2F0001-361.jpg?alt=media&token=9c4f011e-d90c-4b15-a90f-f61dda292c76",
    thumbnail:
      "https://firebasestorage.googleapis.com/v0/b/teams-92a37.appspot.com/o/martincerna%2FBici%2F0001-361.jpg?alt=media&token=9c4f011e-d90c-4b15-a90f-f61dda292c76",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Martin", title: "Cerna" },
      { value: "Martin", title: "Cerna" }
    ],
    caption: "Foto por Martin Cerna"
  } 
];
 
export default function Galeria() {
    return ( 
        <>
         <Container className="gallery_container">
         <Gallery 
      images={IMAGES}
      enableLightbox={true}
      // maxRows={3}
      backdropClosesModal
      // currentImage={3}
      // isOpen={ true}
    />
         </Container>
   
        </>
    );
  }