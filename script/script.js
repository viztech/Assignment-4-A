var margin = {t:50,r:125,b:50,l:125};
var width = document.getElementById('plot') - margin.r - margin.l,
    height = document.getElementById('plot') - margin.t - margin.b;

var canvas = d3.select('.plot')
    .append('svg')
    .attr('width',width+margin.r+margin.l)
    .attr('height',height + margin.t + margin.b)
    .append('g')
    .attr('class','canvas')
    .attr('transform','translate('+margin.l+','+margin.t+')');

//Scale for the size of the circles
var scaleR = d3.scale.sqrt().domain([5,100]).range([5,120]);


d3.csv('data/olympic_medal_count.csv', parse, dataLoaded);

function dataLoaded(err,rows){

    var year = 1900;
    rows.sort(function(a,b){
        //Note: this is called a "comparator" function
        //which makes sure that the array is sorted from highest to lowest
        return b[year] - a[year];
    });

    //Note: this returns "top5" as a subset of the larger array "rows", containing positions 0,1,2,3,4
    var top5 = rows.slice(0,5);

    //Call the draw function
    draw(top5, year);

    //TODO: fill out this function
    d3.selectAll('.btn-group .year').on('click',function(){

        var year = d3.select(this).id();
        console.log("Show top 5 medal count for: " + year);
    });
}

function draw(rows, year){
    //TODO: Complete drawing function, accounting for enter, exit, update
    //Note that this function requires two parameters
    //The second parameter, "year", determines which one of the three years (1900,1960,2012) to draw the medal counts based on
}

function parse(row){
    //@param row is each unparsed row from the dataset
    return {
        country: row['Country'],
        1900: +row['1900'],
        1960: +row['1960'],
        2012: +row['2012']
    };
}