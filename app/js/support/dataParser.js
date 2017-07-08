module.exports = {
  getValueFromUri: getValueFromUri,
  uriParser: uriParser
}

function uriParser(uri) {
  let subStr = uri.split("?")

  let subSubStr = subStr[1].split("&")
  subSubStr.push(subStr[0])

  for (let i = 0; i < subSubStr.length; i++) {
    console.log(subSubStr[i]);
  }

  return subSubStr
}

function getValueFromUri(attrName, uri) {
  let strArray = uriParser(uri)

  for (let i = 0; i < strArray.length; i++) {
    if (strArray[i].includes(attrName)) {
      let subStr = strArray[i].split("=")
      return subStr[1]
    }
  }
  return null;
}
