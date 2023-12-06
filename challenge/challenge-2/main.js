function manufacture(gifts, materials) {
    return gifts.filter((gift) => {
    // Check if all letters in the gift are in the materials
    return [...gift].every((letter) => materials.includes(letter));
  });
}