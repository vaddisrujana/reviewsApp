import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {
    review: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/wade-warren-img.png',
    username: 'Wade Warren',
    companyName: 'Rang',
    description:
      'The most important thing I learnt is that nothing is a failure, but what we learn from that is a rich and rewarding experience.',
  }

  onLeftArrow = () => {
    const {reviewsList} = this.props
    const {review} = this.state

    if (review === 0) {
      console.log(review)
      this.setState({
        username: reviewsList[review].username,
        companyName: reviewsList[review].companyName,
        imgUrl: reviewsList[review].imgUrl,
        description: reviewsList[review].description,
      })
    } else {
      this.setState(prevState => ({review: prevState.review - 1}))
      console.log(review)
      this.setState({
        username: reviewsList[review - 1].username,
        companyName: reviewsList[review - 1].companyName,
        imgUrl: reviewsList[review - 1].imgUrl,
        description: reviewsList[review - 1].description,
      })
    }
  }

  onRightArrow = () => {
    const {reviewsList} = this.props
    const {review} = this.state
    if (review === reviewsList.length - 1) {
      console.log(review)
      this.setState({
        username: reviewsList[review].username,
        companyName: reviewsList[review].companyName,
        imgUrl: reviewsList[review].imgUrl,
        description: reviewsList[review].description,
      })
    } else {
      this.setState(prevState => ({review: prevState.review + 1}))
      console.log(review)
      this.setState({
        username: reviewsList[review + 1].username,
        companyName: reviewsList[review + 1].companyName,
        imgUrl: reviewsList[review + 1].imgUrl,
        description: reviewsList[review + 1].description,
      })
    }
  }

  render() {
    const {username, companyName, imgUrl, description} = this.state
    return (
      <div className="background">
        <h1 className="head">Reviews</h1>
        <div className="background1">
          <button
            type="button"
            onClick={this.onLeftArrow}
            className="button"
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="background2">
            <img src={imgUrl} alt={username} />
            <p>{username}</p>
            <p>{companyName}</p>
            <p>{description}</p>
          </div>
          <button
            type="button"
            onClick={this.onRightArrow}
            className="button"
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
