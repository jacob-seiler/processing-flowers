/**

    Jacob Seiler
    4/3/2016
    Flowers in Vase

    - Recreation of drawing
    - Uses beziers and arcs for the vase
    - Flower stems use arcs
    - Flowers and pedals use ellipses

**/

function setup() {
	createCanvas(400, 400);
	frameRate(60);
	angleMode(DEGREES);
}

var x = 8;

function draw() {
	background(255, 251, 168);
	noStroke();

	noFill();
	stroke(46, 143, 91);
	strokeWeight(3);
	point(200, 275);
	point(220, 275);
	point(180, 275);
	arc(x + 225, 275, 50, 258, 180, 268); // Yellow flower stem
	arc(x + 175, 275, 50, 258, 272, 360); // Purple flower stem
	arc(x + 155, 275, 50, 145, 272, 360); // Orange flower stem
	arc(x + 245, 275, 50, 145, 180, 268); // Blue flower stem
	arc(x + 220, 272, 80, 360, 180, 268); // Pink flower stem
	arc(x + 180, 272, 80, 360, 272, 360); // Indigo flower stem

	noStroke();
	fill(255, 132, 0);
	ellipse(x + 136, 210, 40, 15); // Orange flower pedal
	ellipse(x + 172, 210, 40, 15); // Orange flower pedal
	ellipse(x + 155, 230, 15, 40); // Orange flower pedal
	ellipse(x + 155, 195, 15, 40); // Orange flower pedal
	fill(46, 143, 91);
	ellipse(x + 155, 210, 15, 15); // Orange flower center

	fill(87, 124, 235);
	ellipse(x + 231, 200, 40, 15); // Blue flower pedal
	ellipse(x + 267, 200, 40, 15); // Blue flower pedal
	ellipse(x + 250, 220, 15, 40); // Blue flower pedal
	ellipse(x + 250, 185, 15, 40); // Blue flower pedal
	fill(46, 143, 91);
	ellipse(x + 250, 200, 15, 15); // Blue flower center

	fill(148, 35, 109);
	ellipse(x + 151, 150, 40, 12); // Purple flower pedal
	ellipse(x + 187, 150, 40, 12); // Purple flower pedal
	ellipse(x + 170, 170, 12, 40); // Purple flower pedal
	ellipse(x + 170, 135, 12, 40); // Purple flower pedal
	fill(46, 143, 91);
	ellipse(x + 170, 150, 15, 15); // Purple flower center

	fill(255, 199, 31);
	ellipse(x + 220, 145, 40, 12); // Yellow flower pedal
	ellipse(x + 256, 145, 40, 12); // Yellow flower pedal
	ellipse(x + 239, 165, 12, 40); // Yellow flower pedal
	ellipse(x + 239, 130, 12, 40); // Yellow flower pedal
	fill(46, 143, 91);
	ellipse(x + 239, 145, 15, 15); // Yellow flower center

	fill(173, 203, 255);
	ellipse(x + 161, 90, 40, 10); // Indigo flower pedal
	ellipse(x + 197, 90, 40, 10); // Indigo flower pedal
	ellipse(x + 180, 110, 10, 40); // Indigo flower pedal
	ellipse(x + 180, 75, 10, 40); // Indigo flower pedal
	fill(46, 143, 91);
	ellipse(x + 180, 90, 15, 15); // Indigo flower center

	fill(255, 176, 223);
	ellipse(x + 211, 85, 40, 10); // Pink flower pedal
	ellipse(x + 247, 85, 40, 10); // Pink flower pedal
	ellipse(x + 230, 105, 10, 40); // Pink flower pedal
	ellipse(x + 230, 70, 10, 40); // Pink flower pedal
	fill(46, 143, 91);
	ellipse(x + 230, 85, 15, 15); // Pink flower center

	fill(46, 143, 91);
	ellipse(200, 383, 200, 50); // The shadow

	fill(19, 89, 194);
	rect(162, 312, 90, 99, 231);
	rect(184, 265, 49, 61);
	rect(139, 345, 39, 24, 200);
	rect(239, 345, 39, 24, 200);
	rect(235, 350, 42, 24, 200);
	rect(142, 350, 42, 24, 200);
	rect(159, 356, 43, 42, 100);
	rect(139, 342, 39, 20, 50);
	ellipse(166, 354, 50, 50);
	ellipse(191, 332, 50, 52);
	rect(153, 327, 20, 20, 300);
	rect(161, 320, 25, 20, 300);
	rect(145, 360, 25, 20, 300);
	rect(155, 370, 25, 20, 300);
	rect(239, 370, 25, 20, 300);
	rect(243, 368, 25, 20, 300);
	triangle(274, 346, 232, 303, 223, 359);
	triangle(140, 346, 187, 303, 185, 359);
	bezier(235, 409, 350, 330, 193, 334, 244, 264);
	line(168, 264, 244, 264);
	bezier(172, 399, 76, 325, 229, 330, 168, 264);
	fill(255, 251, 168);
	rect(233, 303, 25, -50);
	rect(158, 306, 25, -50);
	triangle(150, 336, 181, 270, 185, 305);
	triangle(267, 336, 236, 270, 233, 305);
}
