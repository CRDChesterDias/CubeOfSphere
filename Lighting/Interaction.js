/*****
 * @author Zachary Wartell
 *
 * @version 1.x-5
 *
 *****/

/**
 * @author Zachary Wartell using Code Listing 10.1 from Matsuda, Kouichi; Lea, Rodger (see REFERENCE)
 * @description
 * This functions initializes several event handlers that implement a simple mouse user interface for 3D object rotation.
 *
 * The event handlers detect mouse motion when the left-button is held down.   The xy cursor
 * motion is used to compute and update two rotation angles stored in Array "currentAngle" . The values are:
 *
 *      [x-axis rotation angle, y-axis rotation angle]
 *
 * After mouseRotation_initEventHandlers is called the rotation angles stored in "currentAngle" will be continuously updated.
 * x-axis rotation is clamps to [-90,90] degrees. y-axis rotation is allowed to have arbitrary value.
 *
 *
 * @param {Object} canvas - HTML 5 Canvas
 * @param {Number[]} currentAngle - Array of 2 numbers contain x-axis and y-axis rotation angles
 **/
function mouseRotation_initEventHandlers(canvas, currentAngle) {
}
