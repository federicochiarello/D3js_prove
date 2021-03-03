var svg = d3.select("svg");

[{ height: 10, width: 10 }, { height: 20, width: 20 }],

svg
    .append("rect")
    .attr("height", 20)
    .attr("width", 20)
    .style("fill", "red");

