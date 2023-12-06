function findFirstRepeated(gifts) {
    // Code here
    const numberRepeated = gifts.find((element, index, array) => array.indexOf(element) !== index) 
    return numberRepeated !== undefined ? numberRepeated : -1
  }