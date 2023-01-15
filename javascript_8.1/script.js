const recipe = {
    'title': 'Mole',
    'servings': 2,
    'ingredients': ['cumin', 'cinamon', 'cocoa']
};
console.log(recipe.title);
console.log('Servings:' + recipe.servings);
console.log('Ingredients:');
for (let i = 0; i < recipe.ingredients.length; i++) {
    console.log(recipe.ingredients[i]);
}