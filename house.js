function house (type, street) {
  function constructor (){this.type = type; this.street = street;};
  function getType (){return type;};
  function getStreet (){return street;};
  return constructor;
}
