function house (type, street) {
  function constructor (){};
  function getType (){return type;};
  function getStreet (){return street;};
  return constructor;
}
