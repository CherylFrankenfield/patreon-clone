import React from 'react';
import Creators from './Creators';
import bobross from './../bobross.jpg';
import chuckclose from './../chuckclose.jpg';
import balloonanimal from './../balloonanimal.jpg';

const creatorsListArray = [
  {
    image: `${chuckclose}`,
    name: 'Chuck Close',
    bio: 'Charles Thomas "Chuck" Close (born July 5, 1940) is an American painter, artist and photographer who achieved fame as a photorealist, through his massive-scale portraits.'
  },
  {
    image: `${bobross}`,
    name: 'Bob Ross',
    bio: 'Robert Norman Ross (October 29, 1942 – July 4, 1995) was an American painter, art instructor, and television host. He was the creator and host of The Joy of Painting, an instructional television program that aired from 1983 to 1994 on PBS in the United States, and also aired in Canada, Latin America, and Europe. Ross went from being a public-television personality in the 1980s and 1990s to being an Internet celebrity in the 21st century, popular with fans on YouTube and many other websites.'
  },
  {
    image: `${balloonanimal}`,
    name: 'Balloon Animal',
    bio: 'Kids birthday parties are his jam.'
  }
];

const creatorsCard = {
  margin: 10,
  backgroundColor: '#bd5b5d',
  color: 'white',
  padding: 10,
  width: '30%',
  boxShadow: '1px 1px 1px black'

};

const creatorsContainer = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
};

function CreatorsList() {
  return(
    <div>
      <h1>Meet your creators. Fund them.</h1>
      <div style={creatorsContainer}>
        {creatorsListArray.map((creatorsItem, i) =>
          <div style={creatorsCard}>
            <Creators
              image={creatorsItem.image}
              name={creatorsItem.name}
              bio={creatorsItem.bio}
              key={i}/>
          </div>
        )}
      </div>
    </div>
  );
}

export default CreatorsList;
