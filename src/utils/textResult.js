const textResult = (originText) => {
  const regex = /(<[\w]+>\W+<\/>|<[\w]+>\w+<\/>)/gm;
  return originText.replaceAll(regex, (val) => {
    const _color = val.match(/<[\w]+>/gm)[0].replace('<', '').replace('>', '')
    return val.replace(`<${_color}>`, `<span style="color: ${this.colorObject[_color]}">`).replace('</>', '</span>')
  })
}

export default textResult()
