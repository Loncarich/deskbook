module.exports.urlsInit= ['https://deskbookers-remix.herokuapp.com/images/default1.XL.jpg',
  'https://deskbookers-remix.herokuapp.com/images/default2.large.jpg',
  'https://deskbookers-remix.herokuapp.com/images/default1.XL.jpg',
  'https://deskbookers-remix.herokuapp.com/images/default2.large.jpg'];

module.exports.urls= ['https://deskbookers-remix.herokuapp.com/images/default5.jpg',
  'https://deskbookers-remix.herokuapp.com/images/default6.jpg',
  'https://deskbookers-remix.herokuapp.com/images/default7.jpg',
  'https://deskbookers-remix.herokuapp.com/images/default8.jpg'];

module.exports.imageToURI= function (img){
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
    canvas.width = 1280;
    canvas.height = 800;
  var dataURL= canvas.toDataURL(img, 1.0);
  return dataURL;
};

