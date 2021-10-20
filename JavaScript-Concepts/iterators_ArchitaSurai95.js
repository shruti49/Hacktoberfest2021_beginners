// AUTHOR: Archita Surai
// JavaScript Concept: Iterators
// GITHUB: https://github.com/ArchitaSurai95

/*
    About
     - This module describes iterators in Javascript

    Description
     - An iterator is an object that is used to loop over any collection or sequence
     - An implementation of iterator includes the next() method which returns an object with two attributes - value and done
     - value: This holds on to the next value in iteration sequence. It can be of any datatype
     - done: This holds on to a boolean value. If the last value of the iteration sequence has been consumed, done is set to true
     - Iterators, upon termintion, return a value

    Usecases
     - Iterators are widely used in Javascript
     - Some examples would include: Destructuring of Arrays, Spread operator, Maps, Sets
*/

const menu = {
    foodMenu: {
        soups: [
            'Chicken clear soup',
            'Sweet Corn soup'
        ],
        starters: [
            'Dimsum',
            'French Fries',
            'Spring Roll'
        ],
        mainCourse: [
            'Penne Pasta',
            'Apple Sausage Plait',
            'Batter Fried Fish With Cheese Sauce'
        ],
        dessert: [
            'Chocolate Pudding',
            'Brownie with icecream'
        ]
    }
};

// To fetch the names of all items avaialble as a part of the menu, we might need to use a combination of loops
// But a direct use for loop might leave us an with an issue like: TypeError: {} is not iterable


// Let's now convert the menu object into an iterable and use iterator to fetch the names of all items available.
const menu = {
    foodMenu: {
        soups: [
            'Chicken clear soup',
            'Sweet Corn soup'
        ],
        starters: [
            'Dimsum',
            'French Fries',
            'Spring Roll'
        ],
        mainCourse: [
            'Penne Pasta',
            'Apple Sausage Plait',
            'Batter Fried Fish With Cheese Sauce'
        ],
        dessert: [
            'Chocolate Pudding',
            'Brownie with icecream'
        ]
    },
    [Symbol.iterator]() {
        /* Get all the menu items in an array
         * menuItems array looks like:
         * 0: ['Chicken clear soup', 'Sweet Corn soup']
         * 1: ['Dimsum', 'French Fries', 'Spring Roll']
         * 2: ['Penne Pasta', 'Apple Sausage Plait', 'Batter Fried Fish With Cheese Sauce']
         * 3: ['Chocolate Pudding', 'Brownie with icecream']
        */
        const menuItems = Object.values(this.foodMenu);
        
        // Store the current menu item and food item index
        let menuItemIndex = 0;
        let foodItemIndex = 0;
        
        return {
          // Implementation of next()
          next() {
            // foodItems holds to the values according to current menuItemIndex
            const foodItems = menuItems[menuItemIndex];
            
            // moreFoodItemsPresent is false when the foodItems array is exhausted.
            // That is, all items have been consumed.
            const moreFoodItemsPresent = foodItemIndex < foodItems.length;
            if (!moreFoodItemsPresent) {
              // When that happens, we move the menuItems index to the next menu item
              menuItemIndex++;
              // and reset the foodItemIndex to 0 again to get new set of food items
              foodItemIndex = 0;
            }
            
            // Post the travarsal, when all menu items are over, the next function needs to return the value
            const moreMenuItemsPresent = menuItemIndex < menuItems.length;
            if (!moreMenuItemsPresent) {
              // we set the value of done as true, as the travarsal is complete.
              return {
                value: undefined,
                done: true
              };
            }

            // From the current menu item return the food item and incerement the foodItemIndex
            return {
              value: menuItems[menuItemIndex][foodItemIndex++],
              done: false
            }
          }
        };
      }
    };

// Now we can use a simple for loop to fetch all the food items
for (const item of menu) {
    console.log(item);
}