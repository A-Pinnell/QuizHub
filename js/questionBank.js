window.questionBank = {
	CompArch: {
		quiz1: [
			// =========================
			// BINARY NUMBERS
			// =========================

			{
				q: "What digits are used in the binary number system?",
				a: ["1 and 2", "0 and 1", "0 through 9", "A through F"],
				c: 1,
			},
			{
				q: "In binary, what value represents TRUE?",
				a: ["0", "1", "2", "10"],
				c: 1,
			},
			{
				q: "In binary, what value represents FALSE?",
				a: ["0", "1", "2", "-1"],
				c: 0,
			},
			{
				q: "What does MSB stand for?",
				a: [
					"Maximum Storage Bit",
					"Most Significant Bit",
					"Memory System Byte",
					"Main Significant Byte",
				],
				c: 1,
			},
			{
				q: "What does LSB stand for?",
				a: [
					"Least Significant Bit",
					"Last Storage Byte",
					"Logical System Bit",
					"Lowest Storage Block",
				],
				c: 0,
			},
			{
				q: "What does each binary digit represent?",
				a: ["A power of 2", "A power of 10", "A power of 16", "A power of 8"],
				c: 0,
			},
			{
				q: "A binary number is the sum of what?",
				a: ["Powers of 10", "Powers of 8", "Powers of 2", "Powers of 16"],
				c: 2,
			},
			{ q: "What is 2^0 equal to?", a: ["0", "1", "2", "10"], c: 1 },
			{ q: "What is 2^1 equal to?", a: ["1", "2", "4", "8"], c: 1 },
			{ q: "What is 2^2 equal to?", a: ["2", "4", "8", "16"], c: 1 },
			{ q: "What is 2^3 equal to?", a: ["4", "8", "16", "32"], c: 1 },
			{ q: "What is 2^4 equal to?", a: ["8", "16", "32", "64"], c: 1 },
			{ q: "What is 2^5 equal to?", a: ["16", "32", "64", "128"], c: 1 },
			{ q: "What is 2^6 equal to?", a: ["32", "64", "128", "256"], c: 1 },
			{ q: "What is 2^7 equal to?", a: ["64", "128", "256", "512"], c: 1 },
			{ q: "What is 2^8 equal to?", a: ["128", "256", "512", "1024"], c: 1 },
			{ q: "What is 2^9 equal to?", a: ["256", "512", "1024", "2048"], c: 1 },
			{ q: "What is 2^10 equal to?", a: ["512", "1024", "2048", "4096"], c: 1 },
			{
				q: "What is 2^11 equal to?",
				a: ["1024", "2048", "4096", "8192"],
				c: 1,
			},
			{
				q: "What is 2^12 equal to?",
				a: ["2048", "4096", "8192", "16384"],
				c: 1,
			},
			{
				q: "What is 2^13 equal to?",
				a: ["4096", "8192", "16384", "32768"],
				c: 1,
			},
			{
				q: "What is 2^14 equal to?",
				a: ["8192", "16384", "32768", "65536"],
				c: 1,
			},
			{
				q: "What is 2^15 equal to?",
				a: ["16384", "32768", "65536", "131072"],
				c: 1,
			},
			{
				q: "What is the decimal value of binary 00001001?",
				a: ["7", "8", "9", "10"],
				c: 2,
			},
			{
				q: "Which binary digit is located at the 2^0 position?",
				a: ["MSB", "LSB", "Middle bit", "Sign bit"],
				c: 1,
			},
			{
				q: "In weighted position notation, what is multiplied by a power of 2?",
				a: [
					"The binary digit",
					"The decimal point",
					"The hexadecimal digit",
					"The carry",
				],
				c: 0,
			},
			{
				q: "What is the first step when converting an unsigned decimal integer to binary?",
				a: ["Multiply by 2", "Divide by 2", "Divide by 16", "Add 1"],
				c: 1,
			},
			{
				q: "When repeatedly dividing a decimal number by 2, what becomes a binary digit?",
				a: ["The quotient", "The remainder", "The divisor", "The product"],
				c: 1,
			},
			{
				q: "How do you read the remainders when converting decimal to binary?",
				a: [
					"Left to right from first remainder",
					"Right to left",
					"Only the final remainder",
					"In alphabetical order",
				],
				c: 1,
			},
			{
				q: "What is decimal 37 in binary?",
				a: ["100101", "101001", "110001", "100111"],
				c: 0,
			},
			{
				q: "What is the binary representation of decimal 1?",
				a: ["0", "1", "10", "11"],
				c: 1,
			},
			{
				q: "What is the binary representation of decimal 2?",
				a: ["1", "10", "11", "100"],
				c: 1,
			},
			{
				q: "What is the binary representation of decimal 4?",
				a: ["10", "100", "101", "110"],
				c: 1,
			},
			{
				q: "What is the binary representation of decimal 8?",
				a: ["100", "1000", "1010", "1111"],
				c: 1,
			},
			{
				q: "When performing binary addition, which bit is processed first?",
				a: ["MSB", "Middle bit", "LSB", "Sign bit"],
				c: 2,
			},
			{
				q: "What must be included when adding binary digits?",
				a: [
					"Only the digits",
					"The carry if present",
					"Only the MSB",
					"The decimal equivalent",
				],
				c: 1,
			},

			// =========================
			// INTEGER STORAGE
			// =========================

			{
				q: "What is the range of an unsigned byte?",
				a: ["0 to 127", "-128 to 127", "0 to 255", "0 to 65,535"],
				c: 2,
			},
			{
				q: "How many bits are in an unsigned byte?",
				a: ["4", "8", "16", "32"],
				c: 1,
			},
			{
				q: "What is the maximum value of an unsigned byte?",
				a: ["127", "128", "255", "256"],
				c: 2,
			},
			{
				q: "What is the range of an unsigned word?",
				a: ["0 to 255", "0 to 65,535", "-32768 to 32767", "0 to 4,294,967,295"],
				c: 1,
			},
			{
				q: "How many bits are in an unsigned word?",
				a: ["8", "16", "32", "64"],
				c: 1,
			},
			{
				q: "What is the maximum value of an unsigned word?",
				a: ["255", "32,767", "65,535", "65,536"],
				c: 2,
			},
			{
				q: "What is the range of an unsigned doubleword?",
				a: [
					"0 to 65,535",
					"0 to 4,294,967,295",
					"-2^31 to 2^31-1",
					"0 to 18,466,744,073,709,551,615",
				],
				c: 1,
			},
			{
				q: "How many bits are in an unsigned doubleword?",
				a: ["8", "16", "32", "64"],
				c: 2,
			},
			{
				q: "How many bits are in an unsigned quadword?",
				a: ["16", "32", "64", "128"],
				c: 2,
			},
			{
				q: "What is the maximum value of an unsigned quadword?",
				a: ["2^32 - 1", "2^48 - 1", "2^64 - 1", "2^128 - 1"],
				c: 2,
			},

			// =========================
			// HEXADECIMAL
			// =========================

			{
				q: "What number system uses digits 0-9 and letters A-F?",
				a: ["Binary", "Decimal", "Hexadecimal", "Octal"],
				c: 2,
			},
			{
				q: "What is hexadecimal A equal to in decimal?",
				a: ["8", "9", "10", "11"],
				c: 2,
			},
			{
				q: "What is hexadecimal B equal to in decimal?",
				a: ["9", "10", "11", "12"],
				c: 2,
			},
			{
				q: "What is hexadecimal C equal to in decimal?",
				a: ["10", "11", "12", "13"],
				c: 2,
			},
			{
				q: "What is hexadecimal D equal to in decimal?",
				a: ["11", "12", "13", "14"],
				c: 2,
			},
			{
				q: "What is hexadecimal E equal to in decimal?",
				a: ["12", "13", "14", "15"],
				c: 2,
			},
			{
				q: "What is hexadecimal F equal to in decimal?",
				a: ["13", "14", "15", "16"],
				c: 2,
			},
			{
				q: "How many binary bits correspond to one hexadecimal digit?",
				a: ["2", "4", "8", "16"],
				c: 1,
			},
			{
				q: "What is binary 0000 in hexadecimal?",
				a: ["0", "1", "8", "F"],
				c: 0,
			},
			{
				q: "What is binary 0001 in hexadecimal?",
				a: ["0", "1", "2", "A"],
				c: 1,
			},
			{
				q: "What is binary 0010 in hexadecimal?",
				a: ["1", "2", "3", "B"],
				c: 1,
			},
			{
				q: "What is binary 0011 in hexadecimal?",
				a: ["2", "3", "4", "C"],
				c: 1,
			},
			{
				q: "What is binary 0100 in hexadecimal?",
				a: ["3", "4", "5", "D"],
				c: 1,
			},
			{
				q: "What is binary 0101 in hexadecimal?",
				a: ["4", "5", "6", "E"],
				c: 1,
			},
			{
				q: "What is binary 0110 in hexadecimal?",
				a: ["5", "6", "7", "F"],
				c: 1,
			},
			{
				q: "What is binary 0111 in hexadecimal?",
				a: ["6", "7", "8", "9"],
				c: 1,
			},
			{
				q: "What is binary 1000 in hexadecimal?",
				a: ["7", "8", "9", "A"],
				c: 1,
			},
			{
				q: "What is binary 1001 in hexadecimal?",
				a: ["8", "9", "A", "B"],
				c: 1,
			},
			{
				q: "What is binary 1010 in hexadecimal?",
				a: ["9", "A", "B", "C"],
				c: 1,
			},
			{
				q: "What is binary 1011 in hexadecimal?",
				a: ["A", "B", "C", "D"],
				c: 1,
			},
			{
				q: "What is binary 1100 in hexadecimal?",
				a: ["B", "C", "D", "E"],
				c: 1,
			},
			{
				q: "What is binary 1101 in hexadecimal?",
				a: ["C", "D", "E", "F"],
				c: 1,
			},
			{
				q: "What is binary 1110 in hexadecimal?",
				a: ["D", "E", "F", "10"],
				c: 1,
			},
			{
				q: "What is binary 1111 in hexadecimal?",
				a: ["E", "F", "10", "11"],
				c: 1,
			},
			{
				q: "How do you convert binary to hexadecimal?",
				a: [
					"Group bits into groups of 2",
					"Group bits into groups of 4",
					"Group bits into groups of 8",
					"Divide by 10",
				],
				c: 1,
			},
			{
				q: "What is binary 0001 0110 1010 0111 1001 0100 in hexadecimal?",
				a: ["16A794", "1A6794", "1A679F", "16A974"],
				c: 0,
			},
			{
				q: "When converting hexadecimal to decimal, what base is used for positional powers?",
				a: ["2", "8", "10", "16"],
				c: 3,
			},
			{ q: "What is 16^0 equal to?", a: ["0", "1", "16", "256"], c: 1 },
			{ q: "What is 16^1 equal to?", a: ["1", "8", "16", "32"], c: 2 },
			{ q: "What is 16^2 equal to?", a: ["16", "128", "256", "512"], c: 2 },
			{
				q: "What is 16^3 equal to?",
				a: ["256", "4096", "65,536", "1,048,576"],
				c: 1,
			},
			{
				q: "What is hexadecimal 1234 in decimal?",
				a: ["1,234", "4,660", "4,096", "5,120"],
				c: 1,
			},
			{
				q: "What is hexadecimal 3BA4 in decimal?",
				a: ["15,268", "13,824", "16,384", "12,348"],
				c: 0,
			},
			{
				q: "What is decimal 422 in hexadecimal?",
				a: ["1A6", "1B6", "2A6", "1A4"],
				c: 0,
			},
			{
				q: "When converting decimal to hexadecimal, what number is repeatedly divided by?",
				a: ["2", "8", "10", "16"],
				c: 3,
			},
			{
				q: "In hexadecimal addition, what becomes the carry value?",
				a: [
					"The remainder",
					"The quotient",
					"The divisor",
					"The original digit",
				],
				c: 1,
			},
			{
				q: "In hexadecimal addition, what becomes the sum digit?",
				a: ["The quotient", "The divisor", "The remainder", "The carry"],
				c: 2,
			},
			{
				q: "When a borrow is required during hexadecimal subtraction, what is added to the current digit?",
				a: ["2", "8", "10", "16"],
				c: 3,
			},

			// =========================
			// SIGNED INTEGERS
			// =========================

			{
				q: "What does the highest bit indicate for a signed integer?",
				a: ["The magnitude only", "The sign", "The carry", "The base"],
				c: 1,
			},
			{
				q: "What does a highest bit of 1 indicate in a signed integer?",
				a: ["Positive", "Negative", "Zero", "Overflow"],
				c: 1,
			},
			{
				q: "What does a highest bit of 0 indicate in a signed integer?",
				a: ["Negative", "Positive", "Hexadecimal", "Overflow"],
				c: 1,
			},
			{
				q: "For a signed hexadecimal integer, what indicates a negative value?",
				a: [
					"Highest digit is less than 8",
					"Highest digit is greater than 7",
					"Lowest digit is 0",
					"Lowest digit is F",
				],
				c: 1,
			},
			{
				q: "Which hexadecimal value is negative according to the notes?",
				a: ["2A", "4F", "7C", "8A"],
				c: 3,
			},
			{
				q: "Which hexadecimal value is negative according to the notes?",
				a: ["1A", "5C", "C5", "6D"],
				c: 2,
			},
			{
				q: "Which hexadecimal value is positive according to the sign rule?",
				a: ["8A", "C5", "A2", "7D"],
				c: 3,
			},
			{
				q: "How are negative numbers stored according to the notes?",
				a: [
					"Sign-magnitude only",
					"Two's complement notation",
					"Hexadecimal only",
					"Unsigned notation",
				],
				c: 1,
			},
			{
				q: "What does two's complement represent?",
				a: [
					"A multiplication",
					"An additive inverse",
					"A hexadecimal conversion",
					"A logical AND",
				],
				c: 1,
			},
			{
				q: "What is the first step in forming a two's complement value?",
				a: ["Add 1", "Reverse the bits", "Multiply by 2", "Remove the MSB"],
				c: 1,
			},
			{
				q: "What is the second step in forming a two's complement value?",
				a: ["Divide by 2", "Reverse the bits again", "Add 1", "Subtract 1"],
				c: 2,
			},
			{
				q: "What is the two's complement of 00000001?",
				a: ["11111110", "11111111", "00000010", "10000001"],
				c: 1,
			},
			{
				q: "What is the result of 00000001 + 11111111 in an 8-bit calculation?",
				a: ["00000000", "00000001", "11111110", "11111111"],
				c: 0,
			},
			{
				q: "How is binary subtraction A - B performed using two's complement?",
				a: [
					"Multiply A and B to calculate their product instead of their difference",
					"Convert B to two's complement and add it to A",
					"Convert A to hexadecimal and leave B in its original binary form",
					"Subtract only the most significant bits and ignore the remaining bits",
				],
				c: 1,
			},
			{
				q: "What is the two's complement of 00000011?",
				a: ["11111100", "11111101", "00000010", "10000011"],
				c: 1,
			},
			{
				q: "What is 00001100 - 00000011?",
				a: ["00000111", "00001001", "00001111", "11111001"],
				c: 1,
			},
			{
				q: "What happens to the extra carry in an 8-bit two's complement subtraction?",
				a: [
					"It becomes the MSB",
					"It is discarded",
					"It is added again",
					"It becomes zero only if negative",
				],
				c: 1,
			},
			{
				q: "What is the signed byte range?",
				a: ["0 to 255", "-127 to 127", "-128 to +127", "-256 to +255"],
				c: 2,
			},
			{
				q: "What is the signed word range?",
				a: [
					"-255 to 255",
					"-32768 to +32767",
					"0 to 65535",
					"-65536 to +65536",
				],
				c: 1,
			},
			{
				q: "What is the signed doubleword range?",
				a: [
					"-2^16 to 2^16-1",
					"-2^31 to +2^31-1",
					"0 to 2^32-1",
					"-2^64 to 2^64-1",
				],
				c: 1,
			},
			{
				q: "How many bits are available for the magnitude of an 8-bit signed integer?",
				a: ["8", "7", "6", "4"],
				c: 1,
			},
			{
				q: "Why is the signed integer range smaller than the unsigned range?",
				a: [
					"One bit is reserved for the sign",
					"The MSB is removed",
					"Hexadecimal is used",
					"The LSB is ignored",
				],
				c: 0,
			},

			// =========================
			// BOOLEAN ALGEBRA
			// =========================

			{
				q: "What mathematical discipline is used to analyze digital circuitry?",
				a: ["Calculus", "Boolean algebra", "Linear algebra", "Statistics"],
				c: 1,
			},
			{
				q: "Who is Boolean algebra associated with?",
				a: [
					"George Boole",
					"Alan Turing",
					"Charles Babbage",
					"John von Neumann",
				],
				c: 0,
			},
			{
				q: "What values can a Boolean variable take?",
				a: ["0 and 1", "1 and 2", "0 through 9", "A through F"],
				c: 0,
			},
			{
				q: "In Boolean algebra, what does 1 represent?",
				a: ["FALSE", "TRUE", "UNKNOWN", "ERROR"],
				c: 1,
			},
			{
				q: "In Boolean algebra, what does 0 represent?",
				a: ["TRUE", "FALSE", "HIGH ONLY", "ERROR"],
				c: 1,
			},
			{
				q: "Which is a basic Boolean operation?",
				a: ["NOT", "ADD", "MULTIPLY", "DIVIDE"],
				c: 0,
			},
			{
				q: "Which set contains the three basic Boolean operations?",
				a: [
					"ADD, SUBTRACT, MULTIPLY",
					"NOT, AND, OR",
					"XOR, ADD, DIVIDE",
					"NAND, NOR, ADD",
				],
				c: 1,
			},
			{
				q: "What does the NOT operation do?",
				a: [
					"Adds two values",
					"Inverts a Boolean value",
					"Multiplies two values",
					"Stores a value",
				],
				c: 1,
			},
			{ q: "What is NOT 0?", a: ["0", "1", "2", "10"], c: 1 },
			{ q: "What is NOT 1?", a: ["0", "1", "2", "-1"], c: 0 },
			{ q: "What is the result of 0 AND 0?", a: ["0", "1", "2", "TRUE"], c: 0 },
			{
				q: "What is the result of 0 AND 1?",
				a: ["0", "1", "TRUE", "UNDEFINED"],
				c: 0,
			},
			{
				q: "What is the result of 1 AND 0?",
				a: ["0", "1", "TRUE", "UNDEFINED"],
				c: 0,
			},
			{
				q: "What is the result of 1 AND 1?",
				a: ["0", "1", "2", "FALSE"],
				c: 1,
			},
			{ q: "What is the result of 0 OR 0?", a: ["0", "1", "TRUE", "2"], c: 0 },
			{ q: "What is the result of 0 OR 1?", a: ["0", "1", "FALSE", "2"], c: 1 },
			{ q: "What is the result of 1 OR 0?", a: ["0", "1", "FALSE", "2"], c: 1 },
			{ q: "What is the result of 1 OR 1?", a: ["0", "1", "2", "FALSE"], c: 1 },
			{
				q: "What does the expression ¬X represent?",
				a: ["X AND X", "NOT X", "X OR X", "X (X OR X)"],
				c: 1,
			},
			{
				q: "What does X ^ Y represent?",
				a: ["X OR Y", "X AND Y", "NOT X", "X (X OR Y)"],
				c: 1,
			},
			{
				q: "What does X v Y represent?",
				a: ["X OR Y", "X AND Y", "NOT Y", "X (X OR Y)"],
				c: 0,
			},
			{
				q: "In the expression ¬X v Y, which operation occurs first?",
				a: ["OR", "NOT", "AND", "XOR"],
				c: 1,
			},
			{
				q: "In the expression X v (Y ^ Z), which operation is performed first?",
				a: ["OR", "AND", "NOT", "None"],
				c: 1,
			},
			{
				q: "In the expression ¬(X v Y), which operation is performed first?",
				a: ["NOT", "OR", "AND", "XOR"],
				c: 1,
			},
			{
				q: "What is a truth table used to show?",
				a: [
					"Only the output values, without showing which inputs produce them",
					"All inputs and outputs of a Boolean function",
					"Only the possible input values, without listing any outputs",
					"The amount of memory required to store a Boolean function",
				],
				c: 1,
			},
			{
				q: "A Boolean function has one or more Boolean inputs and returns what?",
				a: [
					"A single Boolean output",
					"A decimal output",
					"A hexadecimal output",
					"A memory address",
				],
				c: 0,
			},

			// =========================
			// LOGIC GATES
			// =========================

			{
				q: "What is the fundamental building block of digital logic circuits?",
				a: ["Register", "Gate", "Counter", "Memory chip"],
				c: 1,
			},
			{
				q: "What do logic gates implement?",
				a: [
					"Boolean functions",
					"Decimal division",
					"Memory addresses",
					"File storage",
				],
				c: 0,
			},
			{
				q: "Which is NOT listed as a basic digital logic gate?",
				a: ["AND", "OR", "NOT", "ADD"],
				c: 3,
			},
			{
				q: "Which gate inverts its input?",
				a: ["AND", "OR", "NOT", "XOR"],
				c: 2,
			},
			{
				q: "Which gate outputs 1 only when both inputs are 1?",
				a: ["OR", "AND", "NOT", "NOR"],
				c: 1,
			},
			{
				q: "Which gate outputs 1 when at least one input is 1?",
				a: ["AND", "OR", "NOT", "NAND"],
				c: 1,
			},
			{
				q: "Which gate is listed among the basic gates along with AND, OR, and NOT?",
				a: ["NAND", "ADD", "DIV", "SHIFT"],
				c: 0,
			},
			{
				q: "Which other gate is listed among the basic digital logic gates?",
				a: ["NOR", "SUM", "COMPARE", "STORE"],
				c: 0,
			},
			{
				q: "What is the output of a NOT gate when its input is TRUE?",
				a: ["TRUE", "FALSE", "Both", "Undefined"],
				c: 1,
			},
			{
				q: "What is the output of an AND gate when either input is FALSE?",
				a: ["TRUE", "FALSE", "Depends on the MSB", "Undefined"],
				c: 1,
			},
			{
				q: "What is the output of an OR gate when either input is TRUE?",
				a: ["TRUE", "FALSE", "Always 0", "Undefined"],
				c: 0,
			},

			// =========================
			// COMBINATIONAL CIRCUITS
			// =========================

			{
				q: "What is a combinational circuit?",
				a: [
					"A circuit whose output depends only on its current input",
					"A circuit whose output depends only on past inputs",
					"A memory device",
					"A counter",
				],
				c: 0,
			},
			{
				q: "What does a combinational circuit generally have?",
				a: [
					"n binary inputs and m binary outputs",
					"Exactly one binary input, regardless of the circuit's purpose",
					"Exactly one binary output, regardless of how many inputs it has",
					"No input signals, with outputs determined by stored state",
				],
				c: 0,
			},
			{
				q: "What happens after an input appears in a combinational circuit?",
				a: [
					"The output appears after only gate delays",
					"The output waits for stored state",
					"The circuit always resets",
					"The output appears after a full clock cycle",
				],
				c: 0,
			},
			{
				q: "How many possible combinations are there for n binary inputs?",
				a: ["n", "2n", "2^n", "n^2"],
				c: 2,
			},
			{
				q: "How can a combinational circuit be defined?",
				a: [
					"Truth table, graphical symbols, or Boolean equations",
					"Only as source code written in a programming language",
					"Only as hexadecimal values without a circuit representation",
					"Only as a register that stores the circuit's previous output",
				],
				c: 0,
			},
			{
				q: "What does a truth table list for a combinational circuit?",
				a: [
					"Each possible input combination and outputs",
					"Only the input combination with the greatest numeric value",
					"Only the smallest output value produced by the circuit",
					"Only the clock pulses that control the circuit's behavior",
				],
				c: 0,
			},
			{
				q: "What does a graphical representation of a combinational circuit show?",
				a: [
					"The interconnected layout of gates",
					"Only the truth table",
					"Only memory contents",
					"The CPU temperature",
				],
				c: 0,
			},
			{
				q: "How are outputs represented in Boolean-equation form?",
				a: [
					"As Boolean functions of input signals",
					"As decimal memory addresses assigned to each output signal",
					"As hexadecimal strings that encode the circuit's physical layout",
					"As clock speeds that determine when each output changes",
				],
				c: 0,
			},
			{
				q: "What is a sum-of-products implementation based on?",
				a: [
					"Input combinations that cause the function to be 1",
					"Only the input combinations that cause the function to produce 0",
					"The number of registers used to store the circuit's state",
					"The number of clock cycles required to evaluate the function",
				],
				c: 0,
			},
			{
				q: "In a sum-of-products implementation, what happens if any listed input combination occurs?",
				a: [
					"The result is 1",
					"The result is always 0",
					"The circuit resets",
					"The output becomes hexadecimal",
				],
				c: 0,
			},

			// =========================
			// MULTIPLEXERS
			// =========================

			{
				q: "What does a multiplexer connect?",
				a: [
					"Multiple inputs to a single output",
					"One input to multiple CPUs",
					"Multiple outputs to one input only",
					"Registers to clocks",
				],
				c: 0,
			},
			{
				q: "What does a multiplexer select?",
				a: [
					"One input to pass to the output",
					"Every input simultaneously",
					"Only the highest bit",
					"Only the lowest bit",
				],
				c: 0,
			},
			{
				q: "How many input lines does a 4-to-1 multiplexer have?",
				a: ["1", "2", "4", "8"],
				c: 2,
			},
			{
				q: "How many output lines does a 4-to-1 multiplexer have?",
				a: ["1", "2", "4", "8"],
				c: 0,
			},
			{
				q: "What are the four inputs of the 4-to-1 multiplexer called?",
				a: ["A, B, C, D", "D0, D1, D2, D3", "S0, S1, S2, S3", "Q0, Q1, Q2, Q3"],
				c: 1,
			},
			{
				q: "How many select lines are required to select one of four inputs?",
				a: ["1", "2", "3", "4"],
				c: 1,
			},
			{
				q: "What determines which multiplexer input reaches the output?",
				a: [
					"The select lines",
					"The MSB only",
					"The clock frequency",
					"The carry bit",
				],
				c: 0,
			},
			{
				q: "In the notes, what can be connected to the output line of a multiplexer?",
				a: [
					"The program counter",
					"Only the ALU",
					"Only RAM",
					"The clock generator",
				],
				c: 0,
			},
			{
				q: "Why are multiple multiplexers used for a multi-bit value?",
				a: [
					"One is needed per bit",
					"One is needed per input only",
					"One is needed per CPU",
					"One is needed per instruction",
				],
				c: 0,
			},
			{
				q: "The multiplexer example discusses how many bits of addresses?",
				a: ["4", "8", "16", "32"],
				c: 2,
			},

			// =========================
			// DECODERS
			// =========================

			{
				q: "What is a decoder?",
				a: [
					"A combinational circuit with multiple outputs where one is asserted based on the inputs",
					"A storage device that retains data even when its inputs change",
					"A flip-flop that stores one bit until the next clock pulse",
					"A counter that increments its stored value after each clock pulse",
				],
				c: 0,
			},
			{
				q: "How many outputs does a decoder with n inputs have?",
				a: ["n", "n^2", "2^n", "2n"],
				c: 2,
			},
			{
				q: "How many outputs does a decoder with 3 inputs have?",
				a: ["3", "6", "8", "9"],
				c: 2,
			},
			{
				q: "How many inputs does an 8-output decoder have?",
				a: ["2", "3", "4", "8"],
				c: 1,
			},
			{
				q: "How many outputs are normally asserted by a decoder at one time?",
				a: ["All of them", "Half of them", "Only one", "None"],
				c: 2,
			},
			{
				q: "What is one use of decoders in digital computers?",
				a: [
					"Address decoding",
					"Floating-point multiplication",
					"File compression",
					"Graphics rendering",
				],
				c: 0,
			},
			{
				q: "In the memory example, how large is the unified memory space?",
				a: ["1K-byte", "4K-byte", "8K-byte", "16K-byte"],
				c: 0,
			},
			{
				q: "How many bits wide are the RAM chips in the example?",
				a: ["2 bits", "4 bits", "8 bits", "16 bits"],
				c: 1,
			},
			{
				q: "How many address lines does each RAM chip require in the example?",
				a: ["4", "8", "10", "16"],
				c: 1,
			},
			{
				q: "How many bits are in the address used in the example?",
				a: ["4", "8", "10", "16"],
				c: 2,
			},
			{
				q: "Which bits supply the address lines to each RAM chip?",
				a: [
					"The lower-order 8 bits",
					"The higher-order 8 bits",
					"The lower-order 2 bits",
					"All bits equally",
				],
				c: 0,
			},
			{
				q: "What are the higher-order 2 address bits used for?",
				a: [
					"Selecting one of four RAM chips",
					"Selecting one of eight RAM chips",
					"Storing data",
					"Performing arithmetic",
				],
				c: 0,
			},
			{
				q: "What type of decoder selects one of four RAM chips?",
				a: ["1-to-4", "2-to-4", "4-to-2", "3-to-8"],
				c: 1,
			},
			{
				q: "What is the inverse function of a multiplexer?",
				a: ["Decoder", "Demultiplexer", "Register", "Counter"],
				c: 1,
			},
			{
				q: "What does a demultiplexer do?",
				a: [
					"Connects a single input to one of several outputs",
					"Combines several independent inputs into one selected output",
					"Stores a single bit of data until it receives a clock pulse",
					"Counts incoming clock pulses and records the current total",
				],
				c: 0,
			},
			{
				q: "How can a decoder be used as a demultiplexer?",
				a: [
					"By adding an input data line",
					"By removing all outputs",
					"By adding a second clock",
					"By reversing every bit",
				],
				c: 0,
			},
			{
				q: "In a demultiplexer, what acts as an address to select an output?",
				a: ["The n input lines", "The data line", "The clock", "The output"],
				c: 0,
			},
			{
				q: "What value is routed to the selected output in a demultiplexer?",
				a: [
					"The data input value",
					"The clock frequency",
					"The address itself",
					"The carry value",
				],
				c: 0,
			},

			// =========================
			// SEQUENTIAL CIRCUITS
			// =========================

			{
				q: "What is a major difference between combinational and sequential circuits?",
				a: [
					"Sequential circuits can depend on past inputs or current state",
					"Combinational circuits always store previous inputs in memory",
					"Sequential circuits produce outputs without receiving any inputs",
					"Combinational circuits need a clock pulse before updating outputs",
				],
				c: 0,
			},
			{
				q: "What does the current output of a sequential circuit depend on?",
				a: [
					"Current input and current state",
					"Only current input",
					"Only past output",
					"Only the clock",
				],
				c: 0,
			},
			{
				q: "What do sequential circuits provide that most combinational circuits do not?",
				a: [
					"Memory or state information",
					"Binary numbers",
					"Boolean variables",
					"Hexadecimal conversion",
				],
				c: 0,
			},
			{
				q: "What is the simplest form of sequential circuit?",
				a: ["Flip-flop", "Multiplexer", "Decoder", "Adder"],
				c: 0,
			},
			{
				q: "What does bistable mean?",
				a: [
					"The device exists in one of two states",
					"The device has two inputs only",
					"The device has two clocks",
					"The device stores two bytes",
				],
				c: 0,
			},
			{
				q: "How much information can a flip-flop function as memory for?",
				a: ["1 bit", "1 byte", "4 bits", "16 bits"],
				c: 0,
			},
			{
				q: "How many outputs does a flip-flop have according to the notes?",
				a: ["1", "2", "4", "8"],
				c: 1,
			},
			{
				q: "What is the relationship between a flip-flop's two outputs?",
				a: [
					"They are always complements",
					"They are always identical",
					"They are unrelated",
					"They are always zero",
				],
				c: 0,
			},
			{
				q: "What are the two flip-flop outputs generally labeled?",
				a: ["A and B", "D and Q", "Q and ¬Q", "S and R"],
				c: 2,
			},

			// =========================
			// S-R FLIP-FLOP
			// =========================

			{
				q: "What does S-R stand for in an S-R flip-flop?",
				a: ["Set-Reset", "Shift-Read", "Store-Register", "Signal-Return"],
				c: 0,
			},
			{
				q: "How does an S-R latch operate when its input changes?",
				a: [
					"Its output changes after a brief delay",
					"It waits for a clock pulse",
					"It never changes",
					"It resets automatically",
				],
				c: 0,
			},
			{
				q: "What is asynchronous operation?",
				a: [
					"Output changes in response to input without requiring a clock pulse",
					"All circuit elements change state at exactly the same instant",
					"The output changes only when a clock signal triggers the circuit",
					"The circuit operates without receiving any input signals",
				],
				c: 0,
			},
			{
				q: "What synchronizes events in a digital computer?",
				a: [
					"Clock pulses",
					"Hexadecimal values",
					"Memory addresses",
					"Boolean equations",
				],
				c: 0,
			},
			{
				q: "What is an S-R flip-flop synchronized to?",
				a: [
					"A clock pulse",
					"A decimal number",
					"An address line",
					"A multiplexer",
				],
				c: 0,
			},
			{
				q: "When are the R and S inputs passed to the NOR gates in the clocked S-R flip-flop?",
				a: [
					"Only during the clock pulse",
					"Only after the clock pulse",
					"At all times regardless of the clock",
					"Only when the CPU stops",
				],
				c: 0,
			},

			// =========================
			// D FLIP-FLOP
			// =========================

			{
				q: "What problem with the S-R flip-flop does the D flip-flop address?",
				a: [
					"The S=1, R=1 condition must be avoided",
					"The S-R flip-flop is unable to retain a single bit of information",
					"The S-R flip-flop provides too many output signals to use reliably",
					"The S-R flip-flop cannot be connected to a clock signal",
				],
				c: 0,
			},
			{
				q: "How many inputs does the D flip-flop use for data?",
				a: ["One", "Two", "Three", "Four"],
				c: 0,
			},
			{
				q: "What does the D flip-flop use to guarantee its two nonclock inputs are opposite?",
				a: ["An inverter", "A decoder", "A multiplexer", "A counter"],
				c: 0,
			},
			{
				q: "What is another name for the D flip-flop?",
				a: [
					"Data flip-flop",
					"Decimal flip-flop",
					"Decoder flip-flop",
					"Digital counter",
				],
				c: 0,
			},
			{
				q: "What does a D flip-flop effectively store?",
				a: [
					"One bit of data",
					"One byte",
					"One address",
					"One hexadecimal digit",
				],
				c: 0,
			},
			{
				q: "The output of a D flip-flop is equal to what?",
				a: [
					"The most recent value applied to its input",
					"The oldest value applied to its input",
					"The inverted clock",
					"The MSB",
				],
				c: 0,
			},
			{
				q: "Why is a D flip-flop also called a delay flip-flop?",
				a: [
					"It delays an input value for a single clock pulse",
					"It slows down the processor whenever a clock pulse arrives",
					"It postpones every request to read data from main memory",
					"It waits to convert binary data into hexadecimal values",
				],
				c: 0,
			},
			{
				q: "If D=0, what is Q(n+1) according to the table?",
				a: ["0", "1", "2", "Undefined"],
				c: 0,
			},
			{
				q: "If D=1, what is Q(n+1) according to the table?",
				a: ["0", "1", "2", "Undefined"],
				c: 1,
			},

			// =========================
			// REGISTERS
			// =========================

			{
				q: "What is a register?",
				a: [
					"A digital circuit within the CPU used to store one or more bits of data",
					"A logic gate that performs a Boolean operation on its input signals",
					"A memory address that identifies a location but cannot hold data",
					"A decoder that selects an output line based on its input pattern",
				],
				c: 0,
			},
			{
				q: "Where is a register located according to the notes?",
				a: [
					"Within the CPU",
					"Only in external storage",
					"Only in RAM",
					"Inside a decoder",
				],
				c: 0,
			},
			{
				q: "What are two basic types of registers?",
				a: [
					"Parallel and shift registers",
					"Signed and unsigned registers",
					"Binary and hexadecimal registers",
					"Static and dynamic registers",
				],
				c: 0,
			},
			{
				q: "Which type of register stores 8 bits of data simultaneously?",
				a: [
					"Parallel register",
					"Shift register",
					"Ripple register",
					"Decoder register",
				],
				c: 0,
			},
			{
				q: "What type of flip-flops are used in the 8-bit parallel register example?",
				a: [
					"D flip-flops",
					"S-R flip-flops only",
					"T flip-flops",
					"NOR gates only",
				],
				c: 0,
			},
			{
				q: "What control signal controls writing into the parallel register?",
				a: ["Load", "Reset", "ClockOnly", "Carry"],
				c: 0,
			},
			{
				q: "What do the D11 through D18 lines provide in the register example?",
				a: [
					"Data to be loaded into the register",
					"Clock pulses that determine when the register captures its inputs",
					"Output addresses that identify a location in main memory",
					"Select codes that choose which source is connected to the register",
				],
				c: 0,
			},
			{
				q: "What could the signal lines connected to the register be outputs of?",
				a: ["Multiplexers", "Counters", "Decoders only", "ALUs only"],
				c: 0,
			},
			{
				q: "Why might multiplexers be used before a register?",
				a: [
					"To allow data from a variety of sources to be loaded",
					"To convert the register's binary contents into decimal values",
					"To increase the clock frequency applied to the register",
					"To generate hexadecimal digits from the register's output",
				],
				c: 0,
			},

			// =========================
			// SHIFT REGISTERS
			// =========================

			{
				q: "How does a shift register accept or transfer information?",
				a: [
					"Serially",
					"Only in hexadecimal",
					"Only through the MSB",
					"Only through a decoder",
				],
				c: 0,
			},
			{
				q: "What type of flip-flops are used in the 5-bit shift register example?",
				a: [
					"Clocked D flip-flops",
					"S-R latches only",
					"NOR gates",
					"Multiplexers",
				],
				c: 0,
			},
			{
				q: "Where is data input into the example shift register?",
				a: [
					"The leftmost flip-flop",
					"The rightmost flip-flop",
					"All flip-flops simultaneously",
					"The middle flip-flop",
				],
				c: 0,
			},
			{
				q: "What happens to the data with each clock pulse in the shift register?",
				a: [
					"It shifts one position to the right",
					"It shifts one position to the left",
					"It is erased",
					"It becomes hexadecimal",
				],
				c: 0,
			},
			{
				q: "What happens to the rightmost bit after shifting?",
				a: [
					"It is transferred out",
					"It becomes the MSB",
					"It is duplicated",
					"It becomes the clock",
				],
				c: 0,
			},
			{
				q: "What can shift registers interface with?",
				a: ["Serial I/O devices", "Only RAM", "Only GPUs", "Only decoders"],
				c: 0,
			},
			{
				q: "What functions can shift registers perform within the ALU?",
				a: [
					"Logical shift and rotate functions",
					"Arithmetic addition without moving any bits between positions",
					"Memory address decoding to select a particular storage chip",
					"Generating clock signals to synchronize processor components",
				],
				c: 0,
			},
			{
				q: "What additional circuitry may be needed when shift registers are used for ALU shift and rotate functions?",
				a: [
					"Parallel read/write circuitry",
					"Only a decoder",
					"Only a multiplexer",
					"A hexadecimal converter",
				],
				c: 0,
			},

			// =========================
			// COUNTERS
			// =========================

			{
				q: "What is a counter?",
				a: [
					"A register whose value is easily incremented by 1 modulo its capacity",
					"A decoder that stores input values and selects one output line",
					"A Boolean variable that can represent only a single true-or-false value",
					"A multiplexer that routes one selected input to an output line",
				],
				c: 0,
			},
			{
				q: "What happens after a counter reaches its maximum value?",
				a: [
					"The next increment sets it to 0",
					"It remains at the maximum",
					"It becomes negative",
					"It shuts down",
				],
				c: 0,
			},
			{
				q: "How many values can a counter made from n flip-flops represent?",
				a: ["n", "2n", "2^n", "n^2"],
				c: 2,
			},
			{
				q: "What is the maximum count value for a register made from n flip-flops?",
				a: ["n-1", "2n-1", "2^n-1", "2^n"],
				c: 2,
			},
			{
				q: "What CPU component is given as an example of a counter?",
				a: ["Program counter", "ALU", "Control unit", "Register file"],
				c: 0,
			},
			{
				q: "What are the two types of counters discussed?",
				a: [
					"Asynchronous and synchronous",
					"Binary and decimal",
					"Signed and unsigned",
					"Parallel and serial",
				],
				c: 0,
			},
			{
				q: "What is another name for an asynchronous counter?",
				a: [
					"Ripple counter",
					"Data counter",
					"Shift counter",
					"Boolean counter",
				],
				c: 0,
			},
			{
				q: "Why is an asynchronous counter relatively slow?",
				a: [
					"The output of one flip-flop triggers the next flip-flop",
					"All of its flip-flops wait for the same clock edge and update together",
					"It represents its count using hexadecimal digits instead of binary",
					"It operates without a clock signal to trigger any state changes",
				],
				c: 0,
			},
			{
				q: "How does a synchronous counter operate?",
				a: [
					"All flip-flops change state at the same time",
					"Each flip-flop waits for the previous one",
					"It has no flip-flops",
					"It uses only one bit",
				],
				c: 0,
			},
			{
				q: "Which type of counter is used in CPUs?",
				a: [
					"Asynchronous counter",
					"Synchronous counter",
					"Ripple counter",
					"Unclocked counter",
				],
				c: 1,
			},
			{
				q: "Why are synchronous counters faster than ripple counters?",
				a: [
					"All flip-flops change state at the same time",
					"They use fewer storage bits to represent the same counting range",
					"They update their state without relying on any clock signal",
					"They represent every count as a decimal value rather than binary",
				],
				c: 0,
			},
			{
				q: "What causes the change to ripple through an asynchronous counter?",
				a: [
					"The output of one flip-flop triggers the next",
					"The decoder triggers every flip-flop",
					"The MSB triggers the clock",
					"The ALU triggers the register",
				],
				c: 0,
			},
			{
				q: "What disadvantage does a ripple counter have?",
				a: [
					"Delay in changing value",
					"It cannot store binary values",
					"It cannot use flip-flops",
					"It has no outputs",
				],
				c: 0,
			},
			{
				q: "What is the ripple-counter delay proportional to?",
				a: [
					"The length of the counter",
					"The decimal value",
					"The number of inputs to a multiplexer",
					"The number of hexadecimal digits",
				],
				c: 0,
			},
			{
				q: "How do synchronous counters overcome ripple-counter delay?",
				a: [
					"All flip-flops change at the same time",
					"They eliminate all flip-flops",
					"They use only one input",
					"They convert everything to hexadecimal",
				],
				c: 0,
			},

			// =========================
			// MIXED REVIEW
			// =========================

			{
				q: "Which component is specifically described as a 1-bit memory device?",
				a: ["Flip-flop", "Multiplexer", "Decoder", "Counter"],
				c: 0,
			},
			{
				q: "Which component connects multiple inputs to a single output?",
				a: ["Decoder", "Multiplexer", "Register", "Flip-flop"],
				c: 1,
			},
			{
				q: "Which component connects one input to one of several outputs?",
				a: ["Multiplexer", "Demultiplexer", "Register", "Counter"],
				c: 1,
			},
			{
				q: "Which circuit's output depends only on the current input?",
				a: [
					"Combinational circuit",
					"Sequential circuit",
					"Flip-flop",
					"Counter",
				],
				c: 0,
			},
			{
				q: "Which circuit's output can depend on previous inputs?",
				a: [
					"Combinational circuit",
					"Sequential circuit",
					"Multiplexer",
					"Decoder",
				],
				c: 1,
			},
			{
				q: "Which circuit is commonly used to store multiple bits within a CPU?",
				a: ["Register", "OR gate", "Decoder", "Multiplexer"],
				c: 0,
			},
			{
				q: "Which register transfers data one position with each clock pulse?",
				a: ["Parallel register", "Shift register", "Counter", "Decoder"],
				c: 1,
			},
			{
				q: "Which circuit is commonly used to count clock-related events in a CPU?",
				a: ["Counter", "Multiplexer", "OR gate", "Decoder"],
				c: 0,
			},
			{
				q: "Which number system represents values using powers of 2?",
				a: ["Binary", "Decimal", "Hexadecimal", "None"],
				c: 0,
			},
			{
				q: "Which number system represents each digit using four binary bits?",
				a: ["Binary", "Decimal", "Hexadecimal", "Signed decimal"],
				c: 2,
			},
			{
				q: "Which technique is used to represent negative numbers in the notes?",
				a: [
					"Two's complement",
					"Unsigned notation",
					"Hexadecimal only",
					"Repeated division",
				],
				c: 0,
			},
			{
				q: "Which Boolean operation reverses a Boolean value?",
				a: ["AND", "OR", "NOT", "XOR"],
				c: 2,
			},
			{
				q: "Which operation requires both inputs to be TRUE to produce TRUE?",
				a: ["OR", "AND", "NOT", "NOR"],
				c: 1,
			},
			{
				q: "Which operation produces TRUE when at least one input is TRUE?",
				a: ["AND", "OR", "NOT", "NAND"],
				c: 1,
			},
			{
				q: "What is the relationship between Q and ¬Q on a flip-flop?",
				a: [
					"They are complements",
					"They are identical",
					"They are unrelated",
					"They are always 0",
				],
				c: 0,
			},
			{
				q: "What does the program counter illustrate?",
				a: [
					"A counter in the CPU",
					"A Boolean gate",
					"A hexadecimal digit",
					"A decoder",
				],
				c: 0,
			},
			{
				q: "What is the key difference between a multiplexer and demultiplexer?",
				a: [
					"A multiplexer selects one of many inputs; a demultiplexer routes one input to one of many outputs",
					"Both devices perform the same routing operation and have identical input-output behavior",
					"A multiplexer stores values in memory while a demultiplexer counts clock pulses",
					"A demultiplexer routes hexadecimal values but cannot handle binary data",
				],
				c: 0,
			},
			{
				q: "What is the key advantage of a synchronous counter?",
				a: [
					"All flip-flops change at the same time",
					"It requires no clock",
					"It stores more bits automatically",
					"It uses no gates",
				],
				c: 0,
			},
			{
				q: "What is the purpose of the select lines in a multiplexer?",
				a: [
					"To determine which input is passed to the output",
					"To retain input values until the multiplexer receives a clock pulse",
					"To invert the selected input using a Boolean NOT operation",
					"To increment a counter whenever the selected input changes",
				],
				c: 0,
			},
			{
				q: "What determines which decoder output is asserted?",
				a: [
					"The pattern of its input lines",
					"The output of the ALU",
					"The number of registers",
					"The clock frequency",
				],
				c: 0,
			},
		],
		test1: [
			{
				q: "What are the only two values a binary digit (bit) can represent?",
				a: ["0 and 1", "1 and 2", "0 and 9", "True and undefined"],
				c: 0,
			},
			{
				q: "What does MSB stand for in computer data representation?",
				a: [
					"Minimum Storage Byte",
					"Most Significant Bit",
					"Maximum Signed Binary",
					"Multiple System Bit",
				],
				c: 1,
			},
			{
				q: "What does LSB stand for in computer data representation?",
				a: [
					"Least Significant Bit",
					"Lowest Storage Byte",
					"Logical System Binary",
					"Last Signed Bit",
				],
				c: 0,
			},
			{
				q: "What is the primary purpose of signed integer representation?",
				a: [
					"To store only positive numbers in memory",
					"To eliminate the need for binary digits",
					"To represent both positive and negative integers",
					"To represent text characters without an encoding system",
				],
				c: 2,
			},
			{
				q: "In the signed integer representation discussed in the lecture, what is the purpose of the highest bit?",
				a: [
					"It stores the number of bytes in memory",
					"It identifies the processor clock speed",
					"It indicates the sign of the integer",
					"It stores the address of the next instruction",
				],
				c: 2,
			},
			{
				q: "Why does using one bit for the sign limit the range of representable signed integers?",
				a: [
					"The sign bit cannot be stored in computer memory",
					"One bit is reserved for the sign, leaving fewer bits for the value",
					"Signed integers can only contain zeros",
					"The sign bit requires a separate byte for every digit",
				],
				c: 1,
			},
			{
				q: "What is Boolean algebra primarily used to analyze?",
				a: [
					"The physical dimensions of computer hardware",
					"The performance of network connections",
					"The behavior of digital logic circuitry",
					"The storage capacity of external drives",
				],
				c: 2,
			},
			{
				q: "Who is associated with the development of Boolean algebra mentioned in the lecture?",
				a: [
					"Charles Babbage",
					"George Boole",
					"Alan Turing",
					"John von Neumann",
				],
				c: 1,
			},
			{
				q: "What values can a Boolean variable take?",
				a: [
					"Any positive integer",
					"Any decimal value between 0 and 10",
					"Only negative and positive numbers",
					"0 (FALSE) or 1 (TRUE)",
				],
				c: 3,
			},
			{
				q: "Which three operations form the basic Boolean expressions introduced in the lecture?",
				a: [
					"AND, OR, NOT",
					"ADD, SUBTRACT, MULTIPLY",
					"NAND, NOR, XOR only",
					"TRUE, FALSE, UNKNOWN",
				],
				c: 0,
			},
			{
				q: "What is the primary function of a NOT operation?",
				a: [
					"To combine two inputs into one output",
					"To reverse the logical value of an input",
					"To store a logical value until the next clock pulse",
					"To select one input from several possible inputs",
				],
				c: 1,
			},
			{
				q: "When does an AND gate produce an output of 1?",
				a: [
					"Whenever at least one input is 1",
					"Whenever both inputs have different values",
					"Only when all inputs are 1",
					"Only when all inputs are 0",
				],
				c: 2,
			},
			{
				q: "When does an OR gate produce an output of 0?",
				a: [
					"When all inputs are 0",
					"When all inputs are 1",
					"Whenever the inputs have different values",
					"Whenever exactly one input is 0",
				],
				c: 0,
			},
			{
				q: "How does a NAND gate relate to an AND gate?",
				a: [
					"It produces the same output as an OR gate",
					"It reverses the output of an AND gate",
					"It reverses the output of a NOT gate",
					"It produces 1 only when all inputs are 1",
				],
				c: 1,
			},
			{
				q: "How does a NOR gate relate to an OR gate?",
				a: [
					"It produces the same output as an AND gate",
					"It reverses the output of an XOR gate",
					"It reverses the output of an OR gate",
					"It produces 1 whenever at least one input is 1",
				],
				c: 2,
			},
			{
				q: "What is the defining behavior of an XOR gate with two inputs?",
				a: [
					"It produces 1 only when both inputs are 1",
					"It always produces the inverse of the first input",
					"It produces 0 whenever the inputs differ",
					"It produces 1 when the inputs have different values",
				],
				c: 3,
			},
			{
				q: "What is a logic gate in digital computer architecture?",
				a: [
					"An electronic circuit that performs a Boolean operation on its inputs",
					"A storage device that permanently saves files",
					"A component that converts computer programs into source code",
					"A mechanical switch used to control network traffic",
				],
				c: 0,
			},
			{
				q: "What is the purpose of operator precedence in Boolean expressions?",
				a: [
					"To determine the physical arrangement of logic gates",
					"To establish the order in which logical operations are evaluated",
					"To determine how many bits a register can store",
					"To select which memory address a processor accesses",
				],
				c: 1,
			},
			{
				q: "What information does a truth table provide?",
				a: [
					"The physical location of every logic gate",
					"The clock speed of a sequential circuit",
					"All possible input combinations and their corresponding outputs",
					"The number of instructions stored in a processor",
				],
				c: 2,
			},
			{
				q: "What is a Boolean function?",
				a: [
					"A function that converts every input into a hexadecimal value",
					"A function that stores input history indefinitely",
					"A function that requires at least eight input signals",
					"A function that takes one or more Boolean inputs and returns a Boolean output",
				],
				c: 3,
			},
			{
				q: "What defines a combinational circuit?",
				a: [
					"Its output depends only on its current input values",
					"Its output always depends on the previous clock pulse",
					"It must store every input in a register",
					"Its output changes only when a user presses a button",
				],
				c: 0,
			},
			{
				q: "Why do combinational circuits usually respond shortly after their inputs change?",
				a: [
					"They wait for every register in the CPU to reset",
					"Their outputs follow the inputs after the delays of the gates",
					"They must retrieve the previous input from permanent storage",
					"They require a complete computer restart before responding",
				],
				c: 1,
			},
			{
				q: "Which three methods can be used to represent a combinational circuit?",
				a: [
					"Source code, file storage, and memory allocation",
					"Registers, counters, and program instructions",
					"Truth tables, graphical gate symbols, and Boolean equations",
					"Decimal numbers, hexadecimal numbers, and signed integers",
				],
				c: 2,
			},
			{
				q: "What does a sum-of-products implementation of a Boolean function do?",
				a: [
					"It lists the combinations of inputs that cause the output to be 1 and combines the corresponding product terms",
					"It stores all possible inputs in a sequential register",
					"It converts every Boolean input into a decimal number",
					"It connects every input directly to every output without logic gates",
				],
				c: 0,
			},
			{
				q: "What is the primary function of a multiplexer?",
				a: [
					"To store several bits until a clock pulse occurs",
					"To select one of several inputs and pass it to a single output",
					"To ensure that every output line is activated simultaneously",
					"To increment a stored value whenever an input changes",
				],
				c: 1,
			},
			{
				q: "In a 4-to-1 multiplexer, how many input lines are available for selection?",
				a: ["2", "3", "4", "8"],
				c: 2,
			},
			{
				q: "How many select bits are required to choose one of four inputs in a 4-to-1 multiplexer?",
				a: ["1", "3", "4", "2"],
				c: 3,
			},
			{
				q: "In the multiplexer implementation described in the lecture, what determines which value is loaded into the program counter?",
				a: [
					"The values on the select lines",
					"The number of gates in the processor",
					"The previous value of every register",
					"The amount of free space in main memory",
				],
				c: 0,
			},
			{
				q: "What is the defining behavior of a decoder?",
				a: [
					"It combines multiple data inputs into one output",
					"It activates one of several output lines according to its input pattern",
					"It stores input values until the computer is switched off",
					"It shifts stored data one position after every clock pulse",
				],
				c: 1,
			},
			{
				q: "How many output lines does a decoder with three input lines have?",
				a: ["3", "6", "8", "16"],
				c: 2,
			},
			{
				q: "How are decoders used in memory address decoding?",
				a: [
					"They convert all stored data into character codes",
					"They cause every RAM chip to respond to every address",
					"They store the contents of memory until the next clock pulse",
					"They select a particular memory chip based on the address bits",
				],
				c: 3,
			},
			{
				q: "How does a demultiplexer differ from a multiplexer?",
				a: [
					"It routes one input to one of several outputs instead of selecting one of several inputs for a single output",
					"It stores several input values inside one flip-flop until a clock signal arrives",
					"It converts a Boolean expression into a table listing the function's possible input combinations",
					"It sends the same fixed output regardless of the values on its selection lines",
				],
				c: 0,
			},
			{
				q: "How does a sequential circuit differ from a combinational circuit?",
				a: [
					"A sequential circuit cannot have inputs",
					"A sequential circuit depends on current inputs and its current state",
					"A sequential circuit can only produce outputs of zero",
					"A sequential circuit never stores information",
				],
				c: 1,
			},
			{
				q: "What does it mean that a flip-flop is a bistable device?",
				a: [
					"It can process only two input signals at once",
					"It must change its output continuously",
					"It has two stable states and can retain its state without an input change",
					"It stores two separate bytes in every operating condition",
				],
				c: 2,
			},
			{
				q: "What is a key characteristic of the two outputs of a basic flip-flop described in the lecture?",
				a: [
					"They always have the same logical value",
					"They alternate independently of each other",
					"They are both permanently set to zero",
					"They are complements of each other",
				],
				c: 3,
			},
			{
				q: "What distinguishes asynchronous operation in an S–R latch from clocked operation?",
				a: [
					"The latch responds to input changes after a short delay without waiting for a clock pulse",
					"The latch can change state only when a clock pulse occurs",
					"The latch ignores changes to its input signals",
					"The latch must receive a clock pulse before storing any state",
				],
				c: 0,
			},
			{
				q: "Why does a D flip-flop avoid the problematic S=1, R=1 condition of an S–R flip-flop?",
				a: [
					"It removes the clock signal from the circuit",
					"It uses a single data input and an inverter to provide opposite internal signals",
					"It replaces both inputs with a permanent zero",
					"It activates both S and R inputs whenever data is stored",
				],
				c: 1,
			},
			{
				q: "Why is a D flip-flop sometimes called a delay flip-flop?",
				a: [
					"It permanently delays every processor instruction",
					"It requires two clock pulses to produce any output",
					"It produces the applied input value after a single clock pulse",
					"It delays all computer operations until memory is full",
				],
				c: 2,
			},
			{
				q: "What is the primary purpose of a parallel register in a CPU?",
				a: [
					"To select one output from multiple memory addresses",
					"To shift one input bit through several positions",
					"To increment a stored value automatically",
					"To store multiple bits of data, with the bits loaded in parallel",
				],
				c: 3,
			},
			{
				q: "How does a shift register transfer data?",
				a: [
					"It shifts data between positions with each clock pulse and can transfer information serially",
					"It activates every stored bit as a separate memory address",
					"It permanently stores information without using flip-flops",
					"It sends all input bits to every output simultaneously",
				],
				c: 0,
			},
			{
				q: "Which is a use of shift registers described in the lecture?",
				a: [
					"Replacing all Boolean operations in a processor",
					"Interfacing with serial I/O devices and performing logical shifts or rotations",
					"Selecting one RAM chip using address decoding",
					"Converting every sequential circuit into a combinational circuit",
				],
				c: 1,
			},
			{
				q: "What happens when a counter reaches its maximum value and is incremented again?",
				a: [
					"It permanently stops counting",
					"It deletes all the values stored in the CPU",
					"It returns to zero after wrapping around its capacity",
					"It changes into a multiplexer",
				],
				c: 2,
			},
			{
				q: "What is the main difference between asynchronous and synchronous counters?",
				a: [
					"Asynchronous counters change all flip-flops simultaneously, while synchronous counters change one at a time",
					"Synchronous counters do not use flip-flops",
					"Asynchronous counters are always faster than synchronous counters",
					"Asynchronous counters ripple changes between flip-flops, while synchronous counters change all flip-flops at the same time",
				],
				c: 3,
			},
			{
				q: "Why are synchronous counters used in CPUs instead of ripple counters?",
				a: [
					"They reduce the delays associated with flip-flops changing one after another",
					"They do not require a clock signal or any stored state",
					"They can represent only one value at a time",
					"They eliminate the need for all registers in the CPU",
				],
				c: 0,
			},
			{
				q: "Which components are identified as programmable logic devices in the lecture?",
				a: [
					"Multiplexers and program counters",
					"Programmable logic arrays and field-programmable gate arrays",
					"S–R latches and D flip-flops only",
					"RAM chips and character encoding systems",
				],
				c: 1,
			},

			{
				q: "What is computer architecture primarily concerned with?",
				a: [
					"The attributes of a computer that are visible to the programmer",
					"The physical appearance of a computer's external case",
					"The manufacturing process used to produce computer chips",
					"The internal wiring of every peripheral device",
				],
				c: 0,
			},
			{
				q: "Which of the following is an example of a computer architecture attribute?",
				a: [
					"The type of cooling fan installed in the computer",
					"The instruction set supported by the processor",
					"The physical layout of the motherboard",
					"The specific technology used to implement a control signal",
				],
				c: 1,
			},
			{
				q: "What does computer organization describe?",
				a: [
					"The instructions that programmers write in source code",
					"The number of bits used to represent a particular data value",
					"How the computer's features are implemented internally",
					"The external appearance of the computer system",
				],
				c: 2,
			},
			{
				q: "Which of the following is an example of computer organization?",
				a: [
					"Whether the instruction set includes multiplication",
					"The addressing techniques visible to programmers",
					"The number of bits used for data representation",
					"Whether multiplication uses dedicated hardware or repeated addition",
				],
				c: 3,
			},
			{
				q: "What is the main difference between computer architecture and computer organization?",
				a: [
					"Architecture describes programmer-visible features, while organization describes their implementation",
					"Architecture describes only software, while organization describes only external devices",
					"Architecture describes memory capacity, while organization describes programming languages",
					"Architecture describes peripherals, while organization describes user instructions",
				],
				c: 0,
			},
			{
				q: "What does the term structure mean in computer systems?",
				a: [
					"The sequence in which a program executes its instructions",
					"The way the components of a computer relate to one another",
					"The operations performed by a single computer component",
					"The method used to represent data as binary digits",
				],
				c: 1,
			},
			{
				q: "What does function describe in the context of computer structure?",
				a: [
					"How computer components are physically manufactured",
					"How many peripherals can connect to a computer",
					"The operation of individual components as part of the structure",
					"The physical dimensions of the processor and memory",
				],
				c: 2,
			},
			{
				q: "Which four functions encompass the basic operations of a computer?",
				a: [
					"Compilation, debugging, installation, and execution",
					"Input, output, networking, and programming",
					"Reading, writing, printing, and displaying",
					"Data processing, data storage, data movement, and control",
				],
				c: 3,
			},
			{
				q: "What is data processing in a computer system?",
				a: [
					"Performing operations on data to transform or manipulate it",
					"Moving data between two external devices without changing it",
					"Permanently storing information on an external storage device",
					"Controlling which peripheral is physically connected to the computer",
				],
				c: 0,
			},
			{
				q: "What is the primary purpose of data storage in a computer?",
				a: [
					"To control the execution order of instructions",
					"To retain data so that it can be accessed or used later",
					"To transfer information between communication lines only",
					"To perform arithmetic operations on every input value",
				],
				c: 1,
			},
			{
				q: "What does data movement involve in a computer system?",
				a: [
					"Changing the computer's instruction set during execution",
					"Performing calculations on values stored in registers",
					"Transferring data between devices, communication lines, or storage",
					"Converting all information into a programming language",
				],
				c: 2,
			},
			{
				q: "Why is control considered an essential computer function?",
				a: [
					"It provides permanent storage for all user files",
					"It replaces the need for data processing and storage",
					"It allows peripherals to operate without communication",
					"It coordinates the computer's other functions according to instructions",
				],
				c: 3,
			},
			{
				q: "What is a peripheral in the context of the lecture?",
				a: [
					"A device directly connected to the computer for input or output",
					"A register located inside the central processing unit",
					"A software instruction that controls the processor",
					"A logic gate used to implement Boolean expressions",
				],
				c: 0,
			},
			{
				q: "What does input-output (I/O) refer to?",
				a: [
					"The execution of arithmetic instructions inside the ALU",
					"The transfer of data between the computer and its external environment",
					"The storage of control instructions inside CPU registers",
					"The relationship between computer architecture and organization",
				],
				c: 1,
			},
			{
				q: "What is the role of the control unit within a computer?",
				a: [
					"It permanently stores all programs and user documents",
					"It performs every arithmetic calculation independently",
					"It manages computer resources and coordinates functional components",
					"It connects external peripherals directly to main memory without control",
				],
				c: 2,
			},
			{
				q: "How can a computer function as a data movement device?",
				a: [
					"By converting all incoming data into executable instructions",
					"By storing every transferred value permanently in main memory",
					"By performing calculations on data before every transfer",
					"By transferring data from one peripheral or communication line to another",
				],
				c: 3,
			},
			{
				q: "In the lecture's description of storage operations, what does reading data mean?",
				a: [
					"Transferring data from the external environment into computer storage",
					"Transferring data from computer storage to the external environment",
					"Processing data inside the arithmetic and logic unit",
					"Moving data between two registers within the CPU",
				],
				c: 0,
			},
			{
				q: "In the lecture's description of storage operations, what does writing data mean?",
				a: [
					"Moving information from a peripheral directly to another peripheral",
					"Transferring data from computer storage to the external environment",
					"Executing instructions that control the processor's operations",
					"Moving control signals between the ALU and the control unit",
				],
				c: 1,
			},
			{
				q: "What does processing data from storage involve?",
				a: [
					"Transferring data between peripherals without processing it",
					"Moving instructions directly from the control unit to a printer",
					"Performing operations on data that is held in computer storage",
					"Connecting multiple processors through a system bus",
				],
				c: 2,
			},
			{
				q: "What does processing data from storage to I/O involve?",
				a: [
					"Storing all external data without modifying or processing it",
					"Moving data between CPU registers without external interaction",
					"Sending control signals to memory without handling data",
					"Processing data as it travels between storage and the external environment",
				],
				c: 3,
			},
			{
				q: "Which component is primarily responsible for controlling computer operations and performing data processing functions?",
				a: [
					"The central processing unit",
					"The system bus",
					"The peripheral device",
					"The external communication line",
				],
				c: 0,
			},
			{
				q: "What is the primary purpose of main memory in the top-level computer structure?",
				a: [
					"To coordinate the timing of every instruction",
					"To store data",
					"To perform all input-output operations independently",
					"To connect the ALU directly to external peripherals",
				],
				c: 1,
			},
			{
				q: "What is the main role of the I/O component in the top-level computer structure?",
				a: [
					"To store all processor instructions permanently",
					"To execute arithmetic and logical operations",
					"To move data between the computer and its external environment",
					"To coordinate communication between internal CPU registers only",
				],
				c: 2,
			},
			{
				q: "What is the purpose of system interconnection in a computer?",
				a: [
					"To perform calculations on values stored in main memory",
					"To permanently store the operating system and applications",
					"To control the execution of every instruction independently",
					"To provide communication between the CPU, main memory, and I/O",
				],
				c: 3,
			},
			{
				q: "What is a system bus?",
				a: [
					"A set of conducting wires that connects computer components for communication",
					"A collection of CPU registers used to store temporary values",
					"A program that controls how peripherals receive instructions",
					"A memory device that stores the computer's address space",
				],
				c: 0,
			},
			{
				q: "Which set contains the major components of the computer's top-level structure?",
				a: [
					"Compiler, operating system, application, and source code",
					"CPU, main memory, I/O, and system interconnection",
					"Registers, counters, decoders, and multiplexers only",
					"Keyboard, monitor, printer, and external storage only",
				],
				c: 1,
			},
			{
				q: "What are the major structural components of the CPU identified in the lecture?",
				a: [
					"Main memory, system bus, and external communication lines",
					"Input devices, output devices, and peripheral controllers",
					"Control unit, arithmetic and logic unit, registers, and CPU interconnection",
					"Operating system, compiler, program files, and application software",
				],
				c: 2,
			},
			{
				q: "What is the primary responsibility of the arithmetic and logic unit (ALU)?",
				a: [
					"To coordinate the physical connections between external peripherals",
					"To store all user data permanently",
					"To control every input-output device independently",
					"To perform the computer's data processing functions",
				],
				c: 3,
			},
			{
				q: "What is the primary purpose of registers within the CPU?",
				a: [
					"To provide storage internal to the processor",
					"To connect the computer to external communication lines",
					"To replace main memory as the permanent storage location",
					"To control the physical operation of all peripheral devices",
				],
				c: 0,
			},
			{
				q: "What is the purpose of CPU interconnection?",
				a: [
					"To store program instructions independently of the processor",
					"To enable communication among the control unit, ALU, and registers",
					"To transfer data only between external peripherals",
					"To execute every instruction without involving other components",
				],
				c: 1,
			},
			{
				q: "Which component of the CPU is responsible for controlling the operation of the CPU and the computer?",
				a: [
					"The arithmetic and logic unit",
					"The system bus",
					"The control unit",
					"The main memory",
				],
				c: 2,
			},
			{
				q: "Which CPU component is responsible for performing arithmetic and logical data processing?",
				a: [
					"The control unit",
					"The internal CPU interconnection",
					"The register collection",
					"The arithmetic and logic unit",
				],
				c: 3,
			},
			{
				q: "What is the role of the CPU's internal interconnection?",
				a: [
					"To provide a communication mechanism among internal CPU components",
					"To connect only the computer's external keyboard and monitor",
					"To store data when the main memory is full",
					"To execute instructions without using registers or the ALU",
				],
				c: 0,
			},
			{
				q: "Which statement best describes the relationship between the control unit and the ALU?",
				a: [
					"The ALU controls all computer resources, while the control unit permanently stores data",
					"The control unit coordinates operations, while the ALU performs data processing",
					"The control unit and ALU both function only as external storage devices",
					"The ALU connects external communication lines, while the control unit stores user files",
				],
				c: 1,
			},
			{
				q: "What is the purpose of control signals within computer organization?",
				a: [
					"To increase the number of instructions visible to programmers",
					"To provide permanent storage for all data processed by the CPU",
					"To coordinate and direct the operation of computer components",
					"To replace communication between the CPU and main memory",
				],
				c: 2,
			},
			{
				q: "How does the lecture distinguish structure from function?",
				a: [
					"Structure describes programming languages, while function describes computer manufacturers",
					"Structure describes data representation, while function describes storage capacity",
					"Structure describes the control unit only, while function describes external peripherals only",
					"Structure describes relationships among components, while function describes their operations",
				],
				c: 3,
			},
			{
				q: "Which example best illustrates computer architecture rather than computer organization?",
				a: [
					"Whether the processor supports a multiply instruction",
					"Whether multiplication is implemented with dedicated hardware",
					"The internal design of the processor's control signals",
					"The particular memory technology used to implement a feature",
				],
				c: 0,
			},
			{
				q: "Which example best illustrates computer organization rather than computer architecture?",
				a: [
					"The instruction set supported by the processor",
					"The internal implementation of multiplication using hardware or repeated addition",
					"The number of bits used for data representation",
					"The addressing techniques visible to a programmer",
				],
				c: 1,
			},
			{
				q: "Which statement best summarizes how the major computer components work together?",
				a: [
					"Main memory controls all components while the CPU serves only as storage",
					"The system bus processes data while the ALU manages external peripherals",
					"The CPU processes and controls operations, memory stores data, I/O moves data, and interconnections enable communication",
					"The I/O component executes instructions while registers permanently store every program",
				],
				c: 2,
			},

			{
				q: "What was the primary purpose of the abacus, developed around 3000 B.C. in Babylonia?",
				a: [
					"To provide an early aid for performing calculations",
					"To store computer programs on punched cards",
					"To control electronic vacuum-tube circuits",
					"To transmit data between distant computers",
				],
				c: 0,
			},
			{
				q: "What was the significance of the Antikythera mechanism in computing history?",
				a: [
					"It was the first commercial microprocessor",
					"It was an ancient analog astronomical calculator",
					"It was the first general-purpose electronic computer",
					"It introduced the first graphical user interface",
				],
				c: 1,
			},
			{
				q: "What was the main contribution of the Jacquard loom in 1801?",
				a: [
					"It introduced the first integrated circuit",
					"It replaced vacuum tubes with transistors",
					"It used punched cards to control operations, anticipating programmable input",
					"It introduced the first stored-program electronic computer",
				],
				c: 2,
			},
			{
				q: "What was the significance of Charles Babbage's Analytical Engine concept from 1837?",
				a: [
					"It was the first commercially successful DRAM chip",
					"It was the first personal computer with a graphical interface",
					"It was the first electronic computer designed for codebreaking",
					"It introduced the concept of a fully programmable computer",
				],
				c: 3,
			},
			{
				q: "Why is Ada Lovelace recognized in the history of computing?",
				a: [
					"She wrote an early algorithm and is recognized as the world's first programmer",
					"She invented the first commercial microprocessor",
					"She developed the first integrated circuit",
					"She founded Intel and developed its first processor",
				],
				c: 0,
			},
			{
				q: "What was the purpose of Hollerith's tabulating machine in 1890?",
				a: [
					"To accelerate three-dimensional graphics rendering",
					"To process punched-card data for the U.S. Census",
					"To execute artificial intelligence models using GPUs",
					"To provide a standardized architecture for personal computers",
				],
				c: 1,
			},
			{
				q: "Which statement correctly describes ENIAC according to the lecture?",
				a: [
					"It was the first practical stored-program computer",
					"It was the first commercial 4-bit microprocessor",
					"It was a general-purpose electronic computer introduced in 1945",
					"It was the first smartphone operating system",
				],
				c: 2,
			},
			{
				q: "What major technological change followed the introduction of transistors?",
				a: [
					"Computers became dependent on mechanical relays",
					"Computers could no longer use integrated circuits",
					"Computers transitioned immediately to quantum processing",
					"Transistors replaced vacuum tubes, making computers smaller, faster, and more reliable",
				],
				c: 3,
			},
			{
				q: "What did Moore's Law describe when it was introduced in 1965?",
				a: [
					"The historical trend of exponential growth in transistor counts",
					"The relationship between CPU clock speed and execution time only",
					"The maximum number of instructions stored in main memory",
					"The rate at which computer networks increase their bandwidth",
				],
				c: 0,
			},
			{
				q: "What was the significance of the Intel 4004, introduced in 1971?",
				a: [
					"It was the first 32-bit x86 processor",
					"It was the first commercial microprocessor",
					"It was the first GPU designed for AI workloads",
					"It was the first general-purpose electronic computer",
				],
				c: 1,
			},
			{
				q: "What was the importance of the Intel 8086 introduced in 1978?",
				a: [
					"It established the first graphical user interface",
					"It replaced all CPU registers with main memory",
					"It became the foundation of the x86 architecture",
					"It introduced the first commercially successful DRAM chip",
				],
				c: 2,
			},
			{
				q: "What was the main contribution of the IBM PC introduced in 1981?",
				a: [
					"It introduced the first electronic vacuum-tube computer",
					"It made cloud computing available to consumers",
					"It established the first programmable mechanical calculator",
					"It helped standardize personal computer architecture",
				],
				c: 3,
			},
			{
				q: "What was the main significance of the von Neumann or IAS computer design?",
				a: [
					"It introduced the stored-program concept, with memory holding both programs and data",
					"It separated all program instructions from data into unrelated systems",
					"It replaced the ALU with a dedicated graphics processing unit",
					"It relied exclusively on punched cards for program execution",
				],
				c: 0,
			},
			{
				q: "According to the lecture, which components formed the core of the IAS computer design?",
				a: [
					"A GPU, an NPU, an SSD, and a network controller",
					"Main memory, an ALU, a control unit, and input-output equipment",
					"A touchscreen, a graphical interface, and wireless communication",
					"A collection of mechanical calculators connected by punched cards",
				],
				c: 1,
			},
			{
				q: "In the IAS computer, what information did an instruction contain?",
				a: [
					"A 12-bit opcode and an 8-bit memory address",
					"A 40-bit opcode with no address information",
					"An 8-bit opcode specifying the operation and a 12-bit memory address",
					"A 20-bit address and a 20-bit clock signal",
				],
				c: 2,
			},
			{
				q: "What was the primary purpose of the Memory Address Register (MAR) in the IAS computer?",
				a: [
					"To hold the result of the latest ALU operation",
					"To temporarily store the right-hand instruction in a memory word",
					"To keep track of the next instruction pair to execute",
					"To specify the memory address associated with a word being read or written",
				],
				c: 3,
			},
			{
				q: "What was the purpose of the Memory Buffer Register (MBR) in the IAS computer?",
				a: [
					"To hold a word being transferred to or from memory or the I/O unit",
					"To permanently store the processor's instruction set",
					"To predict which branch a program would execute next",
					"To control the clock frequency of the entire computer",
				],
				c: 0,
			},
			{
				q: "What information did the Program Counter (PC) hold in the IAS computer?",
				a: [
					"The result of the most recent multiplication",
					"The address of the next instruction pair to be fetched from memory",
					"The memory address of the last peripheral accessed",
					"The opcode currently being decoded by the ALU",
				],
				c: 1,
			},
			{
				q: "Which category of IAS instructions allowed a program to change its normal sequential execution and repeat operations?",
				a: [
					"Data transfer instructions",
					"Address modification instructions",
					"Unconditional branch instructions",
					"Memory buffer instructions",
				],
				c: 2,
			},
			{
				q: "What is instruction-level pipelining designed to accomplish?",
				a: [
					"It forces one instruction to finish completely before another begins",
					"It eliminates the need for instruction decoding",
					"It increases memory capacity by combining multiple storage devices",
					"It allows different stages of multiple instructions to be processed simultaneously",
				],
				c: 3,
			},
			{
				q: "How does out-of-order execution improve CPU performance?",
				a: [
					"It executes available instructions when their required data is ready rather than always following the original program order",
					"It makes every instruction wait until the slowest instruction in the program has finished",
					"It permanently rewrites the program so its stored instructions appear in a different order",
					"It slows instruction processing by turning off execution units that could otherwise be used",
				],
				c: 0,
			},
			{
				q: "What is the purpose of branch prediction in a modern CPU?",
				a: [
					"To determine how much storage space a program requires",
					"To predict the likely path of a decision so the CPU can prepare instructions in advance",
					"To ensure every instruction is executed in the same order",
					"To determine which physical CPU core is the largest",
				],
				c: 1,
			},
			{
				q: "What is speculative execution?",
				a: [
					"Executing only instructions that have already been permanently confirmed",
					"Storing predicted instructions directly in long-term storage",
					"Temporarily executing instructions based on predicted outcomes before knowing whether they are needed",
					"Increasing CPU clock speed by removing the processor's cache",
				],
				c: 2,
			},
			{
				q: "What does a CPU core represent?",
				a: [
					"A memory chip that stores instructions permanently",
					"A specialized peripheral that transfers files to the CPU",
					"A system bus connecting the processor to external devices",
					"An individual processing unit within a CPU that can execute instructions",
				],
				c: 3,
			},
			{
				q: "Why do multiple CPU cores potentially improve a computer's ability to handle several tasks?",
				a: [
					"They allow workloads or threads to be processed in parallel across different processing units",
					"They guarantee every individual program will execute faster regardless of its design",
					"They eliminate the need for main memory and cache",
					"They increase performance solely by raising the clock frequency of one core",
				],
				c: 0,
			},
			{
				q: "What is the CPU-memory performance gap, also called the memory wall?",
				a: [
					"The difference between the number of CPU cores and the number of installed GPUs",
					"The situation in which CPU performance improves faster than main-memory latency",
					"The difference between the capacity of an SSD and an external hard drive",
					"The situation in which memory bandwidth always increases faster than processor performance",
				],
				c: 1,
			},
			{
				q: "What is the primary purpose of CPU cache memory?",
				a: [
					"To permanently store all user files and applications",
					"To replace the CPU's registers during instruction execution",
					"To keep frequently needed data close to the CPU and reduce slower main-memory accesses",
					"To increase the physical size of the processor without changing its performance",
				],
				c: 2,
			},
			{
				q: "Which statement correctly describes the typical CPU cache hierarchy?",
				a: [
					"L3 is always the smallest and fastest level, while L1 is the largest",
					"Main memory is smaller and faster than every cache level",
					"L1, L2, and L3 all have identical capacity and access speed",
					"L1 is the smallest and fastest, while L2 and L3 are generally larger and slower",
				],
				c: 3,
			},
			{
				q: "What is temporal locality in memory access?",
				a: [
					"The tendency for recently accessed data or instructions to be accessed again soon",
					"The tendency for the CPU to access only memory addresses located far apart",
					"The ability to transfer data between several memory devices simultaneously",
					"The process of storing data permanently after every clock cycle",
				],
				c: 0,
			},
			{
				q: "What is spatial locality in memory access?",
				a: [
					"The tendency for previously accessed data to be deleted immediately",
					"The tendency for memory accesses to occur near recently accessed locations",
					"The process of executing instructions from different CPU cores at once",
					"The ability to store the same data in several different file formats",
				],
				c: 1,
			},
			{
				q: "What is the main difference between a CPU and a GPU?",
				a: [
					"A CPU is designed exclusively for graphics, while a GPU manages operating systems",
					"A CPU has no processing cores, while a GPU contains only one core",
					"A CPU handles varied general-purpose tasks, while a GPU excels at highly parallel workloads",
					"A CPU is used only for mobile devices, while a GPU is used only for servers",
				],
				c: 2,
			},
			{
				q: "What is the purpose of prefetching in modern memory systems?",
				a: [
					"To delete old data from cache before it can be reused",
					"To reduce the number of CPU cores needed for parallel processing",
					"To move every stored file permanently into a processor register",
					"To predict which data will be needed next and load it before it is requested",
				],
				c: 3,
			},
			{
				q: "Why has simply increasing CPU clock speed become less effective as a performance strategy?",
				a: [
					"Power consumption, heat dissipation, leakage power, interconnect delays, and memory latency impose limitations",
					"Higher clock speeds automatically reduce the number of available instructions",
					"Clock speed prevents CPUs from using caches or multiple processing cores",
					"Increasing clock speed eliminates the need for synchronization between processor components",
				],
				c: 0,
			},
			{
				q: "What does CPI measure in CPU performance analysis?",
				a: [
					"The number of instructions completed per second",
					"The average number of clock cycles required to execute one instruction",
					"The number of processor cores available to an application",
					"The amount of memory transferred during one clock cycle",
				],
				c: 1,
			},
			{
				q: "What does IPC measure?",
				a: [
					"The number of cache levels available to a processor",
					"The average number of clock cycles required for each instruction",
					"The number of instructions completed per clock cycle",
					"The number of bytes stored in the CPU's registers",
				],
				c: 2,
			},
			{
				q: "Which formula does the lecture provide for calculating CPU execution time?",
				a: [
					"CPU Time = Clock Rate × Instruction Count × CPI",
					"CPU Time = CPI ÷ (Instruction Count × Clock Rate)",
					"CPU Time = Instruction Count ÷ CPI",
					"CPU Time = (Instruction Count × CPI) ÷ Clock Rate",
				],
				c: 3,
			},
			{
				q: "What is the primary purpose of computer benchmarks?",
				a: [
					"To test and compare computer performance using representative workloads",
					"To determine whether a computer can run without an operating system",
					"To replace the need for measuring execution time and throughput",
					"To guarantee that every computer performs equally across all applications",
				],
				c: 0,
			},
			{
				q: "What does SPECspeed measure in the benchmark approach described in the lecture?",
				a: [
					"The total number of tasks completed by many processors over an extended period",
					"How quickly a system completes a single task",
					"The amount of power consumed by an idle processor",
					"The total number of instructions stored in the computer's main memory",
				],
				c: 1,
			},
			{
				q: "What does SPECrate measure in the benchmark approach described in the lecture?",
				a: [
					"How quickly a single task responds without considering other workloads",
					"The number of transistors integrated into a processor",
					"How much work a system can complete over time, reflecting throughput",
					"The time required for a computer to start its operating system",
				],
				c: 2,
			},
			{
				q: "What is the central idea of Amdahl's Law?",
				a: [
					"Adding processors always increases performance in direct proportion to their number",
					"Parallel processing eliminates every serial portion of a program",
					"Programs cannot benefit from running on multiple processors",
					"The speedup from parallel processing is limited by the portion of a program that cannot be parallelized",
				],
				c: 3,
			},
			{
				q: "Why can adding more processors produce diminishing returns when improving a program's performance?",
				a: [
					"Some portions of the program must still execute sequentially and limit overall speedup",
					"Each additional processor automatically increases the program's instruction count",
					"Parallel execution forces every task to use slower storage devices",
					"Additional processors prevent programs from accessing shared memory",
				],
				c: 0,
			},

			{
				q: "What are the four basic functions performed by a computer?",
				a: [
					"Processing, storage, input, and output",
					"Decoding, compiling, networking, and printing",
					"Loading, branching, scheduling, and caching",
					"Addressing, timing, buffering, and transmitting",
				],
				c: 0,
			},
			{
				q: "Why can general-purpose hardware perform different tasks without being physically rewired?",
				a: [
					"It automatically replaces its physical components",
					"It uses new control signals to direct its operations",
					"It stores every possible result in main memory",
					"It converts all programs into electrical circuits",
				],
				c: 1,
			},
			{
				q: "What is a computer program, according to the lecture?",
				a: [
					"A collection of physical components connected together",
					"A storage area reserved exclusively for instructions",
					"A sequence of steps involving arithmetic or logical operations",
					"A hardware device responsible for controlling peripherals",
				],
				c: 2,
			},
			{
				q: "What is the primary function of the control unit?",
				a: [
					"Perform arithmetic calculations on operands",
					"Store program instructions permanently",
					"Transfer every result directly to external devices",
					"Issue control signals based on an operation's code",
				],
				c: 3,
			},
			{
				q: "Which two components together constitute the Central Processing Unit (CPU)?",
				a: [
					"Control Unit and Arithmetic Logic Unit",
					"Main Memory and Input/Output Module",
					"Program Counter and Instruction Register",
					"Address Bus and Data Bus",
				],
				c: 0,
			},
			{
				q: "What is the main purpose of main memory during program execution?",
				a: [
					"To coordinate every interrupt from external devices",
					"To temporarily store instructions, data, and results",
					"To perform all arithmetic operations independently",
					"To transmit control signals between peripheral devices",
				],
				c: 1,
			},
			{
				q: "What does the Program Counter (PC) normally contain?",
				a: [
					"The result of the most recently executed operation",
					"The operation code of the current instruction",
					"The address of the next instruction to fetch",
					"The address of the most recently written data",
				],
				c: 2,
			},
			{
				q: "What happens to an instruction during the fetch cycle?",
				a: [
					"It is immediately sent to an output peripheral",
					"It is permanently saved to secondary storage",
					"It is converted into a high-level programming statement",
					"It is retrieved from memory and loaded into the IR",
				],
				c: 3,
			},
			{
				q: "What is the usual purpose of incrementing the Program Counter after fetching an instruction?",
				a: [
					"To identify the next instruction in sequence",
					"To preserve the result of the current calculation",
					"To determine which peripheral receives output",
					"To store the current instruction in main memory",
				],
				c: 0,
			},
			{
				q: "What is the purpose of the Instruction Register (IR)?",
				a: [
					"To hold the address of the next instruction",
					"To hold the instruction currently being processed",
					"To store all results produced by the ALU",
					"To identify the peripheral requesting an interrupt",
				],
				c: 1,
			},
			{
				q: "What does instruction decoding determine?",
				a: [
					"Whether main memory requires additional capacity",
					"Which bus should permanently control the processor",
					"Which operation and operands the instruction requires",
					"Whether the computer should shut down after execution",
				],
				c: 2,
			},
			{
				q: "Which activity is an example of the processor-memory category of the execute cycle?",
				a: [
					"A keyboard sends a notification to the operating system",
					"A timer interrupts a program at regular intervals",
					"A network adapter transmits a packet externally",
					"The CPU transfers data to or from main memory",
				],
				c: 3,
			},
			{
				q: "What does the data operation state of the instruction cycle involve?",
				a: [
					"Performing the arithmetic or logical operation specified",
					"Determining the physical location of an output device",
					"Sending an interrupt request to every connected module",
					"Synchronizing all peripheral devices with a shared clock",
				],
				c: 0,
			},
			{
				q: "What is the purpose of instruction address calculation?",
				a: [
					"To determine the amount of data a bus can transfer",
					"To determine the address of the next instruction",
					"To identify which device has the highest interrupt priority",
					"To calculate the final result of an arithmetic operation",
				],
				c: 1,
			},
			{
				q: "What is an interrupt in computer architecture?",
				a: [
					"A permanent change to the processor's physical hardware",
					"A method for increasing the width of the address bus",
					"A mechanism that interrupts normal processing to handle an event",
					"A technique for storing all instructions outside main memory",
				],
				c: 2,
			},
			{
				q: "Which of the following is an example of an interrupt generated by a timer?",
				a: [
					"A memory location is selected for a read operation",
					"A processor adds two values held in registers",
					"A program stores a calculation result in memory",
					"A timer event prompts the operating system to schedule work",
				],
				c: 3,
			},
			{
				q: "Why are interrupts useful when handling I/O devices?",
				a: [
					"Devices can notify the CPU when they need attention",
					"The CPU no longer needs to execute program instructions",
					"All data transfers automatically bypass main memory",
					"Every peripheral can execute the CPU's instruction cycle",
				],
				c: 0,
			},
			{
				q: "What is the typical sequence of interrupt handling?",
				a: [
					"Decode instruction, clear memory, restart the processor, and halt",
					"Save CPU context, run the handler, restore context, and resume",
					"Disable all devices, erase registers, and restart the operating system",
					"Complete every program, reset the PC, and reload all instructions",
				],
				c: 1,
			},
			{
				q: "What does the processor typically do when an interrupt is pending?",
				a: [
					"Permanently discards the program that was running",
					"Allows every interrupt handler to execute simultaneously",
					"Suspends the current program and transfers control to a handler",
					"Continues indefinitely without checking for interrupt requests",
				],
				c: 2,
			},
			{
				q: "What is meant by saving CPU context during interrupt handling?",
				a: [
					"Copying every file from secondary storage into RAM",
					"Recording the physical dimensions of the processor",
					"Saving all peripheral firmware to the instruction register",
					"Preserving processor state so the interrupted program can resume",
				],
				c: 3,
			},
			{
				q: "How can interrupts improve performance during a short I/O wait?",
				a: [
					"The CPU can execute other instructions while the device works",
					"The CPU must continuously check whether the device is ready",
					"The I/O device executes all instructions from the user program",
					"The operating system prevents the processor from doing other work",
				],
				c: 0,
			},
			{
				q: "What happens when interrupts are disabled while one interrupt is being processed?",
				a: [
					"Every new interrupt immediately replaces the current handler",
					"Further interrupts are ignored temporarily and checked afterward",
					"All pending interrupts are permanently erased from the system",
					"The processor automatically executes every pending handler at once",
				],
				c: 1,
			},
			{
				q: "What distinguishes nested interrupts from sequential interrupts?",
				a: [
					"Sequential interrupts always have higher priority than nested ones",
					"Nested interrupts require all devices to share the same clock",
					"A higher-priority interrupt can interrupt a lower-priority handler",
					"Sequential interrupts allow multiple handlers to execute simultaneously",
				],
				c: 2,
			},
			{
				q: "In the lecture's interrupt example, what happens when a higher-priority communications interrupt occurs during a printer handler?",
				a: [
					"The printer interrupt is permanently deleted from the system",
					"The CPU ignores the communications interrupt until shutdown",
					"Both interrupt handlers execute without saving their processor states",
					"The communications handler runs, and the printer handler can later resume",
				],
				c: 3,
			},
			{
				q: "Which three types of information must computer components exchange?",
				a: [
					"Data, addresses, and control information",
					"Instructions, passwords, and application settings",
					"Clock speeds, source code, and file permissions",
					"Memory capacity, screen resolution, and power consumption",
				],
				c: 0,
			},
			{
				q: "What information does a memory connection receive from the processor?",
				a: [
					"Only completed output intended for external peripherals",
					"Data, memory addresses, and control signals such as read or write",
					"Only interrupt requests generated by the internal processor timer",
					"Only clock signals and information about connected network devices",
				],
				c: 1,
			},
			{
				q: "How does an input connection differ from an output connection?",
				a: [
					"Input sends data to peripherals, while output receives peripheral data",
					"Input and output both send data exclusively into main memory",
					"Input receives peripheral data for the computer, while output sends computer data outward",
					"Input controls the processor clock, while output calculates instruction addresses",
				],
				c: 2,
			},
			{
				q: "What is a bus in computer architecture?",
				a: [
					"A dedicated storage device for frequently used instructions",
					"A processor component that performs logical comparisons",
					"A program that schedules communication between applications",
					"A communication pathway connecting two or more devices",
				],
				c: 3,
			},
			{
				q: "What is the primary role of the data bus?",
				a: [
					"To carry data and instructions between computer components",
					"To identify the memory address involved in a transfer",
					"To carry only clock and interrupt signals",
					"To decide which interrupt handler has the highest priority",
				],
				c: 0,
			},
			{
				q: "What determines the maximum memory address space in the lecture's bus example?",
				a: [
					"The number of instructions stored in the Instruction Register",
					"The width of the address bus",
					"The number of devices connected to the data bus",
					"The frequency of interrupts received by the processor",
				],
				c: 1,
			},
			{
				q: "Which signals are typically carried by the control bus?",
				a: [
					"Only the data values read from main memory",
					"Only the addresses used to access peripherals",
					"Read, write, interrupt, and timing signals",
					"Only the results produced by arithmetic instructions",
				],
				c: 2,
			},
			{
				q: "What is bus contention?",
				a: [
					"A situation where memory permanently loses its stored contents",
					"A delay caused exclusively by decoding machine instructions",
					"A condition in which the processor cannot increment its PC",
					"A situation where multiple devices compete to use the same bus",
				],
				c: 3,
			},
			{
				q: "What is one disadvantage of using multiplexed address and data lines?",
				a: [
					"Control becomes more complex and performance may be affected",
					"The system must use separate physical lines for every signal",
					"The bus can no longer transmit data between memory and the CPU",
					"Every connected peripheral requires its own independent processor",
				],
				c: 0,
			},
			{
				q: "Why is bus arbitration needed in a system with shared resources?",
				a: [
					"To determine the next instruction that the CPU should decode",
					"To ensure only one module controls the bus at a given time",
					"To increase the number of bits stored in the Instruction Register",
					"To convert asynchronous communication into program instructions",
				],
				c: 1,
			},
			{
				q: "How does centralized bus arbitration work?",
				a: [
					"Every connected module independently decides when to transmit",
					"The CPU permanently owns the bus regardless of other requests",
					"A single hardware controller manages access to the bus",
					"Each peripheral receives a separate bus that cannot be shared",
				],
				c: 2,
			},
			{
				q: "What is the main difference between synchronous and asynchronous communication?",
				a: [
					"Synchronous communication uses no timing, while asynchronous requires a clock",
					"Synchronous communication is only for memory, while asynchronous is only for I/O",
					"Both methods require every transfer to occur on the same clock edge",
					"Synchronous communication follows a clock, while asynchronous uses coordination or handshaking",
				],
				c: 3,
			},
			{
				q: "What is PCI Express (PCIe) primarily used for?",
				a: [
					"Providing high-speed connections to devices such as GPUs and NVMe SSDs",
					"Replacing the CPU's instruction decoder with a peripheral controller",
					"Storing all active programs without using main memory",
					"Handling every interrupt without requiring processor involvement",
				],
				c: 0,
			},
			{
				q: "What is Direct Memory Access (DMA)?",
				a: [
					"A technique requiring the CPU to copy every data word individually",
					"A method allowing devices to transfer data directly to or from memory",
					"A protocol that allows only the CPU to access the system bus",
					"A process that converts machine instructions into device addresses",
				],
				c: 1,
			},
			{
				q: "Which statement correctly describes DMA transfer modes?",
				a: [
					"Burst mode transfers only while the CPU is idle",
					"Cycle stealing mode prevents the CPU from executing between transfers",
					"Transparent mode transfers only when the CPU is idle",
					"All DMA modes require the CPU to manage each individual data word",
				],
				c: 2,
			},
			{
				q: "Which statement correctly distinguishes latency, bandwidth, and throughput?",
				a: [
					"Latency is maximum transfer rate, bandwidth is actual transfer rate, and throughput is time delay",
					"Latency is actual data transferred, bandwidth is delay, and throughput is bus width",
					"Latency is clock frequency, bandwidth is instruction count, and throughput is memory size",
					"Latency is time delay, bandwidth is maximum transfer rate, and throughput is actual transfer rate",
				],
				c: 3,
			},

			{
				q: "What are the major topics involved in modern processor architecture?",
				a: [
					"CPU organization, instruction execution, memory hierarchy, and parallel processing",
					"File management, network routing, database design, and user interfaces",
					"Web development, application testing, software deployment, and data recovery",
					"Input devices, display resolution, file compression, and system installation",
				],
				c: 0,
			},
			{
				q: "What is the typical sequence of stages in an instruction execution cycle?",
				a: [
					"Decode, execute, fetch operands, fetch, and store output",
					"Fetch, decode, fetch operands, execute, and store output",
					"Execute, store output, decode, fetch, and fetch operands",
					"Fetch operands, execute, store output, decode, and fetch",
				],
				c: 1,
			},
			{
				q: "What happens when the CPU needs data that is not available in its registers or cache?",
				a: [
					"The CPU immediately terminates the current program",
					"The CPU transfers the entire SSD into main memory",
					"The request continues through the memory hierarchy toward main memory",
					"The CPU disables the memory controller until the next instruction",
				],
				c: 2,
			},
			{
				q: "What is a cache hit?",
				a: [
					"When a program successfully compiles into executable machine code",
					"When the CPU predicts a branch instruction correctly",
					"When the operating system moves a process into kernel mode",
					"When the requested data is found in the cache hierarchy",
				],
				c: 3,
			},
			{
				q: "Which statement correctly describes the relationship between memory capacity and access speed in the presented hierarchy?",
				a: [
					"Capacity generally increases while access becomes slower farther from the CPU",
					"Capacity and access speed both increase toward secondary storage",
					"Capacity decreases while access becomes faster toward secondary storage",
					"Every level has approximately the same capacity and access speed",
				],
				c: 0,
			},
			{
				q: "What is the role of a compiler in program execution?",
				a: [
					"It directly controls the physical movement of data between cache levels",
					"It translates high-level source code into machine-level instructions",
					"It manages the CPU's branch prediction and instruction retirement stages",
					"It converts physical memory addresses into virtual addresses",
				],
				c: 1,
			},
			{
				q: "What does the Instruction Pointer (RIP) identify during instruction fetching?",
				a: [
					"The memory location containing the most recent calculation result",
					"The current privilege level used by the operating system",
					"The address of the instruction to be fetched next",
					"The location of the highest-priority interrupt handler",
				],
				c: 2,
			},
			{
				q: "What is the primary purpose of CPU user mode?",
				a: [
					"To permit applications to control all hardware directly",
					"To allow applications to change system memory-management settings",
					"To give ordinary programs unrestricted access to every process",
					"To restrict application access to sensitive hardware and system resources",
				],
				c: 3,
			},
			{
				q: "Which statement describes kernel or supervisor mode?",
				a: [
					"It provides the operating system with privileged access to hardware and system resources",
					"It restricts the operating system to the same permissions as ordinary applications",
					"It is used exclusively for executing floating-point calculations",
					"It prevents the operating system from managing virtual memory",
				],
				c: 0,
			},
			{
				q: "What are privileged instructions?",
				a: [
					"Instructions that can only be executed by graphics processing units",
					"Instructions restricted to kernel or supervisor mode",
					"Instructions used exclusively to access the L1 cache",
					"Instructions that applications execute without operating system involvement",
				],
				c: 1,
			},
			{
				q: "What is the purpose of memory protection?",
				a: [
					"To ensure that every application uses the same physical memory addresses",
					"To increase the number of instructions completed during every clock cycle",
					"To prevent programs from improperly accessing memory belonging to other programs or the OS",
					"To eliminate the need for virtual addresses in modern processors",
				],
				c: 2,
			},
			{
				q: "What does virtual memory provide to each process?",
				a: [
					"A separate physical processor that cannot be shared with other processes",
					"Permanent storage for every instruction generated by the compiler",
					"Direct access to all physical RAM without address translation",
					"Its own virtual address space that is mapped to physical memory",
				],
				c: 3,
			},
			{
				q: "What is the function of the Memory Management Unit (MMU)?",
				a: [
					"It translates virtual addresses into physical addresses using page tables",
					"It predicts the results of conditional branch instructions",
					"It manages the CPU's floating-point arithmetic operations",
					"It schedules threads between performance and efficiency cores",
				],
				c: 0,
			},
			{
				q: "What information do page tables maintain?",
				a: [
					"The order in which the CPU retires completed instructions",
					"Mappings between virtual memory pages and physical memory frames, including permissions",
					"The current contents of every CPU execution unit",
					"The sequence of instructions predicted by the branch predictor",
				],
				c: 1,
			},
			{
				q: "What is the purpose of the Translation Lookaside Buffer (TLB)?",
				a: [
					"To store program output before it is written to an SSD",
					"To perform vector arithmetic on several data values simultaneously",
					"To cache recent address translations and speed up memory access",
					"To maintain the priority order of pending hardware interrupts",
				],
				c: 2,
			},
			{
				q: "Why do modern x86-64 processors generally implement fewer than 64 address bits?",
				a: [
					"The processor cannot store addresses in 64-bit registers",
					"Virtual memory eliminates the need for physical memory addresses",
					"The operating system requires all addresses to be 32 bits wide",
					"The full theoretical 64-bit address space is enormous and unnecessary for current systems",
				],
				c: 3,
			},
			{
				q: "What is a general-purpose register?",
				a: [
					"A small, fast storage location inside the CPU used for data and intermediate values",
					"A device that connects the processor to external network equipment",
					"A section of an SSD reserved for permanently storing machine instructions",
					"A software component that translates high-level code into assembly",
				],
				c: 0,
			},
			{
				q: "Which register is commonly associated with counting loop iterations?",
				a: ["EAX", "ECX", "ESP", "EBP"],
				c: 1,
			},
			{
				q: "What is the primary purpose of the stack pointer register?",
				a: [
					"To identify the next instruction to be fetched from memory",
					"To record whether the last arithmetic result was zero",
					"To track the current position of the stack in memory",
					"To store the physical address of the graphics processing unit",
				],
				c: 2,
			},
			{
				q: "Which statement correctly describes the EFLAGS register?",
				a: [
					"It contains only the addresses of memory locations used by the CPU",
					"It stores the machine instructions currently waiting to execute",
					"It manages the physical connections between CPU cores",
					"It contains status and control flags, with each flag represented by a bit",
				],
				c: 3,
			},
			{
				q: "What does the carry flag indicate in the lecture's description of status flags?",
				a: [
					"An unsigned arithmetic operation produced a result outside its representable range",
					"A signed arithmetic operation produced a negative result",
					"The most recent comparison determined that two values were equal",
					"The processor incorrectly predicted the destination of a branch",
				],
				c: 0,
			},
			{
				q: "What does the overflow flag indicate?",
				a: [
					"The result of the last operation was exactly zero",
					"A signed arithmetic operation produced a result outside its representable range",
					"The processor received an interrupt from an external device",
					"The CPU failed to find requested data in the L1 cache",
				],
				c: 1,
			},
			{
				q: "What is the purpose of XMM registers in the presented processor architecture?",
				a: [
					"To store the current instruction address for the CPU",
					"To track the current stack frame used by a program",
					"To support 128-bit SIMD operations on multiple data elements",
					"To manage the mapping of virtual pages to physical memory",
				],
				c: 2,
			},
			{
				q: "What does SIMD stand for, and what is its main benefit?",
				a: [
					"Sequential Instruction, Multiple Devices; it improves device connectivity",
					"Single Instruction, Memory Division; it increases available RAM capacity",
					"Specialized Instruction, Managed Data; it improves program security",
					"Single Instruction, Multiple Data; it processes multiple data values simultaneously",
				],
				c: 3,
			},
			{
				q: "Which type of processor is best suited to highly parallel workloads, according to the lecture?",
				a: ["GPU", "CPU", "MMU", "TLB"],
				c: 0,
			},
			{
				q: "What is the primary role of an NPU?",
				a: [
					"Managing stack operations and general-purpose CPU registers",
					"Accelerating artificial intelligence and machine learning workloads",
					"Translating all virtual memory addresses into physical addresses",
					"Executing operating system instructions in supervisor mode",
				],
				c: 1,
			},
			{
				q: "What is simultaneous multithreading (SMT)?",
				a: [
					"A technique that increases the capacity of the CPU's L1 cache",
					"A method that assigns every program to a separate physical processor",
					"A technology that allows one physical CPU core to execute instructions from multiple threads",
					"A process that requires each instruction to finish before another begins",
				],
				c: 2,
			},
			{
				q: "What is the purpose of pipelining in a CPU?",
				a: [
					"To ensure that only one instruction can occupy the processor at a time",
					"To eliminate the need for decoding machine instructions",
					"To prevent memory access from overlapping with other processor activity",
					"To overlap instruction stages so multiple instructions can be in progress",
				],
				c: 3,
			},
			{
				q: "What is instruction-level parallelism (ILP)?",
				a: [
					"The ability to execute multiple independent instructions simultaneously",
					"The ability to store multiple programs permanently in main memory",
					"The ability to translate several virtual addresses into physical addresses",
					"The ability to run applications without compiling their source code",
				],
				c: 0,
			},
			{
				q: "How does superscalar execution improve processor performance?",
				a: [
					"It increases the physical size of the SSD without changing CPU operation",
					"It allows the processor to issue and execute multiple instructions in a clock cycle",
					"It prevents the CPU from executing instructions out of their original order",
					"It replaces all general-purpose registers with specialized graphics memory",
				],
				c: 1,
			},
			{
				q: "What is the purpose of out-of-order execution?",
				a: [
					"To execute every instruction strictly in the order it appears in the program",
					"To permanently remove instructions that depend on other instructions",
					"To let ready instructions proceed while other instructions are waiting",
					"To ensure that every branch instruction always produces the same prediction",
				],
				c: 2,
			},
			{
				q: "What is speculative execution?",
				a: [
					"Executing instructions only after all memory transfers have finished",
					"Running every possible instruction in the program to completion",
					"Disabling branch prediction to guarantee the shortest execution path",
					"Predicting a branch outcome and executing instructions ahead of confirmation",
				],
				c: 3,
			},
			{
				q: "What happens when a CPU makes an incorrect branch prediction?",
				a: [
					"It flushes incorrect instructions from the pipeline and resumes on the correct path",
					"It permanently changes the program's branch condition",
					"It deletes the current process and clears all physical memory",
					"It skips instruction decoding and immediately stores the predicted result",
				],
				c: 0,
			},
			{
				q: "What is the difference between P-cores and E-cores in a hybrid processor?",
				a: [
					"P-cores handle only background tasks, while E-cores handle demanding applications",
					"P-cores prioritize high performance, while E-cores prioritize energy efficiency",
					"P-cores perform only AI calculations, while E-cores perform only graphics operations",
					"P-cores manage virtual memory, while E-cores handle instruction decoding",
				],
				c: 1,
			},
			{
				q: "How does thread scheduling help modern hybrid processors balance performance and power consumption?",
				a: [
					"It sends all threads to E-cores regardless of their requirements",
					"It assigns every background task to a separate physical processor",
					"It directs demanding tasks toward P-cores and less intensive tasks toward E-cores",
					"It prevents multiple CPU cores from executing tasks at the same time",
				],
				c: 2,
			},
			{
				q: "What is register renaming designed to accomplish in modern CPUs?",
				a: [
					"Increase the number of physical memory addresses available to programs",
					"Allow privileged instructions to execute in user mode",
					"Replace the instruction pointer with a shared system-wide register",
					"Eliminate false data dependencies and improve instruction-level parallelism",
				],
				c: 3,
			},
			{
				q: "What is the main purpose of a GPU compared with a general-purpose CPU?",
				a: [
					"A GPU is designed for highly parallel computation, while a CPU handles general-purpose processing",
					"A GPU translates virtual addresses, while a CPU only stores program instructions",
					"A GPU manages operating system privileges, while a CPU handles memory protection",
					"A GPU replaces main memory, while a CPU provides permanent data storage",
				],
				c: 0,
			},
			{
				q: "Which sequence correctly represents abstraction levels in a modern computer, from higher to lower levels?",
				a: [
					"Transistors, digital logic, microarchitecture, ISA, compiler, application",
					"Application, high-level language, compiler, assembly, ISA, microarchitecture, digital logic, transistors",
					"Application, transistors, assembly, operating system, cache, machine instructions",
					"Digital logic, application, ISA, high-level language, microarchitecture, compiler",
				],
				c: 1,
			},
			{
				q: "How does a program typically interact with hardware when using an operating system?",
				a: [
					"The application directly rewires the CPU before each instruction executes",
					"The compiler communicates with hardware without generating machine instructions",
					"The application uses machine instructions and operating-system services, such as system calls and drivers, to access hardware",
					"The operating system converts all hardware operations into virtual memory pages before execution",
				],
				c: 2,
			},
		],
	},

	CloudComp: {
		quiz1: [
			{
				q: "What is cloud computing?",
				a: [
					"On-demand delivery of computing resources over the internet with usage-based billing",
					"The process of constructing and owning physical data centers for local workloads",
					"A programming language used specifically to write applications for internet hosting",
					"A physical computer component installed inside a single user's workstation",
				],
				c: 0,
			},

			{
				q: "Which of the following is a key component of cloud computing?",
				a: [
					"Compute",
					"Keyboard manufacturing",
					"Desktop publishing",
					"Physical cabling only",
				],
				c: 0,
			},

			{
				q: "Which type of storage is listed as a cloud computing component?",
				a: [
					"Object storage",
					"Tape-only storage",
					"BIOS storage",
					"CPU storage",
				],
				c: 0,
			},

			{
				q: "Which of the following is an example of cloud networking?",
				a: ["VPCs", "CPU registers", "RAM slots", "USB ports"],
				c: 0,
			},

			{
				q: "What does cloud computing abstract?",
				a: [
					"Physical infrastructure",
					"All software code",
					"User passwords",
					"Programming languages",
				],
				c: 0,
			},

			{
				q: "What allows organizations to scale globally without owning hardware?",
				a: [
					"Cloud abstraction of physical infrastructure",
					"Local-only storage",
					"Manual hardware installation",
					"Single-user operating systems",
				],
				c: 0,
			},

			{
				q: "What type of billing is associated with cloud computing?",
				a: [
					"Usage-based billing",
					"One-time hardware-only billing",
					"Paper-based billing",
					"No billing",
				],
				c: 0,
			},

			{
				q: "Which database types are used for cloud computing components?",
				a: [
					"SQL and NoSQL",
					"Only spreadsheets",
					"Only CSV files",
					"Only graphing databases",
				],
				c: 0,
			},

			{
				q: "What does on-demand self-service mean?",
				a: [
					"Users can provision resources automatically without human intervention",
					"Users must call a technician for every resource",
					"Resources can only be provisioned once per year",
					"Users cannot provision resources themselves",
				],
				c: 0,
			},

			{
				q: "What does broad network access mean in cloud computing?",
				a: [
					"Services are accessible through standard networks and devices",
					"Services can only be accessed from one computer",
					"Services require physical access to a data center",
					"Services are disconnected from networks",
				],
				c: 0,
			},

			{
				q: "Which cloud characteristic involves providers pooling resources for multiple customers?",
				a: [
					"Resource pooling",
					"Measured service",
					"Broad network access",
					"Rapid deployment",
				],
				c: 0,
			},

			{
				q: "What is multi-tenancy associated with?",
				a: [
					"Resource pooling",
					"Binary storage",
					"Physical isolation of every customer",
					"Manual software installation",
				],
				c: 0,
			},

			{
				q: "What does rapid elasticity allow cloud resources to do?",
				a: [
					"Scale up or down automatically based on demand",
					"Remain permanently fixed",
					"Only increase once",
					"Be manually removed from data centers",
				],
				c: 0,
			},

			{
				q: "What does measured service involve?",
				a: [
					"Monitoring, controlling, and billing usage based on consumption",
					"Providing and allocating resources without tracking usage",
					"Limiting and reserving resources regardless of usage",
					"Managing and deploying resources without measuring usage",
				],
				c: 0,
			},

			{
				q: "What computing approach was introduced by mainframes and time-sharing in the 1960s?",
				a: [
					"Shared computing",
					"Serverless computing",
					"Edge computing",
					"Container orchestration",
				],
				c: 0,
			},

			{
				q: "What technology enabled hardware abstraction in the 1990s?",
				a: [
					"Virtualization",
					"Serverless functions",
					"API gateways",
					"Object storage",
				],
				c: 0,
			},

			{
				q: "Which company is mentioned in connection with virtualization in the 1990s?",
				a: ["VMware", "Salesforce", "Oracle", "Microsoft"],
				c: 0,
			},

			{
				q: "What matured during the 2000s in Cloud Computing?",
				a: [
					"Web services and distributed systems",
					"Quantum computing and AI chips",
					"Edge computing only",
					"Mobile app stores",
				],
				c: 0,
			},

			{
				q: "What happened in 2006 that marked commercial cloud adoption?",
				a: [
					"AWS launched EC2 and S3",
					"Docker was released",
					"Kubernetes became available",
					"Azure launched",
				],
				c: 0,
			},

			{
				q: "Which technologies transformed application deployment during the 2010s?",
				a: [
					"Containers and orchestration",
					"Mainframes and time-sharing",
					"Physical servers and tape drives",
					"Only SQL databases",
				],
				c: 0,
			},

			{
				q: "Which technology is used to create and run containers?",
				a: ["Docker", "VMware", "EC2", "Salesforce"],
				c: 0,
			},

			{
				q: "Which technology is used to manage and orchestrate containers?",
				a: ["Kubernetes", "S3", "Azure App Services", "Google Workspace"],
				c: 0,
			},

			{
				q: "Which cloud technologies are described as dominating the 2020s?",
				a: [
					"Serverless, edge computing, AI-driven cloud services, and multi-cloud architectures",
					"Legacy mainframes supported by removable floppy disks and magnetic tape drives",
					"Dedicated physical server fleets with no managed or serverless services",
					"Standalone desktop applications installed and operated on local computers",
				],
				c: 0,
			},

			{
				q: "Cloud computing is the result of decades of innovation in what area?",
				a: [
					"Distributed systems",
					"Word processing",
					"Desktop publishing",
					"Computer graphics",
				],
				c: 0,
			},

			{
				q: "Which of the following is a modern IT use of cloud computing?",
				a: [
					"Enterprise applications and SaaS platforms",
					"Only local file storage",
					"Only physical networking",
					"Only BIOS configuration",
				],
				c: 0,
			},

			{
				q: "How can cloud computing support web applications?",
				a: [
					"By supporting global web and mobile applications",
					"By preventing network access",
					"By requiring every application to run locally",
					"By eliminating databases",
				],
				c: 0,
			},

			{
				q: "What type of processing can cloud platforms support?",
				a: [
					"Big data analytics and real-time processing",
					"Only offline processing and analytics",
					"Only manual calculations and manual statistics",
					"Only word processing and data implimentation",
				],
				c: 0,
			},

			{
				q: "Which workloads can cloud computing support?",
				a: [
					"Machine learning and AI workloads",
					"Only operating system installation",
					"Only spreadsheet printing",
					"Only hardware testing",
				],
				c: 0,
			},

			{
				q: "What development practices can cloud computing support?",
				a: [
					"DevOps pipelines and CI/CD automation",
					"Only manual software deployment",
					"Only hardware assembly",
					"Only paper documentation",
				],
				c: 0,
			},

			{
				q: "Which cybersecurity operations are listed as cloud use cases?",
				a: [
					"SIEM, SOAR, IAM, and threat detection",
					"Only antivirus installation",
					"Only password printing",
					"Only physical locks",
				],
				c: 0,
			},

			{
				q: "What does IaaS stand for?",
				a: [
					"Infrastructure as a Service",
					"Internet as a System",
					"Infrastructure and Application Software",
					"Integrated Application as a Service",
				],
				c: 0,
			},

			{
				q: "What does PaaS stand for?",
				a: [
					"Platform as a Service",
					"Programming as a System",
					"Platform and Storage Service",
					"Private Application as a Service",
				],
				c: 0,
			},

			{
				q: "What does SaaS stand for?",
				a: [
					"Software as a Service",
					"Storage as a System",
					"Server as a Service",
					"Security as a Service",
				],
				c: 0,
			},

			{
				q: "What does IaaS primarily provide?",
				a: [
					"Virtualized hardware resources",
					"Fully managed applications",
					"Only developer frameworks",
					"Only email services",
				],
				c: 0,
			},

			{
				q: "What does PaaS primarily provide?",
				a: [
					"Managed environments for application development",
					"Physical data centers",
					"Fully managed email accounts only",
					"Hardware without networking",
				],
				c: 0,
			},

			{
				q: "What does SaaS primarily provide?",
				a: [
					"Fully managed applications delivered over the internet",
					"Virtual machines only in a confided software space",
					"Raw networking hardware to be used with various other pieces of software",
					"Operating system kernels only",
				],
				c: 0,
			},

			{
				q: "What differs between IaaS, PaaS, and SaaS?",
				a: [
					"Levels of control, flexibility, and responsibility",
					"The color of their interfaces",
					"The physical size of computers",
					"The number of users allowed",
				],
				c: 0,
			},

			{
				q: "What does IaaS provide as foundational resources?",
				a: [
					"Compute, storage, and networking",
					"Only email and calendars",
					"Only application source code",
					"Only database queries",
				],
				c: 0,
			},

			{
				q: "What level of operating system control does IaaS provide?",
				a: [
					"Full control over operating systems and applications",
					"No control at all",
					"Control only over browser settings and web based applications",
					"Control only over email services and other network applications",
				],
				c: 0,
			},

			{
				q: "What can users configure with IaaS?",
				a: [
					"Firewalls, networks, and security policies",
					"Only document formatting",
					"Only application icons",
					"Only email signatures",
				],
				c: 0,
			},

			{
				q: "Which is an example of an IaaS service?",
				a: ["AWS EC2", "Microsoft 365", "Google Workspace", "Salesforce"],
				c: 0,
			},

			{
				q: "Which Azure service is an IaaS example?",
				a: [
					"Azure Virtual Machines",
					"Azure App Services",
					"Microsoft 365",
					"Azure Workspace",
				],
				c: 0,
			},

			{
				q: "Which Google Cloud service is an IaaS example?",
				a: [
					"Google Compute Engine",
					"Google App Engine",
					"Google Workspace",
					"Google Drive",
				],
				c: 0,
			},

			{
				q: "Which is a use case for IaaS?",
				a: [
					"Disaster recovery",
					"Email collaboration only",
					"Browser-based CRM only",
					"Online document editing only",
				],
				c: 0,
			},

			{
				q: "Which type of system migration is an IaaS use case?",
				a: [
					"Legacy system migration",
					"Social media migration",
					"Printer migration",
					"Keyboard migration",
				],
				c: 0,
			},

			{
				q: "What does PaaS provide for developers?",
				a: [
					"A managed environment for building, deploying, and scaling applications",
					"A service for storing files and managing user accounts",
					"A system for monitoring network traffic and hardware",
					"A tool for purchasing and configuring physical servers",
				],
				c: 0,
			},

			{
				q: "Which task can PaaS perform automatically?",
				a: [
					"OS patching and updates",
					"Physical data center construction",
					"Keyboard replacement",
					"Manual server assembly",
				],
				c: 0,
			},

			{
				q: "What built-in capability is associated with PaaS?",
				a: [
					"Monitoring and scaling",
					"Physical hardware repair",
					"Manual BIOS updates",
					"Paper-based logging",
				],
				c: 0,
			},

			{
				q: "What does PaaS integrate for developers?",
				a: [
					"Developer tools and frameworks",
					"Only physical storage devices",
					"Only networking cables",
					"Only user passwords",
				],
				c: 0,
			},

			{
				q: "Which is an example of PaaS?",
				a: ["AWS Elastic Beanstalk", "AWS EC2", "Microsoft 365", "Salesforce"],
				c: 0,
			},

			{
				q: "Which Azure service is an example of PaaS?",
				a: [
					"Azure App Services",
					"Azure Virtual Machines",
					"Microsoft 365",
					"Azure Storage Drives",
				],
				c: 0,
			},

			{
				q: "Which Google Cloud service is an example of PaaS?",
				a: [
					"Google App Engine",
					"Google Compute Engine",
					"Google Workspace",
					"Google Cloud Storage only",
				],
				c: 0,
			},

			{
				q: "Which development scenario is a PaaS use case?",
				a: [
					"Rapid development without managing infrastructure",
					"Managing physical data centers",
					"Replacing computer hardware",
					"Manually installing operating systems",
				],
				c: 0,
			},

			{
				q: "How are SaaS applications typically accessed?",
				a: [
					"Through a browser or API",
					"Only through physical terminals",
					"Only through BIOS",
					"Only through USB devices",
				],
				c: 0,
			},

			{
				q: "What does SaaS eliminate for users?",
				a: [
					"Installation and maintenance",
					"Internet access",
					"All user accounts",
					"All application functionality",
				],
				c: 0,
			},

			{
				q: "What type of pricing is commonly associated with SaaS?",
				a: [
					"Subscription-based pricing",
					"Hardware-only pricing",
					"No pricing",
					"Per-keyboard pricing",
				],
				c: 0,
			},

			{
				q: "What happens automatically with SaaS applications?",
				a: [
					"Updates and security patches",
					"Physical server construction",
					"Network cable installation",
					"CPU replacement",
				],
				c: 0,
			},

			{
				q: "Which is an example of SaaS?",
				a: [
					"Microsoft 365",
					"AWS EC2",
					"Google Compute Engine",
					"Azure Virtual Machines",
				],
				c: 0,
			},

			{
				q: "Which Google product is a good SaaS example?",
				a: [
					"Google Workspace",
					"Google Compute Engine",
					"Google App Engine",
					"Kubernetes",
				],
				c: 0,
			},

			{
				q: "Which of these is a good SaaS example?",
				a: [
					"Salesforce",
					"AWS EC2",
					"Azure Virtual Machines",
					"Google Compute Engine",
				],
				c: 0,
			},

			{
				q: "Which is a listed SaaS use case?",
				a: [
					"Email and collaboration tools",
					"Legacy hardware migration",
					"Firewall configuration",
					"Virtual machine management",
				],
				c: 0,
			},

			{
				q: "What is a public cloud?",
				a: [
					"Shared infrastructure that is scalable and cost-effective",
					"Dedicated infrastructure for one organization only",
					"A combination of private and public infrastructure",
					"Infrastructure shared only by organizations in one industry",
				],
				c: 0,
			},

			{
				q: "What is a private cloud?",
				a: [
					"Dedicated infrastructure offering enhanced control",
					"Shared infrastructure for everyone",
					"A cloud used only for email",
					"A cloud with no security controls",
				],
				c: 0,
			},

			{
				q: "What is a hybrid cloud?",
				a: [
					"A combination of public and private cloud",
					"A combination of two private clouds only",
					"A cloud without infrastructure",
					"A cloud used only by schools",
				],
				c: 0,
			},

			{
				q: "What is a community cloud?",
				a: [
					"A cloud shared by organizations with similar requirements",
					"A cloud available only to one individual and to be viewed by multiple organizations",
					"A cloud with no shared infrastructure and no means of sharing it to other organizations",
					"A cloud used only for gaming",
				],
				c: 0,
			},

			{
				q: "Which sectors are given as examples for community clouds?",
				a: [
					"Healthcare and education",
					"Retail and entertainment only",
					"Manufacturing and transportation only",
					"Gaming and sports only",
				],
				c: 0,
			},

			{
				q: "Which deployment model supports legacy systems according?",
				a: ["Hybrid cloud", "Public cloud", "Community cloud", "SaaS"],
				c: 0,
			},

			{
				q: "Which deployment model is described as compliance-friendly?",
				a: ["Private cloud", "Public cloud", "SaaS", "Community cloud"],
				c: 0,
			},

			{
				q: "What do deployment models help determine?",
				a: [
					"Governance, security, and cost strategies",
					"CPU instruction sets",
					"Keyboard layouts",
					"Programming language syntax",
				],
				c: 0,
			},

			{
				q: "Which cloud provider is described as having the largest ecosystem?",
				a: ["AWS", "Azure", "Google Cloud", "IBM Cloud"],
				c: 0,
			},

			{
				q: "Which provider is described as having broad service offerings?",
				a: ["AWS", "Oracle Cloud", "Alibaba Cloud", "Azure only"],
				c: 0,
			},

			{
				q: "Which provider is associated with strong enterprise integration?",
				a: ["Azure", "AWS", "Google Cloud", "Alibaba Cloud"],
				c: 0,
			},

			{
				q: "Which provider is described as being strong in Microsoft-centric environments?",
				a: ["Azure", "AWS", "Google Cloud", "IBM Cloud"],
				c: 0,
			},

			{
				q: "Which provider is described as leading in data analytics and AI?",
				a: ["Google Cloud", "Azure", "AWS", "Oracle Cloud"],
				c: 0,
			},

			{
				q: "Which of the following is listed as another cloud provider?",
				a: [
					"IBM Cloud",
					"Docker Cloud only",
					"Kubernetes Cloud",
					"Microsoft Workspace Cloud",
				],
				c: 0,
			},

			{
				q: "Which is a cloud computing use case?",
				a: [
					"Hosting websites and applications",
					"Manufacturing CPUs",
					"Digital storing media files like textbooks",
					"Handling servicing for keyboards",
				],
				c: 0,
			},

			{
				q: "How can cloud computing be used with data?",
				a: [
					"Data warehousing and analytics",
					"Only physical data filing",
					"Only paper-based storage",
					"Only local spreadsheets",
				],
				c: 0,
			},

			{
				q: "What type of pipelines can cloud computing support?",
				a: [
					"Machine learning pipelines",
					"Only printing pipelines",
					"Only hardware pipelines",
					"Only keyboard pipelines",
				],
				c: 0,
			},

			{
				q: "What type of devices can cloud platforms manage?",
				a: [
					"IoT devices",
					"Only desktop monitors",
					"Only keyboards",
					"Only printers",
				],
				c: 0,
			},

			{
				q: "What work environment can cloud computing support?",
				a: [
					"Virtual desktops and remote work",
					"Only local desktop work",
					"Only data center work",
					"Only offline computing",
				],
				c: 0,
			},

			{
				q: "What does IAM stand for?",
				a: [
					"Identity and Access Management",
					"Internet Application Management",
					"Infrastructure Access Machine",
					"Integrated Application Monitoring",
				],
				c: 0,
			},

			{
				q: "What are two forms of encryption mentioned in cloud security?",
				a: [
					"Encryption at rest and in transit",
					"Encryption at startup and shutdown",
					"Encryption at login and logout",
					"Encryption at CPU and RAM",
				],
				c: 0,
			},

			{
				q: "What is network segmentation used as in cloud cybersecurity?",
				a: [
					"A security consideration",
					"A billing model",
					"A storage type",
					"A deployment model",
				],
				c: 0,
			},

			{
				q: "What is an additional form of segmentation?",
				a: [
					"Micro-segmentation",
					"Macro-storage",
					"Virtual partitioning",
					"Cloud division",
				],
				c: 0,
			},

			{
				q: "What security activities should cloud environments include?",
				a: [
					"Logging, monitoring, and threat detection",
					"Only application development",
					"Only billing",
					"Only hardware upgrades",
				],
				c: 0,
			},

			{
				q: "Where must security be integrated?",
				a: [
					"Into every cloud architecture",
					"Only into private clouds",
					"Only into SaaS",
					"Only into physical data centers",
				],
				c: 0,
			},

			{
				q: "What is the shared responsibility model?",
				a: [
					"A model dividing security responsibilities between the provider and customer",
					"A model dividing cloud resources between multiple customers",
					"A model dividing application costs between different departments",
					"A model dividing network traffic between multiple servers",
				],
				c: 0,
			},
			{
				q: "Who is responsible for physical data center security?",
				a: [
					"The cloud provider",
					"The customer only",
					"The application developer only",
					"The end user only",
				],
				c: 0,
			},

			{
				q: "Who is responsible for hardware and the hypervisor?",
				a: [
					"The cloud provider",
					"The customer only",
					"The SaaS user",
					"The database administrator only",
				],
				c: 0,
			},

			{
				q: "Who is responsible for identity management?",
				a: [
					"The customer",
					"The cloud provider only",
					"The hardware manufacturer",
					"The internet service provider",
				],
				c: 0,
			},

			{
				q: "Who is responsible for data protection?",
				a: [
					"The customer",
					"The cloud provider only",
					"The network cable manufacturer",
					"The operating system vendor only",
				],
				c: 0,
			},

			{
				q: "Who is responsible for application security?",
				a: [
					"The customer",
					"The physical data center",
					"The cloud provider in every situation",
					"The internet service provider",
				],
				c: 0,
			},

			{
				q: "Does responsibility remain identical across IaaS, PaaS, and SaaS?",
				a: [
					"No, responsibility varies across the service models",
					"Yes, it is always identical",
					"Only in public cloud",
					"Only in private cloud",
				],
				c: 0,
			},

			{
				q: "What is a cloud region?",
				a: [
					"A geographic location of cloud resources",
					"A physical computer",
					"A software application",
					"A security policy",
				],
				c: 0,
			},

			{
				q: "What is an Availability Zone?",
				a: [
					"An independent data center within a region",
					"A cloud billing account",
					"A virtual machine",
					"A type of container",
				],
				c: 0,
			},

			{
				q: "What is a virtual machine?",
				a: [
					"A software-based computer",
					"A physical data center",
					"A network cable",
					"A database table",
				],
				c: 0,
			},

			{
				q: "What is a container?",
				a: [
					"A lightweight, portable application environment",
					"A physical, heavy server rack",
					"A database type",
					"A large-scale, geographic region",
				],
				c: 0,
			},

			{
				q: "What is serverless computing?",
				a: [
					"Event-driven compute without managing servers",
					"Computing without software",
					"Computing without networks",
					"A physical server architecture",
				],
				c: 0,
			},

			{
				q: "What is an API Gateway?",
				a: [
					"An entry point for APIs",
					"A physical firewall",
					"A database",
					"A storage disk",
				],
				c: 0,
			},

			{
				q: "What is object storage designed for?",
				a: [
					"Scalable storage for unstructured data",
					"CPU instructions",
					"Operating system kernels",
					"Network routing tables",
				],
				c: 0,
			},

			{
				q: "What does a load balancer do?",
				a: [
					"Distributes traffic across resources",
					"Encrypts every file automatically",
					"Creates virtual machines",
					"Stores unstructured data",
				],
				c: 0,
			},

			{
				q: "Which is a benefit of cloud computing?",
				a: [
					"Reduced capital expenditure",
					"Increased hardware ownership requirements",
					"Reduced scalability",
					"Slower deployment",
				],
				c: 0,
			},

			{
				q: "What type of scalability is listed as a cloud benefit?",
				a: [
					"Elastic scalability",
					"Fixed scalability",
					"Manual scalability",
					"Hardware-only scalability",
				],
				c: 0,
			},

			{
				q: "What geographic benefit does cloud computing provide?",
				a: [
					"Global distribution",
					"Local-only distribution",
					"Single-device distribution",
					"Offline distribution",
				],
				c: 0,
			},

			{
				q: "What can cloud computing improve about deployment?",
				a: [
					"Deployment cycles can be faster",
					"Deployment becomes entirely manual",
					"Deployment is limited to physical servers",
					"Deployment is eliminated",
				],
				c: 0,
			},

			{
				q: "What security-related benefit is mentioned?",
				a: [
					"Built-in security and compliance tools",
					"No security controls",
					"Automatic removal of all risks",
					"Elimination of cybersecurity",
				],
				c: 0,
			},

			{
				q: "What is one challenge associated with cloud computing?",
				a: [
					"Vendor lock-in",
					"Guaranteed portability",
					"Unlimited resources",
					"Zero configuration requirements",
				],
				c: 0,
			},

			{
				q: "What type of concerns can arise from cloud data location?",
				a: [
					"Data residency and privacy concerns",
					"Keyboard residency concerns",
					"CPU ownership concerns",
					"Monitor placement concerns",
				],
				c: 0,
			},

			{
				q: "What can cloud misconfigurations potentially lead to?",
				a: [
					"Breaches",
					"Automatic security",
					"Lower network latency in every case",
					"Free resources",
				],
				c: 0,
			},

			{
				q: "What can poor resource management cause?",
				a: [
					"Cost overruns",
					"Automatic cost elimination",
					"Guaranteed savings",
					"No billing",
				],
				c: 0,
			},

			{
				q: "Why is understanding cloud risks important?",
				a: [
					"It is essential for secure cloud adoption",
					"It eliminates the need for security",
					"It prevents all cloud usage",
					"It removes the need for governance",
				],
				c: 0,
			},

			{
				q: "What is a multi-cloud strategy?",
				a: [
					"Using multiple cloud environments or providers",
					"Using only one physical server",
					"Using no cloud providers",
					"Using only private cloud",
				],
				c: 0,
			},

			{
				q: "What technologies are associated with cloud-native development?",
				a: [
					"Microservices and containers",
					"Mainframes and tape drives",
					"BIOS and USB",
					"Only physical servers",
				],
				c: 0,
			},

			{
				q: "What type of cloud services are identified as a modern trend?",
				a: [
					"AI-driven cloud services",
					"Paper-based cloud services",
					"Offline-only cloud services",
					"Hardware-only cloud services",
				],
				c: 0,
			},

			{
				q: "What is edge computing intended to support?",
				a: [
					"Low-latency workloads",
					"Only offline workloads",
					"Only physical storage",
					"Only email applications",
				],
				c: 0,
			},

			{
				q: "What security architecture is listed as a cloud adoption trend?",
				a: [
					"Zero-trust security architectures",
					"No-trust hardware architecture",
					"Single-password architecture",
					"Physical-only security architecture",
				],
				c: 0,
			},

			{
				q: "How is cloud computing continuing to change modern IT?",
				a: [
					"It continues to evolve rapidly and shape modern IT",
					"It is being replaced entirely by mainframes",
					"It is becoming limited to local networks",
					"It is no longer changing",
				],
				c: 0,
			},

			{
				q: "Which of the following is one of the main learning objectives of learning Cloud Computing?",
				a: [
					"Understanding elasticity, scalability, and resource pooling",
					"Learning only assembly language",
					"Building physical CPUs",
					"Designing desktop monitors",
				],
				c: 0,
			},

			{
				q: "Which three service models should learners be able to differentiate?",
				a: [
					"IaaS, PaaS, and SaaS",
					"AWS, Azure, and Google Cloud",
					"Public, private, and hybrid only",
					"VM, container, and serverless",
				],
				c: 0,
			},

			{
				q: "Which deployment models should learners be able to identify?",
				a: [
					"Public, private, hybrid, and community",
					"IaaS, PaaS, and SaaS",
					"VM, container, and serverless",
					"AWS, Azure, and Google",
				],
				c: 0,
			},

			{
				q: "Which major cloud providers are specifically discussed?",
				a: [
					"AWS, Azure, and Google Cloud",
					"Docker, Kubernetes, and VMware",
					"Salesforce, Microsoft 365, and Google Workspace",
					"IBM, Oracle, and Alibaba only",
				],
				c: 0,
			},
		],
		quiz2: [
			{
				q: "What is Zero Trust based on?",
				a: [
					"Never trust, always verify",
					"Trust all internal network traffic",
					"Trust users after one successful login",
					"Allow access based only on IP address",
				],
				c: 0,
			},
			{
				q: "True or False: Zero Trust assumes that attackers are never already inside the environment.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "What problem does Zero Trust address when attackers move between systems after compromising one system?",
				a: [
					"Lateral movement",
					"Data compression",
					"DNS resolution",
					"Load balancing",
				],
				c: 0,
			},
			{
				q: "Fill in the blank: Zero Trust requires organizations to ______ every request.",
				a: ["verify", "ignore", "encrypt", "cache"],
				c: 0,
			},
			{
				q: "Which statement best describes the traditional castle-and-moat security model?",
				a: [
					"Security is concentrated around a network perimeter",
					"Every request is continuously verified",
					"Every workload receives its own identity",
					"All internal traffic is denied",
				],
				c: 0,
			},
			{
				q: "True or False: Cloud-native architectures make static network perimeters more effective.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "Which factor helped drive the adoption of Zero Trust?",
				a: [
					"Remote workforce expansion",
					"Reduced internet usage",
					"Elimination of cloud computing",
					"Fewer connected devices",
				],
				c: 0,
			},
			{
				q: "What is meant by the phrase 'identity as the new perimeter'?",
				a: [
					"Who or what you are becomes more important than where you are",
					"Physical firewalls are no longer needed anywhere",
					"Only users inside a building can access resources",
					"IP addresses become the primary identity",
				],
				c: 0,
			},
			{
				q: "Which Zero Trust principle means granting only the minimum rights required?",
				a: [
					"Least privilege access",
					"Assume breach",
					"Continuous monitoring",
					"Network openness",
				],
				c: 0,
			},
			{
				q: "True or False: Zero Trust gives users implicit trust when they are connected to the corporate network.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},

			{
				q: "Which of the following is a core Zero Trust principle?",
				a: [
					"Continuous monitoring",
					"Permanent trust",
					"Open internal access",
					"Location-based authorization",
				],
				c: 0,
			},
			{
				q: "Fill in the blank: Zero Trust operates on the principle 'Never Trust, Always ______.'",
				a: ["Verify", "Connect", "Permit", "Encrypt"],
				c: 0,
			},
			{
				q: "What does 'Assume Breach' mean in Zero Trust?",
				a: [
					"Design security as if attackers are already inside",
					"Assume every user is trustworthy",
					"Assume the firewall cannot fail",
					"Assume all traffic is encrypted",
				],
				c: 0,
			},
			{
				q: "Which Zero Trust pillar focuses on users, services, and machines?",
				a: ["Identity", "Data", "Networks", "Infrastructure"],
				c: 0,
			},
			{
				q: "Which Zero Trust pillar focuses on managed and unmanaged endpoints?",
				a: ["Devices", "Applications", "Data", "Identity"],
				c: 0,
			},
			{
				q: "True or False: Applications and APIs are excluded from the Zero Trust pillar model.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "Which Zero Trust pillar includes classification and protection?",
				a: ["Data", "Networks", "Devices", "Identity"],
				c: 0,
			},
			{
				q: "Which pillar includes hosts, containers, and cloud resources?",
				a: ["Infrastructure", "Applications", "Data", "Devices"],
				c: 0,
			},
			{
				q: "Which pillar focuses on segmentation and traffic control?",
				a: ["Networks", "Identity", "Applications", "Data"],
				c: 0,
			},
			{
				q: "Fill in the blank: Zero Trust treats identity as a primary ______ _______ rather than relying only on traditional network boundaries.",
				a: [
					"security control",
					"database protector",
					"firewall rule",
					"subnet divisor",
				],
				c: 0,
			},

			{
				q: "What is authentication?",
				a: [
					"Proving who or what is making a request",
					"Determining what resources a user may access",
					"Encrypting network traffic",
					"Creating a network segment",
				],
				c: 0,
			},
			{
				q: "What is authorization?",
				a: [
					"Determining what an authenticated identity is allowed to do",
					"Proving the identity of a requester",
					"Checking whether a device has an IP address",
					"Encrypting a password",
				],
				c: 0,
			},
			{
				q: "True or False: Authentication should happen only after access is granted.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "Which of the following can be used as an authentication method?",
				a: ["Password", "Role", "Network segment", "Application permission"],
				c: 0,
			},
			{
				q: "Which of the following is an example of authorization?",
				a: [
					"Allowing Alice to access the HR application but not the Finance database",
					"Confirming that Alice's password matches the credential stored for her account",
					"Comparing Alice's fingerprint with the biometric template registered to her account",
					"Validating the security token Alice presents during the sign-in process",
				],
				c: 0,
			},
			{
				q: "Fill in the blank: Authorization answers the question 'What can you ______?'",
				a: ["access", "authenticate", "encrypt", "verify"],
				c: 0,
			},
			{
				q: "Which of the following represents the correct order?",
				a: [
					"Identity → Authentication → Authorization",
					"Authorization → Identity → Authentication",
					"Authentication → Authorization → Identity",
					"Identity → Authorization → Authentication",
				],
				c: 0,
			},
			{
				q: "True or False: Authorization is unrelated to what an identity is permitted to access.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "Which is an example of a workload identity?",
				a: [
					"A container or Kubernetes pod",
					"An employee's home address",
					"A physical building",
					"A network cable",
				],
				c: 0,
			},

			{
				q: "Which identity represents an employee such as john@company.com?",
				a: [
					"User identity",
					"Machine identity",
					"API identity",
					"Workload identity",
				],
				c: 0,
			},
			{
				q: "Which identity represents a web application accessing a database?",
				a: [
					"Service identity",
					"User identity",
					"Location identity",
					"Network identity",
				],
				c: 0,
			},
			{
				q: "Which identity can represent a laptop, server, or virtual machine?",
				a: [
					"Machine identity",
					"User identity",
					"API identity",
					"Data identity",
				],
				c: 0,
			},
			{
				q: "Which identity represents an API or microservice making a request?",
				a: [
					"API identity",
					"User identity",
					"Device posture",
					"Network identity",
				],
				c: 0,
			},
			{
				q: "True or False: A service account is a non-human identity commonly used for automation.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "What does SSO stand for?",
				a: [
					"Single Sign-On",
					"Secure Service Operation",
					"System Security Organization",
					"Single Security Object",
				],
				c: 0,
			},
			{
				q: "What does federation allow?",
				a: [
					"Single sign-on across systems and clouds",
					"All users to bypass authentication",
					"Devices to operate without identities",
					"Networks to eliminate segmentation",
				],
				c: 0,
			},
			{
				q: "Which is an example of an Identity Provider?",
				a: ["Microsoft Entra ID", "Docker Desktop", "Kubernetes", "Apache"],
				c: 0,
			},
			{
				q: "Which other service is listed as an Identity Provider?",
				a: ["Okta", "MongoDB", "Node.js", "Istio"],
				c: 0,
			},
			{
				q: "Fill in the blank: Employees, partners, and customers commonly use ______ identities.",
				a: ["user", "machine", "workload", "API"],
				c: 0,
			},

			{
				q: "What does MFA stand for?",
				a: [
					"Multi-Factor Authentication",
					"Managed Firewall Access",
					"Multiple File Authorization",
					"Machine Federation Access",
				],
				c: 0,
			},
			{
				q: "How many types of evidence does MFA require?",
				a: ["More than one", "Exactly one", "None", "Only three"],
				c: 0,
			},
			{
				q: "Which is an example of 'something you know'?",
				a: ["Password or PIN", "Fingerprint", "Phone", "Security key"],
				c: 0,
			},
			{
				q: "Which is an example of 'something you have'?",
				a: ["Security key", "Password", "Fingerprint", "Facial recognition"],
				c: 0,
			},
			{
				q: "Which is an example of 'something you are'?",
				a: ["Fingerprint", "Password", "PIN", "Authentication code"],
				c: 0,
			},
			{
				q: "True or False: MFA can provide additional protection even if an attacker obtains a user's password.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "Fill in the blank: MFA can require a username, password, and an authentication ______.",
				a: ["code", "firewall", "policy", "segment"],
				c: 0,
			},
			{
				q: "What does adaptive access evaluate before granting access?",
				a: [
					"Context and risk information",
					"Only the username",
					"Only the IP address",
					"Only the password",
				],
				c: 0,
			},
			{
				q: "Which of the following is a factor considered by adaptive access?",
				a: ["Device posture", "Keyboard brand", "Screen size", "File format"],
				c: 0,
			},
			{
				q: "True or False: Adaptive access makes decisions based only on a username and password.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},

			{
				q: "What does device posture describe?",
				a: [
					"The security condition of the device being used",
					"The physical position of a laptop",
					"The user's job title",
					"The network's geographic location",
				],
				c: 0,
			},
			{
				q: "Which condition may be checked as part of device posture?",
				a: [
					"The operating system is up to date",
					"The user's personal settings",
					"The monitor's resolution",
					"The computer's database information",
				],
				c: 0,
			},
			{
				q: "True or False: A device being company-managed can be considered when evaluating access.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "If Alice normally uses a managed laptop but suddenly uses an unmanaged computer, what could Zero Trust do?",
				a: [
					"Require additional verification or restrict access",
					"Automatically trust the device",
					"Disable all authentication",
					"Ignore the device status",
				],
				c: 0,
			},
			{
				q: "Why can location be useful in adaptive access?",
				a: [
					"It can provide another signal about whether a request is unusual",
					"It conclusively proves that a request is malicious without any other evidence",
					"It allows a user to access a resource without presenting any credentials",
					"It determines which password the user must create for the account",
				],
				c: 0,
			},
			{
				q: "True or False: Location alone should be treated as proof that an activity is malicious.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "What is a risk score?",
				a: [
					"An assessment of how unusual or potentially risky a request appears",
					"A rating based only on the number and complexity of characters in a user's password",
					"A measurement of the amount of data that can travel across a network connection",
					"A benchmark showing how quickly a database can read and write records",
				],
				c: 0,
			},
			{
				q: "Which situation would generally produce a higher risk assessment?",
				a: [
					"Login from an unusual device",
					"Normal login from a managed laptop",
					"Normal use of expected applications",
					"Expected user behavior",
				],
				c: 0,
			},
			{
				q: "Fill in the blank: Anomalous actions can trigger ______ authentication.",
				a: ["step-up", "single-factor", "network-level", "anonymous"],
				c: 0,
			},
			{
				q: "What is step-up authentication?",
				a: [
					"Stronger authentication requested when additional risk is detected",
					"A scheduled authentication check that users complete once at the start of each year",
					"Removing authentication requirements whenever a request is considered unusually risky",
					"An authentication method available to administrators but not to other users",
				],
				c: 0,
			},

			{
				q: "What is the Policy Decision Point responsible for?",
				a: [
					"Evaluating access requests and making the security decision",
					"Maintaining a physical inventory of every device used across the organization",
					"Encrypting the contents of every database without evaluating access requests",
					"Creating and distributing passwords for all users and service accounts",
				],
				c: 0,
			},
			{
				q: "True or False: The PDP is sometimes described as the 'central policy brain.'",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "What does PDP stand for?",
				a: [
					"Policy Decision Point",
					"Policy Data Processor",
					"Protected Device Protocol",
					"Private Data Point",
				],
				c: 0,
			},
			{
				q: "What does PEP stand for?",
				a: [
					"Policy Enforcement Point",
					"Policy Evaluation Process",
					"Protected Endpoint Protocol",
					"Private Enforcement Policy",
				],
				c: 0,
			},
			{
				q: "Which component sits in the data path?",
				a: [
					"Policy Enforcement Point",
					"Policy Decision Point",
					"Identity Provider only",
					"Risk score",
				],
				c: 0,
			},
			{
				q: "Fill in the blank: PDP decides → PEP ______.",
				a: ["enforces", "authenticates", "encrypts", "segments"],
				c: 0,
			},
			{
				q: "True or False: A PEP can be implemented as a gateway, proxy, or agent.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "What does the PDP return after evaluating an access request?",
				a: [
					"An allow or deny decision",
					"A new IP address",
					"A database record",
					"A password",
				],
				c: 0,
			},
			{
				q: "If the PDP returns DENY, what should the PEP do?",
				a: [
					"Block the request",
					"Allow the request",
					"Create a new identity",
					"Disable MFA",
				],
				c: 0,
			},
			{
				q: "Which information can the PDP evaluate?",
				a: [
					"Identity, resource, requested action, permissions, and security policies",
					"The user's physical location as the sole factor in every access decision",
					"The user's password without considering the requested resource or action",
					"The destination IP address without checking identity or applicable policies",
				],
				c: 0,
			},

			{
				q: "What is microsegmentation?",
				a: [
					"Dividing a network into small, isolated security segments",
					"Combining separate networks into one large segment with shared access rules",
					"Removing network security controls so systems can communicate without restrictions",
					"Allowing every internal device to communicate freely with every other device",
				],
				c: 0,
			},
			{
				q: "True or False: Microsegmentation can limit unnecessary communication between systems.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "What does identity-based segmentation control access based on?",
				a: [
					"Who or what is requesting access",
					"The network address assigned to a connection, without checking its identity",
					"The physical location where a user or device happens to be connecting",
					"The subnet mask configured for a network, regardless of the requesting workload",
				],
				c: 0,
			},
			{
				q: "What is a least-privilege path?",
				a: [
					"A communication path where only required communication is allowed",
					"A communication route that permits every workload to exchange data freely",
					"A network route that allows access without verifying users or workloads",
					"A restricted route that can be used only by organization administrators",
				],
				c: 0,
			},
			{
				q: "How does workload-level isolation help security?",
				a: [
					"It gives individual applications and services their own security boundaries",
					"It removes the identities assigned to applications and running services",
					"It allows every service to communicate without enforcing access policies",
					"It blocks all network traffic between applications, including required connections",
				],
				c: 0,
			},
			{
				q: "Fill in the blank: Microsegmentation helps stop lateral ______.",
				a: ["movement", "authentication", "encryption", "federation"],
				c: 0,
			},
			{
				q: "What does limiting the blast radius mean?",
				a: [
					"Keeping a compromise contained to a limited segment",
					"Expanding an incident so that it affects as many systems as possible",
					"Removing security boundaries so traffic can cross every network segment",
					"Allowing an attacker to move freely between connected workloads",
				],
				c: 0,
			},
			{
				q: "True or False: Microsegmentation primarily focuses on East-West traffic.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "Which technique enforces rules on each endpoint or VM?",
				a: [
					"Host-based firewalls",
					"Identity Providers",
					"Service accounts",
					"Network ACLs only",
				],
				c: 0,
			},
			{
				q: "Which technique uses gateways that check identity before forwarding traffic?",
				a: [
					"Identity-aware proxies",
					"Host-based firewalls",
					"Network ACLs",
					"DNS servers",
				],
				c: 0,
			},

			{
				q: "What does Software-Defined Networking provide in microsegmentation?",
				a: [
					"Central control of forwarding and isolation",
					"Only physical firewall management",
					"Password-based authentication",
					"Manual hardware replacement",
				],
				c: 0,
			},
			{
				q: "What is policy-driven segmentation?",
				a: [
					"Intent-based rules applied automatically",
					"A network with no policies",
					"A firewall that only uses physical addresses",
					"A system that ignores workload changes",
				],
				c: 0,
			},
			{
				q: "What is North-South traffic?",
				a: [
					"Traffic between external and internal systems",
					"Traffic between two internal workloads",
					"Traffic between two containers only",
					"Traffic within a single process",
				],
				c: 0,
			},
			{
				q: "What is East-West traffic?",
				a: [
					"Traffic between internal services or workloads",
					"Traffic from the internet to a data center",
					"Traffic between a user and the internet only",
					"Traffic between two external networks",
				],
				c: 0,
			},
			{
				q: "True or False: Traditional firewalls commonly focus on North-South traffic.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "Fill in the blank: Microsegmentation focuses primarily on ______-West traffic.",
				a: ["East", "North", "South", "External"],
				c: 0,
			},
			{
				q: "Which is an example of East-West traffic?",
				a: [
					"Service to service communication",
					"Internet to data center traffic",
					"Client to application traffic from outside",
					"User to internet traffic",
				],
				c: 0,
			},
			{
				q: "Which is an example of North-South traffic?",
				a: [
					"Client to application traffic",
					"Service to service traffic",
					"Workload to workload traffic",
					"Internal microservice communication",
				],
				c: 0,
			},
			{
				q: "What is the primary goal of a Software-Defined Perimeter?",
				a: [
					"Hide resources until identity is proven",
					"Expose all network resources publicly",
					"Remove authentication requirements",
					"Allow unsolicited traffic to every application",
				],
				c: 0,
			},
			{
				q: "True or False: Software-Defined Perimeters can reduce the attack surface by avoiding open ports waiting for unsolicited traffic.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},

			{
				q: "What is workload identity used for?",
				a: [
					"Identifying applications, services, and workloads",
					"Identifying users, employees, and customers",
					"Identifying devices, networks, and locations",
					"Identifying IP addresses, ports, and protocols",
				],
				c: 0,
			},
			{
				q: "What can machine identities use to identify devices and VMs?",
				a: [
					"Certificates and keys",
					"Only passwords",
					"Only usernames",
					"Network cables",
				],
				c: 0,
			},
			{
				q: "What are API identities?",
				a: [
					"Credentials used by APIs and microservices",
					"Physical identities of employees",
					"Firewall rules",
					"Network addresses only",
				],
				c: 0,
			},
			{
				q: "What do workload certificates provide?",
				a: [
					"Cryptographic proof of workload identity",
					"Physical proof of device ownership",
					"A network subnet",
					"A user password",
				],
				c: 0,
			},
			{
				q: "Fill in the blank: Identity boundaries define who can access ______.",
				a: ["what", "where", "when only", "nothing"],
				c: 0,
			},
			{
				q: "What do identity boundaries map?",
				a: [
					"Identities to allowed workloads and actions",
					"IP addresses to passwords",
					"Users to physical buildings",
					"Ports to operating systems",
				],
				c: 0,
			},
			{
				q: "True or False: Identity boundaries are defined by identity rather than IP ranges.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "What is separation of duties intended to prevent?",
				a: [
					"Over-privileged identities from spanning zones",
					"Users from authenticating",
					"All network communication over a local area",
					"Cloud workloads from having seperate identities",
				],
				c: 0,
			},
			{
				q: "What is an over-privileged identity?",
				a: [
					"An identity with more permissions than necessary",
					"An identity without a username",
					"An identity that has no permissions",
					"An identity used only for logging",
				],
				c: 0,
			},
			{
				q: "What do cross-environment policies provide?",
				a: [
					"Consistent rules across cloud, hybrid, and on-prem environments",
					"Different authentication requirements for every device",
					"Only local network access",
					"Automatic removal of identity boundaries",
				],
				c: 0,
			},

			{
				q: "How do identity-aware firewalls differ from traditional IP-based controls?",
				a: [
					"They can make decisions using authenticated identities",
					"They eliminate all authorization",
					"They only use physical addresses",
					"They do not enforce policies",
				],
				c: 0,
			},
			{
				q: "What can user identity rules control?",
				a: [
					"Allowing or denying access based on the authenticated user",
					"Changing the user's password automatically",
					"Changing physical device hardware",
					"Creating new cloud regions",
				],
				c: 0,
			},
			{
				q: "What do application identity rules control?",
				a: [
					"Traffic based on application identity",
					"Only human usernames",
					"Only geographic location",
					"Only network speed",
				],
				c: 0,
			},
			{
				q: "True or False: Identity-aware firewalls can enforce policies between microservices.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "Which service is the Web Service allowed to communicate with?",
				a: [
					"Payment Service",
					"Database Service directly",
					"Every service",
					"No service",
				],
				c: 0,
			},
			{
				q: "Fill in the blank: Web Service → allowed to communicate with → ______ Service.",
				a: ["Payment", "Database", "Identity", "Network"],
				c: 0,
			},
			{
				q: "What is Zero Trust Network Access designed to replace?",
				a: [
					"Traditional VPNs",
					"Databases",
					"Operating systems",
					"Container registries",
				],
				c: 0,
			},
			{
				q: "True or False: ZTNA grants access to specific applications rather than entire networks.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "What does ZTNA require before connecting?",
				a: [
					"Strong authentication",
					"A public IP address",
					"An open port",
					"An administrator account",
				],
				c: 0,
			},
			{
				q: "What does continuous verification mean in ZTNA?",
				a: [
					"Trust is re-evaluated throughout the session",
					"The user is verified only once",
					"The network is permanently trusted",
					"The device is never checked",
				],
				c: 0,
			},

			{
				q: "What is an allowlist policy?",
				a: [
					"Default deny; explicitly permit what is needed",
					"Default allow; deny only known threats",
					"Allow all internal traffic",
					"Allow access based only on location",
				],
				c: 0,
			},
			{
				q: "Fill in the blank: Least privilege gives each identity the ______ rights required.",
				a: ["minimal", "maximum", "same", "unlimited"],
				c: 0,
			},
			{
				q: "What does conditional access use to make decisions?",
				a: [
					"Context and risk signals",
					"Only usernames",
					"Only IP addresses",
					"Only network speed",
				],
				c: 0,
			},
			{
				q: "What is dynamic segmentation?",
				a: [
					"Policies that adapt as workloads and identities change",
					"A fixed network design that never changes",
					"A system without identity checks",
					"A method of removing all security boundaries",
				],
				c: 0,
			},
			{
				q: "True or False: Security groups can act as instance-level stateful firewalls.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "What do Network ACLs provide?",
				a: [
					"Subnet-level stateless filtering",
					"Instance-level stateful filtering",
					"Application-level authentication",
					"User identity management",
				],
				c: 0,
			},
			{
				q: "Which is an example of a service mesh technology?",
				a: ["Istio", "Microsoft Entra ID", "Okta", "Ping Identity"],
				c: 0,
			},
			{
				q: "What does a service mesh provide in relation to Zero Trust?",
				a: [
					"Application-layer isolation and service-level security controls",
					"Physical cabling that connects data-center racks without controlling service traffic",
					"A repository that stores user passwords but does not protect service-to-service calls",
					"A name-resolution service that maps hostnames without enforcing access policies",
				],
				c: 0,
			},
			{
				q: "What does mTLS provide between services?",
				a: [
					"Encryption and authentication for every service call",
					"Routing decisions based only on IP addresses, without encrypting service traffic",
					"Authentication for human users without verifying the identities of services",
					"Copies of database contents without securing connections between services",
				],
				c: 0,
			},
			{
				q: "Fill in the blank: mTLS stands for Mutual ______.",
				a: [
					"TLS",
					"Trust Layer",
					"Traffic Login Service",
					"Token Login System",
				],
				c: 0,
			},

			{
				q: "What does identity-based routing use instead of IP addresses?",
				a: [
					"Service identity",
					"Physical location",
					"User passwords",
					"Subnet size",
				],
				c: 0,
			},
			{
				q: "What can policy enforcement at the service mesh layer provide?",
				a: [
					"Authorization and rate limits",
					"File storage and file records",
					"DNS records and Service speed",
					"Only physical security",
				],
				c: 0,
			},
			{
				q: "Why is telemetry and monitoring important in a service mesh?",
				a: [
					"It can observe East-West traffic for anomalies",
					"It removes all traffic controls",
					"It replaces authentication",
					"It disables microsegmentation",
				],
				c: 0,
			},
			{
				q: "True or False: Service meshes can use mTLS to authenticate service-to-service communication.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "What does pod-level identity provide in Kubernetes?",
				a: [
					"Each pod gets a unique, verifiable identity",
					"All pods share one identity",
					"Pods have no identity",
					"Only users receive identities",
				],
				c: 0,
			},
			{
				q: "What does namespace segmentation do?",
				a: [
					"Isolates workloads by Kubernetes namespace",
					"Removes workload boundaries",
					"Allows every pod to communicate freely",
					"Replaces authentication with IP addresses",
				],
				c: 0,
			},
			{
				q: "What are identity-aware sidecars?",
				a: [
					"Proxies that enforce policy on every call",
					"Physical firewalls",
					"Database servers",
					"Identity providers for employees",
				],
				c: 0,
			},
			{
				q: "True or False: Each Kubernetes pod can receive a unique, verifiable identity.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "Which is the first step in the Zero Trust implementation roadmap?",
				a: [
					"Establish the identity foundation",
					"Segment workloads",
					"Apply identity boundaries",
					"Enable continuous monitoring",
				],
				c: 0,
			},

			{
				q: "What is included in establishing the identity foundation?",
				a: [
					"Centralizing the IdP, SSO, and directory services",
					"Removing all authentication",
					"Opening all network ports",
					"Disabling workload identities",
				],
				c: 0,
			},
			{
				q: "What is the second step of the Zero Trust implementation roadmap?",
				a: [
					"Enforce MFA and Conditional Access",
					"Establish identity foundation",
					"Apply identity boundaries",
					"Segment workloads",
				],
				c: 0,
			},
			{
				q: "What is the third step of the Zero Trust implementation roadmap?",
				a: [
					"Segment workloads",
					"Enforce MFA",
					"Establish the identity foundation",
					"Continuous monitoring",
				],
				c: 0,
			},
			{
				q: "What is the fourth step of the Zero Trust implementation roadmap?",
				a: [
					"Apply identity boundaries",
					"Enable SSO",
					"Remove network segmentation",
					"Disable conditional access",
				],
				c: 0,
			},
			{
				q: "What is the fifth step of the Zero Trust implementation roadmap?",
				a: [
					"Continuous monitoring",
					"Establishing an IdP",
					"Creating a VPN",
					"Removing identity controls",
				],
				c: 0,
			},
			{
				q: "True or False: Continuous monitoring is used to detect, analyze, and respond to anomalies.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "Fill in the blank: The Zero Trust roadmap begins by establishing an identity ______.",
				a: ["foundation", "firewall", "database", "perimeter"],
				c: 0,
			},
			{
				q: "Which roadmap step applies microsegmentation and network isolation?",
				a: [
					"Segment Workloads",
					"Enforce MFA & Conditional Access",
					"Apply Identity Boundaries",
					"Continuous Monitoring",
				],
				c: 0,
			},
			{
				q: "Which roadmap step maps identities to allowed resources and actions?",
				a: [
					"Apply Identity Boundaries",
					"Segment Workloads",
					"Establish Identity Foundation",
					"Continuous Monitoring",
				],
				c: 0,
			},
			{
				q: "Which statement best summarizes Zero Trust?",
				a: [
					"Never trust, always verify",
					"Trust everything inside the network",
					"Use only perimeter firewalls",
					"Allow access based only on IP address",
				],
				c: 0,
			},
		],

		test1: [
			{
				q: "What is cloud computing?",
				a: [
					"On-demand delivery of computing resources over the internet with usage-based billing",
					"A system that requires organizations to own and maintain all computing hardware",
					"A method of storing information exclusively on local computers",
					"A network protocol designed primarily for transferring files between computers",
				],
				c: 0,
			},
			{
				q: "Which of the following is an example of a computing resource provided through cloud computing?",
				a: [
					"Physical keyboards and monitors only",
					"Compute resources, storage, networking, and databases",
					"Printed documents and offline filing systems",
					"Local devices without internet connectivity",
				],
				c: 1,
			},
			{
				q: "Which statement best describes the purpose of cloud computing?",
				a: [
					"To eliminate the need for software applications by moving all work into infrastructure",
					"To require every organization to operate the same standardized physical hardware",
					"To abstract physical infrastructure and enable organizations to scale globally without owning hardware",
					"To restrict organizations from accessing computing resources outside their local facilities",
				],
				c: 2,
			},
			{
				q: "Which NIST characteristic allows users to provision cloud resources automatically without human intervention?",
				a: [
					"Measured service",
					"Broad network access",
					"Resource pooling",
					"On-demand self-service",
				],
				c: 3,
			},
			{
				q: "What does broad network access mean in cloud computing?",
				a: [
					"Cloud services are accessible through standard networks and devices, including laptops, mobile devices, and APIs",
					"Cloud resources can be accessed only by staff physically present in the provider's data center",
					"Each cloud user must have a separate dedicated computer reserved for their exclusive use",
					"Cloud applications are designed to work without internet access or any network connection",
				],
				c: 0,
			},
			{
				q: "Which NIST characteristic involves providers sharing pooled resources among multiple customers?",
				a: [
					"Rapid elasticity",
					"Resource pooling",
					"Measured service",
					"On-demand self-service",
				],
				c: 1,
			},
			{
				q: "Which cloud characteristic allows computing resources to scale up or down automatically according to demand?",
				a: [
					"Broad network access",
					"Measured service",
					"Rapid elasticity",
					"Resource pooling",
				],
				c: 2,
			},
			{
				q: "True or False: Measured service means that cloud resource usage is monitored, controlled, and billed according to consumption.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "Which development contributed to shared computing during the 1960s?",
				a: [
					"The widespread adoption of Kubernetes orchestration",
					"The commercial launch of AWS EC2 and S3",
					"The introduction of serverless computing and edge computing",
					"Time-sharing systems and mainframe computers",
				],
				c: 3,
			},
			{
				q: "What important role did virtualization play in the evolution of cloud computing during the 1990s?",
				a: [
					"It enabled hardware abstraction and helped make virtualized computing environments possible",
					"It replaced all distributed systems with single-user desktop computers",
					"It introduced subscription-based office productivity software",
					"It eliminated the need for operating systems and applications",
				],
				c: 0,
			},
			{
				q: "Which cloud computing milestone occurred in 2006 according to the slideshow?",
				a: [
					"Docker and Kubernetes transformed application deployment",
					"AWS launched EC2 and S3, marking commercial cloud adoption",
					"Microsoft 365 introduced cloud-based productivity applications",
					"Serverless computing and edge computing became dominant trends",
				],
				c: 1,
			},
			{
				q: "Which technologies transformed application deployment during the 2010s?",
				a: [
					"Mainframes and time-sharing systems",
					"Traditional physical servers and local storage",
					"Containers such as Docker and orchestration tools such as Kubernetes",
					"Only desktop virtualization and standalone applications",
				],
				c: 2,
			},
			{
				q: "True or False: The slideshow describes serverless computing, edge computing, AI-driven cloud services, and multi-cloud architectures as major trends of the 2020s.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "Which of the following is an example of cloud computing supporting modern IT operations?",
				a: [
					"Restricting all applications to a single physical computer",
					"Replacing all cybersecurity tools with manual inspections",
					"Eliminating automation from software development workflows",
					"Supporting CI/CD pipelines, machine learning, analytics, and cybersecurity operations",
				],
				c: 3,
			},
			{
				q: "What does Infrastructure as a Service (IaaS) primarily provide?",
				a: [
					"Fully managed business applications accessed through a browser",
					"Virtualized compute, storage, and networking resources",
					"A managed application development environment with automatic operating system updates",
					"A shared cloud environment exclusively for organizations in one industry",
				],
				c: 1,
			},
			{
				q: "Which of the following is an example of an IaaS offering?",
				a: ["Google Workspace", "Salesforce", "AWS EC2", "Google App Engine"],
				c: 2,
			},
			{
				q: "A developer wants to build and deploy an application without managing the underlying infrastructure or manually patching the operating system. Which service model is most appropriate?",
				a: [
					"Platform as a Service (PaaS)",
					"Infrastructure as a Service (IaaS)",
					"Private Cloud exclusively",
					"Software installed and maintained on a local computer",
				],
				c: 0,
			},
			{
				q: "Which service is an example of Platform as a Service (PaaS)?",
				a: [
					"Azure Virtual Machines",
					"Google Workspace",
					"AWS EC2",
					"Azure App Services",
				],
				c: 3,
			},
			{
				q: "Which characteristic is most closely associated with Software as a Service (SaaS)?",
				a: [
					"Full customer control over virtual machine operating systems and firewalls",
					"Fully managed applications with automatic updates and typically subscription-based pricing",
					"A requirement to configure all underlying hardware and networking",
					"A development platform requiring customers to maintain the provider's physical servers",
				],
				c: 1,
			},
			{
				q: "True or False: Microsoft 365, Google Workspace, and Salesforce are examples of SaaS offerings.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "Which deployment model uses shared infrastructure that is generally scalable and cost-effective?",
				a: ["Private cloud", "Community cloud", "Public cloud", "Hybrid cloud"],
				c: 2,
			},
			{
				q: "An organization needs dedicated infrastructure and enhanced control to support its compliance requirements. Which deployment model best matches these needs?",
				a: ["Public cloud", "Community cloud", "Hybrid cloud", "Private cloud"],
				c: 3,
			},
			{
				q: "What distinguishes a hybrid cloud deployment model?",
				a: [
					"It combines public and private cloud environments to provide flexibility and support legacy systems",
					"It is shared exclusively by organizations with identical industry requirements",
					"It uses only public infrastructure shared by unrelated customers",
					"It requires all computing resources to remain on individual desktop computers",
				],
				c: 0,
			},
			{
				q: "Which deployment model is designed for organizations with similar requirements, such as healthcare or education institutions?",
				a: ["Public cloud", "Community cloud", "Private cloud", "Hybrid cloud"],
				c: 1,
			},
			{
				q: "Which statement correctly describes the major cloud providers discussed?",
				a: [
					"AWS specializes exclusively in healthcare, Azure in gaming, and Google Cloud in desktop hardware",
					"Google Cloud is described as having the broadest overall ecosystem, while AWS focuses exclusively on AI",
					"AWS has a broad service ecosystem, Azure integrates strongly with Microsoft environments, and Google Cloud is strong in analytics and AI",
					"All providers offer identical services, pricing models, and service architectures",
				],
				c: 2,
			},
			{
				q: "True or False: Cloud computing use cases include website hosting, data warehousing, machine learning pipelines, IoT device management, backup, disaster recovery, and virtual desktops.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "Which of the following is a cloud cybersecurity measure identified?",
				a: [
					"Disabling all logging to reduce storage consumption",
					"Giving every user unrestricted access to cloud resources",
					"Avoiding encryption whenever data crosses a network",
					"Using IAM, encryption, network segmentation, monitoring, and threat detection",
				],
				c: 3,
			},
			{
				q: "Under the shared responsibility model, which responsibility generally belongs to the cloud provider?",
				a: [
					"Managing every customer's application code and user permissions",
					"Securing physical data centers, hardware, hypervisors, and network infrastructure",
					"Determining every customer's data protection policies",
					"Managing all customer identities and application-level security",
				],
				c: 1,
			},
			{
				q: "What is an availability zone in cloud computing?",
				a: [
					"A geographic location containing every cloud resource worldwide",
					"A lightweight, portable environment for running applications",
					"An independent data center or set of independent data centers within a region",
					"A service that distributes incoming traffic across multiple resources",
				],
				c: 2,
			},
			{
				q: "Which statement correctly identifies a cloud computing challenge and a modern adoption trend?",
				a: [
					"Vendor lock-in is a challenge, while multi-cloud strategies and zero-trust architectures are adoption trends",
					"Rapid elasticity is a challenge, while physical mainframes are the primary modern adoption trend",
					"Global distribution is a challenge, while eliminating cybersecurity controls is a recommended trend",
					"Measured service is a challenge, while avoiding cloud-native development is a leading adoption trend",
				],
				c: 0,
			},

			{
				q: "What is the primary purpose of cloud architecture?",
				a: [
					"To define how cloud services are built and delivered, determining scalability, reliability, and security",
					"To ensure all applications run on one physical server with identical configurations",
					"To eliminate networking and identity management from cloud environments",
					"To replace all software development processes with automated hardware upgrades",
				],
				c: 0,
			},
			{
				q: "What does virtualization allow a physical server to do?",
				a: [
					"Run only one operating system without sharing hardware resources",
					"Run multiple virtual machines on a single physical server",
					"Execute serverless functions without a network connection",
					"Replace all storage devices with container images",
				],
				c: 1,
			},
			{
				q: "Which statement correctly describes a Type 1 hypervisor?",
				a: [
					"It runs as an application inside a desktop operating system",
					"It is designed exclusively for running containers in Kubernetes",
					"It runs directly on physical hardware without requiring a host operating system",
					"It manages application requests through an API gateway",
				],
				c: 2,
			},
			{
				q: "Which of the following is an example of a Type 2 hosted hypervisor?",
				a: ["VMware ESXi", "Microsoft Hyper-V", "KVM", "Oracle VirtualBox"],
				c: 3,
			},
			{
				q: "True or False: Type 1 hypervisors generally provide higher performance and stronger isolation than Type 2 hypervisors.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "What is a major difference between virtual machines and containers?",
				a: [
					"Virtual machines share the host operating system kernel, while containers each require a complete guest OS",
					"Containers require more resources and take longer to start than virtual machines in typical use",
					"Virtual machines use a full guest OS, while containers share the host OS kernel",
					"Containers require dedicated physical hardware, while virtual machines cannot share servers",
				],
				c: 2,
			},
			{
				q: "Which technology provides a platform for building, shipping, and running containers?",
				a: ["Kubernetes", "Docker", "AWS Cognito", "Amazon Route 53"],
				c: 1,
			},
			{
				q: "Which Docker component is responsible for building, versioning, and distributing container images?",
				a: [
					"Container runtime",
					"Network bridge",
					"Kubelet",
					"Image management",
				],
				c: 3,
			},
			{
				q: "What is the primary purpose of Kubernetes?",
				a: [
					"To automate deployment, scaling, load balancing, and self-healing of containerized applications",
					"To provide a desktop interface for manually installing operating systems",
					"To replace cloud networking with direct physical connections",
					"To store all application files in a single relational database",
				],
				c: 0,
			},
			{
				q: "What is a pod in Kubernetes?",
				a: [
					"A physical server dedicated to running the control plane",
					"A database containing the complete state of a Kubernetes cluster",
					"The smallest deployable unit, containing one or more containers",
					"A firewall that controls all traffic entering a cloud network",
				],
				c: 2,
			},
			{
				q: "Which Kubernetes control plane component receives commands from developers and tools?",
				a: ["Kube-proxy", "API server", "Kubelet", "Container runtime"],
				c: 1,
			},
			{
				q: "Which Kubernetes component stores cluster state in a distributed key-value database?",
				a: ["Scheduler", "Controller manager", "Kubelet", "etcd"],
				c: 3,
			},
			{
				q: "True or False: The Kubernetes scheduler selects worker nodes for new pods based on resource requirements and constraints.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "What is the role of the kubelet on a Kubernetes worker node?",
				a: [
					"It stores all cluster configuration in a distributed database",
					"It distributes external traffic across multiple cloud regions",
					"It ensures containers in pods are running as expected",
					"It authenticates all users through a cloud identity provider",
				],
				c: 2,
			},
			{
				q: "Which statement best describes serverless computing?",
				a: [
					"Developers must configure and maintain every physical server themselves",
					"Event-driven code runs without developers managing the underlying servers",
					"Applications can only run on virtual machines with complete guest operating systems",
					"Every function must maintain persistent local state between invocations",
				],
				c: 1,
			},
			{
				q: "How is serverless computing typically billed?",
				a: [
					"Only for actual compute execution time used",
					"A fixed fee for every physical server owned by the customer",
					"Exclusively through annual hardware licensing",
					"According to the number of operating systems installed on a virtual machine",
				],
				c: 0,
			},
			{
				q: "Which workload is particularly suitable for serverless computing?",
				a: [
					"A continuously running process requiring full operating system control",
					"An application requiring persistent connections and no interruptions",
					"A workload that cannot tolerate any cold-start latency",
					"An event-driven application with intermittent or unpredictable demand",
				],
				c: 3,
			},
			{
				q: "Which AWS service manages user sign-up, sign-in, and identity management in the serverless architecture described?",
				a: ["Amazon S3", "Amazon Cognito", "Amazon DynamoDB", "AWS Lambda"],
				c: 1,
			},
			{
				q: "What is the role of an API Gateway in a serverless application?",
				a: [
					"To store and manage the complete configuration and state of a Kubernetes cluster",
					"To replace the application's database by storing its data in a container registry",
					"To provide an entry point for API requests and handle routing, throttling, and security",
					"To assign virtual CPUs to physical servers and manage their hardware resources",
				],
				c: 2,
			},
			{
				q: "True or False: In the described AWS serverless architecture, Lambda can execute application logic and interact with DynamoDB for data or S3 for files.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "What is a Virtual Private Cloud (VPC)?",
				a: [
					"A public website that hosts downloadable virtual machine images",
					"A load balancer that distributes requests between application servers",
					"A database used to store cloud networking configurations",
					"An isolated virtual network within a cloud environment",
				],
				c: 3,
			},
			{
				q: "What is the main difference between public and private subnets?",
				a: [
					"Public subnets are intended for internet accessibility, while private subnets have no direct internet access",
					"Private subnets always allow unrestricted inbound internet connections, while public subnets prohibit them",
					"Public subnets are exclusively for databases, while private subnets only host load balancers",
					"Private subnets cannot communicate with other cloud resources under any circumstances",
				],
				c: 0,
			},
			{
				q: "What is the purpose of a NAT gateway in cloud networking?",
				a: [
					"To store authentication tokens for cloud users",
					"To provide outbound internet access for resources in private subnets",
					"To distribute incoming HTTP requests across multiple application servers",
					"To automatically assign pods to Kubernetes worker nodes",
				],
				c: 1,
			},
			{
				q: "Which statement correctly compares application and network load balancers?",
				a: [
					"Application load balancers operate at Layer 4, while network load balancers operate exclusively at Layer 7",
					"Both types only distribute traffic between database tables",
					"Application load balancers operate at Layer 7 for HTTP/HTTPS, while network load balancers operate at Layer 4 for TCP/UDP",
					"Network load balancers are used exclusively to encrypt files stored in object storage",
				],
				c: 2,
			},
			{
				q: "What is the principle of least privilege in Identity and Access Management (IAM)?",
				a: [
					"Give every user administrator access to prevent permission errors",
					"Allow users to share permanent credentials for convenience",
					"Require all applications to run using the same identity",
					"Grant users and services only the minimum access required for their tasks",
				],
				c: 3,
			},
			{
				q: "True or False: IAM policies can define permissions, while multi-factor authentication (MFA) strengthens account security.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "What is the difference between logging and monitoring in cloud observability?",
				a: [
					"Logging measures CPU usage only, while monitoring stores application source code",
					"Logging captures detailed events and application output, while monitoring tracks system health and performance",
					"Logging distributes network traffic, while monitoring creates container images",
					"Logging assigns pods to nodes, while monitoring controls user authentication",
				],
				c: 1,
			},
			{
				q: "What does distributed tracing help developers understand?",
				a: [
					"How much physical disk space a hypervisor owns",
					"Which users have permission to modify IAM policies",
					"How requests travel across multiple distributed services from beginning to end",
					"How to allocate virtual CPUs beyond the available physical cores",
				],
				c: 2,
			},
			{
				q: "Which statement correctly describes container networking modes?",
				a: [
					"Bridge networking shares the host network stack directly, while host networking creates a private bridged network",
					"Overlay networking is restricted to containers running on the same host",
					"A service mesh replaces all application services with physical network routers",
					"Overlay networking enables communication across multiple nodes, while host networking shares the host network stack",
				],
				c: 3,
			},
			{
				q: "Which security technology inspects HTTP/HTTPS traffic at Layer 7 to help block threats such as SQL injection and cross-site scripting (XSS)?",
				a: [
					"Web Application Firewall (WAF)",
					"Network Access Control List (Network ACL)",
					"NAT gateway",
					"Container registry",
				],
				c: 0,
			},

			{
				q: "What is cloud architecture?",
				a: [
					"The blueprint for designing, deploying, and operating cloud systems",
					"A process for manufacturing physical servers for data centers",
					"A method of converting all applications into standalone desktop software",
					"A system used exclusively to manage cloud storage billing",
				],
				c: 0,
			},
			{
				q: "Which compute model provides full operating system isolation and dedicated virtual hardware?",
				a: [
					"Containers",
					"Virtual machines",
					"Serverless functions",
					"Object storage",
				],
				c: 1,
			},
			{
				q: "What is the primary limitation of vertical scaling?",
				a: [
					"It requires every application to use containers",
					"It automatically distributes workloads across multiple cloud providers",
					"It is limited by the hardware capacity of a single instance",
					"It prevents administrators from increasing CPU or RAM",
				],
				c: 2,
			},
			{
				q: "How does horizontal scaling increase computing capacity?",
				a: [
					"By adding more CPU cores to one physical processor only",
					"By increasing the storage capacity of a single disk",
					"By replacing multiple instances with one larger instance",
					"By adding more instances, commonly behind a load balancer",
				],
				c: 3,
			},
			{
				q: "True or False: Auto scaling can automatically adjust cloud capacity based on CPU usage, request volume, or custom metrics.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "What is a container image layer?",
				a: [
					"A dedicated physical disk attached to a virtual machine",
					"A component of a layered filesystem that supports efficient image storage and reuse",
					"A network gateway that connects private subnets to the internet",
					"A Kubernetes control plane component responsible for scheduling pods",
				],
				c: 1,
			},
			{
				q: "What does OverlayFS do in container technology?",
				a: [
					"It assigns IP addresses to virtual private clouds",
					"It distributes incoming traffic across application servers",
					"It combines multiple filesystem layers into one unified filesystem view",
					"It automatically scales serverless functions based on request volume",
				],
				c: 2,
			},
			{
				q: "What happens when a container modifies a file from a lower, read-only OverlayFS layer?",
				a: [
					"The entire container image is immediately deleted",
					"The physical host operating system must be reinstalled",
					"The file is permanently modified in every shared image",
					"The file is copied into the writable layer before modification",
				],
				c: 3,
			},
			{
				q: "Which is a benefit of using containers for microservices?",
				a: [
					"Services can be deployed independently, and failures can be isolated between services",
					"Every service must use the same programming language and runtime",
					"Any service failure automatically requires redeploying the entire application",
					"All services must share a single process and filesystem",
				],
				c: 0,
			},
			{
				q: "Which compute model is best suited to an application requiring full operating system control and compatibility with a legacy OS?",
				a: [
					"Serverless",
					"Virtual machines",
					"Containers exclusively",
					"Object storage",
				],
				c: 1,
			},
			{
				q: "True or False: Serverless functions are typically stateless between invocations, so persistent state should be stored externally.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "Which storage type is best suited to storing large amounts of unstructured data, such as backups, media, and data lakes?",
				a: [
					"Block storage",
					"File storage",
					"Object storage",
					"Virtual memory",
				],
				c: 2,
			},
			{
				q: "Which storage type provides raw volumes attached to compute instances, similar to physical disks?",
				a: [
					"Object storage",
					"File storage",
					"Container storage layers",
					"Block storage",
				],
				c: 3,
			},
			{
				q: "What is a key advantage of cloud file storage?",
				a: [
					"It provides shared hierarchical filesystem access for multiple clients simultaneously",
					"It only supports unstructured objects without directory hierarchies",
					"It can only be mounted by a single virtual machine",
					"It eliminates the need for file-sharing protocols",
				],
				c: 0,
			},
			{
				q: "Which statement correctly describes object storage versioning?",
				a: [
					"It automatically increases the CPU allocation of a virtual machine",
					"It retains multiple versions of objects, helping recover previous states and audit changes",
					"It distributes network traffic between multiple application servers",
					"It converts every stored file into a block storage volume",
				],
				c: 1,
			},
			{
				q: "What is the purpose of object storage lifecycle policies?",
				a: [
					"To assign private IP address ranges to subnets in a cloud network",
					"To encrypt data only while it is being transferred across public networks",
					"To automatically transition objects between storage tiers or delete them after a specified time",
					"To select the Kubernetes worker node responsible for running each application pod",
				],
				c: 2,
			},
			{
				q: "Which storage performance metric measures input/output operations completed per second?",
				a: ["Throughput", "Latency", "Durability", "IOPS"],
				c: 3,
			},
			{
				q: "True or False: Throughput measures data transfer rate, while latency measures the time required to complete an individual I/O operation.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "What does a CIDR block represent in a virtual private cloud?",
				a: [
					"A list of permitted application usernames",
					"An IP address range allocated to the VPC",
					"A list of object storage lifecycle policies",
					"A group of container images stored in a registry",
				],
				c: 1,
			},
			{
				q: "What is the function of a route table in cloud networking?",
				a: [
					"To store database snapshots for disaster recovery",
					"To authenticate users before they access applications",
					"To determine where network traffic should be directed",
					"To allocate virtual processors to guest operating systems",
				],
				c: 2,
			},
			{
				q: "Which statement correctly distinguishes an internet gateway from a NAT gateway?",
				a: [
					"An internet gateway is exclusively for outbound traffic, while a NAT gateway permits unrestricted inbound connections",
					"Both gateways serve only to connect two private subnets",
					"A NAT gateway provides public inbound access, while an internet gateway only supports private DNS",
					"An internet gateway enables internet-routable traffic, while a NAT gateway lets private resources initiate outbound internet connections",
				],
				c: 3,
			},
			{
				q: "Which load balancer operates at Layer 7 and supports HTTP/HTTPS routing using host headers and path-based rules?",
				a: [
					"Application Load Balancer",
					"Network Load Balancer",
					"Gateway Load Balancer",
					"Classic Load Balancer exclusively",
				],
				c: 0,
			},
			{
				q: "What is the primary purpose of a Gateway Load Balancer?",
				a: [
					"To provide shared filesystem access to Linux and Windows machines",
					"To transparently direct traffic through third-party network appliances",
					"To store virtual machine snapshots across availability zones",
					"To manage user sign-up and authentication for serverless applications",
				],
				c: 1,
			},
			{
				q: "True or False: A multi-availability-zone deployment helps prevent a single availability zone failure from causing an application outage.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "How do stateless application designs improve high availability?",
				a: [
					"They require every request to return to the same physical server",
					"They store all persistent data exclusively in local instance memory",
					"They keep state in durable external stores so any suitable instance can handle a request",
					"They prevent load balancers from redistributing requests between instances",
				],
				c: 2,
			},
			{
				q: "Which practice helps ensure cloud environments can be consistently reproduced and reviewed?",
				a: [
					"Manually configuring each environment without recording changes",
					"Giving all developers unrestricted administrator permissions",
					"Disabling monitoring to reduce operational overhead",
					"Using Infrastructure as Code to version, review, and reproduce environments",
				],
				c: 3,
			},
			{
				q: "Which statement best describes the purpose of network segmentation in cloud architecture?",
				a: [
					"Separating public, private, and data tiers to help control communication and improve security",
					"Combining all cloud resources into one unrestricted network segment",
					"Allowing every database to receive direct connections from the public internet",
					"Replacing IAM policies with shared credentials for all services",
				],
				c: 0,
			},
			{
				q: "True or False: The slideshow recommends encrypting data both in transit and at rest by default.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "Which combination best supports a resilient cloud architecture?",
				a: [
					"A single availability zone, manual scaling, and permanently fixed instances",
					"Multi-AZ deployment, auto scaling, load balancing, and stateless design",
					"One oversized virtual machine without health checks or monitoring",
					"Public access to every subnet and unrestricted application permissions",
				],
				c: 1,
			},
			{
				q: "An organization wants to reduce storage costs for archival data that rarely needs fast access. Which approach best follows the slideshow's storage recommendations?",
				a: [
					"Use the highest-IOPS block storage tier for every archived file",
					"Store all archived data in virtual machine memory",
					"Match the storage tier to the workload instead of over-provisioning high-performance volumes",
					"Move all archival data to compute instances with maximum CPU capacity",
				],
				c: 2,
			},

			{
				q: "What is the primary purpose of Identity and Access Management (IAM) in cloud environments?",
				a: [
					"To automatically scale resources based on traffic",
					"To ensure only authorized identities access specific resources",
					"To replicate application data across geographic regions",
					"To monitor application performance and network latency",
				],
				c: 1,
			},
			{
				q: "What distinguishes an IAM role from a user identity?",
				a: [
					"A role is a machine or service identity that uses temporary access",
					"A role is a permanent human identity with long-term credentials",
					"A role stores application data across multiple availability zones",
					"A role automatically increases CPU and memory when demand rises",
				],
				c: 0,
			},
			{
				q: "What do IAM policies define?",
				a: [
					"The number of instances required for an application",
					"The network routes between public and private subnets",
					"The allowed actions that identities can perform on resources",
					"The recovery time required after a regional outage",
				],
				c: 2,
			},
			{
				q: "What is the purpose of multi-factor authentication (MFA)?",
				a: [
					"To eliminate the need for identity audit logs",
					"To allow every user to access all cloud resources",
					"To automatically distribute requests across instances",
					"To add an additional authentication factor for stronger security",
				],
				c: 3,
			},
			{
				q: "Which IAM principle grants identities only the permissions needed for their tasks?",
				a: [
					"Least privilege",
					"Horizontal scaling",
					"Active-active recovery",
					"Event-driven processing",
				],
				c: 0,
			},
			{
				q: "According to the lecture, what is a recommended alternative to long-term access keys?",
				a: [
					"Permanent administrator credentials",
					"Temporary credentials and short-lived tokens",
					"Shared credentials for all application services",
					"Credentials stored directly in application source code",
				],
				c: 1,
			},
			{
				q: "What does identity federation allow an organization to do?",
				a: [
					"Replace all security policies with network routing rules",
					"Create a separate permanent password for every service",
					"Integrate with corporate identity and single sign-on providers",
					"Automatically replicate data between cloud regions",
				],
				c: 2,
			},
			{
				q: "What does scalability describe?",
				a: [
					"The ability of a system to grow by adding more resources",
					"The automatic deletion of all unused application data",
					"The process of verifying every identity continuously",
					"The ability to recover only from a complete regional outage",
				],
				c: 0,
			},
			{
				q: "How does elasticity differ from scalability?",
				a: [
					"Elasticity only applies to applications running on one server",
					"Elasticity prevents systems from increasing their capacity",
					"Elasticity requires all resources to be provisioned manually",
					"Elasticity automatically adjusts resources according to real-time demand",
				],
				c: 3,
			},
			{
				q: "Which metric could trigger an auto-scaling action?",
				a: [
					"The color scheme of the application interface",
					"CPU utilization crossing a configured threshold",
					"The number of developers assigned to a project",
					"The length of the application's source code",
				],
				c: 1,
			},
			{
				q: "A message-processing system has a growing backlog in its queue. Which auto-scaling signal is most directly relevant?",
				a: [
					"The number of database tables",
					"The number of identity policies",
					"Queue depth",
					"The number of availability zones",
				],
				c: 2,
			},
			{
				q: "What is horizontal scaling?",
				a: [
					"Increasing CPU and RAM on an existing instance",
					"Reducing the number of application services",
					"Adding more instances to handle increased demand",
					"Moving every application component to a single server",
				],
				c: 2,
			},
			{
				q: "Which statement best describes vertical scaling?",
				a: [
					"Increasing CPU or RAM on an existing machine",
					"Adding more instances behind a load balancer",
					"Replicating an application across multiple regions",
					"Automatically replacing failed services with new ones",
				],
				c: 0,
			},
			{
				q: "Why is horizontal scaling often preferred for cloud-native distributed applications?",
				a: [
					"It removes the need for monitoring and security",
					"It avoids all network communication between services",
					"It guarantees that no application component can fail",
					"It supports large-scale growth and built-in redundancy",
				],
				c: 3,
			},
			{
				q: "What is redundancy in a resilient cloud architecture?",
				a: [
					"Removing duplicate components to reduce all resource usage",
					"Duplicating critical components so one failure does not stop the system",
					"Using one central server for every application request",
					"Storing all backups on the same component as production",
				],
				c: 1,
			},
			{
				q: "What is the purpose of replication in cloud resilience?",
				a: [
					"To increase the number of human IAM users",
					"To prevent applications from using load balancers",
					"To maintain multiple synchronized copies of data across locations",
					"To ensure every application uses the same programming language",
				],
				c: 2,
			},
			{
				q: "What does failover do when a failure is detected?",
				a: [
					"Automatically switches traffic to healthy resources",
					"Increases the memory of every existing instance",
					"Deletes replicated copies of the application data",
					"Disables health checks until the failed resource recovers",
				],
				c: 0,
			},
			{
				q: "Why deploy an application across multiple availability zones (Multi-AZ)?",
				a: [
					"To make all application services depend on one server",
					"To eliminate the need for data replication",
					"To ensure every resource stays within one physical location",
					"To help the application survive an availability zone outage",
				],
				c: 3,
			},
			{
				q: "What is the purpose of self-healing systems?",
				a: [
					"To prevent applications from using distributed storage",
					"To replace failed units using mechanisms such as Kubernetes or auto scaling",
					"To keep every failed instance running indefinitely",
					"To remove all automated recovery procedures",
				],
				c: 1,
			},
			{
				q: "What is the main trade-off among disaster recovery models?",
				a: [
					"Programming language choice versus database schema size",
					"Authentication speed versus the number of user accounts",
					"Cost versus recovery time objective (RTO) and recovery point objective (RPO)",
					"Network bandwidth versus the number of developers",
				],
				c: 2,
			},
			{
				q: "Which disaster recovery model is generally the lowest-cost option but has the slowest recovery?",
				a: [
					"Backup and Restore",
					"Active-Active",
					"Warm Standby",
					"Pilot Light",
				],
				c: 0,
			},
			{
				q: "Which disaster recovery model maintains a smaller version of production that can be scaled up during a disaster?",
				a: [
					"Backup and Restore",
					"Active-Active",
					"Pilot Light",
					"Warm Standby",
				],
				c: 3,
			},
			{
				q: "Which statement describes the Active-Active disaster recovery model?",
				a: [
					"It restores all systems only after backups are recovered",
					"It operates fully redundant multi-region systems that serve traffic simultaneously",
					"It keeps only minimal core services running until disaster strikes",
					"It relies entirely on periodic offsite backups",
				],
				c: 1,
			},
			{
				q: "What is one benefit of the microservices pattern?",
				a: [
					"It eliminates all distributed system complexity",
					"It guarantees that database consistency is never a concern",
					"It allows services to be deployed independently",
					"It removes the need for operational monitoring",
				],
				c: 2,
			},
			{
				q: "In event-driven architecture, what triggers a workflow?",
				a: [
					"An event, such as a file upload or queue message",
					"A requirement to restart every service on a schedule",
					"A manual update to every application's source code",
					"A permanent connection between every producer and consumer",
				],
				c: 0,
			},
			{
				q: "What does CQRS stand for in the context of cloud design patterns?",
				a: [
					"Cloud Queue Routing System",
					"Continuous Query Recovery Service",
					"Centralized Quality and Reliability Strategy",
					"Command Query Responsibility Segregation",
				],
				c: 3,
			},
			{
				q: "How does saga choreography coordinate a distributed transaction?",
				a: [
					"A central controller directly instructs every service at each step",
					"Services publish events and react to events from other services",
					"A single database locks all participating services during the transaction",
					"A load balancer assigns every transaction to the same instance",
				],
				c: 1,
			},
			{
				q: "What is the primary purpose of an API Gateway?",
				a: [
					"To provide a single entry point that manages and secures API traffic",
					"To replace all storage systems with a single database",
					"To increase CPU capacity on individual application instances",
					"To replicate every virtual machine across multiple regions",
				],
				c: 0,
			},
			{
				q: "What happens when a circuit breaker enters the open state?",
				a: [
					"All requests continue normally while failures are ignored",
					"The service immediately increases its CPU and memory allocation",
					"Requests fail fast without calling the unhealthy service",
					"Every request is redirected permanently to the same instance",
				],
				c: 2,
			},
			{
				q: "What is the purpose of the bulkhead pattern?",
				a: [
					"To make every service share one common resource pool",
					"To retry every failed request without any delay",
					"To migrate an entire legacy system in one large rewrite",
					"To isolate components so one failure does not take down the whole system",
				],
				c: 3,
			},

			{
				q: "What were the key drivers behind the evolution of virtualization?",
				a: [
					"Efficiency, isolation, and scalability",
					"Encryption, authentication, and database normalization",
					"Programming speed, user interfaces, and source control",
					"Storage compression, file sharing, and application branding",
				],
				c: 0,
			},
			{
				q: "What is the primary purpose of a hypervisor?",
				a: [
					"To manage application source code and dependencies",
					"To replace the guest operating system with a container runtime",
					"To provide virtualized hardware and manage virtual machine resources",
					"To route all application requests through an API gateway",
				],
				c: 2,
			},
			{
				q: "Which hypervisor component allocates CPU time, memory, and I/O resources across virtual machines?",
				a: [
					"Device emulation",
					"Scheduler",
					"VM monitor",
					"I/O virtualization",
				],
				c: 1,
			},
			{
				q: "What is the purpose of device emulation in a hypervisor?",
				a: [
					"To provide virtual hardware devices to guest operating systems",
					"To assign MAC addresses to physical network adapters",
					"To compress virtual disk images before deployment",
					"To isolate application processes using Linux namespaces",
				],
				c: 0,
			},
			{
				q: "What does memory ballooning allow a hypervisor to do?",
				a: [
					"Increase the number of guest operating systems without using memory",
					"Convert all virtual disks into read-only image layers",
					"Prevent virtual machines from sharing physical CPU resources",
					"Reclaim unused memory from virtual machines when the host is under pressure",
				],
				c: 3,
			},
			{
				q: "Which technologies provide hardware-assisted virtualization support for Intel and AMD processors?",
				a: [
					"VMDK and VHDX",
					"NPT and VLAN",
					"Intel VT-x and AMD-V",
					"Docker and Kubernetes",
				],
				c: 2,
			},
			{
				q: "What is a benefit of Nested Page Tables (NPT) and Extended Page Tables (EPT)?",
				a: [
					"They eliminate the need for guest operating systems",
					"They reduce memory address translation overhead",
					"They automatically encrypt every virtual disk",
					"They replace the hypervisor's resource scheduler",
				],
				c: 1,
			},
			{
				q: "What distinguishes a Type 1 hypervisor from a Type 2 hypervisor?",
				a: [
					"Type 1 runs directly on hardware, while Type 2 runs on a host operating system",
					"Type 1 is only used for development, while Type 2 is only used in data centers",
					"Type 1 requires a host operating system, while Type 2 does not",
					"Type 1 only runs containers, while Type 2 only runs physical machines",
				],
				c: 0,
			},
			{
				q: "Which of the following is an example of a Type 2 hypervisor listed in the lecture?",
				a: ["Xen", "ESXi", "KVM", "VirtualBox"],
				c: 3,
			},
			{
				q: "Which sequence best represents the VM lifecycle stages presented in the lecture?",
				a: [
					"Booting, compiling, testing, publishing, and archiving",
					"Provisioning, booting, running, pausing, snapshotting, migrating, and decommissioning",
					"Creating images, assigning namespaces, applying cgroups, and deleting containers",
					"Authentication, authorization, encryption, replication, and recovery",
				],
				c: 1,
			},
			{
				q: "Why is live migration important in cloud environments?",
				a: [
					"It allows containers to share the host kernel",
					"It replaces the need for virtual CPU scheduling",
					"It supports cloud elasticity by moving running virtual machines",
					"It automatically converts block storage into object storage",
				],
				c: 2,
			},
			{
				q: "Which sequence correctly represents the layered VM architecture from bottom to top?",
				a: [
					"Applications, guest OS, hypervisor, virtual hardware, physical hardware",
					"Physical hardware, hypervisor, virtual hardware, guest OS, applications",
					"Hypervisor, physical hardware, applications, guest OS, virtual hardware",
					"Physical hardware, guest OS, applications, virtual hardware, hypervisor",
				],
				c: 1,
			},
			{
				q: "How do hypervisors map virtual CPUs (vCPUs) to physical CPUs?",
				a: [
					"By assigning every vCPU its own dedicated physical processor in all cases",
					"By replacing CPU scheduling with filesystem permissions",
					"By allowing guest operating systems to control all host CPUs directly",
					"By scheduling virtual CPUs onto physical processors using techniques such as time slicing",
				],
				c: 3,
			},
			{
				q: "What is time slicing in virtual CPU scheduling?",
				a: [
					"Dividing CPU time among vCPUs so physical cores can be shared",
					"Assigning all CPU time to the virtual machine with the most memory",
					"Moving virtual disk files between storage pools",
					"Separating network traffic into isolated tenant segments",
				],
				c: 0,
			},
			{
				q: "What is the purpose of NUMA-aware placement?",
				a: [
					"To force all virtual machines to use the same CPU priority",
					"To remove the need for virtual memory translation",
					"To place vCPUs near local memory to reduce latency",
					"To automatically create snapshots before every VM migration",
				],
				c: 2,
			},
			{
				q: "Which virtual memory technique uses software-managed mappings of guest memory pages?",
				a: [
					"Extended Page Tables",
					"Shadow Page Tables",
					"Thin Provisioning",
					"I/O Throttling",
				],
				c: 1,
			},
			{
				q: "What happens when virtual memory is swapped to disk?",
				a: [
					"Guest memory pages may be moved to disk when memory is overcommitted",
					"All guest memory is permanently stored on a virtual network switch",
					"Virtual CPUs are converted into physical CPU cores",
					"Read-only container image layers are merged into one file",
				],
				c: 0,
			},
			{
				q: "What is one function of virtual switches in a virtual networking architecture?",
				a: [
					"Creating guest operating systems from physical hardware",
					"Allocating memory dynamically between virtual machines",
					"Replacing storage pools with virtual disks",
					"Enabling VM-to-VM communication and network traffic filtering",
				],
				c: 3,
			},
			{
				q: "What is thin provisioning in VM storage virtualization?",
				a: [
					"Reserving all possible disk capacity before a VM starts",
					"Encrypting virtual disk contents during network transmission",
					"Allocating storage space as it is needed rather than upfront",
					"Creating an independent physical disk for every virtual machine",
				],
				c: 2,
			},
			{
				q: "Which VM security feature verifies the integrity of firmware and the bootloader?",
				a: [
					"Secure Boot",
					"Traffic shaping",
					"Snapshot chaining",
					"NUMA-aware placement",
				],
				c: 0,
			},
			{
				q: "Why did containers emerge as an alternative to virtual machines for some workloads?",
				a: [
					"Containers require a complete guest OS for every instance",
					"Containers share the host kernel, reducing overhead and startup time",
					"Containers provide stronger hardware-level isolation than virtual machines",
					"Containers eliminate the need for application dependencies",
				],
				c: 1,
			},
			{
				q: "What is the role of a container runtime?",
				a: [
					"To manage physical storage pools for virtual machines",
					"To translate guest physical addresses into host physical addresses",
					"To distribute virtual CPU time among guest operating systems",
					"To start and manage container processes",
				],
				c: 3,
			},
			{
				q: "What do Linux namespaces provide to containers?",
				a: [
					"A way to isolate views of resources such as processes, networking, and filesystems",
					"A method for allocating virtual disk space only when required",
					"A mechanism for copying data between disaster recovery regions",
					"A way to increase physical CPU frequency during traffic spikes",
				],
				c: 0,
			},
			{
				q: "What is the primary purpose of control groups (cgroups)?",
				a: [
					"To assign MAC addresses to containers on physical networks",
					"To sign container images and verify their provenance",
					"To limit and account for resource usage such as CPU and memory",
					"To provide full guest operating systems to isolated workloads",
				],
				c: 2,
			},
			{
				q: "How do layered container images improve deployment efficiency?",
				a: [
					"They require each container to store a completely separate operating system",
					"They reduce duplication by reusing layers and speed up deployment",
					"They automatically provide hardware-level isolation between containers",
					"They remove the need for application code and dependencies",
				],
				c: 1,
			},
			{
				q: "Which container networking mode enables networking across multiple hosts in a cluster?",
				a: ["Bridge", "Host", "Macvlan", "Overlay"],
				c: 3,
			},
			{
				q: "What is the purpose of Seccomp in container security?",
				a: [
					"To filter system calls and reduce the attack surface",
					"To allocate disk space dynamically for container images",
					"To route application traffic to the nearest geographic region",
					"To manage virtual CPU scheduling for guest operating systems",
				],
				c: 0,
			},
			{
				q: "Which statement accurately compares VM and container isolation?",
				a: [
					"Containers each run a full guest OS, while VMs share the host kernel",
					"Containers have stronger hardware isolation and higher overhead than VMs",
					"VMs use hardware-level isolation and a full guest OS, while containers share the host kernel",
					"VMs and containers provide identical isolation boundaries and startup times",
				],
				c: 2,
			},
			{
				q: "Which situation is most appropriate for using a virtual machine rather than a container?",
				a: [
					"A microservice needs rapid scaling and high instance density",
					"A CI/CD pipeline needs consistent development and production environments",
					"An application needs lightweight instances that share the host kernel",
					"A workload requires full OS control or support for different kernels",
				],
				c: 3,
			},

			{
				q: "What is one of the main reasons Kubernetes was developed?",
				a: [
					"To replace all cloud storage with local disks",
					"To automate deployments, scaling, and recovery of distributed workloads",
					"To eliminate the need for container runtimes",
					"To provide physical hardware for every application",
				],
				c: 1,
			},
			{
				q: "What are the two main parts of Kubernetes architecture?",
				a: [
					"API Servers and databases",
					"Pods and container images",
					"Services and Ingress controllers",
					"Control plane and worker nodes",
				],
				c: 3,
			},
			{
				q: "What is the primary role of the Kubernetes API Server?",
				a: [
					"To serve as the central gateway for cluster operations",
					"To run all application containers on worker nodes",
					"To assign CPU time directly to every container",
					"To provide physical network cables between nodes",
				],
				c: 0,
			},
			{
				q: "Which Kubernetes component stores cluster configuration and state in a distributed key-value store?",
				a: ["Kubelet", "Scheduler", "etcd", "Kube-proxy"],
				c: 2,
			},
			{
				q: "Which consensus mechanism is mentioned in the lecture in relation to etcd?",
				a: ["Round Robin", "Raft consensus", "Least Connections", "IP Hash"],
				c: 1,
			},
			{
				q: "What is the Kubernetes scheduler responsible for?",
				a: [
					"Maintaining virtual IP addresses for Services",
					"Storing every container image in the cluster",
					"Performing authentication for all external websites",
					"Deciding which worker node should run each Pod",
				],
				c: 3,
			},
			{
				q: "How can node affinity influence Pod scheduling?",
				a: [
					"It allows Pods to prefer or require nodes with specific labels",
					"It automatically converts every Pod into a Service",
					"It stores the desired cluster state outside etcd",
					"It prevents the API Server from receiving scheduling requests",
				],
				c: 0,
			},
			{
				q: "What is the primary responsibility of the Kubernetes Controller Manager?",
				a: [
					"To expose every Pod directly to the public internet",
					"To assign IP addresses to physical network adapters",
					"To ensure the actual cluster state matches the desired state",
					"To compile container images before they are deployed",
				],
				c: 2,
			},
			{
				q: "Which controller maintains the desired number of Pods in a ReplicaSet?",
				a: [
					"Job Controller",
					"ReplicaSet Controller",
					"Node Controller",
					"Ingress Controller",
				],
				c: 1,
			},
			{
				q: "What is the purpose of the kubelet on a worker node?",
				a: [
					"To store all cluster configuration in a distributed database",
					"To route external HTTP requests based on domain names",
					"To assign public IP addresses to cloud load balancers",
					"To ensure Pods are running and manage their containers",
				],
				c: 3,
			},
			{
				q: "What is the role of kube-proxy?",
				a: [
					"To maintain network rules that route Service traffic to backend Pods",
					"To select which node should run each new Pod",
					"To maintain the revision history of Deployments",
					"To validate container image signatures before building images",
				],
				c: 0,
			},
			{
				q: "Which of the following is a container runtime mentioned in the lecture?",
				a: ["etcd", "Traefik", "containerd", "Calico"],
				c: 2,
			},
			{
				q: "What is a Pod in Kubernetes?",
				a: [
					"A physical server dedicated to one application",
					"The smallest deployable unit in Kubernetes",
					"A database containing all cluster configuration",
					"A load balancer that distributes requests across nodes",
				],
				c: 1,
			},
			{
				q: "What networking characteristic do containers within the same Pod share?",
				a: [
					"Each container must use a different Pod IP address",
					"Each container has a separate network namespace and IP by default",
					"Each container must run on a different worker node",
					"Containers share the same IP address and network namespace",
				],
				c: 3,
			},
			{
				q: "What does the Pending Pod state indicate?",
				a: [
					"The Pod has been accepted but is not yet running",
					"All containers in the Pod exited successfully",
					"At least one container in the Pod has failed",
					"The Kubernetes system cannot determine the Pod's state",
				],
				c: 0,
			},
			{
				q: "When is a Pod considered to be in the Succeeded state?",
				a: [
					"When it has been assigned to a node but has not started",
					"When its containers are still actively processing requests",
					"When all its containers have exited successfully",
					"When the scheduler cannot identify a suitable node",
				],
				c: 2,
			},
			{
				q: "What is a sidecar container designed to do?",
				a: [
					"Replace the Kubernetes API Server",
					"Augment the main application with functions such as logging or metrics",
					"Assign a stable public IP to a Service",
					"Maintain the desired number of identical Pods",
				],
				c: 1,
			},
			{
				q: "What is the purpose of an ambassador container pattern?",
				a: [
					"To maintain deployment revision history",
					"To transform application output into a standard format",
					"To replace failed worker nodes automatically",
					"To mediate network access between an application and external services",
				],
				c: 3,
			},
			{
				q: "What happens when a Pod managed by a ReplicaSet is deleted or fails?",
				a: [
					"The ReplicaSet can create a replacement Pod to maintain the desired count",
					"The entire Kubernetes control plane must be restarted",
					"All other Pods in the cluster are automatically deleted",
					"The Service permanently loses its virtual IP address",
				],
				c: 0,
			},
			{
				q: "Which feature allows a Kubernetes Deployment to gradually replace Pods with a new application version?",
				a: ["Node affinity", "Image signing", "Rolling updates", "NAT rules"],
				c: 2,
			},
			{
				q: "What is the purpose of a Deployment rollback?",
				a: [
					"To assign a different IP address to every container",
					"To revert to a previous application revision after a problem",
					"To remove all ReplicaSets from the cluster permanently",
					"To prevent the scheduler from placing Pods on worker nodes",
				],
				c: 1,
			},
			{
				q: "Why are Kubernetes Services useful for connecting to Pods?",
				a: [
					"They ensure every Pod keeps the same IP address after restarting",
					"They require clients to track each Pod's changing IP address",
					"They expose every backend Pod directly to the public internet",
					"They provide stable networking even when individual Pods are replaced",
				],
				c: 3,
			},
			{
				q: "What is the default Kubernetes Service type for internal-only access?",
				a: ["ClusterIP", "NodePort", "LoadBalancer", "Ingress"],
				c: 0,
			},
			{
				q: "How does a NodePort Service expose an application?",
				a: [
					"By creating an HTTP path rule at an Ingress controller",
					"By assigning a unique public IP to every Pod",
					"By opening the same port on each node's IP address",
					"By providing access only through an internal virtual IP",
				],
				c: 2,
			},
			{
				q: "Which Kubernetes Service type can automatically provision a cloud load balancer?",
				a: ["ClusterIP", "LoadBalancer", "NodePort", "ReplicaSet"],
				c: 1,
			},
			{
				q: "What is a primary purpose of Kubernetes Ingress?",
				a: [
					"To maintain the desired number of replicas for a workload",
					"To store Pod status and cluster configuration",
					"To manage CPU and memory limits for containers",
					"To route external HTTP/HTTPS traffic into the cluster",
				],
				c: 3,
			},
			{
				q: "What does path-based Ingress routing allow an application to do?",
				a: [
					"Send requests to different Services based on URL paths such as /api and /app",
					"Select a worker node based only on its CPU utilization",
					"Assign a different container runtime to every incoming request",
					"Replace all Service virtual IP addresses with physical hardware addresses",
				],
				c: 0,
			},
			{
				q: "What does an Ingress controller do?",
				a: [
					"Stores all Kubernetes objects in a strongly consistent database",
					"Maintains the desired number of replicas for each Deployment",
					"Watches Ingress objects and configures the underlying routing system",
					"Starts and stops every container directly without a node agent",
				],
				c: 2,
			},
			{
				q: "Which statement describes the Kubernetes networking model presented in the lecture?",
				a: [
					"Pods on different nodes must always communicate through NAT",
					"Each Pod gets an IP, and Pods can communicate across nodes without NAT",
					"Only worker nodes receive IP addresses; Pods communicate through files",
					"Services require every Pod to retain its original IP address permanently",
				],
				c: 1,
			},
			{
				q: "What is the purpose of Container Network Interface (CNI) plugins in Kubernetes?",
				a: [
					"To manage Deployment revision history and application rollbacks",
					"To store desired and observed cluster state",
					"To determine which Pods have successfully completed batch jobs",
					"To implement Kubernetes networking, using plugins such as Calico, Cilium, and Flannel",
				],
				c: 3,
			},

			{
				q: "What is the main reason Zero Trust security models were developed?",
				a: [
					"Traditional perimeter security struggles with cloud workloads, remote users, and lateral movement",
					"Cloud providers no longer support traditional firewalls or network access controls",
					"Organizations need to eliminate authentication requirements for internal applications",
					"Static network addresses have become mandatory for all cloud resources",
				],
				c: 0,
			},
			{
				q: "Which statement best describes the Zero Trust principle 'Never Trust, Always Verify'?",
				a: [
					"Trust every request originating from an organization's private network",
					"Verify identities and requests instead of automatically trusting network location",
					"Allow authenticated users to access all resources within their department",
					"Require authentication only when a user first joins the organization",
				],
				c: 1,
			},
			{
				q: "What does the Zero Trust principle 'Assume Breach' encourage organizations to do?",
				a: [
					"Disable all external connections to prevent attackers from reaching systems",
					"Assume that every security control has already been permanently compromised",
					"Design security controls with the expectation that attackers may already be inside",
					"Trust internal workloads unless they generate a confirmed security incident",
				],
				c: 2,
			},
			{
				q: "Which option correctly describes the three stages of identity-based access?",
				a: [
					"Authorization identifies the user, identity grants permissions, and authentication monitors activity",
					"Authentication grants access, authorization creates identities, and identity encrypts traffic",
					"Identity verifies passwords, authentication defines roles, and authorization detects anomalies",
					"Identity identifies the requester, authentication verifies them, and authorization determines permissions",
				],
				c: 3,
			},
			{
				q: "What is the primary difference between authentication and authorization?",
				a: [
					"Authentication verifies identity, while authorization determines permitted resources and actions",
					"Authentication assigns network addresses, while authorization encrypts application traffic",
					"Authentication evaluates device health, while authorization replaces identity providers",
					"Authentication grants administrative roles, while authorization verifies passwords",
				],
				c: 0,
			},
			{
				q: "Which example represents a workload identity?",
				a: [
					"An employee signing into a company email account",
					"A container or Kubernetes pod identified for access-control decisions",
					"A physical office building assigned an internal network address",
					"A department receiving permission to purchase computer equipment",
				],
				c: 1,
			},
			{
				q: "What is the purpose of an Identity Provider (IdP)?",
				a: [
					"To route packets between cloud subnets without checking user identities",
					"To replace all application authorization policies with network address rules",
					"To manage identities and support authentication services such as SSO",
					"To isolate every container by assigning it a separate physical server",
				],
				c: 2,
			},
			{
				q: "Which combination correctly identifies three common types of multi-factor authentication evidence?",
				a: [
					"Username, email address, and network location",
					"Application name, device address, and user department",
					"Encryption key, server address, and database name",
					"Something you know, something you have, and something you are",
				],
				c: 3,
			},
			{
				q: "What is adaptive access designed to evaluate before granting access?",
				a: [
					"Only whether the user supplied a valid username and password",
					"Context such as device posture, location, user behavior, and risk",
					"Only whether the request originates from an organization's office",
					"The number of applications installed on the organization's servers",
				],
				c: 1,
			},
			{
				q: "What does device posture describe in a Zero Trust architecture?",
				a: [
					"The physical orientation and location of a computer in the office",
					"The number of user accounts associated with a particular device",
					"The security condition of a device, including patching and compliance",
					"The amount of network bandwidth allocated to a device",
				],
				c: 2,
			},
			{
				q: "Why should an unusual login location not automatically prove that an account is compromised?",
				a: [
					"Legitimate users may travel, work remotely, or connect through VPNs",
					"Location information cannot be collected by identity providers",
					"Zero Trust policies must always ignore geographic information",
					"Authentication systems cannot compare current and previous login locations",
				],
				c: 0,
			},
			{
				q: "What may happen when a user's activity is identified as unusually risky?",
				a: [
					"The user automatically receives permanent administrator privileges",
					"The system disables every security policy for the current session",
					"The system grants access because the account has already authenticated",
					"The system can require additional verification through step-up authentication",
				],
				c: 3,
			},
			{
				q: "What is the primary responsibility of a Policy Decision Point (PDP)?",
				a: [
					"Forwarding all network traffic without evaluating security requirements",
					"Evaluating identities, context, and policies to make access decisions",
					"Assigning IP addresses to every workload in a cloud environment",
					"Encrypting all traffic between services using mutual TLS",
				],
				c: 1,
			},
			{
				q: "What is the primary responsibility of a Policy Enforcement Point (PEP)?",
				a: [
					"Creating user identities and registering them with an identity provider",
					"Defining every organization's security policies without evaluating requests",
					"Enforcing access decisions by permitting or blocking communication",
					"Calculating risk scores from user behavior and device posture",
				],
				c: 2,
			},
			{
				q: "Which statement correctly describes the relationship between a PDP and a PEP?",
				a: [
					"The PDP makes the decision, and the PEP enforces that decision",
					"The PEP creates identities, and the PDP assigns their network addresses",
					"The PDP encrypts traffic, and the PEP replaces authentication factors",
					"The PEP evaluates policies, and the PDP only records network activity",
				],
				c: 0,
			},
			{
				q: "What is microsegmentation intended to accomplish?",
				a: [
					"Combine all workloads into one trusted network to simplify administration",
					"Replace workload authentication with unrestricted internal network access",
					"Allow communication between systems whenever they share a subnet",
					"Divide networks into small security zones that restrict unnecessary communication",
				],
				c: 3,
			},
			{
				q: "How does microsegmentation help limit the impact of a security breach?",
				a: [
					"By guaranteeing that compromised workloads cannot execute any code",
					"By preventing attackers from freely moving between isolated systems",
					"By removing the need to authenticate users inside cloud environments",
					"By allowing every internal service to communicate with every database",
				],
				c: 1,
			},
			{
				q: "Which technique enforces security rules directly on individual endpoints or virtual machines?",
				a: [
					"Software-defined perimeters",
					"Identity federation and single sign-on",
					"Host-based firewalls",
					"Service discovery without access policies",
				],
				c: 2,
			},
			{
				q: "What is a defining feature of policy-driven segmentation?",
				a: [
					"Security rules are applied automatically according to organizational intent",
					"Every workload must use the same static IP address permanently",
					"Network isolation is determined exclusively by physical server location",
					"Access rules are disabled whenever a workload changes environments",
				],
				c: 0,
			},
			{
				q: "What is the difference between East-West and North-South network traffic?",
				a: [
					"East-West connects users to the internet, while North-South connects services internally",
					"East-West is encrypted traffic, while North-South is unencrypted traffic",
					"East-West occurs only in physical networks, while North-South occurs in cloud networks",
					"East-West connects internal workloads, while North-South connects external and internal systems",
				],
				c: 3,
			},
			{
				q: "Why does microsegmentation primarily target East-West traffic?",
				a: [
					"East-West traffic is always public and does not require authentication",
					"East-West communication can provide attackers with paths for lateral movement",
					"East-West traffic cannot be monitored using traditional networking tools",
					"East-West traffic only occurs when users access applications through VPNs",
				],
				c: 1,
			},
			{
				q: "What is the main purpose of a Software-Defined Perimeter (SDP)?",
				a: [
					"Expose every application publicly while restricting only database queries",
					"Allow access based on network location instead of authenticated identity",
					"Hide resources until identity is verified and access is approved",
					"Replace all encryption with dynamically assigned network addresses",
				],
				c: 2,
			},
			{
				q: "What are identity boundaries intended to define?",
				a: [
					"Which identities can access specific workloads and perform particular actions",
					"Which physical computers must remain connected to the same switch",
					"Which applications must share the same database and network address",
					"Which users can bypass authentication when accessing internal resources",
				],
				c: 0,
			},
			{
				q: "What is the purpose of identity-aware firewalls?",
				a: [
					"To permit traffic only when all systems share an identical IP address",
					"To replace service identities with broad network-level trust relationships",
					"To allow all internal applications to communicate without authorization checks",
					"To apply access rules based on authenticated users, applications, or services",
				],
				c: 3,
			},
			{
				q: "How does Zero Trust Network Access (ZTNA) differ from traditional broad network access through a VPN?",
				a: [
					"ZTNA grants permanent access to every resource after the first login",
					"ZTNA grants identity-based access to specific applications rather than entire networks",
					"ZTNA removes authentication requirements for applications hosted in the cloud",
					"ZTNA depends exclusively on whether a user has an internal IP address",
				],
				c: 1,
			},
			{
				q: "What does a default-deny allowlist policy mean?",
				a: [
					"All traffic is allowed unless a user reports suspicious activity",
					"Only external traffic is denied, while internal traffic is automatically trusted",
					"Access is denied by default, and required communication must be explicitly permitted",
					"Access is granted to every authenticated identity regardless of its permissions",
				],
				c: 2,
			},
			{
				q: "Which statement correctly compares security groups and network ACLs in cloud environments?",
				a: [
					"Security groups are instance-level stateful firewalls, while network ACLs provide subnet-level stateless filtering",
					"Security groups are subnet-level stateless filters, while network ACLs manage user authentication",
					"Security groups encrypt service calls, while network ACLs issue workload certificates",
					"Security groups control only application identities, while network ACLs manage single sign-on",
				],
				c: 0,
			},
			{
				q: "What role does mutual TLS (mTLS) play in a service mesh?",
				a: [
					"It assigns a public IP address to each microservice before communication",
					"It replaces authorization policies with location-based network filtering",
					"It allows services to communicate without presenting cryptographic credentials",
					"It encrypts and authenticates service-to-service communication",
				],
				c: 3,
			},
			{
				q: "Which approach supports Zero Trust security for Kubernetes containers?",
				a: [
					"Allowing every pod in the cluster to communicate with every other pod",
					"Using pod-level identities, namespace segmentation, and policy-driven communication",
					"Trusting containers whenever they are deployed on the same worker node",
					"Disabling workload authentication after a pod successfully starts",
				],
				c: 1,
			},
			{
				q: "Which sequence best matches the Zero Trust implementation roadmap presented in the lecture?",
				a: [
					"Deploy public applications, disable MFA, combine workloads, and trust internal traffic",
					"Configure network addresses, remove identity providers, and permit unrestricted service access",
					"Establish identity services, enforce MFA, segment workloads, apply identity boundaries, and monitor continuously",
					"Enable network encryption, remove authorization rules, and stop monitoring authenticated users",
				],
				c: 2,
			},

			{
				q: "What is a Virtual Private Cloud (VPC) in a public cloud environment?",
				a: [
					"A shared network where all cloud customers use identical security settings",
					"A logically isolated network with customizable IP address ranges",
					"A physical server dedicated exclusively to hosting database applications",
					"A routing service that automatically connects every cloud network to the internet",
				],
				c: 1,
			},
			{
				q: "Why should overlapping CIDR ranges be avoided when designing VPC networks?",
				a: [
					"They prevent workloads from using private IP addresses for internal communication",
					"They force all subnets to use the same routing table and firewall policies",
					"They prevent security groups from allowing inbound connections to virtual machines",
					"They can cause conflicts that break VPC peering and hybrid connectivity",
				],
				c: 3,
			},
			{
				q: "Which of the following is a valid private IPv4 address range specified by RFC 1918?",
				a: ["10.0.0.0/8", "11.0.0.0/8", "172.0.0.0/12", "193.168.0.0/16"],
				c: 0,
			},
			{
				q: "What is the primary purpose of dividing a VPC into subnets?",
				a: [
					"To eliminate the need for route tables and gateway configurations",
					"To assign every cloud resource a publicly accessible IP address",
					"To create smaller networks for workload placement and logical isolation",
					"To automatically encrypt all network traffic between cloud applications",
				],
				c: 2,
			},
			{
				q: "Which configuration best describes a public subnet?",
				a: [
					"A subnet that has no route to the internet and hosts internal databases",
					"A subnet with a route to an Internet Gateway that can support public-facing resources",
					"A subnet that permits outbound traffic only through a NAT Gateway",
					"A subnet that blocks all communication with resources outside its own address range",
				],
				c: 1,
			},
			{
				q: "Which workload would most commonly be placed in a private subnet?",
				a: [
					"A publicly accessible web server that accepts internet connections directly",
					"A public load balancer receiving requests from external customers",
					"A bastion host designed to provide controlled administrative entry",
					"A database server that should not accept direct inbound internet connections",
				],
				c: 3,
			},
			{
				q: "What distinguishes an isolated subnet from a typical private subnet in the lecture?",
				a: [
					"An isolated subnet has no internet path at all, while a private subnet can use NAT for outbound access",
					"An isolated subnet requires a public IP address, while a private subnet cannot use private addresses",
					"An isolated subnet permits unrestricted inbound internet traffic, while a private subnet blocks all outbound traffic",
					"An isolated subnet must connect through a VPN Gateway, while a private subnet must use an Internet Gateway",
				],
				c: 0,
			},
			{
				q: "According to the lecture, how many IP addresses are represented by a /24 subnet?",
				a: [
					"16 IP addresses",
					"64 IP addresses",
					"256 IP addresses",
					"4,096 IP addresses",
				],
				c: 2,
			},
			{
				q: "What should designers remember about subnet IP allocation in common cloud environments?",
				a: [
					"Every address in a subnet is available for workload assignment",
					"Cloud providers typically reserve five IP addresses per subnet",
					"A /28 subnet always provides 256 usable addresses",
					"Subnet sizes cannot be changed or planned for future scaling",
				],
				c: 1,
			},
			{
				q: "What is the main responsibility of a route table in a VPC?",
				a: [
					"To store user passwords and authenticate cloud administrators",
					"To assign workload identities to applications and databases",
					"To encrypt every packet before it leaves a subnet",
					"To define traffic destinations and the next hops used to forward traffic",
				],
				c: 3,
			},
			{
				q: "What does the route 0.0.0.0/0 generally represent in an IPv4 route table?",
				a: [
					"A default route that matches traffic not covered by more specific routes",
					"A route that permits communication only between identical IP addresses",
					"A route that directs all traffic exclusively to the local VPC network",
					"A route that blocks every connection originating outside the subnet",
				],
				c: 0,
			},
			{
				q: "What is the purpose of the local route associated with a VPC CIDR block?",
				a: [
					"To forward all outbound traffic to a NAT Gateway",
					"To connect the VPC directly to every on-premises network",
					"To allow routing between resources within the VPC address range",
					"To expose every private subnet to the public internet",
				],
				c: 2,
			},
			{
				q: "What is the primary function of an Internet Gateway (IGW)?",
				a: [
					"To allow private subnets outbound internet access without accepting inbound connections",
					"To support internet communication for appropriately configured public-facing resources",
					"To filter subnet traffic using ordered stateless allow and deny rules",
					"To create encrypted private connections between unrelated cloud organizations",
				],
				c: 1,
			},
			{
				q: "Which statement correctly describes a NAT Gateway?",
				a: [
					"It provides unrestricted inbound and outbound internet connectivity to private workloads",
					"It replaces the need for route tables in public and private subnets",
					"It is primarily used to assign public IP addresses to every private database",
					"It allows private-subnet resources to initiate outbound internet connections without allowing internet-initiated inbound connections",
				],
				c: 3,
			},
			{
				q: "A private-subnet application needs to download software updates from the internet. Which configuration best supports this requirement?",
				a: [
					"Configure its default route to use a NAT Gateway",
					"Assign every database a public IP and route directly through the IGW",
					"Remove the default route and rely on the local VPC route",
					"Configure a subnet-level deny rule for all outbound internet traffic",
				],
				c: 0,
			},
			{
				q: "Which statement correctly compares an Internet Gateway with a NAT Gateway?",
				a: [
					"Both gateways only permit outbound traffic initiated by private workloads",
					"A NAT Gateway provides inbound public access, while an IGW blocks inbound connections",
					"An IGW supports inbound and outbound internet communication, while a NAT Gateway supports private-subnet outbound access",
					"An IGW is used only for on-premises routing, while a NAT Gateway connects VPCs through peering",
				],
				c: 2,
			},
			{
				q: "What is a key limitation of VPC peering?",
				a: [
					"It requires all connected VPCs to use exactly the same CIDR range",
					"It does not provide transitive routing between peered VPCs",
					"It sends all inter-VPC traffic through the public internet",
					"It can connect only a single virtual machine in each VPC",
				],
				c: 1,
			},
			{
				q: "What is the primary advantage of a Transit Gateway compared with many individual VPC peering connections?",
				a: [
					"It removes the need for network routes between all connected VPCs",
					"It automatically makes every attached workload publicly accessible",
					"It guarantees that all connected networks have overlapping IP ranges",
					"It provides a central hub for scalable connectivity between many VPCs and on-premises networks",
				],
				c: 3,
			},
			{
				q: "How does Zero Trust apply to cloud networking?",
				a: [
					"It verifies requests, uses identity-based access, isolates workloads, and continuously monitors activity",
					"It trusts all traffic within a VPC and checks only connections from the public internet",
					"It replaces identity checks with a policy that permits all private IP addresses",
					"It requires every cloud resource to use a public IP address for authentication",
				],
				c: 0,
			},
			{
				q: "What is a defining characteristic of a Security Group (SG)?",
				a: [
					"It is a stateless subnet firewall that requires explicit rules in both directions",
					"It evaluates numbered rules in order and supports explicit deny rules",
					"It is a stateful instance-level firewall that automatically allows return traffic",
					"It applies only to traffic between separate VPCs connected through peering",
				],
				c: 2,
			},
			{
				q: "How do Network Access Control Lists (NACLs) differ from Security Groups?",
				a: [
					"NACLs are stateful and applied to individual network interfaces",
					"NACLs are stateless subnet-level filters that support allow and deny rules",
					"NACLs automatically permit return traffic without outbound rules",
					"NACLs cannot explicitly deny traffic from particular sources",
				],
				c: 1,
			},
			{
				q: "How are NACL rules evaluated according to the lecture?",
				a: [
					"All rules are evaluated simultaneously, and the most permissive rule wins",
					"Rules are evaluated only when a Security Group has no configured rules",
					"Rules are applied randomly based on current network traffic volume",
					"Rules are processed by rule number, and the first matching rule wins",
				],
				c: 3,
			},
			{
				q: "Which firewall rule design follows the principle of least privilege?",
				a: [
					"Allow only the required ports and sources, documenting exceptions clearly",
					"Allow every inbound port and monitor the traffic for suspicious activity",
					"Permit all outbound and inbound traffic whenever authentication succeeds",
					"Use the same unrestricted firewall rules for every workload in the VPC",
				],
				c: 0,
			},
			{
				q: "Why should inbound and outbound firewall policies be considered separately?",
				a: [
					"Cloud firewalls always block outbound traffic unless inbound traffic is allowed",
					"Inbound and outbound rules must use identical source and destination addresses",
					"Each traffic direction needs its own policy to control the communication that is permitted",
					"Separate policies eliminate the need to configure subnet routing",
				],
				c: 2,
			},
			{
				q: "What is the purpose of a bastion host in a cloud architecture?",
				a: [
					"To provide a public database endpoint for all application workloads",
					"To provide a controlled administrative entry point into private subnets",
					"To automatically translate private IP addresses into public DNS names",
					"To replace every firewall with a single network-wide access rule",
				],
				c: 1,
			},
			{
				q: "Which option is identified in the lecture as an alternative that can reduce the need for bastion hosts?",
				a: [
					"VPC peering without route tables",
					"An Internet Gateway assigned to each database",
					"A public IP address on every private workload",
					"Managed services such as SSM or Cloud Shell",
				],
				c: 3,
			},
			{
				q: "What is a key benefit of PrivateLink or endpoint services?",
				a: [
					"They provide private access to supported cloud services without requiring public IP exposure",
					"They route all application requests through publicly accessible internet gateways",
					"They require workloads to expose their services through public IP addresses",
					"They automatically permit all connected VPCs to communicate without policy restrictions",
				],
				c: 0,
			},
			{
				q: "Which tool or mechanism can capture IP traffic metadata to help analyze network communication?",
				a: [
					"A NAT Gateway that automatically records all application source code",
					"A Transit Gateway that replaces security monitoring and incident response",
					"VPC Flow Logs",
					"A CIDR block that identifies suspicious user behavior",
				],
				c: 2,
			},
			{
				q: "Which architecture separates web, application, and data workloads into distinct subnet tiers?",
				a: [
					"A single-subnet architecture with unrestricted internal communication",
					"A three-tier architecture",
					"A flat network architecture with no segmentation",
					"A transitive peering architecture without routing controls",
				],
				c: 1,
			},
			{
				q: "Which option best describes a Zero Trust segmented VPC design?",
				a: [
					"All workloads share one trusted network and use IP addresses as their only security control",
					"Every private workload receives direct inbound access from the public internet",
					"All application tiers use overlapping CIDR ranges to simplify connectivity",
					"Workloads are isolated using fine-grained controls based on identity and permitted communication",
				],
				c: 3,
			},

			{
				q: "Which of the following is a common threat in modern cloud environments?",
				a: [
					"Automatic subnet creation without manual IP address assignment",
					"Credential theft involving stolen API keys, tokens, and passwords",
					"Routine operating system updates performed by cloud providers",
					"Load balancing requests across multiple application instances",
				],
				c: 1,
			},
			{
				q: "Why are cloud security threats increasing as organizations adopt more cloud services?",
				a: [
					"Cloud environments eliminate the need for identity management",
					"Cloud providers require every application to use public IP addresses",
					"Cloud systems prevent organizations from automating security controls",
					"Rapid adoption and complex architectures can outpace security reviews",
				],
				c: 3,
			},
			{
				q: "What is the correct sequence of stages in the cloud attack kill chain presented in the lecture?",
				a: [
					"Reconnaissance, initial access, privilege escalation, lateral movement, data exfiltration",
					"Initial access, reconnaissance, data exfiltration, privilege escalation, lateral movement",
					"Reconnaissance, lateral movement, initial access, data exfiltration, privilege escalation",
					"Privilege escalation, initial access, reconnaissance, lateral movement, data exfiltration",
				],
				c: 0,
			},
			{
				q: "What is the purpose of reconnaissance during a cloud attack?",
				a: [
					"To encrypt stolen data before sending it outside the organization",
					"To permanently disable all identity providers in the cloud environment",
					"To discover potential targets, resources, and configuration weaknesses",
					"To restore compromised workloads to their original configurations",
				],
				c: 2,
			},
			{
				q: "Which scenario is an example of credential theft in a cloud environment?",
				a: [
					"A cloud provider replaces failed hardware in a data center",
					"An application downloads an approved software update",
					"A security administrator enables logging for database connections",
					"An attacker obtains an API key accidentally embedded in application code",
				],
				c: 3,
			},
			{
				q: "What is MFA fatigue as an identity-based attack?",
				a: [
					"Repeatedly changing passwords until an account becomes locked",
					"Flooding a user with authentication prompts until one is accepted",
					"Reusing a cloud provider's encryption keys across multiple services",
					"Disabling multi-factor authentication after a successful login",
				],
				c: 1,
			},
			{
				q: "What occurs during a token replay attack?",
				a: [
					"An attacker reuses a stolen session or access token to impersonate an authorized requester",
					"A developer rotates an expired API key before deploying an application",
					"A cloud provider automatically issues a new token after an operating system update",
					"A user authenticates with multiple independent authentication factors",
				],
				c: 0,
			},
			{
				q: "How does OAuth consent phishing typically compromise access?",
				a: [
					"By forcing a database to accept connections from every IP address",
					"By exploiting a physical security weakness at a cloud data center",
					"By tricking users into granting a malicious application access permissions",
					"By preventing applications from communicating with third-party services",
				],
				c: 2,
			},
			{
				q: "Which situation is an example of a cloud supply chain risk?",
				a: [
					"A private subnet uses a route table to reach a NAT Gateway",
					"A database uses encryption to protect sensitive customer records",
					"A user is required to complete MFA before accessing an application",
					"An attacker injects malicious build steps into a CI/CD pipeline",
				],
				c: 3,
			},
			{
				q: "What is the central idea of the cloud shared responsibility model?",
				a: [
					"The provider is responsible for every aspect of security in all service models",
					"Cloud security responsibilities are divided between the provider and the customer",
					"The customer manages physical data centers while the provider manages user accounts",
					"The provider and customer must both configure every security control identically",
				],
				c: 1,
			},
			{
				q: "Under the IaaS responsibility breakdown presented in the lecture, which task belongs to the customer?",
				a: [
					"Maintaining the physical security of the cloud data center",
					"Managing the provider's hypervisor infrastructure",
					"Securing and patching the guest operating system",
					"Maintaining the provider's physical host hardware",
				],
				c: 2,
			},
			{
				q: "Which responsibility is assigned to the provider in the lecture's PaaS model?",
				a: [
					"Writing and securing the customer's application logic",
					"Managing customer identity and access permissions",
					"Defining the customer's data governance requirements",
					"Maintaining the operating system and runtime infrastructure",
				],
				c: 3,
			},
			{
				q: "Which responsibility remains with the customer when using SaaS?",
				a: [
					"Managing user identities, access policies, and data classification",
					"Maintaining the provider's physical servers and network hardware",
					"Patching the provider's underlying operating system",
					"Managing the provider's application stack and platform availability",
				],
				c: 0,
			},
			{
				q: "Which example represents a dangerous cloud storage misconfiguration?",
				a: [
					"Restricting a storage bucket to authorized application identities",
					"Encrypting files before storing them in cloud object storage",
					"Leaving a storage bucket containing sensitive files publicly accessible",
					"Requiring authentication before users download protected objects",
				],
				c: 2,
			},
			{
				q: "What is a potential consequence of exposing a storage bucket to the public internet?",
				a: [
					"Automatic removal of all customer records from the cloud environment",
					"Sensitive data leakage, credential exposure, and compliance violations",
					"Guaranteed prevention of unauthorized access to stored objects",
					"Automatic conversion of private storage objects into encrypted backups",
				],
				c: 1,
			},
			{
				q: "Why are wildcard permissions such as s3:* or ec2:* potentially dangerous?",
				a: [
					"They automatically expire every credential associated with a workload",
					"They restrict a role to a single explicitly approved resource",
					"They prevent applications from accessing cloud storage or compute resources",
					"They can grant far more permissions than an application actually requires",
				],
				c: 3,
			},
			{
				q: "What is a security risk of running an application with an administrative cloud role?",
				a: [
					"A compromised application may gain excessive privileges over cloud resources",
					"The application will be unable to authenticate using service identities",
					"The cloud provider will automatically block every outbound connection",
					"The application will be restricted to reading public documentation",
				],
				c: 0,
			},
			{
				q: "What does the lecture identify as a risk of long-lived cloud credentials?",
				a: [
					"They cannot be used by applications or automation services",
					"They automatically enforce least-privilege permissions on every request",
					"Static keys may remain valid indefinitely if they are not rotated or expired",
					"They require every cloud workload to use multi-factor authentication",
				],
				c: 2,
			},
			{
				q: "Why is an inbound security group rule allowing 0.0.0.0/0 on a sensitive port dangerous?",
				a: [
					"It prevents any external system from discovering the exposed service",
					"It can make the port reachable from anywhere on the IPv4 internet",
					"It forces all connections to pass through a private VPN first",
					"It automatically limits access to devices managed by the organization",
				],
				c: 1,
			},
			{
				q: "Which configuration is an example of an insecure API gateway?",
				a: [
					"Requiring authentication and enforcing request throttling",
					"Applying authorization checks to sensitive application resources",
					"Limiting access to internal APIs to approved workloads",
					"Exposing an API without authentication or rate limiting",
				],
				c: 3,
			},
			{
				q: "Which is a Kubernetes security misconfiguration identified in the lecture?",
				a: [
					"Restricting pod communication through network policies",
					"Using hardened container images from trusted sources",
					"Exposing a Kubernetes dashboard without authentication",
					"Requiring authentication for requests to the Kubernetes API server",
				],
				c: 2,
			},
			{
				q: "What is a major consequence of insufficient cloud logging and monitoring?",
				a: [
					"Attackers may remain undetected, and investigators may lack audit trails",
					"All cloud workloads automatically lose their assigned private IP addresses",
					"Encryption at rest is automatically disabled for every storage service",
					"Network segmentation becomes impossible in every cloud environment",
				],
				c: 0,
			},
			{
				q: "How can one overprivileged service account increase the impact of a cloud breach?",
				a: [
					"It forces every workload to use a separate identity provider",
					"It can allow a single compromised identity to access many resources",
					"It automatically blocks attackers from escalating their privileges",
					"It limits the compromised application to its original network segment",
				],
				c: 1,
			},
			{
				q: "How does microsegmentation help mitigate cloud threats?",
				a: [
					"It removes the need to authenticate service-to-service requests",
					"It grants all workloads access to shared administrative credentials",
					"It ensures every cloud application runs on a separate physical server",
					"It restricts lateral movement by limiting communication between workloads",
				],
				c: 3,
			},
			{
				q: "Which combination matches the defense-in-depth layers presented in the lecture?",
				a: [
					"Identity controls, network segmentation, workload protection, data encryption, and monitoring",
					"Public IP addressing, unrestricted access, shared credentials, and reduced logging",
					"Application scaling, load balancing, automatic backups, and resource tagging only",
					"Physical security, public storage, broad permissions, and manual incident reporting",
				],
				c: 0,
			},
			{
				q: "Which practice is recommended for protecting human access to cloud environments?",
				a: [
					"Allowing administrators to share permanent access keys between applications",
					"Granting full administrative roles to every authenticated employee",
					"Enforcing multi-factor authentication for all human access",
					"Disabling conditional access whenever a user works remotely",
				],
				c: 2,
			},
			{
				q: "What is the purpose of Cloud Security Posture Management (CSPM)?",
				a: [
					"To issue OAuth tokens to third-party applications automatically",
					"To identify cloud misconfigurations and security posture weaknesses",
					"To replace all cloud identity and access management systems",
					"To manage application source code without reviewing deployment templates",
				],
				c: 1,
			},
			{
				q: "What is the primary purpose of Cloud Infrastructure Entitlement Management (CIEM)?",
				a: [
					"To encrypt every network connection between application containers",
					"To scan application dependencies for known software vulnerabilities",
					"To automatically publish internal services to the public internet",
					"To identify and right-size permissions granted to cloud identities",
				],
				c: 3,
			},
			{
				q: "How does Infrastructure as Code (IaC) scanning improve cloud security?",
				a: [
					"It detects insecure infrastructure templates before they are deployed",
					"It replaces all runtime monitoring with manual configuration reviews",
					"It grants administrative permissions to infrastructure deployment accounts",
					"It prevents organizations from automating cloud resource provisioning",
				],
				c: 0,
			},
		],
	},

	SocIndi: {
		review: {
			"CHAPTER 1": [
				{
					q: "What are the main components of technology in the textbook's definition?",
					a: [
						"Science, politics, law, and education",
						"Tools, techniques, knowledge, and organization",
						"Energy, materials, trade, and transportation",
						"Machines, factories, money, and markets",
					],
					c: 1,
				},
				{
					q: "How does the textbook broadly define technology?",
					a: [
						"A collection of machines used for industrial production",
						"A human-created system using knowledge and organization",
						"Physical objects developed without social influences",
						"Scientific knowledge converted directly into useful products",
					],
					c: 1,
				},
				{
					q: "Why is organization included in the definition of technology?",
					a: [
						"Organizations provide the scientific theories behind every invention",
						"Organizational structures are simply another type of machine",
						"Technological systems require coordinated human and material resources",
						"Technology cannot exist unless governments operate it",
					],
					c: 2,
				},
				{
					q: "What does the goose-quill pen example illustrate?",
					a: [
						"Organic materials cannot be considered technological resources",
						"Writing technologies have remained essentially unchanged",
						"Industrial products always require more skill than older tools",
						"Handicraft technology can require substantial skill from its user",
					],
					c: 3,
				},
				{
					q: "How did the steel-nib pen differ from the goose quill?",
					a: [
						"It depended primarily on organic materials and manual production",
						"It was mass-produced through more complex industrial processes",
						"It required substantially more skill and personal adaptation",
						"It was individually shaped by users from locally gathered materials",
					],
					c: 1,
				},
				{
					q: "What does the ballpoint pen illustrate in Mumford's analysis?",
					a: [
						"Industrial manufacturing eliminates specialization in production",
						"Technological development has returned writing to organic materials",
						"Industrial technology can place sophisticated production behind simple use",
						"Modern products generally require more craftsmanship from users",
					],
					c: 2,
				},
				{
					q: "Why can technological systems be fragile?",
					a: [
						"Technological systems depend entirely on one physical machine",
						"Disruptions in one area can affect connected organizational and technical components",
						"Technological components normally operate independently of supply chains",
						"Modern systems cannot be supported by organizational structures",
					],
					c: 1,
				},
				{
					q: "What does the 'law of the hammer' illustrate?",
					a: [
						"Available technologies can influence which problems people perceive and address",
						"Every technology is invented only after a specific social need appears",
						"Technological systems are developed without regard to existing problems",
						"Tools become less influential when societies become technologically advanced",
					],
					c: 0,
				},
				{
					q: "How can technology create new perceived needs?",
					a: [
						"New inventions cannot change what people consider useful or necessary",
						"Technological needs must always exist before an invention is developed",
						"A new technology can encourage people to treat something as a problem requiring intervention",
						"Medical technologies are always developed without any practical purpose",
					],
					c: 2,
				},
				{
					q: "What does it mean for technological change to be cumulative?",
					a: [
						"Each new technology must be developed independently of earlier systems",
						"Earlier advances provide knowledge and resources for later developments",
						"Technologies become advanced only when older systems are abandoned",
						"Technological progress requires replacing all existing knowledge",
					],
					c: 1,
				},
				{
					q: "Why is technological change described as dynamic?",
					a: [
						"Dynamic change refers mainly to increases in technology prices",
						"Existing technologies can continually be modified and improved",
						"Technological systems improve only when governments mandate changes",
						"Technologies normally remain unchanged once they become successful",
					],
					c: 1,
				},
				{
					q: "What is a reverse salient?",
					a: [
						"A technology that becomes obsolete immediately after invention",
						"A system designed specifically to reverse technological development",
						"A social group that refuses to use a completed technology",
						"A component or subsystem that holds back progress in the larger system",
					],
					c: 3,
				},
				{
					q: "What held back nineteenth-century electrification in the example?",
					a: [
						"A lack of electrical generators prevented electricity production",
						"Consumers rejected electric lighting because it was too inexpensive",
						"The absence of scientific knowledge prevented electrical experiments",
						"Problems with long-distance transmission limited further development",
					],
					c: 3,
				},
				{
					q: "What does presentism mean when evaluating older technologies?",
					a: [
						"Studying only technologies developed during the present era",
						"Treating technological history as independent of social conditions",
						"Assuming future technologies will always outperform current systems",
						"Judging past technologies using assumptions based on the present",
					],
					c: 3,
				},
				{
					q: "Why can presentism distort judgments about older technologies?",
					a: [
						"It prevents comparisons between technologies from different periods",
						"It guarantees that historical technologies are evaluated objectively",
						"It can overlook the circumstances and purposes surrounding their original use",
						"It focuses too heavily on the social conditions of earlier societies",
					],
					c: 2,
				},
				{
					q: "How does the textbook distinguish technological advance from progress?",
					a: [
						"Progress refers only to technologies that are no longer widely used",
						"Technological advance and social progress always have identical meanings",
						"Technological advance is defined mainly by political approval",
						"Technical improvement does not automatically mean social improvement",
					],
					c: 3,
				},
				{
					q: "Why does the textbook question the simple image of progress?",
					a: [
						"Technologies can improve performance while creating costs or disruptions",
						"Technological progress can be measured without considering consequences",
						"Technological change occurs only when societies reject existing systems",
						"Technological development has produced no measurable improvements in history",
					],
					c: 0,
				},
				{
					q: "What is technological determinism primarily concerned with?",
					a: [
						"The claim that society completely controls every technological decision",
						"The belief that technology has no effects outside laboratories",
						"The idea that technology can strongly influence social change",
						"The argument that technology requires government approval",
					],
					c: 2,
				},
				{
					q: "Why does the textbook avoid treating technology as completely autonomous?",
					a: [
						"Technology develops only through natural processes outside human control",
						"Technological systems are created and shaped through human and social processes",
						"Technological systems have no relationship with organizational decisions",
						"Technology determines every social outcome regardless of human choices",
					],
					c: 1,
				},
				{
					q: "What role can rational thought play in technological development?",
					a: [
						"It prevents designers from considering practical circumstances",
						"It removes creativity and imagination from technological work",
						"It requires every invention to begin with an established theory",
						"It supports testing, problem solving, measurement, and systematic reasoning",
					],
					c: 3,
				},
				{
					q: "Why can technological change involve social disruption?",
					a: [
						"Social disruption occurs only when a technology fails completely",
						"Technological change affects objects but never social arrangements",
						"Technological systems normally operate without changing how people work",
						"New systems may require changes in skills, organizations, habits, and institutions",
					],
					c: 3,
				},
				{
					q: "What does the textbook suggest about technologies and existing needs?",
					a: [
						"Existing needs always determine the exact form of new technologies",
						"Some technologies respond to needs, while others can create new perceived needs",
						"Every technology is invented only after users formally request it",
						"Technologies never influence what people consider useful or necessary",
					],
					c: 1,
				},
				{
					q: "Why can technology not substitute for effective governance?",
					a: [
						"Technical methods cannot by themselves resolve political and social questions",
						"Governance problems are primarily engineering problems with technical solutions",
						"Technological systems can automatically establish fair political institutions",
						"Technological expertise eliminates the need for public participation",
					],
					c: 0,
				},
				{
					q: "What broader lesson does the textbook draw from technological systems?",
					a: [
						"Technical choices connect with organizational, social, economic, and political conditions",
						"Technological development is mainly about producing better physical objects",
						"Social institutions have little relevance once technology begins operating",
						"Technical components can always be studied independently of their surroundings",
					],
					c: 0,
				},
				{
					q: "What does the textbook emphasize about the development of technological systems?",
					a: [
						"They may require many social, psychological, economic, and political adjustments",
						"They depend only on technical improvements rather than social changes",
						"They develop smoothly whenever engineers have enough scientific knowledge",
						"They normally emerge fully formed with every component working immediately",
					],
					c: 0,
				},
			],
			"CHAPTER 2": [
				{
					q: "Why can technological change create both winners and losers?",
					a: [
						"Technologies affect only people who directly purchase them",
						"Technological change normally provides identical benefits to every group",
						"Benefits and costs can be distributed differently among social groups",
						"Technological change has no meaningful economic consequences",
					],
					c: 2,
				},
				{
					q: "What concern is central to 'Whose Technology?'",
					a: [
						"Which scientist first discovered the principles behind modern technology",
						"Which country has produced the greatest number of inventions",
						"Which machines can operate without human workers",
						"Who controls technological choices and who receives their benefits",
					],
					c: 3,
				},
				{
					q: "Who were the Luddites?",
					a: [
						"Scientists who organized early research laboratories in England",
						"English workers who resisted aspects of industrial technological change",
						"Farmers who introduced mechanical harvesting throughout Europe",
						"Government officials who promoted industrial automation",
					],
					c: 1,
				},
				{
					q: "What was an important concern behind Luddite resistance?",
					a: [
						"Industrial machines were considered too unreliable for factory production",
						"Workers believed all forms of scientific knowledge were dangerous",
						"Machinery could threaten established work arrangements and livelihoods",
						"The movement primarily opposed the development of electrical power",
					],
					c: 2,
				},
				{
					q: "Why should the Luddites not simply be portrayed as enemies of technology?",
					a: [
						"Their resistance reflected economic and social concerns about how technology was used",
						"Their movement had no connection to changes in employment or production",
						"The Luddites supported machinery whenever it reduced production costs",
						"The Luddites were inventors who designed the machines they opposed",
					],
					c: 0,
				},
				{
					q: "What broader issue does the Luddite example illustrate?",
					a: [
						"Technological adoption always benefits workers before business owners",
						"Technological choices affect machines but cannot influence workers",
						"Technological resistance occurs only when people misunderstand science",
						"Technological choices can redistribute economic power and opportunities",
					],
					c: 3,
				},
				{
					q: "What does neo-Luddism generally refer to?",
					a: [
						"A historical movement that supported factory automation",
						"A government program designed to accelerate innovation",
						"Modern criticism of technologies viewed as harmful or socially disruptive",
						"A scientific theory explaining industrial productivity",
					],
					c: 2,
				},
				{
					q: "Why can technological advance undermine established businesses?",
					a: [
						"Technological advances normally protect established businesses from competition",
						"Businesses are affected only when governments prohibit older technologies",
						"New technologies cannot alter consumer expectations or purchasing habits",
						"New methods can change how goods and services are produced or distributed",
					],
					c: 3,
				},
				{
					q: "What Internet-related disruption does the chapter discuss?",
					a: [
						"Internet commerce can threaten conventional brick-and-mortar retailers",
						"Digital commerce primarily affected government agencies rather than firms",
						"The Internet had little effect on businesses serving local customers",
						"Online commerce mainly increased demand for traditional physical stores",
					],
					c: 0,
				},
				{
					q: "What is a technological 'fix'?",
					a: [
						"Using a technological solution to address a problem that may have social causes",
						"Using technology only when no political decisions are involved",
						"Replacing every older technology with a newer version regardless of need",
						"Designing machines specifically to prevent organizations from changing",
					],
					c: 0,
				},
				{
					q: "Why can technological fixes be limited?",
					a: [
						"Technical solutions always create larger problems than the original issue",
						"Technological fixes work only without public involvement",
						"Technological solutions are incapable of changing physical conditions",
						"A technical solution may not address the social conditions creating the problem",
					],
					c: 3,
				},
				{
					q: "What can technological change do to productivity?",
					a: [
						"Higher productivity always guarantees higher income for every worker",
						"It can increase output while changing employment and economic relationships",
						"Productivity improvements have no effect on economic benefits",
						"Technological productivity is unrelated to business organization",
					],
					c: 1,
				},
				{
					q: "Why can technological effects differ between groups?",
					a: [
						"All groups interact with technology in identical economic circumstances",
						"Technological systems distribute benefits equally when productivity rises",
						"Technology affects groups only according to geographic location",
						"Groups have different resources, positions, skills, and exposure to change",
					],
					c: 3,
				},
				{
					q: "What does 'who wins and who loses' mean for technology?",
					a: [
						"Every technology produces fixed winners and losers before anyone uses it",
						"Technological development prevents conflicts between economic interests",
						"Choosing one technological path can advantage some interests over others",
						"Technological decisions matter only when governments choose winners",
					],
					c: 2,
				},
				{
					q: "Why should affected parties participate in technological choices?",
					a: [
						"Public participation guarantees that every technology will succeed",
						"Participation is needed because experts cannot evaluate technology",
						"Only affected parties possess the scientific knowledge needed to invent technology",
						"Those choices can have significant consequences for different groups",
					],
					c: 3,
				},
				{
					q: "What is a limitation of using technology to solve social problems?",
					a: [
						"Technical improvements cannot replace effective political and social institutions",
						"Political institutions become unnecessary when technology becomes sophisticated",
						"Technology can solve social problems whenever political choices are avoided",
						"Social problems disappear automatically when technical efficiency improves",
					],
					c: 0,
				},
				{
					q: "What does the chapter suggest about technology and justice?",
					a: [
						"Technological innovation removes the need to consider competing interests",
						"Technical progress does not automatically produce a just distribution of benefits",
						"Justice can be measured entirely through technological performance",
						"Technological progress guarantees equal outcomes across social groups",
					],
					c: 1,
				},
				{
					q: "What is a technocrat in the chapter's discussion?",
					a: [
						"A scientist whose work is limited to purely theoretical questions",
						"A worker who operates machinery without making policy decisions",
						"An entrepreneur who refuses to use scientific expertise",
						"A political decision-maker strongly associated with technical expertise",
					],
					c: 3,
				},
				{
					q: "Why might calling a political leader a technocrat carry implications?",
					a: [
						"It indicates that the leader works for a technology company",
						"It guarantees that the leader supports every technological change",
						"It means the leader has no interest in science or technology",
						"It can suggest that technical expertise is emphasized in political decisions",
					],
					c: 3,
				},
				{
					q: "What does the chapter suggest about technology and political choice?",
					a: [
						"Technological decisions are purely technical and outside politics",
						"Political choices become unnecessary whenever experts are available",
						"Technical decisions can involve values and competing interests beyond engineering",
						"Technology can determine the correct political outcome without debate",
					],
					c: 2,
				},
				{
					q: "Why can a successful technology still create social problems?",
					a: [
						"Its benefits may be accompanied by costs, disruptions, or unequal effects",
						"Technical success guarantees that every group benefits equally",
						"Successful technologies cannot affect employment or markets",
						"Social problems arise only when a technology fails to operate",
					],
					c: 0,
				},
				{
					q: "What does the chapter emphasize about technological limitations?",
					a: [
						"Technology is powerful within its realm but cannot address every social problem",
						"Technical expertise has little value outside research laboratories",
						"Technological methods can replace political institutions when implemented properly",
						"Technology is generally ineffective at solving practical problems",
					],
					c: 0,
				},
				{
					q: "How should technology be evaluated according to the chapter?",
					a: [
						"Evaluate technologies only by whether they increase production",
						"Focus on invention while ignoring adoption and use",
						"Judge technologies mainly by how advanced their physical components appear",
						"Consider technical achievements and the social distribution of their effects",
					],
					c: 3,
				},
				{
					q: "Why connect technological choices with participation?",
					a: [
						"Participation is needed because technologies cannot be evaluated technically",
						"Public participation ensures that no technology will cause disruption",
						"Participation matters only while a technology is being invented",
						"Those choices can determine which groups gain influence, benefits, or opportunities",
					],
					c: 3,
				},
				{
					q: "What broad lesson does the chapter draw from technological change?",
					a: [
						"Technological development can improve some conditions while disrupting others",
						"Technological change consistently produces equal gains for society",
						"Technological progress automatically resolves conflicts over resources",
						"Technological development is mainly a technical process without social effects",
					],
					c: 0,
				},
			],
			"CHAPTER 4": [
				{
					q: "What misconception about science and technology does Chapter 4 challenge?",
					a: [
						"Technology is not simply scientific knowledge applied directly to practical problems",
						"Technology developed only after modern scientific institutions appeared",
						"Science and technology have completely unrelated goals and methods",
						"Scientific discoveries always become technologies immediately",
					],
					c: 0,
				},
				{
					q: "How does the chapter distinguish the typical aims of science and technology?",
					a: [
						"Science seeks knowledge, while technology uses knowledge to accomplish purposes",
						"Science and technology have identical goals but different equipment",
						"Science creates practical devices, while technology studies nature for its own sake",
						"Technology seeks knowledge alone, while science focuses mainly on manufacturing",
					],
					c: 0,
				},
				{
					q: "What did Project Hindsight investigate?",
					a: [
						"The contribution of scientific research to developing major weapons systems",
						"The role of universities in patenting genetic information",
						"The development of commercial radio and television",
						"The effects of industrial technology on factory workers",
					],
					c: 0,
				},
				{
					q: "How many events in Project Hindsight's sample resulted from basic scientific research?",
					a: [
						"Nearly all of the 710 events studied resulted from basic research",
						"About half of the 710 events studied resulted from basic research",
						"None of the 710 events involved scientific knowledge",
						"Two of the 710 events studied were attributed to basic research",
					],
					c: 3,
				},
				{
					q: "What percentage of Project Hindsight's events came from basic research?",
					a: [
						"About 6.7 percent of the events examined",
						"About 92 percent of the events examined",
						"About 0.3 percent of the events examined",
						"About 2 percent of the events examined",
					],
					c: 2,
				},
				{
					q: "What did Project Hindsight suggest about science and technology?",
					a: [
						"Basic research had no relationship to military technology",
						"Technology generally developed without scientific concepts",
						"Most technologies were created directly from newly completed research",
						"Many technologies relied on established knowledge rather than recent basic research",
					],
					c: 3,
				},
				{
					q: "What limitation of Project Hindsight does the chapter identify?",
					a: [
						"The researchers focused entirely on commercial technologies",
						"The study measured science without considering technological applications",
						"Its method did not fully capture the long-term influence of earlier science",
						"The study examined too many technological systems from different industries",
					],
					c: 2,
				},
				{
					q: "What median delay did Hindsight find between research and application?",
					a: [
						"About one hundred years separated research completion and application",
						"About nine years separated research completion and technological application",
						"About nine months separated research completion and technological application",
						"About thirty years separated research completion and application",
					],
					c: 1,
				},
				{
					q: "What systems were examined by Project Hindsight Revisited?",
					a: [
						"Penicillin, open-heart surgery, cloning, and gene therapy",
						"The Apache, Abrams, Stinger, and Javelin military systems",
						"The radio, television, Internet, and printing press",
						"The steam engine, spinning jenny, telegraph, and automobile",
					],
					c: 1,
				},
				{
					q: "What did the later Hindsight study note about relevant research?",
					a: [
						"The systems depended entirely on research for specific designs",
						"The projects had no connection to earlier research",
						"Nearly all relevant research was performed after each project launched",
						"Much of it had been completed before the military projects began",
					],
					c: 3,
				},
				{
					q: "What did the TRACES study add to the discussion?",
					a: [
						"It showed that science never influences technological development",
						"It demonstrated that technology always develops before science",
						"It found examples of innovations connected to earlier scientific research",
						"It examined only military weapons and found no scientific connections",
					],
					c: 2,
				},
				{
					q: "Why is the science-technology relationship not linear?",
					a: [
						"Technology develops only after every scientific problem is solved",
						"Science can influence technology, while technology can also contribute to science",
						"Scientific discoveries always occur after technological applications",
						"Science and technology follow paths that never intersect",
					],
					c: 1,
				},
				{
					q: "How can technology contribute to scientific discovery?",
					a: [
						"Scientific discovery occurs only after technology reaches perfection",
						"Technology prevents scientists from testing ideas independently",
						"New instruments and techniques can make previously inaccessible observations possible",
						"Technological devices replace the need for scientific theories",
					],
					c: 2,
				},
				{
					q: "What does John Ambrose Fleming illustrate?",
					a: [
						"A scientifically trained engineer can translate scientific knowledge into technology",
						"Technological invention always requires a commercial company",
						"A pure scientist can develop practical technology without engineering knowledge",
						"Scientific and engineering work must remain completely separate",
					],
					c: 0,
				},
				{
					q: "What did Fleming's background help him do?",
					a: [
						"Prevent electrical research from industrial influence",
						"Develop technologies without scientific knowledge or training",
						"Connect scientific understanding with practical electrical technology",
						"Replace electrical engineering with theoretical scientific research",
					],
					c: 2,
				},
				{
					q: "What do science and technology have in common?",
					a: [
						"Both operate independently from social institutions",
						"Both pursue exactly the same goals and methods",
						"Both depend mainly on replacing previous knowledge",
						"Both build cumulatively on knowledge produced by earlier work",
					],
					c: 3,
				},
				{
					q: "What does 'standing on the shoulders of giants' illustrate?",
					a: [
						"New achievements depend on knowledge produced by earlier work",
						"Scientific progress occurs independently of earlier achievements",
						"Technological development advances by abandoning established techniques",
						"Scientific discovery requires rejecting all previous theories",
					],
					c: 0,
				},
				{
					q: "What shared intellectual approach do science and technology often use?",
					a: [
						"Avoidance of measurement when evaluating claims",
						"Observation, testing, experimentation, and systematic measurement",
						"Dependence on authority rather than evidence",
						"Reliance on tradition without testing explanations",
					],
					c: 1,
				},
				{
					q: "What example from Pirsig illustrates scientific and technological reasoning?",
					a: [
						"A scientist builds a motorcycle from theoretical equations",
						"A mechanic repairs a motorcycle by following tradition without testing",
						"An engineer avoids experiments because problems can be solved intuitively",
						"A mechanic tests hypotheses systematically while diagnosing a motorcycle problem",
					],
					c: 3,
				},
				{
					q: "Why does the chapter caution against calling science completely rational?",
					a: [
						"Scientific work depends entirely on political decisions",
						"Scientific theories and interpretations still involve creativity and human judgment",
						"Scientific research never uses observation or logical reasoning",
						"Scientific theories cannot be evaluated through testing",
					],
					c: 1,
				},
				{
					q: "What role does mathematics play in science and technology?",
					a: [
						"It is mainly relevant to historical technologies",
						"It replaces experiments and observations in both fields",
						"It is used only by scientists and not by engineers",
						"It serves as an important language and analytical tool for both fields",
					],
					c: 3,
				},
				{
					q: "Why can translating scientific knowledge into technology be difficult?",
					a: [
						"Technological applications require no decisions beyond discovery",
						"Practical applications require different purposes, constraints, and forms of knowledge",
						"Technology can use science only after every theory is finished",
						"Scientific knowledge automatically determines every useful device",
					],
					c: 1,
				},
				{
					q: "What does social construction of science mean in the chapter?",
					a: [
						"Science has no methods for evaluating explanations",
						"Scientific findings are simply invented without evidence",
						"Scientific knowledge exists independently of institutions",
						"Scientific activity can be influenced by social, political, organizational, and economic conditions",
					],
					c: 3,
				},
				{
					q: "What is the chapter's overall conclusion about science and technology?",
					a: [
						"Science develops independently while technology follows a separate path",
						"They are distinct enterprises that often intersect and influence one another",
						"Science and technology have identical purposes despite different terminology",
						"Technology is simply science applied immediately to practical problems",
					],
					c: 1,
				},
				{
					q: "Why can science and technology benefit from close contact?",
					a: [
						"Each can provide knowledge, tools, or methods that support the other's development",
						"They must become identical enterprises to make progress",
						"Technology can progress only when science controls every technical decision",
						"Scientific research becomes unnecessary once technology develops",
					],
					c: 0,
				},
			],
			"CHAPTER 10": [
				{
					q: "What did Thomas Hunt Morgan's research help establish about genes?",
					a: [
						"Chromosomes were identified as the location of key agents of heredity",
						"DNA was shown to be unrelated to inherited characteristics",
						"Genetic traits were found to develop independently of cells",
						"Genes were shown to exist only outside chromosomes",
					],
					c: 0,
				},
				{
					q: "What discovery in the 1940s clarified the molecular basis of genes?",
					a: [
						"DNA was identified as a key constituent of genes",
						"Genes were shown to consist mainly of environmental experiences",
						"Proteins were shown to be unrelated to cell reproduction",
						"Chromosomes were shown to contain no hereditary information",
					],
					c: 0,
				},
				{
					q: "What did Watson and Crick determine in 1953?",
					a: [
						"The first practical use of PCR machines",
						"The complete sequence of every human gene",
						"The first successful transfer of genes between organisms",
						"The molecular structure of DNA as a double helix",
					],
					c: 3,
				},
				{
					q: "Why was the 1953 DNA discovery important?",
					a: [
						"It provided a foundation for expanding knowledge of genetic function",
						"It immediately allowed scientists to edit every human gene safely",
						"It eliminated the need for further genetic research",
						"It proved all traits could be predicted from one chromosome",
					],
					c: 0,
				},
				{
					q: "What advance occurred in the 1970s?",
					a: [
						"Researchers learned to separate and isolate portions of DNA",
						"Researchers developed the first commercial GM crops",
						"Researchers cloned the first adult human being",
						"Researchers completed the full human genome sequence",
					],
					c: 0,
				},
				{
					q: "What did isolating portions of DNA make possible?",
					a: [
						"Preventing DNA from reproducing inside living cells",
						"Transferring genetic material from one organism to another",
						"Replacing chromosomes with manufactured proteins",
						"Determining every environmental cause of inherited traits",
					],
					c: 1,
				},
				{
					q: "What did polymerase chain reaction machines allow?",
					a: [
						"Researchers could obtain and analyze large amounts of DNA",
						"Researchers could replace DNA sequencing with visual inspection",
						"Researchers could create complete organisms from nonliving material",
						"Researchers could eliminate mutations from populations",
					],
					c: 0,
				},
				{
					q: "What did automated sequencing and mapping machines contribute?",
					a: [
						"They helped make large-scale genome sequencing increasingly feasible",
						"They replaced computers in genetic information analysis",
						"They made genetic mapping unnecessary for heredity research",
						"They prevented researchers from identifying gene sequences",
					],
					c: 0,
				},
				{
					q: "What was the Human Genome Project?",
					a: [
						"A private program designed only to patent human genes",
						"An international effort to determine and map the human genetic sequence",
						"A medical program focused only on genetic disease treatment",
						"A farming project designed to create modified crops",
					],
					c: 1,
				},
				{
					q: "Which organizations coordinated the Human Genome Project?",
					a: [
						"The FDA and Department of Agriculture",
						"The National Science Foundation and Department of Defense alone",
						"The World Health Organization and United Nations",
						"The U.S. Department of Energy and National Institutes of Health",
					],
					c: 3,
				},
				{
					q: "What was Celera Genomics' role in the Human Genome era?",
					a: [
						"It was a private company that also worked to decode the human genome",
						"It was a university laboratory opposing genome sequencing",
						"It was a government agency regulating genetic patents",
						"It was a medical organization specializing in counseling",
					],
					c: 0,
				},
				{
					q: "What happened in early 2001 regarding the human genome?",
					a: [
						"The Human Genome Project ended before publishing sequence information",
						"Celera became the sole organization responsible for sequencing",
						"The Human Genome Project and Celera separately published rough drafts",
						"The complete human genome was edited to remove diseases",
					],
					c: 2,
				},
				{
					q: "Why did gene sequencing create patenting controversies?",
					a: [
						"It raised questions about ownership and intellectual property over biological information",
						"Scientists agreed biological discoveries could never have value",
						"Gene sequencing made intellectual property law unnecessary",
						"Gene patents automatically prevented genetic research",
					],
					c: 0,
				},
				{
					q: "What is the 'genetic fix'?",
					a: [
						"A farming method replacing crops with synthetic plants",
						"Using computers to repair genetic databases",
						"A diagnostic method avoiding genetic information",
						"The expectation that genetic intervention can correct particular biological problems",
					],
					c: 3,
				},
				{
					q: "What does genetic screening allow?",
					a: [
						"Removal of all harmful genes from an individual's cells",
						"Identification of genetic characteristics or risks associated with conditions",
						"Replacement of medical diagnosis with genetic information alone",
						"Guaranteed prediction of every person's future health outcome",
					],
					c: 1,
				},
				{
					q: "What is genetic mapping used for?",
					a: [
						"Preventing comparisons among genetic differences",
						"Replacing DNA with artificial chromosomes in every cell",
						"Determining social characteristics without biological information",
						"Locating and identifying patterns or sequences within genetic information",
					],
					c: 3,
				},
				{
					q: "What concern is associated with genetic information privacy?",
					a: [
						"Genetic testing makes discrimination impossible",
						"Genetic information has no relationship to personal privacy",
						"Genetic information can always be interpreted without uncertainty",
						"Genetic information could affect how people are treated by institutions",
					],
					c: 3,
				},
				{
					q: "What is GINA?",
					a: [
						"A biotechnology company specializing in modified crops",
						"A U.S. law addressing discrimination based on genetic information",
						"A research program that completed the Human Genome Project",
						"A genetic screening technique for inherited mutations",
					],
					c: 1,
				},
				{
					q: "What major issue surrounds genetically modified crops?",
					a: [
						"They have no agricultural benefits or practical applications",
						"Their benefits, risks, limitations, and agricultural effects are debated",
						"They are identical to conventionally bred crops in every respect",
						"They eliminate every environmental and economic farming problem",
					],
					c: 1,
				},
				{
					q: "What does the chapter discuss about GM crops?",
					a: [
						"Genetic technologies can alter traits while raising questions about risks and control",
						"GM crops are used only for medical research",
						"Agricultural biotechnology removes the need for farmers",
						"Genetic modification has no effect on crop characteristics",
					],
					c: 0,
				},
				{
					q: "What is cloning in genetic technologies?",
					a: [
						"Sequencing DNA without reproducing biological material",
						"Using genetic screening to compare unrelated people",
						"Changing every gene to create a completely unrelated individual",
						"Producing a genetically similar organism or biological material from a source",
					],
					c: 3,
				},
				{
					q: "Why does cloning raise ethical questions?",
					a: [
						"Cloning automatically produces identical adults and experiences",
						"It raises issues involving identity, reproduction, safety, and acceptable uses",
						"Cloning has no biological effects and creates no ethical questions",
						"Ethical concerns arise only because cloning lacks scientific research",
					],
					c: 1,
				},
				{
					q: "What does pluripotency mean in stem-cell research?",
					a: [
						"The inability of cells to develop into specialized structures",
						"The capacity of cells to develop into multiple specialized cell types",
						"The ability of cells to survive without genetic information",
						"The ability of a cell to produce only one specialized tissue",
					],
					c: 1,
				},
				{
					q: "What is a potential benefit of stem-cell technologies?",
					a: [
						"They make genetic screening unnecessary for medicine",
						"They may contribute to future therapies using specialized cells or tissues",
						"They guarantee cures for every inherited disease",
						"They eliminate ethical questions around genetic technology",
					],
					c: 1,
				},
				{
					q: "Why does Chapter 10 discuss eugenics?",
					a: [
						"Eugenics was unrelated to heredity or reproductive control",
						"Historical efforts to control reproduction raise concerns about genetic intervention",
						"Eugenics demonstrated that genetic technologies are always successful",
						"Historical eugenics programs focused only on agricultural crops",
					],
					c: 1,
				},
			],
			"Tharakan Article": [
				{
					q: "What does indigenous knowledge (IK) refer to in Tharakan’s discussion?",
					a: [
						"Knowledge created only by governments",
						"Knowledge limited to modern industry",
						"Knowledge unique to a given culture",
						"Knowledge produced only by universities",
					],
					c: 2,
				},
				{
					q: "What distinguishes the modern scientific knowledge system (MSKS) from IKS?",
					a: [
						"MSKS is rooted in formal academic research",
						"MSKS is restricted to agricultural communities",
						"MSKS is passed mainly through oral traditions",
						"MSKS develops only through local trial and error",
					],
					c: 0,
				},
				{
					q: "Which examples does Tharakan identify as indigenous knowledge systems that have survived?",
					a: [
						"Ayurveda, universities, and industrial science",
						"Ayurveda, Unani, and acupuncture",
						"Panchayathi Raj, MSKS, and PCR",
						"Vrikshaturveda, MSKS, and patents",
					],
					c: 1,
				},
				{
					q: "At the community level, what role can IKS play?",
					a: [
						"It replaces every form of formal government",
						"It focuses only on preserving historical records",
						"It helps communities make decisions about local issues",
						"It prevents communities from adopting outside ideas",
					],
					c: 2,
				},
				{
					q: "What difficulty does Tharakan identify when defining who is indigenous?",
					a: [
						"Social and cultural contexts can make identification difficult",
						"Governments use exactly the same definition everywhere",
						"Indigenous knowledge has no connection to geography",
						"Indigenous groups always reject their own traditions",
					],
					c: 0,
				},
				{
					q: "Which term is presented as closely related to indigenous knowledge?",
					a: [
						"Industrial knowledge",
						"Traditional knowledge",
						"Corporate knowledge",
						"Automated knowledge",
					],
					c: 1,
				},
				{
					q: "What is a major characteristic of an indigenous knowledge system?",
					a: [
						"It must be formally published before being used",
						"It is separated from everyday community activities",
						"It is locally based and grounded in culture and geography",
						"It depends entirely on advanced laboratory equipment",
					],
					c: 2,
				},
				{
					q: "How is much indigenous knowledge traditionally transmitted?",
					a: [
						"Through oral tradition, mimicry, and practical application",
						"Through universities, exams, and professional licensing",
						"Through patents, journals, and laboratory reports",
						"Through international agencies and formal certification",
					],
					c: 0,
				},
				{
					q: "How does IKS commonly develop according to Tharakan?",
					a: [
						"Through theoretical research conducted in universities",
						"Through international standards imposed on communities",
						"Through commercial testing by large corporations",
						"Through daily engagement and trial and error",
					],
					c: 3,
				},
				{
					q: "Why does Tharakan reject the idea that indigenous knowledge is static?",
					a: [
						"IKS can only change when governments approve it",
						"IKS is replaced whenever modern science becomes available",
						"IKS changes in response to environmental and social stressors",
						"IKS must remain unchanged to preserve cultural identity",
					],
					c: 2,
				},
				{
					q: "What is generally expected regarding intellectual property within IKS?",
					a: [
						"Knowledge is always privately owned by individual inventors",
						"Knowledge must be patented before community use",
						"Knowledge is normally sold to outside organizations",
						"Knowledge is commonly shared for community benefit",
					],
					c: 3,
				},
				{
					q: "How can indigenous knowledge be distributed within a community?",
					a: [
						"It is restricted to government officials and researchers",
						"It can vary by age, seniority, gender, or subgroup",
						"It is always equally distributed among every resident",
						"It is automatically available only to international organizations",
					],
					c: 1,
				},
				{
					q: "Who may be recognized as an expert and knowledge bearer in an IKS community?",
					a: [
						"Only a government employee with formal certification",
						"Only a person who has registered a patent",
						"Only a scientist with a university research position",
						"A respected person with experience or recognized authority",
					],
					c: 3,
				},
				{
					q: "What does Tharakan identify as an example of local-level IKS decision-making?",
					a: [
						"The international patent registration system",
						"The panchayathi raj form of local government",
						"The modern university research system",
						"The global industrial manufacturing system",
					],
					c: 1,
				},
				{
					q: "Why are IKS important for community capacity building?",
					a: [
						"They can support technologies that address community challenges",
						"They prevent communities from using modern technologies",
						"They focus exclusively on producing commercial exports",
						"They eliminate the need for community participation",
					],
					c: 0,
				},
				{
					q: "What is an important philosophy behind appropriate technology (AT)?",
					a: [
						"Replacing local resources with imported equipment",
						"Maximizing production regardless of local conditions",
						"Empowering communities while addressing basic needs",
						"Concentrating technology ownership outside the community",
					],
					c: 2,
				},
				{
					q: "Which characteristic is commonly associated with appropriate technologies in the paper?",
					a: [
						"Operating only at large industrial scales",
						"Depending entirely on imported machinery",
						"Requiring very large amounts of capital",
						"Using local materials and resources",
					],
					c: 3,
				},
				{
					q: "What community role is emphasized throughout the development of appropriate technology?",
					a: [
						"The community should be included throughout the development process",
						"The community should participate only after evaluation is finished",
						"The community should only receive the completed technology",
						"The community should be excluded from technical decisions",
					],
					c: 0,
				},
				{
					q: "At what stage should local community inclusion in AT development begin?",
					a: [
						"After the technology has been commercially marketed",
						"At the technology conceptualization stage",
						"Only after outside experts complete all testing",
						"Only after the technology has been implemented",
					],
					c: 1,
				},
				{
					q: "What qualities should an appropriate technology have regarding changing circumstances?",
					a: [
						"It should require specialized imported materials",
						"It should remain fixed after its initial design",
						"It should be adaptable and flexible",
						"It should avoid modification by local users",
					],
					c: 2,
				},
				{
					q: "What environmental principle does Tharakan associate with appropriate technology?",
					a: [
						"It should eliminate adverse environmental impacts",
						"It should depend on increasingly scarce resources",
						"It should avoid considering environmental consequences",
						"It should prioritize production over environmental effects",
					],
					c: 0,
				},
				{
					q: "Which basic needs are identified as targets for appropriate technologies?",
					a: [
						"Clean water, safe food, healthcare, and education",
						"Military equipment, exports, and financial services",
						"Large factories, highways, and commercial buildings",
						"Luxury products, entertainment, and tourism",
					],
					c: 0,
				},
				{
					q: "How can IKS contribute to the development of appropriate technology?",
					a: [
						"It can provide only historical information with no practical value",
						"It can replace every scientific method used in technology development",
						"It can prevent communities from adapting existing technologies",
						"It can provide locally developed knowledge for addressing community needs",
					],
					c: 3,
				},
				{
					q: "What does Tharakan suggest should happen after community needs are identified?",
					a: [
						"Relevant IKS practices should be identified through community engagement",
						"Outside technologies should automatically be selected",
						"Only international development agencies should determine the solution",
						"All local practices should immediately be discarded",
					],
					c: 0,
				},
				{
					q: "What is one sustainability benefit of drawing from IKS for AT development?",
					a: [
						"It prevents communities from developing new approaches",
						"It can strengthen practices suited to local conditions",
						"It guarantees that every traditional practice is environmentally harmless",
						"It removes the need to evaluate technologies scientifically",
					],
					c: 1,
				},
				{
					q: "What plant is highlighted as an example of indigenous knowledge used in health and agriculture?",
					a: ["Wheat", "Bamboo", "Neem", "Corn"],
					c: 2,
				},
				{
					q: "For which areas has turmeric been used in indigenous practices according to the paper?",
					a: [
						"Only construction, transportation, and mining",
						"Only water treatment, housing, and electricity",
						"Only communication, education, and finance",
						"Agriculture, animal husbandry, and health",
					],
					c: 3,
				},
				{
					q: "What is vrikshaturveda described as?",
					a: [
						"A laboratory method for sequencing agricultural genomes",
						"An older IKS focused on organic and natural agricultural practices",
						"A modern industrial system for producing synthetic fertilizers",
						"A government program for patenting agricultural inventions",
					],
					c: 1,
				},
				{
					q: "What traditional inputs are discussed in relation to vrikshaturveda?",
					a: [
						"Cow dung and biomass waste",
						"Metal alloys and processed plastics",
						"Imported fertilizers and industrial solvents",
						"Synthetic pesticides and petroleum products",
					],
					c: 0,
				},
				{
					q: "Which ingredients are described as being used in a traditional plant spray discussed by Tharakan?",
					a: [
						"Turmeric, rice, wheat, and bamboo",
						"Water, sand, charcoal, and limestone",
						"Neem oil, salt, sugar, and vinegar",
						"Cow urine, yogurt, milk, and ghee",
					],
					c: 3,
				},
				{
					q: "Why is indigenous water knowledge important to appropriate technology?",
					a: [
						"It requires replacing traditional systems with centralized infrastructure",
						"It prevents communities from responding to seasonal rainfall patterns",
						"It includes local approaches to sourcing, conserving, storing, and treating water",
						"It focuses only on transporting water between major cities",
					],
					c: 2,
				},
				{
					q: "Which traditional water tank systems are mentioned as examples from India?",
					a: [
						"Ayurveda, Unani, and acupuncture",
						"Ghee, biomass, and vrikshaturveda",
						"Ery, kere, and cheruva",
						"Panchayathi, neem, and turmeric",
					],
					c: 2,
				},
				{
					q: "Why does Tharakan discuss scientific study of practices such as turmeric use?",
					a: [
						"To prevent traditional knowledge from being shared locally",
						"To prove that all traditional practices are automatically effective",
						"To replace all indigenous practitioners with laboratory scientists",
						"To understand the mechanisms behind potential health effects",
					],
					c: 3,
				},
				{
					q: "Why has the Chinese government supported institutes studying traditional medical practices?",
					a: [
						"To restrict acupuncture to private commercial organizations",
						"To provide systematic and scientific study of those practices",
						"To eliminate traditional medicine from Chinese healthcare",
						"To prevent biomedical researchers from studying indigenous practices",
					],
					c: 1,
				},
				{
					q: "What issue does Tharakan identify as important for protecting IKS-based technologies?",
					a: [
						"International advertising and product branding",
						"University rankings and research funding",
						"Intellectual property and protection of knowledge bearers",
						"Transportation costs and industrial automation",
					],
					c: 2,
				},
				{
					q: "What does Tharakan suggest regarding indigenous knowledge and patents?",
					a: [
						"IK should be researched and given due credit when relevant",
						"Only outside researchers should receive credit for indigenous discoveries",
						"IK should never be considered in intellectual property decisions",
						"Traditional knowledge should automatically become private property",
					],
					c: 0,
				},
				{
					q: "What government-supported effort in India is mentioned for documenting indigenous knowledge?",
					a: [
						"The National Industrial Agriculture Program",
						"The Global Indigenous Technology Registry",
						"The National Mission for Manuscripts",
						"The International Technology Patent Authority",
					],
					c: 2,
				},
				{
					q: "What kinds of activities should institutions support for indigenous knowledge management?",
					a: [
						"Access, documentation, sharing, and digital dissemination",
						"Secrecy, privatization, export restrictions, and commercialization",
						"Industrial production, patenting, advertising, and licensing",
						"Centralization, replacement, automation, and standardization",
					],
					c: 0,
				},
				{
					q: "How does the holistic approach of IKS differ from a disciplinary approach?",
					a: [
						"IKS considers problems systemically rather than separating them into isolated parts",
						"IKS studies only one scientific discipline at a time",
						"IKS avoids considering relationships between environmental factors",
						"IKS focuses exclusively on theoretical explanations of problems",
					],
					c: 0,
				},
				{
					q: "What problem can occur when development institutions fail to reflect the needs of stakeholders equitably?",
					a: [
						"Technologies and resource-management practices can fail",
						"All stakeholders receive identical benefits from the project",
						"Traditional knowledge automatically becomes more widely accepted",
						"Community participation becomes unnecessary for development",
					],
					c: 0,
				},
				{
					q: "Why could focusing only on farmers create problems in water management?",
					a: [
						"Industrial users would always receive too much water by law",
						"Water demand would disappear once agricultural needs were met",
						"Other major water users, such as commerce and industry, may be ignored",
						"Farmers would automatically control every community water source",
					],
					c: 2,
				},
				{
					q: "What question does Tharakan recommend asking before developing an appropriate technology?",
					a: [
						"Can the local community be removed from the process?",
						"Has the problem been tackled before?",
						"Can the technology be patented immediately?",
						"Can outside experts make every decision without consultation?",
					],
					c: 1,
				},
				{
					q: "What equity-related questions should be considered in AT development?",
					a: [
						"Which technology requires the most imported equipment?",
						"Which outside company can maximize its profits?",
						"Who benefits and who bears the costs or burdens?",
						"Which community members can be excluded from decisions?",
					],
					c: 2,
				},
				{
					q: "What does Tharakan argue about outside-community experts?",
					a: [
						"They should automatically replace local knowledge holders",
						"Their involvement should be considered rather than assumed to be necessary",
						"They should be excluded from every technology project",
						"They should always control the development process",
					],
					c: 1,
				},
				{
					q: "How does Tharakan characterize the traditional development model criticized in the conclusion?",
					a: [
						"It often follows a top-down approach centered on modern scientific knowledge",
						"It is primarily based on grassroots community decision-making",
						"It is designed mainly around small-scale community technologies",
						"It always begins with indigenous knowledge and local institutions",
					],
					c: 0,
				},
				{
					q: "What basic problem does Tharakan say remains in many developing communities?",
					a: [
						"Basic needs such as clean water and healthcare remain unmet",
						"Appropriate technologies are already available to every household",
						"Traditional knowledge has completely disappeared from rural areas",
						"All communities have equal access to advanced technologies",
					],
					c: 0,
				},
				{
					q: "What historical figure is connected to the early rationale of the appropriate technology movement?",
					a: [
						"Thomas Edison",
						"Mahatma Gandhi",
						"Alexander Graham Bell",
						"Isaac Newton",
					],
					c: 1,
				},
				{
					q: "Which publication is associated in the paper with the articulation of appropriate technology in the 1970s?",
					a: [
						"Wiener’s Cybernetics",
						"Darwin’s On the Origin of Species",
						"Schumacher’s Small Is Beautiful",
						"Smith’s The Wealth of Nations",
					],
					c: 2,
				},
				{
					q: "What does the paper propose about IKS and MSKS?",
					a: [
						"They can be integrated while recognizing their complementary strengths",
						"MSKS should always replace IKS in development projects",
						"IKS should replace all formal scientific research",
						"They are completely incompatible and must remain separate",
					],
					c: 0,
				},
				{
					q: "How can MSKS contribute to IKS according to the conclusion?",
					a: [
						"MSKS can help validate indigenous knowledge through rigorous study",
						"MSKS should eliminate community participation in technology development",
						"MSKS should prevent indigenous practices from being documented",
						"MSKS should treat all indigenous practices as scientifically invalid",
					],
					c: 0,
				},
			],
			"Young Article": [
				{
					q: "What is the main focus of Young’s article?",
					a: [
						"How digital mapping replaces traditional geographic research",
						"How social media increases economic growth in northern cities",
						"How digital technologies reshape knowledge politics in Indigenous communities",
						"How urban governments regulate broadband infrastructure",
					],
					c: 2,
				},
				{
					q: "Which community is the central case study?",
					a: [
						"A rural community in the American Midwest",
						"An Indigenous community in northern Australia",
						"A First Nations community in southern Ontario",
						"An Inuit community in the Canadian Arctic",
					],
					c: 3,
				},
				{
					q: "What does “knowledge politics” refer to?",
					a: [
						"Processes that shape which forms of knowledge receive visibility and authority",
						"Government policies determining who may attend universities",
						"Technical standards organizing computer networks",
						"Political debates about the cost of digital devices",
					],
					c: 0,
				},
				{
					q: "What is Inuit Qaujimaningit (IQ)?",
					a: [
						"The Inuit knowledge system discussed in the article",
						"A Canadian government telecommunications program",
						"A system for measuring Arctic Internet access",
						"A digital mapping platform used in Nunavut",
					],
					c: 0,
				},
				{
					q: "What can digital engagement do to local Indigenous knowledge systems?",
					a: [
						"It always strengthens traditional knowledge by making it more accessible",
						"It completely eliminates the need for experiential learning",
						"It can erode practices needed to transmit and reproduce local knowledge",
						"It affects only economic activity and not cultural practices",
					],
					c: 2,
				},
				{
					q: "Where does most previous critical ICT research focus?",
					a: [
						"Urban geographies in the Global North",
						"Rural communities throughout the Global South",
						"Traditional knowledge systems in developing countries",
						"Remote Indigenous communities in the Arctic",
					],
					c: 0,
				},
				{
					q: "What assumption about digital participation does Young criticize?",
					a: [
						"That digital participation is automatically beneficial in instrumental ways",
						"That digital technologies can only be used for entertainment",
						"That Indigenous communities generally reject digital technologies",
						"That Internet access has no economic or political benefits",
					],
					c: 0,
				},
				{
					q: "What benefits are often assumed to result from digital participation?",
					a: [
						"Reduced access to services and fewer economic opportunities",
						"Less communication with people outside the community",
						"Economic advances and access to better services and governance",
						"Greater dependence on local oral traditions and hunting",
					],
					c: 2,
				},
				{
					q: "What is less investigated than digital access questions?",
					a: [
						"The knowledge politics that shape and constrain digital engagement",
						"The number of digital devices owned by government agencies",
						"The economic value of computer hardware manufacturers",
						"The technical speed of Internet connections in urban centers",
					],
					c: 0,
				},
				{
					q: "What does Young call for in ICT for development research?",
					a: [
						"Greater attention to local context and postcolonial perspectives",
						"A stronger focus on urban Global North communities",
						"Less attention to Indigenous experiences of technology",
						"Greater reliance on universal technical standards",
					],
					c: 0,
				},
				{
					q: "How does Young describe IQ as a knowledge system?",
					a: [
						"It focuses exclusively on empirical observations of weather",
						"It is seamless, without strict divisions between spiritual, empirical, and sociocultural knowledge",
						"It consists primarily of written information stored in digital archives",
						"It is divided into separate scientific, spiritual, and economic departments",
					],
					c: 1,
				},
				{
					q: "How is the Arctic environment viewed within IQ?",
					a: [
						"As only a collection of physical resources",
						"As unrelated to social and spiritual life",
						"As something understood primarily through digital representations",
						"As a moral agent that can be angered by disrespect",
					],
					c: 3,
				},
				{
					q: "Why are rituals of respect important?",
					a: [
						"They are required by Canadian environmental regulations",
						"They allow digital technologies to function more effectively outdoors",
						"They help ensure material activities such as hunting respect spiritual relationships",
						"They are mainly used to record information for government agencies",
					],
					c: 2,
				},
				{
					q: "Why is Arctic environmental knowledge described as a matter of survival?",
					a: [
						"Modern technologies cannot operate anywhere in the Arctic",
						"Inuit communities have historically had no social systems",
						"The Arctic is one of the least hospitable environments in the world",
						"The Arctic contains no resources that can support human life",
					],
					c: 2,
				},
				{
					q: "How is learning within IQ characterized?",
					a: [
						"As dependent on formal examinations and written certification",
						"As experiential, relational, and deeply contextual",
						"As primarily classroom-based and text-centered",
						"As separated from physical activities and social relationships",
					],
					c: 1,
				},
				{
					q: "Where must knowledge be produced according to IQ’s experiential learning model?",
					a: [
						"Through embodied practices out on the land",
						"Through written reports produced by outside researchers",
						"Only inside schools and community offices",
						"Primarily through online courses and social media",
					],
					c: 0,
				},
				{
					q: "Why is experiential learning important to IQ?",
					a: [
						"It prevents people from learning practical skills from elders",
						"It separates knowledge from material action and the environment",
						"It allows abstract representations to replace direct experience",
						"It helps people interpret and adapt to changing and inhospitable conditions",
					],
					c: 3,
				},
				{
					q: "How does IQ differ from knowledge simply held and recited?",
					a: [
						"It is primarily stored in books rather than practiced in daily life",
						"It involves skills that must be constantly practiced and adapted",
						"It is preserved by avoiding changes in environmental conditions",
						"It depends mainly on memorizing information without applying it",
					],
					c: 1,
				},
				{
					q: "What role does the natural world play in IQ?",
					a: [
						"It is mainly a backdrop for classroom education",
						"It is important only for recreational activities",
						"It is a key site for knowledge transmission and learning",
						"It is avoided because knowledge is learned indoors",
					],
					c: 2,
				},
				{
					q: "Which two Inuktitut terms distinguish forms of learning?",
					a: [
						"Isuma and Igloolik",
						"Qaujimaningit and Nunavut",
						"Inuktitut and Qiniq",
						"Pilimmaksaq- and ilinniaq-",
					],
					c: 3,
				},
				{
					q: "What does pilimmaksaq- describe?",
					a: [
						"Learning through formal written examinations",
						"Learning through receiving classroom instruction",
						"Learning by reading digital materials",
						"Learning by doing through experiential practice",
					],
					c: 3,
				},
				{
					q: "What does ilinniaq- describe?",
					a: [
						"Learning by receiving teaching in a classroom-based model",
						"Learning through social media interaction",
						"Learning through direct work on the land",
						"Learning through family hunting activities",
					],
					c: 0,
				},
				{
					q: "What role do family members and elders play?",
					a: [
						"They mainly teach through online video platforms",
						"They transmit knowledge orally, particularly through stories",
						"They primarily provide formal classroom instruction",
						"They focus on teaching digital technology skills",
					],
					c: 1,
				},
				{
					q: "What happened to outdoor activity among many children in Igloolik?",
					a: [
						"Children increasingly spent free time building traditional boats outdoors",
						"Children spent substantially more time visiting elders outside the community",
						"Many children were observed spending more time indoors using digital devices",
						"Children stopped using the Internet and returned to traditional activities",
					],
					c: 2,
				},
				{
					q: "Why does staying indoors matter for IQ transmission?",
					a: [
						"It reduces participation in embodied and collective practices that teach knowledge",
						"It allows children to experience the land through digital representations",
						"It increases opportunities for children to learn traditional skills directly",
						"It strengthens relationships between youth and elders through online communication",
					],
					c: 0,
				},
				{
					q: "Which activities did participants describe as declining?",
					a: [
						"Attending schools and participating in classroom activities",
						"Watching movies and communicating through digital services",
						"Using computers, smartphones, and online games",
						"Playing with wagons, homemade boats, and street sports",
					],
					c: 3,
				},
				{
					q: "Why are wooden boats and team activities important examples?",
					a: [
						"They are embodied activities that teach practical survival skills",
						"They demonstrate why digital technologies should replace traditional practices",
						"They allow children to avoid interacting with elders",
						"They are recreational activities without a connection to IQ",
					],
					c: 0,
				},
				{
					q: "What effect did participants associate with Internet use on Inuktitut?",
					a: [
						"They believed it made Inuktitut the dominant language of the Web",
						"They believed it could contribute to reduced use of Inuktitut",
						"They found that Internet use had no relationship to language use",
						"They reported that Internet use eliminated English from digital spaces",
					],
					c: 1,
				},
				{
					q: "How did Internet use affect some family and social relationships?",
					a: [
						"It eliminated disagreements within families and communities",
						"Participants reported reduced in-person interaction and more individualized behavior",
						"It made people more likely to spend time together outdoors",
						"It consistently increased visits between families and elders",
					],
					c: 1,
				},
				{
					q: "Why are elders particularly vulnerable to being left out of digital spaces?",
					a: [
						"Some have limited infrastructure access or difficulty navigating the English-dominated Web",
						"Elders are prohibited from using social media by community rules",
						"Elders generally refuse to communicate with younger generations",
						"Elders have no role in Inuit knowledge transmission",
					],
					c: 0,
				},
				{
					q: "Why is reduced interaction between youth and elders significant?",
					a: [
						"Youth depend on elders mainly for learning computer programming",
						"Elders play a central role in transmitting IQ",
						"Elders are the only people who use digital communication in Igloolik",
						"Elders are primarily responsible for maintaining Internet infrastructure",
					],
					c: 1,
				},
				{
					q: "What earlier colonial changes reduced youth-elder interaction?",
					a: [
						"The creation of community social visits and traditional storytelling",
						"The development of Inuit hunting camps and traditional education",
						"The increased use of Inuktitut and land-based experiential learning",
						"Resettlement into larger communities and Western-style education and jobs",
					],
					c: 3,
				},
				{
					q: "How does digital engagement relate to those earlier colonial changes?",
					a: [
						"It can reinforce and amplify them by further reducing youth-elder interaction",
						"It prevents Western-style education from affecting Inuit communities",
						"It has no relationship to previous changes in family and community structure",
						"It completely reverses their effects by restoring traditional knowledge transmission",
					],
					c: 0,
				},
				{
					q: "What online behavior did some participants criticize?",
					a: [
						"Outdoor activities organized through digital groups",
						"Judgmental, critical, gossiping, and antagonistic behavior",
						"Digital preservation of Inuit language and culture",
						"Collaborative storytelling and respectful knowledge sharing",
					],
					c: 1,
				},
				{
					q: "How did some participants describe social media’s effect on community norms?",
					a: [
						"It prevented people from criticizing or teasing one another",
						"It consistently strengthened traditional community norms in every situation",
						"It made online relationships identical to face-to-face relationships",
						"It could allow people to escape community norms and say things they would not say in person",
					],
					c: 3,
				},
				{
					q: "What limitation does Young identify about quantitative evidence?",
					a: [
						"There were no historical records concerning Inuit communities",
						"There were no quantitative longitudinal studies documenting time spent with technology versus socializing or being outside",
						"There were no observations of people using computers or television",
						"There were no interviews with community members about digital technologies",
					],
					c: 1,
				},
				{
					q: "What two aspects of IQ does digital engagement undermine?",
					a: [
						"Government services and Internet infrastructure",
						"Economic development and digital entrepreneurship",
						"Written communication and formal classroom education",
						"Embodied socialization and experiential learning out on the land",
					],
					c: 3,
				},
				{
					q: "Why can digital representations be a poor substitute for IQ?",
					a: [
						"Digital media cannot contain any information about Inuit culture",
						"Digital representations always provide inaccurate information about the Arctic",
						"IQ cannot be fully represented digitally and depends heavily on embodied experience",
						"Inuit communities do not use digital technologies under any circumstances",
					],
					c: 2,
				},
				{
					q: "What can happen when technology accompanies Inuit out on the land?",
					a: [
						"It eliminates the need for knowledge passed down by elders",
						"It always strengthens direct experiential learning and traditional practices",
						"It prevents people from using digital information while hunting",
						"It can replace experiential learning with more instrumental modes of thinking",
					],
					c: 3,
				},
				{
					q: "How can digital engagement relate to Western governance and classroom education?",
					a: [
						"It can reinforce forms that marginalize the role of IQ within Inuit communities",
						"It completely removes Western influences from Inuit knowledge systems",
						"It prevents governance structures from affecting Indigenous knowledge",
						"It makes classroom education identical to experiential learning",
					],
					c: 0,
				},
				{
					q: "What is the broader meaning of “epistemic violence” in the article?",
					a: [
						"Physical violence caused directly by digital devices",
						"The destruction of computer networks through political conflict",
						"Violence between individuals caused only by online arguments",
						"Processes that undermine or marginalize local ways of knowing",
					],
					c: 3,
				},
				{
					q: "Does Young present digital technology as entirely harmful?",
					a: [
						"Yes; he argues that all Internet use should be eliminated",
						"No; he emphasizes that digital engagement can be both empowering and marginalizing",
						"No; he argues that digital technologies have only positive effects",
						"Yes; he argues that digital technology provides no useful benefits",
					],
					c: 1,
				},
				{
					q: "What positive uses of digital technology did participants identify?",
					a: [
						"Digital friendships, entertainment, online bill payment, and cultural projects",
						"Replacing all land-based learning with online education",
						"Eliminating traditional foods and cultural practices",
						"Reducing communication among Inuit communities",
					],
					c: 0,
				},
				{
					q: "How did Zacharias Kunuk describe a positive use of digital technology?",
					a: [
						"Using social media to replace land-based hunting knowledge",
						"Using digital audio and video to support storage of Inuit culture and knowledge",
						"Using technology to eliminate the need for Inuit cultural practices",
						"Using digital platforms to prevent youth from learning Inuktitut",
					],
					c: 1,
				},
				{
					q: "How could mobile games and Inuktitut content support youth?",
					a: [
						"They could help youth remain more connected to their culture",
						"They could make land-based learning unnecessary",
						"They could encourage youth to abandon the Inuit language",
						"They could replace all interactions with elders and families",
					],
					c: 0,
				},
				{
					q: "What is the Nunavut Hunting Stories of the Day Facebook group intended to do?",
					a: [
						"Provide online entertainment unrelated to Inuit hunting practices",
						"Restrict knowledge sharing to government officials",
						"Share hunting stories and knowledge and encourage youth to go out on the land",
						"Replace hunting with virtual games and simulations",
					],
					c: 2,
				},
				{
					q: "How can the hunting stories group contribute to IQ?",
					a: [
						"It can move all hunting knowledge into English-language digital spaces",
						"It can prevent knowledge from being shared between communities",
						"It can facilitate knowledge exchanges and help rejuvenate lost local hunting knowledge",
						"It can eliminate the need for youth to learn directly on the land",
					],
					c: 2,
				},
				{
					q: "What does Young suggest about improved Arctic connectivity?",
					a: [
						"It will have no effect on cultural and knowledge practices",
						"It will always strengthen IQ without creating any risks",
						"It will necessarily eliminate traditional Inuit knowledge",
						"It may support IQ in some ways while marginalizing it in others",
					],
					c: 3,
				},
				{
					q: "What broader research agenda does Young call for?",
					a: [
						"More research focused exclusively on urban communities in the Global North",
						"Less research into the social effects of ICTs",
						"More critical research on digital knowledge politics in Indigenous, rural, and Global South communities",
						"Research limited to measuring Internet infrastructure and access",
					],
					c: 2,
				},
				{
					q: "What central tension does the article identify about digital engagement?",
					a: [
						"Digital technology separates communities completely from global networks",
						"Digital technology always empowers communities while eliminating traditional practices",
						"Digital technology can simultaneously empower communities and marginalize local knowledge",
						"Digital technology always marginalizes communities and provides no benefits",
					],
					c: 2,
				},
				{
					q: "What is the main lesson for ICT4D practitioners?",
					a: [
						"They should assume connectivity benefits every community in the same way",
						"They should anticipate unintended consequences and consider local knowledge politics",
						"They should avoid examining technology’s interaction with local cultural practices",
						"They should focus only on increasing access to digital infrastructure",
					],
					c: 1,
				},
			],
			"Chapter 1 and 4 Review": [
				{
					q: "Which description best matches Volti’s definition of technology?",
					a: [
						"A social institution created primarily to distribute goods and services equally",
						"A scientific method focused on discovering universal laws through controlled experiments",
						"A system based on knowledge, physical objects, and organization for specific goals",
						"A collection of machines designed mainly for entertainment and personal convenience",
					],
					c: 2,
				},
				{
					q: "Which set correctly identifies the principal components of technology in Volti’s definition?",
					a: [
						"Machines, mathematics, experiments, and scientific theories",
						"Objects, inventions, industries, and government institutions",
						"Science, politics, economics, and cultural values",
						"Artifacts, knowledge, technique, and organization",
					],
					c: 3,
				},
				{
					q: "What is one limitation of Volti’s definition of technology?",
					a: [
						"It assumes technologies are created to meet existing needs, although some seek applications",
						"It assumes technology is always controlled by governments rather than individual inventors",
						"It excludes physical artifacts and focuses entirely on knowledge and social relationships",
						"It argues that technological development always produces practical solutions to urgent problems",
					],
					c: 0,
				},
				{
					q: "What do the Greek roots of the word technology indicate about its original meaning?",
					a: [
						"Tekne referred to the art or skill of doing, while logos referred to informed knowledge",
						"Tekne referred to scientific progress, while logos referred to physical machines and tools",
						"Tekne referred to written laws, while logos referred to practical engineering techniques",
						"Tekne referred to social organization, while logos referred to economic production and trade",
					],
					c: 0,
				},
				{
					q: "Why has technology been important to the survival of Homo sapiens?",
					a: [
						"Technology allows humans to avoid all environmental challenges through scientific prediction",
						"Technology makes humans naturally stronger, faster, and more physically capable than other species",
						"Technology compensates for physical limitations through imagination, creativity, and tool use",
						"Technology eliminates the need for social cooperation by allowing individuals to solve problems alone",
					],
					c: 2,
				},
				{
					q: "What does McLuhan’s statement about shaping technologies and being shaped by them emphasize?",
					a: [
						"Technology and social organization have a reciprocal relationship that influences human behaviour",
						"Social organization determines every technological development without technologies affecting society",
						"Technology only changes physical environments and has little influence on social behaviour",
						"Technology develops independently of society and eventually controls all social organization",
					],
					c: 0,
				},
				{
					q: "Why is social organization considered an essential component of technology?",
					a: [
						"Technologies require social relationships to create, maintain, operate, and support them",
						"Social organization replaces artifacts by providing the physical objects needed for technological systems",
						"Social organization provides the scientific theories required to make every technology function",
						"Social organization ensures that every technological invention is used for practical human needs",
					],
					c: 0,
				},
				{
					q: "Which statement best explains why technology is often associated with social progress?",
					a: [
						"Technology always improves social justice and guarantees a more equal distribution of goods",
						"Technology automatically produces moral improvement whenever new inventions are introduced",
						"Technological development is dynamic and cumulative, involving continuous improvement of existing technologies",
						"Technological change is measured more easily than every other form of human cultural development",
					],
					c: 2,
				},
				{
					q: "Why does the text argue that technological progress does not necessarily equal overall social progress?",
					a: [
						"A society can be technologically advanced while remaining deficient in social justice and other areas",
						"Technological development usually prevents societies from developing strong artistic and social relationships",
						"Technological progress is impossible unless a society first achieves complete political and economic equality",
						"A society cannot be considered technologically advanced unless all citizens have identical resources",
					],
					c: 0,
				},
				{
					q: "What does the concept of technology as a metaphor demonstrate?",
					a: [
						"Technological principles can influence how people understand and organize areas of social life",
						"Technological development is mainly a linguistic process rather than a material or organizational one",
						"Technological metaphors are limited to machines and cannot be applied to social institutions",
						"Technologies are primarily symbols that have no practical influence on human behaviour",
					],
					c: 0,
				},
				{
					q: "What does rationality mean in the context of technological development?",
					a: [
						"Problems can only be solved when scientists discover a single universally accepted explanation",
						"Problems can be studied systematically and solutions can be pursued through objective reasoning",
						"Technological decisions should prioritize moral values even when objective analysis is unavailable",
						"Problems should be solved according to tradition without questioning established assumptions",
					],
					c: 1,
				},
				{
					q: "Why does the text caution against assuming that rationality always produces moral superiority?",
					a: [
						"Rational thought prevents technological development by making people reject practical solutions",
						"Rationality requires subjective interpretation, which prevents people from making systematic technological decisions",
						"Rational approaches are useful only for simple problems and cannot be applied to large social issues",
						"Extreme rational thought can contribute to tragic moral transgressions such as those associated with Nazi Germany",
					],
					c: 3,
				},
				{
					q: "What does technological determinism emphasize when explaining social change?",
					a: [
						"Social and cultural factors are given priority, with human agency controlling technological development",
						"Economic and political institutions are considered more important than technological factors in every situation",
						"Technological factors are given priority, with technology viewed as having a life of its own",
						"Technological development is viewed as a deliberate process controlled entirely by individual users",
					],
					c: 2,
				},
				{
					q: "What does social constructivism emphasize when explaining technological change?",
					a: [
						"Technologies are viewed as systems that develop without influence from political or economic conditions",
						"Technological development is treated as an independent force that operates outside social influence",
						"Socio-cultural factors and human agency are given priority in shaping technological development",
						"Scientific discoveries are considered the only major factors responsible for technological development",
					],
					c: 2,
				},
				{
					q: "Why are technological determinism and social constructivism both limited as complete explanations?",
					a: [
						"Human agency controls technology completely, so technological factors have no influence on social change",
						"Technology affects society, but social, economic, political, and cultural factors also influence its development",
						"Technology is completely independent of society, making social explanations unnecessary in technological studies",
						"Technology develops only from scientific discoveries, making both perspectives incomplete for that reason",
					],
					c: 1,
				},
				{
					q: "How does technological alienation arise in a modern technological society?",
					a: [
						"People may rely on technologies they do not understand, leaving them feeling powerless or alienated",
						"People experience alienation because technologies eliminate all opportunities for social organization",
						"People become alienated because modern technologies are unavailable to most members of society",
						"People become technologically alienated only when they reject all forms of scientific knowledge",
					],
					c: 0,
				},
				{
					q: "How does the history of high-speed aircraft illustrate technological change?",
					a: [
						"Aircraft technology developed from a single scientific discovery that immediately produced modern aircraft",
						"Aircraft development occurred independently of social needs and did not involve earlier technological advances",
						"Aircraft technology advanced mainly because engineers followed one fixed solution rather than exploring alternatives",
						"Aircraft development involved cumulative changes as existing technologies were improved and new problems addressed",
					],
					c: 3,
				},
				{
					q: "Why can a technology such as an automobile be understood as more than a physical artifact?",
					a: [
						"Its technological importance comes only from the materials used to manufacture the vehicle",
						"Its use depends on social relationships and organizational structures that support transportation",
						"Its existence eliminates the need for roads, maintenance systems, or other forms of organization",
						"Its operation depends entirely on scientific knowledge and does not involve social relationships",
					],
					c: 1,
				},
				{
					q: "What does the history of the pen demonstrate about technological change?",
					a: [
						"Technological change occurs only when a completely new object replaces every earlier version of a technology",
						"Technological change is unrelated to production methods because only the final artifact matters",
						"Technologies can shift from organic forms toward industrial production as techniques and materials change",
						"Industrial technologies develop without connections to earlier forms, materials, or techniques",
					],
					c: 2,
				},
				{
					q: "Which statement best captures why a technology may appear progressive according to the text?",
					a: [
						"Its progress is guaranteed whenever the technology increases production regardless of social consequences",
						"Its progress is determined only by whether the technology is newer than the technology before it",
						"Its progress can be measured objectively without considering cultural standards or social conditions",
						"Its progress depends on the cultural beliefs and values used to judge what counts as improvement",
					],
					c: 3,
				},
				{
					q: "What does technical feedback refer to in the text?",
					a: [
						"A process in which scientific theories are translated directly into machines without further adjustment",
						"A process in which a technology receives social criticism before being accepted by the public",
						"A method of replacing technological systems whenever users report dissatisfaction with their performance",
						"A process in which information about a system’s performance is used to regulate or adjust that system",
					],
					c: 3,
				},
				{
					q: "How has the feedback principle entered the social realm?",
					a: [
						"Ideas about regulating systems have been incorporated into areas such as stock markets and policy analysis",
						"Feedback entered society primarily by replacing scientific research with political decision-making",
						"Feedback has been limited to mechanical engines and has not influenced social organization",
						"Social feedback refers only to personal opinions and has no connection to technological principles",
					],
					c: 0,
				},
				{
					q: "How does rationality relate to Weber’s idea of disenchantment?",
					a: [
						"Rationality rejects systematic explanation and encourages greater reliance on traditional supernatural explanations",
						"Rational approaches emphasize systematic explanation and contribute to a world increasingly understood through rational processes",
						"Disenchantment refers to the rejection of technology because rationality prevents technological development",
						"Rationality and disenchantment describe unrelated processes that have no connection to modern technological society",
					],
					c: 1,
				},
				{
					q: "What does the ancient history of Greece and Rome demonstrate about science and technology?",
					a: [
						"Greek and Roman technological achievements always depended directly on complete scientific understanding",
						"Rome developed mainly through scientific advances while Greece relied almost entirely on practical engineering",
						"Science and technology could develop with limited connection, with Greece stronger in science and Rome stronger in technology",
						"Science and technology were already fully integrated in the ancient world through common institutions",
					],
					c: 2,
				},
				{
					q: "What did Project Hindsight conclude about pure science and technological development?",
					a: [
						"Pure science had very little to do with the development of the major weapon systems studied",
						"Pure science had no relationship to technological development because technology never uses scientific knowledge",
						"Pure science directly produced nearly all of the major weapon systems examined by the project",
						"Pure science was found to be more important than engineering and practical knowledge in every case",
					],
					c: 0,
				},
				{
					q: "What did TRACES conclude about the relationship between scientific research and technological innovation?",
					a: [
						"Technological innovations were shown to develop only before scientific research could explain them",
						"Scientific research was found to prevent technological development whenever engineers pursued practical solutions",
						"Scientific research was found to have little or no influence on any technological innovation examined",
						"Some innovations, including oral contraceptives and VCRs, were direct results of scientific research",
					],
					c: 3,
				},
				{
					q: "How do science and technology differ in their basic purposes according to the text?",
					a: [
						"Science pursues knowledge for its own sake, while technology is generally a means to an end",
						"Science focuses on social organization, while technology focuses exclusively on discovering explanations for natural phenomena",
						"Science and technology have identical purposes because both are primarily concerned with producing physical artifacts",
						"Science focuses only on practical results, while technology pursues knowledge without concern for applications",
					],
					c: 0,
				},
				{
					q: "What question is typically associated with scientists, compared with technicians?",
					a: [
						"Scientists ask whether something will work, while technicians ask whether an explanation is scientifically true",
						"Scientists ask whether something is true, while technicians ask whether something will work",
						"Scientists ask whether technology is useful, while technicians ask whether society will accept a scientific theory",
						"Scientists ask whether something is profitable, while technicians ask whether something is morally acceptable",
					],
					c: 1,
				},
				{
					q: "Why could iron production continue before scientists understood the principles involved?",
					a: [
						"Iron production was possible only because ancient societies had already developed modern scientific theories of heat",
						"Technology can remain useful even when the scientific explanation for how it works is not yet understood",
						"Scientists had already discovered the relevant principles but chose not to communicate them to technicians",
						"Technological processes always require complete scientific explanations before they can be used successfully",
					],
					c: 1,
				},
				{
					q: "How can technology facilitate scientific discovery?",
					a: [
						"Technological achievements can produce new knowledge and provide instruments that allow scientists to investigate phenomena",
						"Technology facilitates discovery only when scientists directly control the design and production of every instrument",
						"Technology mainly prevents scientific discovery by replacing experiments with practical engineering solutions",
						"Technological development contributes to science only after all relevant scientific theories have already been established",
					],
					c: 0,
				},
				{
					q: "How did the steam injector contribute to scientific thinking about heat?",
					a: [
						"Its primary contribution was to prove that technology and science were completely separate forms of human activity",
						"Its development contributed to scientific knowledge and helped stimulate the development of a theory of heat",
						"It prevented further scientific study of heat by providing a practical solution without generating new knowledge",
						"It demonstrated that scientific theories always have to come before technological inventions can be developed",
					],
					c: 1,
				},
				{
					q: "Why can technology sometimes reach a plateau because of science?",
					a: [
						"Technology reaches a plateau whenever scientists successfully explain a process that engineers have already mastered",
						"Technology always stops developing when scientists disagree about the moral value of a particular invention",
						"Technological plateaus occur because scientific research prevents engineers from considering more than one possible solution",
						"Technological development may become limited when available scientific knowledge cannot explain or overcome a problem",
					],
					c: 3,
				},
				{
					q: "How does technology help legitimize scientific research?",
					a: [
						"Technology provides devices and instruments for scientific inquiry and can demonstrate practical value from research",
						"Technology supports science mainly by eliminating the need for theoretical explanations of natural phenomena",
						"Technology legitimizes science only when scientific discoveries immediately produce commercially successful consumer products",
						"Technology replaces scientific research by allowing engineers to discover all necessary knowledge through practical work",
					],
					c: 0,
				},
				{
					q: "How is scientific knowledge commonly translated into technology?",
					a: [
						"Scientific knowledge becomes technology only when governments formally approve the scientific theory involved",
						"A great deal of scientific knowledge is translated through the education and work of engineers",
						"Scientific knowledge is translated mainly through social organizations rather than through engineers and technical practice",
						"Scientific knowledge is translated directly into technology without requiring engineering education or practical development",
					],
					c: 1,
				},
				{
					q: "Why can science sometimes stifle technological development according to the text?",
					a: [
						"Scientific research eliminates technological experimentation because engineers must always accept the first scientific explanation",
						"Science always rejects practical applications, preventing engineers from using scientific knowledge in technological development",
						"Science stifles technology mainly because scientists refuse to use instruments developed through technological innovation",
						"Science may prefer a single answer, while technological development often proceeds from the idea that several solutions are possible",
					],
					c: 3,
				},
				{
					q: "Which characteristic is shared by both science and technology?",
					a: [
						"Both are independent of social influences and develop through fixed methods that prevent unexpected outcomes",
						"Both gather knowledge, develop cumulatively, use rational thought, and benefit from serendipity",
						"Both require complete scientific understanding before development can proceed and both avoid cumulative change",
						"Both focus exclusively on practical results and reject values, interpretation, and unexpected discoveries",
					],
					c: 1,
				},
				{
					q: "Why is the relationship between science and technology described as non-linear?",
					a: [
						"Scientific and technological development occur separately, meaning neither can influence the other in a meaningful way",
						"Science always produces technological applications directly, although some applications may take longer to become commercial",
						"Technology always develops first and science simply explains the principles after technological problems have been solved",
						"Scientific research can lead to technology, technology can stimulate science, and developments do not always follow one direction",
					],
					c: 3,
				},
				{
					q: "What does the story of Johannes Kepler and the beer or wine kegs illustrate?",
					a: [
						"Scientists and technicians always approach the same problem using identical methods and identical standards of success",
						"Scientific discovery depends entirely on technological invention, while technological development does not require measurement or observation",
						"Scientific questions and technological problems can have different goals, even when both involve careful observation and measurement",
						"Technological work is mainly theoretical, while scientific work is primarily concerned with finding practical applications",
					],
					c: 2,
				},
				{
					q: "Why might the early laser be considered an invention looking for an application?",
					a: [
						"The laser illustrates how technologies always create immediate social benefits once their scientific principles are understood",
						"The laser was created only after scientists identified one urgent practical problem that required a specific technological solution",
						"The laser demonstrates that all inventions are designed to satisfy existing needs before any technical development begins",
						"The technology existed before a clear practical use had been established, illustrating technology in search of a problem",
					],
					c: 3,
				},
				{
					q: "How did aerodynamics research in the 1930s affect aircraft development?",
					a: [
						"Research created an impetus for major changes in aircraft power plants as existing approaches became inadequate",
						"Research demonstrated that aircraft power plants could remain unchanged because aerodynamic improvements solved every technical problem",
						"Research showed that aircraft development depended only on scientific theory rather than practical engineering and technological experimentation",
						"Aerodynamics research mainly reduced the need for technological development by proving that existing aircraft designs were sufficient",
					],
					c: 0,
				},
				{
					q: "Why is techno-science an appropriate term under some conditions?",
					a: [
						"Science and technology become completely independent, making it easier to identify which activities belong exclusively to each field",
						"Techno-science describes situations where technology replaces scientific inquiry and eliminates the need for scientific knowledge",
						"Techno-science refers only to scientific research that produces physical artifacts without involving engineering or technological practices",
						"Science and technology become so closely integrated that the distinction between scientific inquiry and technological development becomes blurred",
					],
					c: 3,
				},
				{
					q: "Why might excessive emphasis on science and mathematics be problematic in engineering education?",
					a: [
						"It ensures that engineers become unable to understand scientific principles and therefore cannot apply any technical knowledge",
						"It may impede technological advance by giving insufficient attention to the multiple practical solutions possible in technology",
						"It guarantees that engineers focus too heavily on social relationships rather than developing practical technological solutions",
						"It prevents engineers from using rational thought because mathematical approaches are considered incompatible with technological development",
					],
					c: 1,
				},
				{
					q: "Who was John Ambrose Fleming in relation to early radio technology?",
					a: [
						"He was involved in advancing early radio technology through his work with technological developments in the field",
						"He was a Roman engineer whose aqueduct designs became the foundation for modern radio communication systems",
						"He was a Greek scientist whose research established the first complete scientific theory of radio technology",
						"He was an engineer who rejected scientific research and argued that radio could develop without technological experimentation",
					],
					c: 0,
				},
				{
					q: "What does the history of science and technology suggest about the idea that technology is simply applied science?",
					a: [
						"Science and technology have historically been identical activities, with differences appearing only in modern industrial societies",
						"Technology has often developed without complete scientific understanding, while technology has also stimulated scientific knowledge",
						"Technology is always a direct application of scientific theories, although practical development may occur at different speeds",
						"Technology depends entirely on prior scientific discovery, while scientific development is never influenced by technological achievements",
					],
					c: 1,
				},
			],
			"Chapter 2 and 10 Review": [
				{
					q: "What does Volti mean when he describes technology as a subversive force?",
					a: [
						"Technology primarily creates political institutions without significantly changing economic relationships",
						"Technology is considered subversive only when governments deliberately restrict its development",
						"Technology usually preserves existing social arrangements while producing only minor economic benefits",
						"Technology can deliver benefits while disrupting existing economic and social arrangements",
					],
					c: 3,
				},
				{
					q: "Which sequence best illustrates older technologies being displaced by newer technologies?",
					a: [
						"Telegraph, Pony Express, telephone",
						"Pony Express, telegraph, telephone",
						"Pony Express, telephone, telegraph",
						"Telephone, Pony Express, telegraph",
					],
					c: 1,
				},
				{
					q: "How did smartphones contribute to the disruption caused by Uber and other ride-sharing services?",
					a: [
						"Smartphones allowed ride-sharing companies to avoid the need for contractors and employment arrangements",
						"Smartphones replaced transportation companies by directly providing vehicles to every passenger",
						"Smartphone technology helped make ride-sharing services rapidly accessible and widely usable",
						"Smartphones eliminated conflicts between ride-sharing companies and established transportation businesses",
					],
					c: 2,
				},
				{
					q: "What social disruption was associated with the rise of Uber?",
					a: [
						"It created conflict with established transportation companies and contributed to precarious contractor employment",
						"It caused transportation companies to become government agencies with standardized employment benefits",
						"It reduced the use of smartphones while increasing employment security for traditional transportation workers",
						"It eliminated competition between transportation companies and created more secure employment for drivers",
					],
					c: 0,
				},
				{
					q: "How did Caliente, Nevada, exemplify “death by dieselization”?",
					a: [
						"Its economy depended on diesel-electric locomotives, which were replaced by steam locomotives and caused rapid growth",
						"Its economy depended on steam locomotives, and the introduction of diesel-electric locomotives caused the town to decline",
						"Its economy depended on automobiles, and the Interstate highway system caused the town to become a major city",
						"Its economy depended on telecommunications, and telephone technology caused its transportation industry to disappear",
					],
					c: 1,
				},
				{
					q: "Who were the Luddites and what motivated their actions?",
					a: [
						"Workers who feared unemployment and smashed machines associated with the loss of skilled employment",
						"Factory owners who destroyed machines because technological change prevented them from increasing production",
						"Engineers who protested against technology because scientific knowledge was replacing traditional manufacturing methods",
						"Government officials who opposed new machinery because they believed technology was inherently irrational",
					],
					c: 0,
				},
				{
					q: "Why did the Luddites specifically target machinery?",
					a: [
						"Machinery had caused food prices to fall so sharply that workers could no longer earn enough money to survive",
						"Machinery prevented employers from producing enough goods and therefore reduced the need for skilled workers",
						"Machinery was considered inherently dangerous by workers who opposed all forms of technological development",
						"Machinery became a target of frustration because wider frames allowed cheaper, less-skilled labour to replace workers",
					],
					c: 3,
				},
				{
					q: "Why did Luddite outbreaks eventually cease by the middle of the nineteenth century?",
					a: [
						"Governments required all workers to accept technological change without organizing or protesting against employers",
						"Factory owners completely abandoned machines and returned to older forms of skilled labour",
						"Workers became convinced that technological change would never affect their employment or working conditions",
						"Worker protests eventually took more peaceful forms, including the formation of unions",
					],
					c: 3,
				},
				{
					q: "Why does technology not succeed or fail solely on its intrinsic merit?",
					a: [
						"Technologies succeed only when scientists have completely explained their underlying scientific principles",
						"Technological success depends primarily on whether individual users understand how the technology works",
						"Social, political, and economic factors influence whether particular technologies succeed or fail",
						"Technologies fail whenever they are expensive because governments and corporations refuse to support costly systems",
					],
					c: 2,
				},
				{
					q: "Why can powerful groups have a major influence over technological development?",
					a: [
						"Powerful groups influence technology only by preventing scientists from conducting research into new technological systems",
						"Expensive technologies are often controlled or sponsored by corporations and governments with particular interests",
						"Corporations and governments have little influence because technological success depends entirely on intrinsic technical merit",
						"Expensive technologies are usually controlled by individual consumers who determine their development independently",
					],
					c: 1,
				},
				{
					q: "What is meant by a technological fix?",
					a: [
						"The replacement of an old technology with a newer one that performs the same technical function",
						"The use of scientific research to identify a single correct solution to every social problem",
						"The application of a technical solution to a problem that is fundamentally non-technical",
						"The development of a technological system that prevents new social problems from emerging",
					],
					c: 2,
				},
				{
					q: "Why are technological fixes limited when applied to social problems?",
					a: [
						"They may address symptoms while leaving the underlying social factors and causes unchanged",
						"They are ineffective because social problems are always caused by a lack of technological development",
						"They solve underlying causes too quickly, creating new technological systems before society can adapt",
						"They usually fail because technological systems cannot operate in closed environments or controlled conditions",
					],
					c: 0,
				},
				{
					q: "Why are social problems different from technological problems?",
					a: [
						"Social problems have multiple and complex causes, while technological problems are usually clearer and less ambiguous",
						"Social problems are usually solved through technical procedures, while technological problems depend mainly on cultural beliefs",
						"Social problems can be solved through closed systems, while technological problems require political negotiations and social conflict",
						"Social problems usually have one clear technical cause, while technological problems involve many conflicting social causes",
					],
					c: 0,
				},
				{
					q: "What is a closed system in the context of technological fixes?",
					a: [
						"A technological system that is controlled entirely by governments and cannot be used by private organizations",
						"A system where all technological developments are prevented because the possible consequences cannot be predicted",
						"A situation where technological solutions can operate within controlled boundaries, unlike complex social problems",
						"A social system in which political conflicts are removed before technology is introduced to solve a problem",
					],
					c: 2,
				},
				{
					q: "Why can technological fixes create “residue” problems?",
					a: [
						"Technological solutions always eliminate the original problem but require expensive machines to maintain the solution",
						"Technological fixes fail because they cannot produce measurable results when applied to non-technical problems",
						"Solving one part of a problem technically may leave other social factors unresolved or create additional problems",
						"Technological systems operate only in closed environments and therefore cannot affect social relationships outside them",
					],
					c: 2,
				},
				{
					q: "What is technocracy?",
					a: [
						"A political system in which workers collectively control technological development through unions and local organizations",
						"A system in which corporations are prevented from influencing technological development or public policy",
						"An approach that attempts to manage social problems through technical expertise and technological solutions",
						"A form of government that rejects technical expertise and relies primarily on traditional political decision-making",
					],
					c: 2,
				},
				{
					q: "Why can technocracy appear appealing in theory?",
					a: [
						"Technical government eliminates all disagreements because social problems can always be reduced to simple technological questions",
						"Technical expertise suggests that complex problems can be managed through rational procedures and specialized knowledge",
						"Technocracy allows political decisions to be avoided because technology automatically determines the best possible outcome",
						"Technocracy guarantees that every social decision will benefit all groups equally without involving power or conflict",
					],
					c: 1,
				},
				{
					q: "Why does technocracy fail to work as completely as its advocates might expect?",
					a: [
						"Social problems are always too simple for technical expertise, so political decision-making becomes unnecessary",
						"Technical procedures are incapable of producing efficient results because technology cannot be used to solve any social problem",
						"Technocracy fails because scientific management gives workers too much autonomy over workplace decisions",
						"Social decisions involve power, conflict, and distribution of rewards that cannot simply be replaced by technical procedures",
					],
					c: 3,
				},
				{
					q: "What was the basic approach of Frederick W. Taylor’s Scientific Management?",
					a: [
						"Managers avoided measuring work processes because workers were considered the best judges of production efficiency",
						"Workers were given complete control over production methods so they could develop their own techniques and procedures",
						"Scientific Management focused primarily on improving social relationships rather than measuring repetitive workplace tasks",
						"Time and motion studies were used to determine how many motions workers should use to complete jobs",
					],
					c: 3,
				},
				{
					q: "Who was expected to benefit from Scientific Management?",
					a: [
						"Workers gained complete autonomy while managers lost responsibility for setting production procedures and standards",
						"Workers could avoid wasted time and earn more through piecework, while managers gained higher yields",
						"Workers and managers benefited equally because Scientific Management eliminated the need for managerial authority",
						"Managers received higher wages while workers were protected from all forms of workplace measurement and supervision",
					],
					c: 1,
				},
				{
					q: "Why did workers oppose Scientific Management?",
					a: [
						"They opposed higher production because it prevented factories from introducing any new technological machinery",
						"They resented losing the limited autonomy they had over how their work was performed",
						"They rejected piecework because it guaranteed higher earnings and gave workers greater control over production decisions",
						"They opposed time and motion studies because managers refused to use any procedures to measure workplace efficiency",
					],
					c: 1,
				},
				{
					q: "Why did managers also have concerns about Scientific Management?",
					a: [
						"They were concerned that workers would no longer receive piecework payments and would instead receive higher fixed wages",
						"They feared that their own decisions would become governed by scientific procedures and strict rules",
						"They believed scientific procedures would give workers complete control over production and eliminate management positions",
						"They opposed Scientific Management because it reduced workplace efficiency and prevented managers from increasing yields",
					],
					c: 1,
				},
				{
					q: "Why was Scientific Management limited to certain workplaces?",
					a: [
						"It was effective only when workers had complete autonomy over production decisions and workplace procedures",
						"It worked mainly in workplaces characterized by repetitive labour processes",
						"It depended on workplaces where managers avoided measuring the number of motions required for individual jobs",
						"It worked primarily in workplaces where employees performed highly creative and unpredictable tasks",
					],
					c: 1,
				},
				{
					q: "What is the basic fallacy of Scientific Management identified in the text?",
					a: [
						"It assumes that social problems can never be influenced by technical procedures or organizational decisions",
						"It assumes technological development is completely independent of political and economic factors affecting workplaces",
						"It assumes workers should make every workplace decision without any involvement from managers or technical experts",
						"It assumes administration and precise procedures can replace politics involving power, conflict, and social rewards",
					],
					c: 3,
				},
				{
					q: "What is meant by the “genetic fix”?",
					a: [
						"Using genetic testing only to identify individuals who are likely to develop inherited physical characteristics",
						"Using gene screening and manipulation to diagnose, cure, or prevent physiological and psychological disorders",
						"Using DNA evidence to identify individuals in criminal investigations while protecting their genetic information",
						"Using genetic technology primarily to increase agricultural production and reduce the cost of food cultivation",
					],
					c: 1,
				},
				{
					q: "What is DNA according to the description of the human genome?",
					a: [
						"A collection of chromosomes that contains only the genetic information associated with inherited diseases",
						"Long chains of genetic material containing instructions for building proteins and forming the basis of life",
						"A scientific instrument used to identify genetic abnormalities during prenatal and postnatal screening",
						"A technological process used to separate and isolate genetic material for medical treatment",
					],
					c: 1,
				},
				{
					q: "How did technological development contribute to the evolution of genetic science?",
					a: [
						"Genetic science advanced primarily through agricultural technologies rather than instruments used to observe and analyze genetic material",
						"Genetic science developed independently of technological tools because researchers could study genes without specialized equipment",
						"Technological advances slowed genetic research by making the study of DNA more dependent on theoretical scientific explanations",
						"Tools such as electron microscopes, automatic sequencers, mapping machines, and computers facilitated genetic research",
					],
					c: 3,
				},
				{
					q: "What was a major goal of the Human Genome Project?",
					a: [
						"To identify and sequence the human genome through an international scientific effort",
						"To establish a worldwide patent system that would give researchers exclusive ownership of human genes",
						"To develop a centralized DNA database containing genetic information from every individual in participating countries",
						"To create genetically modified humans by directly changing the genes associated with inherited disorders",
					],
					c: 0,
				},
				{
					q: "Why are patents on living organisms controversial?",
					a: [
						"Patents prevent any commercial development of genetic technologies and therefore eliminate incentives for research",
						"Patents are controversial because genetic technologies cannot be used for medical or agricultural applications once patented",
						"Patents give governments permanent ownership of all genetic technologies rather than granting rights for a specified period",
						"Patents grant exclusive rights and can create monopolies over genetic ideas, organisms, or processes",
					],
					c: 3,
				},
				{
					q: "What is one argument in favour of patents in genetic technology?",
					a: [
						"Patents ensure that genetic discoveries remain unavailable to commercial organizations and private researchers",
						"Patents can provide incentives for research and innovation through commercialization and licensing fees",
						"Patents guarantee that genetic technologies will be distributed equally regardless of research and development costs",
						"Patents prevent genetic research from producing new commercial enterprises by restricting licensing opportunities",
					],
					c: 1,
				},
				{
					q: "What is a major benefit associated with genetically modified crops?",
					a: [
						"GM crops eliminate the need for pesticides, herbicides, irrigation, and other agricultural inputs in every environment",
						"GM crops always produce greater yields than conventional seeds and completely eliminate agricultural costs",
						"Some GM crops can have improved nutritional value, drought resistance, or lower cultivation costs",
						"GM crops guarantee that low-income countries can produce food without purchasing seeds or using agricultural technologies",
					],
					c: 2,
				},
				{
					q: "Why are genetically modified crops controversial?",
					a: [
						"Concerns include health effects, environmental impacts, cross-pollination, biodiversity loss, and long-term consequences",
						"The main concern is that GM crops cannot be produced quickly enough to affect food production or agricultural practices",
						"GM crops are controversial primarily because conventional selective breeding has always produced identical risks and outcomes",
						"The controversy exists because GM crops are incapable of improving nutritional value or resistance to drought and pests",
					],
					c: 0,
				},
				{
					q: "Why might GM crops not completely solve food security problems in low-income countries?",
					a: [
						"Food insecurity can involve inequality, war, unfair trade practices, and the high cost of GM seeds",
						"Food security problems are unrelated to social and political factors because agricultural technology determines food distribution by itself",
						"Food insecurity is caused only by insufficient crop yields, so GM crops are always an appropriate technical solution",
						"GM crops cannot be cultivated in low-income countries because bio-engineering requires industrialized farming systems everywhere",
					],
					c: 0,
				},
				{
					q: "How do genetically modified crops illustrate limitations of technological fixes?",
					a: [
						"A technological crop solution automatically eliminates inequality, war, and unfair trade practices affecting food security",
						"GM crops demonstrate that social problems can always be solved once a sufficiently advanced biological technology is developed",
						"GM crops solve food security problems only when governments prevent farmers from using conventional seeds and agricultural methods",
						"A technical agricultural solution may not address broader social and political causes of problems such as malnutrition",
					],
					c: 3,
				},
				{
					q: "Why can adult genetic screening be controversial when it has no curative intent?",
					a: [
						"Genetic screening is controversial because adults cannot provide informed consent for medical genetic testing",
						"Adult screening is controversial because genetic information cannot be used for any form of patient care or medical decision-making",
						"Genetic information could potentially be used by organizations such as insurers in ways that raise privacy and fairness concerns",
						"Genetic screening is controversial only because it prevents doctors from identifying inherited disorders before symptoms appear",
					],
					c: 2,
				},
				{
					q: "What individual-rights concerns are associated with DNA testing in criminal investigations?",
					a: [
						"DNA testing raises concerns mainly because criminal investigations cannot use scientific evidence to identify individuals accurately",
						"Centralized DNA databases and mandatory collection can raise privacy and unreasonable search and seizure concerns",
						"DNA testing eliminates civil-liberty concerns because genetic evidence can only be collected with voluntary participation",
						"Centralized DNA databases are considered uncontroversial because genetic information has no relationship to individual privacy",
					],
					c: 1,
				},
				{
					q: "Why can prenatal genetic screening raise ethical concerns?",
					a: [
						"It may identify potential abnormalities and contribute to the devaluation of individuals with genetic defects",
						"It guarantees that all genetic disorders can be cured before birth, eliminating the need for further medical treatment",
						"It prevents parents from learning about potential genetic abnormalities because screening cannot provide useful information before birth",
						"It is controversial mainly because prenatal screening cannot detect any potential genetic abnormalities in developing fetuses",
					],
					c: 0,
				},
				{
					q: "What is a clone, and which first mammal is identified as having been successfully cloned?",
					a: [
						"A genetically modified organism; a human was successfully cloned before Dolly the sheep in the early 1990s",
						"A genetically identical embryo; a cow was successfully cloned in Scotland before researchers cloned Dolly",
						"A genetically screened individual; frogs were the first mammals successfully cloned during the 1950s",
						"A genetic duplicate; Dolly the sheep was successfully cloned in Scotland in 1996",
					],
					c: 3,
				},
				{
					q: "Why is human cloning controversial according to the text?",
					a: [
						"It is controversial because cloning has never been demonstrated successfully in any higher organism",
						"It raises concerns primarily because cloning would eliminate all genetic differences between humans within a single generation",
						"It raises questions about genetic diversity, corporate control, cloning for reproduction, and possible new eugenics",
						"It is controversial only because cloned organisms cannot survive outside laboratory conditions or reproduce naturally",
					],
					c: 2,
				},
				{
					q: "What are stem cells, and what important property do embryonic stem cells have?",
					a: [
						"They are mature cells that can only reproduce their original tissue type and cannot develop into other cell types",
						"They are DNA fragments that can be inserted into embryos to prevent all inherited disorders from developing",
						"They are genetically modified cells used exclusively for treating leukemia and cannot have other medical applications",
						"They are early cells with pluripotency, meaning they can develop into many different cell types in the body",
					],
					c: 3,
				},
				{
					q: "Why has the extraction of embryonic stem cells been controversial?",
					a: [
						"It is controversial because stem cells cannot develop into different cell types or contribute to medical treatment",
						"It is controversial because researchers have never demonstrated any potential medical applications for embryonic stem cells",
						"It raises concerns mainly because stem cells can only be obtained from adults who have already developed genetic disorders",
						"It involves embryos and raises the ethical question of when life begins",
					],
					c: 3,
				},
				{
					q: "What was the primary objective of the eugenics movement?",
					a: [
						"To use genetic screening primarily for agricultural purposes and the development of improved food crops",
						"To attempt to perfect humanity by reinforcing desirable traits and suppressing undesirable ones",
						"To prevent genetic research by arguing that inherited characteristics should never be studied or scientifically manipulated",
						"To improve human health by ensuring that all genetic traits were preserved equally across generations",
					],
					c: 1,
				},
				{
					q: "How can modern genetic intervention relate to eugenics?",
					a: [
						"Genetic technologies could be used to select or reinforce preferred human traits, raising concerns about a renewed eugenics",
						"Genetic technologies eliminate all concerns about eugenics because modern research focuses only on treating existing diseases",
						"Genetic intervention prevents eugenics by ensuring that all genetic traits are treated as equally desirable and undesirable",
						"Genetic intervention is unrelated to eugenics because modern genetic technologies cannot influence inherited characteristics",
					],
					c: 0,
				},
				{
					q: "Why is it incorrect to treat genetic defects as the sole source of many health problems?",
					a: [
						"Genetic defects are the only cause of health problems, although technological interventions cannot yet correct them completely",
						"Genetic defects are never involved in disease because environmental conditions completely determine health outcomes",
						"All diseases are genetically caused, but genetic screening cannot identify the genes responsible for most health conditions",
						"Environmental factors can affect genetic conditions, not all diseases are genetically caused, and some problem genes remain unidentified",
					],
					c: 3,
				},
				{
					q: "What does the phrase “volitional evolution” raise according to the text?",
					a: [
						"It raises the question of whether deliberately directing human evolution is essentially another form of eugenics",
						"It describes the natural process through which environmental factors automatically determine which human genes survive",
						"It means that genetic disorders can always be eliminated through voluntary medical screening and treatment",
						"It refers to the use of agricultural biotechnology to increase the genetic diversity of crops and livestock",
					],
					c: 0,
				},
			],
		},
		textbook: [
			// =========================
			// CHAPTER 1: THE NATURE OF TECHNOLOGY
			// =========================

			{
				q: "What does the textbook identify as the ultimate basis of technology?",
				a: [
					"Knowledge in the social context when applied to technology",
					"Hardware in the social context when applied to technology",
					"Energy in the social context when applied to technology",
					"Money in the social context when applied to technology",
				],
				c: 0,
			},
			{
				q: "Which two elements are identified as the first components of technology?",
				a: [
					"Tools and techniques within technological systems when applied to technology",
					"Science and politics within technological systems when applied to technology",
					"Machines and factories within technological systems when applied to technology",
					"Energy and information within technological systems when applied to technology",
				],
				c: 0,
			},
			{
				q: "Why is organization included in the textbook's definition of technology?",
				a: [
					"Technology requires coordinated human and material inputs",
					"Organization is another word for a machine",
					"Only governments can create technology in the social context",
					"Organizations replace tools and techniques in the social context",
				],
				c: 0,
			},
			{
				q: "What does 'presentism' mean when thinking about technology?",
				a: [
					"Using contemporary technology as the benchmark for judging technologies of the past",
					"Believing all technology is harmful in the social context",
					"Predicting future technological change in technological development",
					"Treating technology as purely scientific in the social context",
				],
				c: 0,
			},
			{
				q: "What distinction does the textbook make between technological advance and progress?",
				a: [
					"Technological advance does not necessarily make things better for everyone",
					"They are exactly the same concept in this broader context",
					"Progress refers only to older technologies in this broader context",
					"Technological advance always produces social improvement in this broader context",
				],
				c: 0,
			},
			{
				q: "What is technological determinism primarily concerned with?",
				a: [
					"The idea that technology can strongly shape social change",
					"The idea that society never affects technology",
					"The rejection of technological change in the social context",
					"The use of technology only in factories",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 2: WINNERS AND LOSERS
			// =========================

			{
				q: "Why can technological change produce both winners and losers?",
				a: [
					"Its effects can benefit some groups while disadvantaging others",
					"All technologies distribute benefits equally in the social context",
					"Technology affects only consumers in technological development",
					"Technological change has no economic effects in this broader context",
				],
				c: 0,
			},
			{
				q: "Who were the Luddites?",
				a: [
					"English workers who opposed aspects of industrial technological change",
					"Scientists who promoted computers in technological development",
					"Engineers who designed steam engines in the social context",
					"Farmers who introduced irrigation in technological development",
				],
				c: 0,
			},
			{
				q: "What was a major concern behind Luddite resistance?",
				a: [
					"New machinery threatened established work and livelihoods",
					"Machines were too expensive for governments in this broader context",
					"Science was replacing religion in technological development",
					"Factories could not produce enough goods in this broader context",
				],
				c: 0,
			},
			{
				q: "What does neo-Luddism generally involve?",
				a: [
					"Contemporary criticism or resistance to technologies seen as socially harmful",
					"A movement to increase factory automation in this broader context",
					"A method for developing software in the social context",
					"A theory that all technology is ancient",
				],
				c: 0,
			},
			{
				q: "What question is raised by the chapter's discussion of 'Whose Technology?'?",
				a: [
					"Who controls technology and who benefits from it",
					"Who invented the first computer in the social context",
					"Who owns all scientific knowledge in the social context",
					"Who operates every machine in technological development",
				],
				c: 0,
			},
			{
				q: "What limitation of technology does the chapter emphasize?",
				a: [
					"Technology cannot by itself determine the social outcomes of its use",
					"Technology can solve every social problem in this broader context",
					"Technology always creates equal benefits in the social context",
					"Technology eliminates political choices in technological development",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 3: SOURCES OF TECHNOLOGICAL CHANGE
			// =========================

			{
				q: "How does the textbook characterize technological change?",
				a: [
					"As a social process involving many actors and conditions",
					"As an entirely individual process in the social context",
					"As a process controlled only by scientists",
					"As an automatic result of economic growth",
				],
				c: 0,
			},
			{
				q: "What does the 'D' in R&D stand for?",
				a: [
					"Development in the social context when applied to technology",
					"Diffusion in the social context when applied to technology",
					"Demand in the social context when applied to technology",
					"Design in the social context when applied to technology",
				],
				c: 0,
			},
			{
				q: "What is a reverse salient in technological development?",
				a: [
					"A bottleneck or lagging component that holds back a larger system",
					"The most advanced part of a system",
					"A failed market survey in technological development",
					"A type of patent in technological development",
				],
				c: 0,
			},
			{
				q: "What is meant by the 'technology push' model?",
				a: [
					"New technological possibilities help drive innovation and adoption",
					"Consumers always create inventions first in the social context",
					"Governments prohibit new products in technological development",
					"Demand is irrelevant to innovation in the social context",
				],
				c: 0,
			},
			{
				q: "What is meant by the 'market pull' model?",
				a: [
					"Demand for products or services helps stimulate technological innovation",
					"Technology develops without users in technological development",
					"Markets prevent technological change in technological development",
					"Only military organizations drive innovation in the social context",
				],
				c: 0,
			},
			{
				q: "Why can market timing matter for a new technology?",
				a: [
					"A technology may arrive before users or markets are ready to adopt it",
					"All technologies are immediately profitable in the social context",
					"Markets never influence adoption in technological development",
					"Timing matters only for military weapons in this broader context",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 4: SCIENTIFIC KNOWLEDGE AND TECHNOLOGICAL ADVANCE
			// =========================

			{
				q: "How does the textbook distinguish science from technology?",
				a: [
					"Science seeks knowledge about the natural world, while technology applies knowledge to practical purposes",
					"Science and technology are identical in the social context",
					"Technology studies only nature while science builds machines",
					"Science is always newer than technology in this broader context",
				],
				c: 0,
			},
			{
				q: "What historical relationship between science and technology does the chapter emphasize?",
				a: [
					"They were often separated institutionally and developed somewhat independently",
					"They have always been one profession in this broader context",
					"Technology did not exist before modern science",
					"Science always directly preceded every technology in this broader context",
				],
				c: 0,
			},
			{
				q: "How can technology facilitate scientific discovery?",
				a: [
					"New instruments and techniques can make previously inaccessible observations possible",
					"Technology prevents scientists from collecting data in this broader context",
					"Technology replaces scientific theories in technological development",
					"Technology makes experimentation unnecessary in technological development",
				],
				c: 0,
			},
			{
				q: "How can successful technology help legitimate science?",
				a: [
					"Practical technological achievements can demonstrate the usefulness of scientific knowledge",
					"Technology proves every scientific claim in the social context",
					"Technology eliminates scientific uncertainty in technological development",
					"Technology makes science independent of evidence in this broader context",
				],
				c: 0,
			},
			{
				q: "What does translating science into technology involve?",
				a: [
					"Turning scientific knowledge into workable techniques, devices, or processes",
					"Replacing experiments with opinions in technological development",
					"Converting all science into mathematics in the social context",
					"Removing social considerations from design in the social context",
				],
				c: 0,
			},
			{
				q: "What do science and technology have in common?",
				a: [
					"Both depend on systematic knowledge, skills, and organized practices",
					"Neither requires specialized knowledge in technological development",
					"Both are entirely independent of society in this broader context",
					"Both have identical goals in every situation",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 5: CULTURAL DIFFUSION AND NON-DIFFUSION
			// =========================

			{
				q: "What does technological diffusion refer to?",
				a: [
					"The spread of a technology from one setting or society to another",
					"The destruction of obsolete technology in the social context",
					"The invention of a new machine in this broader context",
					"The patenting of every technology in the social context",
				],
				c: 0,
			},
			{
				q: "Why are 'clever copyists' important to technological change?",
				a: [
					"People and societies can learn from and adapt technologies developed elsewhere",
					"Copying prevents all innovation in technological development",
					"Only inventors can use technology in the social context",
					"Copying is always illegal in technological development",
				],
				c: 0,
			},
			{
				q: "What is the difference between adaptation and adoption?",
				a: [
					"Adoption involves accepting a technology, while adaptation involves modifying it to fit circumstances",
					"They are identical terms in technological development",
					"Adaptation means rejecting technology in technological development",
					"Adoption always requires invention in technological development",
				],
				c: 0,
			},
			{
				q: "What does the example of learning to make steel in old Japan illustrate?",
				a: [
					"Technology can be learned, adapted, and developed within a different cultural setting",
					"Japan rejected all foreign technologies in the social context",
					"Steelmaking requires no social learning in the social context",
					"Technology cannot cross cultural boundaries in the social context",
				],
				c: 0,
			},
			{
				q: "What is 'appropriate technology' concerned with?",
				a: [
					"Technologies suited to the social, economic, and environmental conditions of their users",
					"Using the most expensive technology available in this broader context",
					"Using only technologies invented locally in the social context",
					"Replacing all traditional practices in technological development",
				],
				c: 0,
			},
			{
				q: "How can patents affect technological diffusion?",
				a: [
					"They can provide incentives for invention while also restricting access to protected technologies",
					"They always make technologies freely available in this broader context",
					"They eliminate ownership claims in technological development",
					"They prevent all technological innovation in the social context",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 6: SOCIAL CONSTRUCTION AND DIFFUSION
			// =========================

			{
				q: "What does the social construction of technology emphasize?",
				a: [
					"Social groups and their interests help shape what technologies become",
					"Technology develops independently of society in the social context",
					"Only engineers determine technological meaning in the social context",
					"Consumers never influence design in technological development",
				],
				c: 0,
			},
			{
				q: "What does it mean for a technology to 'work' in a social-construction perspective?",
				a: [
					"Its technical performance and its acceptance and use within a social setting both matter",
					"It must operate without users in the social context",
					"It must be profitable immediately in the social context",
					"It must be approved by a government",
				],
				c: 0,
			},
			{
				q: "How do consumers and organizations affect technological diffusion?",
				a: [
					"Their choices, resources, practices, and expectations influence adoption",
					"They have no influence once a technology is invented",
					"Only governments decide adoption in technological development",
					"Consumers can adopt technology without changing anything",
				],
				c: 0,
			},
			{
				q: "What is the 'NIH Syndrome' discussed in the chapter?",
				a: [
					"Resistance to ideas because they were not developed within one's own organization",
					"A medical condition caused by technology in this broader context",
					"A method for measuring innovation in the social context",
					"A patenting strategy within technological systems when applied to technology",
				],
				c: 0,
			},
			{
				q: "What does inclusion mean in the context of technological development?",
				a: [
					"Different groups can be included or excluded through design choices and practices",
					"All technologies automatically include everyone in the social context",
					"Inclusion concerns only software licensing in the social context",
					"Inclusion means eliminating all user choices in this broader context",
				],
				c: 0,
			},
			{
				q: "What is path dependency?",
				a: [
					"Prior choices can shape and constrain the options available later",
					"Future choices completely erase past decisions in this broader context",
					"Technology develops without historical influence in the social context",
					"Only government decisions create technological paths in this broader context",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 7: TECHNOLOGY, ENERGY, AND THE ENVIRONMENT
			// =========================

			{
				q: "What major environmental problem is strongly associated with fossil-fuel use?",
				a: [
					"Air pollution and climate change in the social context",
					"Reduced biodiversity from all technologies in the social context",
					"The disappearance of all renewable energy in this broader context",
					"Universal soil fertility within technological systems when applied to technology",
				],
				c: 0,
			},
			{
				q: "Why does the textbook discuss transitioning away from fossil fuels?",
				a: [
					"Fossil-fuel use creates environmental costs that motivate alternatives",
					"Fossil fuels cannot produce energy in the social context",
					"Renewable energy does not exist in the social context",
					"Fossil fuels are used only in transportation",
				],
				c: 0,
			},
			{
				q: "Which is an alternative to fossil fuels discussed in the chapter?",
				a: [
					"Renewable energy sources within technological systems when applied to technology",
					"Coal gasification only within technological systems when applied to technology",
					"Lead batteries as a fuel in the social context",
					"Manual labor in this broader context when applied to technology",
				],
				c: 0,
			},
			{
				q: "What does 'doing more with less' refer to in environmental technology?",
				a: [
					"Improving efficiency so that fewer resources are used for a given output",
					"Producing less while using more resources in this broader context",
					"Eliminating all technological systems in technological development",
					"Increasing fuel consumption within technological systems when applied to technology",
				],
				c: 0,
			},
			{
				q: "Why can government policies affect environmental outcomes?",
				a: [
					"Policies can shape incentives, regulations, and the adoption of technologies",
					"Governments have no effect on markets in this broader context",
					"Environmental technologies are independent of policy in this broader context",
					"Only consumers can affect energy use in this broader context",
				],
				c: 0,
			},
			{
				q: "Why does the chapter ask whether technology is the problem or the solution?",
				a: [
					"Technology can contribute to environmental problems while also possible ways to address them",
					"Technology is always either harmful or beneficial",
					"Technology has no environmental effects in the social context",
					"Environmental problems are unrelated to technology in this broader context",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 8: TOOLS FOR ENVIRONMENTAL ASSESSMENT
			// =========================

			{
				q: "What is the purpose of environmental assessment tools?",
				a: [
					"To evaluate and compare the environmental impacts of technologies and products",
					"To calculate only financial profits in the social context",
					"To determine whether a product is patented",
					"To measure consumer popularity in technological development",
				],
				c: 0,
			},
			{
				q: "Why does the chapter consider matters of scale?",
				a: [
					"Environmental effects can look different depending on the scale of analysis",
					"Scale has no effect on environmental assessment",
					"Only local effects matter in technological development",
					"Only global effects matter in technological development",
				],
				c: 0,
			},
			{
				q: "What does the phone-in-your-pocket case study illustrate?",
				a: [
					"A common device can depend on complex materials, production, use, and disposal systems",
					"Phones have no environmental impacts in the social context",
					"Phones are produced entirely by one company",
					"Digital products require no physical resources in this broader context",
				],
				c: 0,
			},
			{
				q: "What is a commodity chain?",
				a: [
					"The connected sequence through goods and materials are produced, moved, and used",
					"A list of retail prices in the social context",
					"A single factory's production schedule in the social context",
					"A patent database within technological systems when applied to technology",
				],
				c: 0,
			},
			{
				q: "What is an externality?",
				a: [
					"A cost or benefit of an activity that is not fully reflected in the direct transaction",
					"A cost paid entirely by the producer",
					"A government subsidy within technological systems when applied to technology",
					"A product's retail price in technological development",
				],
				c: 0,
			},
			{
				q: "Why can some technological impacts be difficult to measure?",
				a: [
					"Some effects are indirect, dispersed, delayed, or difficult to assign monetary values",
					"All impacts are immediately measurable in the social context",
					"Only financial impacts exist in technological development",
					"Environmental effects occur only during manufacturing in this broader context",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 9: MEDICAL TECHNOLOGIES
			// =========================

			{
				q: "Why can new medical technologies involve trade-offs?",
				a: [
					"They can provide benefits while also creating costs, risks, ethical questions, or unequal access",
					"Medical technologies have only positive effects in this broader context",
					"Medical technologies never involve uncertainty in the social context",
					"Trade-offs occur only with old medicine in this broader context",
				],
				c: 0,
			},
			{
				q: "What is a central concern of medical ethics?",
				a: [
					"How medical technologies should be used in ways consistent with ethical principles",
					"How to maximize machine speed in the social context",
					"How to eliminate all medical choices in this broader context",
					"How to patent every treatment in the social context",
				],
				c: 0,
			},
			{
				q: "Why does the chapter ask 'When Does Life End?'",
				a: [
					"Medical technologies can complicate definitions and decisions concerning death",
					"Technology makes death impossible in technological development",
					"Only hospitals can define life in the social context",
					"The question concerns computer shutdowns in the social context",
				],
				c: 0,
			},
			{
				q: "What are 'halfway technologies'?",
				a: [
					"Technologies that partially address a problem without fully resolving its underlying causes",
					"Technologies that are used for half a year",
					"Technologies that require no medical knowledge in this broader context",
					"Technologies used only in developing countries in this broader context",
				],
				c: 0,
			},
			{
				q: "What kind of issue can arise when deciding whether to adopt an expensive medical technology?",
				a: [
					"The balance between medical benefits, costs, risks, and access",
					"Whether technology should replace doctors entirely in this broader context",
					"Whether all patients should receive identical treatment",
					"Whether medical research should stop in the social context",
				],
				c: 0,
			},
			{
				q: "Why can medical technology create ethical dilemmas even when it works technically?",
				a: [
					"Technical success does not by itself determine whether its use is ethically acceptable",
					"Ethics applies only when technology fails in this broader context",
					"Medical devices cannot affect ethical decisions in this broader context",
					"Technical performance and ethics are identical in this broader context",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 10: GENETIC TECHNOLOGIES
			// =========================

			{
				q: "What is the 'genetic fix' idea?",
				a: [
					"The expectation that genetic interventions can correct or prevent particular problems",
					"The use of computers to repair DNA files",
					"A method of patenting machines in the social context",
					"A farming technique unrelated to genes in this broader context",
				],
				c: 0,
			},
			{
				q: "Why has patenting genes been controversial?",
				a: [
					"It raises questions about ownership and the boundaries of intellectual property over biological information",
					"Biological genes cannot be investigated with scientific methods in any social setting",
					"Patent rules have no influence on the costs or direction of scientific research",
					"Every gene is a manufactured product created through technological development",
				],
				c: 0,
			},
			{
				q: "How can genetic technologies be used in agriculture?",
				a: [
					"They can be used to alter organisms or traits in crops and livestock",
					"They can only diagnose human diseases in this broader context",
					"They eliminate the need for farming in this broader context",
					"They affect only farm machinery in the social context",
				],
				c: 0,
			},
			{
				q: "What is genetic screening used for?",
				a: [
					"Identifying genetic characteristics or risks in individuals or populations",
					"Creating computer networks within technological systems when applied to technology",
					"Measuring crop prices within technological systems when applied to technology",
					"Replacing all medical diagnoses in technological development",
				],
				c: 0,
			},
			{
				q: "What ethical questions surround cloning?",
				a: [
					"Questions about safety, identity, reproduction, and the purposes for cloning might be used",
					"Whether computers can be copied in the social context",
					"Whether plants need sunlight in technological development",
					"Whether patents should expire in technological development",
				],
				c: 0,
			},
			{
				q: "Why are genetic interventions described as having perils?",
				a: [
					"Changing genetic makeup can have unintended consequences and ethical implications",
					"Genes never interact with other biological systems",
					"Genetic interventions are always harmless in the social context",
					"Only economic risks are involved in the social context",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 11: WORK IN NONINDUSTRIAL SOCIETIES
			// =========================

			{
				q: "What does the chapter's discussion of early tools emphasize?",
				a: [
					"Tools greatly expanded human capabilities and changed patterns of work",
					"Early humans had no technologies in the social context",
					"Tools were used only for warfare in this broader context",
					"Technology began with factories in technological development",
				],
				c: 0,
			},
			{
				q: "What does the !Kung example challenge?",
				a: [
					"The assumption that people in nonindustrial societies necessarily spend all their time working",
					"The idea that agriculture requires labor in this broader context",
					"The importance of tools in technological development",
					"The existence of leisure in technological development",
				],
				c: 0,
			},
			{
				q: "How did agriculture transform work?",
				a: [
					"It created more settled production systems and changed patterns of labor and time",
					"It eliminated work within technological systems when applied to technology",
					"It made tools unnecessary in technological development",
					"It made all societies nomadic in the social context",
				],
				c: 0,
			},
			{
				q: "What is one irony of agricultural 'progress' discussed by the chapter?",
				a: [
					"Greater productive capacity could be accompanied by harder or less flexible work",
					"Agriculture always reduced population in technological development",
					"Farming eliminated social organization in technological development",
					"Agriculture made all work recreational in the social context",
				],
				c: 0,
			},
			{
				q: "What role did guilds play in craft production?",
				a: [
					"They organized and regulated artisans and aspects of craft work",
					"They replaced all farmers in technological development",
					"They operated only military forces in the social context",
					"They eliminated specialized skills in technological development",
				],
				c: 0,
			},
			{
				q: "How did clocks affect working patterns?",
				a: [
					"They helped coordinate and regulate work according to standardized measures of time",
					"They made time irrelevant in technological development",
					"They eliminated schedules within technological systems when applied to technology",
					"They were used only for religious ceremonies",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 12: TECHNOLOGY AND JOBS
			// =========================

			{
				q: "Why has technological unemployment been a recurring concern?",
				a: [
					"New technologies can replace or reduce demand for some kinds of labor",
					"Technology never changes jobs in technological development",
					"Automation affects only consumers in technological development",
					"Employment cannot change with technology in the social context",
				],
				c: 0,
			},
			{
				q: "What is one argument for optimism about technology and employment?",
				a: [
					"Technological change can create new jobs and industries as well as eliminate some jobs",
					"Every worker keeps the same job forever",
					"Technology always creates more jobs than it removes",
					"Employment is unrelated to technology in the social context",
				],
				c: 0,
			},
			{
				q: "How can technological change create jobs indirectly?",
				a: [
					"New technologies can generate demand for complementary products, services, and workers",
					"Only the inventor receives employment in the social context",
					"New technologies eliminate all supporting industries in this broader context",
					"Indirect effects occur only in agriculture in this broader context",
				],
				c: 0,
			},
			{
				q: "Why does the chapter argue that robots are not necessarily ready to take over all work?",
				a: [
					"Many tasks remain difficult to automate because they require flexibility, judgment, or complex interaction",
					"Robots cannot perform any physical tasks in this broader context",
					"Robots are banned everywhere in technological development",
					"Automation has already ended in technological development",
				],
				c: 0,
			},
			{
				q: "How can technology affect income inequality?",
				a: [
					"It can change the rewards to different skills and alter the distribution of income",
					"Technology has identical effects on every worker",
					"Technology affects only prices in technological development",
					"Income inequality is unrelated to technology in this broader context",
				],
				c: 0,
			},
			{
				q: "How can globalization interact with technological change and jobs?",
				a: [
					"Technology can make it easier to coordinate production across locations and contribute to changes in employment",
					"Globalization prevents technological change in technological development",
					"Technology stops international production in technological development",
					"Jobs cannot move between countries in the social context",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 13: TECHNOLOGICAL CHANGE AND LIFE ON THE JOB
			// =========================

			{
				q: "What did industrial production change about work?",
				a: [
					"It increasingly organized work around machinery, factories, and specialized processes",
					"It eliminated machines within technological systems when applied to technology",
					"It returned most workers to subsistence farming",
					"It removed all division of labor in this broader context",
				],
				c: 0,
			},
			{
				q: "What is machine-paced labor?",
				a: [
					"Work in the pace is substantially determined by the operation of machinery",
					"Work performed only by machine operators in this broader context",
					"Work with no schedules in technological development",
					"Work controlled entirely by workers in the social context",
				],
				c: 0,
			},
			{
				q: "How can industrial technology affect worker autonomy?",
				a: [
					"Highly structured machinery and production systems can constrain how workers perform tasks",
					"Machines always increase autonomy in technological development",
					"Technology has no effect on work organization",
					"Autonomy depends only on wages in the social context",
				],
				c: 0,
			},
			{
				q: "What is the division of labor?",
				a: [
					"Breaking production into specialized tasks performed by different workers",
					"Giving one worker every task in the social context",
					"Eliminating specialization in this broader context when applied to technology",
					"Replacing workers with managers in technological development",
				],
				c: 0,
			},
			{
				q: "What was scientific management intended to do?",
				a: [
					"Analyze and organize work to improve efficiency and control of production",
					"Eliminate measurement from factories in technological development",
					"Increase worker discretion in every task in this broader context",
					"Replace machines with craft labor in the social context",
				],
				c: 0,
			},
			{
				q: "Which newer forms of work are discussed in the chapter?",
				a: [
					"Telework and the gig economy in the social context",
					"Only agricultural labor within technological systems when applied to technology",
					"Only guild craftsmanship within technological systems when applied to technology",
					"Only military service within technological systems when applied to technology",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 14: PRINTING, LITERACY, AND MEDIA
			// =========================

			{
				q: "Why was the printing revolution significant?",
				a: [
					"It greatly expanded the ability to reproduce and circulate written information",
					"It ended literacy within technological systems when applied to technology",
					"It eliminated books within technological systems when applied to technology",
					"It affected only governments in technological development",
				],
				c: 0,
			},
			{
				q: "How did printing contribute to the expansion of knowledge?",
				a: [
					"It made written materials easier to reproduce and distribute widely",
					"It prevented scientific communication in technological development",
					"It reduced the number of available texts",
					"It restricted books to monasteries in the social context",
				],
				c: 0,
			},
			{
				q: "How were printing and the rise of Protestantism connected?",
				a: [
					"Printed materials helped circulate religious texts and ideas",
					"Printing prevented religious debate in technological development",
					"Protestantism banned printed Bibles in technological development",
					"The two developments were unrelated in the social context",
				],
				c: 0,
			},
			{
				q: "How did literacy and printing reinforce each other?",
				a: [
					"More printed material encouraged literacy, while literate populations created demand for printed material",
					"Literacy reduced demand for books in the social context",
					"Printing made reading unnecessary in technological development",
					"Only governments could become literate in the social context",
				],
				c: 0,
			},
			{
				q: "What change is associated with digitizing the news?",
				a: [
					"News can be distributed electronically and updated rapidly through digital media",
					"News must remain in print in the social context",
					"Newspapers became impossible to access in the social context",
					"Digital news cannot be reproduced in the social context",
				],
				c: 0,
			},
			{
				q: "What issue does 'reading digitally' raise?",
				a: [
					"Digital reading can change how people encounter, navigate, and process written material",
					"Digital text cannot contain information in the social context",
					"Reading behavior is unaffected by media in this broader context",
					"Digital reading eliminates literacy in technological development",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 15: ELECTRONIC MEDIA
			// =========================

			{
				q: "What was the telegraph's major communication significance?",
				a: [
					"It allowed messages to travel rapidly over long distances using electrical signals",
					"It transmitted television images in technological development",
					"It required no coded signals in the social context",
					"It replaced all printed books in the social context",
				],
				c: 0,
			},
			{
				q: "Who is commonly associated with the practical development of radio, though not its sole inventor?",
				a: [
					"Guglielmo Marconi in this broader context when applied to technology",
					"Johannes Gutenberg in this broader context when applied to technology",
					"Tim Berners-Lee in this broader context when applied to technology",
					"James Watt in this broader context when applied to technology",
				],
				c: 0,
			},
			{
				q: "What helped make radio a commercial medium in the United States?",
				a: [
					"Broadcasting developed alongside advertising, private ownership, and commercial financing",
					"Radio was funded only by monasteries in this broader context",
					"Radio could not transmit news in the social context",
					"Commercial broadcasting was impossible in technological development",
				],
				c: 0,
			},
			{
				q: "Why did governments become involved in broadcasting?",
				a: [
					"Radio and television used scarce frequencies and had important public effects",
					"Broadcasting had no public significance in the social context",
					"Governments invented every program in technological development",
					"Television could not reach audiences in the social context",
				],
				c: 0,
			},
			{
				q: "What concern has surrounded violence on television?",
				a: [
					"Researchers and policymakers have debated possible effects of exposure to televised violence",
					"Television violence has never been studied in this broader context",
					"Violence appears only in news broadcasts in this broader context",
					"Television cannot influence viewers in technological development",
				],
				c: 0,
			},
			{
				q: "How has television affected politics?",
				a: [
					"It has changed how political information, candidates, and events are presented to mass audiences",
					"It eliminated political communication in technological development",
					"It made campaigns impossible in technological development",
					"It affects only entertainment in technological development",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 16: THE INTERNET AGE
			// =========================

			{
				q: "What was ARPANET?",
				a: [
					"An early computer network developed with support from the U.S. Department of Defense",
					"A commercial television network in technological development",
					"A social media company in technological development",
					"A satellite television system in technological development",
				],
				c: 0,
			},
			{
				q: "What important networking principle was used by ARPANET?",
				a: [
					"Breaking information into packets that could be transmitted through a network",
					"Sending every message as a physical letter",
					"Using only one permanent communication path in this broader context",
					"Encoding every message as a television signal",
				],
				c: 0,
			},
			{
				q: "Who developed the World Wide Web while working at CERN?",
				a: [
					"Tim Berners-Lee in this broader context when applied to technology",
					"Guglielmo Marconi in this broader context when applied to technology",
					"Johannes Gutenberg in this broader context when applied to technology",
					"Charles Perrow in this broader context when applied to technology",
				],
				c: 0,
			},
			{
				q: "What is a network effect?",
				a: [
					"A service can become more valuable as more people use it",
					"A network becomes less useful when more people join",
					"A network can work only with one user",
					"A network effect concerns only electricity in this broader context",
				],
				c: 0,
			},
			{
				q: "What is the digital divide?",
				a: [
					"Differences in access to and effective use of digital technologies",
					"A division between computer programs in the social context",
					"The separation of the internet from phones",
					"A method of encrypting data in the social context",
				],
				c: 0,
			},
			{
				q: "Why is intellectual property an issue in the Internet age?",
				a: [
					"Digital information can be copied and distributed easily, raising questions about ownership and control",
					"Digital information cannot be copied in the social context",
					"Copyright applies only to physical machines in this broader context",
					"The internet eliminates ownership in technological development",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 17: ISSUES IN ICTs
			// =========================

			{
				q: "What issue has been debated regarding video games and gaming?",
				a: [
					"Their possible effects on behavior, health, social interaction, and learning",
					"Whether games can use electricity in the social context",
					"Whether games existed before computers in the social context",
					"Whether games can be sold in the social context",
				],
				c: 0,
			},
			{
				q: "What is one potential educational or career-related benefit discussed for esports?",
				a: [
					"It can involve engagement with STEM and related skills",
					"It eliminates the need for education in this broader context",
					"It prevents teamwork within technological systems when applied to technology",
					"It requires no technology in technological development",
				],
				c: 0,
			},
			{
				q: "What are cryptocurrencies?",
				a: [
					"Digital forms of value that use cryptographic technologies and decentralized systems in many implementations",
					"Printed government banknotes within technological systems when applied to technology",
					"Analog radio signals within technological systems when applied to technology",
					"Medical technologies in this broader context when applied to technology",
				],
				c: 0,
			},
			{
				q: "What concern is associated with social media harms?",
				a: [
					"Social media can contribute to problems such as harassment, misinformation, or other negative effects",
					"Social media has no social consequences in this broader context",
					"Social media cannot affect communication in the social context",
					"Only governments use social media in the social context",
				],
				c: 0,
			},
			{
				q: "What is disinformation?",
				a: [
					"False or misleading information that is deliberately spread",
					"Any information that is difficult to understand",
					"Accidental spelling errors within technological systems when applied to technology",
					"A form of hardware in technological development",
				],
				c: 0,
			},
			{
				q: "What can algorithms contribute to online information environments?",
				a: [
					"They can shape what users see, including through recommendations, targeting, and personalization",
					"They only repair computer hardware in the social context",
					"They prevent all bias in technological development",
					"They operate without using information in the social context",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 18: WEAPONS AND THEIR CONSEQUENCES
			// =========================

			{
				q: "How did military technology influence ancient warfare?",
				a: [
					"Weapons and military organization shaped tactics, political power, and the outcomes of conflicts",
					"Ancient warfare was independent of technology in this broader context",
					"Weapons were used only for hunting in this broader context",
					"Military technology began with firearms in the social context",
				],
				c: 0,
			},
			{
				q: "What was a major military advantage of the medieval horse?",
				a: [
					"Mounted warfare supported the power of heavily equipped cavalry",
					"Horses eliminated the need for weapons in this broader context",
					"Horses made castles unnecessary immediately in the social context",
					"Mounted warfare was used only for transport",
				],
				c: 0,
			},
			{
				q: "What did the longbow demonstrate about military technology?",
				a: [
					"A relatively accessible weapon could challenge established military arrangements and defenses",
					"Longbows were useful only for hunting in this broader context",
					"Longbows ended all warfare in technological development",
					"Longbows were firearms within technological systems when applied to technology",
				],
				c: 0,
			},
			{
				q: "What was the gunpowder revolution?",
				a: [
					"A major transformation in warfare associated with the adoption of gunpowder weapons",
					"The invention of the printing press in this broader context",
					"The replacement of all ships by aircraft",
					"The elimination of artillery in technological development",
				],
				c: 0,
			},
			{
				q: "How did gunpowder weapons contribute to changes in political organization?",
				a: [
					"They helped alter military power and contributed to the development of centralized states",
					"They made governments unnecessary in technological development",
					"They eliminated taxation within technological systems when applied to technology",
					"They reduced the importance of armies in this broader context",
				],
				c: 0,
			},
			{
				q: "What does the chapter's discussion of battleships illustrate?",
				a: [
					"Naval technology can shape military strategy, organizational culture, and international power",
					"Ships have no political significance in the social context",
					"Battleships were used only for commerce in this broader context",
					"Naval technology never changes warfare in the social context",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 19: THE ERA OF SMART WEAPONS
			// =========================

			{
				q: "What is a cruise missile?",
				a: [
					"A guided missile designed to travel toward a target using navigation and propulsion systems",
					"A conventional artillery shell without guidance in this broader context",
					"A surveillance camera within technological systems when applied to technology",
					"A type of tank in technological development",
				],
				c: 0,
			},
			{
				q: "What are smart bombs or precision-guided munitions designed to do?",
				a: [
					"Improve the ability to direct a weapon toward a selected target",
					"Increase the randomness of bombing in the social context",
					"Eliminate the need for aircraft in the social context",
					"Operate only as defensive shields in the social context",
				],
				c: 0,
			},
			{
				q: "What is high-tech surveillance used for?",
				a: [
					"Detecting, monitoring, and collecting information about people, places, or activities",
					"Producing food in this broader context when applied to technology",
					"Printing newspapers in this broader context when applied to technology",
					"Manufacturing textiles in this broader context when applied to technology",
				],
				c: 0,
			},
			{
				q: "What is one military use of drones?",
				a: [
					"They can conduct surveillance or carry out strikes without placing a pilot in the aircraft",
					"They can only transport civilians in the social context",
					"They are used only for weather forecasting",
					"They cannot be remotely controlled in the social context",
				],
				c: 0,
			},
			{
				q: "What is one cost of increasing technological sophistication in weapons?",
				a: [
					"Greater complexity can bring financial, technical, organizational, and maintenance burdens",
					"Sophistication always makes weapons cheaper in the social context",
					"Complexity eliminates training needs in technological development",
					"Advanced systems require no infrastructure in the social context",
				],
				c: 0,
			},
			{
				q: "What is asymmetrical warfare?",
				a: [
					"Conflict in opposing sides have substantially different capabilities or strategies",
					"War fought only with equal armies in this broader context",
					"A conflict without technology in technological development",
					"A form of naval communication in the social context",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 20: HOW NEW WEAPONS EMERGE
			// =========================

			{
				q: "What does 'action and reaction' mean in military technological development?",
				a: [
					"One side's innovations can stimulate responses and countermeasures by opponents",
					"Military technology develops without opponents in the social context",
					"Weapons never influence strategy in technological development",
					"Only civilian technology creates military change in this broader context",
				],
				c: 0,
			},
			{
				q: "Why can social structure influence military technology?",
				a: [
					"Organizations, institutions, doctrines, and interests affect technologies are developed and adopted",
					"Military technology is chosen only by physics",
					"Organizations cannot affect weapons in technological development",
					"Doctrine has no relation to equipment in this broader context",
				],
				c: 0,
			},
			{
				q: "What does the chapter's discussion of the air weapon illustrate?",
				a: [
					"Organizational interests can shape how new military technologies are understood and used",
					"Aircraft were accepted immediately everywhere in the social context",
					"Air power has no organizational implications in this broader context",
					"Air weapons developed independently of military institutions",
				],
				c: 0,
			},
			{
				q: "How can social revolution enlarge the scale of warfare?",
				a: [
					"Political and social transformations can mobilize more people and resources for war",
					"Revolutions always reduce military capacity in the social context",
					"Social change cannot affect armies in the social context",
					"War becomes impossible after revolutions in the social context",
				],
				c: 0,
			},
			{
				q: "What does industrial technology provide for warfare?",
				a: [
					"Large-scale production and infrastructure for weapons, transport, and military logistics",
					"Only individual hand tools in technological development",
					"No additional production capacity in technological development",
					"Only communication services within technological systems when applied to technology",
				],
				c: 0,
			},
			{
				q: "Why is controlling military technologies difficult?",
				a: [
					"Military technologies can spread, be difficult to regulate, and involve competing security interests",
					"All governments agree on every weapon in this broader context",
					"Weapons cannot cross borders in technological development",
					"Military technologies are always publicly controlled in this broader context",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 21: ACCIDENTS, DISASTERS, AND NEGATIVE CONSEQUENCES
			// =========================

			{
				q: "What is a 'simple' technological failure?",
				a: [
					"A failure that may arise from a relatively straightforward breakdown or error",
					"A failure that requires no consequences in this broader context",
					"A failure caused only by natural disasters",
					"A failure that cannot be investigated in this broader context",
				],
				c: 0,
			},
			{
				q: "What are 'normal accidents' in Charles Perrow's framework?",
				a: [
					"Accidents that can arise from complex interactions and tightly coupled systems",
					"Accidents that occur only because workers are careless",
					"Accidents that are always predictable in the social context",
					"Accidents caused only by weather in the social context",
				],
				c: 0,
			},
			{
				q: "What does tight coupling mean in complex technological systems?",
				a: [
					"Parts or processes are closely connected so changes can propagate rapidly",
					"Components are completely independent in technological development",
					"Systems have no feedback in technological development",
					"All components are manually operated in the social context",
				],
				c: 0,
			},
			{
				q: "Why can responsibility be difficult to assign after a technological disaster?",
				a: [
					"Multiple decisions, organizations, and system conditions may contribute to the outcome",
					"Only one person is always responsible in this broader context",
					"Technology cannot involve organizations in technological development",
					"Victims never need to be considered in this broader context",
				],
				c: 0,
			},
			{
				q: "What is a chronic disaster?",
				a: [
					"A harmful condition that persists over time rather than occurring as one isolated event",
					"A harmful event that begins and ends within exactly one twenty-four-hour period",
					"A natural hazard whose effects cannot be influenced by human decisions or actions",
					"A system failure that causes no harm to people or communities over time",
				],
				c: 0,
			},
			{
				q: "What does the chapter's discussion of infrastructure emphasize?",
				a: [
					"Technological systems depend on interconnected physical and organizational systems whose failures can have cascading effects",
					"Technological development is independent of the physical and organizational infrastructure around it",
					"Failures in infrastructure are always contained and cannot affect connected systems",
					"Infrastructure consists only of buildings, excluding networks and organized services",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 22: ORGANIZATIONS AND TECHNOLOGICAL CHANGE
			// =========================

			{
				q: "How can technology be a cause of organizational structure?",
				a: [
					"The characteristics of a technology can influence how organizations divide work and coordinate activities",
					"Technology has no effect on organizations in this broader context",
					"Organizations always predate every technology in the social context",
					"Only laws determine structure in technological development",
				],
				c: 0,
			},
			{
				q: "How can organizational structure be a consequence of technology?",
				a: [
					"Organizations may change their structures in response to new technologies",
					"Organizations never adapt within technological systems when applied to technology",
					"Technology cannot change communication in technological development",
					"Structure is unrelated to equipment in the social context",
				],
				c: 0,
			},
			{
				q: "Why can organizational size affect technological innovation?",
				a: [
					"Size can influence resources, specialization, communication, and the ability to support innovation",
					"Size has no relationship to innovation in this broader context",
					"Only small organizations innovate in technological development",
					"Only governments can innovate in technological development",
				],
				c: 0,
			},
			{
				q: "How have new information technologies affected organizations?",
				a: [
					"They can change communication, coordination, information processing, and work practices",
					"They eliminate all organizational hierarchies in the social context",
					"They affect only hardware manufacturers in the social context",
					"They make information less important in the social context",
				],
				c: 0,
			},
			{
				q: "What are interorganizational relations?",
				a: [
					"Relationships among organizations that can influence technological development and adoption",
					"Relationships only within one department in the social context",
					"Personal relationships unrelated to technology in the social context",
					"Government ownership of all firms in the social context",
				],
				c: 0,
			},
			{
				q: "What role can entrepreneurs play in organizations and technological change?",
				a: [
					"They can identify opportunities, mobilize resources, and help introduce new technologies",
					"They only operate existing machines in the social context",
					"They cannot affect organizational change in the social context",
					"They work exclusively for governments in the social context",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 23: PROFESSIONS, EXPERTISE, AND ETHICS
			// =========================

			{
				q: "Why are experts important in shaping technology?",
				a: [
					"They possess specialized knowledge that can influence technical choices and policy decisions",
					"Experts have no role in technology in this broader context",
					"Experts only operate machines in technological development",
					"Expertise is unrelated to decision-making in the social context",
				],
				c: 0,
			},
			{
				q: "What role do engineers play in the control of technology?",
				a: [
					"Engineering decisions can shape how technologies are designed, implemented, and constrained",
					"Engineers only perform administrative work in the social context",
					"Engineers cannot influence safety in technological development",
					"Engineering has no ethical dimension in the social context",
				],
				c: 0,
			},
			{
				q: "Why does the chapter discuss institutional norms in science?",
				a: [
					"Scientific institutions establish expectations about conduct, evidence, and professional behavior",
					"Science operates without norms in technological development",
					"Norms replace evidence within technological systems when applied to technology",
					"Scientific ethics applies only to engineers in this broader context",
				],
				c: 0,
			},
			{
				q: "What is an ethical problem with focusing only on technological means?",
				a: [
					"A technically effective means can still serve ethically troubling ends",
					"Technical means are always morally neutral in every context",
					"Ends never matter within technological systems when applied to technology",
					"Ethics applies only to unsuccessful technologies in this broader context",
				],
				c: 0,
			},
			{
				q: "Why can expert disagreement matter in public policy?",
				a: [
					"Different experts may interpret evidence, uncertainty, and appropriate action differently",
					"Experts always agree on every issue in this broader context",
					"Disagreement means evidence is irrelevant in the social context",
					"Experts cannot affect policy in technological development",
				],
				c: 0,
			},
			{
				q: "What tension can arise between expertise and democratic decision-making?",
				a: [
					"Technical expertise can inform decisions while democratic institutions must also address public values and choices",
					"Experts should always replace democratic institutions in this broader context",
					"Democracy makes expertise unnecessary in technological development",
					"Technical issues never involve public values in this broader context",
				],
				c: 0,
			},
			// =========================
			// CHAPTER 24: GOVERNING TECHNOLOGY
			// =========================

			{
				q: "How can governments shape technological change?",
				a: [
					"Through laws, regulation, funding, procurement, standards, and other policies",
					"Governments can influence technology only through patents",
					"Governments have no technological role in the social context",
					"Governments only respond after technologies disappear in this broader context",
				],
				c: 0,
			},
			{
				q: "What constitutional power in the United States concerns intellectual property?",
				a: [
					"Congress can promote science and useful arts by securing limited exclusive rights to authors and inventors",
					"Congress can prevent inventions from being developed or used throughout society",
					"The Constitution prohibits patents and other protections for technological inventions",
					"The judiciary, rather than Congress, has exclusive control over every invention",
				],
				c: 0,
			},
			{
				q: "What was the Bayh-Dole Act of 1980 important for?",
				a: [
					"It changed how federally funded research inventions could be managed and commercialized",
					"It abolished all patents in technological development",
					"It ended university research in technological development",
					"It prohibited technology transfer in technological development",
				],
				c: 0,
			},
			{
				q: "Why does the government fund science and technology research?",
				a: [
					"Public funding can support research whose benefits may not be captured by private markets alone",
					"Government research has no public purpose in this broader context",
					"Only private firms can perform research in this broader context",
					"Government funding always produces immediate profits in this broader context",
				],
				c: 0,
			},
			{
				q: "What is one reason governments establish institutions to guide technology?",
				a: [
					"Technologies can have broad social consequences requiring regulation, oversight, or public coordination",
					"Technology never affects the public in the social context",
					"Institutions prevent all innovation in technological development",
					"Only scientists need institutions in technological development",
				],
				c: 0,
			},
			{
				q: "What is meant by democratic control of technology?",
				a: [
					"Public institutions and citizens have a role in shaping decisions about technological development and use",
					"Only engineers should make all technological decisions",
					"Technology is outside politics in technological development",
					"Democratic control means banning technology in the social context",
				],
				c: 0,
			},
			// =========================
			// TEXTBOOK OVERVIEW
			// =========================

			{
				q: "What central relationship does the textbook examine throughout its chapters?",
				a: [
					"Technology shapes society while social, economic, cultural, and political forces shape technology",
					"Technology develops independently of society in the social context",
					"Society is unaffected by technology in the social context",
					"Only economics determines technology in technological development",
				],
				c: 0,
			},
			{
				q: "Which broad issue connects technological change to globalization?",
				a: [
					"Technologies can facilitate worldwide connections while societies and cultures respond differently",
					"Globalization prevents technology from spreading in the social context",
					"Technology has no role in globalization in this broader context",
					"Globalization affects only agriculture in technological development",
				],
				c: 0,
			},
			{
				q: "Why does the textbook discuss inequality in relation to technology?",
				a: [
					"Technological change can alter employment, skills, wealth, and access to opportunities",
					"Technology always reduces inequality in technological development",
					"Inequality is unrelated to technological change in this broader context",
					"Technology affects only environmental conditions in the social context",
				],
				c: 0,
			},
			{
				q: "Which pair of topics reflects the book's concern with the health of Earth and its inhabitants?",
				a: [
					"Environmental technologies and medical/genetic technologies in this broader context",
					"Printing and guilds only in technological development",
					"Military weapons and clocks only in the social context",
					"Television and newspapers only in technological development",
				],
				c: 0,
			},
			{
				q: "Why does the textbook include both technological benefits and technological disruptions?",
				a: [
					"Technological change can create opportunities while also producing risks, costs, and unintended consequences",
					"Technology has only negative consequences in the social context",
					"Technology has only positive consequences in the social context",
					"Benefits and disruptions cannot occur together in this broader context",
				],
				c: 0,
			},
			{
				q: "What broad question does the final part of the textbook address?",
				a: [
					"How organizations, experts, professions, and governments shape and control technology",
					"How to eliminate all technology in the social context",
					"How to return every society to preindustrial life",
					"How to make technology independent of politics",
				],
				c: 0,
			},
		],
	},

	DataSci: [
		// =========================
		// INTRODUCTION TO DATA SCIENCE
		// =========================

		{
			q: "What is essentially at the heart of the information revolution?",
			a: [
				"The collection and analysis of data",
				"The creation of video games",
				"The development of operating systems",
				"The invention of databases",
			],
			c: 0,
		},
		{
			q: "What is the ultimate goal of data science?",
			a: [
				"To gain knowledge and communicate conclusions drawn from data",
				"To store as much data as possible",
				"To replace all human decisions",
				"To create computer hardware",
			],
			c: 0,
		},
		{
			q: "Why does society need people who understand data science?",
			a: [
				"To make sense of data and visualize it for others",
				"To build only databases",
				"To replace computer programmers",
				"To create more data",
			],
			c: 0,
		},
		{
			q: "What problem does YouTube have when reviewing uploaded videos?",
			a: [
				"There is not enough human time and resources to review all videos",
				"Videos cannot be stored",
				"Users cannot upload videos",
				"Videos cannot contain advertisements",
			],
			c: 0,
		},
		{
			q: "How can data analysis help YouTube with videos?",
			a: [
				"By judging videos as appropriate or monetizable",
				"By deleting every uploaded video",
				"By converting videos into text",
				"By increasing video resolution",
			],
			c: 0,
		},
		{
			q: "According to the lecture, what is an important takeaway from the YouTube example?",
			a: [
				"Data analysis is always easy to get right",
				"There is not always a good technological solution to a social problem",
				"Humans should never review data",
				"All social problems can be solved with software",
			],
			c: 1,
		},
		{
			q: "Which of the following is an example of data?",
			a: [
				"Numbers and values",
				"Only computer programs",
				"Only databases",
				"Only written documents",
			],
			c: 0,
		},
		{
			q: "What is the singular form of data mentioned in the lecture?",
			a: ["Datum", "Datae", "Datas", "Daton"],
			c: 0,
		},
		{
			q: "Which of the following is listed as a source of data?",
			a: [
				"Measurements",
				"Keyboard drivers",
				"Logic gates",
				"Operating systems",
			],
			c: 0,
		},
		{
			q: "Which of the following is another source of data?",
			a: ["Transactions", "Compilers", "CPUs", "Monitors"],
			c: 0,
		},

		// =========================
		// TYPES OF DATA
		// =========================

		{
			q: "What are the two large categories that data tends to fall into?",
			a: [
				"Quantitative and categorical",
				"Binary and hexadecimal",
				"Text and binary",
				"Continuous and nominal",
			],
			c: 0,
		},
		{
			q: "What is quantitative data?",
			a: [
				"Numerical values that can be measured and ordered",
				"Values belonging to categories with no numbers",
				"Only text values",
				"Only Boolean values",
			],
			c: 0,
		},
		{
			q: "Which is an example of quantitative data?",
			a: ["Temperature", "Colour name", "University name", "Music genre"],
			c: 0,
		},
		{
			q: "What is categorical data?",
			a: [
				"Values normally belonging to the same category",
				"Numerical values that are always continuous",
				"Only measurements",
				"Values that must be calculated",
			],
			c: 0,
		},
		{
			q: "Which is an example of categorical data?",
			a: ["Music genre", "Temperature", "Distance", "Speed"],
			c: 0,
		},
		{
			q: "What are the two types of quantitative data discussed in the lecture?",
			a: [
				"Continuous and discrete",
				"Nominal and ordinal",
				"Binary and text",
				"Measured and categorical",
			],
			c: 0,
		},
		{
			q: "What is continuous data?",
			a: [
				"Numerical values that are infinite along a range",
				"Countable values that are finite within a range",
				"Labels with no order",
				"Labels with an order",
			],
			c: 0,
		},
		{
			q: "Which is an example of continuous data?",
			a: [
				"Temperature of 22.25C",
				"Number of computers in a lab",
				"Number of fingers",
				"Population count",
			],
			c: 0,
		},
		{
			q: "What is discrete data?",
			a: [
				"Countable numerical values that are finite within a range",
				"Numerical values that are infinite along a range",
				"Labels with no order",
				"Text that represents categories",
			],
			c: 0,
		},
		{
			q: "Which is an example of discrete data?",
			a: [
				"Number of computers in a lab",
				"Speed of a car",
				"Temperature",
				"Distance",
			],
			c: 0,
		},
		{
			q: "What are the two types of categorical data discussed in the lecture?",
			a: [
				"Nominal and ordinal",
				"Continuous and discrete",
				"Binary and hexadecimal",
				"Text and numerical",
			],
			c: 0,
		},
		{
			q: "What is nominal data?",
			a: [
				"Values in categories with no order",
				"Values in categories with an ordering",
				"Infinite numerical values",
				"Finite numerical values",
			],
			c: 0,
		},
		{
			q: "Which is an example of nominal data?",
			a: ["Colour", "Letter grade", "Movie rating", "Sentiment level"],
			c: 0,
		},
		{
			q: "What is ordinal data?",
			a: [
				"Values in a category with an ordering",
				"Values in categories with no order",
				"Numerical values that are infinite",
				"Numerical values that are countable",
			],
			c: 0,
		},
		{
			q: "Which is an example of ordinal data?",
			a: ["Letter grades", "Country of birth", "Colour", "University name"],
			c: 0,
		},

		// =========================
		// DATA REPRESENTATION
		// =========================

		{
			q: "How can data be represented by humans?",
			a: [
				"Writing, drawings, speech, and body language",
				"Only binary numbers",
				"Only databases",
				"Only computer files",
			],
			c: 0,
		},
		{
			q: "How is data represented by computers?",
			a: [
				"Using bits and binary interpretation",
				"Using only decimal numbers",
				"Using only text",
				"Using only images",
			],
			c: 0,
		},
		{
			q: "Where can data be located according to the lecture?",
			a: [
				"In memory and in files",
				"Only in RAM",
				"Only in databases",
				"Only in cloud services",
			],
			c: 0,
		},
		{
			q: "What is the basic representation of data in computers?",
			a: ["Bits", "Pixels", "Characters", "Files"],
			c: 0,
		},
		{
			q: "What is the interpretation of computer data based on?",
			a: ["Binary", "Decimal only", "Hexadecimal only", "ASCII only"],
			c: 0,
		},
		{
			q: "What is the decimal value of binary 0110?",
			a: ["4", "5", "6", "7"],
			c: 2,
		},
		{
			q: "What is hexadecimal A equal to in decimal?",
			a: ["8", "9", "10", "11"],
			c: 2,
		},
		{
			q: "What is hexadecimal F equal to in decimal?",
			a: ["13", "14", "15", "16"],
			c: 2,
		},
		{
			q: "What is ASCII used for?",
			a: [
				"Converting numbers to characters",
				"Compressing images",
				"Storing databases",
				"Creating binary files",
			],
			c: 0,
		},
		{
			q: "What does Unicode provide compared to ASCII?",
			a: [
				"More characters, including other languages, math symbols, and emoji",
				"Fewer characters using less storage",
				"Only numbers",
				"Only English letters",
			],
			c: 0,
		},
		{
			q: "How are images represented according to the lecture?",
			a: ["As pixels", "As database tables", "As text only", "As XML tags"],
			c: 0,
		},
		{
			q: "What three colours are represented by the three bytes in the example?",
			a: [
				"Red, green, and blue",
				"Red, yellow, and blue",
				"Cyan, magenta, and yellow",
				"Black, white, and grey",
			],
			c: 0,
		},
		{
			q: "How can the RGB colour value 79, 38, 131 be represented?",
			a: ["#4F2683", "#793813", "#4F8313", "#26834F"],
			c: 0,
		},

		// =========================
		// FILE FORMATS
		// =========================

		{
			q: "Which three types of file formats are discussed in the lecture?",
			a: [
				"Text, binary, and XML",
				"JPEG, PNG, and GIF",
				"RAM, ROM, and CPU",
				"ASCII, RGB, and HTML",
			],
			c: 0,
		},
		{
			q: "How are text files commonly encoded?",
			a: [
				"ASCII, UTF, or Unicode",
				"RGB only",
				"Binary images only",
				"XML only",
			],
			c: 0,
		},
		{
			q: "What can invisible characters in text files represent?",
			a: [
				"Spaces and line breaks",
				"Colours and pixels",
				"Database tables",
				"CPU instructions only",
			],
			c: 0,
		},
		{
			q: "What is a characteristic of binary files?",
			a: [
				"They define their own format or encoding",
				"They are always human readable",
				"They only contain text",
				"They cannot store images",
			],
			c: 0,
		},
		{
			q: "Which is an advantage of binary files?",
			a: [
				"They can store data more compactly",
				"They are easier for humans to read",
				"They always use more storage",
				"They are not specific to programs",
			],
			c: 0,
		},
		{
			q: "Which is a disadvantage of binary files?",
			a: [
				"They are harder for humans to read and program",
				"They require no special format",
				"They always use less processing time",
				"They cannot store data",
			],
			c: 0,
		},
		{
			q: "Which is an example of a binary file?",
			a: ["PNG image", "Plain text document", "XML document", "ASCII text"],
			c: 0,
		},
		{
			q: "What is XML?",
			a: [
				"A text file format that is both human and machine readable",
				"A binary-only format",
				"A type of processor",
				"A type of database hardware",
			],
			c: 0,
		},
		{
			q: "What is one advantage of XML?",
			a: [
				"It can represent complex data objects",
				"It always requires less space than binary",
				"It cannot be read by humans",
				"It is not structured",
			],
			c: 0,
		},
		{
			q: "What is one disadvantage of XML?",
			a: [
				"It can require more space than binary or text files",
				"It cannot represent structured data",
				"It cannot be read by computers",
				"It cannot transport data",
			],
			c: 0,
		},

		// =========================
		// DATA PIPELINE
		// =========================

		{
			q: "What is the first stage of the data pipeline?",
			a: ["Collect or create", "Analyze", "Visualize", "Store"],
			c: 0,
		},
		{
			q: "Which stage of the data pipeline deals with invalid and untrusted data?",
			a: ["Validate", "Visualize", "Analyze", "Combine"],
			c: 0,
		},
		{
			q: "What is the purpose of cleaning data?",
			a: [
				"To fix or remove incorrect, broken, duplicate, or missing information",
				"To create more duplicate information",
				"To visualize the dataset",
				"To convert all data to binary",
			],
			c: 0,
		},
		{
			q: "Which stage removes unneeded and redundant data?",
			a: ["Filter", "Collect", "Visualize", "Analyze"],
			c: 0,
		},
		{
			q: "Which stage of the data pipeline involves putting data into storage?",
			a: ["Store", "Analyze", "Clean", "Collect"],
			c: 0,
		},
		{
			q: "Which stage combines data from different sources?",
			a: ["Combine", "Validate", "Filter", "Visualize"],
			c: 0,
		},
		{
			q: "Which stage is used to examine data and find useful information?",
			a: ["Analyze", "Store", "Collect", "Filter"],
			c: 0,
		},
		{
			q: "What is the final stage shown in the data pipeline?",
			a: ["Visualize", "Collect", "Validate", "Clean"],
			c: 0,
		},
		{
			q: "Which can provide data for the data pipeline?",
			a: [
				"Databases, sensors, measurements, and transactions",
				"Only CPUs",
				"Only text files",
				"Only cloud services",
			],
			c: 0,
		},
		{
			q: "What does data science focus on in this course?",
			a: [
				"Methods for analyzing data sets",
				"Building computer hardware",
				"Designing operating systems",
				"Creating databases only",
			],
			c: 0,
		},

		// DATASETS & DATA PREPARATION
		{
			q: "What are three problems that data science datasets can be used to solve?",
			a: [
				"Classification, regression, and clustering",
				"Sorting, searching, and compiling",
				"Encryption, compression, and networking",
				"Testing, debugging, and deployment",
			],
			c: 0,
		},
		{
			q: "What does a typical dataset contain besides features?",
			a: [
				"A class or output",
				"Only text",
				"A file extension",
				"A regular expression",
			],
			c: 0,
		},
		{
			q: "What is data preparation also called by data scientists?",
			a: [
				"Data wrangling",
				"Data compiling",
				"Data rendering",
				"Data modeling",
			],
			c: 0,
		},
		{
			q: "What is another term used for data preparation?",
			a: ["Data munging", "Data rendering", "Data indexing", "Data encoding"],
			c: 0,
		},
		{
			q: "What is another informal term for data preparation?",
			a: [
				"Data janitor work",
				"Data engineering",
				"Data mining",
				"Data processing",
			],
			c: 0,
		},
		{
			q: "Approximately what percentage of their time can data scientists spend collecting and preparing unruly digital data?",
			a: ["50% to 80%", "5% to 10%", "10% to 20%", "90% to 100%"],
			c: 0,
		},
		{
			q: "Why is data preparation necessary before exploring data?",
			a: [
				"The data may need to be cleaned and organized",
				"It automatically creates a machine learning model",
				"It converts all data into images",
				"It removes the need for analysis",
			],
			c: 0,
		},
		{
			q: "What can happen when data is copied and pasted from a web page or document?",
			a: [
				"The data can have an incomplete or irregular format",
				"The data always becomes perfectly formatted",
				"The data is automatically converted to binary",
				"The data is automatically analyzed",
			],
			c: 0,
		},
		{
			q: "What is one problem that can occur when pasting data into a spreadsheet?",
			a: [
				"All the data may be placed into one cell",
				"All the data is deleted",
				"The data becomes encrypted",
				"The spreadsheet becomes a database",
			],
			c: 0,
		},
		{
			q: "Why might editing a data file by hand be impractical?",
			a: [
				"The file could contain millions of lines",
				"The file may contain only one line",
				"The file cannot contain numbers",
				"The file is always encrypted",
			],
			c: 0,
		},

		// DATA CLEANING EXAMPLE
		{
			q: "In the wine spending example, what could be stored in the same cell?",
			a: [
				"The college name and amount spent on wine",
				"A password and username",
				"A date and file name",
				"A city and country",
			],
			c: 0,
		},
		{
			q: "What type of unwanted information can appear in a dataset?",
			a: ["Unwanted text", "Only numbers", "Only formulas", "Only headers"],
			c: 0,
		},
		{
			q: "What is another issue that can occur in a poorly prepared dataset?",
			a: [
				"Extra rows",
				"Automatic sorting",
				"Automatic validation",
				"Encrypted columns",
			],
			c: 0,
		},
		{
			q: "What kind of information may be missing from an incomplete dataset?",
			a: [
				"Required data values",
				"File extensions",
				"Computer programs",
				"Regular expressions",
			],
			c: 0,
		},
		{
			q: "What was an example of text that was incorrectly included with a value in the wine dataset?",
			a: ["A pound sign", "An HTML tag", "An IP address", "A comma"],
			c: 0,
		},
		{
			q: "What format can be used to separate fields using tabs?",
			a: ["TSV", "XML", "PNG", "MP3"],
			c: 0,
		},
		{
			q: "What does TSV stand for?",
			a: [
				"Tab-Separated Values",
				"Text-Structured Variables",
				"Typed Spreadsheet Values",
				"Table-Separated Variables",
			],
			c: 0,
		},
		{
			q: "What does CSV stand for?",
			a: [
				"Comma-Separated Values",
				"Computer-Separated Variables",
				"Categorical Structured Values",
				"Column-Sorted Values",
			],
			c: 0,
		},
		{
			q: "What can potentially be used to modify messy data automatically?",
			a: [
				"Regex or a program",
				"A video editor",
				"A graphics editor",
				"A media player",
			],
			c: 0,
		},
		{
			q: "When can editing a short data file by hand be reasonable?",
			a: [
				"When the file has around 30 lines",
				"When the file has 30 million lines",
				"When the file is encrypted",
				"When the file contains only images",
			],
			c: 0,
		},

		// REGULAR EXPRESSIONS
		{
			q: "What is a regular expression?",
			a: [
				"A language used to describe text patterns",
				"A database format",
				"A type of spreadsheet",
				"A programming language for graphics",
			],
			c: 0,
		},
		{
			q: "What does a regular expression describe?",
			a: [
				"A certain amount or pattern of text",
				"A computer's hardware",
				"A database schema",
				"A file's storage size",
			],
			c: 0,
		},
		{
			q: "What is required to use regular expressions?",
			a: [
				"A regular expression engine",
				"A graphics card",
				"A database server",
				"An XML file",
			],
			c: 0,
		},
		{
			q: "What does a regular expression engine do?",
			a: [
				"Processes expressions and attempts to match them to a string",
				"Converts images into pixels",
				"Stores data in a database",
				"Calculates averages",
			],
			c: 0,
		},
		{
			q: "Which programming language has a regular expression engine?",
			a: ["Python", "C#", "Swift", "Kotlin"],
			c: 0,
		},
		{
			q: "Which programming language has a regular expression engine?",
			a: ["Java", "C++", "JavaScript", "R"],
			c: 0,
		},
		{
			q: "Are regular expressions always completely compatible between different languages and tools?",
			a: [
				"No, they can use slightly different syntax",
				"Yes, they always use identical syntax",
				"Only in Python",
				"Only in Java",
			],
			c: 0,
		},
		{
			q: "What is one use of Regex in data preparation?",
			a: [
				"Identifying, cleaning, and transforming messy text",
				"Creating images",
				"Running databases",
				"Calculating hardware performance",
			],
			c: 0,
		},
		{
			q: "How can Regex help with data cleaning and standardization?",
			a: [
				"It can locate variations and standardize them",
				"It automatically creates new datasets",
				"It converts all data to images",
				"It deletes every text value",
			],
			c: 0,
		},
		{
			q: "What Regex concept can be used to find non-digit characters?",
			a: ["\\D", "\\s+", "\\d+", "\\W"],
			c: 0,
		},

		// REGEX USES
		{
			q: "What can \\s+ be used to help clean?",
			a: ["Whitespace", "Numbers", "Images", "Dates only"],
			c: 0,
		},
		{
			q: "What can Regex remove from numerical data?",
			a: [
				"Currency symbols, parentheses, or dashes",
				"Only decimal points",
				"Database tables",
				"File extensions",
			],
			c: 0,
		},
		{
			q: "What can Regex help remove from text?",
			a: [
				"HTML tags or markdown markers",
				"Computer hardware",
				"Database records",
				"Image pixels",
			],
			c: 0,
		},
		{
			q: "What is one use of Regex for information extraction?",
			a: [
				"Extracting timestamps from logs",
				"Calculating variance",
				"Creating spreadsheets",
				"Sorting images",
			],
			c: 0,
		},
		{
			q: "What can Regex extract from server log files?",
			a: [
				"IP addresses or error codes",
				"Images or videos",
				"Excel formulas",
				"Audio files",
			],
			c: 0,
		},
		{
			q: "What can Regex do with a raw email string?",
			a: [
				"Pull out a domain name",
				"Convert it into an image",
				"Calculate its mean",
				"Store it as binary",
			],
			c: 0,
		},
		{
			q: "How can Regex help with dates?",
			a: [
				"Break a date into components such as day, month, and year",
				"Automatically predict future dates",
				"Remove every date",
				"Convert dates into images",
			],
			c: 0,
		},
		{
			q: "What date format is given as an example for universal formatting?",
			a: ["YYYY-MM-DD", "DD-YYYY-MM", "MM-DD-YYYY", "YYYY-DD-MM"],
			c: 0,
		},
		{
			q: "How can Regex be used for data validation?",
			a: [
				"It can check whether incoming text fits required patterns",
				"It automatically fills in missing values",
				"It calculates standard deviation",
				"It creates charts",
			],
			c: 0,
		},
		{
			q: "What can Regex validate?",
			a: [
				"Email addresses, ZIP codes, and Social Security Numbers",
				"Images, videos, and audio",
				"Means, medians, and modes",
				"Databases and spreadsheets",
			],
			c: 0,
		},

		// STATISTICS
		{
			q: "What are three types of statistical measures?",
			a: [
				"Central tendency, spread, and correlations",
				"Classification, regression, and clustering",
				"Mean, XML, and Regex",
				"Text, binary, and categorical",
			],
			c: 0,
		},
		{
			q: "What is the mean?",
			a: [
				"The sum of the values divided by the number of values",
				"The most common value",
				"The middle value only",
				"The largest value",
			],
			c: 0,
		},
		{
			q: "What is another name for the mean?",
			a: ["Average", "Median", "Mode", "Range"],
			c: 0,
		},
		{
			q: "What is the median?",
			a: [
				"The value separating the higher half from the lower half",
				"The most frequently occurring value",
				"The largest value",
				"The difference between two values",
			],
			c: 0,
		},
		{
			q: "What is the mode?",
			a: [
				"The value that appears most often",
				"The middle value",
				"The average value",
				"The smallest value",
			],
			c: 0,
		},
		{
			q: "What is the range?",
			a: [
				"The difference between the largest and smallest values",
				"The average of all values",
				"The middle value",
				"The most common value",
			],
			c: 0,
		},
		{
			q: "What is variance used to describe?",
			a: [
				"How far a set of numbers is spread out from its average",
				"The middle value of a dataset",
				"The most common value",
				"The largest value",
			],
			c: 0,
		},
		{
			q: "What is standard deviation?",
			a: [
				"The square root of the variance",
				"The square of the variance",
				"The average of the dataset",
				"The difference between the mean and median",
			],
			c: 0,
		},
		{
			q: "What does Pearson correlation measure?",
			a: [
				"The strength of the connection between two variables",
				"The number of values in a dataset",
				"The largest value in a dataset",
				"The amount of missing data",
			],
			c: 0,
		},
		{
			q: "What range can Pearson correlation have?",
			a: ["-1 to 1", "0 to 100", "-100 to 100", "1 to 10"],
			c: 0,
		},

		// CORRELATION
		{
			q: "What does a Pearson correlation of -1 represent?",
			a: [
				"A perfect negative correlation",
				"No correlation",
				"A perfect positive correlation",
				"A weak correlation",
			],
			c: 0,
		},
		{
			q: "What does a Pearson correlation of 0 represent?",
			a: [
				"No correlation",
				"A perfect negative correlation",
				"A perfect positive correlation",
				"A perfect nonlinear correlation",
			],
			c: 0,
		},
		{
			q: "What does a Pearson correlation of 1 represent?",
			a: [
				"A perfect positive correlation",
				"No correlation",
				"A perfect negative correlation",
				"A weak correlation",
			],
			c: 0,
		},
		{
			q: "What does Pearson correlation basically attempt to do?",
			a: [
				"Draw a line of best fit through the data",
				"Remove missing values",
				"Calculate the median",
				"Group data into categories",
			],
			c: 0,
		},
		{
			q: "What type of correlations does Pearson correlation work for?",
			a: [
				"Linear correlations",
				"Only categorical correlations",
				"Only nonlinear correlations",
				"Only text correlations",
			],
			c: 0,
		},
		{
			q: "Does finding a correlation necessarily mean that one variable causes another?",
			a: [
				"No",
				"Yes",
				"Only when the correlation is 1",
				"Only when the correlation is -1",
			],
			c: 0,
		},

		// DATASETS & STATISTICS
		{
			q: "What are three problems that data science datasets can be used to solve?",
			a: [
				"Classification, regression, and clustering",
				"Sorting, searching, and compiling",
				"Encryption, compression, and networking",
				"Testing, debugging, and deployment",
			],
			c: 0,
		},
		{
			q: "What are the two main types of statistics?",
			a: [
				"Descriptive and inferential statistics",
				"Quantitative and categorical statistics",
				"Linear and nonlinear statistics",
				"Discrete and continuous statistics",
			],
			c: 0,
		},
		{
			q: "What does descriptive statistics help us do?",
			a: [
				"Simplify and organize large amounts of data",
				"Predict the future with certainty",
				"Create machine learning models",
				"Remove all outliers",
			],
			c: 0,
		},
		{
			q: "Why is descriptive statistics useful?",
			a: [
				"It makes large amounts of data easier to understand",
				"It guarantees accurate predictions",
				"It removes the need for data collection",
				"It converts data into binary",
			],
			c: 0,
		},
		{
			q: "What does inferential statistics use to make conclusions about a larger group?",
			a: [
				"A small amount of data",
				"Every possible data point",
				"Only categorical data",
				"Only historical data",
			],
			c: 0,
		},
		{
			q: "What larger group are inferential statistics used to draw conclusions about?",
			a: ["A population", "A sample", "A variable", "A dataset column"],
			c: 0,
		},

		// MEASURES OF CENTRAL TENDENCY
		{
			q: "What is the arithmetic mean?",
			a: [
				"The sum of the values divided by the number of values",
				"The most frequently occurring value",
				"The middle value",
				"The largest value",
			],
			c: 0,
		},
		{
			q: "What is another name for the arithmetic mean?",
			a: ["Average", "Mode", "Median", "Range"],
			c: 0,
		},
		{
			q: "What is the geometric mean useful for?",
			a: [
				"Comparing values that change over time",
				"Finding the largest value",
				"Finding the middle value",
				"Counting categories",
			],
			c: 0,
		},
		{
			q: "What type of values is the geometric mean especially useful for?",
			a: [
				"Growth rates or percentages",
				"Only whole numbers",
				"Only categorical values",
				"Only negative values",
			],
			c: 0,
		},
		{
			q: "Which is an example where the geometric mean can be useful?",
			a: [
				"Investment returns",
				"Finding a student's mode",
				"Counting computers",
				"Finding the maximum value",
			],
			c: 0,
		},
		{
			q: "When values vary greatly, which mean can be useful?",
			a: ["Geometric mean", "Mode", "Median", "Range"],
			c: 0,
		},
		{
			q: "What is the mode?",
			a: [
				"The value that has the maximum frequency",
				"The value in the middle",
				"The average of all values",
				"The largest value",
			],
			c: 0,
		},
		{
			q: "What is the median?",
			a: [
				"The value that divides a set into two equal parts",
				"The most common value",
				"The average of all values",
				"The difference between two values",
			],
			c: 0,
		},
		{
			q: "In a dataset, what does the median separate?",
			a: [
				"The observations above and below it",
				"The largest and smallest values",
				"The positive and negative values",
				"The categorical and numerical values",
			],
			c: 0,
		},

		// VARIABILITY & STANDARD DEVIATION
		{
			q: "What do measures of spread describe?",
			a: [
				"Variability in the data",
				"The most common value",
				"The middle value",
				"The number of categories",
			],
			c: 0,
		},
		{
			q: "What is standard deviation?",
			a: [
				"The square root of the variance",
				"The square of the variance",
				"The average of the values",
				"The difference between the mean and median",
			],
			c: 0,
		},
		{
			q: "Why is standard deviation calculated as the square root of variance?",
			a: [
				"So it has the same units as the individual values",
				"So it becomes a percentage",
				"So it removes outliers",
				"So it becomes a correlation",
			],
			c: 0,
		},
		{
			q: "What problem occurs with the units of variance?",
			a: [
				"They are not the same as the units of the individual values",
				"They cannot contain numbers",
				"They are always percentages",
				"They are always negative",
			],
			c: 0,
		},
		{
			q: "What does standard deviation allow us to do regarding units?",
			a: [
				"Use the same units as the individual data values",
				"Remove the units completely",
				"Convert the values to percentages",
				"Change the values into categories",
			],
			c: 0,
		},

		// CORRELATION & COVARIANCE
		{
			q: "What does correlation measure?",
			a: [
				"The relationship between two variables",
				"The number of observations",
				"The spread of one variable",
				"The middle of a dataset",
			],
			c: 0,
		},
		{
			q: "What is the possible range of a correlation value?",
			a: ["-1 to 1", "0 to 100", "-100 to 100", "1 to 10"],
			c: 0,
		},
		{
			q: "What does a correlation of -1 represent?",
			a: [
				"A perfect negative correlation",
				"No correlation",
				"A perfect positive correlation",
				"A weak correlation",
			],
			c: 0,
		},
		{
			q: "What does a correlation of 0 represent?",
			a: [
				"No correlation at all",
				"A perfect negative correlation",
				"A perfect positive correlation",
				"Maximum correlation",
			],
			c: 0,
		},
		{
			q: "What does a correlation of 1 represent?",
			a: [
				"A perfect correlation",
				"No correlation",
				"A perfect negative correlation",
				"A weak correlation",
			],
			c: 0,
		},
		{
			q: "What does covariance measure?",
			a: [
				"The relationship between two variables",
				"The middle value of a dataset",
				"The frequency of a value",
				"The number of categories",
			],
			c: 0,
		},
		{
			q: "What range can covariance take?",
			a: [
				"Negative infinity to positive infinity",
				"-1 to 1",
				"0 to 1",
				"0 to 100",
			],
			c: 0,
		},
		{
			q: "What does covariance help us understand?",
			a: [
				"The direction of a relationship",
				"Only the strength of a relationship",
				"The median of a dataset",
				"The number of outliers",
			],
			c: 0,
		},
		{
			q: "What does covariance assess?",
			a: [
				"How much two variables change together",
				"How many values are in a dataset",
				"How far values are from zero",
				"How many categories exist",
			],
			c: 0,
		},
		{
			q: "What does correlation show compared with covariance?",
			a: [
				"Both direction and strength",
				"Only direction",
				"Only frequency",
				"Only the average",
			],
			c: 0,
		},
		{
			q: "What does covariance mainly show?",
			a: [
				"The direction of the relationship",
				"The exact strength on a -1 to 1 scale",
				"The median",
				"The standard deviation",
			],
			c: 0,
		},
		{
			q: "If two variables increase together, what type of relationship would covariance indicate?",
			a: [
				"A positive relationship",
				"A negative relationship",
				"No relationship",
				"A categorical relationship",
			],
			c: 0,
		},

		// QUARTILES & IQR
		{
			q: "What do quartiles divide a dataset into?",
			a: [
				"Four equal parts",
				"Two equal parts",
				"Three equal parts",
				"Five equal parts",
			],
			c: 0,
		},
		{
			q: "What does Q1 represent?",
			a: [
				"The first quartile and the median of the lower half",
				"The middle value of the entire dataset",
				"The median of the upper half",
				"The largest value",
			],
			c: 0,
		},
		{
			q: "What percentage of the data is below Q1?",
			a: ["25%", "50%", "75%", "100%"],
			c: 0,
		},
		{
			q: "What is Q2?",
			a: [
				"The second quartile or median",
				"The first quartile",
				"The third quartile",
				"The range",
			],
			c: 0,
		},
		{
			q: "What does Q2 divide the dataset into?",
			a: [
				"Two equal parts",
				"Four equal parts",
				"Three equal parts",
				"Two unequal parts",
			],
			c: 0,
		},
		{
			q: "What does Q3 represent?",
			a: [
				"The median of the upper half",
				"The median of the lower half",
				"The middle value of the entire dataset",
				"The minimum value",
			],
			c: 0,
		},
		{
			q: "What percentage of the data does Q3 separate from the top?",
			a: ["25%", "50%", "75%", "10%"],
			c: 0,
		},
		{
			q: "What does IQR stand for?",
			a: [
				"Interquartile Range",
				"Internal Quartile Range",
				"Individual Quantitative Range",
				"Interrelated Quartile Range",
			],
			c: 0,
		},
		{
			q: "What is the interquartile range?",
			a: [
				"The range between Q1 and Q3",
				"The range between the minimum and maximum",
				"The difference between the mean and median",
				"The range between Q2 and Q3",
			],
			c: 0,
		},
		{
			q: "Why is IQR useful when compared with the regular range?",
			a: [
				"It is less sensitive to extreme values",
				"It always has a larger value",
				"It removes the median",
				"It measures correlation",
			],
			c: 0,
		},
		{
			q: "What should be done before calculating Q1 and Q3 for IQR?",
			a: [
				"Arrange the data in ascending order",
				"Remove the median",
				"Calculate the correlation",
				"Convert the data to percentages",
			],
			c: 0,
		},

		// OUTLIERS & SKEWNESS
		{
			q: "What can IQR be used for?",
			a: [
				"Outlier detection",
				"Calculating correlation",
				"Finding the mode only",
				"Creating categorical data",
			],
			c: 0,
		},
		{
			q: "In which areas is IQR being used for outlier detection?",
			a: [
				"Finance, healthcare, and quality control",
				"Gaming, networking, and programming",
				"Education, music, and art",
				"Sports, travel, and weather",
			],
			c: 0,
		},
		{
			q: "When is a data point considered an outlier using the IQR method?",
			a: [
				"When it falls outside Q1 - 1.5 × IQR or Q3 + 1.5 × IQR",
				"When it is equal to the median",
				"When it is below Q2",
				"When it is equal to Q1",
			],
			c: 0,
		},
		{
			q: "What does skewness tell us?",
			a: [
				"Whether data points are skewed left or right in relation to the mean",
				"How many values are in a dataset",
				"The correlation between two variables",
				"The number of categories",
			],
			c: 0,
		},
		{
			q: "What does skewness based on quartiles examine?",
			a: [
				"The distances between the quartiles",
				"The number of observations",
				"The maximum and minimum values only",
				"The correlation between variables",
			],
			c: 0,
		},
		{
			q: "In a symmetric distribution, what should ideally be equal?",
			a: [
				"Q3 minus the median and the median minus Q1",
				"Q1 and Q3",
				"The mean and mode only",
				"The minimum and maximum",
			],
			c: 0,
		},

		// DISTRIBUTIONS & FREQUENCY
		{
			q: "What does a histogram represent?",
			a: [
				"The frequency of each interval of continuous data",
				"The relationship between two variables",
				"Only categorical data",
				"The median of a dataset",
			],
			c: 0,
		},
		{
			q: "How are the bars in a histogram described?",
			a: [
				"They have equal width",
				"They have random widths",
				"They overlap completely",
				"They are circular",
			],
			c: 0,
		},
		{
			q: "What does a frequency polygon use to represent frequency?",
			a: [
				"Lines connecting frequency points",
				"Circular slices",
				"Bars only",
				"Quartiles",
			],
			c: 0,
		},
		{
			q: "How is a frequency polygon different from a histogram?",
			a: [
				"It uses lines instead of bars",
				"It only displays categorical data",
				"It does not display frequency",
				"It only displays outliers",
			],
			c: 0,
		},
		{
			q: "What does a pie chart show?",
			a: [
				"Proportional sizes as slices of a circle",
				"Continuous data using bars",
				"Correlation between variables",
				"The median of a dataset",
			],
			c: 0,
		},
		{
			q: "What is a normal distribution?",
			a: [
				"A symmetrical, bell-shaped distribution with data concentrated around the mean",
				"A distribution with only negative values",
				"A distribution with no mean",
				"A distribution containing only outliers",
			],
			c: 0,
		},
		{
			q: "What is a skewed distribution?",
			a: [
				"A distribution that is not symmetric",
				"A perfectly symmetrical distribution",
				"A distribution with no median",
				"A distribution with no variables",
			],
			c: 0,
		},

		// INFERENTIAL STATISTICS & CONFIDENCE INTERVALS
		{
			q: "Why is analyzing an entire population often impossible?",
			a: [
				"The entire population may be too large to analyze",
				"Populations cannot contain data",
				"Populations only contain categorical data",
				"Statistics cannot be used on populations",
			],
			c: 0,
		},
		{
			q: "What do we collect instead of analyzing an entire population?",
			a: ["A sample", "A histogram", "A quartile", "A correlation"],
			c: 0,
		},
		{
			q: "What can inferential statistics help us do with a sample?",
			a: [
				"Make conclusions about the whole population",
				"Remove the population",
				"Guarantee the result",
				"Convert the sample into binary",
			],
			c: 0,
		},
		{
			q: "What do confidence intervals help quantify?",
			a: [
				"Uncertainty of an estimate",
				"The mode of a dataset",
				"The number of variables",
				"The correlation strength",
			],
			c: 0,
		},
		{
			q: "What does a confidence interval provide?",
			a: [
				"A range of values",
				"A single guaranteed value",
				"A frequency table",
				"A correlation coefficient",
			],
			c: 0,
		},
		{
			q: "In the example, if the mean is 4.63 and the standard deviation is 0.54, what is the stated 95% confidence interval?",
			a: ["4.480 to 4.780", "3.63 to 5.63", "4.09 to 5.17", "0.54 to 4.63"],
			c: 0,
		},

		// PYTHON
		{
			q: "What programming language does the final slide introduce?",
			a: ["Python", "Java", "C++", "C#"],
			c: 0,
		},
		{
			q: "What does Python have that is useful for data analysis and learning?",
			a: [
				"Many functions and libraries",
				"Only graphics tools",
				"Only database tools",
				"Only networking libraries",
			],
			c: 0,
		},

		// R BASICS
		{
			q: "What programming language is introduced in Unit 02b?",
			a: ["R", "Python", "Java", "C++"],
			c: 0,
		},
		{
			q: "What topics are mentioned as part of R basics?",
			a: [
				"Variables, vectors, and loops",
				"Classes, objects, and inheritance",
				"HTML, CSS, and JavaScript",
				"Threads, sockets, and processes",
			],
			c: 0,
		},
		{
			q: "What can be used when help is needed for R functions?",
			a: [
				"The help() function",
				"The assist() function",
				"The guide() function",
				"The manual() function",
			],
			c: 0,
		},
		{
			q: "What example is given for getting help with a function such as mean?",
			a: ["help(mean)", "mean(help)", "?mean only", "gethelp(mean)"],
			c: 0,
		},

		// CENTRAL TENDENCY WITH R
		{
			q: "Which statistical topic is demonstrated using R?",
			a: [
				"Measures of central tendency",
				"Network security",
				"File compression",
				"Machine learning classification",
			],
			c: 0,
		},
		{
			q: "Which R function can be used to calculate the mean?",
			a: ["mean()", "average()", "avg()", "central()"],
			c: 0,
		},
		{
			q: "What type of statistical measure does mean() calculate?",
			a: ["Mean", "Median", "Mode", "Range"],
			c: 0,
		},
		{
			q: "What can you use when you need information about how to use mean() in R?",
			a: ["help(mean)", "mean.info()", "info(mean)", "describe(mean)"],
			c: 0,
		},

		// SPREAD & VARIABILITY
		{
			q: "Which R function is used to calculate variance?",
			a: ["var()", "variance()", "spread()", "sdvar()"],
			c: 0,
		},
		{
			q: "What statistical concept does var() calculate?",
			a: ["Variance", "Mean", "Median", "Correlation"],
			c: 0,
		},
		{
			q: "Which topic is demonstrated with the var() function?",
			a: [
				"Measures of spread or variability",
				"Measures of central tendency only",
				"Frequency labels",
				"Data visualization only",
			],
			c: 0,
		},
		{
			q: "Which R function is associated with calculating quartiles and summary statistics?",
			a: ["quantile()", "quartile()", "fourparts()", "split()"],
			c: 0,
		},
		{
			q: "Which R function can provide a statistical summary of data?",
			a: ["summary()", "statistics()", "statsummary()", "describeData()"],
			c: 0,
		},
		{
			q: "Which R function is listed alongside summary(), quantile(), and IQR()?",
			a: ["fivenum()", "fournum()", "fivevalues()", "five()"],
			c: 0,
		},
		{
			q: "What does IQR() represent?",
			a: [
				"Interquartile range",
				"Individual quantitative range",
				"Internal quantity ratio",
				"Indexed quartile result",
			],
			c: 0,
		},
		{
			q: "Which R function can calculate the interquartile range?",
			a: ["IQR()", "range4()", "quartileRange()", "spread()"],
			c: 0,
		},
		{
			q: "Which R function can calculate quantiles?",
			a: ["quantile()", "quartiles()", "q()", "percentile()"],
			c: 0,
		},
		{
			q: "What does the PDF note about calculating the 25% quantile in R?",
			a: [
				"R is a little different from the demonstrated method",
				"R cannot calculate it",
				"R always gives the same result as the manual method",
				"R only supports 50% quantiles",
			],
			c: 0,
		},

		// CORRELATION & COVARIANCE
		{
			q: "Which R function is used for correlation?",
			a: ["cor()", "corr()", "correlation()", "relate()"],
			c: 0,
		},
		{
			q: "What statistical relationship can be calculated with cor()?",
			a: ["Correlation", "Variance", "Median", "Frequency"],
			c: 0,
		},
		{
			q: "Which R function is used for covariance?",
			a: ["cov()", "covariance()", "co()", "relationship()"],
			c: 0,
		},
		{
			q: "What statistical relationship can be calculated with cov()?",
			a: ["Covariance", "Correlation", "Mode", "IQR"],
			c: 0,
		},
		{
			q: "Which function would you use to calculate correlation between two columns in R?",
			a: ["cor()", "cov()", "mean()", "hist()"],
			c: 0,
		},
		{
			q: "Which function would you use to calculate covariance between two columns in R?",
			a: ["cov()", "cor()", "var()", "plot()"],
			c: 0,
		},

		// HISTOGRAMS
		{
			q: "What type of graph is demonstrated in R using hist()?",
			a: ["Histogram", "Scatter plot", "Pie chart", "Frequency polygon"],
			c: 0,
		},
		{
			q: "Which R function creates a histogram?",
			a: ["hist()", "histogram()", "bar()", "frequency()"],
			c: 0,
		},
		{
			q: "What function is used in the example with x <- c(40, 41, 42, 43, 50)?",
			a: ["hist(x)", "plot(x)", "pie(x)", "graph(x)"],
			c: 0,
		},
		{
			q: "What type of skew does the histogram example with 40, 41, 42, 43, and 50 have?",
			a: ["Positive skew", "Negative skew", "No skew", "Perfect symmetry"],
			c: 0,
		},
		{
			q: "Which function is used to create another histogram after changing the values of x?",
			a: ["hist()", "plot()", "pie()", "lines()"],
			c: 0,
		},
		{
			q: "What type of data visualization is a histogram?",
			a: [
				"A frequency distribution graph",
				"A relationship graph between two variables",
				"A circular graph",
				"A line graph",
			],
			c: 0,
		},

		// SCATTER PLOTS
		{
			q: "Which R function is used to create scatter plots?",
			a: ["plot()", "scatter()", "points()", "graph()"],
			c: 0,
		},
		{
			q: "What type of graph is demonstrated using plot()?",
			a: ["Scatter plot", "Histogram", "Pie chart", "Frequency polygon"],
			c: 0,
		},
		{
			q: "What can the plot() function be used for in the examples?",
			a: [
				"Creating scatter plots",
				"Calculating variance",
				"Finding quartiles",
				"Calculating covariance only",
			],
			c: 0,
		},
		{
			q: "Which R function can be used to add lines to plots?",
			a: ["lines()", "addline()", "line()", "drawlines()"],
			c: 0,
		},
		{
			q: "What does the lines() function allow you to do?",
			a: [
				"Add lines to plots",
				"Calculate correlation",
				"Create a data frame",
				"Calculate the mean",
			],
			c: 0,
		},

		// PIE CHARTS
		{
			q: "Which R function is used to create a pie chart?",
			a: ["pie()", "chart()", "circle()", "piechart()"],
			c: 0,
		},
		{
			q: "What type of graph does pie() create?",
			a: ["Pie chart", "Histogram", "Scatter plot", "Frequency polygon"],
			c: 0,
		},

		{
			q: "What does lbls contain in the pie chart example?",
			a: [
				"Labels such as US, UK, and Australia",
				"Numerical slice values",
				"The percentages",
				"The chart title",
			],
			c: 0,
		},
		{
			q: "What function is used to calculate percentages in the pie chart example?",
			a: ["round()", "percent()", "percentage()", "calcpercent()"],
			c: 0,
		},
		{
			q: "What operation is used to calculate the percentages for the pie chart?",
			a: [
				"slices/sum(slices)*100",
				"slices*sum(slices)",
				"sum(slices)/100",
				"slices/100",
			],
			c: 0,
		},
		{
			q: "What function is used to combine the labels and percentages?",
			a: ["paste()", "combine()", "join()", "merge()"],
			c: 0,
		},
		{
			q: "What argument is used to specify the labels in the pie() function?",
			a: ["labels", "lbl", "names", "text"],
			c: 0,
		},
		{
			q: "What argument is used to specify the title of the pie chart?",
			a: ["main", "title", "heading", "caption"],
			c: 0,
		},

		// ARRAYS & DATA FRAMES
		{
			q: "What data structure is specifically demonstrated after arrays?",
			a: ["Data frame", "Linked list", "Hash table", "Binary tree"],
			c: 0,
		},
		{
			q: "Which built-in R dataset is used to demonstrate data frames?",
			a: ["mtcars", "iris", "wine", "diabetes"],
			c: 0,
		},
		{
			q: "What does mtcars[1,] select?",
			a: [
				"The first row of mtcars",
				"The first column of mtcars",
				"Rows 1 through 3",
				"The mpg column",
			],
			c: 0,
		},
		{
			q: "What does mtcars[1:3,] select?",
			a: [
				"Rows 1 through 3",
				"Columns 1 through 3",
				"The first three values",
				"The first three named columns",
			],
			c: 0,
		},
		{
			q: "What does mtcars[1] select?",
			a: [
				"The first column",
				"The first row",
				"The first three rows",
				"The mpg column only",
			],
			c: 0,
		},
		{
			q: 'What does mtcars["mpg"] access?',
			a: [
				"The mpg column",
				"The first row",
				"The first three rows",
				"The hp column",
			],
			c: 0,
		},
		{
			q: 'What does mtcars[c("mpg", "hp")] access?',
			a: [
				"The mpg and hp columns",
				"Rows 1 and 2",
				"The first two values",
				"Only the mpg column",
			],
			c: 0,
		},
		{
			q: "What symbol is used to read columns from a dataset in R?",
			a: ["$", "@", "#", "%"],
			c: 0,
		},
		{
			q: "Which dataset is used in the final example of the PDF?",
			a: ["Iris plants data", "California Housing", "Diabetes", "mtcars only"],
			c: 0,
		},
		{
			q: "Which function is used to display the first part of the iris dataset?",
			a: ["head(iris)", "first(iris)", "show(iris)", "top(iris)"],
			c: 0,
		},
		{
			q: "Which function is used to create plots of the iris dataset?",
			a: ["plot()", "irisplot()", "graph()", "draw()"],
			c: 0,
		},

		{
			q: "What software is covered in Unit/Week 03a?",
			a: ["Python and R", "C++ and Java", "SQL and C#", "JavaScript and PHP"],
			c: 0,
		},
		{
			q: "What software can be installed using WinPython?",
			a: ["Python", "R", "SQL", "Java"],
			c: 0,
		},
		{
			q: "What type of file is used in the Python diabetes example?",
			a: ["CSV", "JSON", "XML", "TXT"],
			c: 0,
		},
		{
			q: "What dataset is used in the Python CSV reading example?",
			a: ["diabetes.csv", "iris.csv", "faithful.csv", "plants.csv"],
			c: 0,
		},
		{
			q: "What is one task performed on the diabetes data in Python?",
			a: [
				"Removing outliers",
				"Creating a website",
				"Encrypting the data",
				"Converting it to audio",
			],
			c: 0,
		},
		{
			q: "What type of visualization is used for correlations in Python?",
			a: ["Heatmap", "Pie chart", "Box plot", "Cumulative graph"],
			c: 0,
		},
		{
			q: "What is plotted when examining the distribution of a variable in Python?",
			a: [
				"The distribution of the variable",
				"Only categorical labels",
				"Only outliers",
				"The file size",
			],
			c: 0,
		},
		{
			q: "What is the purpose of normalizing data?",
			a: [
				"To make the minimum 0 and maximum 1",
				"To remove every value below zero",
				"To make every value equal",
				"To convert numbers into text",
			],
			c: 0,
		},
		{
			q: "What value should the minimum become after normalization?",
			a: ["0", "1", "-1", "100"],
			c: 0,
		},
		{
			q: "What value should the maximum become after normalization?",
			a: ["1", "0", "-1", "100"],
			c: 0,
		},
		{
			q: "What is subtracted from a value during normalization?",
			a: ["The minimum", "The maximum", "The mean", "The median"],
			c: 0,
		},
		{
			q: "What is the denominator used in the normalization process?",
			a: [
				"The range (max-min)",
				"The mean",
				"The median",
				"The standard deviation",
			],
			c: 0,
		},
		{
			q: "Which formula represents the normalization process described in the slides?",
			a: [
				"(value-min)/(max-min)",
				"(value+min)/(max-min)",
				"(value-max)/(max+min)",
				"value/(mean+median)",
			],
			c: 0,
		},
		{
			q: "What is the normalized minimum of the dataset (1,2,3,3,3,4,5)?",
			a: ["0", "1", "-1", "5"],
			c: 0,
		},
		{
			q: "What is the normalized maximum of the dataset (1,2,3,3,3,4,5)?",
			a: ["1", "0", "5", "-1"],
			c: 0,
		},
		{
			q: "What is the range of the dataset (1,2,3,3,3,4,5)?",
			a: ["4", "5", "3", "6"],
			c: 0,
		},
		{
			q: "What is the range of the dataset (6,7,8,8,8,9,10)?",
			a: ["4", "10", "6", "8"],
			c: 0,
		},
		{
			q: "What is the range of the dataset (1,2,4,8,16,101)?",
			a: ["100", "101", "99", "102"],
			c: 0,
		},
		{
			q: "Which Python topic follows the introduction of normalization?",
			a: [
				"Standardizing data",
				"Reading CSV files",
				"Correlation heatmaps",
				"Removing outliers",
			],
			c: 0,
		},
		{
			q: "What is another data preprocessing technique covered in Unit 03a?",
			a: [
				"Standardizing data",
				"Sorting alphabetically",
				"Encrypting files",
				"Compressing images",
			],
			c: 0,
		},
		{
			q: "What is one advantage of data preprocessing?",
			a: [
				"Improves data quality",
				"Removes the need for analysis",
				"Makes all data identical",
				"Prevents data from being stored",
			],
			c: 0,
		},
		{
			q: "How does data preprocessing improve data quality?",
			a: [
				"It cleans and organizes raw data",
				"It deletes all numerical data",
				"It converts data into images",
				"It removes every feature",
			],
			c: 0,
		},
		{
			q: "How can data preprocessing enhance model accuracy?",
			a: [
				"By removing noise and irrelevant data",
				"By increasing the number of errors",
				"By deleting the target variable",
				"By making every value identical",
			],
			c: 0,
		},
		{
			q: "How can preprocessing help reduce overfitting?",
			a: [
				"By handling outliers and redundant features",
				"By adding random errors",
				"By removing all training data",
				"By avoiding model evaluation",
			],
			c: 0,
		},
		{
			q: "How can scaled data affect training speed?",
			a: [
				"It can reduce computation time",
				"It always doubles computation time",
				"It prevents training",
				"It makes computation impossible",
			],
			c: 0,
		},
		{
			q: "Why does preprocessing help ensure algorithm compatibility?",
			a: [
				"It converts data into suitable formats for learning models",
				"It removes all algorithms",
				"It converts models into spreadsheets",
				"It prevents data from being analyzed",
			],
			c: 0,
		},
		{
			q: "Which dataset is used in the Python example involving iris plants?",
			a: ["iris.csv", "diabetes.csv", "faithful.csv", "plants.txt"],
			c: 0,
		},
		{
			q: "What type of plot is discussed in R with numerical data?",
			a: ["Scatter plot", "Pie chart", "Bar chart", "Histogram only"],
			c: 0,
		},
		{
			q: "Which R dataset is used for the scatter plot example?",
			a: ["faithful", "iris.csv", "diabetes", "mtcars"],
			c: 0,
		},
		{
			q: "What does the R 'faithful' dataset contain?",
			a: [
				"Observations of the Old Faithful geyser",
				"Measurements of iris flowers",
				"Diabetes patient records",
				"Car specifications",
			],
			c: 0,
		},
		{
			q: "Where is the Old Faithful geyser located according to the slides?",
			a: [
				"Yellowstone National Park",
				"Banff National Park",
				"Algonquin Park",
				"Jasper National Park",
			],
			c: 0,
		},
		{
			q: "What does the first feature in the faithful dataset represent?",
			a: [
				"Duration of geyser eruptions",
				"Waiting time until an eruption",
				"Temperature",
				"Number of eruptions",
			],
			c: 0,
		},
		{
			q: "What unit is used for eruption duration in the faithful dataset?",
			a: ["Minutes", "Seconds", "Hours", "Days"],
			c: 0,
		},
		{
			q: "What does the second feature in the faithful dataset represent?",
			a: [
				"Waiting period until the next eruption",
				"Duration of the eruption",
				"Temperature of the geyser",
				"Height of the geyser",
			],
			c: 0,
		},
		{
			q: "What can scatter plots be used to visually examine?",
			a: ["Correlations", "File sizes", "Passwords", "Program execution time"],
			c: 0,
		},
		{
			q: "Which other R dataset is suggested for visually seeing correlations?",
			a: ["iris", "faithful", "diabetes", "cars"],
			c: 0,
		},
		{
			q: "What type of graph is discussed for cumulative relative frequency in R?",
			a: [
				"Cumulative relative frequency graph",
				"Pie chart",
				"Scatter plot only",
				"Heatmap",
			],
			c: 0,
		},
		{
			q: "What does a cumulative relative frequency graph show?",
			a: [
				"The cumulative relative frequency distribution of a quantitative variable",
				"Only categorical labels",
				"Only the mean",
				"Only the maximum value",
			],
			c: 0,
		},
		{
			q: "In the faithful example, what does a point on the cumulative relative frequency graph represent?",
			a: [
				"The frequency proportion of eruptions with durations less than or equal to a given level",
				"The average waiting time",
				"The maximum eruption duration",
				"The number of geysers",
			],
			c: 0,
		},
		{
			q: "What type of data is specifically discussed in the R categorical data section?",
			a: [
				"Categorical data",
				"Only continuous data",
				"Only time-series data",
				"Only image data",
			],
			c: 0,
		},
		{
			q: "How does R compute skewness according to the slides?",
			a: [
				"Using central moments",
				"Using only the median",
				"Using only the range",
				"Using a pie chart",
			],
			c: 0,
		},
		{
			q: "What statistical concept has a dedicated section after central moments?",
			a: [
				"Skewness",
				"Normalization",
				"Correlation heatmaps",
				"Outlier removal",
			],
			c: 0,
		},
		{
			q: "Which statistical concept has a dedicated section after skewness?",
			a: ["Kurtosis", "Normalization", "Covariance", "IQR"],
			c: 0,
		},
		{
			q: "What R help command is suggested for learning about kurtosis?",
			a: ["help(kurtosis)", "help(skewness)", "help(normal)", "help(plot)"],
			c: 0,
		},
		{
			q: "Which distribution is specifically covered in R near the end of Unit 03a?",
			a: [
				"Normal distribution",
				"Binomial distribution",
				"Poisson distribution",
				"Uniform distribution",
			],
			c: 0,
		},
		{
			q: "What type of plot is covered on the final page of Unit 03a?",
			a: ["Box plot", "Pie chart", "Heatmap", "Scatter plot"],
			c: 0,
		},
		{
			q: "Which topic is scheduled for Week 04 after Python and R?",
			a: [
				"Supervised Learning and Model Evaluations",
				"Unsupervised Learning only",
				"Data Preparation",
				"Test 1",
			],
			c: 0,
		},
		{
			q: "Which topic is scheduled for Week 05?",
			a: [
				"Unsupervised Learning and Clustering",
				"Python and R",
				"Data Preparation",
				"Model Evaluations only",
			],
			c: 0,
		},
		{
			q: "What occurs during Week 06 according to the tentative schedule?",
			a: [
				"Fall Study Week",
				"Test 1",
				"Introduction to Data Science",
				"Supervised Learning",
			],
			c: 0,
		},
		{
			q: "What is scheduled for Week 07?",
			a: [
				"Review on Tuesday and Test 1 on Thursday",
				"Fall Study Week",
				"Python installation",
				"Supervised Learning",
			],
			c: 0,
		},
		{
			q: "What review calculation is given at the beginning of Unit 03a?",
			a: [
				"Computing the IQR and determining outliers",
				"Computing a correlation heatmap",
				"Normalizing the data",
				"Creating a box plot",
			],
			c: 0,
		},

		{
			q: "What software is covered in Unit/Week 03b?",
			a: ["Python and R", "C++ and Java", "SQL and C#", "JavaScript and PHP"],
			c: 0,
		},
		{
			q: "What is one topic reviewed at the beginning of Unit 03b?",
			a: [
				"Python code calculations",
				"Database design",
				"Web development",
				"Object-oriented programming",
			],
			c: 0,
		},
		{
			q: "What does the R plot() review question involve?",
			a: [
				"Using 2 variables",
				"Using 10 variables",
				"Using only categorical data",
				"Using no variables",
			],
			c: 0,
		},
		{
			q: "What can an R plot with two variables help show?",
			a: [
				"The relationship between the variables",
				"The file size",
				"The program's memory usage",
				"The number of Python libraries",
			],
			c: 0,
		},
		{
			q: "What does a correlation heatmap show?",
			a: [
				"Correlations between variables",
				"Only variable names",
				"Only missing values",
				"The order of rows",
			],
			c: 0,
		},
		{
			q: "What should be identified when examining a correlation heatmap?",
			a: [
				"The largest and smallest correlations",
				"Only the first variable",
				"Only the diagonal values",
				"The number of rows",
			],
			c: 0,
		},
		{
			q: "What can the largest and smallest correlations help explain?",
			a: [
				"Relationships between variables",
				"The computer's CPU speed",
				"The size of a CSV file",
				"The number of Python packages",
			],
			c: 0,
		},
		{
			q: "Which Python library is described as Numerical Python?",
			a: ["numpy", "pandas", "matplotlib", "scipy"],
			c: 0,
		},
		{
			q: "What is numpy primarily used for?",
			a: [
				"Scientific computing, data science, and machine learning",
				"Creating websites",
				"Managing email",
				"Editing documents",
			],
			c: 0,
		},
		{
			q: "What type of arrays does numpy provide?",
			a: [
				"N-dimensional arrays (ndarray)",
				"Only one-dimensional strings",
				"Only text arrays",
				"Only image arrays",
			],
			c: 0,
		},
		{
			q: "What are numpy ndarrays useful for handling?",
			a: [
				"Vectors and matrices",
				"Only paragraphs",
				"Only web pages",
				"Only audio files",
			],
			c: 0,
		},
		{
			q: "How are numpy ndarrays described in the slides?",
			a: [
				"Fast, flexible, fixed-size structures",
				"Slow, variable-size files",
				"Text-only structures",
				"Database tables",
			],
			c: 0,
		},
		{
			q: "What does the numpy mathematical engine provide?",
			a: [
				"Statistics, linear algebra, random numbers, and trigonometry",
				"Web hosting and networking",
				"Video editing and audio recording",
				"Database authentication",
			],
			c: 0,
		},
		{
			q: "Which Python library is designed for data manipulation, analysis, and cleaning?",
			a: ["pandas", "numpy", "kNN", "R"],
			c: 0,
		},
		{
			q: "What is a pandas DataFrame?",
			a: [
				"A two-dimensional tabular data structure",
				"A one-dimensional array only",
				"A Python function",
				"A mathematical formula",
			],
			c: 0,
		},
		{
			q: "What does a pandas DataFrame have as labels?",
			a: [
				"Rows and columns",
				"Only columns",
				"Only rows",
				"Neither rows nor columns",
			],
			c: 0,
		},
		{
			q: "What is a pandas DataFrame similar to?",
			a: ["A spreadsheet", "A video", "A web browser", "A text editor"],
			c: 0,
		},
		{
			q: "What does pandas provide for data ingestion?",
			a: [
				"Methods for loading data from various formats",
				"Methods for creating animations",
				"Methods for compiling Python",
				"Methods for encrypting files",
			],
			c: 0,
		},
		{
			q: "Which pandas method can load a CSV file?",
			a: ["pd.read_csv()", "pd.load_csv()", "pd.csv_read()", "pd.open_csv()"],
			c: 0,
		},
		{
			q: "Which pandas method can load an Excel file?",
			a: [
				"pd.read_excel()",
				"pd.excel_read()",
				"pd.load_excel()",
				"pd.open_xlsx()",
			],
			c: 0,
		},
		{
			q: "Which pandas method can provide a quick look at the beginning of data?",
			a: [".head()", " .start()", " .first()", " .begin()"],
			c: 0,
		},
		{
			q: "Which pandas method provides information about a DataFrame?",
			a: [".info()", " .details()", " .data()", " .inspect()"],
			c: 0,
		},
		{
			q: "Which pandas method generates descriptive statistics?",
			a: [".describe()", " .statistics()", " .summary_stats()", " .stats()"],
			c: 0,
		},
		{
			q: "What is an expected value?",
			a: [
				"The long-term average outcome of a variable",
				"The largest possible value",
				"The smallest possible value",
				"The median value only",
			],
			c: 0,
		},
		{
			q: "How is an expected value calculated?",
			a: [
				"Multiply each possible result by its likelihood and add the results",
				"Add all values and divide by the maximum",
				"Multiply all values together",
				"Subtract the probabilities from each value",
			],
			c: 0,
		},
		{
			q: "What does expected value describe over the long term?",
			a: [
				"The average outcome",
				"The maximum outcome",
				"The minimum outcome",
				"The most unusual outcome",
			],
			c: 0,
		},
		{
			q: "What type of dice is used in the expected value example?",
			a: [
				"A fair 6-sided die",
				"A biased 4-sided die",
				"A fair 8-sided die",
				"A 20-sided die",
			],
			c: 0,
		},
		{
			q: "What are the possible values when rolling a fair 6-sided die?",
			a: [
				"1, 2, 3, 4, 5, and 6",
				"0, 1, 2, 3, 4, and 5",
				"2, 4, 6, 8, 10, and 12",
				"1, 3, 5, 7, 9, and 11",
			],
			c: 0,
		},
		{
			q: "What is the probability of each result when rolling a fair 6-sided die?",
			a: ["1/6", "1/4", "1/8", "1/2"],
			c: 0,
		},
		{
			q: "What is the expected value of a fair 6-sided die?",
			a: ["3.5", "3", "4", "6"],
			c: 0,
		},
		{
			q: "Can you actually roll a 3.5 on a single throw of a standard die?",
			a: ["No", "Yes", "Only with a biased die", "Only after six throws"],
			c: 0,
		},
		{
			q: "What does the long-run average of a fair 6-sided die converge to?",
			a: ["3.5", "1", "6", "0"],
			c: 0,
		},
		{
			q: "Why do casinos rely on negative expected value for players?",
			a: [
				"To guarantee their baseline profits",
				"To guarantee players always win",
				"To eliminate probability",
				"To make every game fair",
			],
			c: 0,
		},
		{
			q: "In the biased 6-sided dice practice question, which values occur twice as often as the others?",
			a: ["1 and 2", "3 and 4", "5 and 6", "All values equally often"],
			c: 0,
		},
		{
			q: "What is calculated for the biased dice practice problem?",
			a: [
				"The long-run average or expected value",
				"The median only",
				"The range only",
				"The standard deviation only",
			],
			c: 0,
		},
		{
			q: "What is asked for the fair 8-sided dice practice problem?",
			a: ["The expected value", "The correlation", "The IQR", "The variance"],
			c: 0,
		},
		{
			q: "In the casino practice question, how much does it cost to play the game?",
			a: ["$11", "$5", "$20", "$24"],
			c: 0,
		},
		{
			q: "In the casino practice question, how often do you win $5?",
			a: [
				"Half of the time",
				"One quarter of the time",
				"One eighth of the time",
				"Every time",
			],
			c: 0,
		},
		{
			q: "In the casino practice question, how often do you win $20?",
			a: [
				"One quarter of the time",
				"Half of the time",
				"One eighth of the time",
				"Never",
			],
			c: 0,
		},
		{
			q: "In the casino practice question, how often do you win $24?",
			a: [
				"One eighth of the time",
				"Half of the time",
				"One quarter of the time",
				"Every time",
			],
			c: 0,
		},
		{
			q: "What happens for the remaining eighth of the casino game?",
			a: ["You win $0", "You win $5", "You win $20", "You win $24"],
			c: 0,
		},
		{
			q: "What is the casino practice question asking you to consider?",
			a: [
				"Whether you would play the game many times",
				"Whether the game uses Python",
				"Whether the game needs a DataFrame",
				"Whether the game has correlations",
			],
			c: 0,
		},
		{
			q: "Which function is used to filter data stored in DataFrames?",
			a: ["filter()", "select()", "mutate()", "arrange()"],
			c: 0,
		},
		{
			q: "Which function is used to select data stored in DataFrames?",
			a: ["select()", "filter()", "mutate()", "arrange()"],
			c: 0,
		},
		{
			q: "Which function is used to modify or create data in a DataFrame?",
			a: ["mutate()", "filter()", "select()", "arrange()"],
			c: 0,
		},
		{
			q: "Which function is used to arrange data in a DataFrame?",
			a: ["arrange()", "filter()", "select()", "mutate()"],
			c: 0,
		},
		{
			q: "What is kNN short for?",
			a: [
				"K Nearest Neighbor",
				"Known Numerical Network",
				"Kernel Nearest Number",
				"K-Normalized Network",
			],
			c: 0,
		},
		{
			q: "What can kNN predict?",
			a: [
				"Discrete classes or numerical values",
				"Only text",
				"Only images",
				"Only file names",
			],
			c: 0,
		},
		{
			q: "What values can k be changed to in the kNN examples?",
			a: ["1, 3, 5, and so on", "Only 2 and 4", "Only 10", "Only 0"],
			c: 0,
		},
		{
			q: "What can kNN use on numerical values?",
			a: ["Weights", "Colors", "File names", "Passwords"],
			c: 0,
		},
		{
			q: "In the weighted kNN formula, what does w represent?",
			a: [
				"A weight calculated as 1/d",
				"The predicted class",
				"The number of variables",
				"The total number of rows",
			],
			c: 0,
		},
		{
			q: "Which topics are covered in Week 04 according to the schedule?",
			a: [
				"Supervised Learning and Model Evaluations",
				"Python and R",
				"Statistics and Data Analysis",
				"Unsupervised Learning only",
			],
			c: 0,
		},
		{
			q: "What are the three types of problems mentioned when discussing datasets?",
			a: [
				"Classification, regression, clustering",
				"Sorting, searching, hashing",
				"Prediction, storage, networking",
				"Normalization, scaling, cleaning",
			],
			c: 0,
		},
		{
			q: "What is the general goal of prediction in supervised learning?",
			a: [
				"Estimate a function f(x) so that y = f(x)",
				"Remove all features from the dataset",
				"Convert categorical data into text",
				"Create a database",
			],
			c: 0,
		},
		{
			q: "In the prediction equation y = f(x), what does x represent?",
			a: [
				"Input features",
				"The output class only",
				"The test result",
				"The model accuracy",
			],
			c: 0,
		},
		{
			q: "In the prediction equation y = f(x), what does y represent?",
			a: [
				"The output",
				"The input features",
				"The distance metric",
				"The training set",
			],
			c: 0,
		},
		{
			q: "What type of output corresponds to regression?",
			a: [
				"A real number",
				"A categorical label",
				"Only +1 or -1",
				"A Boolean value only",
			],
			c: 0,
		},
		{
			q: "What type of output corresponds to classification?",
			a: [
				"A categorical value",
				"A real number only",
				"A distance",
				"A probability only",
			],
			c: 0,
		},
		{
			q: "What does it mean when data is labeled?",
			a: [
				"There are many pairs of (x,y) values",
				"There are no output values",
				"All values are missing",
				"The data contains only categories",
			],
			c: 0,
		},
		{
			q: "What can the feature vector x contain?",
			a: [
				"Binary, categorical, and real-valued features",
				"Only real numbers",
				"Only binary values",
				"Only text",
			],
			c: 0,
		},
		{
			q: "What can y represent in the supervised learning examples?",
			a: [
				"A class such as +1/-1 or a real number",
				"Only a real number",
				"Only a string",
				"Only a Boolean value",
			],
			c: 0,
		},
		{
			q: "What is the task given data (X,Y)?",
			a: [
				"Build a model f() to predict Y' based on X'",
				"Delete the training data",
				"Find the smallest feature",
				"Convert X into Y",
			],
			c: 0,
		},
		{
			q: "What is the purpose of training data?",
			a: [
				"To estimate the model",
				"To evaluate only unseen data",
				"To remove outliers",
				"To create the test labels",
			],
			c: 0,
		},
		{
			q: "What is test data used for?",
			a: [
				"Testing how well the model predicts unseen data",
				"Training the model only",
				"Creating features",
				"Removing categorical values",
			],
			c: 0,
		},
		{
			q: "What is generalization?",
			a: [
				"The hope that the same f(x) works on unseen data",
				"The process of deleting test data",
				"The process of adding more features",
				"The conversion of categories to numbers",
			],
			c: 0,
		},
		{
			q: "What is overfitting?",
			a: [
				"When f(x) predicts Y well but cannot predict Y' well",
				"When a model performs equally well on all data",
				"When there are too few features",
				"When the dataset has no labels",
			],
			c: 0,
		},
		{
			q: "What kind of model do we want to build?",
			a: [
				"One that generalizes well to unseen data",
				"One that only works on training data",
				"One that memorizes every test value",
				"One that ignores the features",
			],
			c: 0,
		},
		{
			q: "Which method is described as instance-based learning?",
			a: [
				"k-Nearest Neighbor",
				"Logistic Regression",
				"Neural Networks",
				"Linear Regression",
			],
			c: 0,
		},
		{
			q: "What does k-Nearest Neighbor use to make predictions?",
			a: [
				"Nearby data points",
				"Only the mean",
				"A sigmoid curve",
				"Only the training labels",
			],
			c: 0,
		},
		{
			q: "What does logistic regression output according to the slides?",
			a: ["0 or 1", "Only real numbers", "+1 or -1 only", "Three categories"],
			c: 0,
		},
		{
			q: "Which method is mentioned as a later supervised learning method?",
			a: [
				"Neural Networks",
				"Clustering",
				"Principal Component Analysis",
				"Decision Trees",
			],
			c: 0,
		},
		{
			q: "What is the main question concerning training a model?",
			a: [
				"How to efficiently train or build the model",
				"How to delete the dataset",
				"How to remove all features",
				"How to create more test data",
			],
			c: 0,
		},
		{
			q: "What distance metric is used in the nearest neighbor examples?",
			a: [
				"Euclidean distance",
				"Manhattan distance",
				"Cosine distance",
				"Hamming distance",
			],
			c: 0,
		},
		{
			q: "In the simplest nearest neighbor example, how many neighbors are considered?",
			a: ["One", "Two", "Three", "Five"],
			c: 0,
		},
		{
			q: "In the simplest nearest neighbor example, is a weighting function used?",
			a: [
				"No",
				"Yes, always",
				"Only for classification",
				"Only for regression",
			],
			c: 0,
		},
		{
			q: "How does the simplest nearest neighbor method make a prediction?",
			a: [
				"It predicts the same output as the nearest neighbor",
				"It predicts the average of every point",
				"It randomly selects an output",
				"It uses a sigmoid function",
			],
			c: 0,
		},
		{
			q: "In the more general kNN method, how many neighbors are considered?",
			a: ["k", "One only", "Zero", "All possible datasets"],
			c: 0,
		},
		{
			q: "What does the optional weighting function in kNN do?",
			a: [
				"Weights each output based on the distance from the query",
				"Removes the nearest neighbor",
				"Changes categorical data to text",
				"Determines the number of features",
			],
			c: 0,
		},
		{
			q: "For numerical outputs, what can kNN predict from the k nearest neighbors?",
			a: [
				"The average output",
				"The largest output only",
				"The smallest output only",
				"A random output",
			],
			c: 0,
		},
		{
			q: "What is one way machine learning models can be plotted easily?",
			a: [
				"Using 1, 2, or 3 features",
				"Using only 10 features",
				"Using no features",
				"Using only categorical variables",
			],
			c: 0,
		},
		{
			q: "What does each feature generally represent when plotting a model?",
			a: ["A dimension", "A class", "A label", "A probability"],
			c: 0,
		},
		{
			q: "Why can going beyond three features cause problems when plotting models?",
			a: [
				"The number of dimensions becomes difficult to visualize",
				"The model cannot be trained",
				"The data becomes categorical",
				"The features disappear",
			],
			c: 0,
		},
		{
			q: "What is one main-memory approach mentioned for handling nearest neighbor data?",
			a: ["Linear scan", "Binary search only", "Hashing", "Sorting"],
			c: 0,
		},
		{
			q: "What type of structure is mentioned as a tree-based approach?",
			a: ["Quadtree", "Binary tree", "Decision tree", "AVL tree"],
			c: 0,
		},
		{
			q: "In the kNN example, what value of k is used?",
			a: ["3", "1", "5", "10"],
			c: 0,
		},
		{
			q: "In the kNN example, what are the possible output classes?",
			a: ["c1 and c2", "0 and 1", "Yes and No", "A and B and C"],
			c: 0,
		},
		{
			q: "What is the output of sample1 in the classification example?",
			a: ["c1", "c2", "0", "1"],
			c: 0,
		},
		{
			q: "What is the output of sample3 in the classification example?",
			a: ["c2", "c1", "0", "1"],
			c: 0,
		},
		{
			q: "What is the first step in the listed classification workflow?",
			a: [
				"Choose and import classifiers",
				"Fit the data to the model",
				"Split the dataset",
				"Test the model",
			],
			c: 0,
		},
		{
			q: "What is loaded after choosing and importing classifiers?",
			a: [
				"The dataset with classification labels or outputs",
				"Only the test set",
				"Only the model parameters",
				"A correlation heatmap",
			],
			c: 0,
		},
		{
			q: "How is the dataset typically divided into training and testing sets?",
			a: ["70/30 or 80/20", "50/50 only", "90/10 only", "25/75 only"],
			c: 0,
		},
		{
			q: "What happens after splitting the dataset?",
			a: [
				"The data is fitted to a learning model",
				"The dataset is deleted",
				"The test labels are removed",
				"The features are converted to text",
			],
			c: 0,
		},
		{
			q: "What is the final step in the listed classification workflow?",
			a: [
				"See how well the model runs on test data",
				"Import the classifier",
				"Load the dataset",
				"Split the dataset",
			],
			c: 0,
		},
		{
			q: "What is a true positive?",
			a: [
				"A sick person correctly identified as sick",
				"A healthy person incorrectly identified as sick",
				"A sick person identified as healthy",
				"A healthy person correctly identified as healthy",
			],
			c: 0,
		},
		{
			q: "What is a true negative?",
			a: [
				"A correct negative prediction",
				"A sick person incorrectly identified as sick",
				"A positive prediction that is wrong",
				"A missing prediction",
			],
			c: 0,
		},
		{
			q: "What is a false positive?",
			a: [
				"Someone identified as sick when they are not",
				"A sick person correctly identified as sick",
				"A healthy person correctly identified as healthy",
				"Someone identified as healthy when they are healthy",
			],
			c: 0,
		},
		{
			q: "What is a false negative?",
			a: [
				"A negative prediction that is incorrect",
				"A positive prediction that is correct",
				"A negative prediction that is correct",
				"A positive prediction that is incorrect",
			],
			c: 0,
		},
		{
			q: "What happens to the confusion categories if there are more than two output categories?",
			a: [
				"They could be a bit different",
				"They disappear completely",
				"They always remain exactly the same",
				"They become regression outputs",
			],
			c: 0,
		},
		{
			q: "What type of classification is logistic regression primarily used for?",
			a: [
				"Binary classification",
				"Clustering",
				"Unsupervised learning",
				"Multi-dimensional plotting",
			],
			c: 0,
		},
		{
			q: "What values does the dependent variable have in the logistic regression example?",
			a: ["0 or 1", "1 through 10", "-1 through 1 only", "Any text string"],
			c: 0,
		},
		{
			q: "What does logistic regression learn from x and y?",
			a: [
				"Parameters of a curve to estimate the data points",
				"A distance metric only",
				"A quadtree",
				"A random forest",
			],
			c: 0,
		},
		{
			q: "What does logistic regression convert independent variables into?",
			a: [
				"A categorical decision such as yes/no",
				"A continuous image",
				"A database table",
				"A training/test split",
			],
			c: 0,
		},
		{
			q: "What is the first step described in how logistic regression works?",
			a: [
				"Compute a weighted sum of input features",
				"Apply a decision threshold",
				"Calculate an average",
				"Find the nearest neighbor",
			],
			c: 0,
		},
		{
			q: "What is the second step in logistic regression?",
			a: [
				"Pass the result through a sigmoid activation function",
				"Split the dataset",
				"Find the nearest neighbor",
				"Calculate the IQR",
			],
			c: 0,
		},
		{
			q: "What does the sigmoid function produce?",
			a: [
				"A probability",
				"A distance",
				"A feature vector",
				"A class label directly",
			],
			c: 0,
		},
		{
			q: "What is the usual decision threshold for logistic regression?",
			a: ["0.5", "0", "1", "0.25"],
			c: 0,
		},
		{
			q: "What happens when the calculated probability is compared against the threshold?",
			a: [
				"A final categorical classification is made",
				"The dataset is normalized",
				"The model is deleted",
				"The nearest neighbor is found",
			],
			c: 0,
		},
		{
			q: "What does logistic regression find during training?",
			a: [
				"The best coefficients (β values)",
				"The nearest neighbors",
				"The number of rows",
				"The number of categories only",
			],
			c: 0,
		},
		{
			q: "What shape does logistic regression use to fit the data?",
			a: ["An S-curve", "A straight line only", "A circle", "A box"],
			c: 0,
		},
		{
			q: "What does the S-curve attempt to maximize?",
			a: [
				"The probability of correctly guessing the observed data",
				"The number of features",
				"The dataset size",
				"The training time",
			],
			c: 0,
		},
		{
			q: "What optimization algorithm is specifically mentioned for logistic regression training?",
			a: [
				"Gradient descent",
				"K-means",
				"Nearest neighbor search",
				"Linear scanning",
			],
			c: 0,
		},
		{
			q: "What does logistic regression provide in addition to categorical predictions?",
			a: [
				"Probability estimates",
				"Only class names",
				"Only distances",
				"Only feature rankings",
			],
			c: 0,
		},
		{
			q: "Why can probability estimates from logistic regression be useful?",
			a: [
				"They are useful in decision-making",
				"They remove the need for training",
				"They eliminate all errors",
				"They prevent classification",
			],
			c: 0,
		},
		{
			q: "What type of classification is logistic regression used for?",
			a: [
				"Binary classification such as Yes/No or Spam/Not Spam",
				"Only clustering",
				"Only regression",
				"Only three-class classification",
			],
			c: 0,
		},
		{
			q: "What is one advantage of logistic regression mentioned in the slides?",
			a: [
				"It requires less computational power than deep learning models",
				"It always requires more computational power",
				"It cannot work with small datasets",
				"It only works with images",
			],
			c: 0,
		},
		{
			q: "What size of dataset can logistic regression work well with according to the slides?",
			a: [
				"Small datasets",
				"Only extremely large datasets",
				"Only one observation",
				"Only millions of observations",
			],
			c: 0,
		},
		{
			q: "What can logistic regression predict before the output is converted to a category?",
			a: [
				"A value between 0 and 1",
				"Only negative values",
				"Only values greater than 1",
				"Any integer",
			],
			c: 0,
		},
		{
			q: "What does logistic regression ultimately convert its output into?",
			a: ["0 or 1", "0 through 10", "A real number only", "A text string"],
			c: 0,
		},
		{
			q: "Why is logistic regression more like classification despite its name?",
			a: [
				"Its output is converted to 0 or 1",
				"It only works with real numbers",
				"It does not use training data",
				"It cannot make predictions",
			],
			c: 0,
		},
		{
			q: "What is the first step in the general classification/regression process?",
			a: [
				"Import the classifier or regression model",
				"Split the dataset",
				"Fit the data",
				"Test the model",
			],
			c: 0,
		},
		{
			q: "What is loaded in the second step of the general process?",
			a: [
				"The dataset with labels or predicted values",
				"Only the testing data",
				"Only the training labels",
				"The model parameters",
			],
			c: 0,
		},
		{
			q: "What happens in the third step of the general process?",
			a: [
				"The dataset is split into train/test sets",
				"The model is tested",
				"The model is imported",
				"The coefficients are deleted",
			],
			c: 0,
		},
		{
			q: "What happens after splitting the dataset?",
			a: [
				"The data is fitted to a learning model",
				"The dataset is discarded",
				"The test data is normalized",
				"The model is deleted",
			],
			c: 0,
		},
		{
			q: "What is the final step in the general classification/regression process?",
			a: [
				"See how well the model runs on test data",
				"Import the model",
				"Load the dataset",
				"Split the dataset",
			],
			c: 0,
		},
		{
			q: "What is linear regression?",
			a: [
				"A simple approach to supervised learning",
				"An unsupervised clustering technique",
				"A type of neural network",
				"A data cleaning method",
			],
			c: 0,
		},
		{
			q: "What does linear regression assume about the dependence of Y on X1, X2, ..., Xp?",
			a: [
				"It is linear",
				"It is always categorical",
				"It is random",
				"It is exponential",
			],
			c: 0,
		},
		{
			q: "What does linear regression predict instead of a class?",
			a: [
				"A predicted value",
				"A category only",
				"A Boolean value only",
				"A distance",
			],
			c: 0,
		},
		{
			q: "According to the slides, are true regression functions ever perfectly linear?",
			a: [
				"No",
				"Yes, always",
				"Only with one predictor",
				"Only with categorical data",
			],
			c: 0,
		},
		{
			q: "Despite being simplistic, how is linear regression described?",
			a: [
				"Extremely useful conceptually and practically",
				"Generally useless",
				"Only useful for classification",
				"Only useful for visualization",
			],
			c: 0,
		},
		{
			q: "What type of data is used as an example for linear regression?",
			a: [
				"Advertising data",
				"Iris data only",
				"Medical data only",
				"Traffic data",
			],
			c: 0,
		},
		{
			q: "What relationship is investigated in the advertising data?",
			a: [
				"Advertising budget and sales",
				"Temperature and rainfall",
				"Age and height",
				"Distance and speed",
			],
			c: 0,
		},
		{
			q: "What is one question asked about the advertising data?",
			a: [
				"How strong is the relationship between advertising budget and sales?",
				"How many rows are in the dataset?",
				"How large is the file?",
				"Which programming language created it?",
			],
			c: 0,
		},
		{
			q: "What does the advertising example ask about different media?",
			a: [
				"Which media contribute to sales",
				"Which media contain missing values",
				"Which media are categorical",
				"Which media are cheapest",
			],
			c: 0,
		},
		{
			q: "What prediction question is asked about the advertising data?",
			a: [
				"How accurately can future sales be predicted?",
				"How many advertisements exist?",
				"How many features should be removed?",
				"How large should the training set be?",
			],
			c: 0,
		},
		{
			q: "What type of relationship is investigated in the advertising example?",
			a: [
				"Whether the relationship is linear",
				"Whether the relationship is categorical",
				"Whether the relationship is random",
				"Whether the relationship is exponential",
			],
			c: 0,
		},
		{
			q: "What additional relationship between advertising media is considered?",
			a: [
				"Synergy among the advertising media",
				"Distance between media",
				"The average media cost",
				"The number of media files",
			],
			c: 0,
		},
		{
			q: "How many predictors are used in simple linear regression?",
			a: [
				"A single predictor X",
				"Two predictors only",
				"Three predictors only",
				"No predictors",
			],
			c: 0,
		},
		{
			q: "What do B0 and B1 represent in simple linear regression?",
			a: [
				"The intercept and slope",
				"The mean and median",
				"The training and test sets",
				"The class and probability",
			],
			c: 0,
		},
		{
			q: "What are B0 and B1 also called?",
			a: [
				"Coefficients or parameters",
				"Features or labels",
				"Residuals or errors",
				"Classes or categories",
			],
			c: 0,
		},
		{
			q: "What is a residual?",
			a: [
				"The difference between the actual value and the predicted value",
				"The average of all predictions",
				"The slope of the line",
				"The number of features",
			],
			c: 0,
		},
		{
			q: "What is the formula for a residual given in the slides?",
			a: ["y - ŷ", "y + ŷ", "ŷ - x", "x - y"],
			c: 0,
		},
		{
			q: "What does the vertical distance between a data point and the regression line represent?",
			a: ["The residual", "The intercept", "The slope", "The predicted class"],
			c: 0,
		},
		{
			q: "How can error be simply thought of in the regression example?",
			a: [
				"The average distance that data points are from the regression line",
				"The number of features",
				"The largest predicted value",
				"The number of training examples",
			],
			c: 0,
		},
		{
			q: "What is demonstrated with linear regression in Python?",
			a: [
				"Setting data and finding model parameters",
				"Only loading an image",
				"Only creating a DataFrame",
				"Only calculating an IQR",
			],
			c: 0,
		},
		{
			q: "What can be printed after finding the linear regression parameters?",
			a: [
				"The parameters and R²",
				"Only the residuals",
				"Only the dataset size",
				"Only the mean",
			],
			c: 0,
		},
		{
			q: "What can linear regression in Python predict given the original x values?",
			a: ["y values", "Only x values", "Only categories", "Only probabilities"],
			c: 0,
		},
		{
			q: "What can be done with a new x value in the Python example?",
			a: [
				"Predict the corresponding new y value",
				"Delete the value",
				"Convert it into a category",
				"Calculate only its distance",
			],
			c: 0,
		},
		{
			q: "What type of linear regression uses inputs x0 and x1 with output y?",
			a: [
				"Multiple linear regression",
				"Simple linear regression",
				"Logistic regression",
				"kNN",
			],
			c: 0,
		},
		{
			q: "What is the purpose of assessing the performance of a learning algorithm?",
			a: [
				"To determine how well the learning algorithm performs",
				"To remove all training data",
				"To create more features",
				"To change categorical data",
			],
			c: 0,
		},
		{
			q: "How can examples be divided when assessing a learning algorithm?",
			a: [
				"Into training and testing sets",
				"Into only validation sets",
				"Into three equal sets always",
				"Into input and output only",
			],
			c: 0,
		},
		{
			q: "What are two typical training/testing percentages mentioned?",
			a: [
				"70%/30% and 80%/20%",
				"50%/50% and 60%/40%",
				"90%/10% and 95%/5%",
				"25%/75% and 40%/60%",
			],
			c: 0,
		},
		{
			q: "What is another way to choose examples for training and testing?",
			a: [
				"Randomly select examples for each set",
				"Always use the first half",
				"Always use the last half",
				"Use only the largest values",
			],
			c: 0,
		},
		{
			q: "What type of curve can be shown when assessing model performance?",
			a: [
				"A learning curve",
				"A sigmoid curve only",
				"A bell curve only",
				"A pie curve",
			],
			c: 0,
		},
		{
			q: "What is overfitting?",
			a: [
				"Finding meaningless regularity in the data",
				"Improving model generalization",
				"Increasing the testing set",
				"Reducing the number of features",
			],
			c: 0,
		},
		{
			q: "Why can many possible hypotheses cause a problem?",
			a: [
				"They can lead to meaningless regularities in the data",
				"They always improve predictions",
				"They eliminate overfitting",
				"They remove the need for testing",
			],
			c: 0,
		},
		{
			q: "What does the dice example illustrate about overfitting?",
			a: [
				"A pattern can appear meaningful even when it is not",
				"Dice always produce the same value",
				"Training data is always accurate",
				"Randomness does not exist",
			],
			c: 0,
		},
		{
			q: "What additional dataset can be used besides training and testing data?",
			a: [
				"A validation dataset",
				"A clustering dataset",
				"A prediction-only dataset",
				"A residual dataset",
			],
			c: 0,
		},
		{
			q: "What is one split of the original data suggested when using validation data?",
			a: [
				"70% training, 15% validation, 15% testing",
				"50% training, 25% validation, 25% testing",
				"80% training, 10% validation, 10% testing",
				"60% training, 20% validation, 20% testing",
			],
			c: 0,
		},
		{
			q: "What is the validation data used for?",
			a: [
				"Evaluating model performance and tuning hyperparameters",
				"Training the final model exclusively",
				"Replacing the training data",
				"Calculating only the residuals",
			],
			c: 0,
		},
		{
			q: "What are hyperparameters?",
			a: [
				"Constants in a model that can be tuned during training",
				"The actual output values",
				"The rows in a dataset",
				"The residuals",
			],
			c: 0,
		},
		{
			q: "What is the testing data used for after training?",
			a: [
				"Providing an unbiased assessment of the final model",
				"Choosing the training algorithm",
				"Tuning the model repeatedly",
				"Creating the validation set",
			],
			c: 0,
		},
		{
			q: "Why is it important that testing data is unseen during training?",
			a: [
				"It allows an unbiased performance assessment",
				"It makes training faster",
				"It increases the number of features",
				"It guarantees 100% accuracy",
			],
			c: 0,
		},
		{
			q: "How many samples are in the iris dataset example?",
			a: ["150", "100", "115", "20"],
			c: 0,
		},
		{
			q: "How many iris samples are used for training in the validation example?",
			a: ["115", "150", "15", "20"],
			c: 0,
		},
		{
			q: "How many iris samples are used for validation?",
			a: ["15", "115", "20", "150"],
			c: 0,
		},
		{
			q: "How many iris samples are used for testing?",
			a: ["20", "15", "115", "150"],
			c: 0,
		},
		{
			q: "For kNN with k=1, how many of the 15 validation samples are correctly predicted in the example?",
			a: ["10", "12", "14", "15"],
			c: 0,
		},
		{
			q: "For kNN with k=3, how many of the 15 validation samples are correctly predicted?",
			a: ["14", "10", "12", "15"],
			c: 0,
		},
		{
			q: "For kNN with k=5, how many of the 15 validation samples are correctly predicted?",
			a: ["12", "10", "14", "15"],
			c: 0,
		},
		{
			q: "Which kNN model is selected as the best model in the example?",
			a: ["k=3", "k=1", "k=5", "k=10"],
			c: 0,
		},
		{
			q: "How many of the 20 testing samples does the selected k=3 model correctly predict?",
			a: ["17", "14", "12", "20"],
			c: 0,
		},
		{
			q: "What is the testing accuracy in the kNN example?",
			a: ["85%", "70%", "75%", "90%"],
			c: 0,
		},
		{
			q: "What is K-fold cross-validation?",
			a: [
				"Splitting training data into k equally sized folds",
				"Splitting data into only training and testing sets",
				"Using only one validation sample",
				"Training the model once",
			],
			c: 0,
		},
		{
			q: "During K-fold cross-validation, what happens to each fold?",
			a: [
				"Each fold is used once as validation while the others are used for training",
				"Each fold is always used for testing",
				"Every fold is discarded after training",
				"Every fold is used only for training",
			],
			c: 0,
		},
		{
			q: "How many times are the model trained and validated during K-fold cross-validation?",
			a: ["k times", "Once", "Twice", "10 times always"],
			c: 0,
		},
		{
			q: "Which are common choices for k in K-fold cross-validation?",
			a: ["5 or 10", "1 or 2", "3 or 4", "20 or 30"],
			c: 0,
		},
		{
			q: "What is the final topic covered in Unit 04b?",
			a: [
				"Confusion Matrix",
				"Linear Regression",
				"K-fold Cross-validation",
				"Logistic Regression",
			],
			c: 0,
		},
		{
			q: "In the confusion matrix example, how many samples are there in total?",
			a: ["12", "8", "4", "20"],
			c: 0,
		},
		{
			q: "In the confusion matrix example, how many samples are actually classified as yes?",
			a: ["8", "4", "12", "6"],
			c: 0,
		},
		{
			q: "In the confusion matrix example, how many samples are classified as no?",
			a: ["4", "8", "12", "6"],
			c: 0,
		},
		{
			q: "What is the main difference between supervised and unsupervised learning presented in the dataset format?",
			a: [
				"Unsupervised learning does not require class or output labels",
				"Unsupervised learning always requires more labels",
				"Supervised learning has no features",
				"Supervised learning cannot use numerical data",
			],
			c: 0,
		},
		{
			q: "What is customer segmentation an application of?",
			a: [
				"Unsupervised learning",
				"Linear regression only",
				"Data normalization only",
				"Supervised classification only",
			],
			c: 0,
		},
		{
			q: "How can customer segmentation help a supermarket?",
			a: [
				"It can help determine what to stock and when and where",
				"It removes the need for customers",
				"It guarantees all customers buy the same products",
				"It converts all products into numerical values",
			],
			c: 0,
		},
		{
			q: "What does anomaly detection identify?",
			a: [
				"Unusual patterns in data",
				"Only the largest clusters",
				"The average of every feature",
				"Only labeled classes",
			],
			c: 0,
		},
		{
			q: "Which of the following is an application of anomaly detection?",
			a: [
				"Fraud detection",
				"CD purchasing",
				"Document formatting",
				"Data entry",
			],
			c: 0,
		},
		{
			q: "What do recommendation systems analyze to suggest products, movies, or music?",
			a: [
				"User behavior and preferences",
				"Only the number of clusters",
				"Only Euclidean distances",
				"Only document length",
			],
			c: 0,
		},
		{
			q: "What can image and text clustering be used for?",
			a: [
				"Grouping similar images or documents",
				"Predicting exact sales values",
				"Calculating regression coefficients",
				"Removing all outliers",
			],
			c: 0,
		},
		{
			q: "What can social network analysis detect?",
			a: [
				"Communities or trends in user interactions",
				"Regression slopes",
				"Centroids only",
				"Normal distributions",
			],
			c: 0,
		},
		{
			q: "What is one advantage of unsupervised learning?",
			a: [
				"It does not need labeled data",
				"It always produces known categories",
				"It requires every data point to be labeled",
				"It eliminates all noise",
			],
			c: 0,
		},
		{
			q: "Why can unsupervised learning save time and effort on data annotation?",
			a: [
				"It works with raw, unlabeled data",
				"It automatically labels every point correctly",
				"It requires manual labeling before clustering",
				"It only works with small datasets",
			],
			c: 0,
		},
		{
			q: "What can unsupervised learning discover?",
			a: [
				"Hidden patterns and natural groupings",
				"Only predefined classes",
				"Only regression coefficients",
				"Only labeled examples",
			],
			c: 0,
		},
		{
			q: "What type of datasets can unsupervised learning handle effectively?",
			a: [
				"High-dimensional or very large datasets",
				"Only two-dimensional datasets",
				"Only datasets with two samples",
				"Only labeled datasets",
			],
			c: 0,
		},
		{
			q: "How can unsupervised learning be useful for anomaly detection?",
			a: [
				"It can identify outliers without prior examples",
				"It requires every anomaly to be labeled first",
				"It removes all unusual data automatically",
				"It only detects anomalies in two dimensions",
			],
			c: 0,
		},
		{
			q: "How can noisy data affect unsupervised learning?",
			a: [
				"Outliers and noise can distort patterns",
				"It always improves clustering",
				"It guarantees clearer clusters",
				"It eliminates the need for distance measures",
			],
			c: 0,
		},
		{
			q: "What is assumption dependence in unsupervised learning?",
			a: [
				"Algorithms may rely on assumptions such as cluster shapes that do not match the actual data",
				"Algorithms always require labeled classes",
				"Algorithms cannot use distance measures",
				"Algorithms only work with text",
			],
			c: 0,
		},
		{
			q: "What does the absence of labels cause in unsupervised learning?",
			a: [
				"Limited guidance toward specific outcomes",
				"Automatic perfect classification",
				"More accurate ground truth",
				"Guaranteed meaningful clusters",
			],
			c: 0,
		},
		{
			q: "What is a possible problem with cluster interpretability?",
			a: [
				"Clusters may lack clear meaning or alignment with real-world categories",
				"Clusters always have predefined meanings",
				"Clusters cannot contain more than one point",
				"Clusters must correspond to labels",
			],
			c: 0,
		},
		{
			q: "Why can hyperparameters be important in unsupervised learning?",
			a: [
				"Many algorithms require careful tuning, such as the number of clusters in k-means",
				"Hyperparameters are never used in clustering",
				"They automatically label every point",
				"They remove the need for distance measures",
			],
			c: 0,
		},
		{
			q: "Why is evaluating unsupervised learning results difficult?",
			a: [
				"There is no labeled ground truth",
				"There are always too many labels",
				"Every cluster has a known correct answer",
				"All algorithms use the same distance",
			],
			c: 0,
		},
		{
			q: "What is the goal of clustering?",
			a: [
				"To group points so members of a cluster are similar and members of different clusters are dissimilar",
				"To assign every point a regression value",
				"To remove every outlier",
				"To create as many clusters as possible",
			],
			c: 0,
		},
		{
			q: "What is usually used to define similarity between points in clustering?",
			a: [
				"A distance measure",
				"A regression coefficient",
				"A class label",
				"A validation set",
			],
			c: 0,
		},
		{
			q: "Which distance measure is commonly used in clustering?",
			a: [
				"Euclidean distance",
				"Regression distance",
				"Validation distance",
				"Classification distance",
			],
			c: 0,
		},
		{
			q: "What other distance measure is mentioned as an option besides Euclidean distance?",
			a: [
				"Cosine distance",
				"Manhattan regression",
				"Centroid distance only",
				"Cluster-label distance",
			],
			c: 0,
		},
		{
			q: "In clustering, what should members of the same cluster be?",
			a: [
				"Close or similar to each other",
				"As far apart as possible",
				"Assigned different labels",
				"Outside the data space",
			],
			c: 0,
		},
		{
			q: "In clustering, what should members of different clusters be?",
			a: ["Dissimilar", "Identical", "Always adjacent", "The same point"],
			c: 0,
		},
		{
			q: "Why can clustering become difficult in high-dimensional spaces?",
			a: [
				"Almost all pairs of points can be at about the same distance",
				"There are no points in high-dimensional spaces",
				"Every point becomes an outlier",
				"Distances cannot be calculated",
			],
			c: 0,
		},
		{
			q: "How many dimensions can some applications involve according to the lecture?",
			a: [
				"10 or 10,000 dimensions",
				"Only 2 dimensions",
				"Exactly 3 dimensions",
				"Only 100 dimensions",
			],
			c: 0,
		},
		{
			q: "How can a CD be represented for clustering based on customer purchases?",
			a: [
				"As a set of customers who bought it",
				"As a regression coefficient",
				"As a class label only",
				"As a single distance value",
			],
			c: 0,
		},
		{
			q: "What is the relationship between similar CDs and their sets of customers?",
			a: [
				"Similar CDs have similar sets of customers",
				"Similar CDs always have completely different customers",
				"Similar CDs must have identical prices",
				"Similar CDs cannot be clustered",
			],
			c: 0,
		},
		{
			q: "In the CD representation, what does each dimension represent?",
			a: ["A customer", "A CD genre", "A cluster", "A distance"],
			c: 0,
		},
		{
			q: "In the CD space example, what values can a dimension have?",
			a: ["0 or 1", "Only 2", "Any negative value", "Only 10 or 100"],
			c: 0,
		},
		{
			q: "What does xi = 1 mean in the CD representation?",
			a: [
				"The ith customer bought the CD",
				"The ith customer disliked the CD",
				"The CD belongs to cluster i",
				"The CD has i dimensions",
			],
			c: 0,
		},
		{
			q: "How many dimensions can the Amazon CD example have?",
			a: ["Tens of millions", "Exactly two", "Exactly ten", "One hundred"],
			c: 0,
		},
		{
			q: "What is the task when clustering CDs?",
			a: [
				"Find clusters of similar CDs",
				"Predict the price of every CD",
				"Assign every CD a regression slope",
				"Remove every CD without a label",
			],
			c: 0,
		},
		{
			q: "How can a document be represented for finding topics?",
			a: [
				"As a vector based on the words appearing in it",
				"As a single class label",
				"As a regression line",
				"As a centroid only",
			],
			c: 0,
		},
		{
			q: "What does xi = 1 mean in the document representation?",
			a: [
				"The ith word appears in the document",
				"The ith document is in cluster one",
				"The document has one page",
				"The ith word is the longest word",
			],
			c: 0,
		},
		{
			q: "What may documents with similar sets of words be about?",
			a: [
				"The same topic",
				"Different regression models",
				"Different distance metrics",
				"The same customer",
			],
			c: 0,
		},
		{
			q: "Which distance can be used when documents are represented as vectors?",
			a: [
				"Cosine distance",
				"Only Euclidean distance",
				"Only regression distance",
				"Only centroid distance",
			],
			c: 0,
		},
		{
			q: "Which distance can be used when documents are treated as points?",
			a: [
				"Euclidean distance",
				"Only cosine distance",
				"Only classification distance",
				"Only validation distance",
			],
			c: 0,
		},
		{
			q: "What does Euclidean distance represent?",
			a: [
				"The straight-line length between two points",
				"The number of clusters in a dataset",
				"The average number of features",
				"The number of labels",
			],
			c: 0,
		},
		{
			q: "What is Euclidean distance calculated using?",
			a: [
				"The Pythagorean theorem",
				"The logistic function",
				"A confusion matrix",
				"A validation split",
			],
			c: 0,
		},
		{
			q: "What is hierarchical clustering?",
			a: [
				"A clustering approach that builds or splits clusters hierarchically",
				"A method that only predicts classes",
				"A regression method",
				"A method that requires labeled outputs",
			],
			c: 0,
		},
		{
			q: "What happens initially in agglomerative hierarchical clustering?",
			a: [
				"Each point is its own cluster",
				"All points are in one cluster",
				"All points are discarded",
				"Each point is assigned a class label",
			],
			c: 0,
		},
		{
			q: "What is the main operation in agglomerative clustering?",
			a: [
				"Repeatedly combine the two nearest clusters",
				"Repeatedly remove the farthest point",
				"Predict a new output value",
				"Randomly label every point",
			],
			c: 0,
		},
		{
			q: "What does divisive hierarchical clustering do?",
			a: [
				"Starts with one cluster and recursively splits it",
				"Starts with every point as a cluster and combines them",
				"Predicts a continuous value",
				"Uses only labeled data",
			],
			c: 0,
		},
		{
			q: "What does point assignment clustering do?",
			a: [
				"Maintains a set of clusters and assigns points to the nearest cluster",
				"Starts with one cluster and always splits it",
				"Removes all points outside the centroid",
				"Requires every point to have a class label",
			],
			c: 0,
		},
		{
			q: "In hierarchical clustering, how can a cluster containing many points be represented in the Euclidean case?",
			a: [
				"By its centroid, the average of its points",
				"By its largest point only",
				"By its first point only",
				"By a class label",
			],
			c: 0,
		},
		{
			q: "How can the nearness of clusters be determined in the centroid approach?",
			a: [
				"By measuring distances between their centroids",
				"By comparing their class labels",
				"By counting their dimensions",
				"By using only the largest point",
			],
			c: 0,
		},
		{
			q: "What is a clustroid?",
			a: [
				"An existing data point that is closest to the other points in a cluster",
				"The average of all points in a cluster",
				"A point that is always outside the cluster",
				"The number of clusters in k-means",
			],
			c: 0,
		},
		{
			q: "What is the key difference between a centroid and a clustroid?",
			a: [
				"A centroid is an average and may be artificial, while a clustroid is an existing data point",
				"A centroid is always an existing point while a clustroid is always artificial",
				"They are exactly the same thing",
				"A clustroid can only be used with labeled data",
			],
			c: 0,
		},
		{
			q: "What does k represent in k-means clustering?",
			a: [
				"The number of clusters",
				"The number of features",
				"The number of data points",
				"The number of labels",
			],
			c: 0,
		},
		{
			q: "What assumption does k-means make according to the lecture?",
			a: [
				"It assumes Euclidean space and distance",
				"It assumes every point has a class label",
				"It assumes all data is text",
				"It assumes there is only one cluster",
			],
			c: 0,
		},
		{
			q: "What is the first major step when starting k-means?",
			a: [
				"Pick k, the number of clusters",
				"Calculate a confusion matrix",
				"Split the data into training and testing sets",
				"Assign every point a final label",
			],
			c: 0,
		},
		{
			q: "How can k-means initialize its clusters?",
			a: [
				"By picking one point per cluster",
				"By deleting the furthest points",
				"By assigning every point to every cluster",
				"By selecting only outliers",
			],
			c: 0,
		},
		{
			q: "During k-means assignment, where is each point placed?",
			a: [
				"In the cluster whose current centroid is nearest",
				"In the cluster with the most points",
				"In a randomly selected cluster every time",
				"In the cluster with the farthest centroid",
			],
			c: 0,
		},
		{
			q: "What happens after all points are assigned in k-means?",
			a: [
				"The locations of the centroids are updated",
				"All clusters are deleted",
				"The value of k is automatically changed",
				"All points become outliers",
			],
			c: 0,
		},
		{
			q: "What happens after centroids are updated in k-means?",
			a: [
				"Points are reassigned to their closest centroid",
				"The dataset is discarded",
				"The number of dimensions is reduced to zero",
				"The algorithm immediately stops",
			],
			c: 0,
		},
		{
			q: "What does convergence mean in the k-means process?",
			a: [
				"Points stop moving between clusters and centroids stabilize",
				"Every point becomes an outlier",
				"The number of clusters becomes zero",
				"All points receive different labels",
			],
			c: 0,
		},
		{
			q: "What are the three important questions in hierarchical clustering?",
			a: [
				"How to represent clusters, determine cluster nearness, and decide when to stop combining",
				"How to label data, remove features, and calculate regression",
				"How to normalize data, split data, and calculate accuracy",
				"How to choose Python, R, and SQL",
			],
			c: 0,
		},
	],

	SoftEngi: {
		quiz1: [
			{
				q: "What is software engineering?",
				a: [
					"A branch of computer science and engineering focused on designing, developing, testing, and maintaining software",
					"A practice focused on producing source code as quickly as possible, without broader system concerns",
					"A discipline concerned only with checking finished software for defects before release",
					"A field focused on designing physical computer components rather than software systems",
				],
				c: 0,
			},
			{
				q: "Why is programming alone not enough when building large software systems?",
				a: [
					"Large systems must also address requirements, reliability, security, maintainability, scalability, and change",
					"Programming languages are inherently unsuitable for applications with many users or features",
					"Programming is useful only for database tasks and cannot support other system components",
					"Large systems can be released without testing because their size prevents meaningful checks",
				],
				c: 0,
			},
			{
				q: "What is the main difference between programming and software engineering?",
				a: [
					"Programming focuses on making code work, while software engineering focuses on making the entire system succeed",
					"Programming is mainly about defining requirements, while software engineering only implements code",
					"Programming is a hardware design activity, while software engineering is limited to software testing",
					"The terms describe the same activity and differ only in how developers name their work",
				],
				c: 0,
			},
			{
				q: "Which sequence best represents the software engineering process?",
				a: [
					"Requirements → Design → Code → Test → Deploy → Evolve",
					"Code → Deploy → Requirements → Design → Test → Delete",
					"Design → Code → Requirements → Deploy → Test → Evolve",
					"Test → Code → Design → Requirements → Deploy → Evolve",
				],
				c: 0,
			},
			{
				q: "A developer creates an application that works correctly on their laptop, but it cannot handle thousands of users. What concept from the lecture does this demonstrate?",
				a: [
					"A system can work technically while still failing to meet software engineering requirements such as scalability",
					"An application is good software whenever it runs on its developer's computer, regardless of its limits",
					"The main problem is that the developer chose a programming language that cannot support many users",
					"Testing is unnecessary once an application works for one person on a single computer",
				],
				c: 0,
			},
			{
				q: "Which of the following is NOT one of the qualities of good software?",
				a: [
					"Dependable and secure",
					"Maintainable",
					"Efficient",
					"Guaranteed to require no future changes",
				],
				c: 3,
			},
			{
				q: "A banking application calculates every balance correctly but allows users to access other customers' accounts. Which software quality is most clearly suffering?",
				a: ["Security", "Efficiency", "Maintainability", "Compatibility"],
				c: 0,
			},
			{
				q: "A video streaming application is easy to use and fast, but every modification breaks another feature. Which quality is suffering?",
				a: [
					"Maintainability",
					"Efficiency",
					"Acceptability",
					"Physical safety",
				],
				c: 0,
			},
			{
				q: "A banking application works correctly, but every page takes 25 seconds to load. Which quality is most clearly affected?",
				a: ["Efficiency", "Security", "Maintainability", "Acceptability"],
				c: 0,
			},
			{
				q: "Why is maintainability important according to the slideshow?",
				a: [
					"Software changes are inevitable, so adding or modifying features should be manageable",
					"Software should remain unchanged after release so developers do not introduce new defects",
					"Maintainability matters only while the initial version is being written and tested",
					"Maintainable code makes testing unnecessary because future changes are always safe",
				],
				c: 0,
			},
			{
				q: "What does it mean for software to be dependable and secure?",
				a: [
					"It should avoid causing physical or economic harm and prevent malicious attacks",
					"It should always be implemented with the newest programming language available",
					"It should be designed so that developers never need to maintain it after release",
					"It should run on one carefully selected computer rather than a range of environments",
				],
				c: 0,
			},
			{
				q: "A team builds software without discussing requirements first. Different developers make incompatible assumptions about the system. What is a likely result?",
				a: [
					"Integration failures, defects, security risks, rework, and missed deadlines",
					"The project will automatically become more efficient",
					"The lack of requirements will eliminate defects",
					"The project will require less communication but have no other consequences",
				],
				c: 0,
			},
			{
				q: "Why does the slideshow emphasize that software engineering should be systematic rather than ad-hoc?",
				a: [
					"A structured approach provides defined processes, methods, and evidence instead of relying on unplanned coding",
					"Ad-hoc development is unreliable mainly because it tends to use too many programming languages",
					"Systematic development replaces the need for people to make engineering decisions",
					"Following a defined process guarantees that the finished software will contain no defects",
				],
				c: 0,
			},
			{
				q: "A software team receives new requirements every week. Which software engineering mindset is most appropriate?",
				a: [
					"Treat the software as evolutionary and prepare for continual change",
					"Assume the original requirements can never change",
					"Rewrite the entire application after every requirement change",
					"Stop testing once Version 1.0 works",
				],
				c: 0,
			},
			{
				q: "Which statement best explains why building software is difficult?",
				a: [
					"Users, technology, regulations, security threats, scale, teams, budgets, and requirements can all change",
					"Software is difficult primarily because programming languages cannot be understood consistently",
					"Software projects are difficult only before release because finished systems do not change",
					"Hardware limitations are the sole source of difficulty in building software systems",
				],
				c: 0,
			},
			{
				q: "A team successfully releases Version 1.0 but struggles when users request major changes. What lesson from the slideshow best applies?",
				a: [
					"Software engineering must prepare software to survive future versions and changing conditions",
					"A Version 1.0 release should be treated as the final product, with no planned revisions",
					"Requested changes should be postponed until the current version stops working entirely",
					"The team should stop gathering user feedback so requirements cannot continue to evolve",
				],
				c: 0,
			},
			{
				q: "What is a software process?",
				a: [
					"A structured way of building software",
					"A programming language used to build software",
					"A tool used exclusively for debugging",
					"A document containing only source code",
				],
				c: 0,
			},
			{
				q: "What question does the Specification/Requirements stage answer?",
				a: [
					"What should we build?",
					"How should we deploy it?",
					"Did we build it correctly?",
					"How should we modify the code next year?",
				],
				c: 0,
			},
			{
				q: "What question does the Design stage answer?",
				a: [
					"How should we build it?",
					"What should the customer buy?",
					"Did we test every line of code?",
					"When should the software be retired?",
				],
				c: 0,
			},
			{
				q: "What is the purpose of Verification and Validation?",
				a: [
					"To determine whether the software was built correctly and meets the intended needs",
					"To select the programming language and tools before requirements are considered",
					"To replace the documented requirements with implementation code as the project proceeds",
					"To remove users from the process once developers have completed the initial design",
				],
				c: 0,
			},
			{
				q: "What does the Evolution stage of the software process address?",
				a: [
					"What happens when the software needs to change",
					"How to write the first line of code",
					"How to purchase computer hardware",
					"How to remove all documentation",
				],
				c: 0,
			},
			{
				q: "A process step has a clearly defined objective, input, and output. Why is this useful?",
				a: [
					"It makes the work more structured and allows the result of the step to be checked",
					"It guarantees that developers cannot make mistakes while performing the process step",
					"It allows the work to be completed without people who have specialized skills",
					"It removes the need to identify requirements before development begins",
				],
				c: 0,
			},
			{
				q: "Why should a good software process support early detection of faults?",
				a: [
					"Late detection is more costly and can lead to more rework",
					"Early detection makes testing unnecessary",
					"Faults found early cannot affect software quality",
					"Late detection is always cheaper",
				],
				c: 0,
			},
			{
				q: "A development team follows the same defined process across several projects and can predict what activities will occur. Which characteristic of a good process does this demonstrate?",
				a: [
					"Predictability and repeatability",
					"Randomness",
					"Ad-hoc development",
					"Elimination of testing",
				],
				c: 0,
			},
			{
				q: "Why should a software process support testing and maintainability?",
				a: [
					"A good process should produce testable outcomes and make the software easier to adapt to changes",
					"Testing should prevent any future changes by ensuring the first release is permanently complete",
					"Maintainability means keeping the software fixed so developers cannot modify its behavior",
					"Testing should be delayed until the project has been abandoned and is no longer maintained",
				],
				c: 0,
			},
			{
				q: "A team decides to immediately code a hospital database without clearly determining what the system should do. Why is this a poor software engineering decision?",
				a: [
					"Unclear requirements can lead to incompatible designs, defects, security risks, rework, and missed deadlines",
					"Starting implementation first guarantees the intended requirements will become clear without discussion",
					"Database systems do not need requirements because their behavior is determined entirely by data",
					"Hospital software is simple enough that a defined development process would add no value",
				],
				c: 0,
			},
			{
				q: "Why would simply hiring more programmers not necessarily solve the problems of a growing software system?",
				a: [
					"More developers do not automatically solve problems involving requirements, coordination, security, scalability, maintainability, and process",
					"Adding developers always makes a project less reliable, regardless of how the team is organized",
					"Software programming cannot be divided among people working together on one system",
					"Hiring additional programmers prevents stakeholders from revising the system's requirements",
				],
				c: 0,
			},
			{
				q: "A team has software that works but only one developer understands the code. From a software engineering perspective, what is the main concern?",
				a: [
					"Maintainability and understandability are poor because the system is difficult for others to safely modify",
					"The system should be considered efficient simply because one developer can operate it",
					"The system cannot have requirements if only one developer understands its implementation",
					"The system must be secure because knowledge of the code is limited to one person",
				],
				c: 0,
			},
			{
				q: "Which statement best justifies the idea that 'good software' means more than 'software that works'?",
				a: [
					"Software must also consider qualities such as security, reliability, usability, efficiency, maintainability, and scalability",
					"Software that runs successfully does not need any further testing or quality evaluation",
					"Correctness is unimportant as long as users can open the software and interact with it",
					"Software quality can be measured entirely by counting the lines of source code",
				],
				c: 0,
			},
			{
				q: "A team uses GitHub pull requests and code reviews during development. Which modern software engineering practice from the slideshow does this represent?",
				a: [
					"Collaborative development",
					"Cloud-native systems",
					"AI-assisted engineering",
					"Only traditional programming",
				],
				c: 0,
			},
			{
				q: "A company automatically runs tests whenever developers submit changes and uses automated deployment pipelines. Which modern practice does this best represent?",
				a: [
					"Continuous engineering using automated tests and CI/CD",
					"Only manual development",
					"Traditional waterfall-only development",
					"Requirements gathering",
				],
				c: 0,
			},
			{
				q: "A team uses Scrum and repeatedly gathers feedback while developing a product. Which modern software engineering approach is being demonstrated?",
				a: [
					"Iterative development",
					"Hardware engineering",
					"Database normalization",
					"Manual deployment",
				],
				c: 0,
			},
			{
				q: "A system is built using APIs, services, containers, and cloud infrastructure. Which modern software engineering area from the slideshow does this represent?",
				a: [
					"Cloud-native systems",
					"Collaborative development only",
					"Manual testing",
					"Traditional debugging",
				],
				c: 0,
			},
			{
				q: "A team uses AI to help generate code, create tests, review code, and produce documentation. Which concept from the slideshow does this demonstrate?",
				a: [
					"AI-assisted engineering",
					"Cloud-native development",
					"Only requirements engineering",
					"Manual software engineering",
				],
				c: 0,
			},
			{
				q: "A team is deciding whether to prioritize making a feature work quickly or designing it so that future developers can safely modify it. Which decision better reflects software engineering, and why?",
				a: [
					"Designing for future modification because software engineering prepares systems for change and maintainability",
					"Making it work once because future changes are never expected",
					"Avoiding both approaches because software engineering only concerns testing",
					"Writing more code because more code always means better software",
				],
				c: 0,
			},
			{
				q: "What is the main idea behind the statement 'We don't just build software. We engineer software that can survive change'?",
				a: [
					"Software should be designed to handle future changes and evolve over time",
					"Software should never be modified after release",
					"Software should only focus on making the first version work",
					"Software should avoid user feedback",
				],
				c: 0,
			},
			{
				q: "Which sequence represents the learning approach?",
				a: [
					"Learn → Apply → Build → Break → Improve → Change → Evolve",
					"Build → Learn → Deploy → Forget → Replace → Repeat",
					"Code → Test → Submit → Finish → Stop → Restart",
					"Plan → Code → Submit → Ignore → Deploy → Finish",
				],
				c: 0,
			},
			{
				q: "Why does the course emphasize practice rather than only listening to lectures?",
				a: [
					"Software engineering skills require students to apply concepts and practice engineering decisions",
					"Software engineering can only be learned through programming competitions",
					"Lectures are not part of the course",
					"Practice eliminates the need to understand concepts",
				],
				c: 0,
			},
			{
				q: "Which topic belongs to the Foundations portion of the course?",
				a: [
					"Software Engineering, SDLC, processes, Agile, XP, Scrum, planning, and risk",
					"Modern APIs and cloud services, without the software process and planning topics",
					"Software testing and refactoring practices, without the introductory foundations",
					"Ethical practice and responsible AI, without development or project-process content",
				],
				c: 0,
			},
			{
				q: "Which topics are included in the Design portion of the software engineering journey?",
				a: [
					"Requirements, User Stories, UML, Design Patterns, and Architecture",
					"Testing, TDD, CI, and version control",
					"Cloud, APIs, and microservices only",
					"Ethics, accountability, and responsible AI only",
				],
				c: 0,
			},
			{
				q: "Which topics are part of Build & Verify?",
				a: [
					"Clean Code, SOLID, Testing, TDD, Version Control, and CI",
					"User Stories, UML, and Architecture only",
					"Distributed Systems and Microservices only",
					"Planning, risk, and Scrum only",
				],
				c: 0,
			},
			{
				q: "A developer finishes a feature but the code contains duplicated logic and is difficult to modify. Which part of the course journey is most relevant?",
				a: [
					"Improve & Evolve, including code smells and refactoring",
					"Foundations only",
					"Professional Practice only",
					"Project team formation",
				],
				c: 0,
			},
			{
				q: "Why is technical debt included in the Improve & Evolve portion of the course?",
				a: [
					"Software may accumulate problems that make future changes more difficult and require improvement",
					"Technical debt means a project has borrowed money",
					"Technical debt guarantees that software will become faster",
					"Technical debt eliminates the need for maintenance",
				],
				c: 0,
			},
			{
				q: "Which topic belongs to Modern Software Engineering?",
				a: [
					"Distributed Systems, APIs, Microservices, Cloud, AI-Assisted SE, and Agentic SE",
					"UML and requirements analysis, without distributed or cloud-based systems",
					"Scrum and Extreme Programming practices, without modern architecture topics",
					"Clean code and SOLID design principles, without cloud or AI-assisted work",
				],
				c: 0,
			},
			{
				q: "A developer uses an AI system to help generate code but reviews the output before accepting it. Which course area does this relate to?",
				a: [
					"AI-Assisted Software Engineering and professional engineering responsibility",
					"Forming a project team and assigning responsibilities without using engineering tools",
					"Modeling software structure with UML diagrams without evaluating AI-generated code",
					"Tracking source changes in version control without reviewing generated output",
				],
				c: 0,
			},
			{
				q: "Why does the course include Professional Practice as part of software engineering?",
				a: [
					"Engineering involves responsibility, including human oversight, ethics, accountability, and responsible AI",
					"Professional practice is limited to increasing the amount of code an engineer produces",
					"Software engineering decisions have no consequences for users or other affected people",
					"Professional conduct is intended to replace technical knowledge and engineering skills",
				],
				c: 0,
			},
			{
				q: "What is the purpose of lectures in the course?",
				a: [
					"To understand concepts, examples, real-world cases, and demonstrations",
					"To complete and submit the entire team software project during class meetings",
					"To replace practical labs and individual assignments with instructor presentations",
					"To perform programming exercises without discussing concepts or real-world cases",
				],
				c: 0,
			},
			{
				q: "What is the main purpose of labs?",
				a: [
					"To practice Git, testing, UML, refactoring, tools, and development workflows",
					"To replace every lecture and cover all course concepts without demonstrations",
					"To complete quizzes for marks without practicing software engineering skills",
					"To avoid development tools and workflows while learning software engineering",
				],
				c: 0,
			},
			{
				q: "What makes the assignments different from simple coding exercises?",
				a: [
					"They involve individual engineering challenges and require engineering decisions",
					"They focus on memorizing programming syntax without making engineering decisions",
					"They are completed only through team collaboration rather than individual work",
					"They assess coding output while excluding software engineering concepts and practices",
				],
				c: 0,
			},
			{
				q: "What is the purpose of the team project?",
				a: [
					"To build and evolve a real software system as an engineering team",
					"To submit one final code file without development history",
					"To practice programming individually without collaboration",
					"To avoid using version control",
				],
				c: 0,
			},
			{
				q: "A student receives feedback on a failed test, revises the implementation, and adapts the solution. Which course learning activity does this demonstrate?",
				a: [
					"Feedback and reflection",
					"Project formation",
					"Assessment weighting",
					"Repository setup",
				],
				c: 0,
			},
			{
				q: "Which sequence best describes the broader learning cycle shown in the course?",
				a: [
					"Hear it → See it → Try it → Apply it → Explain it → Improve it",
					"Hear it → Memorize it → Submit it → Forget it → Repeat it",
					"Code it → Submit it → Ignore it → Finish it",
					"Read it → Test it → Delete it → Replace it",
				],
				c: 0,
			},
			{
				q: "What does 'Assessment = Show Me You Can Engineer' emphasize?",
				a: [
					"Students are expected to demonstrate engineering ability rather than simply produce working code",
					"Students are evaluated exclusively on the speed at which they can produce code",
					"Students can demonstrate achievement by memorizing course terminology alone",
					"Assessment does not consider the decisions students make while engineering software",
				],
				c: 0,
			},
			{
				q: "A student completes an assignment but cannot explain why they selected their architecture. Based on the course assessment philosophy, what is missing?",
				a: [
					"Engineering reasoning and justification for the decision",
					"More lines of source code",
					"A second programming language",
					"A larger GitHub repository",
				],
				c: 0,
			},
			{
				q: "Which topics are specifically associated with Assignment A1?",
				a: [
					"Requirements, Process, Planning, and Risk",
					"Testing, Quality, Refactoring, and Change",
					"UML, Architecture, Trade-offs, and AI Critique",
					"Cloud, APIs, and Microservices",
				],
				c: 0,
			},
			{
				q: "Which topics are specifically associated with Assignment A2?",
				a: [
					"Testing, Quality, Refactoring, and Change",
					"Requirements, Process, Planning, and Risk",
					"UML, Architecture, Trade-offs, and AI Critique",
					"GitHub, teamwork, and project formation",
				],
				c: 0,
			},
			{
				q: "Which topics are specifically associated with Assignment A3?",
				a: [
					"UML, Architecture, Trade-offs, and AI Critique",
					"Requirements, Process, Planning, and Risk",
					"Testing, Quality, Refactoring, and Change",
					"Only Scrum and XP",
				],
				c: 0,
			},
			{
				q: "A team creates a working application, but the architecture is difficult to maintain. Which project evaluation category is most directly concerned with this issue?",
				a: [
					"Engineering Quality",
					"Correctness only",
					"Process Evidence only",
					"Team Formation",
				],
				c: 0,
			},
			{
				q: "A team can demonstrate that its application works, but cannot explain how it knows the system works. Which evaluation category is most directly affected?",
				a: [
					"Verification",
					"Engineering Quality",
					"Reasoning",
					"Team Formation",
				],
				c: 0,
			},
			{
				q: "Why is 'Because it works' not always considered an engineering justification?",
				a: [
					"A working result does not explain why a particular decision was made or provide evidence of the engineering process",
					"Working software has no value unless it is produced without any engineering process",
					"Engineering decisions should be accepted without explaining their reasoning or evidence",
					"A system cannot be checked against requirements once implementation is complete",
				],
				c: 0,
			},
			{
				q: "A team chooses a database technology because it is popular but cannot explain how it fits the project's requirements. What would the course expect the team to provide?",
				a: [
					"Reasoning that explains and justifies the engineering decision",
					"Only a screenshot of the database",
					"More GitHub commits without explanations",
					"A different programming language",
				],
				c: 0,
			},
			{
				q: "What is the first mandatory step in the project journey?",
				a: [
					"Team and project repository setup",
					"Final Engineering Release",
					"Iteration Release II",
					"Demo and Engineering Defense",
				],
				c: 0,
			},
			{
				q: "Why does the project use multiple engineering iterations instead of only one final submission?",
				a: [
					"The project is intended to be built and evolved through multiple stages of engineering work",
					"Multiple iterations prevent students from using version control",
					"The final release is not important",
					"Iteration makes requirements unnecessary",
				],
				c: 0,
			},
			{
				q: "What does the project Requirements + Plan stage provide before later development?",
				a: [
					"A defined understanding of requirements and a plan for the project",
					"A completed production application before design and implementation begin",
					"A repository README without analyzed requirements or a plan for project work",
					"A deployed software product before the team starts later development stages",
				],
				c: 0,
			},
			{
				q: "A team waits until the night before submission to create its GitHub commits so the repository looks active. Why does this conflict with the course expectations?",
				a: [
					"GitHub is intended to show the actual story and evolution of the project, not manufactured history",
					"GitHub repositories cannot record commits or preserve a history of project changes",
					"Course teams are prohibited from creating branches while collaborating on assignments",
					"Pull requests are intended for individual assignments and cannot be used by teams",
				],
				c: 0,
			},
			{
				q: "What can GitHub commits tell an instructor about a project?",
				a: [
					"What changed during development",
					"Which programming language the instructor prefers",
					"How much money the project cost",
					"Whether the project will never need maintenance",
				],
				c: 0,
			},
			{
				q: "What can branches demonstrate in the project's GitHub repository?",
				a: [
					"How work was organized",
					"Whether users liked the application",
					"How many students are in the university",
					"Whether the application is physically secure",
				],
				c: 0,
			},
			{
				q: "What can pull requests and reviews demonstrate?",
				a: [
					"How team members collaborated and reviewed changes",
					"Which requirements were written before the project began",
					"How much cloud storage was purchased",
					"Whether the application is guaranteed to be bug-free",
				],
				c: 0,
			},
			{
				q: "What can issues and backlog information show?",
				a: [
					"What the team was working on",
					"Which programming language is objectively best",
					"How many lines of code are required for the project",
					"Whether the instructor approved every commit",
				],
				c: 0,
			},
			{
				q: "A team has extensive GitHub history showing commits, branches, pull requests, tests, and changes over time. Why is this valuable according to the slideshow?",
				a: [
					"The repository provides evidence of how the team engineered and evolved the software",
					"GitHub automatically proves that the software has no defects",
					"The repository replaces the need for testing",
					"GitHub makes project requirements unnecessary",
				],
				c: 0,
			},
			{
				q: "What are the three major elements of successful software engineering?",
				a: [
					"People, Process, and Technology",
					"Code, Hardware, and Networks",
					"Users, Databases, and Servers",
					"Planning, Coding, and Deployment",
				],
				c: 0,
			},
			{
				q: "What is the main role of the people involved in software engineering?",
				a: [
					"They provide skills, collaboration, communication, creativity, and human judgment",
					"They are responsible only for writing source code and contribute no other skills",
					"They coordinate informally so a defined software development process is unnecessary",
					"They remove the need for software tools and technology throughout development",
				],
				c: 0,
			},
			{
				q: "According to the slideshow, what is the main purpose of a software process?",
				a: [
					"To structure and coordinate how software development work gets done",
					"To replace developers with automated tools",
					"To ensure every project uses exactly the same model",
					"To eliminate all changes to requirements",
				],
				c: 0,
			},
			{
				q: "Why can great technology become a liability when used without the right people and process?",
				a: [
					"Technology alone cannot replace human judgment, coordination, and engineering discipline",
					"Using advanced technology inevitably creates software that is unreliable and difficult to maintain",
					"Software developers cannot use technology tools as part of their engineering work",
					"Technology tools prevent team members from communicating or coordinating their work",
				],
				c: 0,
			},
			{
				q: "Which sequence represents the Software Development Life Cycle presented?",
				a: [
					"Specification → Design → Implementation → Validation → Maintenance & Evolution",
					"Design → Implementation → Specification → Maintenance → Validation",
					"Implementation → Specification → Design → Validation → Maintenance",
					"Validation → Design → Specification → Implementation → Maintenance",
				],
				c: 0,
			},
			{
				q: "What is the purpose of the Specification stage?",
				a: [
					"To specify what the software should do and its constraints",
					"To convert the design into working code",
					"To test individual units",
					"To modify the system after release",
				],
				c: 0,
			},
			{
				q: "What happens during the Design stage?",
				a: [
					"The organization of the software's components is defined",
					"Customer requirements are completely ignored",
					"The system is immediately deployed",
					"Only maintenance tasks are performed",
				],
				c: 0,
			},
			{
				q: "What is the purpose of the Implementation stage?",
				a: [
					"To convert the conceptual design into a real software system",
					"To determine whether the customer wants the product",
					"To gather only future requirements",
					"To replace the software process",
				],
				c: 0,
			},
			{
				q: "What does Validation check?",
				a: [
					"Whether the software does what the customer wants",
					"Whether developers used the same programming language",
					"Whether the design document is long enough",
					"Whether the project has enough developers",
				],
				c: 0,
			},
			{
				q: "What is the purpose of Maintenance and Evolution?",
				a: [
					"To change the system in response to changing customer or market needs",
					"To prevent any changes after deployment",
					"To rewrite the entire system after every release",
					"To remove customer feedback",
				],
				c: 0,
			},
			{
				q: "What is the Opportunistic model?",
				a: [
					"An ad-hoc approach where developers directly build the software without systematically applying software engineering principles",
					"A rigorously structured lifecycle that defines formal verification activities for every stage",
					"A development approach that relies exclusively on customer-facing prototypes for its planning",
					"An iterative lifecycle that selects each activity according to a systematic risk analysis",
				],
				c: 0,
			},
			{
				q: "A beginner immediately starts coding without defining requirements, design, testing, or maintenance plans. Which model does this most closely represent?",
				a: ["Opportunistic development", "Waterfall", "V-Model", "Prototyping"],
				c: 0,
			},
			{
				q: "What is a major danger of the Opportunistic model?",
				a: [
					"Client requirements may not be properly met because there is no systematic process",
					"Client requirements may become excessively detailed and slow the team down",
					"Testing may begin before implementation is complete and disrupt development",
					"Frequent changes may occur even when the system is well planned",
				],
				c: 0,
			},
			{
				q: "Why can Opportunistic development result in high maintenance costs?",
				a: [
					"There is no clear plan for maintenance and design can deteriorate, making future changes difficult",
					"The model produces excessive documentation that must be maintained after every change",
					"The model requires repeated testing stages that make each maintenance task more expensive",
					"The model prevents developers from modifying the source code after the first release",
				],
				c: 0,
			},
			{
				q: "What is the central idea of the Waterfall model?",
				a: [
					"Complete one major stage before moving to the next, with defined outcomes for each stage",
					"Continuously change requirements throughout development",
					"Build multiple prototypes and discard them",
					"Perform testing before defining requirements",
				],
				c: 0,
			},
			{
				q: "Which project would be the best fit for the Waterfall model?",
				a: [
					"A project with stable, well-understood requirements and clear milestones and deliverables",
					"A project whose requirements change frequently as users review each new version",
					"A project in which customers need prototypes to discover their requirements",
					"A project that depends on continual experiments to reduce technical uncertainty",
				],
				c: 0,
			},
			{
				q: "Why does Waterfall struggle when requirements change frequently?",
				a: [
					"Changes can require significant rework across design, code, and testing",
					"Waterfall has no documentation",
					"Waterfall does not have defined stages",
					"Waterfall prevents developers from writing code",
				],
				c: 0,
			},
			{
				q: "A government project has stable requirements, strict documentation requirements, and contract-driven milestones. Which process model may be appropriate?",
				a: [
					"Waterfall",
					"Opportunistic",
					"Evolutionary Prototyping",
					"Only Agile",
				],
				c: 0,
			},
			{
				q: "A company discovers a major requirement mistake late in a Waterfall project. Why could fixing it be expensive?",
				a: [
					"The mistake may affect completed design, code, and testing stages and require significant rework",
					"Waterfall projects cannot define or document requirements at any stage of development",
					"The Waterfall process automatically erases completed project work when requirements change",
					"Waterfall projects prohibit testing, so teams must rebuild the system to check it",
				],
				c: 0,
			},
			{
				q: "Which statement best describes a limitation of Waterfall?",
				a: [
					"It provides structure and predictability but handles changing requirements poorly",
					"It has no defined stages",
					"It does not allow documentation",
					"It is designed specifically for constantly changing requirements",
				],
				c: 0,
			},
			{
				q: "What is the V-Model?",
				a: [
					"An extension of Waterfall that connects development activities with corresponding testing activities",
					"An ad-hoc process that skips implementation and has no planned testing activities",
					"A lifecycle that removes requirements definition from the software development process",
					"A development approach that builds prototypes but never implements a production system",
				],
				c: 0,
			},
			{
				q: "What is the main difference between Verification and Validation in the V-Model?",
				a: [
					"Verification asks whether we are building the product right, while Validation asks whether we are building the right product",
					"Verification asks what customers want, while Validation writes the code",
					"Verification happens only after deployment, while Validation happens before requirements",
					"There is no difference between them",
				],
				c: 0,
			},
			{
				q: "A developer reviews a design against its specification without executing the software. Is this primarily verification or validation?",
				a: ["Verification", "Validation", "Maintenance", "Implementation"],
				c: 0,
			},
			{
				q: "A testing team executes the completed software to determine whether it meets customer needs. Is this primarily verification or validation?",
				a: ["Validation", "Verification", "Specification", "Design"],
				c: 0,
			},
			{
				q: "In the V-Model, what testing activity corresponds to Business Requirements?",
				a: [
					"Acceptance Testing",
					"Unit Testing",
					"Component Testing",
					"System/Integration Testing",
				],
				c: 0,
			},
			{
				q: "In the V-Model, what testing activity corresponds to Low-Level Design?",
				a: [
					"Unit Testing",
					"Acceptance Testing",
					"System Testing",
					"Integration Testing",
				],
				c: 0,
			},
			{
				q: "Why does the V-Model encourage thinking about testing while requirements and design are being created?",
				a: [
					"Development decisions on the left side guide corresponding testing activities on the right side",
					"Testing must be finished before a team is allowed to document any requirements",
					"Planning tests during design prevents developers from implementing the software",
					"Connecting development and testing activities removes the need to validate the product",
				],
				c: 0,
			},
			{
				q: "What is a major strength of the V-Model?",
				a: [
					"Testing is considered early and systematically, with a clear relationship between development and testing",
					"It guarantees that project teams will never need to revisit completed work",
					"It is particularly effective when requirements change continuously throughout development",
					"It completes development without producing or maintaining project documentation",
				],
				c: 0,
			},
			{
				q: "What is a major limitation of the V-Model?",
				a: [
					"It remains relatively rigid and can have difficulty accommodating changing requirements",
					"It has no connection between development and testing",
					"It does not support defect detection",
					"It has no defined development stages",
				],
				c: 0,
			},
			{
				q: "What is the central idea behind the Prototyping model?",
				a: [
					"Build an early version, let customers evaluate it, refine requirements, and repeat until requirements are better understood",
					"Finalize every requirement before customers are shown any early version of the system",
					"Withhold prototypes and customer feedback until the complete product is ready for deployment",
					"Implement the production system immediately without experiments or intermediate versions",
				],
				c: 0,
			},
			{
				q: "A customer cannot clearly explain what they want from a new application. Which process model is particularly appropriate according to the slideshow?",
				a: [
					"Prototyping",
					"Waterfall",
					"Opportunistic development",
					"V-Model only",
				],
				c: 0,
			},
			{
				q: "Why are prototypes useful when requirements are unclear?",
				a: [
					"Customers can evaluate something concrete and provide feedback that helps clarify missing or misunderstood requirements",
					"Prototypes let developers determine requirements without involving customers at any stage",
					"Evaluating a prototype guarantees the finished system will contain no software defects",
					"Prototypes ensure that customer requirements remain fixed throughout development",
				],
				c: 0,
			},
			{
				q: "What is the key difference between throw-away and evolutionary prototyping?",
				a: [
					"Throw-away prototypes are discarded after learning, while evolutionary prototypes are progressively refined toward the required system",
					"Throw-away prototypes become the final product while evolutionary prototypes are discarded",
					"Both approaches always produce the final system immediately",
					"There is no difference between the two",
				],
				c: 0,
			},
			{
				q: "A team creates a quick user-interface prototype to discover what customers actually want, then discards the prototype before building the real system. What type of prototyping is this?",
				a: [
					"Throw-away prototyping",
					"Evolutionary prototyping",
					"Waterfall prototyping",
					"V-Model prototyping",
				],
				c: 0,
			},
			{
				q: "A team repeatedly improves its prototype based on user feedback until the prototype becomes the required system. What type of prototyping is this?",
				a: [
					"Evolutionary prototyping",
					"Throw-away prototyping",
					"Opportunistic development",
					"Waterfall",
				],
				c: 0,
			},
			{
				q: "A customer assumes that a prototype is ready for production even though it was built only to answer specific questions. What problem does this demonstrate?",
				a: [
					"A prototype may be mistaken for a finished product even though its purpose is learning and evaluation",
					"Waterfall can prevent teams from changing requirements after they have been documented",
					"The V-Model cannot connect software development activities with testing activities",
					"Customers are unable to review prototypes or provide feedback during development",
				],
				c: 0,
			},
			{
				q: "What is the main focus of the Spiral Model?",
				a: [
					"Identifying and reducing important risks throughout development",
					"Completing all requirements before any development begins",
					"Delivering the entire system before collecting feedback",
					"Avoiding prototypes and experiments during development",
				],
				c: 0,
			},
			{
				q: "A team understands the requirements for a new AI-based feature, but they are unsure whether the technology will perform accurately enough. Which process model best addresses this situation?",
				a: [
					"Spiral Model because it uses risk analysis to investigate uncertain solutions",
					"Waterfall because all requirements should be completed before development",
					"Opportunistic development because the team should immediately start coding",
					"V-Model because testing only happens after the implementation is complete",
				],
				c: 0,
			},
			{
				q: "What are the four main sectors of the Spiral Model?",
				a: [
					"Determine objectives, identify and resolve risks, develop the next version, review and plan the next phase",
					"Gather requirements, write documentation, deploy the system, retire the system",
					"Design the interface, write code, release the product, collect complaints",
					"Plan the entire project, build everything, test everything, deliver everything",
				],
				c: 0,
			},
			{
				q: "In the Spiral Model, what happens during the 'Determine Objectives' sector?",
				a: [
					"The team identifies objectives, alternatives, and constraints for the next cycle",
					"The team deploys the finished product to all users",
					"The team performs only final acceptance testing",
					"The team removes all previous prototypes from the project",
				],
				c: 0,
			},
			{
				q: "What is the purpose of the 'Identify & Resolve Risks' sector in the Spiral Model?",
				a: [
					"To analyze risks, explore alternatives, and reduce uncertainty before making larger commitments",
					"To ensure every requirement is permanently fixed before development starts",
					"To replace all testing with customer interviews",
					"To complete the final system documentation before coding begins",
				],
				c: 0,
			},
			{
				q: "A Spiral Model loop has finished development and validation. What should happen next?",
				a: [
					"The team reviews what was learned and plans the next phase",
					"The team automatically ends the entire project",
					"The team returns to the original requirements without considering new information",
					"The team discards the software regardless of its quality",
				],
				c: 0,
			},
			{
				q: "What does moving outward through the Spiral Model loops generally represent?",
				a: [
					"More knowledge, more investment, and a more complete system",
					"Less testing, less knowledge, and fewer project commitments",
					"A reduction in requirements and a smaller final system",
					"A move away from risk analysis toward completely fixed planning",
				],
				c: 0,
			},
			{
				q: "What is the purpose of the first Spiral Model loop?",
				a: [
					"To explore whether the idea can work using techniques such as experiments, prototypes, or feasibility studies",
					"To deliver every feature in the complete plan before evaluating technical feasibility",
					"To finish the production system so it can be released without further development loops",
					"To maintain an existing system without investigating the feasibility of new ideas",
				],
				c: 0,
			},
			{
				q: "A team uses a small experiment to determine whether a new technology is feasible before committing significant resources. Which Spiral loop activity does this best represent?",
				a: [
					"Loop 1 — Explore",
					"Loop 2 — Understand & Refine",
					"Loop 3 — Develop Further",
					"Later loops — Toward the Complete System",
				],
				c: 0,
			},
			{
				q: "What is the main purpose of Loop 2 in the Spiral Model?",
				a: [
					"To understand what has been learned, refine requirements, and investigate remaining risks and alternatives",
					"To release the complete production system to customers before evaluating remaining risks",
					"To end all planning activities so the team can proceed without revisiting decisions",
					"To perform final acceptance testing without refining requirements or examining alternatives",
				],
				c: 0,
			},
			{
				q: "Which activities are associated with Loop 3 of the Spiral Model?",
				a: [
					"Design, implementation, and testing to further develop and validate the solution",
					"Only brainstorming and identifying initial project objectives",
					"Only gathering customer opinions without building anything",
					"Only planning the project's budget and schedule",
				],
				c: 0,
			},
			{
				q: "Which statement correctly describes the relationship between the Spiral Model and prototyping?",
				a: [
					"Prototypes can be used as risk-reduction techniques within the Spiral Model, but the Spiral Model is not the same as prototyping",
					"The Spiral Model and prototyping are interchangeable names for the same development lifecycle",
					"Spiral development prohibits prototypes because risks can only be assessed after implementation",
					"The Spiral Model is another term for refining one prototype until it becomes the final system",
				],
				c: 0,
			},
			{
				q: "What is a major strength of the Spiral Model?",
				a: [
					"Major risks can be identified and addressed before larger commitments are made",
					"All project requirements are guaranteed to remain unchanged",
					"It eliminates the need for experienced risk analysis",
					"It always requires exactly four development loops",
				],
				c: 0,
			},
			{
				q: "Why can the Spiral Model have significant management overhead?",
				a: [
					"Repeated risk analysis, development, and evaluation require additional effort",
					"Every loop must produce a completely separate final product",
					"The model does not allow any automation",
					"The model requires every developer to work independently",
				],
				c: 0,
			},
			{
				q: "Why does the Spiral Model require risk expertise?",
				a: [
					"Effective identification and analysis of important risks can be difficult",
					"Every project must use the same predetermined risk list",
					"Risk analysis is performed only after deployment",
					"Risk expertise is needed to prevent developers from writing code",
				],
				c: 0,
			},
			{
				q: "Which project is the best fit for the Spiral Model?",
				a: [
					"A large, complex system with significant technical uncertainty and high-risk decisions",
					"A tiny project with no significant uncertainty and a very small scope",
					"A simple program where requirements and implementation are already completely known",
					"A small script that will be discarded after one use",
				],
				c: 0,
			},
			{
				q: "What is the key idea behind choosing a software process model?",
				a: [
					"Different projects have different needs, so the process should match the project's requirements, change, feedback, risk, and context",
					"All projects should follow one standard process regardless of their scope or constraints",
					"Agile should be chosen for every project without considering its risks or requirements",
					"The process with the longest history is always the best fit for a new project",
				],
				c: 0,
			},
			{
				q: "What is the main difference between Plan-Driven and Agile development?",
				a: [
					"Plan-Driven emphasizes more planning upfront, while Agile plans throughout development and adapts to change",
					"Plan-Driven does not involve planning, while Agile requires all planning before coding",
					"Plan-Driven uses testing while Agile does not",
					"Agile requires all requirements to be finalized before development",
				],
				c: 0,
			},
			{
				q: "How are requirements generally handled in Plan-Driven development compared with Agile development?",
				a: [
					"Plan-Driven defines requirements earlier, while Agile allows requirements to evolve",
					"Plan-Driven avoids requirements, while Agile fixes every requirement permanently",
					"Both approaches require all requirements to remain unchanged",
					"Agile defines all requirements before development and Plan-Driven discovers them after deployment",
				],
				c: 0,
			},
			{
				q: "A project uses short iterations, regularly delivers increments, and incorporates changing requirements. Which approach does this describe?",
				a: [
					"Agile development",
					"Opportunistic development",
					"Traditional Waterfall development",
					"Strictly plan-driven development",
				],
				c: 0,
			},
			{
				q: "Which statement about planning in Agile is correct?",
				a: [
					"Agile involves planning throughout development rather than eliminating planning",
					"Agile means the team does not need a plan",
					"Agile requires every project decision to be made before development begins",
					"Agile replaces planning with random development",
				],
				c: 0,
			},
			{
				q: "Why can Agile be useful for software projects?",
				a: [
					"Teams often learn what they really need while building the software and receiving feedback",
					"Software requirements never change once development begins",
					"Agile prevents customers from changing priorities",
					"Agile eliminates the need for users to provide feedback",
				],
				c: 0,
			},
			{
				q: "A team delivers a working feature, receives user feedback, learns from it, and changes the next version. Which Agile cycle does this demonstrate?",
				a: [
					"Deliver → Feedback → Learn → Adapt → Deliver Again",
					"Plan → Freeze → Document → Deploy → Stop",
					"Design → Code → Ignore Feedback → Release → Repeat",
					"Requirements → Contract → Implementation → Retirement",
				],
				c: 0,
			},
			{
				q: "Why does the lecture emphasize that Agile is more than simply being fast?",
				a: [
					"Moving quickly without feedback can result in moving quickly in the wrong direction",
					"Agile requires developers to avoid delivering software quickly",
					"Agile means completing the entire project before collecting feedback",
					"Being fast automatically guarantees software quality",
				],
				c: 0,
			},
			{
				q: "Which of the following best describes the Agile mindset?",
				a: [
					"Deliver value, collaborate, learn from feedback, embrace useful change, and improve continuously",
					"Follow the original plan regardless of new information",
					"Avoid customer involvement until the project is complete",
					"Focus primarily on producing documentation instead of working software",
				],
				c: 0,
			},
			{
				q: "Which statement is one of the four Agile Manifesto values?",
				a: [
					"Individuals and interactions over processes and tools",
					"Processes and tools over individuals and interactions",
					"Comprehensive documentation over working software",
					"Following a plan over responding to change",
				],
				c: 0,
			},
			{
				q: "A customer requests an important change after seeing the first working version of a system. According to the Agile Manifesto in practice, what should the team do?",
				a: [
					"Discuss the value and impact of the change, then adapt appropriately",
					"Reject the request because the original requirements were finalized",
					"Implement the change immediately without discussing its impact",
					"Ignore the request until the entire system is completed",
				],
				c: 0,
			},
			{
				q: "What does 'Working software over comprehensive documentation' mean in the Agile Manifesto?",
				a: [
					"Working software is valued more, while documentation still has value",
					"Agile teams should never create documentation",
					"Documentation is always more important than working software",
					"Agile teams should only document the project after it is cancelled",
				],
				c: 0,
			},
			{
				q: "Which Agile theme focuses on delivering useful software early and frequently?",
				a: ["Value", "Change", "People", "Quality & Improvement"],
				c: 0,
			},
			{
				q: "Which Agile theme emphasizes collaboration, communication, and trust within the team?",
				a: ["People", "Value", "Change", "Quality & Improvement"],
				c: 0,
			},
			{
				q: "When is Agile particularly helpful?",
				a: [
					"When requirements may evolve, frequent delivery creates value, and customers can provide feedback",
					"When requirements must never change and customer feedback is impossible",
					"When the project cannot be divided into useful increments",
					"When stakeholders are unavailable throughout development",
				],
				c: 0,
			},
			{
				q: "A team cannot regularly access customers for feedback and the project requires strict regulatory traceability. What should the team recognize about Agile?",
				a: [
					"Agile may face challenges because customer availability and compliance requirements can affect how it is applied",
					"Agile automatically eliminates the need for customer involvement and traceability",
					"Agile requires the team to remove all documentation",
					"Agile guarantees that regulatory requirements no longer apply",
				],
				c: 0,
			},
			{
				q: "Why can too little documentation become a problem for an Agile project?",
				a: [
					"It can make maintenance and onboarding more difficult",
					"It guarantees that requirements will never change",
					"It prevents working software from being delivered",
					"It eliminates the need for technical discipline",
				],
				c: 0,
			},
			{
				q: "What is the relationship between Agile and Scrum?",
				a: [
					"Agile is a set of values, principles, and a mindset, while Scrum is one framework for applying Agile ideas",
					"Agile and Scrum are exactly the same thing",
					"Scrum is a software development language and Agile is a testing tool",
					"Agile is a Scrum-specific documentation standard",
				],
				c: 0,
			},
			{
				q: "A team argues that Agile means accepting every requirement change immediately. Which response is most accurate?",
				a: [
					"Agile welcomes useful change, but teams still need to discuss value, impact, and appropriate adaptation",
					"Agile requires every requested change to be implemented immediately",
					"Agile prohibits all requirement changes after development starts",
					"Agile means requirements do not need to be evaluated",
				],
				c: 0,
			},
			{
				q: "What is the main idea behind Extreme Programming (XP)?",
				a: [
					"Take proven software-development practices and apply them continuously and intensively",
					"Avoid automated testing so developers can work faster",
					"Complete all requirements before writing any code",
					"Use large releases with long periods between feedback",
				],
				c: 0,
			},
			{
				q: "When is XP particularly applicable?",
				a: [
					"When requirements change frequently, the team is small and collaborative, and automated testing is possible",
					"When requirements never change and the team works independently",
					"When customer feedback is unavailable and testing cannot be automated",
					"When development consists of one large release with no intermediate versions",
				],
				c: 0,
			},
			{
				q: "What does XP require regarding tests and builds?",
				a: [
					"All tests should run with each build and all tests must pass for the build to be accepted",
					"Tests should only be performed after the entire project is completed",
					"Only the newest feature needs to be tested after each release",
					"Tests are optional when the development team is experienced",
				],
				c: 0,
			},
			{
				q: "What is incremental planning in XP?",
				a: [
					"Selecting release stories based on available time and relative priority, then breaking stories into development tasks",
					"Creating a complete detailed plan that cannot change during development",
					"Allowing developers to choose features without considering priorities",
					"Planning only after the final software release",
				],
				c: 0,
			},
			{
				q: "What is the goal of small releases in XP?",
				a: [
					"Develop minimal useful functionality that provides business value and release it frequently",
					"Delay all releases until every planned feature is completed",
					"Release large amounts of functionality as rarely as possible",
					"Release unfinished software without collecting feedback",
				],
				c: 0,
			},
			{
				q: "What does the XP practice of simple design recommend?",
				a: [
					"Do enough design to meet the current requirements and no more",
					"Design every possible future feature before development begins",
					"Avoid design completely and immediately begin coding",
					"Create the most complex architecture possible for future expansion",
				],
				c: 0,
			},
			{
				q: "What is Test-First Development in XP?",
				a: [
					"Writing automated unit tests for new functionality before implementing the functionality",
					"Writing tests only after the software has been released",
					"Testing only the user interface before writing the application logic",
					"Allowing customers to manually test every line of code",
				],
				c: 0,
			},
			{
				q: "A developer notices that an existing section of code can be simplified without changing its behavior. Which XP practice addresses this?",
				a: [
					"Refactoring",
					"Collective Ownership",
					"Planning Game",
					"On-Site Customer",
				],
				c: 0,
			},
			{
				q: "What is pair programming?",
				a: [
					"Two developers work together, checking each other's work and providing continuous support",
					"Two customers independently write requirements for the same feature",
					"Two teams develop completely separate versions of the same system",
					"A developer writes code while another developer performs only project management",
				],
				c: 0,
			},
			{
				q: "What is the purpose of collective ownership in XP?",
				a: [
					"All developers share responsibility for the code so that no isolated islands of expertise develop",
					"Only the original developer is allowed to modify a section of code",
					"Each developer owns a permanent section of the system and cannot modify other areas",
					"Customers are given direct control over the source code",
				],
				c: 0,
			},
			{
				q: "What happens during continuous integration in XP?",
				a: [
					"Completed work is integrated into the whole system and the unit tests must pass after integration",
					"Developers wait until the end of the project before combining their code",
					"Only documentation is integrated after each task",
					"The entire system is rewritten after every completed task",
				],
				c: 0,
			},
			{
				q: "Why does XP promote a sustainable pace?",
				a: [
					"Excessive overtime can reduce code quality and medium-term productivity",
					"Developers should work as many hours as possible to maximize output",
					"Shorter work hours eliminate the need for testing",
					"Sustainable pace allows teams to avoid releasing software frequently",
				],
				c: 0,
			},
			{
				q: "What is the role of the on-site customer in XP?",
				a: [
					"A representative of the end user is available to the team and brings system requirements to them",
					"The customer writes all of the source code for the development team",
					"The customer is responsible only for testing after deployment",
					"The customer manages the development team's working hours",
				],
				c: 0,
			},
			{
				q: "What is the main purpose of fine-grained feedback in XP?",
				a: [
					"To shorten the feedback loop so problems and misunderstandings can be discovered earlier",
					"To reduce communication between developers and customers",
					"To postpone feedback until after the final release",
					"To eliminate the need for automated testing",
				],
				c: 0,
			},
			{
				q: "Which sequence best represents the continuous process emphasized in XP?",
				a: [
					"Integrate → Test → Improve → Deliver → Repeat",
					"Plan → Freeze → Code → Stop → Deploy",
					"Design → Document → Wait → Release → Retire",
					"Code → Release → Ignore feedback → Rewrite → Stop",
				],
				c: 0,
			},
			{
				q: "A development team wants to prevent knowledge about the system from becoming concentrated in one developer. Which XP practices are most directly relevant?",
				a: [
					"Collective ownership, pair programming, and shared understanding",
					"Small releases, simple design, and planning only",
					"Sprint planning, velocity, and product backlog",
					"Acceptance criteria, user stories, and story points",
				],
				c: 0,
			},
			{
				q: "What is Scrum?",
				a: [
					"An Agile framework for organizing iterative development",
					"A programming language used to implement Agile systems",
					"A testing method that replaces unit testing",
					"A documentation standard for software projects",
				],
				c: 0,
			},
			{
				q: "What is a Product Backlog?",
				a: [
					"A list of work the Scrum team may need to address",
					"A list containing only completed features",
					"A list of bugs that cannot be fixed",
					"A schedule containing only developer vacations",
				],
				c: 0,
			},
			{
				q: "Which item could appear in a Product Backlog?",
				a: [
					"Features, user stories, engineering improvements, architecture work, documentation, or investigation",
					"Only customer-facing features that will appear in the final interface",
					"Only tasks assigned to the ScrumMaster",
					"Only defects discovered after deployment",
				],
				c: 0,
			},
			{
				q: "What is the purpose of a Sprint?",
				a: [
					"To complete a selected amount of work within a fixed-length period and produce a product increment",
					"To continue indefinitely until every Product Backlog item is completed",
					"To replace the Product Backlog with a permanent project plan",
					"To perform only documentation work",
				],
				c: 0,
			},
			{
				q: "What happens to unfinished work when a Sprint ends?",
				a: [
					"It does not extend the Sprint and returns to the Product Backlog",
					"The Sprint is automatically extended until the work is finished",
					"It is permanently deleted from the Product Backlog",
					"It automatically becomes part of the next Sprint without replanning",
				],
				c: 0,
			},
			{
				q: "What is velocity in Scrum?",
				a: [
					"An estimate of how much Product Backlog effort a team can cover in one Sprint",
					"The number of developers assigned to a Scrum team",
					"The number of bugs found during testing",
					"The amount of time remaining before a Sprint ends",
				],
				c: 0,
			},
			{
				q: "How should previous Sprint velocity be used?",
				a: [
					"Observed velocity can help the team determine how much work it can reasonably select for the next Sprint",
					"Previous velocity should be ignored because every Sprint must contain the same amount of work",
					"Velocity determines which programming language the team must use",
					"Velocity guarantees that every future Sprint will have identical results",
				],
				c: 0,
			},
			{
				q: "What is the purpose of the Daily Scrum?",
				a: [
					"To review progress, identify problems, and coordinate what the team plans to do next",
					"To allow the ScrumMaster to assign every task individually",
					"To replace Sprint Reviews and Retrospectives",
					"To create the entire Product Backlog from scratch each day",
				],
				c: 0,
			},
			{
				q: "Which sequence best represents the purpose of the end-of-Sprint review process?",
				a: [
					"Review the product → review how the team worked → learn → feed improvements into the next Sprint",
					"Deploy the product → freeze requirements → stop testing → begin a new project",
					"Write requirements → code everything → avoid feedback → repeat the same Sprint",
					"Assign tasks → remove the Product Backlog → restart development",
				],
				c: 0,
			},
			{
				q: "What is a user story?",
				a: [
					"A short description of functionality from the perspective of a user or stakeholder",
					"A detailed technical design document written only for developers",
					"A list of programming tasks without a user or business purpose",
					"A complete specification of every system component",
				],
				c: 0,
			},
			{
				q: "Which format best represents a typical user story?",
				a: [
					"As a <type of user>, I want <user requirement> so that <rationale or benefit>",
					"The system must <technical implementation> using <programming language> because <developer preference>",
					"Developer: <task>; Tester: <bug>; Customer: <deadline>",
					"If <developer action>, then <database query>, because <technical constraint>",
				],
				c: 0,
			},
			{
				q: "Which user story is strongest according to the lecture?",
				a: [
					"As a student, I want to book an available counselling appointment so that I can receive support without calling the clinic",
					"As a user, I want a good website",
					"As a student, I want login, booking, cancellation, payment, reminders, profile editing, and AI recommendations",
					"Build the wellness system with all required features",
				],
				c: 0,
			},
			{
				q: "What does the 'I' in INVEST stand for?",
				a: ["Independent", "Integrated", "Iterative", "Important"],
				c: 0,
			},
			{
				q: "What does the 'N' in INVEST mean?",
				a: ["Negotiable", "Necessary", "Networked", "Normalized"],
				c: 0,
			},
			{
				q: "What does the 'V' in INVEST mean?",
				a: ["Valuable", "Verified", "Versioned", "Visual"],
				c: 0,
			},
			{
				q: "What does the 'T' in INVEST mean?",
				a: ["Testable", "Traceable", "Technical", "Timed"],
				c: 0,
			},
			{
				q: "What are the Three C's of a User Story?",
				a: [
					"Card → Conversation → Confirmation",
					"Code → Compile → Commit",
					"Customer → Coding → Completion",
					"Create → Change → Correct",
				],
				c: 0,
			},
			{
				q: "What is the purpose of the Conversation in the Three C's?",
				a: [
					"To discuss the story with stakeholders and explore its real value and details",
					"To automatically generate the source code for the story",
					"To permanently finalize every technical implementation detail",
					"To replace acceptance tests with informal discussion",
				],
				c: 0,
			},
			{
				q: "What is the purpose of acceptance criteria?",
				a: [
					"To define the conditions that must be satisfied for a user story to be accepted",
					"To determine which developer should receive the story",
					"To estimate the team's velocity without testing the story",
					"To describe the complete architecture of the software",
				],
				c: 0,
			},
			{
				q: "Which format is used for the acceptance-test structure shown in the lecture?",
				a: [
					"Given → When → Then",
					"Who → What → Why",
					"Plan → Build → Release",
					"Card → Conversation → Confirmation",
				],
				c: 0,
			},
			{
				q: "What is the main purpose of the Planning Game?",
				a: [
					"To plan work by combining customer priorities with developer estimates and risk information",
					"To allow developers to choose requirements without customer involvement",
					"To create a fixed plan that cannot change during development",
					"To replace user stories with technical documentation",
				],
				c: 0,
			},
			{
				q: "Who participates in Release Planning?",
				a: [
					"The customer and developers",
					"Only the developers",
					"Only the customer",
					"Only the project manager",
				],
				c: 0,
			},
			{
				q: "What is the main goal of Release Planning?",
				a: [
					"Select user stories and decide the schedule",
					"Convert every user story into programming tasks immediately",
					"Assign individual tasks to specific developers",
					"Review completed software from the previous iteration",
				],
				c: 0,
			},
			{
				q: "What is the main goal of Iteration Planning?",
				a: [
					"Convert user stories into tasks and assign them",
					"Determine the long-term business strategy of the organization",
					"Select the product's entire feature set",
					"Create the final project budget",
				],
				c: 0,
			},
			{
				q: "What is the customer's primary responsibility during the Planning Game?",
				a: [
					"Make decisions about requirements",
					"Provide developer effort estimates",
					"Calculate team velocity",
					"Assign programming tasks to developers",
				],
				c: 0,
			},
			{
				q: "What is the developer's responsibility during Release Planning?",
				a: [
					"Provide effort estimates, estimation confidence, risk assessment, and team velocity",
					"Determine which requirements are most valuable to customers",
					"Approve all business requirements without customer input",
					"Set the organization's marketing priorities",
				],
				c: 0,
			},
			{
				q: "During the Exploration phase of the Planning Game, what happens?",
				a: [
					"Customers provide or confirm stories while developers estimate difficulty, ask questions, and break large stories into smaller ones",
					"Customers choose stories for release and developers begin implementation without estimating them",
					"Developers assign every task to individuals before clarifying the customer stories",
					"The team evaluates the finished product and closes the project before planning stories",
				],
				c: 0,
			},
			{
				q: "During the Commitment phase of the Planning Game, what happens?",
				a: [
					"Customers prioritize stories by business value while developers consider risk and velocity before stories are selected",
					"Developers write acceptance tests while customers perform software testing",
					"Customers assign tasks directly to individual developers",
					"Developers permanently freeze the Product Backlog",
				],
				c: 0,
			},
			{
				q: "What is the purpose of the Steering phase of the Planning Game?",
				a: [
					"Adjust the plan during the iteration as new stories, changes, or removals arise",
					"Prevent any changes to the plan after the iteration begins",
					"Estimate all future projects at the beginning of development",
					"Replace the customer with the development team",
				],
				c: 0,
			},
			{
				q: "Why is exact effort estimation difficult?",
				a: [
					"Software work is difficult to predict precisely and estimates can be affected by complexity, uncertainty, and incomplete knowledge",
					"Software tasks have fixed durations that remain identical across teams and project conditions",
					"Developers receive complete information about every requirement before making an estimate",
					"Software projects use the same technology, scope, and requirements, making estimates uniform",
				],
				c: 0,
			},
			{
				q: "Which approach uses formulas derived from historical data for effort estimation?",
				a: [
					"Formal estimation models such as COCOMO, SLIM, and SEER-SEM",
					"Group estimation through discussion and card-based planning poker sessions",
					"Judgment provided exclusively by one or more experienced developers",
					"Tracking completed story points to forecast a team's future iteration capacity",
				],
				c: 0,
			},
			{
				q: "What is expert estimation?",
				a: [
					"Using the judgment and opinions of one or more expert developers to estimate effort",
					"Using only a mathematical formula based on historical project data",
					"Allowing customers to assign story points without developer input",
					"Calculating effort only after the work has been completed",
				],
				c: 0,
			},
			{
				q: "What is combination-based estimation?",
				a: [
					"Using both formal estimation models and expert judgment",
					"Using only customer opinions",
					"Using only the team's previous velocity",
					"Using only the number of lines of code",
				],
				c: 0,
			},
			{
				q: "What is the main idea behind story points?",
				a: [
					"They estimate relative effort by comparing one user story with another",
					"They represent exact numbers of hours required to complete a story",
					"They measure only the financial cost of a user story",
					"They measure only the number of developers assigned to a story",
				],
				c: 0,
			},
			{
				q: "Which three factors are considered when estimating story points?",
				a: [
					"Amount of work, complexity of work, and risk or uncertainty",
					"Number of developers, project budget, and customer satisfaction",
					"Programming language, documentation size, and office location",
					"Schedule length, number of meetings, and number of customers",
				],
				c: 0,
			},
			{
				q: "Story A requires more work, is technically more difficult, and has greater uncertainty than Story B. What should generally happen to their story-point estimates?",
				a: [
					"Story A should receive more story points than Story B",
					"Story A should receive fewer story points than Story B",
					"Both stories should automatically receive the same number of points",
					"Story points cannot be used to compare the stories",
				],
				c: 0,
			},
			{
				q: "Why does the lecture emphasize relative effort rather than absolute effort when using story points?",
				a: [
					"Comparing stories helps teams estimate difficulty without pretending that an exact amount of time can be predicted",
					"Story points are intended to represent exact hours for every developer",
					"Relative estimates eliminate the need to compare different stories",
					"Story points are calculated directly from project salary costs",
				],
				c: 0,
			},
			{
				q: "Why can estimating software work directly in hours be difficult?",
				a: [
					"Humans are poor at estimating time and development work does not progress linearly",
					"Hours always produce estimates that are too large",
					"Software development always takes exactly the same amount of time",
					"Hours cannot be used to measure any form of software work",
				],
				c: 0,
			},
			{
				q: "What is a characteristic of story points in Scrum according to the lecture?",
				a: [
					"They represent relative effort and may use a Fibonacci sequence such as 1, 2, 3, 5, 8, 13, and 21",
					"They measure exact amounts of effort in one-hour units for every development task",
					"They are calculated by counting the lines of code required to implement each story",
					"They are assigned exclusively by the customer without estimates from developers",
				],
				c: 0,
			},
			{
				q: "What happens first in Planning Poker?",
				a: [
					"A story is selected for effort estimation",
					"The highest estimate is automatically accepted",
					"The customer assigns points to each developer",
					"The team calculates its final velocity",
				],
				c: 0,
			},
			{
				q: "During Planning Poker, what happens after everyone secretly selects an estimate?",
				a: [
					"Everyone reveals their cards simultaneously",
					"The developer with the highest estimate automatically wins",
					"Only the customer reveals their estimate",
					"The lowest estimate becomes the final answer",
				],
				c: 0,
			},
			{
				q: "During Planning Poker, two developers choose very different estimates. What should happen next?",
				a: [
					"The developers with the lowest and highest estimates explain their reasoning, then everyone revises their estimates",
					"The team should accept the highest estimate without discussing why it was selected",
					"The team should accept the lowest estimate without considering the other developer's reasoning",
					"The team should remove the story from the Product Backlog whenever estimates differ",
				],
				c: 0,
			},
			{
				q: "What is team velocity?",
				a: [
					"The amount of story points completed by a team during an iteration",
					"The number of developers working during an iteration",
					"The amount of time remaining in an iteration",
					"The number of user stories currently in the Product Backlog",
				],
				c: 0,
			},
			{
				q: "How can a team improve its estimates over multiple iterations?",
				a: [
					"Use previous performance, compare similar stories, and build domain knowledge from experience",
					"Ignore previous iterations and estimate every story from scratch",
					"Increase every estimate by the same number of story points",
					"Allow customers to determine all future story-point values",
				],
				c: 0,
			},
			{
				q: "What does the 'Yesterday's Weather' rule suggest about future team velocity?",
				a: [
					"The team's recent performance is a useful guide because today's results are likely to be more similar to recent results than unrelated values",
					"The team should plan to complete twice as much work as it finished in its most recent iteration",
					"The team should ignore its previous results when forecasting what it can complete next",
					"The team should use its highest recorded velocity as the guaranteed future rate",
				],
				c: 0,
			},
			{
				q: "When should risk management take place?",
				a: [
					"At the start of a project, at the start of Agile iterations, and at the start of major phases",
					"Only after the software is released and its risks can no longer affect development",
					"Only when a customer reports a defect in the product after it has been deployed",
					"Only after the final project review, when the team has finished all planned work",
				],
				c: 0,
			},
			{
				q: "What are the four steps of risk management presented in the lecture?",
				a: [
					"Risk identification, risk analysis, risk management planning, and risk review",
					"Risk coding, risk testing, risk deployment, and risk retirement",
					"Risk estimation, risk programming, risk release, and risk maintenance",
					"Risk planning, coding, documentation, and customer approval",
				],
				c: 0,
			},
			{
				q: "Which of the following is a project risk?",
				a: [
					"A risk affecting the project schedule, development process, or resources",
					"A risk affecting only the quality of the finished software",
					"A risk affecting only the organization's competitors",
					"A risk affecting only the user interface design",
				],
				c: 0,
			},
			{
				q: "A development team adopts a new game engine and is unsure whether it will perform well. What type of risk is this?",
				a: ["Product risk", "Project risk", "Business risk", "Scheduling risk"],
				c: 0,
			},
			{
				q: "A competitor releases a new product and the company's sales may decrease. What type of risk is this?",
				a: [
					"Business risk",
					"Product risk",
					"Project risk",
					"Implementation risk",
				],
				c: 0,
			},
			{
				q: "When analyzing the risk of a user story, what does completeness measure?",
				a: [
					"How well the details of the story are known",
					"How many developers are assigned to the story",
					"How many lines of code the story requires",
					"How much money the customer will spend",
				],
				c: 0,
			},
			{
				q: "A user story is highly likely to change during development. Which risk-analysis factor does this describe?",
				a: [
					"High volatility",
					"High completeness",
					"High simplicity",
					"Low complexity",
				],
				c: 0,
			},
			{
				q: "A user story is technically difficult and complicated to implement. Which risk-analysis factor should receive a higher value?",
				a: ["Complexity", "Completeness", "Volatility", "Priority"],
				c: 0,
			},
			{
				q: "A user story has a risk score of 5 using the lecture's completeness, volatility, and complexity scoring. How is the risk classified?",
				a: ["High risk", "Low risk", "Medium risk", "No risk"],
				c: 0,
			},
			{
				q: "A user story has Complete = 0, Medium Volatility = 1, and Complex = 2. What is its total risk score and classification?",
				a: [
					"3, which is Medium risk",
					"2, which is Medium risk",
					"4, which is High risk",
					"5, which is High risk",
				],
				c: 0,
			},
		],
	},

	CompGFX: {
		test1: [
			{
				q: "Which of the following best describes imaging in computer graphics?",
				a: [
					"Representing two-dimensional images for visual display",
					"Constructing three-dimensional objects from physical materials",
					"Simulating changes in objects over a period of time",
					"Calculating the movement of objects through three-dimensional space",
				],
				c: 0,
			},
			{
				q: "What is the primary purpose of modeling in computer graphics?",
				a: [
					"Representing three-dimensional objects and their geometry",
					"Converting rendered images into different colour models",
					"Simulating changes in an animation over time",
					"Applying filters to improve the appearance of photographs",
				],
				c: 0,
			},
			{
				q: "Which statement best describes rendering?",
				a: [
					"Constructing two-dimensional images from three-dimensional models",
					"Creating three-dimensional geometry from sampled image pixels",
					"Recording the physical movements of a person for later analysis",
					"Dividing a two-dimensional image into smaller regions for processing",
				],
				c: 0,
			},
			{
				q: "In computer graphics, what does animation primarily involve?",
				a: [
					"Simulating changes in objects or scenes over time",
					"Representing the geometry of objects using polygon meshes",
					"Converting continuous image values into discrete colour levels",
					"Constructing two-dimensional images from static three-dimensional models",
				],
				c: 0,
			},
			{
				q: "Which of the following is an example of image processing rather than 3D modeling?",
				a: [
					"Applying a filter to modify an existing image",
					"Constructing a polygon mesh to represent a character",
					"Creating a solid object using constructive solid geometry",
					"Defining a parametric curve to represent part of a model",
				],
				c: 0,
			},
			{
				q: "What is the purpose of sampling in image representation?",
				a: [
					"Representing an image by taking measurements at discrete spatial locations",
					"Determining how a 3D model should respond to lighting",
					"Defining the joints and degrees of freedom of an animated figure",
					"Combining multiple solid objects into a single geometric representation",
				],
				c: 0,
			},
			{
				q: "Which statement best describes quantization in image representation?",
				a: [
					"Mapping measured image values to a finite set of representable levels",
					"Increasing the number of geometric surfaces in a 3D model",
					"Calculating how light travels between objects in a scene",
					"Defining the sequence of key poses used in an animation",
				],
				c: 0,
			},
			{
				q: "What is aliasing associated with in computer graphics?",
				a: [
					"Artifacts that can occur when continuous visual information is represented discretely",
					"The process of combining solid objects using geometric operations",
					"The organization of objects into a hierarchical scene graph",
					"The simulation of coordinated movements among many animated characters",
				],
				c: 0,
			},
			{
				q: "Which of the following is listed as an image-processing operation?",
				a: [
					"Morphing an image from one appearance or shape toward another",
					"Creating a polygon mesh to represent a complex 3D object",
					"Applying inverse kinematics to determine joint configurations",
					"Using a scene graph to organize objects in a 3D environment",
				],
				c: 0,
			},
			{
				q: "What is the role of texture mapping in the 3D rendering pipeline?",
				a: [
					"Applying image-based surface detail to a three-dimensional model",
					"Converting a sequence of keyframes into motion-capture recordings",
					"Dividing three-dimensional space into smaller spatial regions",
					"Reconstructing a continuous image from a set of sampled values",
				],
				c: 0,
			},
			{
				q: "Which statement best distinguishes direct and global illumination as topics in rendering?",
				a: [
					"They concern approaches to representing how illumination affects a scene",
					"They describe different ways to organize animation keyframes",
					"They are methods for converting polygon meshes into point clouds",
					"They refer to different techniques for sampling two-dimensional images",
				],
				c: 0,
			},
			{
				q: "What is the purpose of viewing transformations in the rendering pipeline?",
				a: [
					"To establish how a scene is positioned and viewed from a viewing perspective",
					"To determine the number of colours available in a raster image",
					"To record the movement of joints during a live performance",
					"To convert a collection of surfaces into a solid using geometric operations",
				],
				c: 0,
			},
			{
				q: "Which geometric representation describes an object using a collection of points in space?",
				a: ["Point cloud", "Polygon mesh", "Scene graph", "Keyframe sequence"],
				c: 0,
			},
			{
				q: "What is a polygon mesh primarily used to represent?",
				a: [
					"A surface using connected polygonal elements",
					"An animation using a sequence of timed poses",
					"A photograph using a finite grid of colour values",
					"A hierarchy describing relationships between scene objects only",
				],
				c: 0,
			},
			{
				q: "Which statement best describes parametric curves and surfaces in 3D modeling?",
				a: [
					"They use parameters to define geometric curves or surfaces",
					"They store only the final two-dimensional pixels of a rendered image",
					"They record the positions of people using motion-capture equipment",
					"They simulate lighting by tracing the paths of individual rays",
				],
				c: 0,
			},
			{
				q: "What is constructive solid geometry primarily concerned with?",
				a: [
					"Constructing complex solids using operations on simpler geometric solids",
					"Animating crowds by coordinating the movement of individual characters",
					"Changing image colours through quantization and filtering",
					"Recording facial expressions for use in keyframe animation",
				],
				c: 0,
			},
			{
				q: "What is the main idea behind procedural modeling?",
				a: [
					"Generating geometric models through defined procedures or rules",
					"Manually changing every pixel of a finished rendered image",
					"Recording a person's movements and directly displaying the recordings",
					"Using a viewing transformation to determine the camera perspective",
				],
				c: 0,
			},
			{
				q: "Which statement best describes a scene graph in computer graphics?",
				a: [
					"A hierarchical structure for organizing objects and their relationships in a scene",
					"A sequence of image samples used to reconstruct a photograph",
					"A collection of recorded movements used to animate a character",
					"A technique for combining colours into a raster image",
				],
				c: 0,
			},
			{
				q: "What is the main purpose of motion capture in animation?",
				a: [
					"Recording real-world movement data for use in digital animation",
					"Automatically generating all object geometry from polygonal surfaces",
					"Converting a rendered scene into a collection of sampled pixels",
					"Applying geometric operations to combine several solid objects",
				],
				c: 0,
			},
			{
				q: "How does inverse kinematics differ conceptually from forward kinematics?",
				a: [
					"Inverse kinematics determines joint configurations from a desired end position, while forward kinematics calculates the resulting position from joint configurations",
					"Inverse kinematics reconstructs images from samples, while forward kinematics applies image filters",
					"Inverse kinematics records real-world motion, while forward kinematics creates polygon meshes",
					"Inverse kinematics calculates colour values, while forward kinematics determines texture coordinates",
				],
				c: 0,
			},
			{
				q: "Computer graphics is used only for entertainment and has no applications in scientific or educational settings.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "Subdivision surfaces are included among the topics related to three-dimensional object representations and modeling.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "Rendering and modeling refer to exactly the same process because both involve creating three-dimensional objects.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "The slideshow identifies computer-aided design, scientific visualization, training, education, e-commerce, and computer art as applications of computer graphics.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "Photorealistic and non-photorealistic graphics are both identified as possible goals of computer graphics.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "Why are different representations used to model 3D objects in computer graphics?",
				a: [
					"Different tasks have different requirements for acquisition, rendering, manipulation, animation, and analysis",
					"Different representations are required because every 3D object must use a different programming language",
					"Different representations are used primarily to ensure all objects require identical amounts of storage",
					"Different representations are necessary because computers cannot display objects defined using other methods",
				],
				c: 0,
			},
			{
				q: "How can the choice of a data structure influence a computer graphics application?",
				a: [
					"It determines which algorithms can be applied and how efficiently they operate",
					"It determines the physical dimensions of the computer running the application",
					"It ensures that every representation produces an identical rendering time",
					"It prevents the application from converting objects into other representations",
				],
				c: 0,
			},
			{
				q: "Which statement best describes a range image?",
				a: [
					"A two-dimensional grid whose pixel values represent distances or depth from a viewpoint",
					"An unstructured collection of three-dimensional points without a fixed spatial arrangement",
					"A hierarchy of solid objects combined through Boolean operations",
					"A connected collection of polygons that approximates an object's surface",
				],
				c: 0,
			},
			{
				q: "How can a range camera or scanner determine depth information?",
				a: [
					"It illuminates an object and uses the captured pattern together with known camera and light positions and orientations",
					"It records the object's colour and assumes that every pixel has the same depth",
					"It divides the object into voxels and measures the temperature of each volume element",
					"It connects sampled surface points into polygons and calculates depth from their colours",
				],
				c: 0,
			},
			{
				q: "What distinguishes a point cloud from a range image?",
				a: [
					"A point cloud is an unstructured set of 3D points, while a range image organizes depth measurements in a 2D grid",
					"A point cloud represents only solid interiors, while a range image represents only object colours",
					"A point cloud requires a fixed grid, while a range image contains points with unrestricted spatial organization",
					"A point cloud uses Boolean operations, while a range image uses hierarchical object instances",
				],
				c: 0,
			},
			{
				q: "Which statement describes how a point cloud can be acquired?",
				a: [
					"A 3D scanner measures distances to unobstructed surface locations, using contact or non-contact methods",
					"A rendering pipeline calculates the object's final colours and stores them as depth measurements",
					"A scene graph combines simple solids and records the resulting object's temperature",
					"A parametric equation generates every surface point without requiring measurements or geometric definitions",
				],
				c: 0,
			},
			{
				q: "What is a common purpose of collecting points on an object's external surface?",
				a: [
					"The collected points can later be used to reconstruct the object's surface",
					"The points automatically define every joint required for character animation",
					"The points directly specify all illumination calculations for the final image",
					"The points eliminate the need for any geometric representation of the object",
				],
				c: 0,
			},
			{
				q: "Which statement best describes a polygonal mesh?",
				a: [
					"A connected collection of polygons, commonly triangles, used to represent a 3D surface",
					"A regular three-dimensional array storing properties throughout a solid's interior",
					"A mathematical equation whose zero values define an implicit surface",
					"A hierarchy of simpler solid objects combined through Boolean operations",
				],
				c: 0,
			},
			{
				q: "How do subdivision surfaces produce smoother or more complex geometry?",
				a: [
					"They repeatedly refine an original coarse mesh according to a subdivision rule",
					"They increase image resolution by adding more pixels to the rendered image",
					"They rotate a curve around an axis to generate a surface of revolution",
					"They classify spatial regions into solid and empty cells using a binary tree",
				],
				c: 0,
			},
			{
				q: "How does a parametric surface define its geometry?",
				a: [
					"Parameters such as u and v are varied to trace a continuous set of three-dimensional points",
					"All points are selected independently without a mathematical relationship between them",
					"The object is divided into volume pixels, each storing a separate occupancy value",
					"The surface is defined exclusively by combining simpler solids through intersection and difference",
				],
				c: 0,
			},
			{
				q: "What happens to an ellipsoid's shape when its three radii are equal in the examples presented?",
				a: [
					"The surface becomes a sphere",
					"The surface becomes a flat polygonal mesh",
					"The surface becomes an unstructured point cloud",
					"The surface becomes a rectangular voxel grid",
				],
				c: 0,
			},
			{
				q: "Which statement best describes an implicit surface?",
				a: [
					"It consists of points satisfying an equation such as f(x, y, z) = 0",
					"It consists exclusively of connected triangular polygons with explicitly stored vertices",
					"It is generated only by rotating a curve around a specified axis",
					"It is a collection of depth values organized in a two-dimensional image",
				],
				c: 0,
			},
			{
				q: "For the implicit function, what do negative and positive function values indicate?",
				a: [
					"Negative values indicate points inside the surface, while positive values indicate points outside",
					"Negative values indicate points outside the surface, while positive values indicate points inside",
					"Negative values indicate the surface itself, while positive values always indicate the object's boundary",
					"Negative and positive values both indicate points that must lie directly on the surface",
				],
				c: 0,
			},
			{
				q: "What is the stated advantage of parametric surfaces for rendering?",
				a: [
					"Their parameters allow efficient traversal or marching along the surface",
					"Their equations automatically eliminate all storage requirements for geometric information",
					"Their structure makes every Boolean operation trivial regardless of the represented object",
					"Their points remain unchanged in number and position under every geometric transformation",
				],
				c: 0,
			},
			{
				q: "According to the slideshow, what is an advantage of implicit surfaces?",
				a: [
					"Their equation can make intersection calculations efficient",
					"Their regular grid guarantees that rotations preserve the exact voxel count",
					"Their hierarchy allows the same object definition to be reused without transformations",
					"Their connected polygons make subdivision rules unnecessary for smooth surfaces",
				],
				c: 0,
			},
			{
				q: "What is a voxel?",
				a: [
					"A volume pixel representing a sample in a regular three-dimensional array",
					"A polygon that connects three or more points on a surface",
					"A parameter that traces a curve across a three-dimensional model",
					"A node that stores only the parent-child relationships of a scene graph",
				],
				c: 0,
			},
			{
				q: "Which set of properties could be stored within individual voxels?",
				a: [
					"Occupancy, colour, density, and temperature",
					"Parent nodes, child nodes, and animation keyframe timestamps only",
					"Polygon connectivity, subdivision rules, and camera orientation only",
					"Curve parameters, surface intersections, and Boolean operation sequences only",
				],
				c: 0,
			},
			{
				q: "Why are voxels useful for representing the interiors of solid objects?",
				a: [
					"A 3D grid can store information throughout an object's volume rather than only along its surface",
					"They represent every object using a continuous equation without any discrete samples",
					"They require every object to have the same number of surface polygons",
					"They store only external surface points and cannot represent interior properties",
				],
				c: 0,
			},
			{
				q: "What is a major storage disadvantage of a dense voxel grid with n samples along each dimension?",
				a: [
					"Its storage requirement grows proportionally to n cubed",
					"Its storage requirement remains constant regardless of grid resolution",
					"Its storage requirement grows proportionally only to the square root of n",
					"Its storage requirement depends exclusively on the number of surface polygons",
				],
				c: 0,
			},
			{
				q: "What does it mean that voxel representations are not affine invariant in the rotation example?",
				a: [
					"A shape can occupy a different number of grid cells after rotation even though its actual shape has not changed",
					"A voxel object cannot be rotated because its three-dimensional grid has no coordinate system",
					"A rotation always changes the object's physical shape and therefore requires a new geometric definition",
					"A voxel grid preserves every occupied cell during rotation without introducing approximation",
				],
				c: 0,
			},
			{
				q: "Which combination lists advantages of voxel representations?",
				a: [
					"Simple and intuitive representation, consistent complexity, and straightforward Boolean operations",
					"Continuous surface definition, minimal storage, and exact preservation under rotation",
					"Efficient surface traversal, automatic smoothness, and compact parametric equations",
					"Reusable object definitions, hierarchical animation, and independent local coordinate systems",
				],
				c: 0,
			},
			{
				q: "How does a binary space partitioning (BSP) tree represent an object?",
				a: [
					"It recursively divides space using lines or planes and stores the resulting partitions in a binary tree",
					"It stores a regular grid of volume samples with colour and density in each cell",
					"It describes a surface by varying two parameters to generate continuous 3D points",
					"It repeatedly refines a coarse polygon mesh using a sequence of subdivision rules",
				],
				c: 0,
			},
			{
				q: "What is the main idea behind constructive solid geometry (CSG)?",
				a: [
					"Representing complex solids as hierarchies of Boolean operations on simpler shapes",
					"Representing an object's surface as an unstructured collection of measured 3D points",
					"Representing object depth as pixel values in a two-dimensional image",
					"Representing animation by recording and replaying the positions of moving joints",
				],
				c: 0,
			},
			{
				q: "Which operations are identified as fundamental Boolean operations in constructive solid geometry?",
				a: [
					"Union, intersection, and difference",
					"Sampling, reconstruction, and quantization",
					"Translation, rotation, and colour correction",
					"Subdivision, interpolation, and texture mapping",
				],
				c: 0,
			},
			{
				q: "How does a swept volume differ conceptually from a surface of revolution?",
				a: [
					"A swept volume moves a curve along another curve's path, while a surface of revolution rotates a curve about an axis",
					"A swept volume stores interior temperature values, while a surface of revolution stores only object colours",
					"A swept volume divides space with planes, while a surface of revolution combines solids using intersection",
					"A swept volume samples a two-dimensional image, while a surface of revolution records motion capture",
				],
				c: 0,
			},
			{
				q: "What is the primary purpose of a scene graph in 3D modeling?",
				a: [
					"Organizing objects into a hierarchy that describes their spatial and logical relationships",
					"Storing every point in a model as an independent sample with no relationships",
					"Representing a solid exclusively through a regular array of volume pixels",
					"Converting captured depth measurements directly into a final two-dimensional image",
				],
				c: 0,
			},
			{
				q: "What is the difference between an object definition and an instance in a scene graph?",
				a: [
					"A definition describes the object's geometry, while an instance places it in the scene using transformations such as translation, rotation, or scaling",
					"A definition stores the object's rendered pixels, while an instance records its physical temperature",
					"A definition records animation timing, while an instance converts the animation into a point cloud",
					"A definition describes the camera position, while an instance replaces the object's geometry with voxels",
				],
				c: 0,
			},
			{
				q: "Which of the following is a possible component of a scene graph node?",
				a: [
					"A geometry representation, modeling transformation, parent or child relationships, or bounding volume",
					"A mandatory collection of depth pixels without any geometric or hierarchical information",
					"A list of image filters that replaces all object definitions and transformations",
					"A set of Boolean operations that cannot contain references to other objects",
				],
				c: 0,
			},
			{
				q: "Which is an advantage of scene graphs?",
				a: [
					"They support reusable object definitions, hierarchical processing, and articulated animation",
					"They eliminate the need for geometry by storing only the final rendered image",
					"They guarantee that every object uses the same coordinate system and transformation",
					"They prevent objects from appearing multiple times within a single scene",
				],
				c: 0,
			},
			{
				q: "The slideshow states that every fundamental 3D representation has sufficient expressive power to model any geometric object's shape, and that all geometric operations can be performed using any fundamental representation.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "A range image and a point cloud are identical because both must store every 3D point in a fixed two-dimensional grid.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "A voxel representation can store information about the interior of a solid, but a dense grid can require substantial storage as its resolution increases.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "An implicit surface is defined by varying parameters u and v to trace out a continuous set of three-dimensional points.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "Scene graphs can support the reuse of a geometric object definition by placing multiple instances of that object into a scene.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "What is a 3D polygonal mesh designed to represent?",
				a: [
					"A two-dimensional surface embedded in three-dimensional space",
					"A solid represented exclusively by a regular grid of volume samples",
					"A sequence of images used to simulate changes over time",
					"A mathematical equation that defines all points inside a solid",
				],
				c: 0,
			},
			{
				q: "Which statement best describes the structure of a polygonal mesh?",
				a: [
					"It consists of polygons arranged to represent a surface in 3D space",
					"It consists of independent points without any connections between them",
					"It consists of image pixels arranged in a two-dimensional grid",
					"It consists of simple solids combined using Boolean operations",
				],
				c: 0,
			},
			{
				q: "What is the primary purpose of a vertex table in a polygonal mesh?",
				a: [
					"To record the vertices that define the geometry of the mesh",
					"To record the lighting conditions used to render every polygon",
					"To store the animation timing for each face of the model",
					"To describe the hierarchy of objects within a scene graph",
				],
				c: 0,
			},
			{
				q: "What information does a face table typically contain in the mesh representation discussed in the slideshow?",
				a: [
					"References to the vertices that make up each face",
					"The colour and temperature of every point inside the solid",
					"The sequence of camera positions used to view the model",
					"The mathematical parameters used to define a continuous surface",
				],
				c: 0,
			},
			{
				q: "Why can multiple faces in a polygonal mesh reference the same vertex?",
				a: [
					"Adjacent faces can share vertices along their common boundaries",
					"Every face must have a completely separate copy of every vertex",
					"Shared vertices are required to store the colour of each image pixel",
					"Vertices can only be shared when the mesh represents a flat surface",
				],
				c: 0,
			},
			{
				q: "What is an important relationship between vertex tables and face tables?",
				a: [
					"Face entries refer to vertices recorded in the vertex table",
					"Vertex entries must contain the complete vertex list of every face",
					"Face entries store only the transformations applied to the whole model",
					"Vertex entries specify the order in which the model is rendered",
				],
				c: 0,
			},
			{
				q: "Why is sharing vertex references useful when representing a polygonal mesh?",
				a: [
					"It allows connected faces to use common geometric points rather than duplicating them",
					"It ensures that each polygon has a separate coordinate system",
					"It removes the need to describe which vertices belong to each face",
					"It converts a surface mesh into a collection of independent volume pixels",
				],
				c: 0,
			},
			{
				q: "Which statement best explains how a polygonal mesh represents a 3D object's surface?",
				a: [
					"Vertices define geometric points, and faces connect selected vertices to form polygons",
					"Pixels store depth values, and each pixel directly represents a complete polygon",
					"Equations classify all points as inside or outside without using vertices",
					"A hierarchy of Boolean operations combines simpler solid objects into a surface",
				],
				c: 0,
			},
			{
				q: "What is the role of MeshLab in the material covered by this slideshow?",
				a: [
					"It is used to display and examine examples of polygonal meshes",
					"It is used exclusively to create equations for implicit surfaces",
					"It automatically records real-world motion for character animation",
					"It is used to calculate the temperature stored in individual voxels",
				],
				c: 0,
			},
			{
				q: "What is the purpose of the standard OBJ file example in the slideshow?",
				a: [
					"To demonstrate a file-based representation of a 3D polygonal mesh",
					"To demonstrate how to record animation timing from motion capture",
					"To demonstrate how to store an image using colour quantization",
					"To demonstrate how to organize lighting sources in a rendering pipeline",
				],
				c: 0,
			},
			{
				q: "Why is it useful to represent polygon faces using vertex references instead of describing every face independently?",
				a: [
					"It provides a structured way to describe connected geometry and shared points",
					"It guarantees that the mesh can only contain triangular faces",
					"It prevents the mesh from being loaded into 3D visualization software",
					"It removes the distinction between vertices and faces in the model",
				],
				c: 0,
			},
			{
				q: "What kind of information would be needed to construct a vertex table for a triangular prism?",
				a: [
					"The coordinates of the prism's vertices",
					"The camera's complete animation sequence",
					"The temperature and density of every internal voxel",
					"The lighting and shading settings for each rendered pixel",
				],
				c: 0,
			},
			{
				q: "What kind of information would be needed to construct a face table for a triangular prism?",
				a: [
					"The vertex references that define each polygonal face",
					"The colour values of every pixel in the final image",
					"The parameters of every light source in the scene",
					"The sequence of transformations applied to the viewing camera",
				],
				c: 0,
			},
			{
				q: "Why does the slideshow use a triangular prism as a practice question for vertex and face tables?",
				a: [
					"It provides a geometric object whose vertices and faces can be represented in tables",
					"It demonstrates how a continuous surface is defined by an implicit equation",
					"It demonstrates how volume samples store properties throughout an object's interior",
					"It demonstrates how a hierarchy of animated joints records human movement",
				],
				c: 0,
			},
			{
				q: "A 3D polygonal mesh represents a two-dimensional surface embedded in three-dimensional space.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "In a polygonal mesh, each face must use entirely separate vertices that cannot be shared with other faces.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "A face table can describe a polygon by listing references to the vertices that form that face.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "The slideshow introduces vertex and face tables as part of understanding polygonal mesh representations.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "The standard OBJ file example in the slideshow uses an example file named example_cube.obj.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "MeshLab is mentioned as a tool for displaying examples of polygonal meshes.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "The slideshow states that polygonal meshes can only represent objects made entirely from triangular faces.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "A vertex table and a face table serve identical purposes because both store only the coordinates of vertices.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "The slideshow includes writing vertex and face tables for a triangular prism as a practice exercise.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "A polygonal mesh represents a surface using polygons rather than representing it exclusively as a regular 3D array of voxels.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "In the mesh representation described in the slideshow, faces refer to vertices that define their geometry.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "The slideshow's outline includes more polygonal mesh examples, vertex and face tables, and the standard OBJ file format.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "An OBJ file example is used to demonstrate a representation unrelated to polygonal meshes.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "The slideshow introduces vertex and face tables as a way to describe the structure of a polygonal mesh.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "A triangular prism practice exercise requires thinking about how the object's vertices and faces can be represented using tables.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "What is the primary purpose of subdivision surfaces in computer graphics?",
				a: [
					"To create more complex and smoother surfaces by repeatedly refining a coarse mesh",
					"To represent an object's interior using a regular three-dimensional array of samples",
					"To calculate lighting by tracing rays through a rendered scene",
					"To record the positions of joints during real-world character movement",
				],
				c: 0,
			},
			{
				q: "Which industries commonly use subdivision surfaces according to the slideshow?",
				a: [
					"Film and game industries",
					"Database administration and network security industries",
					"Spreadsheet development and word processing industries",
					"Operating system development and computer manufacturing industries",
				],
				c: 0,
			},
			{
				q: "Which two steps are repeatedly applied in subdivision surface methods?",
				a: [
					"Topology refinement and geometry refinement",
					"Image sampling and image reconstruction",
					"Lighting calculation and texture mapping",
					"Object acquisition and motion capture",
				],
				c: 0,
			},
			{
				q: "What happens during topology refinement?",
				a: [
					"Faces are split to create a more refined mesh structure",
					"Existing vertex positions are averaged without changing the mesh structure",
					"Lighting values are calculated for every surface point",
					"The object is converted into a two-dimensional image",
				],
				c: 0,
			},
			{
				q: "What happens during geometry refinement?",
				a: [
					"Vertex positions are updated using weighted averaging rules",
					"Faces are divided into smaller faces without changing any vertex positions",
					"The mesh is converted into a hierarchy of Boolean operations",
					"The camera is moved to change the viewing transformation",
				],
				c: 0,
			},
			{
				q: "What is the limit surface in subdivision modeling?",
				a: [
					"The smooth surface approached by repeatedly applying subdivision refinements",
					"The original coarse mesh before any subdivision operation occurs",
					"The boundary of the screen area in which the model is displayed",
					"The set of edges that are permanently excluded from all geometric calculations",
				],
				c: 0,
			},
			{
				q: "Which of the following is a factor that distinguishes different subdivision schemes?",
				a: [
					"The type of input mesh they accept",
					"The programming language used to create the modeling application",
					"The number of lights required to display the final surface",
					"The file extension used to store the finished rendered image",
				],
				c: 0,
			},
			{
				q: "What is a consideration when choosing a topology refinement rule for a subdivision scheme?",
				a: [
					"Whether the rule is straightforward to implement and produces the desired mesh structure",
					"Whether the rule eliminates the need to store vertex positions",
					"Whether the rule converts every surface into a point cloud",
					"Whether the rule guarantees that all meshes contain the same number of faces",
				],
				c: 0,
			},
			{
				q: "What is an important goal of geometry refinement rules?",
				a: [
					"Providing smoothness guarantees for the resulting limit surface",
					"Ensuring that every face is represented by a separate coordinate system",
					"Preventing the mesh from being refined more than once",
					"Converting the mesh into an image without performing rendering",
				],
				c: 0,
			},
			{
				q: "Which type of mesh is used as the input for linear subdivision in the slideshow?",
				a: [
					"A quadrilateral mesh",
					"A triangular mesh only",
					"A point cloud with no faces",
					"A voxel grid containing volume samples",
				],
				c: 0,
			},
			{
				q: "What is the topology refinement rule for linear subdivision?",
				a: [
					"Split every quadrilateral into four smaller quadrilaterals at the midpoints",
					"Split every triangle into four triangles by inserting a new point at its centre",
					"Replace every vertex with a separate polygonal solid",
					"Rotate each quadrilateral around an axis to generate a surface of revolution",
				],
				c: 0,
			},
			{
				q: "Which statement about vertices in linear subdivision is consistent with the slideshow?",
				a: [
					"The refinement process distinguishes new vertices, new vertices on existing edges, and existing vertices",
					"Every vertex is removed and replaced by a point selected independently of its neighbours",
					"Only vertices located at the centre of each original face are retained",
					"All vertices must be positioned on the same plane after refinement",
				],
				c: 0,
			},
			{
				q: "How are vertex positions updated during linear subdivision?",
				a: [
					"Using weighted averages that depend on the type of vertex being updated",
					"By randomly selecting new coordinates within the object's bounding volume",
					"By copying the camera position to every vertex in the mesh",
					"By assigning every vertex the same coordinates as the original mesh centre",
				],
				c: 0,
			},
			{
				q: "Why is linear subdivision described as a useful example even though it is not common in practice?",
				a: [
					"It demonstrates the basic process of topology and geometry refinement",
					"It is the only subdivision scheme that can represent smooth surfaces",
					"It eliminates the need for geometry refinement in every modeling application",
					"It is required before any triangular mesh can be displayed in Blender",
				],
				c: 0,
			},
			{
				q: "Which type of mesh does Loop subdivision use as its input?",
				a: [
					"A triangular mesh",
					"A quadrilateral mesh only",
					"A regular two-dimensional image grid",
					"A point cloud with no connectivity information",
				],
				c: 0,
			},
			{
				q: "What is the topology refinement rule for Loop subdivision?",
				a: [
					"Split every triangle into four smaller triangles",
					"Split every quadrilateral into four smaller quadrilaterals",
					"Replace each triangle with a single voxel",
					"Combine adjacent triangles until the entire object becomes one polygon",
				],
				c: 0,
			},
			{
				q: "What do the terms odd and even vertices refer to in the context of Loop subdivision?",
				a: [
					"Different vertex categories that use different geometry refinement weights",
					"Two different file formats used to store triangular meshes",
					"The two types of lighting used to shade a subdivided surface",
					"Two alternative methods for representing an object's interior with voxels",
				],
				c: 0,
			},
			{
				q: "Why might a subdivision scheme need special rules for extraordinary vertices and boundaries?",
				a: [
					"These mesh locations require consideration beyond the ordinary vertex refinement rules",
					"These locations cannot be represented using vertices or faces",
					"These locations are always removed before the first subdivision iteration",
					"These locations can only appear in a mesh used for image processing",
				],
				c: 0,
			},
			{
				q: "What is the purpose of allowing non-stationary subdivision rules?",
				a: [
					"To change subdivision behaviour locally for additional effects or specific mesh requirements",
					"To force every mesh region to undergo exactly the same number of refinements",
					"To ensure that all vertices remain fixed throughout every refinement step",
					"To prevent a subdivision algorithm from using triangular faces",
				],
				c: 0,
			},
			{
				q: "What is adaptive subdivision intended to achieve?",
				a: [
					"A good approximation of a smooth limit surface while staying within a limited triangle budget",
					"The maximum possible number of triangles regardless of storage or processing costs",
					"A representation in which all triangles have identical sizes and positions",
					"A method that removes all curvature from a three-dimensional surface",
				],
				c: 0,
			},
			{
				q: "Which measures can help evaluate the quality of an adaptive subdivision approximation?",
				a: [
					"The projected screen area of final triangles and the local surface curvature",
					"The number of textures in the scene and the colour of the background",
					"The file size of the original mesh and the name of the modeling software",
					"The number of lights in the scene and the duration of the animation",
				],
				c: 0,
			},
			{
				q: "How does adaptive subdivision control the amount of refinement across a surface?",
				a: [
					"It stops subdivision at different levels according to a quality-based stopping criterion",
					"It subdivides every triangle until all regions contain the same number of vertices",
					"It removes the original mesh and replaces it with a single polygon",
					"It randomly selects regions to refine without considering approximation quality",
				],
				c: 0,
			},
			{
				q: "Why might vertices be projected onto the limit surface during adaptive subdivision?",
				a: [
					"To help refined geometry approximate the intended smooth limit surface",
					"To convert vertex coordinates into camera positions for rendering",
					"To assign a unique colour to every triangle in the original mesh",
					"To ensure that all vertices are moved to the centre of the object",
				],
				c: 0,
			},
			{
				q: "What is the purpose of balanced subdivision?",
				a: [
					"To ensure neighbouring subdivision levels differ by no more than one",
					"To ensure every face has exactly the same number of vertices",
					"To prevent any two triangles from sharing an edge",
					"To make every vertex have the same position after refinement",
				],
				c: 0,
			},
			{
				q: "Which is an advantage of subdivision surfaces identified in the slideshow?",
				a: [
					"They provide a relatively simple method for describing complex surfaces and are fairly easy to implement",
					"They guarantee that intersections between all meshes can be computed easily",
					"They eliminate the need to define an initial mesh",
					"They require less geometric information than every other representation in all situations",
				],
				c: 0,
			},
			{
				q: "Which difficulty associated with subdivision surfaces is identified in the slideshow?",
				a: [
					"Specifying the initial mesh may not be intuitive, and computing mesh intersections is difficult",
					"Subdivision surfaces cannot represent complex shapes or smooth boundaries",
					"Subdivision surfaces can only be used in applications designed for film production",
					"Subdivision surfaces cannot be implemented using computer algorithms",
				],
				c: 0,
			},
			{
				q: "Linear subdivision and Loop subdivision use identical input meshes and identical topology refinement rules.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "Subdivision surfaces are generated by repeatedly refining a coarse mesh to produce a more complex and smoother surface.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "Topology refinement changes the mesh structure, while geometry refinement updates vertex positions through weighted averaging.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "Adaptive subdivision can use local surface curvature and projected screen area when deciding how to refine a mesh.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "Which of the following best describes a translation in two-dimensional computer graphics?",
				a: [
					"Moving a point by adding horizontal and vertical displacement values to its coordinates",
					"Changing a point's size by multiplying its coordinates by scaling factors",
					"Changing the shape of an object by adding one coordinate to the other",
					"Rotating a point around the origin using sine and cosine values",
				],
				c: 0,
			},
			{
				q: "What is the main purpose of a scaling transformation?",
				a: [
					"To change an object's size by multiplying its coordinates by scaling factors",
					"To move an object to a new position without changing its size",
					"To reflect an object across an axis while preserving its dimensions",
					"To change an object's position by adding translation values to its coordinates",
				],
				c: 0,
			},
			{
				q: "How does a shear transformation modify a two-dimensional object?",
				a: [
					"It shifts coordinates in one direction according to the coordinate in another direction",
					"It moves every point by the same horizontal and vertical displacement",
					"It multiplies all coordinates by the same factor to change the object's size",
					"It rotates every point around the origin while preserving its orientation",
				],
				c: 0,
			},
			{
				q: "Which mathematical functions are used in the two-dimensional rotation equations presented in the slideshow?",
				a: [
					"Sine and cosine of the rotation angle",
					"Exponential and logarithmic functions of the coordinates",
					"Square roots and absolute values of the coordinates",
					"Only addition and multiplication of translation values",
				],
				c: 0,
			},
			{
				q: "What is the main advantage of representing transformations using matrices?",
				a: [
					"They provide a convenient and efficient way to represent and combine transformations",
					"They eliminate the need to represent object coordinates mathematically",
					"They ensure that every transformation preserves the original object's size",
					"They allow translation to be represented by any two-by-two matrix",
				],
				c: 0,
			},
			{
				q: "What does multiplying a transformation matrix by a column vector accomplish?",
				a: [
					"It applies the represented transformation to the point",
					"It converts the point into a polygonal face table",
					"It automatically generates a three-dimensional mesh from an image",
					"It determines the lighting and shading values of the point",
				],
				c: 0,
			},
			{
				q: "Which group contains only linear two-dimensional transformations identified in the slideshow?",
				a: [
					"Scaling, rotation, shear, and reflection",
					"Translation, scaling, rotation, and perspective projection",
					"Translation, reflection, texture mapping, and lighting",
					"Translation, shearing, rendering, and image reconstruction",
				],
				c: 0,
			},
			{
				q: "Why can a general two-dimensional translation not be represented using only a two-by-two matrix acting on ordinary point coordinates?",
				a: [
					"A two-by-two matrix represents linear transformations, and translation does not generally map the origin to itself",
					"A two-by-two matrix can represent scaling but cannot represent rotation or reflection",
					"A two-by-two matrix requires every point to have three-dimensional coordinates",
					"A two-by-two matrix can only transform points whose coordinates are both positive",
				],
				c: 0,
			},
			{
				q: "Which property is satisfied by linear transformations according to the slideshow?",
				a: [
					"The origin maps to the origin, and parallel lines remain parallel",
					"The origin can move to any location, and parallel lines may intersect",
					"Every line becomes curved, and coordinate ratios are not preserved",
					"Every point moves by the same displacement regardless of the transformation",
				],
				c: 0,
			},
			{
				q: "What is the purpose of homogeneous coordinates in two-dimensional transformations?",
				a: [
					"They add a third coordinate so transformations such as translation can be represented using three-by-three matrices",
					"They add a third spatial dimension so every two-dimensional point becomes a three-dimensional object",
					"They eliminate the need for matrices when applying rotation and scaling",
					"They represent each point using its colour, depth, and lighting intensity",
				],
				c: 0,
			},
			{
				q: "In homogeneous coordinates, how is a point represented by (x, y, w) interpreted when w is nonzero?",
				a: [
					"Its ordinary coordinates are (x/w, y/w)",
					"Its ordinary coordinates are (x multiplied by w, y multiplied by w)",
					"Its ordinary coordinates are (x+w, y+w)",
					"Its ordinary coordinates are (w/x, w/y)",
				],
				c: 0,
			},
			{
				q: "What does a homogeneous coordinate representation of (x, y, 0) indicate in the slideshow?",
				a: [
					"A point at infinity",
					"The origin of the coordinate system",
					"A point whose ordinary coordinates are (x, y)",
					"A point that must be translated to become a valid finite point",
				],
				c: 0,
			},
			{
				q: "Which homogeneous coordinate vector is explicitly identified as not allowed in the slideshow?",
				a: ["(0, 0, 0)", "(1, 0, 1)", "(0, 1, 1)", "(2, 3, 1)"],
				c: 0,
			},
			{
				q: "How are affine transformations defined in the slideshow?",
				a: [
					"As combinations of linear transformations and translations",
					"As combinations of image filters and texture mapping",
					"As transformations that only change an object's size",
					"As transformations that always preserve the origin's position",
				],
				c: 0,
			},
			{
				q: "Which property distinguishes affine transformations from linear transformations?",
				a: [
					"An affine transformation does not necessarily map the origin to the origin",
					"An affine transformation cannot map lines to lines",
					"An affine transformation always changes parallel lines into intersecting lines",
					"An affine transformation cannot be composed with another transformation",
				],
				c: 0,
			},
			{
				q: "What does it mean that affine transformations are closed under composition?",
				a: [
					"Combining affine transformations produces another affine transformation",
					"Combining affine transformations always cancels their effects",
					"Affine transformations can only be combined if they use identical matrices",
					"Affine transformations cannot be combined with translations",
				],
				c: 0,
			},
			{
				q: "Why is matrix multiplication useful when combining several transformations?",
				a: [
					"It allows a sequence of transformations to be represented by a composite matrix",
					"It ensures that transformations can be applied in any order with identical results",
					"It eliminates the need to know which transformation should occur first",
					"It converts every nonlinear transformation into a translation",
				],
				c: 0,
			},
			{
				q: "What does it mean that matrix multiplication is associative?",
				a: [
					"The grouping of matrices in a product can change without changing the product's result",
					"The order of matrices can always be reversed without changing the result",
					"Multiplying any two transformation matrices always produces the identity matrix",
					"Every matrix multiplication produces the same result regardless of its operands",
				],
				c: 0,
			},
			{
				q: "Why does the order of transformations matter when combining transformation matrices?",
				a: [
					"Matrix multiplication is not commutative, so reversing the order can change the result",
					"Matrix multiplication is not associative, so changing grouping always changes the result",
					"Transformation matrices can only be multiplied when their entries are identical",
					"The order matters only when all transformations are translations",
				],
				c: 0,
			},
			{
				q: "How can a rotation around an arbitrary point (a, b) be performed using the method in the slideshow?",
				a: [
					"Translate the point to the origin, rotate around the origin, and translate back",
					"Rotate around the origin, scale the object, and remove the original vertices",
					"Translate the point away from the origin, reflect it, and discard the translation",
					"Scale around the origin, rotate around the new position, and convert to homogeneous coordinates",
				],
				c: 0,
			},
			{
				q: "Which matrix composition represents scaling around an arbitrary point (a, b) according to the slideshow?",
				a: [
					"M = T(a,b) * S(sx,sy) * T(-a,-b)",
					"M = S(sx,sy) * T(a,b) * T(-a,-b)",
					"M = T(-a,-b) * S(sx,sy) * T(a,b)",
					"M = T(a,b) * T(-a,-b) * S(sx,sy)",
				],
				c: 0,
			},
			{
				q: "What is the key difference between the homogeneous coordinate systems used for two-dimensional and three-dimensional transformations?",
				a: [
					"Two-dimensional points use three homogeneous coordinates, while three-dimensional points use four",
					"Two-dimensional points use four homogeneous coordinates, while three-dimensional points use three",
					"Both systems use exactly two coordinates because the extra coordinates are only used for rotation",
					"Three-dimensional transformations do not use homogeneous coordinates or matrices",
				],
				c: 0,
			},
			{
				q: "Which matrix size is generally used to represent three-dimensional modeling transformations in the slideshow?",
				a: [
					"A four-by-four matrix",
					"A two-by-two matrix",
					"A three-by-three matrix only",
					"A one-by-four matrix",
				],
				c: 0,
			},
			{
				q: "Which axes are specifically identified for basic three-dimensional rotation transformations?",
				a: [
					"The X, Y, and Z axes",
					"Only the X and Y axes",
					"Only the vertical and horizontal screen axes",
					"The camera, lighting, and viewing axes",
				],
				c: 0,
			},
			{
				q: "The slideshow states that linear transformations include scaling, rotation, shear, and reflection, but not translation.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "A two-by-two matrix is sufficient to represent every two-dimensional transformation, including general translation, using ordinary point coordinates.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "Affine transformations preserve lines and parallelism, but they do not necessarily map the origin to the origin.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "Matrix multiplication is commutative, meaning that reversing the order of two transformation matrices always produces the same result.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "Three-dimensional modeling transformations can be represented using four-by-four matrices and combined through matrix multiplication, with the order of transformations mattering.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "What objects are included in Blender's default scene?",
				a: [
					"A cube, a camera, and a light",
					"A sphere, a camera, and a plane",
					"A cylinder, a light, and a mesh grid",
					"A cube, a camera, and a rendering engine",
				],
				c: 0,
			},
			{
				q: "Which mouse action is used to orient the 3D view in Blender according to the slideshow?",
				a: [
					"Hold the middle mouse button and move the mouse",
					"Hold Shift and the left mouse button",
					"Scroll the mouse wheel while holding Alt",
					"Hold Ctrl and the right mouse button",
				],
				c: 0,
			},
			{
				q: "How can you pan the 3D view in Blender using the mouse?",
				a: [
					"Hold Shift and the middle mouse button",
					"Hold Ctrl and the left mouse button",
					"Scroll the mouse wheel without moving the mouse",
					"Hold Alt and the right mouse button",
				],
				c: 0,
			},
			{
				q: "Which action is used to zoom the 3D view in Blender?",
				a: [
					"Scroll with the middle mouse button or hold Ctrl with the middle mouse button",
					"Hold Shift and the middle mouse button while moving horizontally",
					"Click the left mouse button repeatedly over the object",
					"Hold Alt and the left mouse button while rotating the view",
				],
				c: 0,
			},
			{
				q: "What is the main purpose of Object Mode in Blender as demonstrated in the slideshow?",
				a: [
					"Select, move, rotate, and scale entire objects",
					"Edit only individual vertices and edges of a mesh",
					"Create materials and assign lighting properties to faces",
					"Automatically generate a smooth subdivision surface",
				],
				c: 0,
			},
			{
				q: "What is the main purpose of Edit Mode in Blender?",
				a: [
					"Modify mesh components such as vertices, edges, and faces",
					"Change only the position of the camera and lights",
					"Adjust the zoom and orientation of the 3D view",
					"Add objects without changing existing mesh geometry",
				],
				c: 0,
			},
			{
				q: "Which mesh components can be edited in Edit Mode according to the slideshow?",
				a: [
					"Vertices, edges, and faces",
					"Only vertices and cameras",
					"Only faces and lights",
					"Objects, cameras, and materials only",
				],
				c: 0,
			},
			{
				q: "What happens when the Subdivide operation is applied to selected mesh geometry?",
				a: [
					"It adds additional geometry by splitting the selected mesh elements",
					"It removes the selected vertices and merges the surrounding faces",
					"It converts the entire mesh into a camera object",
					"It automatically translates the selected geometry to the origin",
				],
				c: 0,
			},
			{
				q: "In the demonstrated subdivision example, what action follows selecting the top four vertices of the cube?",
				a: [
					"Right-click and choose Subdivide",
					"Open Object Mode and select Scale",
					"Add a cylinder through the Mesh menu",
					"Apply a Subdivision Surface modifier to the entire scene",
				],
				c: 0,
			},
			{
				q: "What is the purpose of the Move or Translate operation in Blender?",
				a: [
					"Change the position of a selected object or mesh component",
					"Change the viewing direction without changing object coordinates",
					"Create new vertices along every selected edge",
					"Smooth a mesh by adding a subdivision modifier",
				],
				c: 0,
			},
			{
				q: "Which operation changes an object's orientation?",
				a: ["Rotate", "Inset Faces", "Loop Cut", "Subdivide"],
				c: 0,
			},
			{
				q: "Which operation changes an object's size?",
				a: ["Scale", "Translate", "Knife", "Inset Faces"],
				c: 0,
			},
			{
				q: "What does the Inset Faces tool do in the demonstrated modeling workflow?",
				a: [
					"Creates a face inside an existing face",
					"Deletes half of the selected mesh faces",
					"Adds a camera at the center of the selected face",
					"Smooths all edges and vertices of the mesh",
				],
				c: 0,
			},
			{
				q: "What is the purpose of the Extrude Region operation?",
				a: [
					"Extends a selected face or region to create additional geometry",
					"Moves the 3D view without changing the mesh",
					"Removes vertices from the selected region",
					"Converts a polygon mesh into an image reference",
				],
				c: 0,
			},
			{
				q: "Which pair of tools is demonstrated for adding structure around a shape in Edit Mode?",
				a: [
					"Loop Cut and Extrude",
					"Zoom and Pan",
					"Rotate and Toggle X-Ray",
					"Camera and Light",
				],
				c: 0,
			},
			{
				q: "What is the purpose of the Loop Cut tool in the slideshow's modeling examples?",
				a: [
					"Add cuts that introduce additional mesh geometry around a shape",
					"Change the camera's viewing angle without altering the mesh",
					"Apply a material to every face in a selected region",
					"Automatically create a smooth surface without adding edges",
				],
				c: 0,
			},
			{
				q: "What is the Knife Tool used for in the demonstrated workflow?",
				a: [
					"Creating cuts in a mesh by selecting points and confirming the cut",
					"Scaling an entire object around its center",
					"Adding a light source inside a mesh",
					"Automatically converting triangles into quadrilaterals",
				],
				c: 0,
			},
			{
				q: "After making a cut with the Knife Tool in the demonstrated example, what additional operation is performed?",
				a: [
					"Select and delete half of the faces",
					"Apply a Subdivision Surface modifier to the camera",
					"Move the light to the origin",
					"Convert the mesh into a reference image",
				],
				c: 0,
			},
			{
				q: "How does the slideshow demonstrate creating a cylinder in Blender?",
				a: [
					"Use Object Mode and choose Add, then Mesh, then Cylinder",
					"Use Edit Mode and choose Add, then Camera, then Cylinder",
					"Use the Knife Tool to convert a cube into a cylinder",
					"Use Inset Faces to create a cylinder automatically",
				],
				c: 0,
			},
			{
				q: "What modeling approach is suggested for creating repeated patterns on a mesh?",
				a: [
					"Use Loop Cut several times, select faces, and extrude them",
					"Repeatedly scale the camera and rotate the light",
					"Delete all faces and use only the original vertices",
					"Apply the Subdivision Surface modifier without adding any cuts",
				],
				c: 0,
			},
			{
				q: "What is the purpose of the Subdivision Surface modifier demonstrated with an IcoSphere?",
				a: [
					"Make the mesh appear smoother by increasing subdivision levels",
					"Create an image reference from the existing mesh",
					"Remove all faces and retain only the original vertices",
					"Move the object along the X, Y, and Z axes",
				],
				c: 0,
			},
			{
				q: "In the IcoSphere example, what effect does increasing the subdivision level have?",
				a: [
					"The object becomes progressively smoother",
					"The object automatically changes into a cylinder",
					"The object loses its camera and lighting settings",
					"The object becomes less detailed as the level increases",
				],
				c: 0,
			},
			{
				q: "Why does the slideshow caution that subdivision may not work well when modeling a chair with a more regular shape?",
				a: [
					"The Subdivision Surface modifier does not always produce the desired shape for every model",
					"Subdivision can only be applied to objects containing no faces",
					"The modifier works only on image references, not on meshes",
					"Subdivision automatically deletes every extruded region",
				],
				c: 0,
			},
			{
				q: "Which modeling method is demonstrated for creating a chair seat, legs, and back?",
				a: [
					"Start with a cube and use Loop Cut and Extrude",
					"Start with a camera and use Inset Faces and Pan",
					"Start with a light and use the Knife Tool to create a reference image",
					"Start with an IcoSphere and use only the Subdivision Surface modifier",
				],
				c: 0,
			},
			{
				q: "Which sequence is demonstrated as one way to model a chess piece from a cylinder?",
				a: [
					"Select the top face, then extrude and scale it",
					"Select the camera, then subdivide and translate it",
					"Select the bottom face, then delete every vertex",
					"Select the light, then use Loop Cut and Toggle X-Ray",
				],
				c: 0,
			},
			{
				q: "What is one use of an image reference when modeling in Blender?",
				a: [
					"Providing visual guidance for constructing a 3D model, such as a cat",
					"Automatically converting any image into a fully modeled 3D object",
					"Replacing all vertices and faces with a camera",
					"Removing the need to manipulate mesh geometry",
				],
				c: 0,
			},
			{
				q: "Which approach does the slideshow recommend when beginning to create a 3D model?",
				a: [
					"Start with a primitive mesh and build upon it",
					"Begin by deleting every object and creating all geometry without primitives",
					"Create a reference image and avoid using mesh components",
					"Apply subdivision repeatedly before adding any geometry",
				],
				c: 0,
			},
			{
				q: "The slideshow recommends using Loop Cut or the Knife Tool to add vertices, edges, and faces when building a mesh.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "The Subdivision Surface modifier is guaranteed to work well for every type of 3D model, including regular shapes such as a chair.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "The slideshow recommends repeatedly moving vertices and extruding faces to extend smaller parts of a larger shape.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "What is the purpose of UV mapping in 3D modeling?",
				a: [
					"Mapping parts of a 2D image onto the surface of a 3D model",
					"Converting a 3D model into a lighting parameter file",
					"Changing the position of a model along the X, Y, and Z axes",
					"Increasing the number of vertices in a mesh automatically",
				],
				c: 0,
			},
			{
				q: "Which Blender feature is used to assign a texture image to a 3D object's material?",
				a: [
					"Image Texture",
					"Subdivision Surface",
					"Loop Cut",
					"Extrude Region",
				],
				c: 0,
			},
			{
				q: "Where does the slideshow instruct users to go to add a new material to an object?",
				a: [
					"Material Properties in the right panel",
					"UV Editor in the left panel",
					"Object Mode in the top toolbar",
					"Image menu in the UV Editor",
				],
				c: 0,
			},
			{
				q: "After creating a new material, which sequence is described for selecting an image texture?",
				a: [
					"Surface, Background, Color dot, Image Texture, then Open",
					"Surface, Subdivision, Extrude, then Open",
					"UV Editor, Mark Seam, Translate, then Save",
					"Object Mode, Mesh, Cylinder, then Image Texture",
				],
				c: 0,
			},
			{
				q: "After selecting an image texture for a material, what additional step may be needed to see it on the object?",
				a: [
					"Adjust the settings near the top right to display the texture",
					"Delete the material and recreate the object's mesh",
					"Export the object as an OBJ file before viewing it",
					"Apply the Knife Tool to every face of the object",
				],
				c: 0,
			},
			{
				q: "Which Blender workspace does the slideshow recommend selecting to work with UV layouts?",
				a: ["UV Editing", "Animation", "Compositing", "Scripting"],
				c: 0,
			},
			{
				q: "In the UV Unwrap example, what transformation is applied after selecting one vertex in the left panel?",
				a: ["Translate", "Rotate", "Scale", "Extrude"],
				c: 0,
			},
			{
				q: "In the next UV Unwrap example, what transformation is applied after selecting four vertices in the left panel?",
				a: ["Rotate", "Translate", "Subdivide", "Inset Faces"],
				c: 0,
			},
			{
				q: "What is a UV seam used for in the demonstrated UV mapping workflow?",
				a: [
					"Marking edges where the sphere's surface can be separated for mapping",
					"Identifying the edges that should be deleted from the mesh",
					"Specifying the direction of the sphere's rotation",
					"Defining where the object's material must be removed",
				],
				c: 0,
			},
			{
				q: "How does the slideshow demonstrate selecting edges around the UV sphere to mark a seam?",
				a: [
					"Hold Shift and left-click edges around the sphere's equator",
					"Hold Ctrl and right-click vertices around the sphere's poles",
					"Hold Alt and scroll over the sphere's surface",
					"Hold Shift and middle-click faces around the sphere's center",
				],
				c: 0,
			},
			{
				q: "After selecting the desired edges around the sphere, which command marks the UV seam?",
				a: [
					"Mark Seam from the UV menu",
					"Extrude Region from the Mesh menu",
					"Add Material from the Image menu",
					"Subdivision Surface from the Object menu",
				],
				c: 0,
			},
			{
				q: "Where does the slideshow instruct users to open the 2D Earth image for UV mapping?",
				a: [
					"In the UV Editor, through Image > Open",
					"In Material Properties, through Subdivision > Open",
					"In Object Mode, through Mesh > Open",
					"In the 3D viewport, through Camera > Open",
				],
				c: 0,
			},
			{
				q: "In the Earth texture example, what is the relationship between the 2D image and the 3D sphere?",
				a: [
					"Parts of the 2D Earth image are mapped onto corresponding faces of the sphere",
					"The 2D image replaces the sphere's geometry entirely",
					"The 2D image is used only to determine the sphere's rotation",
					"Each pixel in the image becomes a separate camera object",
				],
				c: 0,
			},
			{
				q: "Which object does the slideshow instruct users to add for the Earth UV mapping example?",
				a: ["A UV Sphere", "A Cylinder", "A Cube", "An IcoSphere"],
				c: 0,
			},
			{
				q: "In the Earth texture example, what must be added to the sphere in addition to loading the image in the UV Editor?",
				a: [
					"A material that uses the Earth image as its texture",
					"A camera with the image assigned as its geometry",
					"A subdivision modifier that contains the image file",
					"A light source named after the image file",
				],
				c: 0,
			},
			{
				q: "What file extension is used for the mesh when exporting from Blender in the demonstrated workflow?",
				a: [".obj", ".mtl", ".jpg", ".uv"],
				c: 0,
			},
			{
				q: "What additional file does Blender create alongside the OBJ file in the demonstrated export process?",
				a: [
					"An MTL file containing material or lighting parameters",
					"A JPG file containing the complete 3D mesh",
					"A UV file containing only the camera settings",
					"A PNG file containing all the object's vertices",
				],
				c: 0,
			},
			{
				q: "What is the role of the MTL file in the export workflow described in the slideshow?",
				a: [
					"It stores material-related information, including lighting parameters",
					"It stores the complete geometry of the mesh instead of the OBJ file",
					"It contains the original 2D texture image itself",
					"It records the steps used to translate vertices in Blender",
				],
				c: 0,
			},
			{
				q: "Which application is used in the slideshow to open the exported mesh with its texture?",
				a: ["MeshLab", "Photoshop", "Unity", "Visual Studio"],
				c: 0,
			},
			{
				q: "How does the slideshow instruct users to open the exported OBJ file in MeshLab?",
				a: [
					"Drag and drop the OBJ file directly into MeshLab",
					"Open the MTL file in Blender and export it as a JPG",
					"Copy the mesh vertices into the UV Editor manually",
					"Import the texture image first and convert it into an OBJ file",
				],
				c: 0,
			},
			{
				q: "Which line may need to be added to the MTL file to specify the Earth texture image?",
				a: [
					"map_Kd earth_2Dmap.jpg",
					"texture_uv earth_2Dmap.obj",
					"image_map earth_2Dmap.mtl",
					"surface_Kd earth_2Dmap.png",
				],
				c: 0,
			},
			{
				q: "What is the purpose of the line `map_Kd earth_2Dmap.jpg` in the demonstrated workflow?",
				a: [
					"It identifies the image file used as the diffuse texture map",
					"It defines the number of vertices in the exported mesh",
					"It specifies the position of the camera relative to the sphere",
					"It instructs Blender to subdivide the sphere into additional faces",
				],
				c: 0,
			},
			{
				q: "Which of the following best describes the workflow for applying an image texture to a Blender model?",
				a: [
					"Create a material, select an Image Texture, open the image, and adjust the display settings",
					"Export the model first, delete its material, and create a UV seam in MeshLab",
					"Create a camera, add a light, and use the Knife Tool to load the image",
					"Subdivide every face, translate the vertices, and save the scene as a JPG",
				],
				c: 0,
			},
			{
				q: "The slideshow demonstrates that UV mapping can be used to apply a 2D Earth map to a 3D sphere.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "In the UV Unwrap examples, selected vertices in the left panel can be translated or rotated.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "The slideshow states that Blender exports an OBJ file without creating any accompanying MTL file.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "The slideshow recommends marking a seam around selected edges of the UV sphere before continuing with the UV mapping workflow.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "The slideshow demonstrates opening an exported OBJ file in MeshLab by dragging and dropping it into the application.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "What does it mean for a line, curve, or surface to be represented parametrically?",
				a: [
					"Its points are defined by functions of one or more parameters",
					"Its geometry is stored only as a collection of disconnected triangles",
					"Its shape is determined exclusively by lighting and material properties",
					"Its coordinates must remain constant throughout the model",
				],
				c: 0,
			},
			{
				q: "As parameter u varies from 0 to 1, what does a 2D parametric curve produce?",
				a: [
					"Points with coordinates defined by fx(u) and fy(u)",
					"Points with three coordinates defined by fx(u), fy(u), and fz(u)",
					"A surface defined by independent parameters u and v",
					"A fixed point that does not depend on the parameter",
				],
				c: 0,
			},
			{
				q: "Which coordinate functions are used to describe points on a 3D parametric line or curve in the slideshow?",
				a: [
					"fx(u), fy(u), and fz(u)",
					"fx(u,v) and fy(u,v) only",
					"fx(u), fy(v), and fz(w)",
					"fx(v), fy(v), and fz(v) only",
				],
				c: 0,
			},
			{
				q: "How many independent parameters are used in the slideshow's general representation of a parametric 3D surface?",
				a: [
					"Two parameters, u and v",
					"One parameter, u",
					"Three parameters, u, v, and w",
					"Four parameters, x, y, z, and w",
				],
				c: 0,
			},
			{
				q: "What determines the boundary of a parametric line in the slideshow's formulation?",
				a: [
					"Functions that define its x and y coordinates using a parameter",
					"A collection of material properties and lighting values",
					"A matrix that must contain only translation values",
					"A set of faces that must form a closed polygon mesh",
				],
				c: 0,
			},
			{
				q: "Which shape is used as an example of a parametric curve?",
				a: ["An ellipse", "A cube", "A polygon mesh", "A subdivision sphere"],
				c: 0,
			},
			{
				q: "How can arbitrary parametric curves be defined using the approach introduced in the slideshow?",
				a: [
					"Use blending functions to combine control points",
					"Use only a single fixed coordinate without control points",
					"Apply lighting parameters to a polygon mesh",
					"Represent the curve exclusively as a rectangular surface",
				],
				c: 0,
			},
			{
				q: "What is the role of control points in the blending-function approach to parametric curves?",
				a: [
					"They provide points that the blending functions use to define the curve",
					"They determine the lighting settings of the curve's material",
					"They specify the number of cameras needed to render the curve",
					"They replace the parameter with a fixed coordinate value",
				],
				c: 0,
			},
			{
				q: "What does the term 'piecewise parametric curve' mean in the slideshow?",
				a: [
					"A curve divided into segments, each defined by a subset of control points",
					"A single curve that must use every control point at the same time",
					"A curve whose coordinates are defined only by surface parameters",
					"A curve represented exclusively by one straight line segment",
				],
				c: 0,
			},
			{
				q: "Which two types of cubic parametric curves are specifically listed in the slideshow?",
				a: [
					"Cubic B-spline and cubic Bézier",
					"Cubic ellipse and cubic polygon",
					"Cubic translation and cubic rotation",
					"Cubic mesh and cubic voxel",
				],
				c: 0,
			},
			{
				q: "How many control points are specified for the cubic Bézier curve example?",
				a: [
					"Four control points",
					"Two control points",
					"Three control points",
					"Eight control points",
				],
				c: 0,
			},
			{
				q: "As parameter t goes from 0 to 1 in the cubic Bézier example, what happens?",
				a: [
					"Points on the curve are traced out",
					"The control points are automatically deleted",
					"The curve is converted into a 3D surface",
					"The parameter becomes a lighting coefficient",
				],
				c: 0,
			},
			{
				q: "Which two methods for generating cubic Bézier curves are described in the slideshow?",
				a: [
					"Using a formula and drawing the curve geometrically",
					"Using a camera and applying a texture",
					"Using polygon subdivision and deleting faces",
					"Using translation matrices and rotating the coordinate system",
				],
				c: 0,
			},
			{
				q: "What can be done with multiple Bézier curves to create a longer curve?",
				a: [
					"Connect the curves together",
					"Convert all control points into surface normals",
					"Remove the parameter from each curve",
					"Replace the curves with a single quadrilateral face",
				],
				c: 0,
			},
			{
				q: "What is the purpose of blending functions in a cubic curve representation?",
				a: [
					"To determine how control points contribute to points on the curve",
					"To calculate the lighting parameters stored in a material file",
					"To determine which camera observes the curve",
					"To specify how a polygon mesh is exported to another application",
				],
				c: 0,
			},
			{
				q: "What does a parametric surface use to define its 3D coordinates?",
				a: [
					"Functions of two parameters, u and v",
					"A single parameter that defines only x and y",
					"Four independent parameters that each represent a coordinate axis",
					"A fixed list of lighting parameters without coordinate functions",
				],
				c: 0,
			},
			{
				q: "Which set of functions matches the slideshow's representation of a parametric surface?",
				a: [
					"x=fx(u,v), y=fy(u,v), z=fz(u,v)",
					"x=fx(u), y=fy(u), z=fz(u) only",
					"x=fx(v), y=fy(w), z=fz(t)",
					"x=fx(u,v), y=fy(u), z=fz(v,w)",
				],
				c: 0,
			},
			{
				q: "Which examples are used to illustrate parametric surfaces in the slideshow?",
				a: [
					"A quadrilateral and an ellipsoid",
					"A cube and a camera",
					"A cylinder and a polygonal line",
					"A Bézier curve and a B-spline curve",
				],
				c: 0,
			},
			{
				q: "What is a piecewise parametric surface divided into?",
				a: [
					"Parametric patches",
					"Independent lighting systems",
					"Camera coordinate frames",
					"Unrelated control-point matrices",
				],
				c: 0,
			},
			{
				q: "How are parametric patches defined according to the slideshow?",
				a: [
					"By blending control points to determine points on the patch",
					"By storing only a list of disconnected vertices",
					"By assigning a separate camera to every surface point",
					"By replacing all surface coordinates with material colours",
				],
				c: 0,
			},
			{
				q: "What does Q(u,v) represent in the discussion of parametric patches?",
				a: [
					"A point on the patch defined using the parameters u and v",
					"The number of control points in a cubic curve",
					"A matrix that stores only surface lighting parameters",
					"The fixed origin of every patch regardless of its shape",
				],
				c: 0,
			},
			{
				q: "In the parametric patch formulation, what does matrix M describe?",
				a: [
					"The blending functions for a parametric cubic curve, such as Bézier or B-spline",
					"The camera projection used to render the surface",
					"The material properties used to colour the surface",
					"The number of vertices that must be deleted from the control mesh",
				],
				c: 0,
			},
			{
				q: "Which two types of patches are specifically illustrated in the slideshow?",
				a: [
					"B-spline patches and Bézier patches",
					"Voxel patches and camera patches",
					"Translation patches and rotation patches",
					"Polygon patches and lighting patches",
				],
				c: 0,
			},
			{
				q: "Which is listed as an advantage of parametric surfaces?",
				a: [
					"Points on the surface are easy to enumerate",
					"Continuity constraints are always trivial to maintain",
					"Surface intersections are always easy to find",
					"The control mesh can use any arrangement without restrictions",
				],
				c: 0,
			},
			{
				q: "Which limitation of parametric surfaces is identified in the slideshow?",
				a: [
					"The control mesh must consist of quadrilaterals",
					"The surface cannot describe complex shapes",
					"Points on the surface cannot be calculated",
					"Parametric surfaces cannot be used for 3D modeling",
				],
				c: 0,
			},
			{
				q: "Which difficulty is listed among the disadvantages of parametric surfaces?",
				a: [
					"Maintaining continuity constraints can be difficult",
					"Generating points on the surface is impossible",
					"The method cannot use blending functions",
					"Parametric surfaces cannot be divided into patches",
				],
				c: 0,
			},
			{
				q: "Which application of parametric surfaces is described in the slideshow?",
				a: [
					"Designing smooth 3D shapes such as cars and ships",
					"Representing only the movement of a camera",
					"Storing material and lighting parameters for exported meshes",
					"Creating polygonal edges without defining surface geometry",
				],
				c: 0,
			},
			{
				q: "How are parametric curves used in keyframe animation according to the slideshow?",
				a: [
					"An artist specifies control points and smooth curves are generated along them",
					"An artist specifies lighting values and the software generates polygon faces",
					"The animator manually enters every point without using a curve",
					"The curves automatically replace all keyframes with a single fixed point",
				],
				c: 0,
			},
			{
				q: "A parametric 3D surface uses two parameters, u and v, to define its points in three-dimensional space.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "A cubic Bézier curve in the slideshow's example is defined using four control points, and its points are traced as t ranges from 0 to 1.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "The slideshow states that parametric surfaces have no difficulty maintaining continuity constraints or finding intersections.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "What does OpenGL stand for?",
				a: [
					"Open Graphics Library",
					"Open Geometry Language",
					"Object Graphics Layer",
					"Optimized Graphics Library",
				],
				c: 0,
			},
			{
				q: "What is OpenGL primarily used for?",
				a: [
					"Creating 2D and 3D graphics, including rendering, modeling, imaging, and animation",
					"Designing databases and managing files for graphics applications",
					"Automatically converting photographs into complete 3D models",
					"Creating user interfaces without handling graphical objects",
				],
				c: 0,
			},
			{
				q: "How does OpenGL compare to graphics software such as Blender?",
				a: [
					"OpenGL provides a more general, low-level programming approach",
					"OpenGL is a high-level modeling interface that requires no programming",
					"OpenGL only supports editing textures on existing models",
					"OpenGL is a file format used exclusively to store Blender scenes",
				],
				c: 0,
			},
			{
				q: "What does OpenGL allow programmers to create?",
				a: [
					"Their own 2D and 3D virtual worlds",
					"Only flat images with no geometric descriptions",
					"Only prebuilt objects that cannot be transformed",
					"Only animations that use previously recorded video",
				],
				c: 0,
			},
			{
				q: "Which of the following does OpenGL consider a geometric primitive?",
				a: [
					"Points, lines, polygons, and images",
					"Cameras, keyboards, and mouse controls",
					"Materials, lighting settings, and animation timelines only",
					"Complete scenes, applications, and operating systems",
				],
				c: 0,
			},
			{
				q: "How can OpenGL be used to construct a 3D scene?",
				a: [
					"Create objects from geometric primitives and arrange them in 3D space",
					"Import a finished video and convert each frame into a polygon",
					"Use lighting alone to generate all object geometry",
					"Create a texture image and treat it as the entire virtual world",
				],
				c: 0,
			},
			{
				q: "What does selecting a vantage point accomplish when creating a scene in OpenGL?",
				a: [
					"It determines the viewpoint from which the composed scene is viewed",
					"It changes the number of vertices used to define every object",
					"It assigns the same colour to every polygon in the scene",
					"It converts all 3D objects into independent 2D images",
				],
				c: 0,
			},
			{
				q: "According to the slideshow, how can the colour of an object be determined in OpenGL?",
				a: [
					"By assigning colour directly, using lighting, applying textures, or combining these methods",
					"Only by assigning a fixed colour before creating the geometry",
					"Only by calculating shadows from the camera position",
					"Only by loading an external image as the object's geometry",
				],
				c: 0,
			},
			{
				q: "What is the purpose of converting mathematical object descriptions and colour information into pixels?",
				a: [
					"To produce the displayed image on the screen",
					"To convert all objects into editable control points",
					"To determine the source code's programming language",
					"To replace geometric primitives with texture files",
				],
				c: 0,
			},
			{
				q: "What is a wireframe rendering in the examples intended to demonstrate?",
				a: [
					"A view constructed from primitives such as lines and polygons that can reveal objects through other objects",
					"A rendering that displays only textures and hides all object boundaries",
					"A rendering that removes all geometry and displays only lighting",
					"A view in which every object is represented as a solid, opaque colour",
				],
				c: 0,
			},
			{
				q: "In which year does the slideshow state that OpenGL was developed?",
				a: ["1992", "1982", "2002", "2012"],
				c: 0,
			},
			{
				q: "Which of the following is listed as an area where OpenGL is widely used?",
				a: [
					"Virtual reality, visualization, flight simulation, and video games",
					"Word processing, spreadsheet calculation, and database indexing",
					"Audio compression, email delivery, and network routing",
					"Document formatting, file archiving, and operating system installation",
				],
				c: 0,
			},
			{
				q: "Which alternative graphics and game programming technology is mentioned for comparison with OpenGL?",
				a: [
					"Microsoft DirectX",
					"Adobe Photoshop",
					"Microsoft Excel",
					"Blender's UV Editor",
				],
				c: 0,
			},
			{
				q: "What is the main purpose of drawing primitives in OpenGL?",
				a: [
					"To use basic geometric elements as building blocks for shapes and scenes",
					"To automatically generate lighting without any object geometry",
					"To create texture files without defining any objects",
					"To store complete scenes as a sequence of camera movements",
				],
				c: 0,
			},
			{
				q: "How could an approximate circle be drawn using geometric primitives, based on the slideshow's discussion?",
				a: [
					"Connect multiple points with line segments arranged around a circular path",
					"Use a single point and enlarge it until it becomes a circle",
					"Apply a translation to a straight line without changing its shape",
					"Place several textures on a square without changing its geometry",
				],
				c: 0,
			},
			{
				q: "Which OpenGL function is shown for translating an object in 2D?",
				a: [
					"glTranslatef(tx, ty, 0.0)",
					"glRotatef(angle, 0.0, 0.0, 1.0)",
					"glScalef(sx, sy, 1.0)",
					"glTranslatef(angle, sx, sy)",
				],
				c: 0,
			},
			{
				q: "Which OpenGL function is shown for rotating a 2D object around the z-axis?",
				a: [
					"glRotatef(angle, 0.0, 0.0, 1.0)",
					"glTranslatef(tx, ty, 0.0)",
					"glScalef(sx, sy, 1.0)",
					"glRotatef(tx, ty, angle)",
				],
				c: 0,
			},
			{
				q: "Which OpenGL function is shown for scaling an object in 2D?",
				a: [
					"glScalef(sx, sy, 1.0)",
					"glTranslatef(tx, ty, 0.0)",
					"glRotatef(angle, 0.0, 0.0, 1.0)",
					"glScalef(angle, tx, ty)",
				],
				c: 0,
			},
			{
				q: "What does the third argument of glTranslatef(tx, ty, 0.0) represent in the 2D example?",
				a: [
					"The translation along the z-axis, set to zero for the 2D transformation",
					"The rotation angle used to orient the object",
					"The scaling factor applied to the object's height",
					"The number of primitives used to draw the object",
				],
				c: 0,
			},
			{
				q: "What does the slideshow demonstrate about the order of 2D transformations?",
				a: [
					"Changing the order of transformations can produce different results",
					"Transformations always produce identical results regardless of their order",
					"Translation must always be performed after scaling",
					"Rotation can only be applied before an object is created",
				],
				c: 0,
			},
			{
				q: "Which OpenGL function is shown for translating an object in 3D?",
				a: [
					"glTranslatef(tx, ty, tz)",
					"glTranslatef(tx, ty, 0.0) only",
					"glRotatef(angle, 1.0, 0.0, 0.0)",
					"glScalef(sx, sy, sz)",
				],
				c: 0,
			},
			{
				q: "Which axis is specified by the rotation call glRotatef(angle, 1.0, 0.0, 0.0)?",
				a: [
					"The x-axis",
					"The y-axis",
					"The z-axis",
					"The axis defined by the object's translation",
				],
				c: 0,
			},
			{
				q: "Which rotation call specifies rotation around the y-axis?",
				a: [
					"glRotatef(angle, 0.0, 1.0, 0.0)",
					"glRotatef(angle, 1.0, 0.0, 0.0)",
					"glRotatef(angle, 0.0, 0.0, 1.0)",
					"glTranslatef(0.0, angle, 0.0)",
				],
				c: 0,
			},
			{
				q: "Which OpenGL function is shown for scaling an object in 3D?",
				a: [
					"glScalef(sx, sy, sz)",
					"glScalef(sx, sy, 1.0) only",
					"glTranslatef(sx, sy, sz)",
					"glRotatef(sx, sy, sz, 0.0)",
				],
				c: 0,
			},
			{
				q: "What does a negative scaling factor such as -0.5 in glScalef(2.0, -0.5, 1.0) indicate?",
				a: [
					"Scaling along that axis includes a reflection of the coordinate direction",
					"The object cannot be displayed because all scaling factors must be positive",
					"The object is translated by negative half a unit along that axis",
					"The object rotates by negative half a degree around that axis",
				],
				c: 0,
			},
			{
				q: "OpenGL can convert mathematical descriptions of objects and their colour information into pixels for display.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "Applying a translation and then a rotation always produces the same result as applying the rotation and then the translation.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "OpenGL is described in the slideshow as a multi-platform graphics library used in applications such as virtual reality and video games.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "Which objects are included in Blender's default scene?",
				a: [
					"A cube, a camera, and a light",
					"A sphere, a cylinder, and a camera",
					"A plane, a light, and a mesh grid",
					"A cube, a material, and a texture",
				],
				c: 0,
			},
			{
				q: "Which mouse control is used to zoom the 3D viewport in Blender, according to the slides?",
				a: [
					"Scroll with the middle mouse button",
					"Hold Shift and the middle mouse button",
					"Hold the middle mouse button and press Enter",
					"Left-click the object and drag horizontally",
				],
				c: 0,
			},
			{
				q: "How do you orient or rotate the view in Blender's 3D viewport using the demonstrated mouse controls?",
				a: [
					"Hold the middle mouse button and move the mouse",
					"Hold Shift and the middle mouse button",
					"Scroll the mouse wheel while holding Ctrl",
					"Hold the left mouse button and press Shift",
				],
				c: 0,
			},
			{
				q: "How do you pan the 3D viewport using the mouse controls described in the slides?",
				a: [
					"Hold Shift and the middle mouse button",
					"Hold Ctrl and the left mouse button",
					"Hold the middle mouse button without moving the mouse",
					"Scroll the mouse wheel while holding Alt",
				],
				c: 0,
			},
			{
				q: "Which Blender mode is used to select, move, rotate, and scale an entire object?",
				a: [
					"Object Mode",
					"Edit Mode",
					"UV Editing mode only",
					"Material Preview mode",
				],
				c: 0,
			},
			{
				q: "Which Blender mode allows you to modify individual vertices, edges, and faces of a mesh?",
				a: [
					"Edit Mode",
					"Object Mode",
					"Camera View mode",
					"Material Properties mode",
				],
				c: 0,
			},
			{
				q: "You want to move a single vertex without moving the entire object. Which approach should you use?",
				a: [
					"Enter Edit Mode, select the vertex, and translate it",
					"Stay in Object Mode and scale the entire object",
					"Open Material Properties and change the surface colour",
					"Open the UV Editor and mark a seam on the object",
				],
				c: 0,
			},
			{
				q: "Which operation would you use to change the position of an object or selected mesh component?",
				a: ["Move or Translate", "Rotate", "Scale", "Subdivide"],
				c: 0,
			},
			{
				q: "Which operation would you use to change the orientation of a selected object?",
				a: ["Rotate", "Translate", "Inset Faces", "Loop Cut"],
				c: 0,
			},
			{
				q: "Which operation changes the size of a selected object or mesh component?",
				a: ["Scale", "Knife", "Mark Seam", "Extrude Region"],
				c: 0,
			},
			{
				q: "You want to add more geometry by splitting selected mesh elements. Which operation from the slides should you use?",
				a: ["Subdivide", "Inset Faces", "Translate", "Mark Seam"],
				c: 0,
			},
			{
				q: "Which tool creates additional cuts in a mesh to add edges and faces around a shape?",
				a: ["Loop Cut", "Pan", "Image Texture", "Material Properties"],
				c: 0,
			},
			{
				q: "You want to create a cut through a mesh by choosing points and confirming the cut. Which tool should you use?",
				a: [
					"Knife Tool",
					"Subdivision Surface modifier",
					"UV Editor",
					"Extrude Region",
				],
				c: 0,
			},
			{
				q: "Which tool creates a smaller face inside an existing face?",
				a: ["Inset Faces", "Loop Cut", "Knife Tool", "Translate"],
				c: 0,
			},
			{
				q: "You select a face and want to extend it outward or inward to create additional geometry. Which tool should you use?",
				a: ["Extrude Region", "Mark Seam", "Rotate View", "Image Texture"],
				c: 0,
			},
			{
				q: "You want to create a more detailed shape by adding cuts and extending selected faces. Which combination of tools best matches the modeling techniques shown in the slides?",
				a: [
					"Loop Cut and Extrude",
					"Zoom and Pan",
					"Mark Seam and Image Texture",
					"Camera and Light",
				],
				c: 0,
			},
			{
				q: "Which Blender option is demonstrated for making a mesh smoother by increasing its subdivision level?",
				a: [
					"Subdivision Surface modifier",
					"Knife Tool",
					"Inset Faces",
					"UV Unwrap",
				],
				c: 0,
			},
			{
				q: "You want to add a cylinder to a Blender scene. Which menu sequence is shown in the slides?",
				a: [
					"Object Mode > Add > Mesh > Cylinder",
					"Edit Mode > UV > Mark Seam > Cylinder",
					"Material Properties > Surface > Background > Cylinder",
					"UV Editing > Image > Open > Cylinder",
				],
				c: 0,
			},
			{
				q: "Which workspace should you choose to work with UV layouts in Blender?",
				a: [
					"UV Editing",
					"Object Mode",
					"Material Properties",
					"3D Viewport only",
				],
				c: 0,
			},
			{
				q: "You want to mark a seam on a UV sphere. What sequence matches the demonstrated workflow?",
				a: [
					"Enter Edit Mode, select edges, then choose Mark Seam from the UV menu",
					"Enter Object Mode, select faces, then choose Extrude Region",
					"Open Material Properties, select a colour, then choose Subdivide",
					"Open the UV Editor, select an image, then choose Loop Cut",
				],
				c: 0,
			},
			{
				q: "Where do you go to assign an image texture to an object's material in the demonstrated Blender workflow?",
				a: [
					"Material Properties, then Surface and Image Texture",
					"The Knife Tool, then the UV menu",
					"Object Mode, then the camera settings",
					"The Loop Cut tool, then the Subdivision menu",
				],
				c: 0,
			},
			{
				q: "After selecting Image Texture for a material, which action loads an image file?",
				a: [
					"Click Open and choose the texture file",
					"Choose Mark Seam and select a mesh edge",
					"Use Extrude Region to create a new face",
					"Select Subdivide and choose an image from the viewport",
				],
				c: 0,
			},
			{
				q: "When exporting a textured mesh from Blender using the workflow in the slides, which file is created for the mesh?",
				a: ["An OBJ file", "An MTL file only", "A JPG file", "A UV file"],
				c: 0,
			},
			{
				q: "Blender's Edit Mode can be used to edit vertices, edges, and faces, while Object Mode is used to manipulate an entire object.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "The slides demonstrate using Blender's Material Properties to assign an image texture to a model.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
		],
		lautest: [
			{
				q: "How can these objects be represented in a computer?",
				a: [
					"Using a suitable 3D model representation",
					"Using only the colours of the objects",
					"Using only the camera positions",
					"Using only the lighting settings",
				],
				c: 0,
				i: "./assets/quizimages/lau-gfxmidtermpractice/image1.png",
			},
			{
				q: "Which tables are used to represent the vertices and faces of a triangular pyramid?",
				a: [
					"A vertex table and a face table",
					"A coordinate table and a transformation table",
					"A polygon table and a texture table",
					"A normal table and a lighting table",
				],
				c: 0,
			},
			{
				q: "A range image is the same as a usual image.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "Why is a range image different from a usual image?",
				a: [
					"It represents distance or depth information for points in a scene",
					"It only stores the colours used to shade a three-dimensional model",
					"It records the order in which objects appear in a scene",
					"It stores only the edges and faces of a polygon mesh",
				],
				c: 0,
			},
			{
				q: "A point cloud should have the same density of points everywhere.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "Why might a point cloud have different point densities in different parts of a scene?",
				a: [
					"Some regions may require more points to capture detail accurately",
					"Every region must contain exactly the same number of points",
					"Point density is determined only by the colours of the objects",
					"Point clouds cannot represent surfaces with varying detail",
				],
				c: 0,
			},
			{
				q: "What do the three equations shown on the image define?",
				a: [
					"The surface of an ellipsoid",
					"The surface area of a cube",
					"The position of a 3D object in Blender",
					"How far a 3D object has to travel",
				],
				c: 0,
				i: "./assets/quizimages/lau-gfxmidtermpractice/image2.png",
			},
			{
				q: "What does the equation f(x, y, z) = 0 (on surface) define?",
				a: [
					"An equation used in Blender to conduct rotational properties",
					"The point lies outside of the object ",
					"The point is travelling along the surface",
					"The point lies on the surface of the object",
				],
				c: 3,
			},
			{
				q: "Voxels are affine invariant.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "What does it mean that voxels are not affine invariant?",
				a: [
					"Their representation can change under affine transformations, such as scaling or rotation",
					"They always preserve the exact shape of every object",
					"They can only represent objects with flat surfaces",
					"They store the colour and texture of each polygon",
				],
				c: 0,
				i: false,
			},
			{
				q: "Why are voxels only an approximate representation?",
				a: [
					"They represent space using discrete volume elements",
					"They cannot store any information about object positions",
					"They only work when a model contains triangular faces",
					"They require every object to have a smooth surface",
				],
				c: 0,
				i: false,
			},
			{
				q: "In the scene graph shown, if a new object intersects the rectangle at node B, what should be checked next to determine whether it intersects any other objects?",
				a: [
					"The other relevant objects or nodes in the scene graph",
					"Only the texture coordinates assigned to node B",
					"The lighting settings of the entire scene",
					"The colour values stored in the rectangle",
				],
				c: 0,
				i: "./assets/quizimages/lau-gfxmidtermpractice/image3.png",
			},
			{
				q: "Why don't we store every possible mesh for Subdivision Surfaces and select the one we need?",
				a: [
					"Storing every level of detail would require too much memory",
					"Subdivision Surfaces cannot produce more than one mesh",
					"Every subdivision iteration removes the original mesh",
					"Meshes cannot be stored in computer memory",
				],
				c: 0,
				i: "./assets/quizimages/lau-gfxmidtermpractice/image4.png",
			},
			{
				q: "After two iterations of topology refinement in Loop Subdivision, what happens to the gray triangle?",
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
				q: "How would you apply the subdivision rule shown in the image?",
				a: [
					"Apply the rule to update the relevant points or vertices",
					"Use the rule to assign a colour to each polygon",
					"Apply the rule to rotate the camera around the model",
					"Use the rule to remove all vertices from the mesh",
				],
				c: 0,
				i: "./assets/quizimages/lau-gfxmidtermpractice/image6.png",
			},
			{
				q: "In Linear Subdivision, what is the new value of the point (2,2,2) after one iteration?",
				a: [
					"(1.67, 1.67, 1.67)",
					"(1.5, 1.5, 1.5)",
					"(1.33, 1.33, 1.33)",
					"(2.67, 2.67, 2.67)",
				],
				c: 0,
				i: "./assets/quizimages/lau-gfxmidtermpractice/image7.png",
			},
			{
				q: "What do the displayed formulas for scaling 2D objects in 2D space mean?",
				a: [
					"They change an object's size along the coordinate axes",
					"They rotate an object around the origin",
					"They move an object without changing its size",
					"They reflect an object across the Y axis",
				],
				c: 0,
				i: "./assets/quizimages/lau-gfxmidtermpractice/image8.png",
			},
			{
				q: "Why does the displayed matrix perform a 2D mirror over the Y axis?",
				a: [
					"It reverses the x-coordinate while keeping the y-coordinate unchanged",
					"It reverses the y-coordinate while keeping the x-coordinate unchanged",
					"It adds the same value to both coordinates",
					"It swaps the x- and y-coordinates",
				],
				c: 0,
				i: "./assets/quizimages/lau-gfxmidtermpractice/image9.png",
			},
			{
				q: "Why does the displayed matrix perform a 3D translation?",
				a: [
					"It adds displacement values to a point's coordinates",
					"It changes the point's size along all three axes",
					"It reverses the direction of the point's coordinates",
					"It converts the point into a surface normal",
				],
				c: 0,
				i: "./assets/quizimages/lau-gfxmidtermpractice/image10.png",
			},
			{
				q: "True or False: Matrix multiplication is associative.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 0,
			},
			{
				q: "What does it mean that matrix multiplication is associative for the matrices T, R, and S?",
				a: [
					"The grouping of the matrix multiplications can change without changing the result",
					"The order of the matrices can change without changing the result",
					"The matrices must all contain the same values",
					"The matrices must be multiplied by their inverses",
				],
				c: 0,
			},
			{
				q: "True or False: Matrix multiplication is commutative.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
			},
			{
				q: "What does it mean that matrix multiplication is not commutative?",
				a: [
					"Changing the order of matrices can change the result",
					"Changing the grouping of matrices always changes the result",
					"Every matrix multiplication produces the identity matrix",
					"Matrices cannot be multiplied in a sequence",
				],
				c: 0,
			},
			{
				q: "In the Blender screenshot, what is the relationship between the left and right windows, especially regarding the image?",
				a: [
					"The windows show related views of the same scene or image data",
					"The windows display two unrelated projects",
					"The windows display the same image data with different editing tools",
					"The windows show different parts of the same project in separate workspaces",
				],
				c: 0,
				i: "./assets/quizimages/lau-gfxmidtermpractice/image11.png",
			},
			{
				q: "This formula is a type of line in the OBJ file format. For the cube shown, how many such lines would there be? How many v, vt, and vn lines are there?",
				a: [
					"Determine the face lines and the vertex, texture-coordinate, and normal lines from the cube",
					"Count only the cube's vertices and ignore its faces and texture coordinates",
					"Count the cube's materials and lighting settings instead of its geometry",
					"Count the cube's edges and use that number for every line type",
				],
				c: 0,
				i: "./assets/quizimages/lau-gfxmidtermpractice/image12.png",
			},
			{
				q: "For a line segment with P₀ = (1,2) and P₁ = (3,4), what point is obtained when u = 0.25?",
				a: ["(1.5, 2.5)", "(2, 3)", "(2.5, 3.5)", "(3, 4)"],
				c: 0,
				i: "./assets/quizimages/lau-gfxmidtermpractice/image13.png",
			},
			{
				q: "Why should the blending function B₁(u) for the parametric curve start with the shape shown in the image?",
				a: [
					"It helps control how the associated control point influences the curve",
					"It ensures that every control point has zero influence",
					"It makes the curve a straight line in every case",
					"It determines the colour of the curve at each point",
				],
				c: 0,
				i: "./assets/quizimages/lau-gfxmidtermpractice/image14.png",
			},
			{
				q: "This is the formula for a cubic Bézier curve. How would you use these blending functions to create points on the curve?",
				a: [
					"Evaluate the functions at values of u and combine the control points using the results",
					"Use the functions to calculate the colour of each control point",
					"Apply each function once to create a separate polygon face",
					"Use the functions to determine the camera's viewing direction",
				],
				c: 0,
				i: "./assets/quizimages/lau-gfxmidtermpractice/image15.png",
			},
			{
				q: "This is the formula for a Parametric patch. Explain how you would use it to create points on such a surface.",
				a: [
					"Evaluate the blending functions for u and v and combine the control points",
					"Use u and v only to determine the surface's colour",
					"Apply the formula to calculate the number of vertices in a cube",
					"Use the formula to rotate the camera around the surface",
				],
				c: 0,
				i: "./assets/quizimages/lau-gfxmidtermpractice/image16.png",
			},
			{
				q: "Write the sequence of OpenGL 2D transformations that maps the given shape on the left to the shape on the right.",
				a: [
					"glTranslatef(2.0, 3.0, 0.0);\nglRotatef(45.0, 0.0, 0.0, 1.0);\nglScalef(1.0, 2.0, 1.0);",
					"glScalef(1.0, 2.0, 1.0);\nglRotatef(45.0, 0.0, 0.0, 1.0);\nglTranslatef(2.0, 3.0, 0.0);",
					"glTranslatef(2.0, 3.0, 0.0);\nglScalef(1.0, 2.0, 1.0);",
					"glRotatef(45.0, 0.0, 0.0, 1.0);\nglTranslatef(2.0, 3.0, 0.0);\nglScalef(1.0, 2.0, 1.0);",
				],
				c: 0,
				i: "./assets/quizimages/lau-gfxmidtermpractice/image17.png",
				interaction: {
					type: "opengl-transform-sequence",
					solution: [
						{ function: "translate", tx: 2, ty: 3 },
						{ function: "rotate", angle: 45 },
						{ function: "scale", sx: 1, sy: 2 },
					],
				},
			},
			{
				q: "True or False: The OpenGL code shown draws three points and three triangles.",
				a: ["True", "False", "BLANK", "BLANK"],
				c: 1,
				i: "./assets/quizimages/lau-gfxmidtermpractice/image18.png",
			},
			{
				q: "Why doesn't the OpenGL code shown draw three points and three triangles?",
				a: [
					"GL_POINTS draws three points, but GL_TRIANGLES uses three vertices to draw only one triangle",
					"Each vertex automatically creates a separate triangle",
					"OpenGL requires six vertices to draw three triangles",
					"GL_POINTS and GL_TRIANGLES both draw only one shape",
				],
				c: 0,
				i: "./assets/quizimages/lau-gfxmidtermpractice/image18.png",
			},
			{
				q: "Which gluLookAt() parameters would position the camera as shown?",
				a: [
					"gluLookAt(eyeX, eyeY, eyeZ, centerX, centerY, centerZ, upX, upY, upZ)",
					"gluLookAt(centerX, centerY, centerZ, eyeX, eyeY, eyeZ, upX, upY, upZ)",
					"gluLookAt(eyeX, eyeY, eyeZ, upX, upY, upZ, centerX, centerY, centerZ)",
					"gluLookAt(eyeX, eyeY, centerX, eyeZ, centerZ, upX, upY, upZ, upZ)",
				],
				c: 0,
				i: "./assets/quizimages/lau-gfxmidtermpractice/image19.png",
			},
			{
				q: "Which 3D model representation stores depth or distance measurements for pixels in an image?",
				a: ["Range image", "Point cloud", "Polygonal mesh", "Scene graph"],
				c: 0,
				i: false,
			},
			{
				q: "Which 3D model representation stores a collection of points sampled from an object's surface?",
				a: ["CSG", "Point cloud", "BSP tree", "Subdivision surface"],
				c: 1,
				i: false,
			},
			{
				q: "Which 3D model representation describes an object's surface using vertices, edges, and polygonal faces?",
				a: ["Implicit surface", "Voxel model", "Polygonal mesh", "Range image"],
				c: 2,
				i: false,
			},
			{
				q: "Which 3D model representation creates smoother surfaces by repeatedly refining a polygonal mesh?",
				a: ["Scene graph", "Subdivision surface", "CSG", "Point cloud"],
				c: 1,
				i: false,
			},
			{
				q: "Which 3D model representation defines a surface using parameters and functions to calculate points on it?",
				a: ["Parametric surface", "BSP tree", "Voxel model", "Range image"],
				c: 0,
				i: false,
			},
			{
				q: "Which 3D model representation defines a surface using an equation that determines whether points lie on, inside, or outside it?",
				a: ["Polygonal mesh", "Scene graph", "Implicit surface", "Point cloud"],
				c: 2,
				i: false,
			},
			{
				q: "Which 3D model representation divides space into a regular grid of volumetric elements?",
				a: ["Voxel model", "Parametric surface", "Polygonal mesh", "BSP tree"],
				c: 0,
				i: false,
			},
			{
				q: "Which 3D model representation recursively partitions space using planes to organize objects or regions?",
				a: [
					"Subdivision surface",
					"BSP tree",
					"Range image",
					"Sweep representation",
				],
				c: 1,
				i: false,
			},
			{
				q: "Which 3D model representation constructs complex solid objects by combining primitives using operations such as union, intersection, and difference?",
				a: [
					"Point cloud",
					"Scene graph",
					"Constructive Solid Geometry (CSG)",
					"Implicit surface",
				],
				c: 2,
				i: false,
			},
			{
				q: "Which 3D model representation creates a shape by moving a 2D profile along a specified path?",
				a: [
					"Sweep representation",
					"Range image",
					"BSP tree",
					"Subdivision surface",
				],
				c: 0,
				i: false,
			},
			{
				q: "Which 3D model representation organizes objects and their relationships in a hierarchical structure?",
				a: [
					"Voxel model",
					"Polygonal mesh",
					"Scene graph",
					"Parametric surface",
				],
				c: 2,
				i: false,
			},
			{
				q: "Take a primitive 3D shape with 10 vertices. Write a vertex table for the shape.",
				a: [
					"Enter the X, Y, and Z coordinates for vertices v0 through v9",
					"Enter one camera position for each face",
					"Enter the material and colour for each vertex",
					"Enter the face normals in place of vertex coordinates",
				],
				c: 0,
				i: false,
				interaction: {
					type: "mesh-table",
					table: "vertices",
					rowPrefix: "v",
					columnHeaders: ["X", "Y", "Z"],
					correctTable: [
						["2", "0", "0"],
						["1", "2", "0"],
						["-1", "2", "0"],
						["-2", "0", "0"],
						["0", "-2", "0"],
						["2", "0", "3"],
						["1", "2", "3"],
						["-1", "2", "3"],
						["-2", "0", "3"],
						["0", "-2", "3"],
					],
				},
			},
			{
				q: "Take a primitive 3D shape with 10 vertices. Write a face table for the shape. The vertex table has been provided in the image.",
				a: [
					"Enter the vertex numbers for each face, separated by commas",
					"Enter the X, Y, and Z coordinates for each face",
					"Enter a texture name for each vertex",
					"Enter one camera position for each face",
				],
				c: 0,
				i: "./assets/quizimages/lau-gfxmidtermpractice/image20.png",
				interaction: {
					type: "mesh-table",
					table: "faces",
					rowPrefix: "f",
					columnHeaders: ["Vertex numbers (comma-separated)"],
					correctTable: [
						["V1, V2, V3, V4, V5"],
						["V6, V7, V8, V9, V10"],
						["V1, V2, V7, V6"],
						["V2, V3, V8, V7"],
						["V3, V4, V9, V8"],
						["V4, V5, V10, V9"],
						["V5, V1, V6, V10"],
					],
				},
			},
			{
				q: "For a triangular pyramid, how would you use Loop Subdivision to update the location of one vertex?",
				a: [
					"Apply the Loop Subdivision vertex-update rule to the vertex and its neighbours",
					"Move the vertex to the origin regardless of its neighbours",
					"Replace the vertex with a texture coordinate",
					"Delete the vertex and leave its adjacent faces unchanged",
				],
				c: 0,
				i: false,
			},
		],
	},
};

window.questionCodes = {
	CompArch: "COMP-2453",
	CloudComp: "COMP-4312",
	SocIndi: "SOCI-2755",
	DataSci: "COMP-4112",
	SoftEngi: "COMP-3415",
	CompGFX: "COMP-4471",
};

window.quizThemes = {
	Default: {
		pageBg: "#6f7d86",
		visualBg: "#348ac0",
		courseText: "#0e426c",
		questionText: "#0e426c",
		panelBg: "#6f7d86",
		panelBorder: "#91a4bf",
		buttonBg: "#b9bec0",
		buttonAccent: "#7a1731",
		success: "#39c85a",
		danger: "#d94b4b",
	},
	CompArch: {
		pageBg: "#7f1818",
		visualBg: "#7f1818",
		courseText: "#440a0a",
		questionText: "#fff6f6",
		hudText: "#ffffff",
		panelBg: "#c37714",
		panelBorder: "#d38517",
		buttonBg: "#ecd506",
		buttonAccent: "#7a6617",
		success: "#39c85a",
		danger: "#d94b4b",
	},
	CloudComp: {
		pageBg: "#6f7d86",
		visualBg: "#348ac0",
		courseText: "#0e426c",
		questionText: "#0e426c",
		panelBg: "#6f7d86",
		panelBorder: "#91a4bf",
		buttonBg: "#b9bec0",
		buttonAccent: "#7a1731",
		success: "#39c85a",
		danger: "#d94b4b",
	},
	SocIndi: {
		pageBg: "#6b4d6e",
		visualBg: "#b85ac4",
		courseText: "#321a3b",
		questionText: "#fdf3ff",
		panelBg: "#d9a8d9",
		panelBorder: "#c38ad3",
		buttonBg: "#f4d5ea",
		buttonAccent: "#7a1f60",
		success: "#39c85a",
		danger: "#d94b4b",
	},
	DataSci: {
		pageBg: "#4b2e16",
		visualBg: "#6b431d",
		courseText: "#3a210e",
		questionText: "#fff4bf",
		hudText: "#ffffff",
		panelBg: "#a96f24",
		panelBorder: "#d39a32",
		buttonBg: "#f0d34f",
		buttonAccent: "#6b431d",
		success: "#39c85a",
		danger: "#d94b4b",
	},
	CompGFX: {
		pageBg: "#6f8074",
		visualBg: "#348a58",
		courseText: "#174d2a",
		questionText: "#174d2a",
		panelBg: "#6f8074",
		panelBorder: "#91bf9b",
		buttonBg: "#bec8c0",
		buttonAccent: "#286b3b",
		success: "#39c85a",
		danger: "#d94b4b",
	},
	SoftEngi: {
		pageBg: "#212121",
		visualBg: "#2F2F2F",
		courseText: "#ECECEC",
		questionText: "#ECECEC",
		panelBg: "#303030",
		panelBorder: "#454545",
		buttonBg: "#424242",
		buttonAccent: "#10A37F",
		success: "#199bc3",
		danger: "#EF4444",
	},
};
