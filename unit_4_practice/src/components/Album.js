import React from 'react';

export const Album = (props) => {
    console.log(props)
    const { albums, photos } = props;
    if (!albums.length || !photos.length) {
        return null;
    }
    //loop through photos array, get correct photos for each album
    let album = albums.find(album => album.id === Number(props.match.params.id));
    let photoList = photos.map(photo => {
        if (photo.albumId === album.id) {
            return (
                <li key={photo.id}>
                    <img src={photo.thumbnailUrl} alt='' />
                </li>
            )
        } else {
            return null;
        }
    })
    return (
        <>
            Title: {album.title}
            <ul>{photoList}</ul>
        </>
    )

}