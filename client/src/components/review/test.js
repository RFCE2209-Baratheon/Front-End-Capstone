<div>
{review.photos.map((photo, i) => (
  <div>
    <Thumbnail src={photo.url} onClick={() => { togglePhoto(photo.url); }} key={i}></Thumbnail>
    {showModal ? <PhotosModal toggle={togglePhoto} visible={showModal} photo={photo.url}/> : null}
  </div>
))}
</div>