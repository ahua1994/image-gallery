import data from "./AlbumData";
import "./Album.css";

function Album() {
    const albums = [];
    data.forEach((album) =>
        albums.push(
            <figure className="col-xs-12 col-sm-6 col-md-3">
                <img className="col-12" src={album.download_url}></img>
                <figcaption>{album.author}</figcaption>
            </figure>
        )
    );
    return <>{albums}</>;
}

export default Album;
