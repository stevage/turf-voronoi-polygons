// convert a non-closed polygon in D3 format, to GeoJSON, removing the superfluous "data" attribute.

var l2p = require('@turf/linestring-to-polygon');
require('turf-helpers');

function und3ify (polygon) {
    return l2p(turf.lineString(polygon.slice(0)));
}

/**
 * Takes a FeatureCollection of points, and a bounding box, and returns a FeatureCollection
 * of Voronoi polygons.
 *
 * @module turf/voronoi
 * @category transformation
 * @param {FeatureCollection<Point>} points to find the Voronoi polygons around.
 * @param {Number[]} bbox clipping rectangle, in [minX, minY, maxX, MaxY] order.
 * @returns {FeatureCollection<Polygon} a set of polygons, one per input polygon.
 */
module.exports = function(points, bbox) {   
    var voronoi = require('d3-voronoi').voronoi();
    voronoi.extent([[bbox[0], bbox[1]], [bbox[2], bbox[3]]]);

    var pointsd3 = points.features.map(function(f) { return f.geometry.coordinates; });
    
    var polygonsd3 = voronoi(pointsd3).polygons();
    
    return {
        type: 'FeatureCollection',
        features: polygonsd3.map(und3ify)
    };
};