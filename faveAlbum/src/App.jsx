import Card from "./components/Card/Card";
import CardList from "./components/CardList/CardList";
import "./App.css";

function App() {
  return (
    <>
      <h1>My Favourite Albums</h1>
      <CardList>
        <Card
          imageURL="https://imageio.forbes.com/specials-images/imageserve/1207828603/0x0.jpg?format=jpg&width=1200"
          albumTitle="bang bang bang"
          bandName="group banana"
          albumRating={3}
        />
        <Card
          imageURL="https://www.abcmusicgroup.com.au/wp-content/uploads/2023/02/FRONT-PAGE-TOP-option1-scaled.jpg"
          albumTitle="luu luu ruu"
          bandName="big bang"
          albumRating={4}
        />
        <Card
          imageURL="https://www.musicuploads.com.au/musicuploads/images/logoblue.png"
          albumTitle="luu luu ruu"
          bandName="big bang"
          albumRating={5}
        />
        <Card
          imageURL="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Blackpink_PUBG_210321.jpg/1200px-Blackpink_PUBG_210321.jpg"
          albumTitle="bang bang bang"
          bandName="group banana"
          albumRating={3}
        />
        <Card
          imageURL="https://delivery-cqucontenthub.stylelabs.cloud/api/public/content/bachelor-music-students-in-studio-with-saxophone-guitar-full-page.jpg?v=8ca6e27f&t=w960HighCompressed"
          albumTitle="luu luu ruu"
          bandName="big bang"
          albumRating={5}
        />
        <Card
          imageURL="https://www.pianoemporium.com/wp-content/uploads/2019/03/music-keyboard-technology-guitar-concert-piano-1108329-pxhere.com_-800x600.jpg"
          albumTitle="luu luu ruu"
          bandName="big bang"
          albumRating={4}
        />
        <Card
          imageURL="https://lh3.googleusercontent.com/VayRnJfZC6MAdZZEkGa_O8Zegu9qoyhlwcYA73fFqRAr5C8no_DLdMqGY3LXtdDQFX91V4GMWrtnjmk=w544-h544-p-l90-rj"
          albumTitle="bang bang bang"
          bandName="The Rolling Stones"
          albumRating={3}
        />
        <Card
          imageURL="https://c.files.bbci.co.uk/1260/production/_108240740_beatles-abbeyroad-index-reuters-applecorps.jpg"
          albumTitle="Abbey Road"
          bandName="The Beatles"
          albumRating={5}
        />
      </CardList>
    </>
  );
}

export default App;
