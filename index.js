var recipes = new Object({ });

var obj = {prop: 1 }

function updateObjectWithKeyAndValue(obj, key, value) {
  return Object.assign( {}, obj, { [key]: value } )
}