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

  ]

};

window.questionCodes = {
  CompArch: "COMP-2453"
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
  }
};
