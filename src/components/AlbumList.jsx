// https://picsum.photos/id/237/200/

// async function getAlbums() {
//     let apiFetch = await fetch("https://picsum.photos/v2/list?page=2&limit=50");
//     let albums = await apiFetch.json();
//     let gallery = ``;
//     console.log(albums);
//     for (let album in albums) {
//         gallery += (
//             <div className="col-xs-12 col-sm-6 col-md-4">
//                 {album.author}
//                 <img src={album.url}></img>
//             </div>
//         );
//     }
// }

import Album from "./Album";

function AlbumList() {
    return (
        <div className="row">
            <Album />
        </div>
    );
}

export default AlbumList;
