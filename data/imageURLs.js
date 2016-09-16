module.exports.urlsInit= ['http://localhost:3000/images/default1.XL.jpg',
  'http://localhost:3000/images/default2.large.jpg',
  'http://localhost:3000/images/default1.XL.jpg',
  'http://localhost:3000/images/default2.large.jpg'];

module.exports.urls= ['http://localhost:3000/images/default5.jpg',
  'http://localhost:3000/images/default6.jpg',
  'http://localhost:3000/images/default7.jpg',
  'http://localhost:3000/images/default8.jpg'];

module.exports.imageToURI= function (img){
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
    canvas.width = 1280;
    canvas.height = 800;
  var dataURL= canvas.toDataURL(img, 1.0);
  return dataURL;
};

