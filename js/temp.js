[
	{
		q: "In a range image, for a specific location of the image, for example (6,6), how many corresponding values are there?",
		a: ["1", "2", "3", "4"],
		c: 0,
	},
	{
		q: "Write a vertex table for a square pyramid",
		a: ["blank", "blank"],
		c: 0,
		interaction: {
			type: "mesh-table",
			table: "vertices",
			rowPrefix: "v",
			columnHeaders: ["X", "Y", "Z"],
			correctTable: [
				["0", "0", "0"],
				["1", "0", "0"],
				["1", "1", "0"],
				["0", "1", "0"],
				["0.5", "0.5", "1"],
			],
		},
	},
	{
		q: "Write a face table for a square pyramid",
		a: ["blank", "blank"],
		c: 0,
		interaction: {
			type: "mesh-table",
			table: "faces",
			rowPrefix: "f",
			columnHeaders: ["Vertex numbers (comma-separated)"],
			correctTable: [
				["V0, V1, V2, V3"],
				["V0, V1, V4"],
				["V1, V2, V4"],
				["V2, V3, V4"],
				["V3, V0, V4"],
			],
		},
	},
	{
		q: "What happens to the gray triangle after 2 iterations of topology refinement of loop subdivision",
		a: [
			"It is subdivided into smaller triangles",
			"It is replaced by a single larger triangle",
			"It is removed from the mesh",
			"It changes into a rectangular face",
		],
		c: 0,
		i: "./assets/quizimages/lau-gfxmidtermpractice/image5.png",
	},
	{
		q: "In Linear Subdivision, what is the new coordinate of vertex (0,0,2) after one iteration of linear subdivision?",
		a: ["(1/3, 1/3, 5/3)", "(1/2, 1/2, 3/2)", "(0, 0, 1)", "(2/3, 2/3, 4/3)"],
		c: 0,
		i: "./assets/quizimages/lau-gfxmidtermpractice/image7.png",
	},
	{
		q: "An OBJ file representing a pentagonal bipyramid contains how many 'v' (vertex) lines and 'f' (face) lines?",
		a: [
			"7 'v' lines and 10 'f' lines",
			"5 'v' lines and 10 'f' lines",
			"7 'v' lines and 12 'f' lines",
			"10 'v' lines and 7 'f' lines",
		],
		c: 0,
	},
	{
		q: "In the 2D rotation matrix [[cos O, -sin O], [sin O, cos O]], what does 'O' represent, and how is the matrix constructed?",
		a: [
			"'O' is the counterclockwise rotation angle, and the columns represent where the unit basis vectors (1,0) and (0,1) land after rotation",
			"'O' is the distance to the origin, and the columns represent the translation offsets along the X and Y axes",
			"'O' is the scale factor, and the columns represent the expansion along the X and Y axes",
			"'O' is the center of projection, and the columns represent the perspective transform parameters",
		],
		c: 0,
	},
	{
		q: "In a 4x4 3D scaling matrix, what do 'sx', 'sy', and 'sz' represent?",
		a: [
			"Scale factors along the X, Y, and Z axes respectively",
			"Translation offsets along the X, Y, and Z axes",
			"Rotation angles around the X, Y, and Z axes",
			"Shearing factors across the principal planes",
		],
		c: 0,
	},
	{
		q: "For a Cubic Bézier curve with control points P0=(0,0,0), P1=(0,2,0), P2=(2,3,0), and P3=(5,3,0), what is the point evaluated at t = 0.25?",
		a: [
			"(0.359, 1.3125, 0)",
			"(0.250, 1.2500, 0)",
			"(0.500, 1.5000, 0)",
			"(1.375, 2.2500, 0)",
		],
		c: 0,
	},
	{
		q: "For a Cubic Bézier curve with control points P0=(0,0,0), P1=(0,2,0), P2=(2,3,0), and P3=(5,3,0), what is the point evaluated at t = 0.50?",
		a: [
			"(1.375, 2.25, 0)",
			"(1.250, 2.50, 0)",
			"(2.500, 2.50, 0)",
			"(2.953, 2.81, 0)",
		],
		c: 0,
	},
	{
		q: "For a Cubic Bézier curve with control points P0=(0,0,0), P1=(0,2,0), P2=(2,3,0), and P3=(5,3,0), what is the point evaluated at t = 0.75?",
		a: [
			"(2.953, 2.8125, 0)",
			"(3.000, 2.5000, 0)",
			"(2.750, 2.7500, 0)",
			"(1.375, 2.2500, 0)",
		],
		c: 0,
	},
	{
		q: "For a parametric torus surface with equations x = (R + r cos v) cos u, y = (R + r cos v) sin u, and z = r sin v, what point (x, y, z) is produced when R = 5, r = 2, u = 0°, and v = 0°?",
		a: ["(7, 0, 0)", "(5, 0, 2)", "(0, 7, 0)", "(5, 0, 0)"],
		c: 0,
	},
	{
		q: "For a parametric torus surface with equations x = (R + r cos v) cos u, y = (R + r cos v) sin u, and z = r sin v, what point (x, y, z) is produced when R = 5, r = 2, u = 90°, and v = 0°?",
		a: ["(0, 7, 0)", "(7, 0, 0)", "(0, 5, 2)", "(5, 7, 0)"],
		c: 0,
	},
	{
		q: "For a parametric torus surface with equations x = (R + r cos v) cos u, y = (R + r cos v) sin u, and z = r sin v, what point (x, y, z) is produced when R = 5, r = 2, u = 0°, and v = 90°?",
		a: ["(5, 0, 2)", "(7, 0, 0)", "(0, 7, 0)", "(5, 2, 0)"],
		c: 0,
	},
];
