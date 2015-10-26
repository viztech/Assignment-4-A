# Assignment-4-A

In this assignment, apply the enter/exit/update pattern to draw a simple visualizatio of the top five countries in Olympic medals in the years 1900, 1960, 2012.

## How does the whole thing work?

To get a conceptual lay of the land, look at the raw data and the `parse` function. As you can see, the data set contains a list of countries and their medal counts. These are the countries that have been in the top 5 for at least one of the years among 1900, 1960, and 2012.

Now look at this block of code in `dataLoaded` function:

``
    var year = 1900;
    rows.sort(function(a,b){
        //Note: this is called a "comparator" function
        //which makes sure that the array is sorted from highest to lowest
        return b[year] - a[year];
    });

    //Note: this returns "top5" as a subset of the larger array "rows", containing positions 0,1,2,3,4
    var top5 = rows.slice(0,5);
``

It does two things: first, sort the array of countries in descending order with a "comparator" function based on the "year" that we choose, and then take the top 5.

With that, we create an array of the top 5 country (for a given year), and we can use the enter/exit/update pattern to represent it visually.

## Part 1: Handle click events

As the user clicks one of the three buttons, she toggles between the year 1900, 1960, and 2012. Whenever this happens, we need to do three things:
1. Re-sort the large array of countries, based on the new year;
2. Take the top 5
3. Represent the new "top 5" array visually

The code for tasks 1 and 2 is already written, so you can simply re-adapt it. This needs to happen every time the user clicks on a button. So, where should this code be?

## Part 2: Draw

In the draw function, represent the top 5 countries using the enter/exit/update pattern.

### enter set
The enter set is where you
- Append new DOM elements
- Add event listeners
- Set any initial visual attributes

In this case, the desired DOM structure is as follows
``
<g class='country'>
  <circle> //size of the circle should represent medal count
  <text class="label"> //country label
  <text class="count"> //medal count
</g>
``

These groups should be equally spaced out on the page, ranked from highest medal count to the lowest.
*Hint:* use the `i` parameter of the accessor function

### exit set
Remove the exit set with a transition effect.

### update set
The update set is where you update the attributes of existing DOM elements to reflect the new data joined to it. You should generally not be appending new DOM elements to the update set.

In our particular case, your update set should do the following:
- The `<g>` element's xy position should be updated to reflect the country's new rank.
- The size of the `<circle>` element needs to be updated to reflect the new medal count
` The `<text class="count">` element needs to be updated to reflect the new count as well.

Employ a transition effect to smoothly change these attributes.
*Hint:* you only need to use `.transition()` once for the group. Transitions attached to a parent selection is also attached to a child selection.
