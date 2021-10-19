import './index.css'

const Item = props => {
  const {itemDetails, onClickMatchImage} = props
  const {id, thumbnailUrl} = itemDetails

  const onClickThumbnail = () => {
    onClickMatchImage(id)
  }

  return (
    <li className="item_thumbnail">
      <button
        type="button"
        className="thumbnail_btn"
        onClick={onClickThumbnail}
      >
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail" />
      </button>
    </li>
  )
}

export default Item
