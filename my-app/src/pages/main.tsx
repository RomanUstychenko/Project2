import { connect } from 'react-redux'
import React, { Component } from 'react'

type Props = {}

type State = {}

export class main extends Component<Props, State> {
  state = {}

  render() {
    return (
      <div>main</div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(main)