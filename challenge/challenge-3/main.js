function findNaughtyStep(original, modified) {
    const maxLength = Math.max(original.length, modified.length);
    let difference = '';
  
    for (let i = 0; i < maxLength; i++) {
      if (original[i] !== modified[i]) {
        difference += maxLength === original.length ? original[i] : modified[i]
        return difference;
      }
    }
  
    return difference
  }