// Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently he has decided to take a couple of old songs and make dubstep remixes from them. Lets assume that a song consists of some number of words )that don't contain WUB). To make the dubstep remix of this song, Polycarpus insers a certain number of words "WUB" before the first words (at least one between any pair of neighbouring words), and then the body glues together all the words including "WUB", in one string and plays the song at the club. FOr example a song with words "I AM X" can transform into a dubstep remix.as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX". Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Johnny restore the original song

// Input The input consists of a single non-empty string, consisting only of uppercase English letters, teh string's length doesn't exceed 200 characters. OUTPUT Return the words of the initial song that Polycarpus used to make a dubstep remix. 

// Seperate the words with a space. Examples songDecoder ("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDSWUB")


// This question is solved by making use of the regex method 
function songDecoder(song){
    // Replace the (WUB) in the song with an empty string and do that globally (g)
    return song.replace(/(WUB)/g, " ").trim();
}