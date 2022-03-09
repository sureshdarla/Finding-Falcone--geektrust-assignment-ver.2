import {Component} from 'react'

class ResultPage extends Component {
  onClickGotoHomePage = () => {
    const {history} = this.props
    history.push('/')
  }

  render() {
    console.log('Result page is rendered')
    return (
      <div className="congrats-message-container">
        <div>
          <h1>Congratulations, You made it.</h1>
          <button type="button" onClick={this.onClickGotoHomePage}>
            start again
          </button>
        </div>
      </div>
    )
  }
}

export default ResultPage
