import {Component} from 'react'
import LeftListComponent from '../LeftListComponent'
import ContextSlides from '../../Context'
import NxtSlideComponent from '../NxtSlideComponent'
import './index.css'

class MainSlides extends Component {
  render() {
    return (
      <ContextSlides.Consumer>
        {value => {
          const {initialList} = value
          return (
            <div className="nxt-slides-container">
              <ol className="nxt-slides-list">
                {initialList.map((eachSlide, index) => (
                  <LeftListComponent
                    details={eachSlide}
                    key={eachSlide.id}
                    serialNumber={index + 1}
                  />
                ))}
              </ol>
              <NxtSlideComponent />
            </div>
          )
        }}
      </ContextSlides.Consumer>
    )
  }
}

export default MainSlides
