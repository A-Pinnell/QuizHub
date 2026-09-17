window.questionBank = {

  CompArch: [

    // =========================
    // BINARY NUMBERS
    // =========================

    {q:"What digits are used in the binary number system?", a:["1 and 2","0 and 1","0 through 9","A through F"], c:1},
    {q:"In binary, what value represents TRUE?", a:["0","1","2","10"], c:1},
    {q:"In binary, what value represents FALSE?", a:["0","1","2","-1"], c:0},
    {q:"What does MSB stand for?", a:["Maximum Storage Bit","Most Significant Bit","Memory System Byte","Main Significant Byte"], c:1},
    {q:"What does LSB stand for?", a:["Least Significant Bit","Last Storage Byte","Logical System Bit","Lowest Storage Block"], c:0},
    {q:"What does each binary digit represent?", a:["A power of 2","A power of 10","A power of 16","A power of 8"], c:0},
    {q:"A binary number is the sum of what?", a:["Powers of 10","Powers of 8","Powers of 2","Powers of 16"], c:2},
    {q:"What is 2^0 equal to?", a:["0","1","2","10"], c:1},
    {q:"What is 2^1 equal to?", a:["1","2","4","8"], c:1},
    {q:"What is 2^2 equal to?", a:["2","4","8","16"], c:1},
    {q:"What is 2^3 equal to?", a:["4","8","16","32"], c:1},
    {q:"What is 2^4 equal to?", a:["8","16","32","64"], c:1},
    {q:"What is 2^5 equal to?", a:["16","32","64","128"], c:1},
    {q:"What is 2^6 equal to?", a:["32","64","128","256"], c:1},
    {q:"What is 2^7 equal to?", a:["64","128","256","512"], c:1},
    {q:"What is 2^8 equal to?", a:["128","256","512","1024"], c:1},
    {q:"What is 2^9 equal to?", a:["256","512","1024","2048"], c:1},
    {q:"What is 2^10 equal to?", a:["512","1024","2048","4096"], c:1},
    {q:"What is 2^11 equal to?", a:["1024","2048","4096","8192"], c:1},
    {q:"What is 2^12 equal to?", a:["2048","4096","8192","16384"], c:1},
    {q:"What is 2^13 equal to?", a:["4096","8192","16384","32768"], c:1},
    {q:"What is 2^14 equal to?", a:["8192","16384","32768","65536"], c:1},
    {q:"What is 2^15 equal to?", a:["16384","32768","65536","131072"], c:1},
    {q:"What is the decimal value of binary 00001001?", a:["7","8","9","10"], c:2},
    {q:"Which binary digit is located at the 2^0 position?", a:["MSB","LSB","Middle bit","Sign bit"], c:1},
    {q:"In weighted position notation, what is multiplied by a power of 2?", a:["The binary digit","The decimal point","The hexadecimal digit","The carry"], c:0},
    {q:"What is the first step when converting an unsigned decimal integer to binary?", a:["Multiply by 2","Divide by 2","Divide by 16","Add 1"], c:1},
    {q:"When repeatedly dividing a decimal number by 2, what becomes a binary digit?", a:["The quotient","The remainder","The divisor","The product"], c:1},
    {q:"How do you read the remainders when converting decimal to binary?", a:["Left to right from first remainder","Right to left","Only the final remainder","In alphabetical order"], c:1},
    {q:"What is decimal 37 in binary?", a:["100101","101001","110001","100111"], c:0},
    {q:"What is the binary representation of decimal 1?", a:["0","1","10","11"], c:1},
    {q:"What is the binary representation of decimal 2?", a:["1","10","11","100"], c:1},
    {q:"What is the binary representation of decimal 4?", a:["10","100","101","110"], c:1},
    {q:"What is the binary representation of decimal 8?", a:["100","1000","1010","1111"], c:1},
    {q:"When performing binary addition, which bit is processed first?", a:["MSB","Middle bit","LSB","Sign bit"], c:2},
    {q:"What must be included when adding binary digits?", a:["Only the digits","The carry if present","Only the MSB","The decimal equivalent"], c:1},

    // =========================
    // INTEGER STORAGE
    // =========================

    {q:"What is the range of an unsigned byte?", a:["0 to 127","-128 to 127","0 to 255","0 to 65,535"], c:2},
    {q:"How many bits are in an unsigned byte?", a:["4","8","16","32"], c:1},
    {q:"What is the maximum value of an unsigned byte?", a:["127","128","255","256"], c:2},
    {q:"What is the range of an unsigned word?", a:["0 to 255","0 to 65,535","-32768 to 32767","0 to 4,294,967,295"], c:1},
    {q:"How many bits are in an unsigned word?", a:["8","16","32","64"], c:1},
    {q:"What is the maximum value of an unsigned word?", a:["255","32,767","65,535","65,536"], c:2},
    {q:"What is the range of an unsigned doubleword?", a:["0 to 65,535","0 to 4,294,967,295","-2^31 to 2^31-1","0 to 18,466,744,073,709,551,615"], c:1},
    {q:"How many bits are in an unsigned doubleword?", a:["8","16","32","64"], c:2},
    {q:"How many bits are in an unsigned quadword?", a:["16","32","64","128"], c:2},
    {q:"What is the maximum value of an unsigned quadword?", a:["2^32 - 1","2^48 - 1","2^64 - 1","2^128 - 1"], c:2},

    // =========================
    // HEXADECIMAL
    // =========================

    {q:"What number system uses digits 0-9 and letters A-F?", a:["Binary","Decimal","Hexadecimal","Octal"], c:2},
    {q:"What is hexadecimal A equal to in decimal?", a:["8","9","10","11"], c:2},
    {q:"What is hexadecimal B equal to in decimal?", a:["9","10","11","12"], c:2},
    {q:"What is hexadecimal C equal to in decimal?", a:["10","11","12","13"], c:2},
    {q:"What is hexadecimal D equal to in decimal?", a:["11","12","13","14"], c:2},
    {q:"What is hexadecimal E equal to in decimal?", a:["12","13","14","15"], c:2},
    {q:"What is hexadecimal F equal to in decimal?", a:["13","14","15","16"], c:2},
    {q:"How many binary bits correspond to one hexadecimal digit?", a:["2","4","8","16"], c:1},
    {q:"What is binary 0000 in hexadecimal?", a:["0","1","8","F"], c:0},
    {q:"What is binary 0001 in hexadecimal?", a:["0","1","2","A"], c:1},
    {q:"What is binary 0010 in hexadecimal?", a:["1","2","3","B"], c:1},
    {q:"What is binary 0011 in hexadecimal?", a:["2","3","4","C"], c:1},
    {q:"What is binary 0100 in hexadecimal?", a:["3","4","5","D"], c:1},
    {q:"What is binary 0101 in hexadecimal?", a:["4","5","6","E"], c:1},
    {q:"What is binary 0110 in hexadecimal?", a:["5","6","7","F"], c:1},
    {q:"What is binary 0111 in hexadecimal?", a:["6","7","8","9"], c:1},
    {q:"What is binary 1000 in hexadecimal?", a:["7","8","9","A"], c:1},
    {q:"What is binary 1001 in hexadecimal?", a:["8","9","A","B"], c:1},
    {q:"What is binary 1010 in hexadecimal?", a:["9","A","B","C"], c:1},
    {q:"What is binary 1011 in hexadecimal?", a:["A","B","C","D"], c:1},
    {q:"What is binary 1100 in hexadecimal?", a:["B","C","D","E"], c:1},
    {q:"What is binary 1101 in hexadecimal?", a:["C","D","E","F"], c:1},
    {q:"What is binary 1110 in hexadecimal?", a:["D","E","F","10"], c:1},
    {q:"What is binary 1111 in hexadecimal?", a:["E","F","10","11"], c:1},
    {q:"How do you convert binary to hexadecimal?", a:["Group bits into groups of 2","Group bits into groups of 4","Group bits into groups of 8","Divide by 10"], c:1},
    {q:"What is binary 000101101010011110010100 in hexadecimal?", a:["16A794","1A6794","1A679F","16A974"], c:0},
    {q:"When converting hexadecimal to decimal, what base is used for positional powers?", a:["2","8","10","16"], c:3},
    {q:"What is 16^0 equal to?", a:["0","1","16","256"], c:1},
    {q:"What is 16^1 equal to?", a:["1","8","16","32"], c:2},
    {q:"What is 16^2 equal to?", a:["16","128","256","512"], c:2},
    {q:"What is 16^3 equal to?", a:["256","4096","65,536","1,048,576"], c:1},
    {q:"What is hexadecimal 1234 in decimal?", a:["1,234","4,660","4,096","5,120"], c:1},
    {q:"What is hexadecimal 3BA4 in decimal?", a:["15,268","13,824","16,384","12,348"], c:0},
    {q:"What is decimal 422 in hexadecimal?", a:["1A6","1B6","2A6","1A4"], c:0},
    {q:"When converting decimal to hexadecimal, what number is repeatedly divided by?", a:["2","8","10","16"], c:3},
    {q:"In hexadecimal addition, what becomes the carry value?", a:["The remainder","The quotient","The divisor","The original digit"], c:1},
    {q:"In hexadecimal addition, what becomes the sum digit?", a:["The quotient","The divisor","The remainder","The carry"], c:2},
    {q:"When a borrow is required during hexadecimal subtraction, what is added to the current digit?", a:["2","8","10","16"], c:3},

    // =========================
    // SIGNED INTEGERS
    // =========================

    {q:"What does the highest bit indicate for a signed integer?", a:["The magnitude only","The sign","The carry","The base"], c:1},
    {q:"What does a highest bit of 1 indicate in a signed integer?", a:["Positive","Negative","Zero","Overflow"], c:1},
    {q:"What does a highest bit of 0 indicate in a signed integer?", a:["Negative","Positive","Hexadecimal","Overflow"], c:1},
    {q:"For a signed hexadecimal integer, what indicates a negative value?", a:["Highest digit is less than 8","Highest digit is greater than 7","Lowest digit is 0","Lowest digit is F"], c:1},
    {q:"Which hexadecimal value is negative according to the notes?", a:["2A","4F","7C","8A"], c:3},
    {q:"Which hexadecimal value is negative according to the notes?", a:["1A","5C","C5","6D"], c:2},
    {q:"Which hexadecimal value is positive according to the sign rule?", a:["8A","C5","A2","7D"], c:3},
    {q:"How are negative numbers stored according to the notes?", a:["Sign-magnitude only","Two's complement notation","Hexadecimal only","Unsigned notation"], c:1},
    {q:"What does two's complement represent?", a:["A multiplication","An additive inverse","A hexadecimal conversion","A logical AND"], c:1},
    {q:"What is the first step in forming a two's complement value?", a:["Add 1","Reverse the bits","Multiply by 2","Remove the MSB"], c:1},
    {q:"What is the second step in forming a two's complement value?", a:["Divide by 2","Reverse the bits again","Add 1","Subtract 1"], c:2},
    {q:"What is the two's complement of 00000001?", a:["11111110","11111111","00000010","10000001"], c:1},
    {q:"What is the result of 00000001 + 11111111 in an 8-bit calculation?", a:["00000000","00000001","11111110","11111111"], c:0},
    {q:"How is binary subtraction A - B performed using two's complement?", a:["Multiply A and B","Convert B to two's complement and add it to A","Convert A to hexadecimal","Subtract the MSBs only"], c:1},
    {q:"What is the two's complement of 00000011?", a:["11111100","11111101","00000010","10000011"], c:1},
    {q:"What is 00001100 - 00000011?", a:["00000111","00001001","00001111","11111001"], c:1},
    {q:"What happens to the extra carry in an 8-bit two's complement subtraction?", a:["It becomes the MSB","It is discarded","It is added again","It becomes zero only if negative"], c:1},
    {q:"What is the signed byte range?", a:["0 to 255","-127 to 127","-128 to +127","-256 to +255"], c:2},
    {q:"What is the signed word range?", a:["-255 to 255","-32768 to +32767","0 to 65535","-65536 to +65536"], c:1},
    {q:"What is the signed doubleword range?", a:["-2^16 to 2^16-1","-2^31 to +2^31-1","0 to 2^32-1","-2^64 to 2^64-1"], c:1},
    {q:"How many bits are available for the magnitude of an 8-bit signed integer?", a:["8","7","6","4"], c:1},
    {q:"Why is the signed integer range smaller than the unsigned range?", a:["One bit is reserved for the sign","The MSB is removed","Hexadecimal is used","The LSB is ignored"], c:0},

    // =========================
    // BOOLEAN ALGEBRA
    // =========================

    {q:"What mathematical discipline is used to analyze digital circuitry?", a:["Calculus","Boolean algebra","Linear algebra","Statistics"], c:1},
    {q:"Who is Boolean algebra associated with?", a:["George Boole","Alan Turing","Charles Babbage","John von Neumann"], c:0},
    {q:"What values can a Boolean variable take?", a:["0 and 1","1 and 2","0 through 9","A through F"], c:0},
    {q:"In Boolean algebra, what does 1 represent?", a:["FALSE","TRUE","UNKNOWN","ERROR"], c:1},
    {q:"In Boolean algebra, what does 0 represent?", a:["TRUE","FALSE","HIGH ONLY","ERROR"], c:1},
    {q:"Which is a basic Boolean operation?", a:["NOT","ADD","MULTIPLY","DIVIDE"], c:0},
    {q:"Which set contains the three basic Boolean operations?", a:["ADD, SUBTRACT, MULTIPLY","NOT, AND, OR","XOR, ADD, DIVIDE","NAND, NOR, ADD"], c:1},
    {q:"What does the NOT operation do?", a:["Adds two values","Inverts a Boolean value","Multiplies two values","Stores a value"], c:1},
    {q:"What is NOT 0?", a:["0","1","2","10"], c:1},
    {q:"What is NOT 1?", a:["0","1","2","-1"], c:0},
    {q:"What is the result of 0 AND 0?", a:["0","1","2","TRUE"], c:0},
    {q:"What is the result of 0 AND 1?", a:["0","1","TRUE","UNDEFINED"], c:0},
    {q:"What is the result of 1 AND 0?", a:["0","1","TRUE","UNDEFINED"], c:0},
    {q:"What is the result of 1 AND 1?", a:["0","1","2","FALSE"], c:1},
    {q:"What is the result of 0 OR 0?", a:["0","1","TRUE","2"], c:0},
    {q:"What is the result of 0 OR 1?", a:["0","1","FALSE","2"], c:1},
    {q:"What is the result of 1 OR 0?", a:["0","1","FALSE","2"], c:1},
    {q:"What is the result of 1 OR 1?", a:["0","1","2","FALSE"], c:1},
    {q:"What does the expression ¬X represent?", a:["X AND X","NOT X","X OR X","X XOR X"], c:1},
    {q:"What does X ^ Y represent?", a:["X OR Y","X AND Y","NOT X","X XOR Y"], c:1},
    {q:"What does X v Y represent?", a:["X OR Y","X AND Y","NOT Y","X XOR Y"], c:0},
    {q:"In the expression ¬X v Y, which operation occurs first?", a:["OR","NOT","AND","XOR"], c:1},
    {q:"In the expression X v (Y ^ Z), which operation is performed first?", a:["OR","AND","NOT","None"], c:1},
    {q:"In the expression ¬(X v Y), which operation is performed first?", a:["NOT","OR","AND","XOR"], c:1},
    {q:"What is a truth table used to show?", a:["Only outputs","All inputs and outputs of a Boolean function","Only inputs","Memory capacity"], c:1},
    {q:"A Boolean function has one or more Boolean inputs and returns what?", a:["A single Boolean output","A decimal output","A hexadecimal output","A memory address"], c:0},

    // =========================
    // LOGIC GATES
    // =========================

    {q:"What is the fundamental building block of digital logic circuits?", a:["Register","Gate","Counter","Memory chip"], c:1},
    {q:"What do logic gates implement?", a:["Boolean functions","Decimal division","Memory addresses","File storage"], c:0},
    {q:"Which is NOT listed as a basic digital logic gate?", a:["AND","OR","NOT","ADD"], c:3},
    {q:"Which gate inverts its input?", a:["AND","OR","NOT","XOR"], c:2},
    {q:"Which gate outputs 1 only when both inputs are 1?", a:["OR","AND","NOT","NOR"], c:1},
    {q:"Which gate outputs 1 when at least one input is 1?", a:["AND","OR","NOT","NAND"], c:1},
    {q:"Which gate is listed among the basic gates along with AND, OR, and NOT?", a:["NAND","ADD","DIV","SHIFT"], c:0},
    {q:"Which other gate is listed among the basic digital logic gates?", a:["NOR","SUM","COMPARE","STORE"], c:0},
    {q:"Which exclusive logic gate is listed in the notes?", a:["XOR","XNOR only","ADD","SHIFT"], c:0},
    {q:"What is the output of a NOT gate when its input is TRUE?", a:["TRUE","FALSE","Both","Undefined"], c:1},
    {q:"What is the output of an AND gate when either input is FALSE?", a:["TRUE","FALSE","Depends on the MSB","Undefined"], c:1},
    {q:"What is the output of an OR gate when either input is TRUE?", a:["TRUE","FALSE","Always 0","Undefined"], c:0},

    // =========================
    // COMBINATIONAL CIRCUITS
    // =========================

    {q:"What is a combinational circuit?", a:["A circuit whose output depends only on its current input","A circuit whose output depends only on past inputs","A memory device","A counter"], c:0},
    {q:"What does a combinational circuit generally have?", a:["n binary inputs and m binary outputs","Only one input","Only one output","No inputs"], c:0},
    {q:"What happens after an input appears in a combinational circuit?", a:["The output appears after only gate delays","The output waits for stored state","The circuit always resets","The output appears after a full clock cycle"], c:0},
    {q:"How many possible combinations are there for n binary inputs?", a:["n","2n","2^n","n^2"], c:2},
    {q:"How can a combinational circuit be defined?", a:["Truth table, graphical symbols, or Boolean equations","Only with source code","Only with hexadecimal","Only with a register"], c:0},
    {q:"What does a truth table list for a combinational circuit?", a:["Each possible input combination and outputs","Only the largest input","Only the smallest output","Only clock pulses"], c:0},
    {q:"What does a graphical representation of a combinational circuit show?", a:["The interconnected layout of gates","Only the truth table","Only memory contents","The CPU temperature"], c:0},
    {q:"How are outputs represented in Boolean-equation form?", a:["As Boolean functions of input signals","As decimal addresses","As hexadecimal strings","As clock speeds"], c:0},
    {q:"What is a sum-of-products implementation based on?", a:["Input combinations that cause the function to be 1","Only combinations that produce 0","The number of registers","The number of clock cycles"], c:0},
    {q:"In a sum-of-products implementation, what happens if any listed input combination occurs?", a:["The result is 1","The result is always 0","The circuit resets","The output becomes hexadecimal"], c:0},

    // =========================
    // MULTIPLEXERS
    // =========================

    {q:"What does a multiplexer connect?", a:["Multiple inputs to a single output","One input to multiple CPUs","Multiple outputs to one input only","Registers to clocks"], c:0},
    {q:"What does a multiplexer select?", a:["One input to pass to the output","Every input simultaneously","Only the highest bit","Only the lowest bit"], c:0},
    {q:"How many input lines does a 4-to-1 multiplexer have?", a:["1","2","4","8"], c:2},
    {q:"How many output lines does a 4-to-1 multiplexer have?", a:["1","2","4","8"], c:0},
    {q:"What are the four inputs of the 4-to-1 multiplexer called?", a:["A, B, C, D","D0, D1, D2, D3","S0, S1, S2, S3","Q0, Q1, Q2, Q3"], c:1},
    {q:"How many select lines are required to select one of four inputs?", a:["1","2","3","4"], c:1},
    {q:"What determines which multiplexer input reaches the output?", a:["The select lines","The MSB only","The clock frequency","The carry bit"], c:0},
    {q:"In the notes, what can be connected to the output line of a multiplexer?", a:["The program counter","Only the ALU","Only RAM","The clock generator"], c:0},
    {q:"Why are multiple multiplexers used for a multi-bit value?", a:["One is needed per bit","One is needed per input only","One is needed per CPU","One is needed per instruction"], c:0},
    {q:"The multiplexer example discusses how many bits of addresses?", a:["4","8","16","32"], c:2},

    // =========================
    // DECODERS
    // =========================

    {q:"What is a decoder?", a:["A combinational circuit with multiple outputs where one is asserted based on the inputs","A storage device","A type of flip-flop","A counter"], c:0},
    {q:"How many outputs does a decoder with n inputs have?", a:["n","n^2","2^n","2n"], c:2},
    {q:"How many outputs does a decoder with 3 inputs have?", a:["3","6","8","9"], c:2},
    {q:"How many inputs does an 8-output decoder have?", a:["2","3","4","8"], c:1},
    {q:"How many outputs are normally asserted by a decoder at one time?", a:["All of them","Half of them","Only one","None"], c:2},
    {q:"What is one use of decoders in digital computers?", a:["Address decoding","Floating-point multiplication","File compression","Graphics rendering"], c:0},
    {q:"In the memory example, how large is the unified memory space?", a:["1K-byte","4K-byte","8K-byte","16K-byte"], c:0},
    {q:"How many RAM chips are used in the memory example?", a:["2","4","8","16"], c:1},
    {q:"How many bits wide are the RAM chips in the example?", a:["2 bits","4 bits","8 bits","16 bits"], c:1},
    {q:"How many address lines does each RAM chip require in the example?", a:["4","8","10","16"], c:1},
    {q:"How many bits are in the address used in the example?", a:["4","8","10","16"], c:2},
    {q:"Which bits supply the address lines to each RAM chip?", a:["The lower-order 8 bits","The higher-order 8 bits","The lower-order 2 bits","All bits equally"], c:0},
    {q:"What are the higher-order 2 address bits used for?", a:["Selecting one of four RAM chips","Selecting one of eight RAM chips","Storing data","Performing arithmetic"], c:0},
    {q:"What type of decoder selects one of four RAM chips?", a:["1-to-4","2-to-4","4-to-2","3-to-8"], c:1},
    {q:"What address range is assigned to RAM chip 0 in the example?", a:["0000–00FF","0100–01FF","0200–02FF","0300–03FF"], c:0},
    {q:"What address range is assigned to RAM chip 1?", a:["0000–00FF","0100–01FF","0200–02FF","0300–03FF"], c:1},
    {q:"What address range is assigned to RAM chip 2?", a:["0000–00FF","0100–01FF","0200–02FF","0300–03FF"], c:2},
    {q:"What address range is assigned to RAM chip 3?", a:["0000–00FF","0100–01FF","0200–02FF","0300–03FF"], c:3},
    {q:"What is the inverse function of a multiplexer?", a:["Decoder","Demultiplexer","Register","Counter"], c:1},
    {q:"What does a demultiplexer do?", a:["Connects a single input to one of several outputs","Connects many inputs to one output","Stores one bit","Counts clock pulses"], c:0},
    {q:"How can a decoder be used as a demultiplexer?", a:["By adding an input data line","By removing all outputs","By adding a second clock","By reversing every bit"], c:0},
    {q:"In a demultiplexer, what acts as an address to select an output?", a:["The n input lines","The data line","The clock","The output"], c:0},
    {q:"What value is routed to the selected output in a demultiplexer?", a:["The data input value","The clock frequency","The address itself","The carry value"], c:0},

    // =========================
    // SEQUENTIAL CIRCUITS
    // =========================

    {q:"What is a major difference between combinational and sequential circuits?", a:["Sequential circuits can depend on past inputs or current state","Combinational circuits always contain memory","Sequential circuits have no inputs","Combinational circuits require clocks"], c:0},
    {q:"What does the current output of a sequential circuit depend on?", a:["Current input and current state","Only current input","Only past output","Only the clock"], c:0},
    {q:"What do sequential circuits provide that most combinational circuits do not?", a:["Memory or state information","Binary numbers","Boolean variables","Hexadecimal conversion"], c:0},
    {q:"What is the simplest form of sequential circuit?", a:["Flip-flop","Multiplexer","Decoder","Adder"], c:0},
    {q:"What does bistable mean?", a:["The device exists in one of two states","The device has two inputs only","The device has two clocks","The device stores two bytes"], c:0},
    {q:"How much information can a flip-flop function as memory for?", a:["1 bit","1 byte","4 bits","16 bits"], c:0},
    {q:"How many outputs does a flip-flop have according to the notes?", a:["1","2","4","8"], c:1},
    {q:"What is the relationship between a flip-flop's two outputs?", a:["They are always complements","They are always identical","They are unrelated","They are always zero"], c:0},
    {q:"What are the two flip-flop outputs generally labeled?", a:["A and B","D and Q","Q and ¬Q","S and R"], c:2},

    // =========================
    // S-R FLIP-FLOP
    // =========================

    {q:"What does S-R stand for in an S-R flip-flop?", a:["Set-Reset","Shift-Read","Store-Register","Signal-Return"], c:0},
    {q:"How does an S-R latch operate when its input changes?", a:["Its output changes after a brief delay","It waits for a clock pulse","It never changes","It resets automatically"], c:0},
    {q:"What is asynchronous operation?", a:["Output changes in response to input without requiring a clock pulse","All changes happen simultaneously","Only the clock controls the output","The device has no inputs"], c:0},
    {q:"What synchronizes events in a digital computer?", a:["Clock pulses","Hexadecimal values","Memory addresses","Boolean equations"], c:0},
    {q:"What is an S-R flip-flop synchronized to?", a:["A clock pulse","A decimal number","An address line","A multiplexer"], c:0},
    {q:"When are the R and S inputs passed to the NOR gates in the clocked S-R flip-flop?", a:["Only during the clock pulse","Only after the clock pulse","At all times regardless of the clock","Only when the CPU stops"], c:0},

    // =========================
    // D FLIP-FLOP
    // =========================

    {q:"What problem with the S-R flip-flop does the D flip-flop address?", a:["The S=1, R=1 condition must be avoided","It cannot store a bit","It has too many outputs","It cannot use a clock"], c:0},
    {q:"How many inputs does the D flip-flop use for data?", a:["One","Two","Three","Four"], c:0},
    {q:"What does the D flip-flop use to guarantee its two nonclock inputs are opposite?", a:["An inverter","A decoder","A multiplexer","A counter"], c:0},
    {q:"What is another name for the D flip-flop?", a:["Data flip-flop","Decimal flip-flop","Decoder flip-flop","Digital counter"], c:0},
    {q:"What does a D flip-flop effectively store?", a:["One bit of data","One byte","One address","One hexadecimal digit"], c:0},
    {q:"The output of a D flip-flop is equal to what?", a:["The most recent value applied to its input","The oldest value applied to its input","The inverted clock","The MSB"], c:0},
    {q:"Why is a D flip-flop also called a delay flip-flop?", a:["It delays an input value for a single clock pulse","It slows the CPU","It delays memory access","It delays hexadecimal conversion"], c:0},
    {q:"If D=0, what is Q(n+1) according to the table?", a:["0","1","2","Undefined"], c:0},
    {q:"If D=1, what is Q(n+1) according to the table?", a:["0","1","2","Undefined"], c:1},

    // =========================
    // REGISTERS
    // =========================

    {q:"What is a register?", a:["A digital circuit within the CPU used to store one or more bits of data","A type of logic gate","A memory address only","A decoder"], c:0},
    {q:"Where is a register located according to the notes?", a:["Within the CPU","Only in external storage","Only in RAM","Inside a decoder"], c:0},
    {q:"What are two basic types of registers?", a:["Parallel and shift registers","Signed and unsigned registers","Binary and hexadecimal registers","Static and dynamic registers"], c:0},
    {q:"What type of register is illustrated using an 8-bit example?", a:["Parallel register","Shift register","Ripple register","Decoder register"], c:0},
    {q:"What type of flip-flops are used in the 8-bit parallel register example?", a:["D flip-flops","S-R flip-flops only","T flip-flops","NOR gates only"], c:0},
    {q:"What control signal controls writing into the parallel register?", a:["Load","Reset","ClockOnly","Carry"], c:0},
    {q:"What do the D11 through D18 lines provide in the register example?", a:["Data to be loaded into the register","Clock pulses","Output addresses","Select codes"], c:0},
    {q:"What could the signal lines connected to the register be outputs of?", a:["Multiplexers","Counters","Decoders only","ALUs only"], c:0},
    {q:"Why might multiplexers be used before a register?", a:["To allow data from a variety of sources to be loaded","To convert binary to decimal","To increase the number of clocks","To create hexadecimal digits"], c:0},

    // =========================
    // SHIFT REGISTERS
    // =========================

    {q:"How does a shift register accept or transfer information?", a:["Serially","Only in hexadecimal","Only through the MSB","Only through a decoder"], c:0},
    {q:"What type of flip-flops are used in the 5-bit shift register example?", a:["Clocked D flip-flops","S-R latches only","NOR gates","Multiplexers"], c:0},
    {q:"How many bits are in the example shift register?", a:["2","4","5","8"], c:2},
    {q:"Where is data input into the example shift register?", a:["The leftmost flip-flop","The rightmost flip-flop","All flip-flops simultaneously","The middle flip-flop"], c:0},
    {q:"What happens to the data with each clock pulse in the shift register?", a:["It shifts one position to the right","It shifts one position to the left","It is erased","It becomes hexadecimal"], c:0},
    {q:"What happens to the rightmost bit after shifting?", a:["It is transferred out","It becomes the MSB","It is duplicated","It becomes the clock"], c:0},
    {q:"What can shift registers interface with?", a:["Serial I/O devices","Only RAM","Only GPUs","Only decoders"], c:0},
    {q:"What functions can shift registers perform within the ALU?", a:["Logical shift and rotate functions","Addition only","Memory decoding","Clock generation"], c:0},
    {q:"What additional circuitry may be needed when shift registers are used for ALU shift and rotate functions?", a:["Parallel read/write circuitry","Only a decoder","Only a multiplexer","A hexadecimal converter"], c:0},

    // =========================
    // COUNTERS
    // =========================

    {q:"What is a counter?", a:["A register whose value is easily incremented by 1 modulo its capacity","A decoder with memory","A Boolean variable","A type of multiplexer"], c:0},
    {q:"What happens after a counter reaches its maximum value?", a:["The next increment sets it to 0","It remains at the maximum","It becomes negative","It shuts down"], c:0},
    {q:"How many values can a counter made from n flip-flops represent?", a:["n","2n","2^n","n^2"], c:2},
    {q:"What is the maximum count value for a register made from n flip-flops?", a:["n-1","2n-1","2^n-1","2^n"], c:2},
    {q:"What CPU component is given as an example of a counter?", a:["Program counter","ALU","Control unit","Register file"], c:0},
    {q:"What are the two types of counters discussed?", a:["Asynchronous and synchronous","Binary and decimal","Signed and unsigned","Parallel and serial"], c:0},
    {q:"What is another name for an asynchronous counter?", a:["Ripple counter","Data counter","Shift counter","Boolean counter"], c:0},
    {q:"Why is an asynchronous counter relatively slow?", a:["The output of one flip-flop triggers the next flip-flop","All flip-flops change simultaneously","It uses hexadecimal","It has no clock"], c:0},
    {q:"How does a synchronous counter operate?", a:["All flip-flops change state at the same time","Each flip-flop waits for the previous one","It has no flip-flops","It uses only one bit"], c:0},
    {q:"Which type of counter is used in CPUs according to the notes?", a:["Asynchronous counter","Synchronous counter","Ripple counter","Unclocked counter"], c:1},
    {q:"Why are synchronous counters faster than ripple counters?", a:["All flip-flops change state at the same time","They use fewer bits","They do not use clocks","They use decimal values"], c:0},
    {q:"What causes the change to ripple through an asynchronous counter?", a:["The output of one flip-flop triggers the next","The decoder triggers every flip-flop","The MSB triggers the clock","The ALU triggers the register"], c:0},
    {q:"What disadvantage does a ripple counter have?", a:["Delay in changing value","It cannot store binary values","It cannot use flip-flops","It has no outputs"], c:0},
    {q:"What is the ripple-counter delay proportional to?", a:["The length of the counter","The decimal value","The number of inputs to a multiplexer","The number of hexadecimal digits"], c:0},
    {q:"How do synchronous counters overcome ripple-counter delay?", a:["All flip-flops change at the same time","They eliminate all flip-flops","They use only one input","They convert everything to hexadecimal"], c:0},

    // =========================
    // MIXED REVIEW
    // =========================

    {q:"Which component is specifically described as a 1-bit memory device?", a:["Flip-flop","Multiplexer","Decoder","Counter"], c:0},
    {q:"Which component connects multiple inputs to a single output?", a:["Decoder","Multiplexer","Register","Flip-flop"], c:1},
    {q:"Which component connects one input to one of several outputs?", a:["Multiplexer","Demultiplexer","Register","Counter"], c:1},
    {q:"Which circuit's output depends only on the current input?", a:["Combinational circuit","Sequential circuit","Flip-flop","Counter"], c:0},
    {q:"Which circuit's output can depend on previous inputs?", a:["Combinational circuit","Sequential circuit","Multiplexer","Decoder"], c:1},
    {q:"Which circuit is commonly used to store multiple bits within a CPU?", a:["Register","OR gate","Decoder","Multiplexer"], c:0},
    {q:"Which register transfers data one position with each clock pulse?", a:["Parallel register","Shift register","Counter","Decoder"], c:1},
    {q:"Which circuit is commonly used to count clock-related events in a CPU?", a:["Counter","Multiplexer","OR gate","Decoder"], c:0},
    {q:"Which number system represents values using powers of 2?", a:["Binary","Decimal","Hexadecimal","None"], c:0},
    {q:"Which number system represents each digit using four binary bits?", a:["Binary","Decimal","Hexadecimal","Signed decimal"], c:2},
    {q:"Which technique is used to represent negative numbers in the notes?", a:["Two's complement","Unsigned notation","Hexadecimal only","Repeated division"], c:0},
    {q:"Which Boolean operation reverses a Boolean value?", a:["AND","OR","NOT","XOR"], c:2},
    {q:"Which operation requires both inputs to be TRUE to produce TRUE?", a:["OR","AND","NOT","NOR"], c:1},
    {q:"Which operation produces TRUE when at least one input is TRUE?", a:["AND","OR","NOT","NAND"], c:1},
    {q:"What is the relationship between Q and ¬Q on a flip-flop?", a:["They are complements","They are identical","They are unrelated","They are always 0"], c:0},
    {q:"What does the program counter illustrate?", a:["A counter in the CPU","A Boolean gate","A hexadecimal digit","A decoder"], c:0},
    {q:"What is the key difference between a multiplexer and demultiplexer?", a:["A multiplexer selects one of many inputs; a demultiplexer routes one input to one of many outputs","They are exactly the same","A multiplexer stores data while a demultiplexer counts","A demultiplexer only handles hexadecimal"], c:0},
    {q:"What is the key advantage of a synchronous counter?", a:["All flip-flops change at the same time","It requires no clock","It stores more bits automatically","It uses no gates"], c:0},
    {q:"What is the purpose of the select lines in a multiplexer?", a:["To determine which input is passed to the output","To store data","To perform Boolean NOT","To increment a counter"], c:0},
    {q:"What determines which decoder output is asserted?", a:["The pattern of its input lines","The output of the ALU","The number of registers","The clock frequency"], c:0}
  ],

  CloudComp: [
    {q:"What is cloud computing?", a:["On-demand delivery of computing resources over the internet with usage-based billing","A method of physically building data centers","A programming language for cloud applications","A type of computer hardware"], c:0},

    {q:"Which of the following is a key component of cloud computing?", a:["Compute","Keyboard manufacturing","Desktop publishing","Physical cabling only"], c:0},

    {q:"Which type of storage is listed as a cloud computing component?", a:["Object storage","Tape-only storage","BIOS storage","CPU storage"], c:0},

    {q:"Which of the following is an example of cloud networking?", a:["VPCs","CPU registers","RAM slots","USB ports"], c:0},

    {q:"What does cloud computing abstract?", a:["Physical infrastructure","All software code","User passwords","Programming languages"], c:0},

    {q:"What allows organizations to scale globally without owning hardware?", a:["Cloud abstraction of physical infrastructure","Local-only storage","Manual hardware installation","Single-user operating systems"], c:0},

    {q:"What type of billing is associated with cloud computing in the PDF?", a:["Usage-based billing","One-time hardware-only billing","Paper-based billing","No billing"], c:0},

    {q:"Which database types are mentioned as cloud computing components?", a:["SQL and NoSQL","Only spreadsheets","Only CSV files","Only graphing databases"], c:0},

    {q:"What does on-demand self-service mean?", a:["Users can provision resources automatically without human intervention","Users must call a technician for every resource","Resources can only be provisioned once per year","Users cannot provision resources themselves"], c:0},

    {q:"What does broad network access mean in cloud computing?", a:["Services are accessible through standard networks and devices","Services can only be accessed from one computer","Services require physical access to a data center","Services are disconnected from networks"], c:0},

    {q:"Which cloud characteristic involves providers pooling resources for multiple customers?", a:["Resource pooling","Measured service","Broad network access","Rapid deployment"], c:0},

    {q:"What is multi-tenancy associated with?", a:["Resource pooling","Binary storage","Physical isolation of every customer","Manual software installation"], c:0},

    {q:"What does rapid elasticity allow cloud resources to do?", a:["Scale up or down automatically based on demand","Remain permanently fixed","Only increase once","Be manually removed from data centers"], c:0},

    {q:"What does measured service involve?", a:["Monitoring, controlling, and billing usage based on consumption","Providing unlimited free resources","Preventing resource monitoring","Disabling usage tracking"], c:0},

    {q:"Which organization is associated with the five characteristics presented in the PDF?", a:["NIST","NASA","IEEE only","WHO"], c:0},

    {q:"What computing approach was introduced by mainframes and time-sharing in the 1960s?", a:["Shared computing","Serverless computing","Edge computing","Container orchestration"], c:0},

    {q:"What technology enabled hardware abstraction in the 1990s?", a:["Virtualization","Serverless functions","API gateways","Object storage"], c:0},

    {q:"Which company is mentioned in connection with virtualization in the 1990s?", a:["VMware","Salesforce","Oracle","Microsoft"], c:0},

    {q:"What matured during the 2000s according to the PDF?", a:["Web services and distributed systems","Quantum computing and AI chips","Edge computing only","Mobile app stores"], c:0},

    {q:"What happened in 2006 that marked commercial cloud adoption?", a:["AWS launched EC2 and S3","Docker was released","Kubernetes became available","Azure launched"], c:0},

    {q:"Which technologies transformed application deployment during the 2010s?", a:["Containers and orchestration","Mainframes and time-sharing","Physical servers and tape drives","Only SQL databases"], c:0},

    {q:"Which container technology is specifically mentioned?", a:["Docker","VMware","EC2","Salesforce"], c:0},

    {q:"Which orchestration technology is specifically mentioned?", a:["Kubernetes","S3","Azure App Services","Google Workspace"], c:0},

    {q:"Which cloud technologies are described as dominating the 2020s?", a:["Serverless, edge computing, AI-driven cloud services, and multi-cloud architectures","Mainframes, floppy disks, and tape drives","Only physical servers","Only desktop applications"], c:0},

    {q:"According to the PDF, cloud computing is the result of decades of innovation in what area?", a:["Distributed systems","Word processing","Desktop publishing","Computer graphics"], c:0},

    {q:"Which of the following is a modern IT use of cloud computing?", a:["Enterprise applications and SaaS platforms","Only local file storage","Only physical networking","Only BIOS configuration"], c:0},

    {q:"How can cloud computing support web applications?", a:["By supporting global web and mobile applications","By preventing network access","By requiring every application to run locally","By eliminating databases"], c:0},

    {q:"What type of processing can cloud platforms support?", a:["Big data analytics and real-time processing","Only offline processing","Only manual calculations","Only word processing"], c:0},

    {q:"Which workloads can cloud computing support?", a:["Machine learning and AI workloads","Only operating system installation","Only spreadsheet printing","Only hardware testing"], c:0},

    {q:"What development practices can cloud computing support?", a:["DevOps pipelines and CI/CD automation","Only manual software deployment","Only hardware assembly","Only paper documentation"], c:0},

    {q:"Which cybersecurity operations are listed as cloud use cases?", a:["SIEM, SOAR, IAM, and threat detection","Only antivirus installation","Only password printing","Only physical locks"], c:0},

    {q:"How many main cloud service models are presented in the PDF?", a:["Three","Two","Four","Five"], c:0},

    {q:"What does IaaS stand for?", a:["Infrastructure as a Service","Internet as a System","Infrastructure and Application Software","Integrated Application as a Service"], c:0},

    {q:"What does PaaS stand for?", a:["Platform as a Service","Programming as a System","Platform and Storage Service","Private Application as a Service"], c:0},

    {q:"What does SaaS stand for?", a:["Software as a Service","Storage as a System","Server as a Service","Security as a Service"], c:0},

    {q:"What does IaaS primarily provide?", a:["Virtualized hardware resources","Fully managed applications","Only developer frameworks","Only email services"], c:0},

    {q:"What does PaaS primarily provide?", a:["Managed environments for application development","Physical data centers","Fully managed email accounts only","Hardware without networking"], c:0},

    {q:"What does SaaS primarily provide?", a:["Fully managed applications delivered over the internet","Virtual machines only","Raw networking hardware","Operating system kernels only"], c:0},

    {q:"What differs between IaaS, PaaS, and SaaS?", a:["Levels of control, flexibility, and responsibility","The color of their interfaces","The physical size of computers","The number of users allowed"], c:0},

    {q:"What does IaaS provide as foundational resources?", a:["Compute, storage, and networking","Only email and calendars","Only application source code","Only database queries"], c:0},

    {q:"What level of operating system control does IaaS provide?", a:["Full control over operating systems and applications","No control at all","Control only over browser settings","Control only over email"], c:0},

    {q:"What can users configure with IaaS?", a:["Firewalls, networks, and security policies","Only document formatting","Only application icons","Only email signatures"], c:0},

    {q:"Which is an example of an IaaS service?", a:["AWS EC2","Microsoft 365","Google Workspace","Salesforce"], c:0},

    {q:"Which Azure service is listed as an IaaS example?", a:["Azure Virtual Machines","Azure App Services","Microsoft 365","Azure Workspace"], c:0},

    {q:"Which Google Cloud service is listed as an IaaS example?", a:["Google Compute Engine","Google App Engine","Google Workspace","Google Drive"], c:0},

    {q:"Which is a listed use case for IaaS?", a:["Disaster recovery","Email collaboration only","Browser-based CRM only","Online document editing only"], c:0},

    {q:"Which type of system migration is listed as an IaaS use case?", a:["Legacy system migration","Social media migration","Printer migration","Keyboard migration"], c:0},

    {q:"What does PaaS provide for developers?", a:["A managed environment for building, deploying, and scaling applications","Only physical servers","Only network cables","Only finished applications"], c:0},

    {q:"Which task can PaaS perform automatically?", a:["OS patching and updates","Physical data center construction","Keyboard replacement","Manual server assembly"], c:0},

    {q:"What built-in capability is associated with PaaS?", a:["Monitoring and scaling","Physical hardware repair","Manual BIOS updates","Paper-based logging"], c:0},

    {q:"What does PaaS integrate for developers?", a:["Developer tools and frameworks","Only physical storage devices","Only networking cables","Only user passwords"], c:0},

    {q:"Which is an example of PaaS?", a:["AWS Elastic Beanstalk","AWS EC2","Microsoft 365","Salesforce"], c:0},

    {q:"Which Azure service is an example of PaaS?", a:["Azure App Services","Azure Virtual Machines","Microsoft 365","Azure Storage Drives"], c:0},

    {q:"Which Google Cloud service is an example of PaaS?", a:["Google App Engine","Google Compute Engine","Google Workspace","Google Cloud Storage only"], c:0},

    {q:"Which development scenario is a PaaS use case?", a:["Rapid development without managing infrastructure","Managing physical data centers","Replacing computer hardware","Manually installing operating systems"], c:0},

    {q:"How are SaaS applications typically accessed?", a:["Through a browser or API","Only through physical terminals","Only through BIOS","Only through USB devices"], c:0},

    {q:"What does SaaS eliminate for users?", a:["Installation and maintenance","Internet access","All user accounts","All application functionality"], c:0},

    {q:"What type of pricing is commonly associated with SaaS in the PDF?", a:["Subscription-based pricing","Hardware-only pricing","No pricing","Per-keyboard pricing"], c:0},

    {q:"What happens automatically with SaaS applications?", a:["Updates and security patches","Physical server construction","Network cable installation","CPU replacement"], c:0},

    {q:"Which is an example of SaaS?", a:["Microsoft 365","AWS EC2","Google Compute Engine","Azure Virtual Machines"], c:0},

    {q:"Which Google product is listed as a SaaS example?", a:["Google Workspace","Google Compute Engine","Google App Engine","Kubernetes"], c:0},

    {q:"Which Salesforce offering category is listed as a SaaS example?", a:["Salesforce","AWS EC2","Azure Virtual Machines","Google Compute Engine"], c:0},

    {q:"Which is a listed SaaS use case?", a:["Email and collaboration tools","Legacy hardware migration","Firewall configuration","Virtual machine management"], c:0},

    {q:"What is a public cloud?", a:["Shared infrastructure that is scalable and cost-effective","Dedicated infrastructure for one organization only","A combination of private and public infrastructure","Infrastructure shared only by organizations in one industry"], c:0},

    {q:"What is a private cloud?", a:["Dedicated infrastructure offering enhanced control","Shared infrastructure for everyone","A cloud used only for email","A cloud with no security controls"], c:0},

    {q:"What is a hybrid cloud?", a:["A combination of public and private cloud","A combination of two private clouds only","A cloud without infrastructure","A cloud used only by schools"], c:0},

    {q:"What is a community cloud?", a:["A cloud shared by organizations with similar requirements","A cloud available only to one individual","A cloud with no shared infrastructure","A cloud used only for gaming"], c:0},

    {q:"Which sectors are given as examples for community clouds?", a:["Healthcare and education","Retail and entertainment only","Manufacturing and transportation only","Gaming and sports only"], c:0},

    {q:"Which deployment model supports legacy systems according to the PDF?", a:["Hybrid cloud","Public cloud","Community cloud","SaaS"], c:0},

    {q:"Which deployment model is described as compliance-friendly?", a:["Private cloud","Public cloud","SaaS","Community cloud"], c:0},

    {q:"What do deployment models help determine?", a:["Governance, security, and cost strategies","CPU instruction sets","Keyboard layouts","Programming language syntax"], c:0},

    {q:"Which cloud provider is described as having the largest ecosystem?", a:["AWS","Azure","Google Cloud","IBM Cloud"], c:0},

    {q:"Which provider is described as having broad service offerings?", a:["AWS","Oracle Cloud","Alibaba Cloud","Azure only"], c:0},

    {q:"Which provider is associated with strong enterprise integration?", a:["Azure","AWS","Google Cloud","Alibaba Cloud"], c:0},

    {q:"Which provider is described as being strong in Microsoft-centric environments?", a:["Azure","AWS","Google Cloud","IBM Cloud"], c:0},

    {q:"Which provider is described as leading in data analytics and AI?", a:["Google Cloud","Azure","AWS","Oracle Cloud"], c:0},

    {q:"Which of the following is listed as another cloud provider?", a:["IBM Cloud","Docker Cloud only","Kubernetes Cloud","Microsoft Workspace Cloud"], c:0},

    {q:"Which is a cloud computing use case?", a:["Hosting websites and applications","Manufacturing CPUs","Printing textbooks","Repairing keyboards"], c:0},

    {q:"How can cloud computing be used with data?", a:["Data warehousing and analytics","Only physical data filing","Only paper-based storage","Only local spreadsheets"], c:0},

    {q:"What type of pipelines can cloud computing support?", a:["Machine learning pipelines","Only printing pipelines","Only hardware pipelines","Only keyboard pipelines"], c:0},

    {q:"What type of devices can cloud platforms manage?", a:["IoT devices","Only desktop monitors","Only keyboards","Only printers"], c:0},

    {q:"Which recovery-related use case is listed?", a:["Backup and disaster recovery","Only software installation","Only password recovery","Only screen repair"], c:0},

    {q:"What work environment can cloud computing support?", a:["Virtual desktops and remote work","Only local desktop work","Only data center work","Only offline computing"], c:0},

    {q:"What does IAM stand for?", a:["Identity and Access Management","Internet Application Management","Infrastructure Access Machine","Integrated Application Monitoring"], c:0},

    {q:"What are two forms of encryption mentioned in cloud security?", a:["Encryption at rest and in transit","Encryption at startup and shutdown","Encryption at login and logout","Encryption at CPU and RAM"], c:0},

    {q:"What is network segmentation used as in cloud cybersecurity?", a:["A security consideration","A billing model","A storage type","A deployment model"], c:0},

    {q:"What additional form of segmentation is mentioned?", a:["Micro-segmentation","Macro-storage","Virtual partitioning","Cloud division"], c:0},

    {q:"What security activities should cloud environments include?", a:["Logging, monitoring, and threat detection","Only application development","Only billing","Only hardware upgrades"], c:0},

    {q:"Which compliance frameworks are mentioned?", a:["ISO 27001, SOC 2, and NIST","PCI only","GDPR only","HIPAA only"], c:0},

    {q:"According to the PDF, where must security be integrated?", a:["Into every cloud architecture","Only into private clouds","Only into SaaS","Only into physical data centers"], c:0},

    {q:"What is the shared responsibility model?", a:["A model dividing security and operational responsibilities between the cloud provider and customer","A billing system","A cloud deployment model","A method of sharing passwords"], c:0},

    {q:"Who is responsible for physical data center security?", a:["The cloud provider","The customer only","The application developer only","The end user only"], c:0},

    {q:"Who is responsible for hardware and the hypervisor?", a:["The cloud provider","The customer only","The SaaS user","The database administrator only"], c:0},

    {q:"Who is responsible for identity management?", a:["The customer","The cloud provider only","The hardware manufacturer","The internet service provider"], c:0},

    {q:"Who is responsible for data protection?", a:["The customer","The cloud provider only","The network cable manufacturer","The operating system vendor only"], c:0},

    {q:"Who is responsible for application security?", a:["The customer","The physical data center","The cloud provider in every situation","The internet service provider"], c:0},

    {q:"Does responsibility remain identical across IaaS, PaaS, and SaaS?", a:["No, responsibility varies across the service models","Yes, it is always identical","Only in public cloud","Only in private cloud"], c:0},

    {q:"What is a cloud region?", a:["A geographic location of cloud resources","A physical computer","A software application","A security policy"], c:0},

    {q:"What is an Availability Zone?", a:["An independent data center within a region","A cloud billing account","A virtual machine","A type of container"], c:0},

    {q:"What is a virtual machine?", a:["A software-based computer","A physical data center","A network cable","A database table"], c:0},

    {q:"What is a container?", a:["A lightweight, portable application environment","A physical server rack","A database type","A geographic region"], c:0},

    {q:"What is serverless computing?", a:["Event-driven compute without managing servers","Computing without software","Computing without networks","A physical server architecture"], c:0},

    {q:"What is an API Gateway?", a:["An entry point for APIs","A physical firewall","A database","A storage disk"], c:0},

    {q:"What is object storage designed for?", a:["Scalable storage for unstructured data","CPU instructions","Operating system kernels","Network routing tables"], c:0},

    {q:"What does a load balancer do?", a:["Distributes traffic across resources","Encrypts every file automatically","Creates virtual machines","Stores unstructured data"], c:0},

    {q:"Which is a benefit of cloud computing?", a:["Reduced capital expenditure","Increased hardware ownership requirements","Reduced scalability","Slower deployment"], c:0},

    {q:"What type of scalability is listed as a cloud benefit?", a:["Elastic scalability","Fixed scalability","Manual scalability","Hardware-only scalability"], c:0},

    {q:"Which availability-related benefit is mentioned?", a:["High availability and fault tolerance","Guaranteed zero downtime","No redundancy","Single-server availability"], c:0},

    {q:"What geographic benefit does cloud computing provide?", a:["Global distribution","Local-only distribution","Single-device distribution","Offline distribution"], c:0},

    {q:"What can cloud computing improve about deployment?", a:["Deployment cycles can be faster","Deployment becomes entirely manual","Deployment is limited to physical servers","Deployment is eliminated"], c:0},

    {q:"What security-related benefit is mentioned?", a:["Built-in security and compliance tools","No security controls","Automatic removal of all risks","Elimination of cybersecurity"], c:0},

    {q:"What is one challenge associated with cloud computing?", a:["Vendor lock-in","Guaranteed portability","Unlimited resources","Zero configuration requirements"], c:0},

    {q:"What type of concerns can arise from cloud data location?", a:["Data residency and privacy concerns","Keyboard residency concerns","CPU ownership concerns","Monitor placement concerns"], c:0},

    {q:"What can cloud misconfigurations potentially lead to?", a:["Breaches","Automatic security","Lower network latency in every case","Free resources"], c:0},

    {q:"What can poor resource management cause?", a:["Cost overruns","Automatic cost elimination","Guaranteed savings","No billing"], c:0},

    {q:"Why is understanding cloud risks important?", a:["It is essential for secure cloud adoption","It eliminates the need for security","It prevents all cloud usage","It removes the need for governance"], c:0},

    {q:"What is a multi-cloud strategy?", a:["Using multiple cloud environments or providers","Using only one physical server","Using no cloud providers","Using only private cloud"], c:0},

    {q:"What technologies are associated with cloud-native development in the PDF?", a:["Microservices and containers","Mainframes and tape drives","BIOS and USB","Only physical servers"], c:0},

    {q:"What type of cloud services are identified as a modern trend?", a:["AI-driven cloud services","Paper-based cloud services","Offline-only cloud services","Hardware-only cloud services"], c:0},

    {q:"What is edge computing intended to support?", a:["Low-latency workloads","Only offline workloads","Only physical storage","Only email applications"], c:0},

    {q:"What security architecture is listed as a cloud adoption trend?", a:["Zero-trust security architectures","No-trust hardware architecture","Single-password architecture","Physical-only security architecture"], c:0},

    {q:"According to the PDF, how is cloud computing continuing to change modern IT?", a:["It continues to evolve rapidly and shape modern IT","It is being replaced entirely by mainframes","It is becoming limited to local networks","It is no longer changing"], c:0},

    {q:"Which of the following is one of the main learning objectives of the lecture?", a:["Understanding elasticity, scalability, and resource pooling","Learning only assembly language","Building physical CPUs","Designing desktop monitors"], c:0},

    {q:"Which three service models should learners be able to differentiate?", a:["IaaS, PaaS, and SaaS","AWS, Azure, and Google Cloud","Public, private, and hybrid only","VM, container, and serverless"], c:0},

    {q:"Which deployment models should learners be able to identify?", a:["Public, private, hybrid, and community","IaaS, PaaS, and SaaS","VM, container, and serverless","AWS, Azure, and Google"], c:0},

    {q:"Which major cloud providers are specifically discussed?", a:["AWS, Azure, and Google Cloud","Docker, Kubernetes, and VMware","Salesforce, Microsoft 365, and Google Workspace","IBM, Oracle, and Alibaba only"], c:0},

    // {q:"What does cloud architecture define?", a:["How cloud services are built and delivered","How physical keyboards are manufactured","How operating systems are programmed","How databases are deleted"], c:0},
    // {q:"Cloud architecture determines scalability, reliability, and ________.", a:["security","storage","billing","programming"], c:0},
    // {q:"Which of the following is a compute component of cloud architecture?", a:["Virtual machines","DNS zones","IAM policies","Object storage"], c:0},
    // {q:"Which types of storage are listed as cloud architecture components?", a:["Object, block, and file storage","Only database storage","Only local storage","Only tape storage"], c:0},
    // {q:"Cloud networking includes VPCs, load balancers, and ________.", a:["DNS","RAM","CPUs","Docker"], c:0},
    // {q:"Which cloud architecture area includes IAM, roles, and policies?", a:["Identity","Compute","Storage","Observability"], c:0},
    // {q:"Which cloud architecture area includes logs, metrics, and tracing?", a:["Observability","Identity","Compute","Storage"], c:0},
    // {q:"Virtualization allows multiple virtual machines to run on a single physical ________.", a:["server","database","network","container"], c:0},
    // {q:"What component provides virtualization between hardware and virtual machines?", a:["Hypervisor","Load balancer","DNS server","API Gateway"], c:0},
    // {q:"What is a guest OS?", a:["An operating system running inside a virtual machine","The operating system of the physical server only","A cloud database","A container registry"], c:0},
    // {q:"Virtualization provides strong ________ between workloads.", a:["isolation","encryption","routing","billing"], c:0},
    // {q:"Which is a benefit of virtualization?", a:["Higher utilization of physical hardware","Eliminating all hardware","Removing operating systems","Preventing scalability"], c:0},
    // {q:"What flexibility does virtualization provide?", a:["Running multiple OS types on one host","Running only one OS permanently","Removing the need for operating systems","Running only containers"], c:0},
    // {q:"A Type 1 hypervisor is also called a ________-metal hypervisor.", a:["bare","virtual","hosted","container"], c:0},
    // {q:"What is a Type 1 hypervisor?", a:["A bare-metal hypervisor that runs directly on hardware","A hypervisor running on a host OS","A container runtime","A Kubernetes controller"], c:0},
    // {q:"Does a Type 1 hypervisor require a host operating system?", a:["No","Yes, always","Only for containers","Only on public clouds"], c:0},
    // {q:"Which is an example of a Type 1 hypervisor?", a:["VMware ESXi","Oracle VirtualBox","VMware Workstation","Parallels Desktop"], c:0},
    // {q:"A Type 2 hypervisor runs on top of a host ________.", a:["operating system","container","database","network"], c:0},
    // {q:"What is a Type 2 hypervisor?", a:["A hosted hypervisor that runs on top of a host operating system","A bare-metal hypervisor","A container orchestrator","A cloud load balancer"], c:0},
    // {q:"Which is an example of a Type 2 hypervisor?", a:["Oracle VirtualBox","VMware ESXi","KVM","Microsoft Hyper-V"], c:0},
    // {q:"Which Microsoft technology is listed as a Type 1 hypervisor?", a:["Microsoft Hyper-V","Microsoft 365","Azure App Services","Azure Functions"], c:0},
    // {q:"Virtual machines are considered ________ compared with containers.", a:["heavyweight","lightweight","stateless","portable"], c:0},
    // {q:"What does each virtual machine normally contain?", a:["A full guest operating system","Only an application process","Only a container image","Only a network interface"], c:0},
    // {q:"How quickly do virtual machines typically start according to the slides?", a:["Minutes","Seconds or less","Instantaneously in every case","Hours"], c:0},
    // {q:"Containers share the host operating system ________.", a:["kernel","database","firewall","hypervisor"], c:0},
    // {q:"How are containers characterized compared with virtual machines?", a:["Lightweight","Heavyweight","Hardware-based","Physical"], c:0},
    // {q:"What type of isolation do containers use?", a:["Namespace and cgroup isolation","Hardware-level separation only","No isolation","Physical isolation"], c:0},
    // {q:"What type of applications are containers described as ideal for?", a:["Microservices","Only mainframes","Only desktop applications","Only databases"], c:0},
    // {q:"Docker provides a complete platform for building, shipping, and running ________.", a:["containers","virtual machines","databases","DNS zones"], c:0},
    // {q:"What does the Docker container runtime do?", a:["Runs and manages container lifecycles","Stores DNS records","Schedules Kubernetes pods","Manages IAM policies"], c:0},
    // {q:"What does Docker image management allow users to do?", a:["Build, version, and distribute images","Create physical servers","Manage DNS routing","Authenticate users"], c:0},
    // {q:"Docker supports bridge, host, and ________ networks.", a:["overlay","private","public","DNS"], c:0},
    // {q:"What is a Docker registry used for?", a:["Storing and distributing container images","Scheduling pods","Managing IAM roles","Routing DNS requests"], c:0},
    // {q:"Which public Docker registry is specifically mentioned?", a:["Docker Hub","GitHub DNS","AWS Registry only","Kubernetes Hub"], c:0},
    // {q:"Kubernetes automates deployment, scaling, load balancing, and ________ of containerized applications.", a:["self-healing","encryption","billing","compilation"], c:0},
    // {q:"What is Kubernetes?", a:["A container orchestration platform","A hypervisor","A database","A DNS service"], c:0},
    // {q:"What is the smallest deployable unit in Kubernetes?", a:["Pod","Node","Service","Cluster"], c:0},
    // {q:"How many containers can a pod contain?", a:["One or more","Exactly zero","Exactly one physical server","Only ten"], c:0},
    // {q:"Kubernetes worker machines that run pods are called ________.", a:["nodes","roles","regions","services"], c:0},
    // {q:"What is the Kubernetes control plane responsible for?", a:["Controlling and managing the cluster","Running every application directly","Storing user files","Providing internet access"], c:0},
    // {q:"What is the Kubernetes API Server?", a:["The front door of the cluster","The container runtime","The worker node agent","The database used for application data"], c:0},

    // // 42 FILL IN THE BLANK
    // {q:"The Kubernetes ________ stores the entire cluster state in a distributed key-value store.", a:["etcd","scheduler","kubelet","kube-proxy"], c:0},

    // // 43
    // {q:"What does the Kubernetes Controller Manager do?", a:["Ensures the desired state of the cluster is maintained","Runs container images directly","Provides public DNS","Acts as a firewall"], c:0},

    // // 44
    // {q:"What does the Kubernetes Scheduler decide?", a:["Which worker node should run each new pod","Which user can access a database","Which DNS zone is public","Which container image to build"], c:0},

    // // 45 FILL IN THE BLANK
    // {q:"The developer can interact with the Kubernetes API Server using ________.", a:["kubectl","Docker Hub","CloudWatch","Kubelet"], c:0},

    // // 46
    // {q:"What is the Kubelet?", a:["An agent on each worker node that ensures containers are running","The Kubernetes database","The cluster API","A load balancer"], c:0},

    // // 47
    // {q:"What does Kube-Proxy handle?", a:["Networking and routing traffic to the correct pods","Cluster state storage","Pod scheduling","Container image creation"], c:0},

    // // 48 FILL IN THE BLANK
    // {q:"The Kubernetes container runtime is responsible for ________ containers.", a:["running","scheduling","authenticating","routing"], c:0},

    // // 49
    // {q:"Which container runtimes are mentioned in the Kubernetes node architecture?", a:["containerd and CRI-O","Docker Hub and S3","Lambda and EC2","DNS and WAF"], c:0},

    // // 50
    // {q:"What is the difference between the Kubernetes control plane and workers?", a:["The control plane manages the cluster while workers run application workloads","Workers manage the cluster while the control plane runs every container","Both perform exactly the same function","Neither manages applications"], c:0},

    // // 51 FILL IN THE BLANK
    // {q:"Serverless computing is ________-driven compute without managing servers.", a:["event","hardware","database","network"], c:0},

    // // 52
    // {q:"What does serverless allow developers to focus on?", a:["Code","Physical servers","Network cables","Hardware maintenance"], c:0},

    // // 53
    // {q:"What does automatic scaling in serverless mean?", a:["Functions can scale to zero and up based on demand","Functions always run at maximum capacity","Functions cannot scale","Functions require manual hardware installation"], c:0},

    // // 54 FILL IN THE BLANK
    // {q:"With serverless pay-per-execution billing, you pay only for actual compute ________ used.", a:["time","storage","servers","users"], c:0},

    // // 55
    // {q:"What does stateless mean for serverless functions?", a:["There is no persistent local state between invocations","Functions permanently store all state locally","Functions cannot access databases","Functions cannot process events"], c:0},

    // // 56
    // {q:"Which is an ideal use case for serverless?", a:["Event processing","Long-running operating system tasks","Physical hardware management","Persistent local applications"], c:0},

    // // 57 FILL IN THE BLANK
    // {q:"AWS ________ is an example of serverless compute.", a:["Lambda","EC2","VPC","IAM"], c:0},

    // // 58
    // {q:"What does AWS Cognito provide in the serverless architecture?", a:["Authentication and user management","Container orchestration","Database storage","Load balancing"], c:0},

    // // 59
    // {q:"What can Cognito handle?", a:["User sign-up, sign-in, token generation, and secure identity management","Container scheduling","File storage","Network routing"], c:0},

    // // 60 FILL IN THE BLANK
    // {q:"API Gateway provides routing, throttling, and security for incoming ________.", a:["requests","containers","VMs","databases"], c:0},

    // // 61
    // {q:"What is the role of API Gateway in the serverless architecture?", a:["It is the entry point for requests and can route them to Lambda","It stores cluster state","It runs physical servers","It replaces DynamoDB"], c:0},

    // // 62
    // {q:"What does AWS Lambda do in the serverless architecture?", a:["Runs application code on demand","Stores files","Provides DNS","Manages physical data centers"], c:0},

    // // 63 FILL IN THE BLANK
    // {q:"DynamoDB is a fully managed ________ database.", a:["NoSQL","SQL","relational-only","file"], c:0},

    // // 64
    // {q:"What type of storage does Amazon S3 provide?", a:["File/object storage","CPU storage","Kubernetes state storage","DNS storage"], c:0},

    // // 65
    // {q:"What is one example of an S3 event trigger?", a:["S3 can trigger Lambda","S3 can trigger a physical server","S3 can replace IAM","S3 can replace API Gateway"], c:0},

    // // 66 FILL IN THE BLANK
    // {q:"A VPC is an isolated virtual ________ in the cloud.", a:["network","machine","database","container"], c:0},

    // // 67
    // {q:"What are subnets?", a:["Segmented ranges of IP addresses","Cloud databases","Container images","IAM policies"], c:0},

    // // 68
    // {q:"What do route tables control?", a:["Traffic routing paths","User passwords","Container images","CPU allocation"], c:0},

    // // 69 FILL IN THE BLANK
    // {q:"An Internet Gateway provides public ________ access for a VPC.", a:["internet","database","container","storage"], c:0},

    // // 70
    // {q:"What does a NAT Gateway provide?", a:["Outbound internet access for private subnets","Inbound public access to every private resource","Container scheduling","DNS health checks"], c:0},

    // // 71
    // {q:"What are security groups?", a:["Stateful firewall rules at the instance level","Stateless subnet-level rules","DNS routing policies","Kubernetes pods"], c:0},

    // // 72 FILL IN THE BLANK
    // {q:"A public subnet is accessible from the ________.", a:["internet","hypervisor","container","control plane"], c:0},

    // // 73
    // {q:"Which is a typical use of a public subnet?", a:["Load balancers","Databases only","Sensitive data stores","Backend workers only"], c:0},

    // // 74
    // {q:"What is a private subnet?", a:["A subnet with no direct internet access","A subnet accessible directly from the public internet","A subnet used only for load balancers","A subnet with no IP addresses"], c:0},

    // // 75 FILL IN THE BLANK
    // {q:"Databases and sensitive data stores are typical workloads for a ________ subnet.", a:["private","public","host","overlay"], c:0},

    // // 76
    // {q:"What is the purpose of a load balancer?", a:["To distribute traffic across multiple resources","To store cluster state","To authenticate users","To run containers"], c:0},

    // // 77
    // {q:"What are load balancers designed to improve?", a:["High availability and scalability","Only storage capacity","Only authentication","Only container image size"], c:0},

    // // 78 FILL IN THE BLANK
    // {q:"An Application Load Balancer operates at Layer ________.", a:["7","2","3","4"], c:0},

    // // 79
    // {q:"Which protocols are associated with an Application Load Balancer?", a:["HTTP/HTTPS","TCP only","UDP only","DNS only"], c:0},

    // // 80
    // {q:"At which layer does a Network Load Balancer operate?", a:["Layer 4","Layer 7","Layer 2","Layer 1"], c:0},

    // // 81 FILL IN THE BLANK
    // {q:"A Network Load Balancer operates using TCP and ________.", a:["UDP","HTTP","HTTPS","DNS"], c:0},

    // // 82
    // {q:"What does IAM control?", a:["Who can access what","How containers are built","How DNS records are stored","How CPUs are manufactured"], c:0},

    // // 83
    // {q:"What are IAM roles?", a:["Temporary permissions assumed by users or services","Permanent physical servers","Network segments","Container images"], c:0},

    // // 84 FILL IN THE BLANK
    // {q:"IAM policies are ________ documents that define permissions.", a:["JSON","HTML","XML","CSV"], c:0},

    // // 85
    // {q:"What do IAM permissions determine?", a:["Whether specific actions on resources are allowed or denied","How fast a container starts","Which node schedules a pod","How DNS routes traffic"], c:0},

    // // 86 FILL IN THE BLANK
    // {q:"Least privilege means granting only the ________ required access.", a:["minimum","maximum","shared","temporary"], c:0},

    // // 87
    // {q:"What is MFA used for?", a:["Stronger security through multi-factor authentication","Container orchestration","Network routing","Load balancing"], c:0},

    // // 88
    // {q:"What is logging used for in cloud observability?", a:["Capturing detailed events and application output for debugging and audit","Assigning pods to nodes","Encrypting network traffic","Managing containers"], c:0},

    // // 89 FILL IN THE BLANK
    // {q:"Metrics are quantitative measurements such as CPU usage, latency, and ________ rates.", a:["error","storage","network","billing"], c:0},

    // // 90
    // {q:"What does tracing do?", a:["Follows requests across distributed services end-to-end","Creates virtual machines","Manages user identities","Routes internet traffic"], c:0},

    // // 91 FILL IN THE BLANK
    // {q:"In virtualization, assigning more virtual CPUs than physical cores exist is called vCPU ________.", a:["overcommitment","scaling","ballooning","provisioning"], c:0},

    // // 92
    // {q:"What is memory ballooning?", a:["Dynamically reclaiming unused guest memory","Allocating more CPUs than physical cores","Allocating storage only when needed","Routing network traffic"], c:0},

    // // 93
    // {q:"What is thin provisioning?", a:["Allocating storage on demand rather than upfront","Allocating all storage immediately","Removing storage virtualization","Creating physical disks for every VM"], c:0},

    // // 94 FILL IN THE BLANK
    // {q:"NUMA awareness means respecting CPU and memory ________ for performance.", a:["topology","security","routing","billing"], c:0},

    // // 95
    // {q:"What is overlay networking?", a:["Multi-host networking for clusters","A local-only container network","A physical network cable","An IAM system"], c:0},

    // // 96 FILL IN THE BLANK
    // {q:"A service mesh uses sidecar proxies to manage traffic, security, and ________ between services.", a:["observability","storage","billing","virtualization"], c:0},

    // // 97
    // {q:"What is a cold start in serverless computing?", a:["Latency when a function is invoked after being idle","The process of creating a VM","A network failure","A database timeout"], c:0},

    // // 98 FILL IN THE BLANK
    // {q:"The Zero Trust principle is commonly summarized as 'Never trust, always ________.'", a:["verify","encrypt","scale","route"], c:0},

    // // 99
    // {q:"At which layer does a Web Application Firewall inspect HTTP/HTTPS traffic?", a:["Layer 7","Layer 3","Layer 4","Layer 1"], c:0},

    // // 100 FILL IN THE BLANK
    // {q:"The modern cloud application stack includes CI/CD and Infrastructure as ________ in its delivery layer.", a:["Code","Service","Storage","Security"], c:0}
  ]
};

window.questionCodes = {
  CompArch: "COMP-2453",
  CloudComp: "COMP-4312",
  SocIndi: "SOCI-2755"
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
    danger: "#d94b4b"
  },
  CompArch: {
    pageBg: "#7f1818",
    visualBg: "#7f1818",
    courseText: "#440a0a",
    questionText: "#fff6f6",
    panelBg: "#c37714",
    panelBorder: "#d38517",
    buttonBg: "#ecd506",
    buttonAccent: "#7a6617",
    success: "#39c85a",
    danger: "#d94b4b"
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
    danger: "#d94b4b"
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
    danger: "#d94b4b"
  }
};
