function catAndMouse(x, y, z) {
  if (Math.abs(x-z) < Math.abs(y-z)) {
    return 'Cat A';
  } if(Math.abs(x-z) > Math.abs(y-z)) {
    return 'Cat B';
  } else {
    return 'Mouse C';
  }

}

catAndMouse(1,2,3);
catAndMouse(1,3,);
