// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Image, Selector, ColorPicker } from '../../components';
import {
  initFace,
  selectEyes,
  selectNose,
  selectMouth,
  selectColor,
} from '../../actions';
import './FaceEdit.css';

type Props = {
  eyes: Array<string>,
  noses: Array<string>,
  mouths: Array<string>,
  face: {
    eyes: string,
    nose: string,
    mouth: string,
    color: string,
  },
  initFace: () => void,
  selectEyes: (eyes: string) => void,
  selectNose: (nose: string) => void,
  selectMouth: (mouth: string) => void,
  selectColor: (color: string) => void,
};

class FaceEdit extends PureComponent {
  componentWillMount() {
    this.props.initFace();
  }

  props: Props;

  render() {
    const eyes = this.props.eyes;
    const noses = this.props.noses;
    const mouths = this.props.mouths;
    const face = this.props.face;
    const avatar = `https://api.adorable.io/avatars/face/${face.eyes}/${face.nose}/${face.mouth}/${face.color}`;

    return (
      <div className="FaceEdit">
        <Image src={avatar} />
        <div>
          <Selector
            label="Eyes"
            values={eyes}
            selectedValue={face.eyes}
            onSelectChanged={newEyes => this.props.selectEyes(newEyes)}
          />
          <Selector
            label="Noses"
            values={noses}
            selectedValue={face.nose}
            onSelectChanged={newNose => this.props.selectNose(newNose)}
          />
          <Selector
            label="Mouths"
            values={mouths}
            selectedValue={face.mouth}
            onSelectChanged={newMouth => this.props.selectMouth(newMouth)}
          />
          <ColorPicker
            label="Color"
            color={face.color}
            onColorSelected={newColor => this.props.selectColor(newColor)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  eyes: state.eyes,
  noses: state.noses,
  mouths: state.mouths,
  face: state.face,
});

export default connect(mapStateToProps, {
  initFace,
  selectEyes,
  selectNose,
  selectMouth,
  selectColor,
})(FaceEdit);
