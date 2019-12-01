/**
 * @author Zachary Wartell && ..
 * @version 1.x-9
 *
 * @file Sphere.js contains routines for tessellation of a sphere
 *
 * Students are given a initial set of classes and functions are expected to extend these and add
 * additional functions to this file as needed.
 */


/**
 * @author ..
 * @description generate vertices that tessellate a sphere of radius 1.
 *
 * @param {Number} divisions number of sub-divisions with which to create the tessellated sphere
 * @param {Number[][]} positions Array of x,y,z positions of vertices of triangles that tessellate a unit sphere
 * @param {Number[][]} indices Array of triples of integer indices into "positions" where each triple specifies a triangle on the sphere
 */
function generate_sphere(divisions,positions, indices) {
    /**
     @todo [STUDENT] REQUIRED: Tessellation:  Use parametric equation of a sphere using spherical coordinates as the
     two parameters of the equation to generate points on the sphere, see http://mathworld.wolfram.com/Sphere.html.

     The easiest approach is to create the indices assuming rendering will be done with GL_TRIANGLES.
     */
}
