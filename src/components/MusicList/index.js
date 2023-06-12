import {MdDelete} from 'react-icons/md'
import './index.css'

const MusicList = props => {
  const {details, onClickDelete} = props
  const {id, name, imageUrl, genre, duration} = details

  const onDelete = () => {
    onClickDelete(id)
  }

  return (
    <li className="list">
      <img className="img" src={imageUrl} alt="track" />
      <div>
        <p className="song-name">{name}</p>
        <p className="genre">{genre}</p>
      </div>
      <div className="div">
        <p className="duration">{duration}</p>
        <button className="button" data-testid="delete" type="button">
          <MdDelete
            cursor="pointer"
            size={25}
            color="white"
            onClick={onDelete}
          />
        </button>
      </div>
    </li>
  )
}

export default MusicList
