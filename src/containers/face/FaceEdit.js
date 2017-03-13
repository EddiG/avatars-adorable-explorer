// @flow
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Image, Selector } from '../../components'
import { initFace, selectEyes, selectNose, selectMouth } from '../../actions'
import './FaceEdit.css'

type Props = {
  eyes: Array<string>,
  noses: Array<string>,
  mouths: Array<string>,
  face: {
    eyes: string,
    nose: string,
    mouth: string },
  initFace: Function,
  selectEyes: Function,
  selectNose: Function,
  selectMouth: Function,
}

class FaceEdit extends PureComponent {
  componentWillMount() {
    this.props.initFace()
  }

  props: Props

  render() {
    const eyes = this.props.eyes
    const noses = this.props.noses
    const mouths = this.props.mouths
    const face = this.props.face
    const avatar = `https://api.adorable.io/avatars/face/${face.eyes}/${face.nose}/${face.mouth}/00ffff`

    return (
      <div className="FaceEdit">
        <div>
          <Selector label="Eyes" values={eyes} onSelectChanged={this.props.selectEyes} />
          <Selector label="Noses" values={noses} onSelectChanged={this.props.selectNose} />
          <Selector label="Mouths" values={mouths} onSelectChanged={this.props.selectMouth} />
          <a href={avatar} target="_blank">{avatar}</a>
        </div>
        <Image src={avatar} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  eyes: state.eyes,
  noses: state.noses,
  mouths: state.mouths,
  face: state.face,
})

export default connect(
  mapStateToProps,
  {
    initFace,
    selectEyes,
    selectNose,
    selectMouth,
  },
)(FaceEdit)
