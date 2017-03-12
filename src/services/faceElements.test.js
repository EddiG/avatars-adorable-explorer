import fetchElements from './faceElements'

describe('face elements service', () => {
  it('should return list of eyes, noses, mouths', () =>
    fetchElements()
      .then((elements) => {
        expect(elements).toHaveProperty('face.eyes')
        expect(elements).toHaveProperty('face.nose')
        expect(elements).toHaveProperty('face.mouth')
      }))
})
