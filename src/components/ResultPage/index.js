import {Component} from 'react'

class ResultPage extends Component {
  onClickGotoHomePage = () => {
    const {history} = this.props
    history.push('/')
  }

  render() {
    return (
      <div>
        <button onClick={this.onClickGotoHomePage}>start again</button>
      </div>
    )
  }
}

export default ResultPage
