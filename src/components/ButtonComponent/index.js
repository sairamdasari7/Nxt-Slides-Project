import {v4 as uuidv4} from 'uuid'
import './index.css'
import ContextSlides from '../../Context'

const ButtonComponent = () => (
  <ContextSlides.Consumer>
    {value => {
      const {addNewItem, activeIndex, changeActiveTab} = value

      const onClickAddButton = () => {
        const id = uuidv4()
        const item = {
          id,
          heading: 'Heading',
          description: 'Description',
        }
        addNewItem(item)
        changeActiveTab(activeIndex + 1)
      }

      return (
        <div>
          <button
            type="button"
            className="add-button"
            onClick={onClickAddButton}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="plus-symbol"
            />
            New
          </button>
        </div>
      )
    }}
  </ContextSlides.Consumer>
)
export default ButtonComponent
