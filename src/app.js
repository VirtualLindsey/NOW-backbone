// Vendor Modules
import $ from 'jquery';
import _ from 'underscore';
import Song from './models/song';
import SongList from './collections/song_list';
// CSS
import './css/foundation.css';
import './css/style.css';

console.log('it loaded!');

const songData = [
    {
        title: "Drop It Like It's Hot",
        year: 2004,
        artist: "Snoop Dog"
    },
    {
        title: "Thriller",
        year: 1982,
        artist: "Michael Jackson"
    },
    {
        title: "Blue Monday",
        year: 1983,
        artist: "New Order"
    }
  ];

$(document).ready( () => {
  const song = new Song({
    title: 'hi',
    artist: 'hi bye',
    year: 2010
  });

  console.log('attirbutes are');
  console.log(song.attributes);

  const songTemplate = _.template($('#song-template').html());
  const songList = new SongList();

  songData.forEach((song) => {
    const generatedHTML = songTemplate(song);
    songList.add(song);
    console.log(generatedHTML);
    $('#song-list').append($(generatedHTML));
  });

  console.log(songList);
});
