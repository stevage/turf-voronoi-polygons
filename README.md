## Turf-voronoi-polygons

This is an unofficial module for the [Turf](https://turfjs.com) geospatial library, to generate Voronoi polygons from a set of points. It is a thin wrapper around the d3-voronoi library.

Definition: The Voronoi polygon for a point covers the area which is closer to this point than to any other. 

https://en.wikipedia.org/wiki/Voronoi_diagram

### Usage

```
var turf = require('turf');

var bbox = [143, -37.5, 145, -36];
var points = turf.random('points', 3000, { bbox: bbox });

turf.voronoi = require('turf-voronoi-polygons');
var polygons = turf.voronoi(points, bbox);
```