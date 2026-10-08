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
    {q:"What is binary 0001 0110 1010 0111 1001 0100 in hexadecimal?", a:["16A794","1A6794","1A679F","16A974"], c:0},
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
    {q:"What does the expression ¬X represent?", a:["X AND X","NOT X","X OR X","X (X OR X)"], c:1},
    {q:"What does X ^ Y represent?", a:["X OR Y","X AND Y","NOT X","X (X OR Y)"], c:1},
    {q:"What does X v Y represent?", a:["X OR Y","X AND Y","NOT Y","X (X OR Y)"], c:0},
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
    {q:"How many bits wide are the RAM chips in the example?", a:["2 bits","4 bits","8 bits","16 bits"], c:1},
    {q:"How many address lines does each RAM chip require in the example?", a:["4","8","10","16"], c:1},
    {q:"How many bits are in the address used in the example?", a:["4","8","10","16"], c:2},
    {q:"Which bits supply the address lines to each RAM chip?", a:["The lower-order 8 bits","The higher-order 8 bits","The lower-order 2 bits","All bits equally"], c:0},
    {q:"What are the higher-order 2 address bits used for?", a:["Selecting one of four RAM chips","Selecting one of eight RAM chips","Storing data","Performing arithmetic"], c:0},
    {q:"What type of decoder selects one of four RAM chips?", a:["1-to-4","2-to-4","4-to-2","3-to-8"], c:1},
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
    {q:"Which type of register stores 8 bits of data simultaneously?", a:["Parallel register","Shift register","Ripple register","Decoder register"], c:0},
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
    {q:"Which type of counter is used in CPUs?", a:["Asynchronous counter","Synchronous counter","Ripple counter","Unclocked counter"], c:1},
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

  CloudComp: {
    quiz1: [
    {q:"What is cloud computing?", a:["On-demand delivery of computing resources over the internet with usage-based billing","A method of physically building data centers","A programming language for cloud applications","A type of computer hardware"], c:0},

    {q:"Which of the following is a key component of cloud computing?", a:["Compute","Keyboard manufacturing","Desktop publishing","Physical cabling only"], c:0},

    {q:"Which type of storage is listed as a cloud computing component?", a:["Object storage","Tape-only storage","BIOS storage","CPU storage"], c:0},

    {q:"Which of the following is an example of cloud networking?", a:["VPCs","CPU registers","RAM slots","USB ports"], c:0},

    {q:"What does cloud computing abstract?", a:["Physical infrastructure","All software code","User passwords","Programming languages"], c:0},

    {q:"What allows organizations to scale globally without owning hardware?", a:["Cloud abstraction of physical infrastructure","Local-only storage","Manual hardware installation","Single-user operating systems"], c:0},

    {q:"What type of billing is associated with cloud computing?", a:["Usage-based billing","One-time hardware-only billing","Paper-based billing","No billing"], c:0},

    {q:"Which database types are used for cloud computing components?", a:["SQL and NoSQL","Only spreadsheets","Only CSV files","Only graphing databases"], c:0},

    {q:"What does on-demand self-service mean?", a:["Users can provision resources automatically without human intervention","Users must call a technician for every resource","Resources can only be provisioned once per year","Users cannot provision resources themselves"], c:0},

    {q:"What does broad network access mean in cloud computing?", a:["Services are accessible through standard networks and devices","Services can only be accessed from one computer","Services require physical access to a data center","Services are disconnected from networks"], c:0},

    {q:"Which cloud characteristic involves providers pooling resources for multiple customers?", a:["Resource pooling","Measured service","Broad network access","Rapid deployment"], c:0},

    {q:"What is multi-tenancy associated with?", a:["Resource pooling","Binary storage","Physical isolation of every customer","Manual software installation"], c:0},

    {q:"What does rapid elasticity allow cloud resources to do?", a:["Scale up or down automatically based on demand","Remain permanently fixed","Only increase once","Be manually removed from data centers"], c:0},

    {q:"What does measured service involve?", a:["Monitoring, controlling, and billing usage based on consumption", "Providing and allocating resources without tracking usage", "Limiting and reserving resources regardless of usage", "Managing and deploying resources without measuring usage"], c:0},

    {q:"What computing approach was introduced by mainframes and time-sharing in the 1960s?", a:["Shared computing","Serverless computing","Edge computing","Container orchestration"], c:0},

    {q:"What technology enabled hardware abstraction in the 1990s?", a:["Virtualization","Serverless functions","API gateways","Object storage"], c:0},

    {q:"Which company is mentioned in connection with virtualization in the 1990s?", a:["VMware","Salesforce","Oracle","Microsoft"], c:0},

    {q:"What matured during the 2000s in Cloud Computing?", a:["Web services and distributed systems","Quantum computing and AI chips","Edge computing only","Mobile app stores"], c:0},

    {q:"What happened in 2006 that marked commercial cloud adoption?", a:["AWS launched EC2 and S3","Docker was released","Kubernetes became available","Azure launched"], c:0},

    {q:"Which technologies transformed application deployment during the 2010s?", a:["Containers and orchestration","Mainframes and time-sharing","Physical servers and tape drives","Only SQL databases"], c:0},

    {q:"Which technology is used to create and run containers?", a:["Docker","VMware","EC2","Salesforce"], c:0},

    {q:"Which technology is used to manage and orchestrate containers?", a:["Kubernetes","S3","Azure App Services","Google Workspace"], c:0},

    {q:"Which cloud technologies are described as dominating the 2020s?", a:["Serverless, edge computing, AI-driven cloud services, and multi-cloud architectures","Mainframes, floppy disks, and tape drives","Only physical servers","Only desktop applications"], c:0},

    {q:"Cloud computing is the result of decades of innovation in what area?", a:["Distributed systems","Word processing","Desktop publishing","Computer graphics"], c:0},

    {q:"Which of the following is a modern IT use of cloud computing?", a:["Enterprise applications and SaaS platforms","Only local file storage","Only physical networking","Only BIOS configuration"], c:0},

    {q:"How can cloud computing support web applications?", a:["By supporting global web and mobile applications","By preventing network access","By requiring every application to run locally","By eliminating databases"], c:0},

    {q:"What type of processing can cloud platforms support?", a:["Big data analytics and real-time processing","Only offline processing and analytics","Only manual calculations and manual statistics","Only word processing and data implimentation"], c:0},

    {q:"Which workloads can cloud computing support?", a:["Machine learning and AI workloads","Only operating system installation","Only spreadsheet printing","Only hardware testing"], c:0},

    {q:"What development practices can cloud computing support?", a:["DevOps pipelines and CI/CD automation","Only manual software deployment","Only hardware assembly","Only paper documentation"], c:0},

    {q:"Which cybersecurity operations are listed as cloud use cases?", a:["SIEM, SOAR, IAM, and threat detection","Only antivirus installation","Only password printing","Only physical locks"], c:0},

    {q:"What does IaaS stand for?", a:["Infrastructure as a Service","Internet as a System","Infrastructure and Application Software","Integrated Application as a Service"], c:0},

    {q:"What does PaaS stand for?", a:["Platform as a Service","Programming as a System","Platform and Storage Service","Private Application as a Service"], c:0},

    {q:"What does SaaS stand for?", a:["Software as a Service","Storage as a System","Server as a Service","Security as a Service"], c:0},

    {q:"What does IaaS primarily provide?", a:["Virtualized hardware resources","Fully managed applications","Only developer frameworks","Only email services"], c:0},

    {q:"What does PaaS primarily provide?", a:["Managed environments for application development","Physical data centers","Fully managed email accounts only","Hardware without networking"], c:0},

    {q:"What does SaaS primarily provide?", a:["Fully managed applications delivered over the internet","Virtual machines only in a confided software space","Raw networking hardware to be used with various other pieces of software","Operating system kernels only"], c:0},

    {q:"What differs between IaaS, PaaS, and SaaS?", a:["Levels of control, flexibility, and responsibility","The color of their interfaces","The physical size of computers","The number of users allowed"], c:0},

    {q:"What does IaaS provide as foundational resources?", a:["Compute, storage, and networking","Only email and calendars","Only application source code","Only database queries"], c:0},

    {q:"What level of operating system control does IaaS provide?", a:["Full control over operating systems and applications","No control at all","Control only over browser settings and web based applications","Control only over email services and other network applications"], c:0},

    {q:"What can users configure with IaaS?", a:["Firewalls, networks, and security policies","Only document formatting","Only application icons","Only email signatures"], c:0},

    {q:"Which is an example of an IaaS service?", a:["AWS EC2","Microsoft 365","Google Workspace","Salesforce"], c:0},

    {q:"Which Azure service is an IaaS example?", a:["Azure Virtual Machines","Azure App Services","Microsoft 365","Azure Workspace"], c:0},

    {q:"Which Google Cloud service is an IaaS example?", a:["Google Compute Engine","Google App Engine","Google Workspace","Google Drive"], c:0},

    {q:"Which is a use case for IaaS?", a:["Disaster recovery","Email collaboration only","Browser-based CRM only","Online document editing only"], c:0},

    {q:"Which type of system migration is an IaaS use case?", a:["Legacy system migration","Social media migration","Printer migration","Keyboard migration"], c:0},

    {q:"What does PaaS provide for developers?", a:["A managed environment for building, deploying, and scaling applications", "A service for storing files and managing user accounts", "A system for monitoring network traffic and hardware", "A tool for purchasing and configuring physical servers"], c:0},

    {q:"Which task can PaaS perform automatically?", a:["OS patching and updates","Physical data center construction","Keyboard replacement","Manual server assembly"], c:0},

    {q:"What built-in capability is associated with PaaS?", a:["Monitoring and scaling","Physical hardware repair","Manual BIOS updates","Paper-based logging"], c:0},

    {q:"What does PaaS integrate for developers?", a:["Developer tools and frameworks","Only physical storage devices","Only networking cables","Only user passwords"], c:0},

    {q:"Which is an example of PaaS?", a:["AWS Elastic Beanstalk","AWS EC2","Microsoft 365","Salesforce"], c:0},

    {q:"Which Azure service is an example of PaaS?", a:["Azure App Services","Azure Virtual Machines","Microsoft 365","Azure Storage Drives"], c:0},

    {q:"Which Google Cloud service is an example of PaaS?", a:["Google App Engine","Google Compute Engine","Google Workspace","Google Cloud Storage only"], c:0},

    {q:"Which development scenario is a PaaS use case?", a:["Rapid development without managing infrastructure","Managing physical data centers","Replacing computer hardware","Manually installing operating systems"], c:0},

    {q:"How are SaaS applications typically accessed?", a:["Through a browser or API","Only through physical terminals","Only through BIOS","Only through USB devices"], c:0},

    {q:"What does SaaS eliminate for users?", a:["Installation and maintenance","Internet access","All user accounts","All application functionality"], c:0},

    {q:"What type of pricing is commonly associated with SaaS?", a:["Subscription-based pricing","Hardware-only pricing","No pricing","Per-keyboard pricing"], c:0},

    {q:"What happens automatically with SaaS applications?", a:["Updates and security patches","Physical server construction","Network cable installation","CPU replacement"], c:0},

    {q:"Which is an example of SaaS?", a:["Microsoft 365","AWS EC2","Google Compute Engine","Azure Virtual Machines"], c:0},

    {q:"Which Google product is a good SaaS example?", a:["Google Workspace","Google Compute Engine","Google App Engine","Kubernetes"], c:0},

    {q:"Which of these is a good SaaS example?", a:["Salesforce","AWS EC2","Azure Virtual Machines","Google Compute Engine"], c:0},

    {q:"Which is a listed SaaS use case?", a:["Email and collaboration tools","Legacy hardware migration","Firewall configuration","Virtual machine management"], c:0},

    {q:"What is a public cloud?", a:["Shared infrastructure that is scalable and cost-effective","Dedicated infrastructure for one organization only","A combination of private and public infrastructure","Infrastructure shared only by organizations in one industry"], c:0},

    {q:"What is a private cloud?", a:["Dedicated infrastructure offering enhanced control","Shared infrastructure for everyone","A cloud used only for email","A cloud with no security controls"], c:0},

    {q:"What is a hybrid cloud?", a:["A combination of public and private cloud","A combination of two private clouds only","A cloud without infrastructure","A cloud used only by schools"], c:0},

    {q:"What is a community cloud?", a:["A cloud shared by organizations with similar requirements","A cloud available only to one individual and to be viewed by multiple organizations","A cloud with no shared infrastructure and no means of sharing it to other organizations","A cloud used only for gaming"], c:0},

    {q:"Which sectors are given as examples for community clouds?", a:["Healthcare and education","Retail and entertainment only","Manufacturing and transportation only","Gaming and sports only"], c:0},

    {q:"Which deployment model supports legacy systems according?", a:["Hybrid cloud","Public cloud","Community cloud","SaaS"], c:0},

    {q:"Which deployment model is described as compliance-friendly?", a:["Private cloud","Public cloud","SaaS","Community cloud"], c:0},

    {q:"What do deployment models help determine?", a:["Governance, security, and cost strategies","CPU instruction sets","Keyboard layouts","Programming language syntax"], c:0},

    {q:"Which cloud provider is described as having the largest ecosystem?", a:["AWS","Azure","Google Cloud","IBM Cloud"], c:0},

    {q:"Which provider is described as having broad service offerings?", a:["AWS","Oracle Cloud","Alibaba Cloud","Azure only"], c:0},

    {q:"Which provider is associated with strong enterprise integration?", a:["Azure","AWS","Google Cloud","Alibaba Cloud"], c:0},

    {q:"Which provider is described as being strong in Microsoft-centric environments?", a:["Azure","AWS","Google Cloud","IBM Cloud"], c:0},

    {q:"Which provider is described as leading in data analytics and AI?", a:["Google Cloud","Azure","AWS","Oracle Cloud"], c:0},

    {q:"Which of the following is listed as another cloud provider?", a:["IBM Cloud","Docker Cloud only","Kubernetes Cloud","Microsoft Workspace Cloud"], c:0},

    {q:"Which is a cloud computing use case?", a:["Hosting websites and applications","Manufacturing CPUs","Digital storing media files like textbooks","Handling servicing for keyboards"], c:0},

    {q:"How can cloud computing be used with data?", a:["Data warehousing and analytics","Only physical data filing","Only paper-based storage","Only local spreadsheets"], c:0},

    {q:"What type of pipelines can cloud computing support?", a:["Machine learning pipelines","Only printing pipelines","Only hardware pipelines","Only keyboard pipelines"], c:0},

    {q:"What type of devices can cloud platforms manage?", a:["IoT devices","Only desktop monitors","Only keyboards","Only printers"], c:0},

    {q:"What work environment can cloud computing support?", a:["Virtual desktops and remote work","Only local desktop work","Only data center work","Only offline computing"], c:0},

    {q:"What does IAM stand for?", a:["Identity and Access Management","Internet Application Management","Infrastructure Access Machine","Integrated Application Monitoring"], c:0},

    {q:"What are two forms of encryption mentioned in cloud security?", a:["Encryption at rest and in transit","Encryption at startup and shutdown","Encryption at login and logout","Encryption at CPU and RAM"], c:0},

    {q:"What is network segmentation used as in cloud cybersecurity?", a:["A security consideration","A billing model","A storage type","A deployment model"], c:0},

    {q:"What is an additional form of segmentation?", a:["Micro-segmentation","Macro-storage","Virtual partitioning","Cloud division"], c:0},

    {q:"What security activities should cloud environments include?", a:["Logging, monitoring, and threat detection","Only application development","Only billing","Only hardware upgrades"], c:0},

    {q:"Where must security be integrated?", a:["Into every cloud architecture","Only into private clouds","Only into SaaS","Only into physical data centers"], c:0},

{q:"What is the shared responsibility model?", a:["A model dividing security responsibilities between the provider and customer","A model dividing cloud resources between multiple customers","A model dividing application costs between different departments","A model dividing network traffic between multiple servers"], c:0},
    {q:"Who is responsible for physical data center security?", a:["The cloud provider","The customer only","The application developer only","The end user only"], c:0},

    {q:"Who is responsible for hardware and the hypervisor?", a:["The cloud provider","The customer only","The SaaS user","The database administrator only"], c:0},

    {q:"Who is responsible for identity management?", a:["The customer","The cloud provider only","The hardware manufacturer","The internet service provider"], c:0},

    {q:"Who is responsible for data protection?", a:["The customer","The cloud provider only","The network cable manufacturer","The operating system vendor only"], c:0},

    {q:"Who is responsible for application security?", a:["The customer","The physical data center","The cloud provider in every situation","The internet service provider"], c:0},

    {q:"Does responsibility remain identical across IaaS, PaaS, and SaaS?", a:["No, responsibility varies across the service models","Yes, it is always identical","Only in public cloud","Only in private cloud"], c:0},

    {q:"What is a cloud region?", a:["A geographic location of cloud resources","A physical computer","A software application","A security policy"], c:0},

    {q:"What is an Availability Zone?", a:["An independent data center within a region","A cloud billing account","A virtual machine","A type of container"], c:0},

    {q:"What is a virtual machine?", a:["A software-based computer","A physical data center","A network cable","A database table"], c:0},

    {q:"What is a container?", a:["A lightweight, portable application environment","A physical, heavy server rack","A database type","A large-scale, geographic region"], c:0},

    {q:"What is serverless computing?", a:["Event-driven compute without managing servers","Computing without software","Computing without networks","A physical server architecture"], c:0},

    {q:"What is an API Gateway?", a:["An entry point for APIs","A physical firewall","A database","A storage disk"], c:0},

    {q:"What is object storage designed for?", a:["Scalable storage for unstructured data","CPU instructions","Operating system kernels","Network routing tables"], c:0},

    {q:"What does a load balancer do?", a:["Distributes traffic across resources","Encrypts every file automatically","Creates virtual machines","Stores unstructured data"], c:0},

    {q:"Which is a benefit of cloud computing?", a:["Reduced capital expenditure","Increased hardware ownership requirements","Reduced scalability","Slower deployment"], c:0},

    {q:"What type of scalability is listed as a cloud benefit?", a:["Elastic scalability","Fixed scalability","Manual scalability","Hardware-only scalability"], c:0},

    {q:"What geographic benefit does cloud computing provide?", a:["Global distribution","Local-only distribution","Single-device distribution","Offline distribution"], c:0},

    {q:"What can cloud computing improve about deployment?", a:["Deployment cycles can be faster","Deployment becomes entirely manual","Deployment is limited to physical servers","Deployment is eliminated"], c:0},

    {q:"What security-related benefit is mentioned?", a:["Built-in security and compliance tools","No security controls","Automatic removal of all risks","Elimination of cybersecurity"], c:0},

    {q:"What is one challenge associated with cloud computing?", a:["Vendor lock-in","Guaranteed portability","Unlimited resources","Zero configuration requirements"], c:0},

    {q:"What type of concerns can arise from cloud data location?", a:["Data residency and privacy concerns","Keyboard residency concerns","CPU ownership concerns","Monitor placement concerns"], c:0},

    {q:"What can cloud misconfigurations potentially lead to?", a:["Breaches","Automatic security","Lower network latency in every case","Free resources"], c:0},

    {q:"What can poor resource management cause?", a:["Cost overruns","Automatic cost elimination","Guaranteed savings","No billing"], c:0},

    {q:"Why is understanding cloud risks important?", a:["It is essential for secure cloud adoption","It eliminates the need for security","It prevents all cloud usage","It removes the need for governance"], c:0},

    {q:"What is a multi-cloud strategy?", a:["Using multiple cloud environments or providers","Using only one physical server","Using no cloud providers","Using only private cloud"], c:0},

    {q:"What technologies are associated with cloud-native development?", a:["Microservices and containers","Mainframes and tape drives","BIOS and USB","Only physical servers"], c:0},

    {q:"What type of cloud services are identified as a modern trend?", a:["AI-driven cloud services","Paper-based cloud services","Offline-only cloud services","Hardware-only cloud services"], c:0},

    {q:"What is edge computing intended to support?", a:["Low-latency workloads","Only offline workloads","Only physical storage","Only email applications"], c:0},

    {q:"What security architecture is listed as a cloud adoption trend?", a:["Zero-trust security architectures","No-trust hardware architecture","Single-password architecture","Physical-only security architecture"], c:0},

    {q:"How is cloud computing continuing to change modern IT?", a:["It continues to evolve rapidly and shape modern IT","It is being replaced entirely by mainframes","It is becoming limited to local networks","It is no longer changing"], c:0},

    {q:"Which of the following is one of the main learning objectives of learning Cloud Computing?", a:["Understanding elasticity, scalability, and resource pooling","Learning only assembly language","Building physical CPUs","Designing desktop monitors"], c:0},

    {q:"Which three service models should learners be able to differentiate?", a:["IaaS, PaaS, and SaaS","AWS, Azure, and Google Cloud","Public, private, and hybrid only","VM, container, and serverless"], c:0},

    {q:"Which deployment models should learners be able to identify?", a:["Public, private, hybrid, and community","IaaS, PaaS, and SaaS","VM, container, and serverless","AWS, Azure, and Google"], c:0},

    {q:"Which major cloud providers are specifically discussed?", a:["AWS, Azure, and Google Cloud","Docker, Kubernetes, and VMware","Salesforce, Microsoft 365, and Google Workspace","IBM, Oracle, and Alibaba only"], c:0},
    ],
    quiz2: [
        {q:"What is Zero Trust based on?",a:["Never trust, always verify","Trust all internal network traffic","Trust users after one successful login","Allow access based only on IP address"],c:0},
        {q:"True or False: Zero Trust assumes that attackers are never already inside the environment.",a:["True","False","BLANK","BLANK"],c:1},
        {q:"What problem does Zero Trust address when attackers move between systems after compromising one system?",a:["Lateral movement","Data compression","DNS resolution","Load balancing"],c:0},
        {q:"Fill in the blank: Zero Trust requires organizations to ______ every request.",a:["verify","ignore","encrypt","cache"],c:0},
        {q:"Which statement best describes the traditional castle-and-moat security model?",a:["Security is concentrated around a network perimeter","Every request is continuously verified","Every workload receives its own identity","All internal traffic is denied"],c:0},
        {q:"True or False: Cloud-native architectures make static network perimeters more effective.",a:["True","False","BLANK","BLANK"],c:1},
        {q:"Which factor helped drive the adoption of Zero Trust?",a:["Remote workforce expansion","Reduced internet usage","Elimination of cloud computing","Fewer connected devices"],c:0},
        {q:"What is meant by the phrase 'identity as the new perimeter'?",a:["Who or what you are becomes more important than where you are","Physical firewalls are no longer needed anywhere","Only users inside a building can access resources","IP addresses become the primary identity"],c:0},
        {q:"Which Zero Trust principle means granting only the minimum rights required?",a:["Least privilege access","Assume breach","Continuous monitoring","Network openness"],c:0},
        {q:"True or False: Zero Trust gives users implicit trust when they are connected to the corporate network.",a:["True","False","BLANK","BLANK"],c:1},

        {q:"Which of the following is a core Zero Trust principle?",a:["Continuous monitoring","Permanent trust","Open internal access","Location-based authorization"],c:0},
        {q:"Fill in the blank: Zero Trust operates on the principle 'Never Trust, Always ______.'",a:["Verify","Connect","Permit","Encrypt"],c:0},
        {q:"What does 'Assume Breach' mean in Zero Trust?",a:["Design security as if attackers are already inside","Assume every user is trustworthy","Assume the firewall cannot fail","Assume all traffic is encrypted"],c:0},
        {q:"Which Zero Trust pillar focuses on users, services, and machines?",a:["Identity","Data","Networks","Infrastructure"],c:0},
        {q:"Which Zero Trust pillar focuses on managed and unmanaged endpoints?",a:["Devices","Applications","Data","Identity"],c:0},
        {q:"True or False: Applications and APIs are excluded from the Zero Trust pillar model.",a:["True","False","BLANK","BLANK"],c:1},
        {q:"Which Zero Trust pillar includes classification and protection?",a:["Data","Networks","Devices","Identity"],c:0},
        {q:"Which pillar includes hosts, containers, and cloud resources?",a:["Infrastructure","Applications","Data","Devices"],c:0},
        {q:"Which pillar focuses on segmentation and traffic control?",a:["Networks","Identity","Applications","Data"],c:0},
        {q:"Fill in the blank: Zero Trust treats identity as a primary ______ _______ rather than relying only on traditional network boundaries.",a:["security control","database protector","firewall rule","subnet divisor"],c:0},

        {q:"What is authentication?",a:["Proving who or what is making a request","Determining what resources a user may access","Encrypting network traffic","Creating a network segment"],c:0},
        {q:"What is authorization?",a:["Determining what an authenticated identity is allowed to do","Proving the identity of a requester","Checking whether a device has an IP address","Encrypting a password"],c:0},
        {q:"True or False: Authentication should happen only after access is granted.",a:["True","False","BLANK","BLANK"],c:1},
        {q:"Which of the following can be used as an authentication method?",a:["Password","Role","Network segment","Application permission"],c:0},
        {q:"Which of the following is an example of authorization?",a:["Allowing Alice to access the HR application but not the Finance database","Checking Alice's password","Checking Alice's fingerprint","Verifying Alice's security token"],c:0},
        {q:"Fill in the blank: Authorization answers the question 'What can you ______?'",a:["access","authenticate","encrypt","verify"],c:0},
        {q:"Which of the following represents the correct order?",a:["Identity → Authentication → Authorization","Authorization → Identity → Authentication","Authentication → Authorization → Identity","Identity → Authorization → Authentication"],c:0},
        {q:"True or False: Authorization is unrelated to what an identity is permitted to access.",a:["True","False","BLANK","BLANK"],c:1},
        {q:"Which is an example of a workload identity?",a:["A container or Kubernetes pod","An employee's home address","A physical building","A network cable"],c:0},

        {q:"Which identity represents an employee such as john@company.com?",a:["User identity","Machine identity","API identity","Workload identity"],c:0},
        {q:"Which identity represents a web application accessing a database?",a:["Service identity","User identity","Location identity","Network identity"],c:0},
        {q:"Which identity can represent a laptop, server, or virtual machine?",a:["Machine identity","User identity","API identity","Data identity"],c:0},
        {q:"Which identity represents an API or microservice making a request?",a:["API identity","User identity","Device posture","Network identity"],c:0},
        {q:"True or False: A service account is a non-human identity commonly used for automation.",a:["True","False","BLANK","BLANK"],c:0},
        {q:"What does SSO stand for?",a:["Single Sign-On","Secure Service Operation","System Security Organization","Single Security Object"],c:0},
        {q:"What does federation allow?",a:["Single sign-on across systems and clouds","All users to bypass authentication","Devices to operate without identities","Networks to eliminate segmentation"],c:0},
        {q:"Which is an example of an Identity Provider?",a:["Microsoft Entra ID","Docker Desktop","Kubernetes","Apache"],c:0},
        {q:"Which other service is listed as an Identity Provider?",a:["Okta","MongoDB","Node.js","Istio"],c:0},
        {q:"Fill in the blank: Employees, partners, and customers commonly use ______ identities.",a:["user","machine","workload","API"],c:0},

        {q:"What does MFA stand for?",a:["Multi-Factor Authentication","Managed Firewall Access","Multiple File Authorization","Machine Federation Access"],c:0},
        {q:"How many types of evidence does MFA require?",a:["More than one","Exactly one","None","Only three"],c:0},
        {q:"Which is an example of 'something you know'?",a:["Password or PIN","Fingerprint","Phone","Security key"],c:0},
        {q:"Which is an example of 'something you have'?",a:["Security key","Password","Fingerprint","Facial recognition"],c:0},
        {q:"Which is an example of 'something you are'?",a:["Fingerprint","Password","PIN","Authentication code"],c:0},
        {q:"True or False: MFA can provide additional protection even if an attacker obtains a user's password.",a:["True","False","BLANK","BLANK"],c:0},
        {q:"Fill in the blank: MFA can require a username, password, and an authentication ______.",a:["code","firewall","policy","segment"],c:0},
        {q:"What does adaptive access evaluate before granting access?",a:["Context and risk information","Only the username","Only the IP address","Only the password"],c:0},
        {q:"Which of the following is a factor considered by adaptive access?",a:["Device posture","Keyboard brand","Screen size","File format"],c:0},
        {q:"True or False: Adaptive access makes decisions based only on a username and password.",a:["True","False","BLANK","BLANK"],c:1},

        {q:"What does device posture describe?",a:["The security condition of the device being used","The physical position of a laptop","The user's job title","The network's geographic location"],c:0},
        {q:"Which condition may be checked as part of device posture?",a:["The operating system is up to date","The user's personal settings","The monitor's resolution","The computer's database information"],c:0},
        {q:"True or False: A device being company-managed can be considered when evaluating access.",a:["True","False","BLANK","BLANK"],c:0},
        {q:"If Alice normally uses a managed laptop but suddenly uses an unmanaged computer, what could Zero Trust do?",a:["Require additional verification or restrict access","Automatically trust the device","Disable all authentication","Ignore the device status"],c:0},
        {q:"Why can location be useful in adaptive access?",a:["It can provide another signal about whether a request is unusual","It proves an activity is malicious by itself","It replaces authentication","It determines the user's password"],c:0},
        {q:"True or False: Location alone should be treated as proof that an activity is malicious.",a:["True","False","BLANK","BLANK"],c:1},
        {q:"What is a risk score?",a:["An assessment of how unusual or potentially risky a request appears","A user's password strength only","A network bandwidth measurement","A database performance value"],c:0},
        {q:"Which situation would generally produce a higher risk assessment?",a:["Login from an unusual device","Normal login from a managed laptop","Normal use of expected applications","Expected user behavior"],c:0},
        {q:"Fill in the blank: Anomalous actions can trigger ______ authentication.",a:["step-up","single-factor","network-level","anonymous"],c:0},
        {q:"What is step-up authentication?",a:["Stronger authentication requested when additional risk is detected","Authentication that happens only once per year","Removing authentication after a risk event","Authentication performed only by administrators"],c:0},

        {q:"What is the Policy Decision Point responsible for?",a:["Evaluating access requests and making the security decision","Physically storing all user devices","Encrypting every database","Creating user passwords"],c:0},
        {q:"True or False: The PDP is sometimes described as the 'central policy brain.'",a:["True","False","BLANK","BLANK"],c:0},
        {q:"What does PDP stand for?",a:["Policy Decision Point","Policy Data Processor","Protected Device Protocol","Private Data Point"],c:0},
        {q:"What does PEP stand for?",a:["Policy Enforcement Point","Policy Evaluation Process","Protected Endpoint Protocol","Private Enforcement Policy"],c:0},
        {q:"Which component sits in the data path?",a:["Policy Enforcement Point","Policy Decision Point","Identity Provider only","Risk score"],c:0},
        {q:"Fill in the blank: PDP decides → PEP ______.",a:["enforces","authenticates","encrypts","segments"],c:0},
        {q:"True or False: A PEP can be implemented as a gateway, proxy, or agent.",a:["True","False","BLANK","BLANK"],c:0},
        {q:"What does the PDP return after evaluating an access request?",a:["An allow or deny decision","A new IP address","A database record","A password"],c:0},
        {q:"If the PDP returns DENY, what should the PEP do?",a:["Block the request","Allow the request","Create a new identity","Disable MFA"],c:0},
        {q:"Which information can the PDP evaluate?",a:["Identity, resource, requested action, permissions, and security policies","Only the user's physical location","Only the user's password","Only the destination IP address"],c:0},

        {q:"What is microsegmentation?",a:["Dividing a network into small, isolated security segments","Combining all networks into one large network","Removing all network controls","Allowing all internal traffic"],c:0},
        {q:"True or False: Microsegmentation can limit unnecessary communication between systems.",a:["True","False","BLANK","BLANK"],c:0},
        {q:"What does identity-based segmentation control access based on?",a:["Who or what is requesting access","Only the IP address","Only the physical location","Only the subnet mask"],c:0},
        {q:"What is a least-privilege path?",a:["A communication path where only required communication is allowed","A path where all communication is allowed","A path that requires no authentication","A path available only to administrators"],c:0},
        {q:"How does workload-level isolation help security?",a:["It gives individual applications and services their own security boundaries","It removes application identities","It allows unrestricted service communication","It disables all network traffic"],c:0},
        {q:"Fill in the blank: Microsegmentation helps stop lateral ______.",a:["movement","authentication","encryption","federation"],c:0},
        {q:"What does limiting the blast radius mean?",a:["Keeping a compromise contained to a limited segment","Increasing the number of affected systems","Removing all network boundaries","Allowing attackers to move freely"],c:0},
        {q:"True or False: Microsegmentation primarily focuses on East-West traffic.",a:["True","False","BLANK","BLANK"],c:0},
        {q:"Which technique enforces rules on each endpoint or VM?",a:["Host-based firewalls","Identity Providers","Service accounts","Network ACLs only"],c:0},
        {q:"Which technique uses gateways that check identity before forwarding traffic?",a:["Identity-aware proxies","Host-based firewalls","Network ACLs","DNS servers"],c:0},

        {q:"What does Software-Defined Networking provide in microsegmentation?",a:["Central control of forwarding and isolation","Only physical firewall management","Password-based authentication","Manual hardware replacement"],c:0},
        {q:"What is policy-driven segmentation?",a:["Intent-based rules applied automatically","A network with no policies","A firewall that only uses physical addresses","A system that ignores workload changes"],c:0},
        {q:"What is North-South traffic?",a:["Traffic between external and internal systems","Traffic between two internal workloads","Traffic between two containers only","Traffic within a single process"],c:0},
        {q:"What is East-West traffic?",a:["Traffic between internal services or workloads","Traffic from the internet to a data center","Traffic between a user and the internet only","Traffic between two external networks"],c:0},
        {q:"True or False: Traditional firewalls commonly focus on North-South traffic.",a:["True","False","BLANK","BLANK"],c:0},
        {q:"Fill in the blank: Microsegmentation focuses primarily on ______-West traffic.",a:["East","North","South","External"],c:0},
        {q:"Which is an example of East-West traffic?",a:["Service to service communication","Internet to data center traffic","Client to application traffic from outside","User to internet traffic"],c:0},
        {q:"Which is an example of North-South traffic?",a:["Client to application traffic","Service to service traffic","Workload to workload traffic","Internal microservice communication"],c:0},
        {q:"What is the primary goal of a Software-Defined Perimeter?",a:["Hide resources until identity is proven","Expose all network resources publicly","Remove authentication requirements","Allow unsolicited traffic to every application"],c:0},
        {q:"True or False: Software-Defined Perimeters can reduce the attack surface by avoiding open ports waiting for unsolicited traffic.",a:["True","False","BLANK","BLANK"],c:0},

        {q:"What is workload identity used for?",a:["Identifying applications, services, and workloads","Identifying users, employees, and customers","Identifying devices, networks, and locations","Identifying IP addresses, ports, and protocols"],c:0},
        {q:"What can machine identities use to identify devices and VMs?",a:["Certificates and keys","Only passwords","Only usernames","Network cables"],c:0},
        {q:"What are API identities?",a:["Credentials used by APIs and microservices","Physical identities of employees","Firewall rules","Network addresses only"],c:0},
        {q:"What do workload certificates provide?",a:["Cryptographic proof of workload identity","Physical proof of device ownership","A network subnet","A user password"],c:0},
        {q:"Fill in the blank: Identity boundaries define who can access ______.",a:["what","where","when only","nothing"],c:0},
        {q:"What do identity boundaries map?",a:["Identities to allowed workloads and actions","IP addresses to passwords","Users to physical buildings","Ports to operating systems"],c:0},
        {q:"True or False: Identity boundaries are defined by identity rather than IP ranges.",a:["True","False","BLANK","BLANK"],c:0},
        {q:"What is separation of duties intended to prevent?",a:["Over-privileged identities from spanning zones","Users from authenticating","All network communication over a local area","Cloud workloads from having seperate identities"],c:0},
        {q:"What is an over-privileged identity?",a:["An identity with more permissions than necessary","An identity without a username","An identity that has no permissions","An identity used only for logging"],c:0},
        {q:"What do cross-environment policies provide?",a:["Consistent rules across cloud, hybrid, and on-prem environments","Different authentication requirements for every device","Only local network access","Automatic removal of identity boundaries"],c:0},

        {q:"How do identity-aware firewalls differ from traditional IP-based controls?",a:["They can make decisions using authenticated identities","They eliminate all authorization","They only use physical addresses","They do not enforce policies"],c:0},
        {q:"What can user identity rules control?",a:["Allowing or denying access based on the authenticated user","Changing the user's password automatically","Changing physical device hardware","Creating new cloud regions"],c:0},
        {q:"What do application identity rules control?",a:["Traffic based on application identity","Only human usernames","Only geographic location","Only network speed"],c:0},
        {q:"True or False: Identity-aware firewalls can enforce policies between microservices.",a:["True","False","BLANK","BLANK"],c:0},
        {q:"In the slideshow example, which service is the Web Service allowed to communicate with?",a:["Payment Service","Database Service directly","Every service","No service"],c:0},
        {q:"Fill in the blank: Web Service → allowed to communicate with → ______ Service.",a:["Payment","Database","Identity","Network"],c:0},
        {q:"What is Zero Trust Network Access designed to replace?",a:["Traditional VPNs","Databases","Operating systems","Container registries"],c:0},
        {q:"True or False: ZTNA grants access to specific applications rather than entire networks.",a:["True","False","BLANK","BLANK"],c:0},
        {q:"What does ZTNA require before connecting?",a:["Strong authentication","A public IP address","An open port","An administrator account"],c:0},
        {q:"What does continuous verification mean in ZTNA?",a:["Trust is re-evaluated throughout the session","The user is verified only once","The network is permanently trusted","The device is never checked"],c:0},

        {q:"What is an allowlist policy?",a:["Default deny; explicitly permit what is needed","Default allow; deny only known threats","Allow all internal traffic","Allow access based only on location"],c:0},
        {q:"Fill in the blank: Least privilege gives each identity the ______ rights required.",a:["minimal","maximum","same","unlimited"],c:0},
        {q:"What does conditional access use to make decisions?",a:["Context and risk signals","Only usernames","Only IP addresses","Only network speed"],c:0},
        {q:"What is dynamic segmentation?",a:["Policies that adapt as workloads and identities change","A fixed network design that never changes","A system without identity checks","A method of removing all security boundaries"],c:0},
        {q:"True or False: Security groups can act as instance-level stateful firewalls.",a:["True","False","BLANK","BLANK"],c:0},
        {q:"What do Network ACLs provide in the slideshow?",a:["Subnet-level stateless filtering","Instance-level stateful filtering","Application-level authentication","User identity management"],c:0},
        {q:"Which is an example of a service mesh technology?",a:["Istio","Microsoft Entra ID","Okta","Ping Identity"],c:0},
        {q:"What does a service mesh provide in relation to Zero Trust?",a:["Application-layer isolation and service-level security controls","Physical network cabling","Only user password storage","Only DNS resolution"],c:0},
        {q:"What does mTLS provide between services?",a:["Encryption and authentication for every service call","Only IP-based routing","Only user authentication","Only database backups"],c:0},
        {q:"Fill in the blank: mTLS stands for Mutual ______.",a:["TLS","Trust Layer","Traffic Login Service","Token Login System"],c:0},

        {q:"What does identity-based routing use instead of IP addresses?",a:["Service identity","Physical location","User passwords","Subnet size"],c:0},
        {q:"What can policy enforcement at the service mesh layer provide?",a:["Authorization and rate limits","File storage and file records","DNS records and Service speed","Only physical security"],c:0},
        {q:"Why is telemetry and monitoring important in a service mesh?",a:["It can observe East-West traffic for anomalies","It removes all traffic controls","It replaces authentication","It disables microsegmentation"],c:0},
        {q:"True or False: Service meshes can use mTLS to authenticate service-to-service communication.",a:["True","False","BLANK","BLANK"],c:0},
        {q:"What does pod-level identity provide in Kubernetes?",a:["Each pod gets a unique, verifiable identity","All pods share one identity","Pods have no identity","Only users receive identities"],c:0},
        {q:"What does namespace segmentation do?",a:["Isolates workloads by Kubernetes namespace","Removes workload boundaries","Allows every pod to communicate freely","Replaces authentication with IP addresses"],c:0},
        {q:"What are identity-aware sidecars?",a:["Proxies that enforce policy on every call","Physical firewalls","Database servers","Identity providers for employees"],c:0},
        {q:"True or False: Each Kubernetes pod can receive a unique, verifiable identity.",a:["True","False","BLANK","BLANK"],c:0},
        {q:"Which is the first step in the Zero Trust implementation roadmap?",a:["Establish the identity foundation","Segment workloads","Apply identity boundaries","Enable continuous monitoring"],c:0},

        {q:"What is included in establishing the identity foundation?",a:["Centralizing the IdP, SSO, and directory services","Removing all authentication","Opening all network ports","Disabling workload identities"],c:0},
        {q:"What is the second step of the Zero Trust implementation roadmap?",a:["Enforce MFA and Conditional Access","Establish identity foundation","Apply identity boundaries","Segment workloads"],c:0},
        {q:"What is the third step of the Zero Trust implementation roadmap?",a:["Segment workloads","Enforce MFA","Establish the identity foundation","Continuous monitoring"],c:0},
        {q:"What is the fourth step of the Zero Trust implementation roadmap?",a:["Apply identity boundaries","Enable SSO","Remove network segmentation","Disable conditional access"],c:0},
        {q:"What is the fifth step of the Zero Trust implementation roadmap?",a:["Continuous monitoring","Establishing an IdP","Creating a VPN","Removing identity controls"],c:0},
        {q:"True or False: Continuous monitoring is used to detect, analyze, and respond to anomalies.",a:["True","False","BLANK","BLANK"],c:0},
        {q:"Fill in the blank: The Zero Trust roadmap begins by establishing an identity ______.",a:["foundation","firewall","database","perimeter"],c:0},
        {q:"Which roadmap step applies microsegmentation and network isolation?",a:["Segment Workloads","Enforce MFA & Conditional Access","Apply Identity Boundaries","Continuous Monitoring"],c:0},
        {q:"Which roadmap step maps identities to allowed resources and actions?",a:["Apply Identity Boundaries","Segment Workloads","Establish Identity Foundation","Continuous Monitoring"],c:0},
        {q:"Which statement best summarizes Zero Trust?",a:["Never trust, always verify","Trust everything inside the network","Use only perimeter firewalls","Allow access based only on IP address"],c:0}
    ]
  },


  SocIndi: {
    review: {

  // =========================
  // CHAPTER 1
  // =========================
    "CHAPTER 1": [
  {q:"What are the main components of technology in the textbook's definition?", a:["Science, politics, law, and education","Tools, techniques, knowledge, and organization","Energy, materials, trade, and transportation","Machines, factories, money, and markets"], c:1},
  {q:"How does the textbook broadly define technology?", a:["A collection of machines used for industrial production","A human-created system using knowledge and organization","Physical objects developed without social influences","Scientific knowledge converted directly into useful products"], c:1},
  {q:"Why is organization included in the definition of technology?", a:["Organizations provide the scientific theories behind every invention","Organizational structures are simply another type of machine","Technological systems require coordinated human and material resources","Technology cannot exist unless governments operate it"], c:2},
  {q:"What does the goose-quill pen example illustrate?", a:["Organic materials cannot be considered technological resources","Writing technologies have remained essentially unchanged","Industrial products always require more skill than older tools","Handicraft technology can require substantial skill from its user"], c:3},
  {q:"How did the steel-nib pen differ from the goose quill?", a:["It depended primarily on organic materials and manual production","It was mass-produced through more complex industrial processes","It required substantially more skill and personal adaptation","It was individually shaped by users from locally gathered materials"], c:1},
  {q:"What does the ballpoint pen illustrate in Mumford's analysis?", a:["Industrial manufacturing eliminates specialization in production","Technological development has returned writing to organic materials","Industrial technology can place sophisticated production behind simple use","Modern products generally require more craftsmanship from users"], c:2},
  {q:"Why can technological systems be fragile?", a:["Technological systems depend entirely on one physical machine","Disruptions in one area can affect connected organizational and technical components","Technological components normally operate independently of supply chains","Modern systems cannot be supported by organizational structures"], c:1},
  {q:"What does the 'law of the hammer' illustrate?", a:["Available technologies can influence which problems people perceive and address","Every technology is invented only after a specific social need appears","Technological systems are developed without regard to existing problems","Tools become less influential when societies become technologically advanced"], c:0},
  {q:"How can technology create new perceived needs?", a:["New inventions cannot change what people consider useful or necessary","Technological needs must always exist before an invention is developed","A new technology can encourage people to treat something as a problem requiring intervention","Medical technologies are always developed without any practical purpose"], c:2},
  {q:"What does it mean for technological change to be cumulative?", a:["Each new technology must be developed independently of earlier systems","Earlier advances provide knowledge and resources for later developments","Technologies become advanced only when older systems are abandoned","Technological progress requires replacing all existing knowledge"], c:1},
  {q:"Why is technological change described as dynamic?", a:["Dynamic change refers mainly to increases in technology prices","Existing technologies can continually be modified and improved","Technological systems improve only when governments mandate changes","Technologies normally remain unchanged once they become successful"], c:1},
  {q:"What is a reverse salient?", a:["A technology that becomes obsolete immediately after invention","A system designed specifically to reverse technological development","A social group that refuses to use a completed technology","A component or subsystem that holds back progress in the larger system"], c:3},
  {q:"What held back nineteenth-century electrification in the example?", a:["A lack of electrical generators prevented electricity production","Consumers rejected electric lighting because it was too inexpensive","The absence of scientific knowledge prevented electrical experiments","Problems with long-distance transmission limited further development"], c:3},
  {q:"What does presentism mean when evaluating older technologies?", a:["Studying only technologies developed during the present era","Treating technological history as independent of social conditions","Assuming future technologies will always outperform current systems","Judging past technologies using assumptions based on the present"], c:3},
  {q:"Why can presentism distort judgments about older technologies?", a:["It prevents comparisons between technologies from different periods","It guarantees that historical technologies are evaluated objectively","It can overlook the circumstances and purposes surrounding their original use","It focuses too heavily on the social conditions of earlier societies"], c:2},
  {q:"How does the textbook distinguish technological advance from progress?", a:["Progress refers only to technologies that are no longer widely used","Technological advance and social progress always have identical meanings","Technological advance is defined mainly by political approval","Technical improvement does not automatically mean social improvement"], c:3},
  {q:"Why does the textbook question the simple image of progress?", a:["Technologies can improve performance while creating costs or disruptions","Technological progress can be measured without considering consequences","Technological change occurs only when societies reject existing systems","Technological development has produced no measurable improvements in history"], c:0},
  {q:"What is technological determinism primarily concerned with?", a:["The claim that society completely controls every technological decision","The belief that technology has no effects outside laboratories","The idea that technology can strongly influence social change","The argument that technology requires government approval"], c:2},
  {q:"Why does the textbook avoid treating technology as completely autonomous?", a:["Technology develops only through natural processes outside human control","Technological systems are created and shaped through human and social processes","Technological systems have no relationship with organizational decisions","Technology determines every social outcome regardless of human choices"], c:1},
  {q:"What role can rational thought play in technological development?", a:["It prevents designers from considering practical circumstances","It removes creativity and imagination from technological work","It requires every invention to begin with an established theory","It supports testing, problem solving, measurement, and systematic reasoning"], c:3},
  {q:"Why can technological change involve social disruption?", a:["Social disruption occurs only when a technology fails completely","Technological change affects objects but never social arrangements","Technological systems normally operate without changing how people work","New systems may require changes in skills, organizations, habits, and institutions"], c:3},
  {q:"What does the textbook suggest about technologies and existing needs?", a:["Existing needs always determine the exact form of new technologies","Some technologies respond to needs, while others can create new perceived needs","Every technology is invented only after users formally request it","Technologies never influence what people consider useful or necessary"], c:1},
  {q:"Why can technology not substitute for effective governance?", a:["Technical methods cannot by themselves resolve political and social questions","Governance problems are primarily engineering problems with technical solutions","Technological systems can automatically establish fair political institutions","Technological expertise eliminates the need for public participation"], c:0},
  {q:"What broader lesson does the textbook draw from technological systems?", a:["Technical choices connect with organizational, social, economic, and political conditions","Technological development is mainly about producing better physical objects","Social institutions have little relevance once technology begins operating","Technical components can always be studied independently of their surroundings"], c:0},
  {q:"What does the textbook emphasize about the development of technological systems?", a:["They may require many social, psychological, economic, and political adjustments","They depend only on technical improvements rather than social changes","They develop smoothly whenever engineers have enough scientific knowledge","They normally emerge fully formed with every component working immediately"], c:0},

  // =========================
    ],
    "CHAPTER 2": [
  // CHAPTER 2
  // =========================
  {q:"Why can technological change create both winners and losers?", a:["Technologies affect only people who directly purchase them","Technological change normally provides identical benefits to every group","Benefits and costs can be distributed differently among social groups","Technological change has no meaningful economic consequences"], c:2},
  {q:"What concern is central to 'Whose Technology?'", a:["Which scientist first discovered the principles behind modern technology","Which country has produced the greatest number of inventions","Which machines can operate without human workers","Who controls technological choices and who receives their benefits"], c:3},
  {q:"Who were the Luddites?", a:["Scientists who organized early research laboratories in England","English workers who resisted aspects of industrial technological change","Farmers who introduced mechanical harvesting throughout Europe","Government officials who promoted industrial automation"], c:1},
  {q:"What was an important concern behind Luddite resistance?", a:["Industrial machines were considered too unreliable for factory production","Workers believed all forms of scientific knowledge were dangerous","Machinery could threaten established work arrangements and livelihoods","The movement primarily opposed the development of electrical power"], c:2},
  {q:"Why should the Luddites not simply be portrayed as enemies of technology?", a:["Their resistance reflected economic and social concerns about how technology was used","Their movement had no connection to changes in employment or production","The Luddites supported machinery whenever it reduced production costs","The Luddites were inventors who designed the machines they opposed"], c:0},
  {q:"What broader issue does the Luddite example illustrate?", a:["Technological adoption always benefits workers before business owners","Technological choices affect machines but cannot influence workers","Technological resistance occurs only when people misunderstand science","Technological choices can redistribute economic power and opportunities"], c:3},
  {q:"What does neo-Luddism generally refer to?", a:["A historical movement that supported factory automation","A government program designed to accelerate innovation","Modern criticism of technologies viewed as harmful or socially disruptive","A scientific theory explaining industrial productivity"], c:2},
  {q:"Why can technological advance undermine established businesses?", a:["Technological advances normally protect established businesses from competition","Businesses are affected only when governments prohibit older technologies","New technologies cannot alter consumer expectations or purchasing habits","New methods can change how goods and services are produced or distributed"], c:3},
  {q:"What Internet-related disruption does the chapter discuss?", a:["Internet commerce can threaten conventional brick-and-mortar retailers","Digital commerce primarily affected government agencies rather than firms","The Internet had little effect on businesses serving local customers","Online commerce mainly increased demand for traditional physical stores"], c:0},
  {q:"What is a technological 'fix'?", a:["Using a technological solution to address a problem that may have social causes","Using technology only when no political decisions are involved","Replacing every older technology with a newer version regardless of need","Designing machines specifically to prevent organizations from changing"], c:0},
  {q:"Why can technological fixes be limited?", a:["Technical solutions always create larger problems than the original issue","Technological fixes work only without public involvement","Technological solutions are incapable of changing physical conditions","A technical solution may not address the social conditions creating the problem"], c:3},
  {q:"What can technological change do to productivity?", a:["Higher productivity always guarantees higher income for every worker","It can increase output while changing employment and economic relationships","Productivity improvements have no effect on economic benefits","Technological productivity is unrelated to business organization"], c:1},
  {q:"Why can technological effects differ between groups?", a:["All groups interact with technology in identical economic circumstances","Technological systems distribute benefits equally when productivity rises","Technology affects groups only according to geographic location","Groups have different resources, positions, skills, and exposure to change"], c:3},
  {q:"What does 'who wins and who loses' mean for technology?", a:["Every technology produces fixed winners and losers before anyone uses it","Technological development prevents conflicts between economic interests","Choosing one technological path can advantage some interests over others","Technological decisions matter only when governments choose winners"], c:2},
  {q:"Why should affected parties participate in technological choices?", a:["Public participation guarantees that every technology will succeed","Participation is needed because experts cannot evaluate technology","Only affected parties possess the scientific knowledge needed to invent technology","Those choices can have significant consequences for different groups"], c:3},
  {q:"What is a limitation of using technology to solve social problems?", a:["Technical improvements cannot replace effective political and social institutions","Political institutions become unnecessary when technology becomes sophisticated","Technology can solve social problems whenever political choices are avoided","Social problems disappear automatically when technical efficiency improves"], c:0},
  {q:"What does the chapter suggest about technology and justice?", a:["Technological innovation removes the need to consider competing interests","Technical progress does not automatically produce a just distribution of benefits","Justice can be measured entirely through technological performance","Technological progress guarantees equal outcomes across social groups"], c:1},
  {q:"What is a technocrat in the chapter's discussion?", a:["A scientist whose work is limited to purely theoretical questions","A worker who operates machinery without making policy decisions","An entrepreneur who refuses to use scientific expertise","A political decision-maker strongly associated with technical expertise"], c:3},
  {q:"Why might calling a political leader a technocrat carry implications?", a:["It indicates that the leader works for a technology company","It guarantees that the leader supports every technological change","It means the leader has no interest in science or technology","It can suggest that technical expertise is emphasized in political decisions"], c:3},
  {q:"What does the chapter suggest about technology and political choice?", a:["Technological decisions are purely technical and outside politics","Political choices become unnecessary whenever experts are available","Technical decisions can involve values and competing interests beyond engineering","Technology can determine the correct political outcome without debate"], c:2},
  {q:"Why can a successful technology still create social problems?", a:["Its benefits may be accompanied by costs, disruptions, or unequal effects","Technical success guarantees that every group benefits equally","Successful technologies cannot affect employment or markets","Social problems arise only when a technology fails to operate"], c:0},
  {q:"What does the chapter emphasize about technological limitations?", a:["Technology is powerful within its realm but cannot address every social problem","Technical expertise has little value outside research laboratories","Technological methods can replace political institutions when implemented properly","Technology is generally ineffective at solving practical problems"], c:0},
  {q:"How should technology be evaluated according to the chapter?", a:["Evaluate technologies only by whether they increase production","Focus on invention while ignoring adoption and use","Judge technologies mainly by how advanced their physical components appear","Consider technical achievements and the social distribution of their effects"], c:3},
  {q:"Why connect technological choices with participation?", a:["Participation is needed because technologies cannot be evaluated technically","Public participation ensures that no technology will cause disruption","Participation matters only while a technology is being invented","Those choices can determine which groups gain influence, benefits, or opportunities"], c:3},
  {q:"What broad lesson does the chapter draw from technological change?", a:["Technological development can improve some conditions while disrupting others","Technological change consistently produces equal gains for society","Technological progress automatically resolves conflicts over resources","Technological development is mainly a technical process without social effects"], c:0},

  // =========================
    ],
    "CHAPTER 4": [
  // CHAPTER 4
  // =========================
  {q:"What misconception about science and technology does Chapter 4 challenge?", a:["Technology is not simply scientific knowledge applied directly to practical problems","Technology developed only after modern scientific institutions appeared","Science and technology have completely unrelated goals and methods","Scientific discoveries always become technologies immediately"], c:0},
  {q:"How does the chapter distinguish the typical aims of science and technology?", a:["Science seeks knowledge, while technology uses knowledge to accomplish purposes","Science and technology have identical goals but different equipment","Science creates practical devices, while technology studies nature for its own sake","Technology seeks knowledge alone, while science focuses mainly on manufacturing"], c:0},
  {q:"What did Project Hindsight investigate?", a:["The contribution of scientific research to developing major weapons systems","The role of universities in patenting genetic information","The development of commercial radio and television","The effects of industrial technology on factory workers"], c:0},
  {q:"How many events in Project Hindsight's sample resulted from basic scientific research?", a:["Nearly all of the 710 events studied resulted from basic research","About half of the 710 events studied resulted from basic research","None of the 710 events involved scientific knowledge","Two of the 710 events studied were attributed to basic research"], c:3},
  {q:"What percentage of Project Hindsight's events came from basic research?", a:["About 6.7 percent of the events examined","About 92 percent of the events examined","About 0.3 percent of the events examined","About 2 percent of the events examined"], c:2},
  {q:"What did Project Hindsight suggest about science and technology?", a:["Basic research had no relationship to military technology","Technology generally developed without scientific concepts","Most technologies were created directly from newly completed research","Many technologies relied on established knowledge rather than recent basic research"], c:3},
  {q:"What limitation of Project Hindsight does the chapter identify?", a:["The researchers focused entirely on commercial technologies","The study measured science without considering technological applications","Its method did not fully capture the long-term influence of earlier science","The study examined too many technological systems from different industries"], c:2},
  {q:"What median delay did Hindsight find between research and application?", a:["About one hundred years separated research completion and application","About nine years separated research completion and technological application","About nine months separated research completion and technological application","About thirty years separated research completion and application"], c:1},
  {q:"What systems were examined by Project Hindsight Revisited?", a:["Penicillin, open-heart surgery, cloning, and gene therapy","The Apache, Abrams, Stinger, and Javelin military systems","The radio, television, Internet, and printing press","The steam engine, spinning jenny, telegraph, and automobile"], c:1},
  {q:"What did the later Hindsight study note about relevant research?", a:["The systems depended entirely on research for specific designs","The projects had no connection to earlier research","Nearly all relevant research was performed after each project launched","Much of it had been completed before the military projects began"], c:3},
  {q:"What did the TRACES study add to the discussion?", a:["It showed that science never influences technological development","It demonstrated that technology always develops before science","It found examples of innovations connected to earlier scientific research","It examined only military weapons and found no scientific connections"], c:2},
  {q:"Why is the science-technology relationship not linear?", a:["Technology develops only after every scientific problem is solved","Science can influence technology, while technology can also contribute to science","Scientific discoveries always occur after technological applications","Science and technology follow paths that never intersect"], c:1},
  {q:"How can technology contribute to scientific discovery?", a:["Scientific discovery occurs only after technology reaches perfection","Technology prevents scientists from testing ideas independently","New instruments and techniques can make previously inaccessible observations possible","Technological devices replace the need for scientific theories"], c:2},
  {q:"What does John Ambrose Fleming illustrate?", a:["A scientifically trained engineer can translate scientific knowledge into technology","Technological invention always requires a commercial company","A pure scientist can develop practical technology without engineering knowledge","Scientific and engineering work must remain completely separate"], c:0},
  {q:"What did Fleming's background help him do?", a:["Prevent electrical research from industrial influence","Develop technologies without scientific knowledge or training","Connect scientific understanding with practical electrical technology","Replace electrical engineering with theoretical scientific research"], c:2},
  {q:"What do science and technology have in common?", a:["Both operate independently from social institutions","Both pursue exactly the same goals and methods","Both depend mainly on replacing previous knowledge","Both build cumulatively on knowledge produced by earlier work"], c:3},
  {q:"What does 'standing on the shoulders of giants' illustrate?", a:["New achievements depend on knowledge produced by earlier work","Scientific progress occurs independently of earlier achievements","Technological development advances by abandoning established techniques","Scientific discovery requires rejecting all previous theories"], c:0},
  {q:"What shared intellectual approach do science and technology often use?", a:["Avoidance of measurement when evaluating claims","Observation, testing, experimentation, and systematic measurement","Dependence on authority rather than evidence","Reliance on tradition without testing explanations"], c:1},
  {q:"What example from Pirsig illustrates scientific and technological reasoning?", a:["A scientist builds a motorcycle from theoretical equations","A mechanic repairs a motorcycle by following tradition without testing","An engineer avoids experiments because problems can be solved intuitively","A mechanic tests hypotheses systematically while diagnosing a motorcycle problem"], c:3},
  {q:"Why does the chapter caution against calling science completely rational?", a:["Scientific work depends entirely on political decisions","Scientific theories and interpretations still involve creativity and human judgment","Scientific research never uses observation or logical reasoning","Scientific theories cannot be evaluated through testing"], c:1},
  {q:"What role does mathematics play in science and technology?", a:["It is mainly relevant to historical technologies","It replaces experiments and observations in both fields","It is used only by scientists and not by engineers","It serves as an important language and analytical tool for both fields"], c:3},
  {q:"Why can translating scientific knowledge into technology be difficult?", a:["Technological applications require no decisions beyond discovery","Practical applications require different purposes, constraints, and forms of knowledge","Technology can use science only after every theory is finished","Scientific knowledge automatically determines every useful device"], c:1},
  {q:"What does social construction of science mean in the chapter?", a:["Science has no methods for evaluating explanations","Scientific findings are simply invented without evidence","Scientific knowledge exists independently of institutions","Scientific activity can be influenced by social, political, organizational, and economic conditions"], c:3},
  {q:"What is the chapter's overall conclusion about science and technology?", a:["Science develops independently while technology follows a separate path","They are distinct enterprises that often intersect and influence one another","Science and technology have identical purposes despite different terminology","Technology is simply science applied immediately to practical problems"], c:1},
  {q:"Why can science and technology benefit from close contact?", a:["Each can provide knowledge, tools, or methods that support the other's development","They must become identical enterprises to make progress","Technology can progress only when science controls every technical decision","Scientific research becomes unnecessary once technology develops"], c:0},

  // =========================
    ],
    "CHAPTER 10": [
  // CHAPTER 10
  // =========================
  {q:"What did Thomas Hunt Morgan's research help establish about genes?", a:["Chromosomes were identified as the location of key agents of heredity","DNA was shown to be unrelated to inherited characteristics","Genetic traits were found to develop independently of cells","Genes were shown to exist only outside chromosomes"], c:0},
  {q:"What discovery in the 1940s clarified the molecular basis of genes?", a:["DNA was identified as a key constituent of genes","Genes were shown to consist mainly of environmental experiences","Proteins were shown to be unrelated to cell reproduction","Chromosomes were shown to contain no hereditary information"], c:0},
  {q:"What did Watson and Crick determine in 1953?", a:["The first practical use of PCR machines","The complete sequence of every human gene","The first successful transfer of genes between organisms","The molecular structure of DNA as a double helix"], c:3},
  {q:"Why was the 1953 DNA discovery important?", a:["It provided a foundation for expanding knowledge of genetic function","It immediately allowed scientists to edit every human gene safely","It eliminated the need for further genetic research","It proved all traits could be predicted from one chromosome"], c:0},
  {q:"What advance occurred in the 1970s?", a:["Researchers learned to separate and isolate portions of DNA","Researchers developed the first commercial GM crops","Researchers cloned the first adult human being","Researchers completed the full human genome sequence"], c:0},
  {q:"What did isolating portions of DNA make possible?", a:["Preventing DNA from reproducing inside living cells","Transferring genetic material from one organism to another","Replacing chromosomes with manufactured proteins","Determining every environmental cause of inherited traits"], c:1},
  {q:"What did polymerase chain reaction machines allow?", a:["Researchers could obtain and analyze large amounts of DNA","Researchers could replace DNA sequencing with visual inspection","Researchers could create complete organisms from nonliving material","Researchers could eliminate mutations from populations"], c:0},
  {q:"What did automated sequencing and mapping machines contribute?", a:["They helped make large-scale genome sequencing increasingly feasible","They replaced computers in genetic information analysis","They made genetic mapping unnecessary for heredity research","They prevented researchers from identifying gene sequences"], c:0},
  {q:"What was the Human Genome Project?", a:["A private program designed only to patent human genes","An international effort to determine and map the human genetic sequence","A medical program focused only on genetic disease treatment","A farming project designed to create modified crops"], c:1},
  {q:"Which organizations coordinated the Human Genome Project?", a:["The FDA and Department of Agriculture","The National Science Foundation and Department of Defense alone","The World Health Organization and United Nations","The U.S. Department of Energy and National Institutes of Health"], c:3},
  {q:"What was Celera Genomics' role in the Human Genome era?", a:["It was a private company that also worked to decode the human genome","It was a university laboratory opposing genome sequencing","It was a government agency regulating genetic patents","It was a medical organization specializing in counseling"], c:0},
  {q:"What happened in early 2001 regarding the human genome?", a:["The Human Genome Project ended before publishing sequence information","Celera became the sole organization responsible for sequencing","The Human Genome Project and Celera separately published rough drafts","The complete human genome was edited to remove diseases"], c:2},
  {q:"Why did gene sequencing create patenting controversies?", a:["It raised questions about ownership and intellectual property over biological information","Scientists agreed biological discoveries could never have value","Gene sequencing made intellectual property law unnecessary","Gene patents automatically prevented genetic research"], c:0},
  {q:"What is the 'genetic fix'?", a:["A farming method replacing crops with synthetic plants","Using computers to repair genetic databases","A diagnostic method avoiding genetic information","The expectation that genetic intervention can correct particular biological problems"], c:3},
  {q:"What does genetic screening allow?", a:["Removal of all harmful genes from an individual's cells","Identification of genetic characteristics or risks associated with conditions","Replacement of medical diagnosis with genetic information alone","Guaranteed prediction of every person's future health outcome"], c:1},
  {q:"What is genetic mapping used for?", a:["Preventing comparisons among genetic differences","Replacing DNA with artificial chromosomes in every cell","Determining social characteristics without biological information","Locating and identifying patterns or sequences within genetic information"], c:3},
  {q:"What concern is associated with genetic information privacy?", a:["Genetic testing makes discrimination impossible","Genetic information has no relationship to personal privacy","Genetic information can always be interpreted without uncertainty","Genetic information could affect how people are treated by institutions"], c:3},
  {q:"What is GINA?", a:["A biotechnology company specializing in modified crops","A U.S. law addressing discrimination based on genetic information","A research program that completed the Human Genome Project","A genetic screening technique for inherited mutations"], c:1},
  {q:"What major issue surrounds genetically modified crops?", a:["They have no agricultural benefits or practical applications","Their benefits, risks, limitations, and agricultural effects are debated","They are identical to conventionally bred crops in every respect","They eliminate every environmental and economic farming problem"], c:1},
  {q:"What does the chapter discuss about GM crops?", a:["Genetic technologies can alter traits while raising questions about risks and control","GM crops are used only for medical research","Agricultural biotechnology removes the need for farmers","Genetic modification has no effect on crop characteristics"], c:0},
  {q:"What is cloning in genetic technologies?", a:["Sequencing DNA without reproducing biological material","Using genetic screening to compare unrelated people","Changing every gene to create a completely unrelated individual","Producing a genetically similar organism or biological material from a source"], c:3},
  {q:"Why does cloning raise ethical questions?", a:["Cloning automatically produces identical adults and experiences","It raises issues involving identity, reproduction, safety, and acceptable uses","Cloning has no biological effects and creates no ethical questions","Ethical concerns arise only because cloning lacks scientific research"], c:1},
  {q:"What does pluripotency mean in stem-cell research?", a:["The inability of cells to develop into specialized structures","The capacity of cells to develop into multiple specialized cell types","The ability of cells to survive without genetic information","The ability of a cell to produce only one specialized tissue"], c:1},
  {q:"What is a potential benefit of stem-cell technologies?", a:["They make genetic screening unnecessary for medicine","They may contribute to future therapies using specialized cells or tissues","They guarantee cures for every inherited disease","They eliminate ethical questions around genetic technology"], c:1},
  {q:"Why does Chapter 10 discuss eugenics?", a:["Eugenics was unrelated to heredity or reproductive control","Historical efforts to control reproduction raise concerns about genetic intervention","Eugenics demonstrated that genetic technologies are always successful","Historical eugenics programs focused only on agricultural crops"], c:1},

  // =========================
    ],
    "Tharakan Article": [
  // Tharakan Article
  // =========================
  {q:"What does indigenous knowledge (IK) refer to in Tharakan’s discussion?", a:["Knowledge created only by governments", "Knowledge limited to modern industry", "Knowledge unique to a given culture", "Knowledge produced only by universities"], c:2},
  {q:"What distinguishes the modern scientific knowledge system (MSKS) from IKS?", a:["MSKS is rooted in formal academic research", "MSKS is restricted to agricultural communities", "MSKS is passed mainly through oral traditions", "MSKS develops only through local trial and error"], c:0},
  {q:"Which examples does Tharakan identify as indigenous knowledge systems that have survived?", a:["Ayurveda, universities, and industrial science", "Ayurveda, Unani, and acupuncture", "Panchayathi Raj, MSKS, and PCR", "Vrikshaturveda, MSKS, and patents"], c:1},
  {q:"At the community level, what role can IKS play?", a:["It replaces every form of formal government", "It focuses only on preserving historical records", "It helps communities make decisions about local issues", "It prevents communities from adopting outside ideas"], c:2},
  {q:"What difficulty does Tharakan identify when defining who is indigenous?", a:["Social and cultural contexts can make identification difficult", "Governments use exactly the same definition everywhere", "Indigenous knowledge has no connection to geography", "Indigenous groups always reject their own traditions"], c:0},
  {q:"Which term is presented as closely related to indigenous knowledge?", a:["Industrial knowledge", "Traditional knowledge", "Corporate knowledge", "Automated knowledge"], c:1},
  {q:"What is a major characteristic of an indigenous knowledge system?", a:["It must be formally published before being used", "It is separated from everyday community activities", "It is locally based and grounded in culture and geography", "It depends entirely on advanced laboratory equipment"], c:2},
  {q:"How is much indigenous knowledge traditionally transmitted?", a:["Through oral tradition, mimicry, and practical application", "Through universities, exams, and professional licensing", "Through patents, journals, and laboratory reports", "Through international agencies and formal certification"], c:0},
  {q:"How does IKS commonly develop according to Tharakan?", a:["Through theoretical research conducted in universities", "Through international standards imposed on communities", "Through commercial testing by large corporations", "Through daily engagement and trial and error"], c:3},
  {q:"Why does Tharakan reject the idea that indigenous knowledge is static?", a:["IKS can only change when governments approve it", "IKS is replaced whenever modern science becomes available", "IKS changes in response to environmental and social stressors", "IKS must remain unchanged to preserve cultural identity"], c:2},
  {q:"What is generally expected regarding intellectual property within IKS?", a:["Knowledge is always privately owned by individual inventors", "Knowledge must be patented before community use", "Knowledge is normally sold to outside organizations", "Knowledge is commonly shared for community benefit"], c:3},
  {q:"How can indigenous knowledge be distributed within a community?", a:["It is restricted to government officials and researchers", "It can vary by age, seniority, gender, or subgroup", "It is always equally distributed among every resident", "It is automatically available only to international organizations"], c:1},
  {q:"Who may be recognized as an expert and knowledge bearer in an IKS community?", a:["Only a government employee with formal certification", "Only a person who has registered a patent", "Only a scientist with a university research position", "A respected person with experience or recognized authority"], c:3},
  {q:"What does Tharakan identify as an example of local-level IKS decision-making?", a:["The international patent registration system", "The panchayathi raj form of local government", "The modern university research system", "The global industrial manufacturing system"], c:1},
  {q:"Why are IKS important for community capacity building?", a:["They can support technologies that address community challenges", "They prevent communities from using modern technologies", "They focus exclusively on producing commercial exports", "They eliminate the need for community participation"], c:0},
  {q:"What is an important philosophy behind appropriate technology (AT)?", a:["Replacing local resources with imported equipment", "Maximizing production regardless of local conditions", "Empowering communities while addressing basic needs", "Concentrating technology ownership outside the community"], c:2},
  {q:"Which characteristic is commonly associated with appropriate technologies in the paper?", a:["Operating only at large industrial scales", "Depending entirely on imported machinery", "Requiring very large amounts of capital", "Using local materials and resources"], c:3},
  {q:"What community role is emphasized throughout the development of appropriate technology?", a:["The community should be included throughout the development process", "The community should participate only after evaluation is finished", "The community should only receive the completed technology", "The community should be excluded from technical decisions"], c:0},
  {q:"At what stage should local community inclusion in AT development begin?", a:["After the technology has been commercially marketed", "At the technology conceptualization stage", "Only after outside experts complete all testing", "Only after the technology has been implemented"], c:1},
  {q:"What qualities should an appropriate technology have regarding changing circumstances?", a:["It should require specialized imported materials", "It should remain fixed after its initial design", "It should be adaptable and flexible", "It should avoid modification by local users"], c:2},
  {q:"What environmental principle does Tharakan associate with appropriate technology?", a:["It should eliminate adverse environmental impacts", "It should depend on increasingly scarce resources", "It should avoid considering environmental consequences", "It should prioritize production over environmental effects"], c:0},
  {q:"Which basic needs are identified as targets for appropriate technologies?", a:["Clean water, safe food, healthcare, and education", "Military equipment, exports, and financial services", "Large factories, highways, and commercial buildings", "Luxury products, entertainment, and tourism"], c:0},
  {q:"How can IKS contribute to the development of appropriate technology?", a:["It can provide only historical information with no practical value", "It can replace every scientific method used in technology development", "It can prevent communities from adapting existing technologies", "It can provide locally developed knowledge for addressing community needs"], c:3},
  {q:"What does Tharakan suggest should happen after community needs are identified?", a:["Relevant IKS practices should be identified through community engagement", "Outside technologies should automatically be selected", "Only international development agencies should determine the solution", "All local practices should immediately be discarded"], c:0},
  {q:"What is one sustainability benefit of drawing from IKS for AT development?", a:["It prevents communities from developing new approaches", "It can strengthen practices suited to local conditions", "It guarantees that every traditional practice is environmentally harmless", "It removes the need to evaluate technologies scientifically"], c:1},
  {q:"What plant is highlighted as an example of indigenous knowledge used in health and agriculture?", a:["Wheat", "Bamboo", "Neem", "Corn"], c:2},
  {q:"For which areas has turmeric been used in indigenous practices according to the paper?", a:["Only construction, transportation, and mining", "Only water treatment, housing, and electricity", "Only communication, education, and finance", "Agriculture, animal husbandry, and health"], c:3},
  {q:"What is vrikshaturveda described as?", a:["A laboratory method for sequencing agricultural genomes", "An older IKS focused on organic and natural agricultural practices", "A modern industrial system for producing synthetic fertilizers", "A government program for patenting agricultural inventions"], c:1},
  {q:"What traditional inputs are discussed in relation to vrikshaturveda?", a:["Cow dung and biomass waste", "Metal alloys and processed plastics", "Imported fertilizers and industrial solvents", "Synthetic pesticides and petroleum products"], c:0},
  {q:"Which ingredients are described as being used in a traditional plant spray discussed by Tharakan?", a:["Turmeric, rice, wheat, and bamboo", "Water, sand, charcoal, and limestone", "Neem oil, salt, sugar, and vinegar", "Cow urine, yogurt, milk, and ghee"], c:3},
  {q:"Why is indigenous water knowledge important to appropriate technology?", a:["It requires replacing traditional systems with centralized infrastructure", "It prevents communities from responding to seasonal rainfall patterns", "It includes local approaches to sourcing, conserving, storing, and treating water", "It focuses only on transporting water between major cities"], c:2},
  {q:"Which traditional water tank systems are mentioned as examples from India?", a:["Ayurveda, Unani, and acupuncture", "Ghee, biomass, and vrikshaturveda", "Ery, kere, and cheruva", "Panchayathi, neem, and turmeric"], c:2},
  {q:"Why does Tharakan discuss scientific study of practices such as turmeric use?", a:["To prevent traditional knowledge from being shared locally", "To prove that all traditional practices are automatically effective", "To replace all indigenous practitioners with laboratory scientists", "To understand the mechanisms behind potential health effects"], c:3},
  {q:"Why has the Chinese government supported institutes studying traditional medical practices?", a:["To restrict acupuncture to private commercial organizations", "To provide systematic and scientific study of those practices", "To eliminate traditional medicine from Chinese healthcare", "To prevent biomedical researchers from studying indigenous practices"], c:1},
  {q:"What issue does Tharakan identify as important for protecting IKS-based technologies?", a:["International advertising and product branding", "University rankings and research funding", "Intellectual property and protection of knowledge bearers", "Transportation costs and industrial automation"], c:2},
  {q:"What does Tharakan suggest regarding indigenous knowledge and patents?", a:["IK should be researched and given due credit when relevant", "Only outside researchers should receive credit for indigenous discoveries", "IK should never be considered in intellectual property decisions", "Traditional knowledge should automatically become private property"], c:0},
  {q:"What government-supported effort in India is mentioned for documenting indigenous knowledge?", a:["The National Industrial Agriculture Program", "The Global Indigenous Technology Registry", "The National Mission for Manuscripts", "The International Technology Patent Authority"], c:2},
  {q:"What kinds of activities should institutions support for indigenous knowledge management?", a:["Access, documentation, sharing, and digital dissemination", "Secrecy, privatization, export restrictions, and commercialization", "Industrial production, patenting, advertising, and licensing", "Centralization, replacement, automation, and standardization"], c:0},
  {q:"How does the holistic approach of IKS differ from a disciplinary approach?", a:["IKS considers problems systemically rather than separating them into isolated parts", "IKS studies only one scientific discipline at a time", "IKS avoids considering relationships between environmental factors", "IKS focuses exclusively on theoretical explanations of problems"], c:0},
  {q:"What problem can occur when development institutions fail to reflect the needs of stakeholders equitably?", a:["Technologies and resource-management practices can fail", "All stakeholders receive identical benefits from the project", "Traditional knowledge automatically becomes more widely accepted", "Community participation becomes unnecessary for development"], c:0},
  {q:"Why could focusing only on farmers create problems in water management?", a:["Industrial users would always receive too much water by law", "Water demand would disappear once agricultural needs were met", "Other major water users, such as commerce and industry, may be ignored", "Farmers would automatically control every community water source"], c:2},
  {q:"What question does Tharakan recommend asking before developing an appropriate technology?", a:["Can the local community be removed from the process?", "Has the problem been tackled before?", "Can the technology be patented immediately?", "Can outside experts make every decision without consultation?"], c:1},
  {q:"What equity-related questions should be considered in AT development?", a:["Which technology requires the most imported equipment?", "Which outside company can maximize its profits?", "Who benefits and who bears the costs or burdens?", "Which community members can be excluded from decisions?"], c:2},
  {q:"What does Tharakan argue about outside-community experts?", a:["They should automatically replace local knowledge holders", "Their involvement should be considered rather than assumed to be necessary", "They should be excluded from every technology project", "They should always control the development process"], c:1},
  {q:"How does Tharakan characterize the traditional development model criticized in the conclusion?", a:["It often follows a top-down approach centered on modern scientific knowledge", "It is primarily based on grassroots community decision-making", "It is designed mainly around small-scale community technologies", "It always begins with indigenous knowledge and local institutions"], c:0},
  {q:"What basic problem does Tharakan say remains in many developing communities?", a:["Basic needs such as clean water and healthcare remain unmet", "Appropriate technologies are already available to every household", "Traditional knowledge has completely disappeared from rural areas", "All communities have equal access to advanced technologies"], c:0},
  {q:"What historical figure is connected to the early rationale of the appropriate technology movement?", a:["Thomas Edison", "Mahatma Gandhi", "Alexander Graham Bell", "Isaac Newton"], c:1},
  {q:"Which publication is associated in the paper with the articulation of appropriate technology in the 1970s?", a:["Wiener’s Cybernetics", "Darwin’s On the Origin of Species", "Schumacher’s Small Is Beautiful", "Smith’s The Wealth of Nations"], c:2},
  {q:"What does the paper propose about IKS and MSKS?", a:["They can be integrated while recognizing their complementary strengths", "MSKS should always replace IKS in development projects", "IKS should replace all formal scientific research", "They are completely incompatible and must remain separate"], c:0},
  {q:"How can MSKS contribute to IKS according to the conclusion?", a:["MSKS can help validate indigenous knowledge through rigorous study", "MSKS should eliminate community participation in technology development", "MSKS should prevent indigenous practices from being documented", "MSKS should treat all indigenous practices as scientifically invalid"], c:0},

  // =========================
    ],
    "Young Article": [
  // Young Article
  // =========================
  {q:"What is the main focus of Young’s article?", a:["How digital mapping replaces traditional geographic research", "How social media increases economic growth in northern cities", "How digital technologies reshape knowledge politics in Indigenous communities", "How urban governments regulate broadband infrastructure"], c:2},
  {q:"Which community is the central case study?", a:["A rural community in the American Midwest", "An Indigenous community in northern Australia", "A First Nations community in southern Ontario", "An Inuit community in the Canadian Arctic"], c:3},
  {q:"What does “knowledge politics” refer to?", a:["Processes that shape which forms of knowledge receive visibility and authority", "Government policies determining who may attend universities", "Technical standards organizing computer networks", "Political debates about the cost of digital devices"], c:0},
  {q:"What is Inuit Qaujimaningit (IQ)?", a:["The Inuit knowledge system discussed in the article", "A Canadian government telecommunications program", "A system for measuring Arctic Internet access", "A digital mapping platform used in Nunavut"], c:0},
  {q:"What can digital engagement do to local Indigenous knowledge systems?", a:["It always strengthens traditional knowledge by making it more accessible", "It completely eliminates the need for experiential learning", "It can erode practices needed to transmit and reproduce local knowledge", "It affects only economic activity and not cultural practices"], c:2},
  {q:"Where does most previous critical ICT research focus?", a:["Urban geographies in the Global North", "Rural communities throughout the Global South", "Traditional knowledge systems in developing countries", "Remote Indigenous communities in the Arctic"], c:0},
  {q:"What assumption about digital participation does Young criticize?", a:["That digital participation is automatically beneficial in instrumental ways", "That digital technologies can only be used for entertainment", "That Indigenous communities generally reject digital technologies", "That Internet access has no economic or political benefits"], c:0},
  {q:"What benefits are often assumed to result from digital participation?", a:["Reduced access to services and fewer economic opportunities", "Less communication with people outside the community", "Economic advances and access to better services and governance", "Greater dependence on local oral traditions and hunting"], c:2},
  {q:"What is less investigated than digital access questions?", a:["The knowledge politics that shape and constrain digital engagement", "The number of digital devices owned by government agencies", "The economic value of computer hardware manufacturers", "The technical speed of Internet connections in urban centers"], c:0},
  {q:"What does Young call for in ICT for development research?", a:["Greater attention to local context and postcolonial perspectives", "A stronger focus on urban Global North communities", "Less attention to Indigenous experiences of technology", "Greater reliance on universal technical standards"], c:0},
  {q:"How does Young describe IQ as a knowledge system?", a:["It focuses exclusively on empirical observations of weather", "It is seamless, without strict divisions between spiritual, empirical, and sociocultural knowledge", "It consists primarily of written information stored in digital archives", "It is divided into separate scientific, spiritual, and economic departments"], c:1},
  {q:"How is the Arctic environment viewed within IQ?", a:["As only a collection of physical resources", "As unrelated to social and spiritual life", "As something understood primarily through digital representations", "As a moral agent that can be angered by disrespect"], c:3},
  {q:"Why are rituals of respect important?", a:["They are required by Canadian environmental regulations", "They allow digital technologies to function more effectively outdoors", "They help ensure material activities such as hunting respect spiritual relationships", "They are mainly used to record information for government agencies"], c:2},
  {q:"Why is Arctic environmental knowledge described as a matter of survival?", a:["Modern technologies cannot operate anywhere in the Arctic", "Inuit communities have historically had no social systems", "The Arctic is one of the least hospitable environments in the world", "The Arctic contains no resources that can support human life"], c:2},
  {q:"How is learning within IQ characterized?", a:["As dependent on formal examinations and written certification", "As experiential, relational, and deeply contextual", "As primarily classroom-based and text-centered", "As separated from physical activities and social relationships"], c:1},
  {q:"Where must knowledge be produced according to IQ’s experiential learning model?", a:["Through embodied practices out on the land", "Through written reports produced by outside researchers", "Only inside schools and community offices", "Primarily through online courses and social media"], c:0},
  {q:"Why is experiential learning important to IQ?", a:["It prevents people from learning practical skills from elders", "It separates knowledge from material action and the environment", "It allows abstract representations to replace direct experience", "It helps people interpret and adapt to changing and inhospitable conditions"], c:3},
  {q:"How does IQ differ from knowledge simply held and recited?", a:["It is primarily stored in books rather than practiced in daily life", "It involves skills that must be constantly practiced and adapted", "It is preserved by avoiding changes in environmental conditions", "It depends mainly on memorizing information without applying it"], c:1},
  {q:"What role does the natural world play in IQ?", a:["It is mainly a backdrop for classroom education", "It is important only for recreational activities", "It is a key site for knowledge transmission and learning", "It is avoided because knowledge is learned indoors"], c:2},
  {q:"Which two Inuktitut terms distinguish forms of learning?", a:["Isuma and Igloolik", "Qaujimaningit and Nunavut", "Inuktitut and Qiniq", "Pilimmaksaq- and ilinniaq-"], c:3},
  {q:"What does pilimmaksaq- describe?", a:["Learning through formal written examinations", "Learning through receiving classroom instruction", "Learning by reading digital materials", "Learning by doing through experiential practice"], c:3},
  {q:"What does ilinniaq- describe?", a:["Learning by receiving teaching in a classroom-based model", "Learning through social media interaction", "Learning through direct work on the land", "Learning through family hunting activities"], c:0},
  {q:"What role do family members and elders play?", a:["They mainly teach through online video platforms", "They transmit knowledge orally, particularly through stories", "They primarily provide formal classroom instruction", "They focus on teaching digital technology skills"], c:1},
  {q:"What happened to outdoor activity among many children in Igloolik?", a:["Children increasingly spent free time building traditional boats outdoors", "Children spent substantially more time visiting elders outside the community", "Many children were observed spending more time indoors using digital devices", "Children stopped using the Internet and returned to traditional activities"], c:2},
  {q:"Why does staying indoors matter for IQ transmission?", a:["It reduces participation in embodied and collective practices that teach knowledge", "It allows children to experience the land through digital representations", "It increases opportunities for children to learn traditional skills directly", "It strengthens relationships between youth and elders through online communication"], c:0},
  {q:"Which activities did participants describe as declining?", a:["Attending schools and participating in classroom activities", "Watching movies and communicating through digital services", "Using computers, smartphones, and online games", "Playing with wagons, homemade boats, and street sports"], c:3},
  {q:"Why are wooden boats and team activities important examples?", a:["They are embodied activities that teach practical survival skills", "They demonstrate why digital technologies should replace traditional practices", "They allow children to avoid interacting with elders", "They are recreational activities without a connection to IQ"], c:0},
  {q:"What effect did participants associate with Internet use on Inuktitut?", a:["They believed it made Inuktitut the dominant language of the Web", "They believed it could contribute to reduced use of Inuktitut", "They found that Internet use had no relationship to language use", "They reported that Internet use eliminated English from digital spaces"], c:1},
  {q:"How did Internet use affect some family and social relationships?", a:["It eliminated disagreements within families and communities", "Participants reported reduced in-person interaction and more individualized behavior", "It made people more likely to spend time together outdoors", "It consistently increased visits between families and elders"], c:1},
  {q:"Why are elders particularly vulnerable to being left out of digital spaces?", a:["Some have limited infrastructure access or difficulty navigating the English-dominated Web", "Elders are prohibited from using social media by community rules", "Elders generally refuse to communicate with younger generations", "Elders have no role in Inuit knowledge transmission"], c:0},
  {q:"Why is reduced interaction between youth and elders significant?", a:["Youth depend on elders mainly for learning computer programming", "Elders play a central role in transmitting IQ", "Elders are the only people who use digital communication in Igloolik", "Elders are primarily responsible for maintaining Internet infrastructure"], c:1},
  {q:"What earlier colonial changes reduced youth-elder interaction?", a:["The creation of community social visits and traditional storytelling", "The development of Inuit hunting camps and traditional education", "The increased use of Inuktitut and land-based experiential learning", "Resettlement into larger communities and Western-style education and jobs"], c:3},
  {q:"How does digital engagement relate to those earlier colonial changes?", a:["It can reinforce and amplify them by further reducing youth-elder interaction", "It prevents Western-style education from affecting Inuit communities", "It has no relationship to previous changes in family and community structure", "It completely reverses their effects by restoring traditional knowledge transmission"], c:0},
  {q:"What online behavior did some participants criticize?", a:["Outdoor activities organized through digital groups", "Judgmental, critical, gossiping, and antagonistic behavior", "Digital preservation of Inuit language and culture", "Collaborative storytelling and respectful knowledge sharing"], c:1},
  {q:"How did some participants describe social media’s effect on community norms?", a:["It prevented people from criticizing or teasing one another", "It consistently strengthened traditional community norms in every situation", "It made online relationships identical to face-to-face relationships", "It could allow people to escape community norms and say things they would not say in person"], c:3},
  {q:"What limitation does Young identify about quantitative evidence?", a:["There were no historical records concerning Inuit communities", "There were no quantitative longitudinal studies documenting time spent with technology versus socializing or being outside", "There were no observations of people using computers or television", "There were no interviews with community members about digital technologies"], c:1},
  {q:"What two aspects of IQ does digital engagement undermine?", a:["Government services and Internet infrastructure", "Economic development and digital entrepreneurship", "Written communication and formal classroom education", "Embodied socialization and experiential learning out on the land"], c:3},
  {q:"Why can digital representations be a poor substitute for IQ?", a:["Digital media cannot contain any information about Inuit culture", "Digital representations always provide inaccurate information about the Arctic", "IQ cannot be fully represented digitally and depends heavily on embodied experience", "Inuit communities do not use digital technologies under any circumstances"], c:2},
  {q:"What can happen when technology accompanies Inuit out on the land?", a:["It eliminates the need for knowledge passed down by elders", "It always strengthens direct experiential learning and traditional practices", "It prevents people from using digital information while hunting", "It can replace experiential learning with more instrumental modes of thinking"], c:3},
  {q:"How can digital engagement relate to Western governance and classroom education?", a:["It can reinforce forms that marginalize the role of IQ within Inuit communities", "It completely removes Western influences from Inuit knowledge systems", "It prevents governance structures from affecting Indigenous knowledge", "It makes classroom education identical to experiential learning"], c:0},
  {q:"What is the broader meaning of “epistemic violence” in the article?", a:["Physical violence caused directly by digital devices", "The destruction of computer networks through political conflict", "Violence between individuals caused only by online arguments", "Processes that undermine or marginalize local ways of knowing"], c:3},
  {q:"Does Young present digital technology as entirely harmful?", a:["Yes; he argues that all Internet use should be eliminated", "No; he emphasizes that digital engagement can be both empowering and marginalizing", "No; he argues that digital technologies have only positive effects", "Yes; he argues that digital technology provides no useful benefits"], c:1},
  {q:"What positive uses of digital technology did participants identify?", a:["Digital friendships, entertainment, online bill payment, and cultural projects", "Replacing all land-based learning with online education", "Eliminating traditional foods and cultural practices", "Reducing communication among Inuit communities"], c:0},
  {q:"How did Zacharias Kunuk describe a positive use of digital technology?", a:["Using social media to replace land-based hunting knowledge", "Using digital audio and video to support storage of Inuit culture and knowledge", "Using technology to eliminate the need for Inuit cultural practices", "Using digital platforms to prevent youth from learning Inuktitut"], c:1},
  {q:"How could mobile games and Inuktitut content support youth?", a:["They could help youth remain more connected to their culture", "They could make land-based learning unnecessary", "They could encourage youth to abandon the Inuit language", "They could replace all interactions with elders and families"], c:0},
  {q:"What is the Nunavut Hunting Stories of the Day Facebook group intended to do?", a:["Provide online entertainment unrelated to Inuit hunting practices", "Restrict knowledge sharing to government officials", "Share hunting stories and knowledge and encourage youth to go out on the land", "Replace hunting with virtual games and simulations"], c:2},
  {q:"How can the hunting stories group contribute to IQ?", a:["It can move all hunting knowledge into English-language digital spaces", "It can prevent knowledge from being shared between communities", "It can facilitate knowledge exchanges and help rejuvenate lost local hunting knowledge", "It can eliminate the need for youth to learn directly on the land"], c:2},
  {q:"What does Young suggest about improved Arctic connectivity?", a:["It will have no effect on cultural and knowledge practices", "It will always strengthen IQ without creating any risks", "It will necessarily eliminate traditional Inuit knowledge", "It may support IQ in some ways while marginalizing it in others"], c:3},
  {q:"What broader research agenda does Young call for?", a:["More research focused exclusively on urban communities in the Global North", "Less research into the social effects of ICTs", "More critical research on digital knowledge politics in Indigenous, rural, and Global South communities", "Research limited to measuring Internet infrastructure and access"], c:2},
  {q:"What central tension does the article identify about digital engagement?", a:["Digital technology separates communities completely from global networks", "Digital technology always empowers communities while eliminating traditional practices", "Digital technology can simultaneously empower communities and marginalize local knowledge", "Digital technology always marginalizes communities and provides no benefits"], c:2},
  {q:"What is the main lesson for ICT4D practitioners?", a:["They should assume connectivity benefits every community in the same way", "They should anticipate unintended consequences and consider local knowledge politics", "They should avoid examining technology’s interaction with local cultural practices", "They should focus only on increasing access to digital infrastructure"], c:1},

  // =========================
    ],
    "Chapter 1 and 4 Review": [
  // Chapter 1 and 4 Review
  // =========================
  {q:"Which description best matches Volti’s definition of technology?", a:["A social institution created primarily to distribute goods and services equally","A scientific method focused on discovering universal laws through controlled experiments","A system based on knowledge, physical objects, and organization for specific goals","A collection of machines designed mainly for entertainment and personal convenience"], c:2},
  {q:"Which set correctly identifies the principal components of technology in Volti’s definition?", a:["Machines, mathematics, experiments, and scientific theories","Objects, inventions, industries, and government institutions","Science, politics, economics, and cultural values","Artifacts, knowledge, technique, and organization"], c:3},
  {q:"What is one limitation of Volti’s definition of technology?", a:["It assumes technologies are created to meet existing needs, although some seek applications","It assumes technology is always controlled by governments rather than individual inventors","It excludes physical artifacts and focuses entirely on knowledge and social relationships","It argues that technological development always produces practical solutions to urgent problems"], c:0},
  {q:"What do the Greek roots of the word technology indicate about its original meaning?", a:["Tekne referred to the art or skill of doing, while logos referred to informed knowledge","Tekne referred to scientific progress, while logos referred to physical machines and tools","Tekne referred to written laws, while logos referred to practical engineering techniques","Tekne referred to social organization, while logos referred to economic production and trade"], c:0},
  {q:"Why has technology been important to the survival of Homo sapiens?", a:["Technology allows humans to avoid all environmental challenges through scientific prediction","Technology makes humans naturally stronger, faster, and more physically capable than other species","Technology compensates for physical limitations through imagination, creativity, and tool use","Technology eliminates the need for social cooperation by allowing individuals to solve problems alone"], c:2},
  {q:"What does McLuhan’s statement about shaping technologies and being shaped by them emphasize?", a:["Technology and social organization have a reciprocal relationship that influences human behaviour","Social organization determines every technological development without technologies affecting society","Technology only changes physical environments and has little influence on social behaviour","Technology develops independently of society and eventually controls all social organization"], c:0},
  {q:"Why is social organization considered an essential component of technology?", a:["Technologies require social relationships to create, maintain, operate, and support them","Social organization replaces artifacts by providing the physical objects needed for technological systems","Social organization provides the scientific theories required to make every technology function","Social organization ensures that every technological invention is used for practical human needs"], c:0},
  {q:"Which statement best explains why technology is often associated with social progress?", a:["Technology always improves social justice and guarantees a more equal distribution of goods","Technology automatically produces moral improvement whenever new inventions are introduced","Technological development is dynamic and cumulative, involving continuous improvement of existing technologies","Technological change is measured more easily than every other form of human cultural development"], c:2},
  {q:"Why does the text argue that technological progress does not necessarily equal overall social progress?", a:["A society can be technologically advanced while remaining deficient in social justice and other areas","Technological development usually prevents societies from developing strong artistic and social relationships","Technological progress is impossible unless a society first achieves complete political and economic equality","A society cannot be considered technologically advanced unless all citizens have identical resources"], c:0},
  {q:"What does the concept of technology as a metaphor demonstrate?", a:["Technological principles can influence how people understand and organize areas of social life","Technological development is mainly a linguistic process rather than a material or organizational one","Technological metaphors are limited to machines and cannot be applied to social institutions","Technologies are primarily symbols that have no practical influence on human behaviour"], c:0},
  {q:"What does rationality mean in the context of technological development?", a:["Problems can only be solved when scientists discover a single universally accepted explanation","Problems can be studied systematically and solutions can be pursued through objective reasoning","Technological decisions should prioritize moral values even when objective analysis is unavailable","Problems should be solved according to tradition without questioning established assumptions"], c:1},
  {q:"Why does the text caution against assuming that rationality always produces moral superiority?", a:["Rational thought prevents technological development by making people reject practical solutions","Rationality requires subjective interpretation, which prevents people from making systematic technological decisions","Rational approaches are useful only for simple problems and cannot be applied to large social issues","Extreme rational thought can contribute to tragic moral transgressions such as those associated with Nazi Germany"], c:3},
  {q:"What does technological determinism emphasize when explaining social change?", a:["Social and cultural factors are given priority, with human agency controlling technological development","Economic and political institutions are considered more important than technological factors in every situation","Technological factors are given priority, with technology viewed as having a life of its own","Technological development is viewed as a deliberate process controlled entirely by individual users"], c:2},
  {q:"What does social constructivism emphasize when explaining technological change?", a:["Technologies are viewed as systems that develop without influence from political or economic conditions","Technological development is treated as an independent force that operates outside social influence","Socio-cultural factors and human agency are given priority in shaping technological development","Scientific discoveries are considered the only major factors responsible for technological development"], c:2},
  {q:"Why are technological determinism and social constructivism both limited as complete explanations?", a:["Human agency controls technology completely, so technological factors have no influence on social change","Technology affects society, but social, economic, political, and cultural factors also influence its development","Technology is completely independent of society, making social explanations unnecessary in technological studies","Technology develops only from scientific discoveries, making both perspectives incomplete for that reason"], c:1},
  {q:"How does technological alienation arise in a modern technological society?", a:["People may rely on technologies they do not understand, leaving them feeling powerless or alienated","People experience alienation because technologies eliminate all opportunities for social organization","People become alienated because modern technologies are unavailable to most members of society","People become technologically alienated only when they reject all forms of scientific knowledge"], c:0},
  {q:"How does the history of high-speed aircraft illustrate technological change?", a:["Aircraft technology developed from a single scientific discovery that immediately produced modern aircraft","Aircraft development occurred independently of social needs and did not involve earlier technological advances","Aircraft technology advanced mainly because engineers followed one fixed solution rather than exploring alternatives","Aircraft development involved cumulative changes as existing technologies were improved and new problems addressed"], c:3},
  {q:"Why can a technology such as an automobile be understood as more than a physical artifact?", a:["Its technological importance comes only from the materials used to manufacture the vehicle","Its use depends on social relationships and organizational structures that support transportation","Its existence eliminates the need for roads, maintenance systems, or other forms of organization","Its operation depends entirely on scientific knowledge and does not involve social relationships"], c:1},
  {q:"What does the history of the pen demonstrate about technological change?", a:["Technological change occurs only when a completely new object replaces every earlier version of a technology","Technological change is unrelated to production methods because only the final artifact matters","Technologies can shift from organic forms toward industrial production as techniques and materials change","Industrial technologies develop without connections to earlier forms, materials, or techniques"], c:2},
  {q:"Which statement best captures why a technology may appear progressive according to the text?", a:["Its progress is guaranteed whenever the technology increases production regardless of social consequences","Its progress is determined only by whether the technology is newer than the technology before it","Its progress can be measured objectively without considering cultural standards or social conditions","Its progress depends on the cultural beliefs and values used to judge what counts as improvement"], c:3},
  {q:"What does technical feedback refer to in the text?", a:["A process in which scientific theories are translated directly into machines without further adjustment","A process in which a technology receives social criticism before being accepted by the public","A method of replacing technological systems whenever users report dissatisfaction with their performance","A process in which information about a system’s performance is used to regulate or adjust that system"], c:3},
  {q:"How has the feedback principle entered the social realm?", a:["Ideas about regulating systems have been incorporated into areas such as stock markets and policy analysis","Feedback entered society primarily by replacing scientific research with political decision-making","Feedback has been limited to mechanical engines and has not influenced social organization","Social feedback refers only to personal opinions and has no connection to technological principles"], c:0},
  {q:"How does rationality relate to Weber’s idea of disenchantment?", a:["Rationality rejects systematic explanation and encourages greater reliance on traditional supernatural explanations","Rational approaches emphasize systematic explanation and contribute to a world increasingly understood through rational processes","Disenchantment refers to the rejection of technology because rationality prevents technological development","Rationality and disenchantment describe unrelated processes that have no connection to modern technological society"], c:1},
  {q:"What does the ancient history of Greece and Rome demonstrate about science and technology?", a:["Greek and Roman technological achievements always depended directly on complete scientific understanding","Rome developed mainly through scientific advances while Greece relied almost entirely on practical engineering","Science and technology could develop with limited connection, with Greece stronger in science and Rome stronger in technology","Science and technology were already fully integrated in the ancient world through common institutions"], c:2},
  {q:"What did Project Hindsight conclude about pure science and technological development?", a:["Pure science had very little to do with the development of the major weapon systems studied","Pure science had no relationship to technological development because technology never uses scientific knowledge","Pure science directly produced nearly all of the major weapon systems examined by the project","Pure science was found to be more important than engineering and practical knowledge in every case"], c:0},
  {q:"What did TRACES conclude about the relationship between scientific research and technological innovation?", a:["Technological innovations were shown to develop only before scientific research could explain them","Scientific research was found to prevent technological development whenever engineers pursued practical solutions","Scientific research was found to have little or no influence on any technological innovation examined","Some innovations, including oral contraceptives and VCRs, were direct results of scientific research"], c:3},
  {q:"How do science and technology differ in their basic purposes according to the text?", a:["Science pursues knowledge for its own sake, while technology is generally a means to an end","Science focuses on social organization, while technology focuses exclusively on discovering explanations for natural phenomena","Science and technology have identical purposes because both are primarily concerned with producing physical artifacts","Science focuses only on practical results, while technology pursues knowledge without concern for applications"], c:0},
  {q:"What question is typically associated with scientists, compared with technicians?", a:["Scientists ask whether something will work, while technicians ask whether an explanation is scientifically true","Scientists ask whether something is true, while technicians ask whether something will work","Scientists ask whether technology is useful, while technicians ask whether society will accept a scientific theory","Scientists ask whether something is profitable, while technicians ask whether something is morally acceptable"], c:1},
  {q:"Why could iron production continue before scientists understood the principles involved?", a:["Iron production was possible only because ancient societies had already developed modern scientific theories of heat","Technology can remain useful even when the scientific explanation for how it works is not yet understood","Scientists had already discovered the relevant principles but chose not to communicate them to technicians","Technological processes always require complete scientific explanations before they can be used successfully"], c:1},
  {q:"How can technology facilitate scientific discovery?", a:["Technological achievements can produce new knowledge and provide instruments that allow scientists to investigate phenomena","Technology facilitates discovery only when scientists directly control the design and production of every instrument","Technology mainly prevents scientific discovery by replacing experiments with practical engineering solutions","Technological development contributes to science only after all relevant scientific theories have already been established"], c:0},
  {q:"How did the steam injector contribute to scientific thinking about heat?", a:["Its primary contribution was to prove that technology and science were completely separate forms of human activity","Its development contributed to scientific knowledge and helped stimulate the development of a theory of heat","It prevented further scientific study of heat by providing a practical solution without generating new knowledge","It demonstrated that scientific theories always have to come before technological inventions can be developed"], c:1},
  {q:"Why can technology sometimes reach a plateau because of science?", a:["Technology reaches a plateau whenever scientists successfully explain a process that engineers have already mastered","Technology always stops developing when scientists disagree about the moral value of a particular invention","Technological plateaus occur because scientific research prevents engineers from considering more than one possible solution","Technological development may become limited when available scientific knowledge cannot explain or overcome a problem"], c:3},
  {q:"How does technology help legitimize scientific research?", a:["Technology provides devices and instruments for scientific inquiry and can demonstrate practical value from research","Technology supports science mainly by eliminating the need for theoretical explanations of natural phenomena","Technology legitimizes science only when scientific discoveries immediately produce commercially successful consumer products","Technology replaces scientific research by allowing engineers to discover all necessary knowledge through practical work"], c:0},
  {q:"How is scientific knowledge commonly translated into technology?", a:["Scientific knowledge becomes technology only when governments formally approve the scientific theory involved","A great deal of scientific knowledge is translated through the education and work of engineers","Scientific knowledge is translated mainly through social organizations rather than through engineers and technical practice","Scientific knowledge is translated directly into technology without requiring engineering education or practical development"], c:1},
  {q:"Why can science sometimes stifle technological development according to the text?", a:["Scientific research eliminates technological experimentation because engineers must always accept the first scientific explanation","Science always rejects practical applications, preventing engineers from using scientific knowledge in technological development","Science stifles technology mainly because scientists refuse to use instruments developed through technological innovation","Science may prefer a single answer, while technological development often proceeds from the idea that several solutions are possible"], c:3},
  {q:"Which characteristic is shared by both science and technology?", a:["Both are independent of social influences and develop through fixed methods that prevent unexpected outcomes","Both gather knowledge, develop cumulatively, use rational thought, and benefit from serendipity","Both require complete scientific understanding before development can proceed and both avoid cumulative change","Both focus exclusively on practical results and reject values, interpretation, and unexpected discoveries"], c:1},
  {q:"Why is the relationship between science and technology described as non-linear?", a:["Scientific and technological development occur separately, meaning neither can influence the other in a meaningful way","Science always produces technological applications directly, although some applications may take longer to become commercial","Technology always develops first and science simply explains the principles after technological problems have been solved","Scientific research can lead to technology, technology can stimulate science, and developments do not always follow one direction"], c:3},
  {q:"What does the story of Johannes Kepler and the beer or wine kegs illustrate?", a:["Scientists and technicians always approach the same problem using identical methods and identical standards of success","Scientific discovery depends entirely on technological invention, while technological development does not require measurement or observation","Scientific questions and technological problems can have different goals, even when both involve careful observation and measurement","Technological work is mainly theoretical, while scientific work is primarily concerned with finding practical applications"], c:2},
  {q:"Why might the early laser be considered an invention looking for an application?", a:["The laser illustrates how technologies always create immediate social benefits once their scientific principles are understood","The laser was created only after scientists identified one urgent practical problem that required a specific technological solution","The laser demonstrates that all inventions are designed to satisfy existing needs before any technical development begins","The technology existed before a clear practical use had been established, illustrating technology in search of a problem"], c:3},
  {q:"How did aerodynamics research in the 1930s affect aircraft development?", a:["Research created an impetus for major changes in aircraft power plants as existing approaches became inadequate","Research demonstrated that aircraft power plants could remain unchanged because aerodynamic improvements solved every technical problem","Research showed that aircraft development depended only on scientific theory rather than practical engineering and technological experimentation","Aerodynamics research mainly reduced the need for technological development by proving that existing aircraft designs were sufficient"], c:0},
  {q:"Why is techno-science an appropriate term under some conditions?", a:["Science and technology become completely independent, making it easier to identify which activities belong exclusively to each field","Techno-science describes situations where technology replaces scientific inquiry and eliminates the need for scientific knowledge","Techno-science refers only to scientific research that produces physical artifacts without involving engineering or technological practices","Science and technology become so closely integrated that the distinction between scientific inquiry and technological development becomes blurred"], c:3},
  {q:"Why might excessive emphasis on science and mathematics be problematic in engineering education?", a:["It ensures that engineers become unable to understand scientific principles and therefore cannot apply any technical knowledge","It may impede technological advance by giving insufficient attention to the multiple practical solutions possible in technology","It guarantees that engineers focus too heavily on social relationships rather than developing practical technological solutions","It prevents engineers from using rational thought because mathematical approaches are considered incompatible with technological development"], c:1},
  {q:"Who was John Ambrose Fleming in relation to early radio technology?", a:["He was involved in advancing early radio technology through his work with technological developments in the field","He was a Roman engineer whose aqueduct designs became the foundation for modern radio communication systems","He was a Greek scientist whose research established the first complete scientific theory of radio technology","He was an engineer who rejected scientific research and argued that radio could develop without technological experimentation"], c:0},
  {q:"What does the history of science and technology suggest about the idea that technology is simply applied science?", a:["Science and technology have historically been identical activities, with differences appearing only in modern industrial societies","Technology has often developed without complete scientific understanding, while technology has also stimulated scientific knowledge","Technology is always a direct application of scientific theories, although practical development may occur at different speeds","Technology depends entirely on prior scientific discovery, while scientific development is never influenced by technological achievements"], c:1},

  // =========================
    ],
    "Chapter 2 and 10 Review": [
  // Chapter 2 and 10 Review
  // =========================
  {q:"What does Volti mean when he describes technology as a subversive force?", a:["Technology primarily creates political institutions without significantly changing economic relationships","Technology is considered subversive only when governments deliberately restrict its development","Technology usually preserves existing social arrangements while producing only minor economic benefits","Technology can deliver benefits while disrupting existing economic and social arrangements"], c:3},
  {q:"Which sequence best illustrates older technologies being displaced by newer technologies?", a:["Telegraph, Pony Express, telephone","Pony Express, telegraph, telephone","Pony Express, telephone, telegraph","Telephone, Pony Express, telegraph"], c:1},
  {q:"How did smartphones contribute to the disruption caused by Uber and other ride-sharing services?", a:["Smartphones allowed ride-sharing companies to avoid the need for contractors and employment arrangements","Smartphones replaced transportation companies by directly providing vehicles to every passenger","Smartphone technology helped make ride-sharing services rapidly accessible and widely usable","Smartphones eliminated conflicts between ride-sharing companies and established transportation businesses"], c:2},
  {q:"What social disruption was associated with the rise of Uber?", a:["It created conflict with established transportation companies and contributed to precarious contractor employment","It caused transportation companies to become government agencies with standardized employment benefits","It reduced the use of smartphones while increasing employment security for traditional transportation workers","It eliminated competition between transportation companies and created more secure employment for drivers"], c:0},
  {q:"How did Caliente, Nevada, exemplify “death by dieselization”?", a:["Its economy depended on diesel-electric locomotives, which were replaced by steam locomotives and caused rapid growth","Its economy depended on steam locomotives, and the introduction of diesel-electric locomotives caused the town to decline","Its economy depended on automobiles, and the Interstate highway system caused the town to become a major city","Its economy depended on telecommunications, and telephone technology caused its transportation industry to disappear"], c:1},
  {q:"Who were the Luddites and what motivated their actions?", a:["Workers who feared unemployment and smashed machines associated with the loss of skilled employment","Factory owners who destroyed machines because technological change prevented them from increasing production","Engineers who protested against technology because scientific knowledge was replacing traditional manufacturing methods","Government officials who opposed new machinery because they believed technology was inherently irrational"], c:0},
  {q:"Why did the Luddites specifically target machinery?", a:["Machinery had caused food prices to fall so sharply that workers could no longer earn enough money to survive","Machinery prevented employers from producing enough goods and therefore reduced the need for skilled workers","Machinery was considered inherently dangerous by workers who opposed all forms of technological development","Machinery became a target of frustration because wider frames allowed cheaper, less-skilled labour to replace workers"], c:3},
  {q:"Why did Luddite outbreaks eventually cease by the middle of the nineteenth century?", a:["Governments required all workers to accept technological change without organizing or protesting against employers","Factory owners completely abandoned machines and returned to older forms of skilled labour","Workers became convinced that technological change would never affect their employment or working conditions","Worker protests eventually took more peaceful forms, including the formation of unions"], c:3},
  {q:"Why does technology not succeed or fail solely on its intrinsic merit?", a:["Technologies succeed only when scientists have completely explained their underlying scientific principles","Technological success depends primarily on whether individual users understand how the technology works","Social, political, and economic factors influence whether particular technologies succeed or fail","Technologies fail whenever they are expensive because governments and corporations refuse to support costly systems"], c:2},
  {q:"Why can powerful groups have a major influence over technological development?", a:["Powerful groups influence technology only by preventing scientists from conducting research into new technological systems","Expensive technologies are often controlled or sponsored by corporations and governments with particular interests","Corporations and governments have little influence because technological success depends entirely on intrinsic technical merit","Expensive technologies are usually controlled by individual consumers who determine their development independently"], c:1},
  {q:"What is meant by a technological fix?", a:["The replacement of an old technology with a newer one that performs the same technical function","The use of scientific research to identify a single correct solution to every social problem","The application of a technical solution to a problem that is fundamentally non-technical","The development of a technological system that prevents new social problems from emerging"], c:2},
  {q:"Why are technological fixes limited when applied to social problems?", a:["They may address symptoms while leaving the underlying social factors and causes unchanged","They are ineffective because social problems are always caused by a lack of technological development","They solve underlying causes too quickly, creating new technological systems before society can adapt","They usually fail because technological systems cannot operate in closed environments or controlled conditions"], c:0},
  {q:"Why are social problems different from technological problems?", a:["Social problems have multiple and complex causes, while technological problems are usually clearer and less ambiguous","Social problems are usually solved through technical procedures, while technological problems depend mainly on cultural beliefs","Social problems can be solved through closed systems, while technological problems require political negotiations and social conflict","Social problems usually have one clear technical cause, while technological problems involve many conflicting social causes"], c:0},
  {q:"What is a closed system in the context of technological fixes?", a:["A technological system that is controlled entirely by governments and cannot be used by private organizations","A system where all technological developments are prevented because the possible consequences cannot be predicted","A situation where technological solutions can operate within controlled boundaries, unlike complex social problems","A social system in which political conflicts are removed before technology is introduced to solve a problem"], c:2},
  {q:"Why can technological fixes create “residue” problems?", a:["Technological solutions always eliminate the original problem but require expensive machines to maintain the solution","Technological fixes fail because they cannot produce measurable results when applied to non-technical problems","Solving one part of a problem technically may leave other social factors unresolved or create additional problems","Technological systems operate only in closed environments and therefore cannot affect social relationships outside them"], c:2},
  {q:"What is technocracy?", a:["A political system in which workers collectively control technological development through unions and local organizations","A system in which corporations are prevented from influencing technological development or public policy","An approach that attempts to manage social problems through technical expertise and technological solutions","A form of government that rejects technical expertise and relies primarily on traditional political decision-making"], c:2},
  {q:"Why can technocracy appear appealing in theory?", a:["Technical government eliminates all disagreements because social problems can always be reduced to simple technological questions","Technical expertise suggests that complex problems can be managed through rational procedures and specialized knowledge","Technocracy allows political decisions to be avoided because technology automatically determines the best possible outcome","Technocracy guarantees that every social decision will benefit all groups equally without involving power or conflict"], c:1},
  {q:"Why does technocracy fail to work as completely as its advocates might expect?", a:["Social problems are always too simple for technical expertise, so political decision-making becomes unnecessary","Technical procedures are incapable of producing efficient results because technology cannot be used to solve any social problem","Technocracy fails because scientific management gives workers too much autonomy over workplace decisions","Social decisions involve power, conflict, and distribution of rewards that cannot simply be replaced by technical procedures"], c:3},
  {q:"What was the basic approach of Frederick W. Taylor’s Scientific Management?", a:["Managers avoided measuring work processes because workers were considered the best judges of production efficiency","Workers were given complete control over production methods so they could develop their own techniques and procedures","Scientific Management focused primarily on improving social relationships rather than measuring repetitive workplace tasks","Time and motion studies were used to determine how many motions workers should use to complete jobs"], c:3},
  {q:"Who was expected to benefit from Scientific Management?", a:["Workers gained complete autonomy while managers lost responsibility for setting production procedures and standards","Workers could avoid wasted time and earn more through piecework, while managers gained higher yields","Workers and managers benefited equally because Scientific Management eliminated the need for managerial authority","Managers received higher wages while workers were protected from all forms of workplace measurement and supervision"], c:1},
  {q:"Why did workers oppose Scientific Management?", a:["They opposed higher production because it prevented factories from introducing any new technological machinery","They resented losing the limited autonomy they had over how their work was performed","They rejected piecework because it guaranteed higher earnings and gave workers greater control over production decisions","They opposed time and motion studies because managers refused to use any procedures to measure workplace efficiency"], c:1},
  {q:"Why did managers also have concerns about Scientific Management?", a:["They were concerned that workers would no longer receive piecework payments and would instead receive higher fixed wages","They feared that their own decisions would become governed by scientific procedures and strict rules","They believed scientific procedures would give workers complete control over production and eliminate management positions","They opposed Scientific Management because it reduced workplace efficiency and prevented managers from increasing yields"], c:1},
  {q:"Why was Scientific Management limited to certain workplaces?", a:["It was effective only when workers had complete autonomy over production decisions and workplace procedures","It worked mainly in workplaces characterized by repetitive labour processes","It depended on workplaces where managers avoided measuring the number of motions required for individual jobs","It worked primarily in workplaces where employees performed highly creative and unpredictable tasks"], c:1},
  {q:"What is the basic fallacy of Scientific Management identified in the text?", a:["It assumes that social problems can never be influenced by technical procedures or organizational decisions","It assumes technological development is completely independent of political and economic factors affecting workplaces","It assumes workers should make every workplace decision without any involvement from managers or technical experts","It assumes administration and precise procedures can replace politics involving power, conflict, and social rewards"], c:3},
  {q:"What is meant by the “genetic fix”?", a:["Using genetic testing only to identify individuals who are likely to develop inherited physical characteristics","Using gene screening and manipulation to diagnose, cure, or prevent physiological and psychological disorders","Using DNA evidence to identify individuals in criminal investigations while protecting their genetic information","Using genetic technology primarily to increase agricultural production and reduce the cost of food cultivation"], c:1},
  {q:"What is DNA according to the description of the human genome?", a:["A collection of chromosomes that contains only the genetic information associated with inherited diseases","Long chains of genetic material containing instructions for building proteins and forming the basis of life","A scientific instrument used to identify genetic abnormalities during prenatal and postnatal screening","A technological process used to separate and isolate genetic material for medical treatment"], c:1},
  {q:"How did technological development contribute to the evolution of genetic science?", a:["Genetic science advanced primarily through agricultural technologies rather than instruments used to observe and analyze genetic material","Genetic science developed independently of technological tools because researchers could study genes without specialized equipment","Technological advances slowed genetic research by making the study of DNA more dependent on theoretical scientific explanations","Tools such as electron microscopes, automatic sequencers, mapping machines, and computers facilitated genetic research"], c:3},
  {q:"What was a major goal of the Human Genome Project?", a:["To identify and sequence the human genome through an international scientific effort","To establish a worldwide patent system that would give researchers exclusive ownership of human genes","To develop a centralized DNA database containing genetic information from every individual in participating countries","To create genetically modified humans by directly changing the genes associated with inherited disorders"], c:0},
  {q:"Why are patents on living organisms controversial?", a:["Patents prevent any commercial development of genetic technologies and therefore eliminate incentives for research","Patents are controversial because genetic technologies cannot be used for medical or agricultural applications once patented","Patents give governments permanent ownership of all genetic technologies rather than granting rights for a specified period","Patents grant exclusive rights and can create monopolies over genetic ideas, organisms, or processes"], c:3},
  {q:"What is one argument in favour of patents in genetic technology?", a:["Patents ensure that genetic discoveries remain unavailable to commercial organizations and private researchers","Patents can provide incentives for research and innovation through commercialization and licensing fees","Patents guarantee that genetic technologies will be distributed equally regardless of research and development costs","Patents prevent genetic research from producing new commercial enterprises by restricting licensing opportunities"], c:1},
  {q:"What is a major benefit associated with genetically modified crops?", a:["GM crops eliminate the need for pesticides, herbicides, irrigation, and other agricultural inputs in every environment","GM crops always produce greater yields than conventional seeds and completely eliminate agricultural costs","Some GM crops can have improved nutritional value, drought resistance, or lower cultivation costs","GM crops guarantee that low-income countries can produce food without purchasing seeds or using agricultural technologies"], c:2},
  {q:"Why are genetically modified crops controversial?", a:["Concerns include health effects, environmental impacts, cross-pollination, biodiversity loss, and long-term consequences","The main concern is that GM crops cannot be produced quickly enough to affect food production or agricultural practices","GM crops are controversial primarily because conventional selective breeding has always produced identical risks and outcomes","The controversy exists because GM crops are incapable of improving nutritional value or resistance to drought and pests"], c:0},
  {q:"Why might GM crops not completely solve food security problems in low-income countries?", a:["Food insecurity can involve inequality, war, unfair trade practices, and the high cost of GM seeds","Food security problems are unrelated to social and political factors because agricultural technology determines food distribution by itself","Food insecurity is caused only by insufficient crop yields, so GM crops are always an appropriate technical solution","GM crops cannot be cultivated in low-income countries because bio-engineering requires industrialized farming systems everywhere"], c:0},
  {q:"How do genetically modified crops illustrate limitations of technological fixes?", a:["A technological crop solution automatically eliminates inequality, war, and unfair trade practices affecting food security","GM crops demonstrate that social problems can always be solved once a sufficiently advanced biological technology is developed","GM crops solve food security problems only when governments prevent farmers from using conventional seeds and agricultural methods","A technical agricultural solution may not address broader social and political causes of problems such as malnutrition"], c:3},
  {q:"Why can adult genetic screening be controversial when it has no curative intent?", a:["Genetic screening is controversial because adults cannot provide informed consent for medical genetic testing","Adult screening is controversial because genetic information cannot be used for any form of patient care or medical decision-making","Genetic information could potentially be used by organizations such as insurers in ways that raise privacy and fairness concerns","Genetic screening is controversial only because it prevents doctors from identifying inherited disorders before symptoms appear"], c:2},
  {q:"What individual-rights concerns are associated with DNA testing in criminal investigations?", a:["DNA testing raises concerns mainly because criminal investigations cannot use scientific evidence to identify individuals accurately","Centralized DNA databases and mandatory collection can raise privacy and unreasonable search and seizure concerns","DNA testing eliminates civil-liberty concerns because genetic evidence can only be collected with voluntary participation","Centralized DNA databases are considered uncontroversial because genetic information has no relationship to individual privacy"], c:1},
  {q:"Why can prenatal genetic screening raise ethical concerns?", a:["It may identify potential abnormalities and contribute to the devaluation of individuals with genetic defects","It guarantees that all genetic disorders can be cured before birth, eliminating the need for further medical treatment","It prevents parents from learning about potential genetic abnormalities because screening cannot provide useful information before birth","It is controversial mainly because prenatal screening cannot detect any potential genetic abnormalities in developing fetuses"], c:0},
  {q:"What is a clone, and which first mammal is identified as having been successfully cloned?", a:["A genetically modified organism; a human was successfully cloned before Dolly the sheep in the early 1990s","A genetically identical embryo; a cow was successfully cloned in Scotland before researchers cloned Dolly","A genetically screened individual; frogs were the first mammals successfully cloned during the 1950s","A genetic duplicate; Dolly the sheep was successfully cloned in Scotland in 1996"], c:3},
  {q:"Why is human cloning controversial according to the text?", a:["It is controversial because cloning has never been demonstrated successfully in any higher organism","It raises concerns primarily because cloning would eliminate all genetic differences between humans within a single generation","It raises questions about genetic diversity, corporate control, cloning for reproduction, and possible new eugenics","It is controversial only because cloned organisms cannot survive outside laboratory conditions or reproduce naturally"], c:2},
  {q:"What are stem cells, and what important property do embryonic stem cells have?", a:["They are mature cells that can only reproduce their original tissue type and cannot develop into other cell types","They are DNA fragments that can be inserted into embryos to prevent all inherited disorders from developing","They are genetically modified cells used exclusively for treating leukemia and cannot have other medical applications","They are early cells with pluripotency, meaning they can develop into many different cell types in the body"], c:3},
  {q:"Why has the extraction of embryonic stem cells been controversial?", a:["It is controversial because stem cells cannot develop into different cell types or contribute to medical treatment","It is controversial because researchers have never demonstrated any potential medical applications for embryonic stem cells","It raises concerns mainly because stem cells can only be obtained from adults who have already developed genetic disorders","It involves embryos and raises the ethical question of when life begins"], c:3},
  {q:"What was the primary objective of the eugenics movement?", a:["To use genetic screening primarily for agricultural purposes and the development of improved food crops","To attempt to perfect humanity by reinforcing desirable traits and suppressing undesirable ones","To prevent genetic research by arguing that inherited characteristics should never be studied or scientifically manipulated","To improve human health by ensuring that all genetic traits were preserved equally across generations"], c:1},
  {q:"How can modern genetic intervention relate to eugenics?", a:["Genetic technologies could be used to select or reinforce preferred human traits, raising concerns about a renewed eugenics","Genetic technologies eliminate all concerns about eugenics because modern research focuses only on treating existing diseases","Genetic intervention prevents eugenics by ensuring that all genetic traits are treated as equally desirable and undesirable","Genetic intervention is unrelated to eugenics because modern genetic technologies cannot influence inherited characteristics"], c:0},
  {q:"Why is it incorrect to treat genetic defects as the sole source of many health problems?", a:["Genetic defects are the only cause of health problems, although technological interventions cannot yet correct them completely","Genetic defects are never involved in disease because environmental conditions completely determine health outcomes","All diseases are genetically caused, but genetic screening cannot identify the genes responsible for most health conditions","Environmental factors can affect genetic conditions, not all diseases are genetically caused, and some problem genes remain unidentified"], c:3},
  {q:"What does the phrase “volitional evolution” raise according to the text?", a:["It raises the question of whether deliberately directing human evolution is essentially another form of eugenics","It describes the natural process through which environmental factors automatically determine which human genes survive","It means that genetic disorders can always be eliminated through voluntary medical screening and treatment","It refers to the use of agricultural biotechnology to increase the genetic diversity of crops and livestock"], c:0},
    ]
    },
    textbook: [
      // =========================
      // CHAPTER 1: THE NATURE OF TECHNOLOGY
      // =========================

      {q:"What does the textbook identify as the ultimate basis of technology?", a:["Knowledge in the social context when applied to technology","Hardware in the social context when applied to technology","Energy in the social context when applied to technology","Money in the social context when applied to technology"], c:0},
      {q:"Which two elements are identified as the first components of technology?", a:["Tools and techniques within technological systems when applied to technology","Science and politics within technological systems when applied to technology","Machines and factories within technological systems when applied to technology","Energy and information within technological systems when applied to technology"], c:0},
      {q:"Why is organization included in the textbook's definition of technology?", a:["Technology requires coordinated human and material inputs","Organization is another word for a machine","Only governments can create technology in the social context","Organizations replace tools and techniques in the social context"], c:0},
      {q:"What does 'presentism' mean when thinking about technology?", a:["Using contemporary technology as the benchmark for judging technologies of the past","Believing all technology is harmful in the social context","Predicting future technological change in technological development","Treating technology as purely scientific in the social context"], c:0},
      {q:"What distinction does the textbook make between technological advance and progress?", a:["Technological advance does not necessarily make things better for everyone","They are exactly the same concept in this broader context","Progress refers only to older technologies in this broader context","Technological advance always produces social improvement in this broader context"], c:0},
      {q:"What is technological determinism primarily concerned with?", a:["The idea that technology can strongly shape social change","The idea that society never affects technology","The rejection of technological change in the social context","The use of technology only in factories"], c:0},
      // =========================
      // CHAPTER 2: WINNERS AND LOSERS
      // =========================

      {q:"Why can technological change produce both winners and losers?", a:["Its effects can benefit some groups while disadvantaging others","All technologies distribute benefits equally in the social context","Technology affects only consumers in technological development","Technological change has no economic effects in this broader context"], c:0},
      {q:"Who were the Luddites?", a:["English workers who opposed aspects of industrial technological change","Scientists who promoted computers in technological development","Engineers who designed steam engines in the social context","Farmers who introduced irrigation in technological development"], c:0},
      {q:"What was a major concern behind Luddite resistance?", a:["New machinery threatened established work and livelihoods","Machines were too expensive for governments in this broader context","Science was replacing religion in technological development","Factories could not produce enough goods in this broader context"], c:0},
      {q:"What does neo-Luddism generally involve?", a:["Contemporary criticism or resistance to technologies seen as socially harmful","A movement to increase factory automation in this broader context","A method for developing software in the social context","A theory that all technology is ancient"], c:0},
      {q:"What question is raised by the chapter's discussion of 'Whose Technology?'?", a:["Who controls technology and who benefits from it","Who invented the first computer in the social context","Who owns all scientific knowledge in the social context","Who operates every machine in technological development"], c:0},
      {q:"What limitation of technology does the chapter emphasize?", a:["Technology cannot by itself determine the social outcomes of its use","Technology can solve every social problem in this broader context","Technology always creates equal benefits in the social context","Technology eliminates political choices in technological development"], c:0},
      // =========================
      // CHAPTER 3: SOURCES OF TECHNOLOGICAL CHANGE
      // =========================

      {q:"How does the textbook characterize technological change?", a:["As a social process involving many actors and conditions","As an entirely individual process in the social context","As a process controlled only by scientists","As an automatic result of economic growth"], c:0},
      {q:"What does the 'D' in R&D stand for?", a:["Development in the social context when applied to technology","Diffusion in the social context when applied to technology","Demand in the social context when applied to technology","Design in the social context when applied to technology"], c:0},
      {q:"What is a reverse salient in technological development?", a:["A bottleneck or lagging component that holds back a larger system","The most advanced part of a system","A failed market survey in technological development","A type of patent in technological development"], c:0},
      {q:"What is meant by the 'technology push' model?", a:["New technological possibilities help drive innovation and adoption","Consumers always create inventions first in the social context","Governments prohibit new products in technological development","Demand is irrelevant to innovation in the social context"], c:0},
      {q:"What is meant by the 'market pull' model?", a:["Demand for products or services helps stimulate technological innovation","Technology develops without users in technological development","Markets prevent technological change in technological development","Only military organizations drive innovation in the social context"], c:0},
      {q:"Why can market timing matter for a new technology?", a:["A technology may arrive before users or markets are ready to adopt it","All technologies are immediately profitable in the social context","Markets never influence adoption in technological development","Timing matters only for military weapons in this broader context"], c:0},
      // =========================
      // CHAPTER 4: SCIENTIFIC KNOWLEDGE AND TECHNOLOGICAL ADVANCE
      // =========================

      {q:"How does the textbook distinguish science from technology?", a:["Science seeks knowledge about the natural world, while technology applies knowledge to practical purposes","Science and technology are identical in the social context","Technology studies only nature while science builds machines","Science is always newer than technology in this broader context"], c:0},
      {q:"What historical relationship between science and technology does the chapter emphasize?", a:["They were often separated institutionally and developed somewhat independently","They have always been one profession in this broader context","Technology did not exist before modern science","Science always directly preceded every technology in this broader context"], c:0},
      {q:"How can technology facilitate scientific discovery?", a:["New instruments and techniques can make previously inaccessible observations possible","Technology prevents scientists from collecting data in this broader context","Technology replaces scientific theories in technological development","Technology makes experimentation unnecessary in technological development"], c:0},
      {q:"How can successful technology help legitimate science?", a:["Practical technological achievements can demonstrate the usefulness of scientific knowledge","Technology proves every scientific claim in the social context","Technology eliminates scientific uncertainty in technological development","Technology makes science independent of evidence in this broader context"], c:0},
      {q:"What does translating science into technology involve?", a:["Turning scientific knowledge into workable techniques, devices, or processes","Replacing experiments with opinions in technological development","Converting all science into mathematics in the social context","Removing social considerations from design in the social context"], c:0},
      {q:"What do science and technology have in common?", a:["Both depend on systematic knowledge, skills, and organized practices","Neither requires specialized knowledge in technological development","Both are entirely independent of society in this broader context","Both have identical goals in every situation"], c:0},
      // =========================
      // CHAPTER 5: CULTURAL DIFFUSION AND NON-DIFFUSION
      // =========================

      {q:"What does technological diffusion refer to?", a:["The spread of a technology from one setting or society to another","The destruction of obsolete technology in the social context","The invention of a new machine in this broader context","The patenting of every technology in the social context"], c:0},
      {q:"Why are 'clever copyists' important to technological change?", a:["People and societies can learn from and adapt technologies developed elsewhere","Copying prevents all innovation in technological development","Only inventors can use technology in the social context","Copying is always illegal in technological development"], c:0},
      {q:"What is the difference between adaptation and adoption?", a:["Adoption involves accepting a technology, while adaptation involves modifying it to fit circumstances","They are identical terms in technological development","Adaptation means rejecting technology in technological development","Adoption always requires invention in technological development"], c:0},
      {q:"What does the example of learning to make steel in old Japan illustrate?", a:["Technology can be learned, adapted, and developed within a different cultural setting","Japan rejected all foreign technologies in the social context","Steelmaking requires no social learning in the social context","Technology cannot cross cultural boundaries in the social context"], c:0},
      {q:"What is 'appropriate technology' concerned with?", a:["Technologies suited to the social, economic, and environmental conditions of their users","Using the most expensive technology available in this broader context","Using only technologies invented locally in the social context","Replacing all traditional practices in technological development"], c:0},
      {q:"How can patents affect technological diffusion?", a:["They can provide incentives for invention while also restricting access to protected technologies","They always make technologies freely available in this broader context","They eliminate ownership claims in technological development","They prevent all technological innovation in the social context"], c:0},
      // =========================
      // CHAPTER 6: SOCIAL CONSTRUCTION AND DIFFUSION
      // =========================

      {q:"What does the social construction of technology emphasize?", a:["Social groups and their interests help shape what technologies become","Technology develops independently of society in the social context","Only engineers determine technological meaning in the social context","Consumers never influence design in technological development"], c:0},
      {q:"What does it mean for a technology to 'work' in a social-construction perspective?", a:["Its technical performance and its acceptance and use within a social setting both matter","It must operate without users in the social context","It must be profitable immediately in the social context","It must be approved by a government"], c:0},
      {q:"How do consumers and organizations affect technological diffusion?", a:["Their choices, resources, practices, and expectations influence adoption","They have no influence once a technology is invented","Only governments decide adoption in technological development","Consumers can adopt technology without changing anything"], c:0},
      {q:"What is the 'NIH Syndrome' discussed in the chapter?", a:["Resistance to ideas because they were not developed within one's own organization","A medical condition caused by technology in this broader context","A method for measuring innovation in the social context","A patenting strategy within technological systems when applied to technology"], c:0},
      {q:"What does inclusion mean in the context of technological development?", a:["Different groups can be included or excluded through design choices and practices","All technologies automatically include everyone in the social context","Inclusion concerns only software licensing in the social context","Inclusion means eliminating all user choices in this broader context"], c:0},
      {q:"What is path dependency?", a:["Prior choices can shape and constrain the options available later","Future choices completely erase past decisions in this broader context","Technology develops without historical influence in the social context","Only government decisions create technological paths in this broader context"], c:0},
      // =========================
      // CHAPTER 7: TECHNOLOGY, ENERGY, AND THE ENVIRONMENT
      // =========================

      {q:"What major environmental problem is strongly associated with fossil-fuel use?", a:["Air pollution and climate change in the social context","Reduced biodiversity from all technologies in the social context","The disappearance of all renewable energy in this broader context","Universal soil fertility within technological systems when applied to technology"], c:0},
      {q:"Why does the textbook discuss transitioning away from fossil fuels?", a:["Fossil-fuel use creates environmental costs that motivate alternatives","Fossil fuels cannot produce energy in the social context","Renewable energy does not exist in the social context","Fossil fuels are used only in transportation"], c:0},
      {q:"Which is an alternative to fossil fuels discussed in the chapter?", a:["Renewable energy sources within technological systems when applied to technology","Coal gasification only within technological systems when applied to technology","Lead batteries as a fuel in the social context","Manual labor in this broader context when applied to technology"], c:0},
      {q:"What does 'doing more with less' refer to in environmental technology?", a:["Improving efficiency so that fewer resources are used for a given output","Producing less while using more resources in this broader context","Eliminating all technological systems in technological development","Increasing fuel consumption within technological systems when applied to technology"], c:0},
      {q:"Why can government policies affect environmental outcomes?", a:["Policies can shape incentives, regulations, and the adoption of technologies","Governments have no effect on markets in this broader context","Environmental technologies are independent of policy in this broader context","Only consumers can affect energy use in this broader context"], c:0},
      {q:"Why does the chapter ask whether technology is the problem or the solution?", a:["Technology can contribute to environmental problems while also possible ways to address them","Technology is always either harmful or beneficial","Technology has no environmental effects in the social context","Environmental problems are unrelated to technology in this broader context"], c:0},
      // =========================
      // CHAPTER 8: TOOLS FOR ENVIRONMENTAL ASSESSMENT
      // =========================

      {q:"What is the purpose of environmental assessment tools?", a:["To evaluate and compare the environmental impacts of technologies and products","To calculate only financial profits in the social context","To determine whether a product is patented","To measure consumer popularity in technological development"], c:0},
      {q:"Why does the chapter consider matters of scale?", a:["Environmental effects can look different depending on the scale of analysis","Scale has no effect on environmental assessment","Only local effects matter in technological development","Only global effects matter in technological development"], c:0},
      {q:"What does the phone-in-your-pocket case study illustrate?", a:["A common device can depend on complex materials, production, use, and disposal systems","Phones have no environmental impacts in the social context","Phones are produced entirely by one company","Digital products require no physical resources in this broader context"], c:0},
      {q:"What is a commodity chain?", a:["The connected sequence through goods and materials are produced, moved, and used","A list of retail prices in the social context","A single factory's production schedule in the social context","A patent database within technological systems when applied to technology"], c:0},
      {q:"What is an externality?", a:["A cost or benefit of an activity that is not fully reflected in the direct transaction","A cost paid entirely by the producer","A government subsidy within technological systems when applied to technology","A product's retail price in technological development"], c:0},
      {q:"Why can some technological impacts be difficult to measure?", a:["Some effects are indirect, dispersed, delayed, or difficult to assign monetary values","All impacts are immediately measurable in the social context","Only financial impacts exist in technological development","Environmental effects occur only during manufacturing in this broader context"], c:0},
      // =========================
      // CHAPTER 9: MEDICAL TECHNOLOGIES
      // =========================

      {q:"Why can new medical technologies involve trade-offs?", a:["They can provide benefits while also creating costs, risks, ethical questions, or unequal access","Medical technologies have only positive effects in this broader context","Medical technologies never involve uncertainty in the social context","Trade-offs occur only with old medicine in this broader context"], c:0},
      {q:"What is a central concern of medical ethics?", a:["How medical technologies should be used in ways consistent with ethical principles","How to maximize machine speed in the social context","How to eliminate all medical choices in this broader context","How to patent every treatment in the social context"], c:0},
      {q:"Why does the chapter ask 'When Does Life End?'", a:["Medical technologies can complicate definitions and decisions concerning death","Technology makes death impossible in technological development","Only hospitals can define life in the social context","The question concerns computer shutdowns in the social context"], c:0},
      {q:"What are 'halfway technologies'?", a:["Technologies that partially address a problem without fully resolving its underlying causes","Technologies that are used for half a year","Technologies that require no medical knowledge in this broader context","Technologies used only in developing countries in this broader context"], c:0},
      {q:"What kind of issue can arise when deciding whether to adopt an expensive medical technology?", a:["The balance between medical benefits, costs, risks, and access","Whether technology should replace doctors entirely in this broader context","Whether all patients should receive identical treatment","Whether medical research should stop in the social context"], c:0},
      {q:"Why can medical technology create ethical dilemmas even when it works technically?", a:["Technical success does not by itself determine whether its use is ethically acceptable","Ethics applies only when technology fails in this broader context","Medical devices cannot affect ethical decisions in this broader context","Technical performance and ethics are identical in this broader context"], c:0},
      // =========================
      // CHAPTER 10: GENETIC TECHNOLOGIES
      // =========================

      {q:"What is the 'genetic fix' idea?", a:["The expectation that genetic interventions can correct or prevent particular problems","The use of computers to repair DNA files","A method of patenting machines in the social context","A farming technique unrelated to genes in this broader context"], c:0},
      {q:"Why has patenting genes been controversial?", a:["It raises questions about ownership and the boundaries of intellectual property over biological information","Genes cannot be studied scientifically in the social context","Patents never affect research in technological development","All genes are manufactured products in the social context"], c:0},
      {q:"How can genetic technologies be used in agriculture?", a:["They can be used to alter organisms or traits in crops and livestock","They can only diagnose human diseases in this broader context","They eliminate the need for farming in this broader context","They affect only farm machinery in the social context"], c:0},
      {q:"What is genetic screening used for?", a:["Identifying genetic characteristics or risks in individuals or populations","Creating computer networks within technological systems when applied to technology","Measuring crop prices within technological systems when applied to technology","Replacing all medical diagnoses in technological development"], c:0},
      {q:"What ethical questions surround cloning?", a:["Questions about safety, identity, reproduction, and the purposes for cloning might be used","Whether computers can be copied in the social context","Whether plants need sunlight in technological development","Whether patents should expire in technological development"], c:0},
      {q:"Why are genetic interventions described as having perils?", a:["Changing genetic makeup can have unintended consequences and ethical implications","Genes never interact with other biological systems","Genetic interventions are always harmless in the social context","Only economic risks are involved in the social context"], c:0},
      // =========================
      // CHAPTER 11: WORK IN NONINDUSTRIAL SOCIETIES
      // =========================

      {q:"What does the chapter's discussion of early tools emphasize?", a:["Tools greatly expanded human capabilities and changed patterns of work","Early humans had no technologies in the social context","Tools were used only for warfare in this broader context","Technology began with factories in technological development"], c:0},
      {q:"What does the !Kung example challenge?", a:["The assumption that people in nonindustrial societies necessarily spend all their time working","The idea that agriculture requires labor in this broader context","The importance of tools in technological development","The existence of leisure in technological development"], c:0},
      {q:"How did agriculture transform work?", a:["It created more settled production systems and changed patterns of labor and time","It eliminated work within technological systems when applied to technology","It made tools unnecessary in technological development","It made all societies nomadic in the social context"], c:0},
      {q:"What is one irony of agricultural 'progress' discussed by the chapter?", a:["Greater productive capacity could be accompanied by harder or less flexible work","Agriculture always reduced population in technological development","Farming eliminated social organization in technological development","Agriculture made all work recreational in the social context"], c:0},
      {q:"What role did guilds play in craft production?", a:["They organized and regulated artisans and aspects of craft work","They replaced all farmers in technological development","They operated only military forces in the social context","They eliminated specialized skills in technological development"], c:0},
      {q:"How did clocks affect working patterns?", a:["They helped coordinate and regulate work according to standardized measures of time","They made time irrelevant in technological development","They eliminated schedules within technological systems when applied to technology","They were used only for religious ceremonies"], c:0},
      // =========================
      // CHAPTER 12: TECHNOLOGY AND JOBS
      // =========================

      {q:"Why has technological unemployment been a recurring concern?", a:["New technologies can replace or reduce demand for some kinds of labor","Technology never changes jobs in technological development","Automation affects only consumers in technological development","Employment cannot change with technology in the social context"], c:0},
      {q:"What is one argument for optimism about technology and employment?", a:["Technological change can create new jobs and industries as well as eliminate some jobs","Every worker keeps the same job forever","Technology always creates more jobs than it removes","Employment is unrelated to technology in the social context"], c:0},
      {q:"How can technological change create jobs indirectly?", a:["New technologies can generate demand for complementary products, services, and workers","Only the inventor receives employment in the social context","New technologies eliminate all supporting industries in this broader context","Indirect effects occur only in agriculture in this broader context"], c:0},
      {q:"Why does the chapter argue that robots are not necessarily ready to take over all work?", a:["Many tasks remain difficult to automate because they require flexibility, judgment, or complex interaction","Robots cannot perform any physical tasks in this broader context","Robots are banned everywhere in technological development","Automation has already ended in technological development"], c:0},
      {q:"How can technology affect income inequality?", a:["It can change the rewards to different skills and alter the distribution of income","Technology has identical effects on every worker","Technology affects only prices in technological development","Income inequality is unrelated to technology in this broader context"], c:0},
      {q:"How can globalization interact with technological change and jobs?", a:["Technology can make it easier to coordinate production across locations and contribute to changes in employment","Globalization prevents technological change in technological development","Technology stops international production in technological development","Jobs cannot move between countries in the social context"], c:0},
      // =========================
      // CHAPTER 13: TECHNOLOGICAL CHANGE AND LIFE ON THE JOB
      // =========================

      {q:"What did industrial production change about work?", a:["It increasingly organized work around machinery, factories, and specialized processes","It eliminated machines within technological systems when applied to technology","It returned most workers to subsistence farming","It removed all division of labor in this broader context"], c:0},
      {q:"What is machine-paced labor?", a:["Work in the pace is substantially determined by the operation of machinery","Work performed only by machine operators in this broader context","Work with no schedules in technological development","Work controlled entirely by workers in the social context"], c:0},
      {q:"How can industrial technology affect worker autonomy?", a:["Highly structured machinery and production systems can constrain how workers perform tasks","Machines always increase autonomy in technological development","Technology has no effect on work organization","Autonomy depends only on wages in the social context"], c:0},
      {q:"What is the division of labor?", a:["Breaking production into specialized tasks performed by different workers","Giving one worker every task in the social context","Eliminating specialization in this broader context when applied to technology","Replacing workers with managers in technological development"], c:0},
      {q:"What was scientific management intended to do?", a:["Analyze and organize work to improve efficiency and control of production","Eliminate measurement from factories in technological development","Increase worker discretion in every task in this broader context","Replace machines with craft labor in the social context"], c:0},
      {q:"Which newer forms of work are discussed in the chapter?", a:["Telework and the gig economy in the social context","Only agricultural labor within technological systems when applied to technology","Only guild craftsmanship within technological systems when applied to technology","Only military service within technological systems when applied to technology"], c:0},
      // =========================
      // CHAPTER 14: PRINTING, LITERACY, AND MEDIA
      // =========================

      {q:"Why was the printing revolution significant?", a:["It greatly expanded the ability to reproduce and circulate written information","It ended literacy within technological systems when applied to technology","It eliminated books within technological systems when applied to technology","It affected only governments in technological development"], c:0},
      {q:"How did printing contribute to the expansion of knowledge?", a:["It made written materials easier to reproduce and distribute widely","It prevented scientific communication in technological development","It reduced the number of available texts","It restricted books to monasteries in the social context"], c:0},
      {q:"How were printing and the rise of Protestantism connected?", a:["Printed materials helped circulate religious texts and ideas","Printing prevented religious debate in technological development","Protestantism banned printed Bibles in technological development","The two developments were unrelated in the social context"], c:0},
      {q:"How did literacy and printing reinforce each other?", a:["More printed material encouraged literacy, while literate populations created demand for printed material","Literacy reduced demand for books in the social context","Printing made reading unnecessary in technological development","Only governments could become literate in the social context"], c:0},
      {q:"What change is associated with digitizing the news?", a:["News can be distributed electronically and updated rapidly through digital media","News must remain in print in the social context","Newspapers became impossible to access in the social context","Digital news cannot be reproduced in the social context"], c:0},
      {q:"What issue does 'reading digitally' raise?", a:["Digital reading can change how people encounter, navigate, and process written material","Digital text cannot contain information in the social context","Reading behavior is unaffected by media in this broader context","Digital reading eliminates literacy in technological development"], c:0},
      // =========================
      // CHAPTER 15: ELECTRONIC MEDIA
      // =========================

      {q:"What was the telegraph's major communication significance?", a:["It allowed messages to travel rapidly over long distances using electrical signals","It transmitted television images in technological development","It required no coded signals in the social context","It replaced all printed books in the social context"], c:0},
      {q:"Who is commonly associated with the practical development of radio, though not its sole inventor?", a:["Guglielmo Marconi in this broader context when applied to technology","Johannes Gutenberg in this broader context when applied to technology","Tim Berners-Lee in this broader context when applied to technology","James Watt in this broader context when applied to technology"], c:0},
      {q:"What helped make radio a commercial medium in the United States?", a:["Broadcasting developed alongside advertising, private ownership, and commercial financing","Radio was funded only by monasteries in this broader context","Radio could not transmit news in the social context","Commercial broadcasting was impossible in technological development"], c:0},
      {q:"Why did governments become involved in broadcasting?", a:["Radio and television used scarce frequencies and had important public effects","Broadcasting had no public significance in the social context","Governments invented every program in technological development","Television could not reach audiences in the social context"], c:0},
      {q:"What concern has surrounded violence on television?", a:["Researchers and policymakers have debated possible effects of exposure to televised violence","Television violence has never been studied in this broader context","Violence appears only in news broadcasts in this broader context","Television cannot influence viewers in technological development"], c:0},
      {q:"How has television affected politics?", a:["It has changed how political information, candidates, and events are presented to mass audiences","It eliminated political communication in technological development","It made campaigns impossible in technological development","It affects only entertainment in technological development"], c:0},
      // =========================
      // CHAPTER 16: THE INTERNET AGE
      // =========================

      {q:"What was ARPANET?", a:["An early computer network developed with support from the U.S. Department of Defense","A commercial television network in technological development","A social media company in technological development","A satellite television system in technological development"], c:0},
      {q:"What important networking principle was used by ARPANET?", a:["Breaking information into packets that could be transmitted through a network","Sending every message as a physical letter","Using only one permanent communication path in this broader context","Encoding every message as a television signal"], c:0},
      {q:"Who developed the World Wide Web while working at CERN?", a:["Tim Berners-Lee in this broader context when applied to technology","Guglielmo Marconi in this broader context when applied to technology","Johannes Gutenberg in this broader context when applied to technology","Charles Perrow in this broader context when applied to technology"], c:0},
      {q:"What is a network effect?", a:["A service can become more valuable as more people use it","A network becomes less useful when more people join","A network can work only with one user","A network effect concerns only electricity in this broader context"], c:0},
      {q:"What is the digital divide?", a:["Differences in access to and effective use of digital technologies","A division between computer programs in the social context","The separation of the internet from phones","A method of encrypting data in the social context"], c:0},
      {q:"Why is intellectual property an issue in the Internet age?", a:["Digital information can be copied and distributed easily, raising questions about ownership and control","Digital information cannot be copied in the social context","Copyright applies only to physical machines in this broader context","The internet eliminates ownership in technological development"], c:0},
      // =========================
      // CHAPTER 17: ISSUES IN ICTs
      // =========================

      {q:"What issue has been debated regarding video games and gaming?", a:["Their possible effects on behavior, health, social interaction, and learning","Whether games can use electricity in the social context","Whether games existed before computers in the social context","Whether games can be sold in the social context"], c:0},
      {q:"What is one potential educational or career-related benefit discussed for esports?", a:["It can involve engagement with STEM and related skills","It eliminates the need for education in this broader context","It prevents teamwork within technological systems when applied to technology","It requires no technology in technological development"], c:0},
      {q:"What are cryptocurrencies?", a:["Digital forms of value that use cryptographic technologies and decentralized systems in many implementations","Printed government banknotes within technological systems when applied to technology","Analog radio signals within technological systems when applied to technology","Medical technologies in this broader context when applied to technology"], c:0},
      {q:"What concern is associated with social media harms?", a:["Social media can contribute to problems such as harassment, misinformation, or other negative effects","Social media has no social consequences in this broader context","Social media cannot affect communication in the social context","Only governments use social media in the social context"], c:0},
      {q:"What is disinformation?", a:["False or misleading information that is deliberately spread","Any information that is difficult to understand","Accidental spelling errors within technological systems when applied to technology","A form of hardware in technological development"], c:0},
      {q:"What can algorithms contribute to online information environments?", a:["They can shape what users see, including through recommendations, targeting, and personalization","They only repair computer hardware in the social context","They prevent all bias in technological development","They operate without using information in the social context"], c:0},
      // =========================
      // CHAPTER 18: WEAPONS AND THEIR CONSEQUENCES
      // =========================

      {q:"How did military technology influence ancient warfare?", a:["Weapons and military organization shaped tactics, political power, and the outcomes of conflicts","Ancient warfare was independent of technology in this broader context","Weapons were used only for hunting in this broader context","Military technology began with firearms in the social context"], c:0},
      {q:"What was a major military advantage of the medieval horse?", a:["Mounted warfare supported the power of heavily equipped cavalry","Horses eliminated the need for weapons in this broader context","Horses made castles unnecessary immediately in the social context","Mounted warfare was used only for transport"], c:0},
      {q:"What did the longbow demonstrate about military technology?", a:["A relatively accessible weapon could challenge established military arrangements and defenses","Longbows were useful only for hunting in this broader context","Longbows ended all warfare in technological development","Longbows were firearms within technological systems when applied to technology"], c:0},
      {q:"What was the gunpowder revolution?", a:["A major transformation in warfare associated with the adoption of gunpowder weapons","The invention of the printing press in this broader context","The replacement of all ships by aircraft","The elimination of artillery in technological development"], c:0},
      {q:"How did gunpowder weapons contribute to changes in political organization?", a:["They helped alter military power and contributed to the development of centralized states","They made governments unnecessary in technological development","They eliminated taxation within technological systems when applied to technology","They reduced the importance of armies in this broader context"], c:0},
      {q:"What does the chapter's discussion of battleships illustrate?", a:["Naval technology can shape military strategy, organizational culture, and international power","Ships have no political significance in the social context","Battleships were used only for commerce in this broader context","Naval technology never changes warfare in the social context"], c:0},
      // =========================
      // CHAPTER 19: THE ERA OF SMART WEAPONS
      // =========================

      {q:"What is a cruise missile?", a:["A guided missile designed to travel toward a target using navigation and propulsion systems","A conventional artillery shell without guidance in this broader context","A surveillance camera within technological systems when applied to technology","A type of tank in technological development"], c:0},
      {q:"What are smart bombs or precision-guided munitions designed to do?", a:["Improve the ability to direct a weapon toward a selected target","Increase the randomness of bombing in the social context","Eliminate the need for aircraft in the social context","Operate only as defensive shields in the social context"], c:0},
      {q:"What is high-tech surveillance used for?", a:["Detecting, monitoring, and collecting information about people, places, or activities","Producing food in this broader context when applied to technology","Printing newspapers in this broader context when applied to technology","Manufacturing textiles in this broader context when applied to technology"], c:0},
      {q:"What is one military use of drones?", a:["They can conduct surveillance or carry out strikes without placing a pilot in the aircraft","They can only transport civilians in the social context","They are used only for weather forecasting","They cannot be remotely controlled in the social context"], c:0},
      {q:"What is one cost of increasing technological sophistication in weapons?", a:["Greater complexity can bring financial, technical, organizational, and maintenance burdens","Sophistication always makes weapons cheaper in the social context","Complexity eliminates training needs in technological development","Advanced systems require no infrastructure in the social context"], c:0},
      {q:"What is asymmetrical warfare?", a:["Conflict in opposing sides have substantially different capabilities or strategies","War fought only with equal armies in this broader context","A conflict without technology in technological development","A form of naval communication in the social context"], c:0},
      // =========================
      // CHAPTER 20: HOW NEW WEAPONS EMERGE
      // =========================

      {q:"What does 'action and reaction' mean in military technological development?", a:["One side's innovations can stimulate responses and countermeasures by opponents","Military technology develops without opponents in the social context","Weapons never influence strategy in technological development","Only civilian technology creates military change in this broader context"], c:0},
      {q:"Why can social structure influence military technology?", a:["Organizations, institutions, doctrines, and interests affect technologies are developed and adopted","Military technology is chosen only by physics","Organizations cannot affect weapons in technological development","Doctrine has no relation to equipment in this broader context"], c:0},
      {q:"What does the chapter's discussion of the air weapon illustrate?", a:["Organizational interests can shape how new military technologies are understood and used","Aircraft were accepted immediately everywhere in the social context","Air power has no organizational implications in this broader context","Air weapons developed independently of military institutions"], c:0},
      {q:"How can social revolution enlarge the scale of warfare?", a:["Political and social transformations can mobilize more people and resources for war","Revolutions always reduce military capacity in the social context","Social change cannot affect armies in the social context","War becomes impossible after revolutions in the social context"], c:0},
      {q:"What does industrial technology provide for warfare?", a:["Large-scale production and infrastructure for weapons, transport, and military logistics","Only individual hand tools in technological development","No additional production capacity in technological development","Only communication services within technological systems when applied to technology"], c:0},
      {q:"Why is controlling military technologies difficult?", a:["Military technologies can spread, be difficult to regulate, and involve competing security interests","All governments agree on every weapon in this broader context","Weapons cannot cross borders in technological development","Military technologies are always publicly controlled in this broader context"], c:0},
      // =========================
      // CHAPTER 21: ACCIDENTS, DISASTERS, AND NEGATIVE CONSEQUENCES
      // =========================

      {q:"What is a 'simple' technological failure?", a:["A failure that may arise from a relatively straightforward breakdown or error","A failure that requires no consequences in this broader context","A failure caused only by natural disasters","A failure that cannot be investigated in this broader context"], c:0},
      {q:"What are 'normal accidents' in Charles Perrow's framework?", a:["Accidents that can arise from complex interactions and tightly coupled systems","Accidents that occur only because workers are careless","Accidents that are always predictable in the social context","Accidents caused only by weather in the social context"], c:0},
      {q:"What does tight coupling mean in complex technological systems?", a:["Parts or processes are closely connected so changes can propagate rapidly","Components are completely independent in technological development","Systems have no feedback in technological development","All components are manually operated in the social context"], c:0},
      {q:"Why can responsibility be difficult to assign after a technological disaster?", a:["Multiple decisions, organizations, and system conditions may contribute to the outcome","Only one person is always responsible in this broader context","Technology cannot involve organizations in technological development","Victims never need to be considered in this broader context"], c:0},
      {q:"What is a chronic disaster?", a:["A harmful condition that persists over time rather than occurring as one isolated event","A disaster that lasts exactly one day","A natural disaster with no human contribution","A failure with no victims in the social context"], c:0},
      {q:"What does the chapter's discussion of infrastructure emphasize?", a:["Technological systems depend on interconnected physical and organizational systems whose failures can have cascading effects","Infrastructure is unrelated to technology in the social context","Infrastructure failures remain isolated in technological development","Only buildings count as infrastructure in the social context"], c:0},
      // =========================
      // CHAPTER 22: ORGANIZATIONS AND TECHNOLOGICAL CHANGE
      // =========================

      {q:"How can technology be a cause of organizational structure?", a:["The characteristics of a technology can influence how organizations divide work and coordinate activities","Technology has no effect on organizations in this broader context","Organizations always predate every technology in the social context","Only laws determine structure in technological development"], c:0},
      {q:"How can organizational structure be a consequence of technology?", a:["Organizations may change their structures in response to new technologies","Organizations never adapt within technological systems when applied to technology","Technology cannot change communication in technological development","Structure is unrelated to equipment in the social context"], c:0},
      {q:"Why can organizational size affect technological innovation?", a:["Size can influence resources, specialization, communication, and the ability to support innovation","Size has no relationship to innovation in this broader context","Only small organizations innovate in technological development","Only governments can innovate in technological development"], c:0},
      {q:"How have new information technologies affected organizations?", a:["They can change communication, coordination, information processing, and work practices","They eliminate all organizational hierarchies in the social context","They affect only hardware manufacturers in the social context","They make information less important in the social context"], c:0},
      {q:"What are interorganizational relations?", a:["Relationships among organizations that can influence technological development and adoption","Relationships only within one department in the social context","Personal relationships unrelated to technology in the social context","Government ownership of all firms in the social context"], c:0},
      {q:"What role can entrepreneurs play in organizations and technological change?", a:["They can identify opportunities, mobilize resources, and help introduce new technologies","They only operate existing machines in the social context","They cannot affect organizational change in the social context","They work exclusively for governments in the social context"], c:0},
      // =========================
      // CHAPTER 23: PROFESSIONS, EXPERTISE, AND ETHICS
      // =========================

      {q:"Why are experts important in shaping technology?", a:["They possess specialized knowledge that can influence technical choices and policy decisions","Experts have no role in technology in this broader context","Experts only operate machines in technological development","Expertise is unrelated to decision-making in the social context"], c:0},
      {q:"What role do engineers play in the control of technology?", a:["Engineering decisions can shape how technologies are designed, implemented, and constrained","Engineers only perform administrative work in the social context","Engineers cannot influence safety in technological development","Engineering has no ethical dimension in the social context"], c:0},
      {q:"Why does the chapter discuss institutional norms in science?", a:["Scientific institutions establish expectations about conduct, evidence, and professional behavior","Science operates without norms in technological development","Norms replace evidence within technological systems when applied to technology","Scientific ethics applies only to engineers in this broader context"], c:0},
      {q:"What is an ethical problem with focusing only on technological means?", a:["A technically effective means can still serve ethically troubling ends","Technical means are always morally neutral in every context","Ends never matter within technological systems when applied to technology","Ethics applies only to unsuccessful technologies in this broader context"], c:0},
      {q:"Why can expert disagreement matter in public policy?", a:["Different experts may interpret evidence, uncertainty, and appropriate action differently","Experts always agree on every issue in this broader context","Disagreement means evidence is irrelevant in the social context","Experts cannot affect policy in technological development"], c:0},
      {q:"What tension can arise between expertise and democratic decision-making?", a:["Technical expertise can inform decisions while democratic institutions must also address public values and choices","Experts should always replace democratic institutions in this broader context","Democracy makes expertise unnecessary in technological development","Technical issues never involve public values in this broader context"], c:0},
      // =========================
      // CHAPTER 24: GOVERNING TECHNOLOGY
      // =========================

      {q:"How can governments shape technological change?", a:["Through laws, regulation, funding, procurement, standards, and other policies","Governments can influence technology only through patents","Governments have no technological role in the social context","Governments only respond after technologies disappear in this broader context"], c:0},
      {q:"What constitutional power in the United States concerns intellectual property?", a:["Congress can promote science and useful arts by securing limited exclusive rights to authors and inventors","Congress can prohibit all inventions in the social context","The Constitution bans patents in technological development","The judiciary controls all inventions in the social context"], c:0},
      {q:"What was the Bayh-Dole Act of 1980 important for?", a:["It changed how federally funded research inventions could be managed and commercialized","It abolished all patents in technological development","It ended university research in technological development","It prohibited technology transfer in technological development"], c:0},
      {q:"Why does the government fund science and technology research?", a:["Public funding can support research whose benefits may not be captured by private markets alone","Government research has no public purpose in this broader context","Only private firms can perform research in this broader context","Government funding always produces immediate profits in this broader context"], c:0},
      {q:"What is one reason governments establish institutions to guide technology?", a:["Technologies can have broad social consequences requiring regulation, oversight, or public coordination","Technology never affects the public in the social context","Institutions prevent all innovation in technological development","Only scientists need institutions in technological development"], c:0},
      {q:"What is meant by democratic control of technology?", a:["Public institutions and citizens have a role in shaping decisions about technological development and use","Only engineers should make all technological decisions","Technology is outside politics in technological development","Democratic control means banning technology in the social context"], c:0},
      // =========================
      // TEXTBOOK OVERVIEW
      // =========================

      {q:"What central relationship does the textbook examine throughout its chapters?", a:["Technology shapes society while social, economic, cultural, and political forces shape technology","Technology develops independently of society in the social context","Society is unaffected by technology in the social context","Only economics determines technology in technological development"], c:0},
      {q:"Which broad issue connects technological change to globalization?", a:["Technologies can facilitate worldwide connections while societies and cultures respond differently","Globalization prevents technology from spreading in the social context","Technology has no role in globalization in this broader context","Globalization affects only agriculture in technological development"], c:0},
      {q:"Why does the textbook discuss inequality in relation to technology?", a:["Technological change can alter employment, skills, wealth, and access to opportunities","Technology always reduces inequality in technological development","Inequality is unrelated to technological change in this broader context","Technology affects only environmental conditions in the social context"], c:0},
      {q:"Which pair of topics reflects the book's concern with the health of Earth and its inhabitants?", a:["Environmental technologies and medical/genetic technologies in this broader context","Printing and guilds only in technological development","Military weapons and clocks only in the social context","Television and newspapers only in technological development"], c:0},
      {q:"Why does the textbook include both technological benefits and technological disruptions?", a:["Technological change can create opportunities while also producing risks, costs, and unintended consequences","Technology has only negative consequences in the social context","Technology has only positive consequences in the social context","Benefits and disruptions cannot occur together in this broader context"], c:0},
      {q:"What broad question does the final part of the textbook address?", a:["How organizations, experts, professions, and governments shape and control technology","How to eliminate all technology in the social context","How to return every society to preindustrial life","How to make technology independent of politics"], c:0}
    ]
  },

  DataSci: [

      // =========================
      // INTRODUCTION TO DATA SCIENCE
      // =========================

      {q:"What is essentially at the heart of the information revolution?", a:["The collection and analysis of data","The creation of video games","The development of operating systems","The invention of databases"], c:0},
      {q:"What is the ultimate goal of data science?", a:["To gain knowledge and communicate conclusions drawn from data","To store as much data as possible","To replace all human decisions","To create computer hardware"], c:0},
      {q:"Why does society need people who understand data science?", a:["To make sense of data and visualize it for others","To build only databases","To replace computer programmers","To create more data"], c:0},
      {q:"What problem does YouTube have when reviewing uploaded videos?", a:["There is not enough human time and resources to review all videos","Videos cannot be stored","Users cannot upload videos","Videos cannot contain advertisements"], c:0},
      {q:"How can data analysis help YouTube with videos?", a:["By judging videos as appropriate or monetizable","By deleting every uploaded video","By converting videos into text","By increasing video resolution"], c:0},
      {q:"According to the lecture, what is an important takeaway from the YouTube example?", a:["Data analysis is always easy to get right","There is not always a good technological solution to a social problem","Humans should never review data","All social problems can be solved with software"], c:1},
      {q:"Which of the following is an example of data?", a:["Numbers and values","Only computer programs","Only databases","Only written documents"], c:0},
      {q:"What is the singular form of data mentioned in the lecture?", a:["Datum","Datae","Datas","Daton"], c:0},
      {q:"Which of the following is listed as a source of data?", a:["Measurements","Keyboard drivers","Logic gates","Operating systems"], c:0},
      {q:"Which of the following is another source of data?", a:["Transactions","Compilers","CPUs","Monitors"], c:0},

      // =========================
      // TYPES OF DATA
      // =========================

      {q:"What are the two large categories that data tends to fall into?", a:["Quantitative and categorical","Binary and hexadecimal","Text and binary","Continuous and nominal"], c:0},
      {q:"What is quantitative data?", a:["Numerical values that can be measured and ordered","Values belonging to categories with no numbers","Only text values","Only Boolean values"], c:0},
      {q:"Which is an example of quantitative data?", a:["Temperature","Colour name","University name","Music genre"], c:0},
      {q:"What is categorical data?", a:["Values normally belonging to the same category","Numerical values that are always continuous","Only measurements","Values that must be calculated"], c:0},
      {q:"Which is an example of categorical data?", a:["Music genre","Temperature","Distance","Speed"], c:0},
      {q:"What are the two types of quantitative data discussed in the lecture?", a:["Continuous and discrete","Nominal and ordinal","Binary and text","Measured and categorical"], c:0},
      {q:"What is continuous data?", a:["Numerical values that are infinite along a range","Countable values that are finite within a range","Labels with no order","Labels with an order"], c:0},
      {q:"Which is an example of continuous data?", a:["Temperature of 22.25C","Number of computers in a lab","Number of fingers","Population count"], c:0},
      {q:"What is discrete data?", a:["Countable numerical values that are finite within a range","Numerical values that are infinite along a range","Labels with no order","Text that represents categories"], c:0},
      {q:"Which is an example of discrete data?", a:["Number of computers in a lab","Speed of a car","Temperature","Distance"], c:0},
      {q:"What are the two types of categorical data discussed in the lecture?", a:["Nominal and ordinal","Continuous and discrete","Binary and hexadecimal","Text and numerical"], c:0},
      {q:"What is nominal data?", a:["Values in categories with no order","Values in categories with an ordering","Infinite numerical values","Finite numerical values"], c:0},
      {q:"Which is an example of nominal data?", a:["Colour","Letter grade","Movie rating","Sentiment level"], c:0},
      {q:"What is ordinal data?", a:["Values in a category with an ordering","Values in categories with no order","Numerical values that are infinite","Numerical values that are countable"], c:0},
      {q:"Which is an example of ordinal data?", a:["Letter grades","Country of birth","Colour","University name"], c:0},

      // =========================
      // DATA REPRESENTATION
      // =========================

      {q:"How can data be represented by humans?", a:["Writing, drawings, speech, and body language","Only binary numbers","Only databases","Only computer files"], c:0},
      {q:"How is data represented by computers?", a:["Using bits and binary interpretation","Using only decimal numbers","Using only text","Using only images"], c:0},
      {q:"Where can data be located according to the lecture?", a:["In memory and in files","Only in RAM","Only in databases","Only in cloud services"], c:0},
      {q:"What is the basic representation of data in computers?", a:["Bits","Pixels","Characters","Files"], c:0},
      {q:"What is the interpretation of computer data based on?", a:["Binary","Decimal only","Hexadecimal only","ASCII only"], c:0},
      {q:"What is the decimal value of binary 0110?", a:["4","5","6","7"], c:2},
      {q:"What is hexadecimal A equal to in decimal?", a:["8","9","10","11"], c:2},
      {q:"What is hexadecimal F equal to in decimal?", a:["13","14","15","16"], c:2},
      {q:"What is ASCII used for?", a:["Converting numbers to characters","Compressing images","Storing databases","Creating binary files"], c:0},
      {q:"What does Unicode provide compared to ASCII?", a:["More characters, including other languages, math symbols, and emoji","Fewer characters using less storage","Only numbers","Only English letters"], c:0},
      {q:"How are images represented according to the lecture?", a:["As pixels","As database tables","As text only","As XML tags"], c:0},
      {q:"What three colours are represented by the three bytes in the example?", a:["Red, green, and blue","Red, yellow, and blue","Cyan, magenta, and yellow","Black, white, and grey"], c:0},
      {q:"How can the RGB colour value 79, 38, 131 be represented?", a:["#4F2683","#793813","#4F8313","#26834F"], c:0},

      // =========================
      // FILE FORMATS
      // =========================

      {q:"Which three types of file formats are discussed in the lecture?", a:["Text, binary, and XML","JPEG, PNG, and GIF","RAM, ROM, and CPU","ASCII, RGB, and HTML"], c:0},
      {q:"How are text files commonly encoded?", a:["ASCII, UTF, or Unicode","RGB only","Binary images only","XML only"], c:0},
      {q:"What can invisible characters in text files represent?", a:["Spaces and line breaks","Colours and pixels","Database tables","CPU instructions only"], c:0},
      {q:"What is a characteristic of binary files?", a:["They define their own format or encoding","They are always human readable","They only contain text","They cannot store images"], c:0},
      {q:"Which is an advantage of binary files?", a:["They can store data more compactly","They are easier for humans to read","They always use more storage","They are not specific to programs"], c:0},
      {q:"Which is a disadvantage of binary files?", a:["They are harder for humans to read and program","They require no special format","They always use less processing time","They cannot store data"], c:0},
      {q:"Which is an example of a binary file?", a:["PNG image","Plain text document","XML document","ASCII text"], c:0},
      {q:"What is XML?", a:["A text file format that is both human and machine readable","A binary-only format","A type of processor","A type of database hardware"], c:0},
      {q:"What is one advantage of XML?", a:["It can represent complex data objects","It always requires less space than binary","It cannot be read by humans","It is not structured"], c:0},
      {q:"What is one disadvantage of XML?", a:["It can require more space than binary or text files","It cannot represent structured data","It cannot be read by computers","It cannot transport data"], c:0},

      // =========================
      // DATA PIPELINE
      // =========================

      {q:"What is the first stage of the data pipeline?", a:["Collect or create","Analyze","Visualize","Store"], c:0},
      {q:"Which stage of the data pipeline deals with invalid and untrusted data?", a:["Validate","Visualize","Analyze","Combine"], c:0},
      {q:"What is the purpose of cleaning data?", a:["To fix or remove incorrect, broken, duplicate, or missing information","To create more duplicate information","To visualize the dataset","To convert all data to binary"], c:0},
      {q:"Which stage removes unneeded and redundant data?", a:["Filter","Collect","Visualize","Analyze"], c:0},
      {q:"Which stage of the data pipeline involves putting data into storage?", a:["Store","Analyze","Clean","Collect"], c:0},
      {q:"Which stage combines data from different sources?", a:["Combine","Validate","Filter","Visualize"], c:0},
      {q:"Which stage is used to examine data and find useful information?", a:["Analyze","Store","Collect","Filter"], c:0},
      {q:"What is the final stage shown in the data pipeline?", a:["Visualize","Collect","Validate","Clean"], c:0},
      {q:"Which can provide data for the data pipeline?", a:["Databases, sensors, measurements, and transactions","Only CPUs","Only text files","Only cloud services"], c:0},
      {q:"What does data science focus on in this course?", a:["Methods for analyzing data sets","Building computer hardware","Designing operating systems","Creating databases only"], c:0},


      // DATASETS & DATA PREPARATION
      {q:"What are three problems that data science datasets can be used to solve?", a:["Classification, regression, and clustering","Sorting, searching, and compiling","Encryption, compression, and networking","Testing, debugging, and deployment"], c:0},
      {q:"What does a typical dataset contain besides features?", a:["A class or output","Only text","A file extension","A regular expression"], c:0},
      {q:"What is data preparation also called by data scientists?", a:["Data wrangling","Data compiling","Data rendering","Data modeling"], c:0},
      {q:"What is another term used for data preparation?", a:["Data munging","Data rendering","Data indexing","Data encoding"], c:0},
      {q:"What is another informal term for data preparation?", a:["Data janitor work","Data engineering","Data mining","Data processing"], c:0},
      {q:"Approximately what percentage of their time can data scientists spend collecting and preparing unruly digital data?", a:["50% to 80%","5% to 10%","10% to 20%","90% to 100%"], c:0},
      {q:"Why is data preparation necessary before exploring data?", a:["The data may need to be cleaned and organized","It automatically creates a machine learning model","It converts all data into images","It removes the need for analysis"], c:0},
      {q:"What can happen when data is copied and pasted from a web page or document?", a:["The data can have an incomplete or irregular format","The data always becomes perfectly formatted","The data is automatically converted to binary","The data is automatically analyzed"], c:0},
      {q:"What is one problem that can occur when pasting data into a spreadsheet?", a:["All the data may be placed into one cell","All the data is deleted","The data becomes encrypted","The spreadsheet becomes a database"], c:0},
      {q:"Why might editing a data file by hand be impractical?", a:["The file could contain millions of lines","The file may contain only one line","The file cannot contain numbers","The file is always encrypted"], c:0},

      // DATA CLEANING EXAMPLE
      {q:"In the wine spending example, what could be stored in the same cell?", a:["The college name and amount spent on wine","A password and username","A date and file name","A city and country"], c:0},
      {q:"What type of unwanted information can appear in a dataset?", a:["Unwanted text","Only numbers","Only formulas","Only headers"], c:0},
      {q:"What is another issue that can occur in a poorly prepared dataset?", a:["Extra rows","Automatic sorting","Automatic validation","Encrypted columns"], c:0},
      {q:"What kind of information may be missing from an incomplete dataset?", a:["Required data values","File extensions","Computer programs","Regular expressions"], c:0},
      {q:"What was an example of text that was incorrectly included with a value in the wine dataset?", a:["A pound sign","An HTML tag","An IP address","A comma"], c:0},
      {q:"What format can be used to separate fields using tabs?", a:["TSV","XML","PNG","MP3"], c:0},
      {q:"What does TSV stand for?", a:["Tab-Separated Values","Text-Structured Variables","Typed Spreadsheet Values","Table-Separated Variables"], c:0},
      {q:"What does CSV stand for?", a:["Comma-Separated Values","Computer-Separated Variables","Categorical Structured Values","Column-Sorted Values"], c:0},
      {q:"What can potentially be used to modify messy data automatically?", a:["Regex or a program","A video editor","A graphics editor","A media player"], c:0},
      {q:"When can editing a short data file by hand be reasonable?", a:["When the file has around 30 lines","When the file has 30 million lines","When the file is encrypted","When the file contains only images"], c:0},

      // REGULAR EXPRESSIONS
      {q:"What is a regular expression?", a:["A language used to describe text patterns","A database format","A type of spreadsheet","A programming language for graphics"], c:0},
      {q:"What does a regular expression describe?", a:["A certain amount or pattern of text","A computer's hardware","A database schema","A file's storage size"], c:0},
      {q:"What is required to use regular expressions?", a:["A regular expression engine","A graphics card","A database server","An XML file"], c:0},
      {q:"What does a regular expression engine do?", a:["Processes expressions and attempts to match them to a string","Converts images into pixels","Stores data in a database","Calculates averages"], c:0},
      {q:"Which programming language has a regular expression engine?", a:["Python","C#","Swift","Kotlin"], c:0},
      {q:"Which programming language has a regular expression engine?", a:["Java","C++","JavaScript","R"], c:0},
      {q:"Are regular expressions always completely compatible between different languages and tools?", a:["No, they can use slightly different syntax","Yes, they always use identical syntax","Only in Python","Only in Java"], c:0},
      {q:"What is one use of Regex in data preparation?", a:["Identifying, cleaning, and transforming messy text","Creating images","Running databases","Calculating hardware performance"], c:0},
      {q:"How can Regex help with data cleaning and standardization?", a:["It can locate variations and standardize them","It automatically creates new datasets","It converts all data to images","It deletes every text value"], c:0},
      {q:"What Regex concept can be used to find non-digit characters?", a:["\\D","\\s+","\\d+","\\W"], c:0},

      // REGEX USES
      {q:"What can \\s+ be used to help clean?", a:["Whitespace","Numbers","Images","Dates only"], c:0},
      {q:"What can Regex remove from numerical data?", a:["Currency symbols, parentheses, or dashes","Only decimal points","Database tables","File extensions"], c:0},
      {q:"What can Regex help remove from text?", a:["HTML tags or markdown markers","Computer hardware","Database records","Image pixels"], c:0},
      {q:"What is one use of Regex for information extraction?", a:["Extracting timestamps from logs","Calculating variance","Creating spreadsheets","Sorting images"], c:0},
      {q:"What can Regex extract from server log files?", a:["IP addresses or error codes","Images or videos","Excel formulas","Audio files"], c:0},
      {q:"What can Regex do with a raw email string?", a:["Pull out a domain name","Convert it into an image","Calculate its mean","Store it as binary"], c:0},
      {q:"How can Regex help with dates?", a:["Break a date into components such as day, month, and year","Automatically predict future dates","Remove every date","Convert dates into images"], c:0},
      {q:"What date format is given as an example for universal formatting?", a:["YYYY-MM-DD","DD-YYYY-MM","MM-DD-YYYY","YYYY-DD-MM"], c:0},
      {q:"How can Regex be used for data validation?", a:["It can check whether incoming text fits required patterns","It automatically fills in missing values","It calculates standard deviation","It creates charts"], c:0},
      {q:"What can Regex validate?", a:["Email addresses, ZIP codes, and Social Security Numbers","Images, videos, and audio","Means, medians, and modes","Databases and spreadsheets"], c:0},

      // STATISTICS
      {q:"What are three types of statistical measures?", a:["Central tendency, spread, and correlations","Classification, regression, and clustering","Mean, XML, and Regex","Text, binary, and categorical"], c:0},
      {q:"What is the mean?", a:["The sum of the values divided by the number of values","The most common value","The middle value only","The largest value"], c:0},
      {q:"What is another name for the mean?", a:["Average","Median","Mode","Range"], c:0},
      {q:"What is the median?", a:["The value separating the higher half from the lower half","The most frequently occurring value","The largest value","The difference between two values"], c:0},
      {q:"What is the mode?", a:["The value that appears most often","The middle value","The average value","The smallest value"], c:0},
      {q:"What is the range?", a:["The difference between the largest and smallest values","The average of all values","The middle value","The most common value"], c:0},
      {q:"What is variance used to describe?", a:["How far a set of numbers is spread out from its average","The middle value of a dataset","The most common value","The largest value"], c:0},
      {q:"What is standard deviation?", a:["The square root of the variance","The square of the variance","The average of the dataset","The difference between the mean and median"], c:0},
      {q:"What does Pearson correlation measure?", a:["The strength of the connection between two variables","The number of values in a dataset","The largest value in a dataset","The amount of missing data"], c:0},
      {q:"What range can Pearson correlation have?", a:["-1 to 1","0 to 100","-100 to 100","1 to 10"], c:0},

      // CORRELATION
      {q:"What does a Pearson correlation of -1 represent?", a:["A perfect negative correlation","No correlation","A perfect positive correlation","A weak correlation"], c:0},
      {q:"What does a Pearson correlation of 0 represent?", a:["No correlation","A perfect negative correlation","A perfect positive correlation","A perfect nonlinear correlation"], c:0},
      {q:"What does a Pearson correlation of 1 represent?", a:["A perfect positive correlation","No correlation","A perfect negative correlation","A weak correlation"], c:0},
      {q:"What does Pearson correlation basically attempt to do?", a:["Draw a line of best fit through the data","Remove missing values","Calculate the median","Group data into categories"], c:0},
      {q:"What type of correlations does Pearson correlation work for?", a:["Linear correlations","Only categorical correlations","Only nonlinear correlations","Only text correlations"], c:0},
      {q:"Does finding a correlation necessarily mean that one variable causes another?", a:["No","Yes","Only when the correlation is 1","Only when the correlation is -1"], c:0},


      // DATASETS & STATISTICS
      {q:"What are three problems that data science datasets can be used to solve?", a:["Classification, regression, and clustering","Sorting, searching, and compiling","Encryption, compression, and networking","Testing, debugging, and deployment"], c:0},
      {q:"What are the two main types of statistics?", a:["Descriptive and inferential statistics","Quantitative and categorical statistics","Linear and nonlinear statistics","Discrete and continuous statistics"], c:0},
      {q:"What does descriptive statistics help us do?", a:["Simplify and organize large amounts of data","Predict the future with certainty","Create machine learning models","Remove all outliers"], c:0},
      {q:"Why is descriptive statistics useful?", a:["It makes large amounts of data easier to understand","It guarantees accurate predictions","It removes the need for data collection","It converts data into binary"], c:0},
      {q:"What does inferential statistics use to make conclusions about a larger group?", a:["A small amount of data","Every possible data point","Only categorical data","Only historical data"], c:0},
      {q:"What larger group are inferential statistics used to draw conclusions about?", a:["A population","A sample","A variable","A dataset column"], c:0},

      // MEASURES OF CENTRAL TENDENCY
      {q:"What is the arithmetic mean?", a:["The sum of the values divided by the number of values","The most frequently occurring value","The middle value","The largest value"], c:0},
      {q:"What is another name for the arithmetic mean?", a:["Average","Mode","Median","Range"], c:0},
      {q:"What is the geometric mean useful for?", a:["Comparing values that change over time","Finding the largest value","Finding the middle value","Counting categories"], c:0},
      {q:"What type of values is the geometric mean especially useful for?", a:["Growth rates or percentages","Only whole numbers","Only categorical values","Only negative values"], c:0},
      {q:"Which is an example where the geometric mean can be useful?", a:["Investment returns","Finding a student's mode","Counting computers","Finding the maximum value"], c:0},
      {q:"When values vary greatly, which mean can be useful?", a:["Geometric mean","Mode","Median","Range"], c:0},
      {q:"What is the mode?", a:["The value that has the maximum frequency","The value in the middle","The average of all values","The largest value"], c:0},
      {q:"What is the median?", a:["The value that divides a set into two equal parts","The most common value","The average of all values","The difference between two values"], c:0},
      {q:"In a dataset, what does the median separate?", a:["The observations above and below it","The largest and smallest values","The positive and negative values","The categorical and numerical values"], c:0},

      // VARIABILITY & STANDARD DEVIATION
      {q:"What do measures of spread describe?", a:["Variability in the data","The most common value","The middle value","The number of categories"], c:0},
      {q:"What is standard deviation?", a:["The square root of the variance","The square of the variance","The average of the values","The difference between the mean and median"], c:0},
      {q:"Why is standard deviation calculated as the square root of variance?", a:["So it has the same units as the individual values","So it becomes a percentage","So it removes outliers","So it becomes a correlation"], c:0},
      {q:"What problem occurs with the units of variance?", a:["They are not the same as the units of the individual values","They cannot contain numbers","They are always percentages","They are always negative"], c:0},
      {q:"What does standard deviation allow us to do regarding units?", a:["Use the same units as the individual data values","Remove the units completely","Convert the values to percentages","Change the values into categories"], c:0},

      // CORRELATION & COVARIANCE
      {q:"What does correlation measure?", a:["The relationship between two variables","The number of observations","The spread of one variable","The middle of a dataset"], c:0},
      {q:"What is the possible range of a correlation value?", a:["-1 to 1","0 to 100","-100 to 100","1 to 10"], c:0},
      {q:"What does a correlation of -1 represent?", a:["A perfect negative correlation","No correlation","A perfect positive correlation","A weak correlation"], c:0},
      {q:"What does a correlation of 0 represent?", a:["No correlation at all","A perfect negative correlation","A perfect positive correlation","Maximum correlation"], c:0},
      {q:"What does a correlation of 1 represent?", a:["A perfect correlation","No correlation","A perfect negative correlation","A weak correlation"], c:0},
      {q:"What does covariance measure?", a:["The relationship between two variables","The middle value of a dataset","The frequency of a value","The number of categories"], c:0},
      {q:"What range can covariance take?", a:["Negative infinity to positive infinity","-1 to 1","0 to 1","0 to 100"], c:0},
      {q:"What does covariance help us understand?", a:["The direction of a relationship","Only the strength of a relationship","The median of a dataset","The number of outliers"], c:0},
      {q:"What does covariance assess?", a:["How much two variables change together","How many values are in a dataset","How far values are from zero","How many categories exist"], c:0},
      {q:"What does correlation show compared with covariance?", a:["Both direction and strength","Only direction","Only frequency","Only the average"], c:0},
      {q:"What does covariance mainly show?", a:["The direction of the relationship","The exact strength on a -1 to 1 scale","The median","The standard deviation"], c:0},
      {q:"If two variables increase together, what type of relationship would covariance indicate?", a:["A positive relationship","A negative relationship","No relationship","A categorical relationship"], c:0},

      // QUARTILES & IQR
      {q:"What do quartiles divide a dataset into?", a:["Four equal parts","Two equal parts","Three equal parts","Five equal parts"], c:0},
      {q:"What does Q1 represent?", a:["The first quartile and the median of the lower half","The middle value of the entire dataset","The median of the upper half","The largest value"], c:0},
      {q:"What percentage of the data is below Q1?", a:["25%","50%","75%","100%"], c:0},
      {q:"What is Q2?", a:["The second quartile or median","The first quartile","The third quartile","The range"], c:0},
      {q:"What does Q2 divide the dataset into?", a:["Two equal parts","Four equal parts","Three equal parts","Two unequal parts"], c:0},
      {q:"What does Q3 represent?", a:["The median of the upper half","The median of the lower half","The middle value of the entire dataset","The minimum value"], c:0},
      {q:"What percentage of the data does Q3 separate from the top?", a:["25%","50%","75%","10%"], c:0},
      {q:"What does IQR stand for?", a:["Interquartile Range","Internal Quartile Range","Individual Quantitative Range","Interrelated Quartile Range"], c:0},
      {q:"What is the interquartile range?", a:["The range between Q1 and Q3","The range between the minimum and maximum","The difference between the mean and median","The range between Q2 and Q3"], c:0},
      {q:"Why is IQR useful when compared with the regular range?", a:["It is less sensitive to extreme values","It always has a larger value","It removes the median","It measures correlation"], c:0},
      {q:"What should be done before calculating Q1 and Q3 for IQR?", a:["Arrange the data in ascending order","Remove the median","Calculate the correlation","Convert the data to percentages"], c:0},

      // OUTLIERS & SKEWNESS
      {q:"What can IQR be used for?", a:["Outlier detection","Calculating correlation","Finding the mode only","Creating categorical data"], c:0},
      {q:"In which areas is IQR being used for outlier detection?", a:["Finance, healthcare, and quality control","Gaming, networking, and programming","Education, music, and art","Sports, travel, and weather"], c:0},
      {q:"When is a data point considered an outlier using the IQR method?", a:["When it falls outside Q1 - 1.5 × IQR or Q3 + 1.5 × IQR","When it is equal to the median","When it is below Q2","When it is equal to Q1"], c:0},
      {q:"What does skewness tell us?", a:["Whether data points are skewed left or right in relation to the mean","How many values are in a dataset","The correlation between two variables","The number of categories"], c:0},
      {q:"What does skewness based on quartiles examine?", a:["The distances between the quartiles","The number of observations","The maximum and minimum values only","The correlation between variables"], c:0},
      {q:"In a symmetric distribution, what should ideally be equal?", a:["Q3 minus the median and the median minus Q1","Q1 and Q3","The mean and mode only","The minimum and maximum"], c:0},

      // DISTRIBUTIONS & FREQUENCY
      {q:"What does a histogram represent?", a:["The frequency of each interval of continuous data","The relationship between two variables","Only categorical data","The median of a dataset"], c:0},
      {q:"How are the bars in a histogram described?", a:["They have equal width","They have random widths","They overlap completely","They are circular"], c:0},
      {q:"What does a frequency polygon use to represent frequency?", a:["Lines connecting frequency points","Circular slices","Bars only","Quartiles"], c:0},
      {q:"How is a frequency polygon different from a histogram?", a:["It uses lines instead of bars","It only displays categorical data","It does not display frequency","It only displays outliers"], c:0},
      {q:"What does a pie chart show?", a:["Proportional sizes as slices of a circle","Continuous data using bars","Correlation between variables","The median of a dataset"], c:0},
      {q:"What is a normal distribution?", a:["A symmetrical, bell-shaped distribution with data concentrated around the mean","A distribution with only negative values","A distribution with no mean","A distribution containing only outliers"], c:0},
      {q:"What is a skewed distribution?", a:["A distribution that is not symmetric","A perfectly symmetrical distribution","A distribution with no median","A distribution with no variables"], c:0},

      // INFERENTIAL STATISTICS & CONFIDENCE INTERVALS
      {q:"Why is analyzing an entire population often impossible?", a:["The entire population may be too large to analyze","Populations cannot contain data","Populations only contain categorical data","Statistics cannot be used on populations"], c:0},
      {q:"What do we collect instead of analyzing an entire population?", a:["A sample","A histogram","A quartile","A correlation"], c:0},
      {q:"What can inferential statistics help us do with a sample?", a:["Make conclusions about the whole population","Remove the population","Guarantee the result","Convert the sample into binary"], c:0},
      {q:"What do confidence intervals help quantify?", a:["Uncertainty of an estimate","The mode of a dataset","The number of variables","The correlation strength"], c:0},
      {q:"What does a confidence interval provide?", a:["A range of values","A single guaranteed value","A frequency table","A correlation coefficient"], c:0},
      {q:"In the example, if the mean is 4.63 and the standard deviation is 0.54, what is the stated 95% confidence interval?", a:["4.480 to 4.780","3.63 to 5.63","4.09 to 5.17","0.54 to 4.63"], c:0},

      // PYTHON
      {q:"What programming language does the final slide introduce?", a:["Python","Java","C++","C#"], c:0},
      {q:"What does Python have that is useful for data analysis and learning?", a:["Many functions and libraries","Only graphics tools","Only database tools","Only networking libraries"], c:0},

      
    // R BASICS
    {q:"What programming language is introduced in Unit 02b?", a:["R","Python","Java","C++"], c:0},
    {q:"What topics are mentioned as part of R basics?", a:["Variables, vectors, and loops","Classes, objects, and inheritance","HTML, CSS, and JavaScript","Threads, sockets, and processes"], c:0},
    {q:"What can be used when help is needed for R functions?", a:["The help() function","The assist() function","The guide() function","The manual() function"], c:0},
    {q:"What example is given for getting help with a function such as mean?", a:["help(mean)","mean(help)","?mean only","gethelp(mean)"], c:0},

    // CENTRAL TENDENCY WITH R
    {q:"Which statistical topic is demonstrated using R?", a:["Measures of central tendency","Network security","File compression","Machine learning classification"], c:0},
    {q:"Which R function can be used to calculate the mean?", a:["mean()","average()","avg()","central()"], c:0},
    {q:"What type of statistical measure does mean() calculate?", a:["Mean","Median","Mode","Range"], c:0},
    {q:"What can you use when you need information about how to use mean() in R?", a:["help(mean)","mean.info()","info(mean)","describe(mean)"], c:0},

    // SPREAD & VARIABILITY
    {q:"Which R function is used to calculate variance?", a:["var()","variance()","spread()","sdvar()"], c:0},
    {q:"What statistical concept does var() calculate?", a:["Variance","Mean","Median","Correlation"], c:0},
    {q:"Which topic is demonstrated with the var() function?", a:["Measures of spread or variability","Measures of central tendency only","Frequency labels","Data visualization only"], c:0},
    {q:"Which R function is associated with calculating quartiles and summary statistics?", a:["quantile()","quartile()","fourparts()","split()"], c:0},
    {q:"Which R function can provide a statistical summary of data?", a:["summary()","statistics()","statsummary()","describeData()"], c:0},
    {q:"Which R function is listed alongside summary(), quantile(), and IQR()?", a:["fivenum()","fournum()","fivevalues()","five()"], c:0},
    {q:"What does IQR() represent?", a:["Interquartile range","Individual quantitative range","Internal quantity ratio","Indexed quartile result"], c:0},
    {q:"Which R function can calculate the interquartile range?", a:["IQR()","range4()","quartileRange()","spread()"], c:0},
    {q:"Which R function can calculate quantiles?", a:["quantile()","quartiles()","q()","percentile()"], c:0},
    {q:"What does the PDF note about calculating the 25% quantile in R?", a:["R is a little different from the demonstrated method","R cannot calculate it","R always gives the same result as the manual method","R only supports 50% quantiles"], c:0},

    // CORRELATION & COVARIANCE
    {q:"Which R function is used for correlation?", a:["cor()","corr()","correlation()","relate()"], c:0},
    {q:"What statistical relationship can be calculated with cor()?", a:["Correlation","Variance","Median","Frequency"], c:0},
    {q:"Which R function is used for covariance?", a:["cov()","covariance()","co()","relationship()"], c:0},
    {q:"What statistical relationship can be calculated with cov()?", a:["Covariance","Correlation","Mode","IQR"], c:0},
    {q:"Which function would you use to calculate correlation between two columns in R?", a:["cor()","cov()","mean()","hist()"], c:0},
    {q:"Which function would you use to calculate covariance between two columns in R?", a:["cov()","cor()","var()","plot()"], c:0},

    // HISTOGRAMS
    {q:"What type of graph is demonstrated in R using hist()?", a:["Histogram","Scatter plot","Pie chart","Frequency polygon"], c:0},
    {q:"Which R function creates a histogram?", a:["hist()","histogram()","bar()","frequency()"], c:0},
    {q:"What function is used in the example with x <- c(40, 41, 42, 43, 50)?", a:["hist(x)","plot(x)","pie(x)","graph(x)"], c:0},
    {q:"What type of skew does the histogram example with 40, 41, 42, 43, and 50 have?", a:["Positive skew","Negative skew","No skew","Perfect symmetry"], c:0},
    {q:"Which function is used to create another histogram after changing the values of x?", a:["hist()","plot()","pie()","lines()"], c:0},
    {q:"What type of data visualization is a histogram?", a:["A frequency distribution graph","A relationship graph between two variables","A circular graph","A line graph"], c:0},

    // SCATTER PLOTS
    {q:"Which R function is used to create scatter plots?", a:["plot()","scatter()","points()","graph()"], c:0},
    {q:"What type of graph is demonstrated using plot()?", a:["Scatter plot","Histogram","Pie chart","Frequency polygon"], c:0},
    {q:"What can the plot() function be used for in the examples?", a:["Creating scatter plots","Calculating variance","Finding quartiles","Calculating covariance only"], c:0},
    {q:"Which R function can be used to add lines to plots?", a:["lines()","addline()","line()","drawlines()"], c:0},
    {q:"What does the lines() function allow you to do?", a:["Add lines to plots","Calculate correlation","Create a data frame","Calculate the mean"], c:0},

    // PIE CHARTS
    {q:"Which R function is used to create a pie chart?", a:["pie()","chart()","circle()","piechart()"], c:0},
    {q:"What type of graph does pie() create?", a:["Pie chart","Histogram","Scatter plot","Frequency polygon"], c:0},

    {q:"What does lbls contain in the pie chart example?", a:["Labels such as US, UK, and Australia","Numerical slice values","The percentages","The chart title"], c:0},
    {q:"What function is used to calculate percentages in the pie chart example?", a:["round()","percent()","percentage()","calcpercent()"], c:0},
    {q:"What operation is used to calculate the percentages for the pie chart?", a:["slices/sum(slices)*100","slices*sum(slices)","sum(slices)/100","slices/100"], c:0},
    {q:"What function is used to combine the labels and percentages?", a:["paste()","combine()","join()","merge()"], c:0},
    {q:"What argument is used to specify the labels in the pie() function?", a:["labels","lbl","names","text"], c:0},
    {q:"What argument is used to specify the title of the pie chart?", a:["main","title","heading","caption"], c:0},

    // ARRAYS & DATA FRAMES
    {q:"What data structure is specifically demonstrated after arrays?", a:["Data frame","Linked list","Hash table","Binary tree"], c:0},
    {q:"Which built-in R dataset is used to demonstrate data frames?", a:["mtcars","iris","wine","diabetes"], c:0},
    {q:"What does mtcars[1,] select?", a:["The first row of mtcars","The first column of mtcars","Rows 1 through 3","The mpg column"], c:0},
    {q:"What does mtcars[1:3,] select?", a:["Rows 1 through 3","Columns 1 through 3","The first three values","The first three named columns"], c:0},
    {q:"What does mtcars[1] select?", a:["The first column","The first row","The first three rows","The mpg column only"], c:0},
    {q:"What does mtcars[\"mpg\"] access?", a:["The mpg column","The first row","The first three rows","The hp column"], c:0},
    {q:"What does mtcars[c(\"mpg\", \"hp\")] access?", a:["The mpg and hp columns","Rows 1 and 2","The first two values","Only the mpg column"], c:0},
    {q:"What symbol is used to read columns from a dataset in R?", a:["$","@","#","%"], c:0},
    {q:"Which dataset is used in the final example of the PDF?", a:["Iris plants data","California Housing","Diabetes","mtcars only"], c:0},
    {q:"Which function is used to display the first part of the iris dataset?", a:["head(iris)","first(iris)","show(iris)","top(iris)"], c:0},
    {q:"Which function is used to create plots of the iris dataset?", a:["plot()","irisplot()","graph()","draw()"], c:0},

    {q:"What software is covered in Unit/Week 03a?", a:["Python and R","C++ and Java","SQL and C#","JavaScript and PHP"], c:0},
    {q:"What software can be installed using WinPython?", a:["Python","R","SQL","Java"], c:0},
    {q:"What type of file is used in the Python diabetes example?", a:["CSV","JSON","XML","TXT"], c:0},
    {q:"What dataset is used in the Python CSV reading example?", a:["diabetes.csv","iris.csv","faithful.csv","plants.csv"], c:0},
    {q:"What is one task performed on the diabetes data in Python?", a:["Removing outliers","Creating a website","Encrypting the data","Converting it to audio"], c:0},
    {q:"What type of visualization is used for correlations in Python?", a:["Heatmap","Pie chart","Box plot","Cumulative graph"], c:0},
    {q:"What is plotted when examining the distribution of a variable in Python?", a:["The distribution of the variable","Only categorical labels","Only outliers","The file size"], c:0},
    {q:"What is the purpose of normalizing data?", a:["To make the minimum 0 and maximum 1","To remove every value below zero","To make every value equal","To convert numbers into text"], c:0},
    {q:"What value should the minimum become after normalization?", a:["0","1","-1","100"], c:0},
    {q:"What value should the maximum become after normalization?", a:["1","0","-1","100"], c:0},
    {q:"What is subtracted from a value during normalization?", a:["The minimum","The maximum","The mean","The median"], c:0},
    {q:"What is the denominator used in the normalization process?", a:["The range (max-min)","The mean","The median","The standard deviation"], c:0},
    {q:"Which formula represents the normalization process described in the slides?", a:["(value-min)/(max-min)","(value+min)/(max-min)","(value-max)/(max+min)","value/(mean+median)"], c:0},
    {q:"What is the normalized minimum of the dataset (1,2,3,3,3,4,5)?", a:["0","1","-1","5"], c:0},
    {q:"What is the normalized maximum of the dataset (1,2,3,3,3,4,5)?", a:["1","0","5","-1"], c:0},
    {q:"What is the range of the dataset (1,2,3,3,3,4,5)?", a:["4","5","3","6"], c:0},
    {q:"What is the range of the dataset (6,7,8,8,8,9,10)?", a:["4","10","6","8"], c:0},
    {q:"What is the range of the dataset (1,2,4,8,16,101)?", a:["100","101","99","102"], c:0},
    {q:"Which Python topic follows the introduction of normalization?", a:["Standardizing data","Reading CSV files","Correlation heatmaps","Removing outliers"], c:0},
    {q:"What is another data preprocessing technique covered in Unit 03a?", a:["Standardizing data","Sorting alphabetically","Encrypting files","Compressing images"], c:0},
    {q:"What is one advantage of data preprocessing?", a:["Improves data quality","Removes the need for analysis","Makes all data identical","Prevents data from being stored"], c:0},
    {q:"How does data preprocessing improve data quality?", a:["It cleans and organizes raw data","It deletes all numerical data","It converts data into images","It removes every feature"], c:0},
    {q:"How can data preprocessing enhance model accuracy?", a:["By removing noise and irrelevant data","By increasing the number of errors","By deleting the target variable","By making every value identical"], c:0},
    {q:"How can preprocessing help reduce overfitting?", a:["By handling outliers and redundant features","By adding random errors","By removing all training data","By avoiding model evaluation"], c:0},
    {q:"How can scaled data affect training speed?", a:["It can reduce computation time","It always doubles computation time","It prevents training","It makes computation impossible"], c:0},
    {q:"Why does preprocessing help ensure algorithm compatibility?", a:["It converts data into suitable formats for learning models","It removes all algorithms","It converts models into spreadsheets","It prevents data from being analyzed"], c:0},
    {q:"Which dataset is used in the Python example involving iris plants?", a:["iris.csv","diabetes.csv","faithful.csv","plants.txt"], c:0},
    {q:"What type of plot is discussed in R with numerical data?", a:["Scatter plot","Pie chart","Bar chart","Histogram only"], c:0},
    {q:"Which R dataset is used for the scatter plot example?", a:["faithful","iris.csv","diabetes","mtcars"], c:0},
    {q:"What does the R 'faithful' dataset contain?", a:["Observations of the Old Faithful geyser","Measurements of iris flowers","Diabetes patient records","Car specifications"], c:0},
    {q:"Where is the Old Faithful geyser located according to the slides?", a:["Yellowstone National Park","Banff National Park","Algonquin Park","Jasper National Park"], c:0},
    {q:"What does the first feature in the faithful dataset represent?", a:["Duration of geyser eruptions","Waiting time until an eruption","Temperature","Number of eruptions"], c:0},
    {q:"What unit is used for eruption duration in the faithful dataset?", a:["Minutes","Seconds","Hours","Days"], c:0},
    {q:"What does the second feature in the faithful dataset represent?", a:["Waiting period until the next eruption","Duration of the eruption","Temperature of the geyser","Height of the geyser"], c:0},
    {q:"What can scatter plots be used to visually examine?", a:["Correlations","File sizes","Passwords","Program execution time"], c:0},
    {q:"Which other R dataset is suggested for visually seeing correlations?", a:["iris","faithful","diabetes","cars"], c:0},
    {q:"What type of graph is discussed for cumulative relative frequency in R?", a:["Cumulative relative frequency graph","Pie chart","Scatter plot only","Heatmap"], c:0},
    {q:"What does a cumulative relative frequency graph show?", a:["The cumulative relative frequency distribution of a quantitative variable","Only categorical labels","Only the mean","Only the maximum value"], c:0},
    {q:"In the faithful example, what does a point on the cumulative relative frequency graph represent?", a:["The frequency proportion of eruptions with durations less than or equal to a given level","The average waiting time","The maximum eruption duration","The number of geysers"], c:0},
    {q:"What type of data is specifically discussed in the R categorical data section?", a:["Categorical data","Only continuous data","Only time-series data","Only image data"], c:0},
    {q:"How does R compute skewness according to the slides?", a:["Using central moments","Using only the median","Using only the range","Using a pie chart"], c:0},
    {q:"What statistical concept has a dedicated section after central moments?", a:["Skewness","Normalization","Correlation heatmaps","Outlier removal"], c:0},
    {q:"Which statistical concept has a dedicated section after skewness?", a:["Kurtosis","Normalization","Covariance","IQR"], c:0},
    {q:"What R help command is suggested for learning about kurtosis?", a:["help(kurtosis)","help(skewness)","help(normal)","help(plot)"], c:0},
    {q:"Which distribution is specifically covered in R near the end of Unit 03a?", a:["Normal distribution","Binomial distribution","Poisson distribution","Uniform distribution"], c:0},
    {q:"What type of plot is covered on the final page of Unit 03a?", a:["Box plot","Pie chart","Heatmap","Scatter plot"], c:0},
    {q:"Which topic is scheduled for Week 04 after Python and R?", a:["Supervised Learning and Model Evaluations","Unsupervised Learning only","Data Preparation","Test 1"], c:0},
    {q:"Which topic is scheduled for Week 05?", a:["Unsupervised Learning and Clustering","Python and R","Data Preparation","Model Evaluations only"], c:0},
    {q:"What occurs during Week 06 according to the tentative schedule?", a:["Fall Study Week","Test 1","Introduction to Data Science","Supervised Learning"], c:0},
    {q:"What is scheduled for Week 07?", a:["Review on Tuesday and Test 1 on Thursday","Fall Study Week","Python installation","Supervised Learning"], c:0},
    {q:"What review calculation is given at the beginning of Unit 03a?", a:["Computing the IQR and determining outliers","Computing a correlation heatmap","Normalizing the data","Creating a box plot"], c:0},

    {q:"What software is covered in Unit/Week 03b?", a:["Python and R","C++ and Java","SQL and C#","JavaScript and PHP"], c:0},
    {q:"What is one topic reviewed at the beginning of Unit 03b?", a:["Python code calculations","Database design","Web development","Object-oriented programming"], c:0},
    {q:"What does the R plot() review question involve?", a:["Using 2 variables","Using 10 variables","Using only categorical data","Using no variables"], c:0},
    {q:"What can an R plot with two variables help show?", a:["The relationship between the variables","The file size","The program's memory usage","The number of Python libraries"], c:0},
    {q:"What does a correlation heatmap show?", a:["Correlations between variables","Only variable names","Only missing values","The order of rows"], c:0},
    {q:"What should be identified when examining a correlation heatmap?", a:["The largest and smallest correlations","Only the first variable","Only the diagonal values","The number of rows"], c:0},
    {q:"What can the largest and smallest correlations help explain?", a:["Relationships between variables","The computer's CPU speed","The size of a CSV file","The number of Python packages"], c:0},
    {q:"Which Python library is described as Numerical Python?", a:["numpy","pandas","matplotlib","scipy"], c:0},
    {q:"What is numpy primarily used for?", a:["Scientific computing, data science, and machine learning","Creating websites","Managing email","Editing documents"], c:0},
    {q:"What type of arrays does numpy provide?", a:["N-dimensional arrays (ndarray)","Only one-dimensional strings","Only text arrays","Only image arrays"], c:0},
    {q:"What are numpy ndarrays useful for handling?", a:["Vectors and matrices","Only paragraphs","Only web pages","Only audio files"], c:0},
    {q:"How are numpy ndarrays described in the slides?", a:["Fast, flexible, fixed-size structures","Slow, variable-size files","Text-only structures","Database tables"], c:0},
    {q:"What does the numpy mathematical engine provide?", a:["Statistics, linear algebra, random numbers, and trigonometry","Web hosting and networking","Video editing and audio recording","Database authentication"], c:0},
    {q:"Which Python library is designed for data manipulation, analysis, and cleaning?", a:["pandas","numpy","kNN","R"], c:0},
    {q:"What is a pandas DataFrame?", a:["A two-dimensional tabular data structure","A one-dimensional array only","A Python function","A mathematical formula"], c:0},
    {q:"What does a pandas DataFrame have as labels?", a:["Rows and columns","Only columns","Only rows","Neither rows nor columns"], c:0},
    {q:"What is a pandas DataFrame similar to?", a:["A spreadsheet","A video","A web browser","A text editor"], c:0},
    {q:"What does pandas provide for data ingestion?", a:["Methods for loading data from various formats","Methods for creating animations","Methods for compiling Python","Methods for encrypting files"], c:0},
    {q:"Which pandas method can load a CSV file?", a:["pd.read_csv()","pd.load_csv()","pd.csv_read()","pd.open_csv()"], c:0},
    {q:"Which pandas method can load an Excel file?", a:["pd.read_excel()","pd.excel_read()","pd.load_excel()","pd.open_xlsx()"], c:0},
    {q:"Which pandas method can provide a quick look at the beginning of data?", a:[".head()"," .start()"," .first()"," .begin()"], c:0},
    {q:"Which pandas method provides information about a DataFrame?", a:[".info()"," .details()"," .data()"," .inspect()"], c:0},
    {q:"Which pandas method generates descriptive statistics?", a:[".describe()"," .statistics()"," .summary_stats()"," .stats()"], c:0},
    {q:"What is an expected value?", a:["The long-term average outcome of a variable","The largest possible value","The smallest possible value","The median value only"], c:0},
    {q:"How is an expected value calculated?", a:["Multiply each possible result by its likelihood and add the results","Add all values and divide by the maximum","Multiply all values together","Subtract the probabilities from each value"], c:0},
    {q:"What does expected value describe over the long term?", a:["The average outcome","The maximum outcome","The minimum outcome","The most unusual outcome"], c:0},
    {q:"What type of dice is used in the expected value example?", a:["A fair 6-sided die","A biased 4-sided die","A fair 8-sided die","A 20-sided die"], c:0},
    {q:"What are the possible values when rolling a fair 6-sided die?", a:["1, 2, 3, 4, 5, and 6","0, 1, 2, 3, 4, and 5","2, 4, 6, 8, 10, and 12","1, 3, 5, 7, 9, and 11"], c:0},
    {q:"What is the probability of each result when rolling a fair 6-sided die?", a:["1/6","1/4","1/8","1/2"], c:0},
    {q:"What is the expected value of a fair 6-sided die?", a:["3.5","3","4","6"], c:0},
    {q:"Can you actually roll a 3.5 on a single throw of a standard die?", a:["No","Yes","Only with a biased die","Only after six throws"], c:0},
    {q:"What does the long-run average of a fair 6-sided die converge to?", a:["3.5","1","6","0"], c:0},
    {q:"Why do casinos rely on negative expected value for players?", a:["To guarantee their baseline profits","To guarantee players always win","To eliminate probability","To make every game fair"], c:0},
    {q:"In the biased 6-sided dice practice question, which values occur twice as often as the others?", a:["1 and 2","3 and 4","5 and 6","All values equally often"], c:0},
    {q:"What is calculated for the biased dice practice problem?", a:["The long-run average or expected value","The median only","The range only","The standard deviation only"], c:0},
    {q:"What is asked for the fair 8-sided dice practice problem?", a:["The expected value","The correlation","The IQR","The variance"], c:0},
    {q:"In the casino practice question, how much does it cost to play the game?", a:["$11","$5","$20","$24"], c:0},
    {q:"In the casino practice question, how often do you win $5?", a:["Half of the time","One quarter of the time","One eighth of the time","Every time"], c:0},
    {q:"In the casino practice question, how often do you win $20?", a:["One quarter of the time","Half of the time","One eighth of the time","Never"], c:0},
    {q:"In the casino practice question, how often do you win $24?", a:["One eighth of the time","Half of the time","One quarter of the time","Every time"], c:0},
    {q:"What happens for the remaining eighth of the casino game?", a:["You win $0","You win $5","You win $20","You win $24"], c:0},
    {q:"What is the casino practice question asking you to consider?", a:["Whether you would play the game many times","Whether the game uses Python","Whether the game needs a DataFrame","Whether the game has correlations"], c:0},
    {q:"Which function is used to filter data stored in DataFrames?", a:["filter()","select()","mutate()","arrange()"], c:0},
    {q:"Which function is used to select data stored in DataFrames?", a:["select()","filter()","mutate()","arrange()"], c:0},
    {q:"Which function is used to modify or create data in a DataFrame?", a:["mutate()","filter()","select()","arrange()"], c:0},
    {q:"Which function is used to arrange data in a DataFrame?", a:["arrange()","filter()","select()","mutate()"], c:0},
    {q:"What is kNN short for?", a:["K Nearest Neighbor","Known Numerical Network","Kernel Nearest Number","K-Normalized Network"], c:0},
    {q:"What can kNN predict?", a:["Discrete classes or numerical values","Only text","Only images","Only file names"], c:0},
    {q:"What values can k be changed to in the kNN examples?", a:["1, 3, 5, and so on","Only 2 and 4","Only 10","Only 0"], c:0},
    {q:"What can kNN use on numerical values?", a:["Weights","Colors","File names","Passwords"], c:0},
    {q:"In the weighted kNN formula, what does w represent?", a:["A weight calculated as 1/d","The predicted class","The number of variables","The total number of rows"], c:0},

    {q:"What is the main topic of Unit/Week 04a?", a:["Supervised Learning","Unsupervised Learning","Data Preparation","Clustering"], c:0},
    {q:"Which topics are covered in Week 04 according to the schedule?", a:["Supervised Learning and Model Evaluations","Python and R","Statistics and Data Analysis","Unsupervised Learning only"], c:0},
    {q:"What are the three types of problems mentioned when discussing datasets?", a:["Classification, regression, clustering","Sorting, searching, hashing","Prediction, storage, networking","Normalization, scaling, cleaning"], c:0},
    {q:"What is the general goal of prediction in supervised learning?", a:["Estimate a function f(x) so that y = f(x)","Remove all features from the dataset","Convert categorical data into text","Create a database"], c:0},
    {q:"In the prediction equation y = f(x), what does x represent?", a:["Input features","The output class only","The test result","The model accuracy"], c:0},
    {q:"In the prediction equation y = f(x), what does y represent?", a:["The output","The input features","The distance metric","The training set"], c:0},
    {q:"What type of output corresponds to regression?", a:["A real number","A categorical label","Only +1 or -1","A Boolean value only"], c:0},
    {q:"What type of output corresponds to classification?", a:["A categorical value","A real number only","A distance","A probability only"], c:0},
    {q:"What does it mean when data is labeled?", a:["There are many pairs of (x,y) values","There are no output values","All values are missing","The data contains only categories"], c:0},
    {q:"What can the feature vector x contain?", a:["Binary, categorical, and real-valued features","Only real numbers","Only binary values","Only text"], c:0},
    {q:"What can y represent in the supervised learning examples?", a:["A class such as +1/-1 or a real number","Only a real number","Only a string","Only a Boolean value"], c:0},
    {q:"What is the task given data (X,Y)?", a:["Build a model f() to predict Y' based on X'","Delete the training data","Find the smallest feature","Convert X into Y"], c:0},
    {q:"What is the purpose of training data?", a:["To estimate the model","To evaluate only unseen data","To remove outliers","To create the test labels"], c:0},
    {q:"What is test data used for?", a:["Testing how well the model predicts unseen data","Training the model only","Creating features","Removing categorical values"], c:0},
    {q:"What is generalization?", a:["The hope that the same f(x) works on unseen data","The process of deleting test data","The process of adding more features","The conversion of categories to numbers"], c:0},
    {q:"What is overfitting?", a:["When f(x) predicts Y well but cannot predict Y' well","When a model performs equally well on all data","When there are too few features","When the dataset has no labels"], c:0},
    {q:"What kind of model do we want to build?", a:["One that generalizes well to unseen data","One that only works on training data","One that memorizes every test value","One that ignores the features"], c:0},
    {q:"Which method is described as instance-based learning?", a:["k-Nearest Neighbor","Logistic Regression","Neural Networks","Linear Regression"], c:0},
    {q:"What does k-Nearest Neighbor use to make predictions?", a:["Nearby data points","Only the mean","A sigmoid curve","Only the training labels"], c:0},
    {q:"What does logistic regression output according to the slides?", a:["0 or 1","Only real numbers","+1 or -1 only","Three categories"], c:0},
    {q:"Which method is mentioned as a later supervised learning method?", a:["Neural Networks","Clustering","Principal Component Analysis","Decision Trees"], c:0},
    {q:"What is the main question concerning training a model?", a:["How to efficiently train or build the model","How to delete the dataset","How to remove all features","How to create more test data"], c:0},
    {q:"What distance metric is used in the nearest neighbor examples?", a:["Euclidean distance","Manhattan distance","Cosine distance","Hamming distance"], c:0},
    {q:"In the simplest nearest neighbor example, how many neighbors are considered?", a:["One","Two","Three","Five"], c:0},
    {q:"In the simplest nearest neighbor example, is a weighting function used?", a:["No","Yes, always","Only for classification","Only for regression"], c:0},
    {q:"How does the simplest nearest neighbor method make a prediction?", a:["It predicts the same output as the nearest neighbor","It predicts the average of every point","It randomly selects an output","It uses a sigmoid function"], c:0},
    {q:"In the more general kNN method, how many neighbors are considered?", a:["k","One only","Zero","All possible datasets"], c:0},
    {q:"What does the optional weighting function in kNN do?", a:["Weights each output based on the distance from the query","Removes the nearest neighbor","Changes categorical data to text","Determines the number of features"], c:0},
    {q:"For numerical outputs, what can kNN predict from the k nearest neighbors?", a:["The average output","The largest output only","The smallest output only","A random output"], c:0},
    {q:"What is one way machine learning models can be plotted easily?", a:["Using 1, 2, or 3 features","Using only 10 features","Using no features","Using only categorical variables"], c:0},
    {q:"What does each feature generally represent when plotting a model?", a:["A dimension","A class","A label","A probability"], c:0},
    {q:"Why can going beyond three features cause problems when plotting models?", a:["The number of dimensions becomes difficult to visualize","The model cannot be trained","The data becomes categorical","The features disappear"], c:0},
    {q:"What is one main-memory approach mentioned for handling nearest neighbor data?", a:["Linear scan","Binary search only","Hashing","Sorting"], c:0},
    {q:"What type of structure is mentioned as a tree-based approach?", a:["Quadtree","Binary tree","Decision tree","AVL tree"], c:0},
    {q:"In the kNN example, what value of k is used?", a:["3","1","5","10"], c:0},
    {q:"In the kNN example, what are the possible output classes?", a:["c1 and c2","0 and 1","Yes and No","A and B and C"], c:0},
    {q:"What is the output of sample1 in the classification example?", a:["c1","c2","0","1"], c:0},
    {q:"What is the output of sample3 in the classification example?", a:["c2","c1","0","1"], c:0},
    {q:"What is the first step in the listed classification workflow?", a:["Choose and import classifiers","Fit the data to the model","Split the dataset","Test the model"], c:0},
    {q:"What is loaded after choosing and importing classifiers?", a:["The dataset with classification labels or outputs","Only the test set","Only the model parameters","A correlation heatmap"], c:0},
    {q:"How is the dataset typically divided into training and testing sets?", a:["70/30 or 80/20","50/50 only","90/10 only","25/75 only"], c:0},
    {q:"What happens after splitting the dataset?", a:["The data is fitted to a learning model","The dataset is deleted","The test labels are removed","The features are converted to text"], c:0},
    {q:"What is the final step in the listed classification workflow?", a:["See how well the model runs on test data","Import the classifier","Load the dataset","Split the dataset"], c:0},
    {q:"What is a true positive?", a:["A sick person correctly identified as sick","A healthy person incorrectly identified as sick","A sick person identified as healthy","A healthy person correctly identified as healthy"], c:0},
    {q:"What is a true negative?", a:["A correct negative prediction","A sick person incorrectly identified as sick","A positive prediction that is wrong","A missing prediction"], c:0},
    {q:"What is a false positive?", a:["Someone identified as sick when they are not","A sick person correctly identified as sick","A healthy person correctly identified as healthy","Someone identified as healthy when they are healthy"], c:0},
    {q:"What is a false negative?", a:["A negative prediction that is incorrect","A positive prediction that is correct","A negative prediction that is correct","A positive prediction that is incorrect"], c:0},
    {q:"What happens to the confusion categories if there are more than two output categories?", a:["They could be a bit different","They disappear completely","They always remain exactly the same","They become regression outputs"], c:0},
    {q:"What type of classification is logistic regression primarily used for?", a:["Binary classification","Clustering","Unsupervised learning","Multi-dimensional plotting"], c:0},
    {q:"What values does the dependent variable have in the logistic regression example?", a:["0 or 1","1 through 10","-1 through 1 only","Any text string"], c:0},
    {q:"What does logistic regression learn from x and y?", a:["Parameters of a curve to estimate the data points","A distance metric only","A quadtree","A random forest"], c:0},
    {q:"What does logistic regression convert independent variables into?", a:["A categorical decision such as yes/no","A continuous image","A database table","A training/test split"], c:0},
    {q:"What is the first step described in how logistic regression works?", a:["Compute a weighted sum of input features","Apply a decision threshold","Calculate an average","Find the nearest neighbor"], c:0},
    {q:"What is the second step in logistic regression?", a:["Pass the result through a sigmoid activation function","Split the dataset","Find the nearest neighbor","Calculate the IQR"], c:0},
    {q:"What does the sigmoid function produce?", a:["A probability","A distance","A feature vector","A class label directly"], c:0},
    {q:"What is the usual decision threshold for logistic regression?", a:["0.5","0","1","0.25"], c:0},
    {q:"What happens when the calculated probability is compared against the threshold?", a:["A final categorical classification is made","The dataset is normalized","The model is deleted","The nearest neighbor is found"], c:0},
    {q:"What does logistic regression find during training?", a:["The best coefficients (β values)","The nearest neighbors","The number of rows","The number of categories only"], c:0},
    {q:"What shape does logistic regression use to fit the data?", a:["An S-curve","A straight line only","A circle","A box"], c:0},
    {q:"What does the S-curve attempt to maximize?", a:["The probability of correctly guessing the observed data","The number of features","The dataset size","The training time"], c:0},
    {q:"What optimization algorithm is specifically mentioned for logistic regression training?", a:["Gradient descent","K-means","Nearest neighbor search","Linear scanning"], c:0},
    {q:"What does logistic regression provide in addition to categorical predictions?", a:["Probability estimates","Only class names","Only distances","Only feature rankings"], c:0},
    {q:"Why can probability estimates from logistic regression be useful?", a:["They are useful in decision-making","They remove the need for training","They eliminate all errors","They prevent classification"], c:0},
    {q:"What type of classification is logistic regression used for?", a:["Binary classification such as Yes/No or Spam/Not Spam","Only clustering","Only regression","Only three-class classification"], c:0},
    {q:"What is one advantage of logistic regression mentioned in the slides?", a:["It requires less computational power than deep learning models","It always requires more computational power","It cannot work with small datasets","It only works with images"], c:0},
    {q:"What size of dataset can logistic regression work well with according to the slides?", a:["Small datasets","Only extremely large datasets","Only one observation","Only millions of observations"], c:0},
    {q:"What is the exercise at the end of Unit 04a asking students to find?", a:["Data where logistic regression could be used to make predictions","A new programming language","A clustering algorithm","A new distance metric"], c:0},

    {q:"What is the main topic of Unit/Week 04b?", a:["Supervised Learning, Linear Regression, and Model Evaluations","Unsupervised Learning and Clustering","Python and R basics","Data Preparation"], c:0},
    {q:"What can logistic regression predict before the output is converted to a category?", a:["A value between 0 and 1","Only negative values","Only values greater than 1","Any integer"], c:0},
    {q:"What does logistic regression ultimately convert its output into?", a:["0 or 1","0 through 10","A real number only","A text string"], c:0},
    {q:"Why is logistic regression more like classification despite its name?", a:["Its output is converted to 0 or 1","It only works with real numbers","It does not use training data","It cannot make predictions"], c:0},
    {q:"What is the first step in the general classification/regression process?", a:["Import the classifier or regression model","Split the dataset","Fit the data","Test the model"], c:0},
    {q:"What is loaded in the second step of the general process?", a:["The dataset with labels or predicted values","Only the testing data","Only the training labels","The model parameters"], c:0},
    {q:"What happens in the third step of the general process?", a:["The dataset is split into train/test sets","The model is tested","The model is imported","The coefficients are deleted"], c:0},
    {q:"What happens after splitting the dataset?", a:["The data is fitted to a learning model","The dataset is discarded","The test data is normalized","The model is deleted"], c:0},
    {q:"What is the final step in the general classification/regression process?", a:["See how well the model runs on test data","Import the model","Load the dataset","Split the dataset"], c:0},
    {q:"What is linear regression?", a:["A simple approach to supervised learning","An unsupervised clustering technique","A type of neural network","A data cleaning method"], c:0},
    {q:"What does linear regression assume about the dependence of Y on X1, X2, ..., Xp?", a:["It is linear","It is always categorical","It is random","It is exponential"], c:0},
    {q:"What does linear regression predict instead of a class?", a:["A predicted value","A category only","A Boolean value only","A distance"], c:0},
    {q:"According to the slides, are true regression functions ever perfectly linear?", a:["No","Yes, always","Only with one predictor","Only with categorical data"], c:0},
    {q:"Despite being simplistic, how is linear regression described?", a:["Extremely useful conceptually and practically","Generally useless","Only useful for classification","Only useful for visualization"], c:0},
    {q:"What type of data is used as an example for linear regression?", a:["Advertising data","Iris data only","Medical data only","Traffic data"], c:0},
    {q:"What relationship is investigated in the advertising data?", a:["Advertising budget and sales","Temperature and rainfall","Age and height","Distance and speed"], c:0},
    {q:"What is one question asked about the advertising data?", a:["How strong is the relationship between advertising budget and sales?","How many rows are in the dataset?","How large is the file?","Which programming language created it?"], c:0},
    {q:"What does the advertising example ask about different media?", a:["Which media contribute to sales","Which media contain missing values","Which media are categorical","Which media are cheapest"], c:0},
    {q:"What prediction question is asked about the advertising data?", a:["How accurately can future sales be predicted?","How many advertisements exist?","How many features should be removed?","How large should the training set be?"], c:0},
    {q:"What type of relationship is investigated in the advertising example?", a:["Whether the relationship is linear","Whether the relationship is categorical","Whether the relationship is random","Whether the relationship is exponential"], c:0},
    {q:"What additional relationship between advertising media is considered?", a:["Synergy among the advertising media","Distance between media","The average media cost","The number of media files"], c:0},
    {q:"How many predictors are used in simple linear regression?", a:["A single predictor X","Two predictors only","Three predictors only","No predictors"], c:0},
    {q:"What do B0 and B1 represent in simple linear regression?", a:["The intercept and slope","The mean and median","The training and test sets","The class and probability"], c:0},
    {q:"What are B0 and B1 also called?", a:["Coefficients or parameters","Features or labels","Residuals or errors","Classes or categories"], c:0},
    {q:"What is a residual?", a:["The difference between the actual value and the predicted value","The average of all predictions","The slope of the line","The number of features"], c:0},
    {q:"What is the formula for a residual given in the slides?", a:["y - ŷ","y + ŷ","ŷ - x","x - y"], c:0},
    {q:"What does the vertical distance between a data point and the regression line represent?", a:["The residual","The intercept","The slope","The predicted class"], c:0},
    {q:"How can error be simply thought of in the regression example?", a:["The average distance that data points are from the regression line","The number of features","The largest predicted value","The number of training examples"], c:0},
    {q:"What is demonstrated with linear regression in Python?", a:["Setting data and finding model parameters","Only loading an image","Only creating a DataFrame","Only calculating an IQR"], c:0},
    {q:"What can be printed after finding the linear regression parameters?", a:["The parameters and R²","Only the residuals","Only the dataset size","Only the mean"], c:0},
    {q:"What can linear regression in Python predict given the original x values?", a:["y values","Only x values","Only categories","Only probabilities"], c:0},
    {q:"What can be done with a new x value in the Python example?", a:["Predict the corresponding new y value","Delete the value","Convert it into a category","Calculate only its distance"], c:0},
    {q:"What type of linear regression uses inputs x0 and x1 with output y?", a:["Multiple linear regression","Simple linear regression","Logistic regression","kNN"], c:0},
    {q:"What is the purpose of assessing the performance of a learning algorithm?", a:["To determine how well the learning algorithm performs","To remove all training data","To create more features","To change categorical data"], c:0},
    {q:"How can examples be divided when assessing a learning algorithm?", a:["Into training and testing sets","Into only validation sets","Into three equal sets always","Into input and output only"], c:0},
    {q:"What are two typical training/testing percentages mentioned?", a:["70%/30% and 80%/20%","50%/50% and 60%/40%","90%/10% and 95%/5%","25%/75% and 40%/60%"], c:0},
    {q:"What is another way to choose examples for training and testing?", a:["Randomly select examples for each set","Always use the first half","Always use the last half","Use only the largest values"], c:0},
    {q:"What type of curve can be shown when assessing model performance?", a:["A learning curve","A sigmoid curve only","A bell curve only","A pie curve"], c:0},
    {q:"What is overfitting?", a:["Finding meaningless regularity in the data","Improving model generalization","Increasing the testing set","Reducing the number of features"], c:0},
    {q:"Why can many possible hypotheses cause a problem?", a:["They can lead to meaningless regularities in the data","They always improve predictions","They eliminate overfitting","They remove the need for testing"], c:0},
    {q:"What does the dice example illustrate about overfitting?", a:["A pattern can appear meaningful even when it is not","Dice always produce the same value","Training data is always accurate","Randomness does not exist"], c:0},
    {q:"What additional dataset can be used besides training and testing data?", a:["A validation dataset","A clustering dataset","A prediction-only dataset","A residual dataset"], c:0},
    {q:"What is one split of the original data suggested when using validation data?", a:["70% training, 15% validation, 15% testing","50% training, 25% validation, 25% testing","80% training, 10% validation, 10% testing","60% training, 20% validation, 20% testing"], c:0},
    {q:"What is the validation data used for?", a:["Evaluating model performance and tuning hyperparameters","Training the final model exclusively","Replacing the training data","Calculating only the residuals"], c:0},
    {q:"What are hyperparameters?", a:["Constants in a model that can be tuned during training","The actual output values","The rows in a dataset","The residuals"], c:0},
    {q:"What is the testing data used for after training?", a:["Providing an unbiased assessment of the final model","Choosing the training algorithm","Tuning the model repeatedly","Creating the validation set"], c:0},
    {q:"Why is it important that testing data is unseen during training?", a:["It allows an unbiased performance assessment","It makes training faster","It increases the number of features","It guarantees 100% accuracy"], c:0},
    {q:"How many samples are in the iris dataset example?", a:["150","100","115","20"], c:0},
    {q:"How many iris samples are used for training in the validation example?", a:["115","150","15","20"], c:0},
    {q:"How many iris samples are used for validation?", a:["15","115","20","150"], c:0},
    {q:"How many iris samples are used for testing?", a:["20","15","115","150"], c:0},
    {q:"For kNN with k=1, how many of the 15 validation samples are correctly predicted in the example?", a:["10","12","14","15"], c:0},
    {q:"For kNN with k=3, how many of the 15 validation samples are correctly predicted?", a:["14","10","12","15"], c:0},
    {q:"For kNN with k=5, how many of the 15 validation samples are correctly predicted?", a:["12","10","14","15"], c:0},
    {q:"Which kNN model is selected as the best model in the example?", a:["k=3","k=1","k=5","k=10"], c:0},
    {q:"How many of the 20 testing samples does the selected k=3 model correctly predict?", a:["17","14","12","20"], c:0},
    {q:"What is the testing accuracy in the kNN example?", a:["85%","70%","75%","90%"], c:0},
    {q:"What is K-fold cross-validation?", a:["Splitting training data into k equally sized folds","Splitting data into only training and testing sets","Using only one validation sample","Training the model once"], c:0},
    {q:"During K-fold cross-validation, what happens to each fold?", a:["Each fold is used once as validation while the others are used for training","Each fold is always used for testing","Every fold is discarded after training","Every fold is used only for training"], c:0},
    {q:"How many times are the model trained and validated during K-fold cross-validation?", a:["k times","Once","Twice","10 times always"], c:0},
    {q:"Which are common choices for k in K-fold cross-validation?", a:["5 or 10","1 or 2","3 or 4","20 or 30"], c:0},
    {q:"What is the final topic covered in Unit 04b?", a:["Confusion Matrix","Linear Regression","K-fold Cross-validation","Logistic Regression"], c:0},
    {q:"In the confusion matrix example, how many samples are there in total?", a:["12","8","4","20"], c:0},
    {q:"In the confusion matrix example, how many samples are actually classified as yes?", a:["8","4","12","6"], c:0},
    {q:"In the confusion matrix example, how many samples are classified as no?", a:["4","8","12","6"], c:0},

    {q:"What is the main topic of Unit/Week 05a?", a:["Unsupervised Learning and Clustering","Supervised Learning and Regression","Python and R Programming","Data Preparation"], c:0},
    {q:"What is the main difference between supervised and unsupervised learning presented in the dataset format?", a:["Unsupervised learning does not require class or output labels","Unsupervised learning always requires more labels","Supervised learning has no features","Supervised learning cannot use numerical data"], c:0},
    {q:"What is customer segmentation an application of?", a:["Unsupervised learning","Linear regression only","Data normalization only","Supervised classification only"], c:0},
    {q:"How can customer segmentation help a supermarket?", a:["It can help determine what to stock and when and where","It removes the need for customers","It guarantees all customers buy the same products","It converts all products into numerical values"], c:0},
    {q:"What does anomaly detection identify?", a:["Unusual patterns in data","Only the largest clusters","The average of every feature","Only labeled classes"], c:0},
    {q:"Which of the following is an application of anomaly detection?", a:["Fraud detection","CD purchasing","Document formatting","Data entry"], c:0},
    {q:"What do recommendation systems analyze to suggest products, movies, or music?", a:["User behavior and preferences","Only the number of clusters","Only Euclidean distances","Only document length"], c:0},
    {q:"What can image and text clustering be used for?", a:["Grouping similar images or documents","Predicting exact sales values","Calculating regression coefficients","Removing all outliers"], c:0},
    {q:"What can social network analysis detect?", a:["Communities or trends in user interactions","Regression slopes","Centroids only","Normal distributions"], c:0},
    {q:"What is one advantage of unsupervised learning?", a:["It does not need labeled data","It always produces known categories","It requires every data point to be labeled","It eliminates all noise"], c:0},
    {q:"Why can unsupervised learning save time and effort on data annotation?", a:["It works with raw, unlabeled data","It automatically labels every point correctly","It requires manual labeling before clustering","It only works with small datasets"], c:0},
    {q:"What can unsupervised learning discover?", a:["Hidden patterns and natural groupings","Only predefined classes","Only regression coefficients","Only labeled examples"], c:0},
    {q:"What type of datasets can unsupervised learning handle effectively?", a:["High-dimensional or very large datasets","Only two-dimensional datasets","Only datasets with two samples","Only labeled datasets"], c:0},
    {q:"How can unsupervised learning be useful for anomaly detection?", a:["It can identify outliers without prior examples","It requires every anomaly to be labeled first","It removes all unusual data automatically","It only detects anomalies in two dimensions"], c:0},
    {q:"How can noisy data affect unsupervised learning?", a:["Outliers and noise can distort patterns","It always improves clustering","It guarantees clearer clusters","It eliminates the need for distance measures"], c:0},
    {q:"What is assumption dependence in unsupervised learning?", a:["Algorithms may rely on assumptions such as cluster shapes that do not match the actual data","Algorithms always require labeled classes","Algorithms cannot use distance measures","Algorithms only work with text"], c:0},
    {q:"What does the absence of labels cause in unsupervised learning?", a:["Limited guidance toward specific outcomes","Automatic perfect classification","More accurate ground truth","Guaranteed meaningful clusters"], c:0},
    {q:"What is a possible problem with cluster interpretability?", a:["Clusters may lack clear meaning or alignment with real-world categories","Clusters always have predefined meanings","Clusters cannot contain more than one point","Clusters must correspond to labels"], c:0},
    {q:"Why can hyperparameters be important in unsupervised learning?", a:["Many algorithms require careful tuning, such as the number of clusters in k-means","Hyperparameters are never used in clustering","They automatically label every point","They remove the need for distance measures"], c:0},
    {q:"Why is evaluating unsupervised learning results difficult?", a:["There is no labeled ground truth","There are always too many labels","Every cluster has a known correct answer","All algorithms use the same distance"], c:0},
    {q:"What is the goal of clustering?", a:["To group points so members of a cluster are similar and members of different clusters are dissimilar","To assign every point a regression value","To remove every outlier","To create as many clusters as possible"], c:0},
    {q:"What is usually used to define similarity between points in clustering?", a:["A distance measure","A regression coefficient","A class label","A validation set"], c:0},
    {q:"Which distance measure is commonly used in clustering?", a:["Euclidean distance","Regression distance","Validation distance","Classification distance"], c:0},
    {q:"What other distance measure is mentioned as an option besides Euclidean distance?", a:["Cosine distance","Manhattan regression","Centroid distance only","Cluster-label distance"], c:0},
    {q:"In clustering, what should members of the same cluster be?", a:["Close or similar to each other","As far apart as possible","Assigned different labels","Outside the data space"], c:0},
    {q:"In clustering, what should members of different clusters be?", a:["Dissimilar","Identical","Always adjacent","The same point"], c:0},
    {q:"Why can clustering become difficult in high-dimensional spaces?", a:["Almost all pairs of points can be at about the same distance","There are no points in high-dimensional spaces","Every point becomes an outlier","Distances cannot be calculated"], c:0},
    {q:"How many dimensions can some applications involve according to the lecture?", a:["10 or 10,000 dimensions","Only 2 dimensions","Exactly 3 dimensions","Only 100 dimensions"], c:0},
    {q:"How can a CD be represented for clustering based on customer purchases?", a:["As a set of customers who bought it","As a regression coefficient","As a class label only","As a single distance value"], c:0},
    {q:"What is the relationship between similar CDs and their sets of customers?", a:["Similar CDs have similar sets of customers","Similar CDs always have completely different customers","Similar CDs must have identical prices","Similar CDs cannot be clustered"], c:0},
    {q:"In the CD representation, what does each dimension represent?", a:["A customer","A CD genre","A cluster","A distance"], c:0},
    {q:"In the CD space example, what values can a dimension have?", a:["0 or 1","Only 2","Any negative value","Only 10 or 100"], c:0},
    {q:"What does xi = 1 mean in the CD representation?", a:["The ith customer bought the CD","The ith customer disliked the CD","The CD belongs to cluster i","The CD has i dimensions"], c:0},
    {q:"How many dimensions can the Amazon CD example have?", a:["Tens of millions","Exactly two","Exactly ten","One hundred"], c:0},
    {q:"What is the task when clustering CDs?", a:["Find clusters of similar CDs","Predict the price of every CD","Assign every CD a regression slope","Remove every CD without a label"], c:0},
    {q:"How can a document be represented for finding topics?", a:["As a vector based on the words appearing in it","As a single class label","As a regression line","As a centroid only"], c:0},
    {q:"What does xi = 1 mean in the document representation?", a:["The ith word appears in the document","The ith document is in cluster one","The document has one page","The ith word is the longest word"], c:0},
    {q:"What may documents with similar sets of words be about?", a:["The same topic","Different regression models","Different distance metrics","The same customer"], c:0},
    {q:"Which distance can be used when documents are represented as vectors?", a:["Cosine distance","Only Euclidean distance","Only regression distance","Only centroid distance"], c:0},
    {q:"Which distance can be used when documents are treated as points?", a:["Euclidean distance","Only cosine distance","Only classification distance","Only validation distance"], c:0},
    {q:"What does Euclidean distance represent?", a:["The straight-line length between two points","The number of clusters in a dataset","The average number of features","The number of labels"], c:0},
    {q:"What is Euclidean distance calculated using?", a:["The Pythagorean theorem","The logistic function","A confusion matrix","A validation split"], c:0},
    {q:"What is hierarchical clustering?", a:["A clustering approach that builds or splits clusters hierarchically","A method that only predicts classes","A regression method","A method that requires labeled outputs"], c:0},
    {q:"What happens initially in agglomerative hierarchical clustering?", a:["Each point is its own cluster","All points are in one cluster","All points are discarded","Each point is assigned a class label"], c:0},
    {q:"What is the main operation in agglomerative clustering?", a:["Repeatedly combine the two nearest clusters","Repeatedly remove the farthest point","Predict a new output value","Randomly label every point"], c:0},
    {q:"What does divisive hierarchical clustering do?", a:["Starts with one cluster and recursively splits it","Starts with every point as a cluster and combines them","Predicts a continuous value","Uses only labeled data"], c:0},
    {q:"What does point assignment clustering do?", a:["Maintains a set of clusters and assigns points to the nearest cluster","Starts with one cluster and always splits it","Removes all points outside the centroid","Requires every point to have a class label"], c:0},
    {q:"In hierarchical clustering, how can a cluster containing many points be represented in the Euclidean case?", a:["By its centroid, the average of its points","By its largest point only","By its first point only","By a class label"], c:0},
    {q:"How can the nearness of clusters be determined in the centroid approach?", a:["By measuring distances between their centroids","By comparing their class labels","By counting their dimensions","By using only the largest point"], c:0},
    {q:"What is a clustroid?", a:["An existing data point that is closest to the other points in a cluster","The average of all points in a cluster","A point that is always outside the cluster","The number of clusters in k-means"], c:0},
    {q:"What is the key difference between a centroid and a clustroid?", a:["A centroid is an average and may be artificial, while a clustroid is an existing data point","A centroid is always an existing point while a clustroid is always artificial","They are exactly the same thing","A clustroid can only be used with labeled data"], c:0},
    {q:"What does k represent in k-means clustering?", a:["The number of clusters","The number of features","The number of data points","The number of labels"], c:0},
    {q:"What assumption does k-means make according to the lecture?", a:["It assumes Euclidean space and distance","It assumes every point has a class label","It assumes all data is text","It assumes there is only one cluster"], c:0},
    {q:"What is the first major step when starting k-means?", a:["Pick k, the number of clusters","Calculate a confusion matrix","Split the data into training and testing sets","Assign every point a final label"], c:0},
    {q:"How can k-means initialize its clusters?", a:["By picking one point per cluster","By deleting the furthest points","By assigning every point to every cluster","By selecting only outliers"], c:0},
    {q:"During k-means assignment, where is each point placed?", a:["In the cluster whose current centroid is nearest","In the cluster with the most points","In a randomly selected cluster every time","In the cluster with the farthest centroid"], c:0},
    {q:"What happens after all points are assigned in k-means?", a:["The locations of the centroids are updated","All clusters are deleted","The value of k is automatically changed","All points become outliers"], c:0},
    {q:"What happens after centroids are updated in k-means?", a:["Points are reassigned to their closest centroid","The dataset is discarded","The number of dimensions is reduced to zero","The algorithm immediately stops"], c:0},
    {q:"What does convergence mean in the k-means process?", a:["Points stop moving between clusters and centroids stabilize","Every point becomes an outlier","The number of clusters becomes zero","All points receive different labels"], c:0},
    {q:"What are the three important questions in hierarchical clustering?", a:["How to represent clusters, determine cluster nearness, and decide when to stop combining","How to label data, remove features, and calculate regression","How to normalize data, split data, and calculate accuracy","How to choose Python, R, and SQL"], c:0}
  ],
  SoftEngi: {
    quiz1: [
        {q:"What is software engineering?",a:["A branch of computer science and engineering focused on designing, developing, testing, and maintaining software","The process of writing code as quickly as possible","A method used only for testing software","A technique for designing computer hardware"],c:0},

        {q:"Why is programming alone not enough when building large software systems?",a:["Large systems must also address requirements, reliability, security, maintainability, scalability, and change","Programming languages cannot be used for large systems","Programming is only useful for databases","Large systems do not require testing"],c:0},

        {q:"What is the main difference between programming and software engineering?",a:["Programming focuses on making code work, while software engineering focuses on making the entire system succeed","Programming focuses on requirements while software engineering only writes code","Programming is used for hardware while software engineering is used for software","There is no meaningful difference"],c:0},

        {q:"Which sequence best represents the software engineering process presented in the slideshow?",a:["Requirements → Design → Code → Test → Deploy → Evolve","Code → Deploy → Requirements → Design → Test → Delete","Design → Code → Requirements → Deploy → Test → Evolve","Test → Code → Design → Requirements → Deploy → Evolve"],c:0},

        {q:"A developer creates an application that works correctly on their laptop, but it cannot handle thousands of users. What concept from the lecture does this demonstrate?",a:["A system can work technically while still failing to meet software engineering requirements such as scalability","The application is automatically good software because it runs","The developer only needs to learn another programming language","The application does not need testing"],c:0},

        {q:"Which of the following is NOT one of the qualities of good software discussed in the slideshow?",a:["Dependable and secure","Maintainable","Efficient","Guaranteed to require no future changes"],c:3},

        {q:"A banking application calculates every balance correctly but allows users to access other customers' accounts. Which software quality is most clearly suffering?",a:["Security","Efficiency","Maintainability","Compatibility"],c:0},

        {q:"A video streaming application is easy to use and fast, but every modification breaks another feature. Which quality is suffering?",a:["Maintainability","Efficiency","Acceptability","Physical safety"],c:0},

        {q:"A banking application works correctly, but every page takes 25 seconds to load. Which quality is most clearly affected?",a:["Efficiency","Security","Maintainability","Acceptability"],c:0},

        {q:"Why is maintainability important according to the slideshow?",a:["Software changes are inevitable, so adding or modifying features should be manageable","Software should never be modified after release","Maintainability only matters during initial coding","Maintainability eliminates the need for testing"],c:0},

        {q:"What does it mean for software to be dependable and secure?",a:["It should avoid causing physical or economic harm and prevent malicious attacks","It should always use the newest programming language","It should never require maintenance","It should only work on one computer"],c:0},

        {q:"A team builds software without discussing requirements first. Different developers make incompatible assumptions about the system. What is a likely result?",a:["Integration failures, defects, security risks, rework, and missed deadlines","The project will automatically become more efficient","The lack of requirements will eliminate defects","The project will require less communication but have no other consequences"],c:0},

        {q:"Why does the slideshow emphasize that software engineering should be systematic rather than ad-hoc?",a:["A structured approach provides defined processes, methods, and evidence instead of relying on unplanned coding","Ad-hoc coding always uses too many programming languages","Systematic development eliminates the need for developers","A systematic process guarantees that software will never contain defects"],c:0},

        {q:"A software team receives new requirements every week. Which software engineering mindset is most appropriate?",a:["Treat the software as evolutionary and prepare for continual change","Assume the original requirements can never change","Rewrite the entire application after every requirement change","Stop testing once Version 1.0 works"],c:0},

        {q:"Which statement best explains why building software is difficult?",a:["Users, technology, regulations, security threats, scale, teams, budgets, and requirements can all change","Programming languages are inherently impossible to understand","Software never changes after it is released","Only hardware limitations make software difficult"],c:0},

        {q:"A team successfully releases Version 1.0 but struggles when users request major changes. What lesson from the slideshow best applies?",a:["Software engineering must prepare software to survive future versions and changing conditions","Version 1.0 should always be considered the final version","Future changes should be ignored until the software fails","The team should avoid collecting user feedback"],c:0},

        {q:"What is a software process?",a:["A structured way of building software","A programming language used to build software","A tool used exclusively for debugging","A document containing only source code"],c:0},

        {q:"What question does the Specification/Requirements stage answer?",a:["What should we build?","How should we deploy it?","Did we build it correctly?","How should we modify the code next year?"],c:0},

        {q:"What question does the Design stage answer?",a:["How should we build it?","What should the customer buy?","Did we test every line of code?","When should the software be retired?"],c:0},

        {q:"What is the purpose of Verification and Validation?",a:["To determine whether the software was built correctly and meets the intended needs","To decide which programming language should be used","To replace requirements with code","To eliminate the need for users"],c:0},

        {q:"What does the Evolution stage of the software process address?",a:["What happens when the software needs to change","How to write the first line of code","How to purchase computer hardware","How to remove all documentation"],c:0},

        {q:"A process step has a clearly defined objective, input, and output. Why is this useful?",a:["It makes the work more structured and allows the result of the step to be checked","It guarantees that no developer will ever make a mistake","It removes the need for specialized skills","It means the project no longer needs requirements"],c:0},

        {q:"Why should a good software process support early detection of faults?",a:["Late detection is more costly and can lead to more rework","Early detection makes testing unnecessary","Faults found early cannot affect software quality","Late detection is always cheaper"],c:0},

        {q:"A development team follows the same defined process across several projects and can predict what activities will occur. Which characteristic of a good process does this demonstrate?",a:["Predictability and repeatability","Randomness","Ad-hoc development","Elimination of testing"],c:0},

        {q:"Why should a software process support testing and maintainability?",a:["A good process should produce testable outcomes and make the software easier to adapt to changes","Testing prevents software from ever changing","Maintainability means software cannot be modified","Testing is only necessary after the project is abandoned"],c:0},

        {q:"A team decides to immediately code a hospital database without clearly determining what the system should do. Why is this a poor software engineering decision?",a:["Unclear requirements can lead to incompatible designs, defects, security risks, rework, and missed deadlines","Coding first guarantees that requirements will become clearer automatically","Databases do not require requirements","Hospital systems are too simple to require a process"],c:0},

        {q:"Why would simply hiring more programmers not necessarily solve the problems of a growing software system?",a:["More developers do not automatically solve problems involving requirements, coordination, security, scalability, maintainability, and process","More programmers always make software worse","Programming cannot be used by teams","Hiring programmers prevents requirements from changing"],c:0},

        {q:"A team has software that works but only one developer understands the code. From a software engineering perspective, what is the main concern?",a:["Maintainability and understandability are poor because the system is difficult for others to safely modify","The system is automatically efficient","The system has no requirements","The system is necessarily secure"],c:0},

        {q:"Which statement best justifies the idea that 'good software' means more than 'software that works'?",a:["Software must also consider qualities such as security, reliability, usability, efficiency, maintainability, and scalability","Working software never needs testing","Correctness is not important in software","Software quality only depends on how many lines of code exist"],c:0},

        {q:"A team uses GitHub pull requests and code reviews during development. Which modern software engineering practice from the slideshow does this represent?",a:["Collaborative development","Cloud-native systems","AI-assisted engineering","Only traditional programming"],c:0},

        {q:"A company automatically runs tests whenever developers submit changes and uses automated deployment pipelines. Which modern practice does this best represent?",a:["Continuous engineering using automated tests and CI/CD","Only manual development","Traditional waterfall-only development","Requirements gathering"],c:0},

        {q:"A team uses Scrum and repeatedly gathers feedback while developing a product. Which modern software engineering approach is being demonstrated?",a:["Iterative development","Hardware engineering","Database normalization","Manual deployment"],c:0},

        {q:"A system is built using APIs, services, containers, and cloud infrastructure. Which modern software engineering area from the slideshow does this represent?",a:["Cloud-native systems","Collaborative development only","Manual testing","Traditional debugging"],c:0},

        {q:"A team uses AI to help generate code, create tests, review code, and produce documentation. Which concept from the slideshow does this demonstrate?",a:["AI-assisted engineering","Cloud-native development","Only requirements engineering","Manual software engineering"],c:0},

        {q:"A team is deciding whether to prioritize making a feature work quickly or designing it so that future developers can safely modify it. Which decision better reflects software engineering, and why?",a:["Designing for future modification because software engineering prepares systems for change and maintainability","Making it work once because future changes are never expected","Avoiding both approaches because software engineering only concerns testing","Writing more code because more code always means better software"],c:0},

        {q:"What is the main idea behind the statement 'We don't just build software. We engineer software that can survive change'?",a:["Software should be designed to handle future changes and evolve over time","Software should never be modified after release","Software should only focus on making the first version work","Software should avoid user feedback"],c:0},

        {q:"Which sequence represents the learning approach presented in the slideshow?",a:["Learn → Apply → Build → Break → Improve → Change → Evolve","Build → Learn → Deploy → Forget → Replace → Repeat","Code → Test → Submit → Finish → Stop → Restart","Plan → Code → Submit → Ignore → Deploy → Finish"],c:0},

        {q:"Why does the course emphasize practice rather than only listening to lectures?",a:["Software engineering skills require students to apply concepts and practice engineering decisions","Software engineering can only be learned through programming competitions","Lectures are not part of the course","Practice eliminates the need to understand concepts"],c:0},

        {q:"Which topic belongs to the Foundations portion of the course?",a:["Software Engineering, SDLC, processes, Agile, XP, Scrum, planning, and risk","Only APIs and cloud services","Only testing and refactoring","Only ethics and responsible AI"],c:0},

        {q:"Which topics are included in the Design portion of the software engineering journey?",a:["Requirements, User Stories, UML, Design Patterns, and Architecture","Testing, TDD, CI, and version control","Cloud, APIs, and microservices only","Ethics, accountability, and responsible AI only"],c:0},

        {q:"Which topics are part of Build & Verify?",a:["Clean Code, SOLID, Testing, TDD, Version Control, and CI","User Stories, UML, and Architecture only","Distributed Systems and Microservices only","Planning, risk, and Scrum only"],c:0},

        {q:"A developer finishes a feature but the code contains duplicated logic and is difficult to modify. Which part of the course journey is most relevant?",a:["Improve & Evolve, including code smells and refactoring","Foundations only","Professional Practice only","Project team formation"],c:0},

        {q:"Why is technical debt included in the Improve & Evolve portion of the course?",a:["Software may accumulate problems that make future changes more difficult and require improvement","Technical debt means a project has borrowed money","Technical debt guarantees that software will become faster","Technical debt eliminates the need for maintenance"],c:0},

        {q:"Which topic belongs to Modern Software Engineering?",a:["Distributed Systems, APIs, Microservices, Cloud, AI-Assisted SE, and Agentic SE","Only UML and requirements","Only Scrum and XP","Only clean code and SOLID"],c:0},

        {q:"A developer uses an AI system to help generate code but reviews the output before accepting it. Which course area does this relate to?",a:["AI-Assisted Software Engineering and professional engineering responsibility","Only project team formation","Only UML design","Only version control"],c:0},

        {q:"Why does the course include Professional Practice as part of software engineering?",a:["Engineering involves responsibility, including human oversight, ethics, accountability, and responsible AI","Professional practice is only about writing more code","Software engineers do not make decisions that affect others","Professional practice replaces technical skills"],c:0},

        {q:"What is the purpose of lectures in the course?",a:["To understand concepts, examples, real-world cases, and demonstrations","To complete the entire team project","To replace labs and assignments","To perform only programming exercises"],c:0},

        {q:"What is the main purpose of labs?",a:["To practice Git, testing, UML, refactoring, tools, and development workflows","To replace all lectures","To complete quizzes for marks only","To avoid using development tools"],c:0},

        {q:"What makes the assignments different from simple coding exercises?",a:["They involve individual engineering challenges and require engineering decisions","They only require memorizing programming syntax","They are always completed as a team","They contain no software engineering concepts"],c:0},

        {q:"What is the purpose of the team project?",a:["To build and evolve a real software system as an engineering team","To submit one final code file without development history","To practice programming individually without collaboration","To avoid using version control"],c:0},

        {q:"A student receives feedback on a failed test, revises the implementation, and adapts the solution. Which course learning activity does this demonstrate?",a:["Feedback and reflection","Project formation","Assessment weighting","Repository setup"],c:0},

        {q:"Which sequence best describes the broader learning cycle shown in the course?",a:["Hear it → See it → Try it → Apply it → Explain it → Improve it","Hear it → Memorize it → Submit it → Forget it → Repeat it","Code it → Submit it → Ignore it → Finish it","Read it → Test it → Delete it → Replace it"],c:0},

        {q:"What does 'Assessment = Show Me You Can Engineer' emphasize?",a:["Students are expected to demonstrate engineering ability rather than simply produce working code","Students are graded only on how quickly they write code","Students only need to memorize terminology","Assessment is unrelated to engineering decisions"],c:0},

        {q:"A student completes an assignment but cannot explain why they selected their architecture. Based on the course assessment philosophy, what is missing?",a:["Engineering reasoning and justification for the decision","More lines of source code","A second programming language","A larger GitHub repository"],c:0},

        {q:"Which topics are specifically associated with Assignment A1?",a:["Requirements, Process, Planning, and Risk","Testing, Quality, Refactoring, and Change","UML, Architecture, Trade-offs, and AI Critique","Cloud, APIs, and Microservices"],c:0},

        {q:"Which topics are specifically associated with Assignment A2?",a:["Testing, Quality, Refactoring, and Change","Requirements, Process, Planning, and Risk","UML, Architecture, Trade-offs, and AI Critique","GitHub, teamwork, and project formation"],c:0},

        {q:"Which topics are specifically associated with Assignment A3?",a:["UML, Architecture, Trade-offs, and AI Critique","Requirements, Process, Planning, and Risk","Testing, Quality, Refactoring, and Change","Only Scrum and XP"],c:0},

        {q:"A team creates a working application, but the architecture is difficult to maintain. Which project evaluation category is most directly concerned with this issue?",a:["Engineering Quality","Correctness only","Process Evidence only","Team Formation"],c:0},

        {q:"A team can demonstrate that its application works, but cannot explain how it knows the system works. Which evaluation category is most directly affected?",a:["Verification","Engineering Quality","Reasoning","Team Formation"],c:0},

        {q:"Why is 'Because it works' not always considered an engineering justification?",a:["A working result does not explain why a particular decision was made or provide evidence of the engineering process","Working software is never important","Engineering decisions do not require reasoning","A system cannot be verified"],c:0},

        {q:"A team chooses a database technology because it is popular but cannot explain how it fits the project's requirements. What would the course expect the team to provide?",a:["Reasoning that explains and justifies the engineering decision","Only a screenshot of the database","More GitHub commits without explanations","A different programming language"],c:0},

        {q:"What is the first mandatory step in the project journey?",a:["Team and project repository setup","Final Engineering Release","Iteration Release II","Demo and Engineering Defense"],c:0},

        {q:"Why does the project use multiple engineering iterations instead of only one final submission?",a:["The project is intended to be built and evolved through multiple stages of engineering work","Multiple iterations prevent students from using version control","The final release is not important","Iteration makes requirements unnecessary"],c:0},

        {q:"What does the project Requirements + Plan stage provide before later development?",a:["A defined understanding of requirements and a plan for the project","A completed final application","Only a GitHub README","A finished deployment"],c:0},

        {q:"A team waits until the night before submission to create its GitHub commits so the repository looks active. Why does this conflict with the course expectations?",a:["GitHub is intended to show the actual story and evolution of the project, not manufactured history","GitHub cannot store commits","Teams are not allowed to use branches","Pull requests are only for individual assignments"],c:0},

        {q:"What can GitHub commits tell an instructor about a project?",a:["What changed during development","Which programming language the instructor prefers","How much money the project cost","Whether the project will never need maintenance"],c:0},

        {q:"What can branches demonstrate in the project's GitHub repository?",a:["How work was organized","Whether users liked the application","How many students are in the university","Whether the application is physically secure"],c:0},

        {q:"What can pull requests and reviews demonstrate?",a:["How team members collaborated and reviewed changes","Which requirements were written before the project began","How much cloud storage was purchased","Whether the application is guaranteed to be bug-free"],c:0},

        {q:"What can issues and backlog information show?",a:["What the team was working on","Which programming language is objectively best","How many lines of code are required for the project","Whether the instructor approved every commit"],c:0},

        {q:"A team has extensive GitHub history showing commits, branches, pull requests, tests, and changes over time. Why is this valuable according to the slideshow?",a:["The repository provides evidence of how the team engineered and evolved the software","GitHub automatically proves that the software has no defects","The repository replaces the need for testing","GitHub makes project requirements unnecessary"],c:0},

        {q:"What are the three major elements of successful software engineering?",a:["People, Process, and Technology","Code, Hardware, and Networks","Users, Databases, and Servers","Planning, Coding, and Deployment"],c:0},

        {q:"What is the main role of the people involved in software engineering?",a:["They provide skills, collaboration, communication, creativity, and human judgment","They only write source code","They replace the need for a software process","They eliminate the need for technology"],c:0},

        {q:"According to the slideshow, what is the main purpose of a software process?",a:["To structure and coordinate how software development work gets done","To replace developers with automated tools","To ensure every project uses exactly the same model","To eliminate all changes to requirements"],c:0},

        {q:"Why can great technology become a liability when used without the right people and process?",a:["Technology alone cannot replace human judgment, coordination, and engineering discipline","Technology automatically creates poor software","Technology cannot be used by software developers","Technology prevents teams from communicating"],c:0},

        {q:"Which sequence represents the Software Development Life Cycle presented in the slideshow?",a:["Specification → Design → Implementation → Validation → Maintenance & Evolution","Design → Implementation → Specification → Maintenance → Validation","Implementation → Specification → Design → Validation → Maintenance","Validation → Design → Specification → Implementation → Maintenance"],c:0},

        {q:"What is the purpose of the Specification stage?",a:["To specify what the software should do and its constraints","To convert the design into working code","To test individual units","To modify the system after release"],c:0},

        {q:"What happens during the Design stage?",a:["The organization of the software's components is defined","Customer requirements are completely ignored","The system is immediately deployed","Only maintenance tasks are performed"],c:0},

        {q:"What is the purpose of the Implementation stage?",a:["To convert the conceptual design into a real software system","To determine whether the customer wants the product","To gather only future requirements","To replace the software process"],c:0},

        {q:"What does Validation check?",a:["Whether the software does what the customer wants","Whether developers used the same programming language","Whether the design document is long enough","Whether the project has enough developers"],c:0},

        {q:"What is the purpose of Maintenance and Evolution?",a:["To change the system in response to changing customer or market needs","To prevent any changes after deployment","To rewrite the entire system after every release","To remove customer feedback"],c:0},

        {q:"What is the Opportunistic model?",a:["An ad-hoc approach where developers directly build the software without systematically applying software engineering principles","A highly structured process with formal verification at every stage","A model based entirely on customer prototypes","A risk-driven iterative model"],c:0},

        {q:"A beginner immediately starts coding without defining requirements, design, testing, or maintenance plans. Which model does this most closely represent?",a:["Opportunistic development","Waterfall","V-Model","Prototyping"],c:0},

        {q:"What is a major danger of the Opportunistic model?",a:["Client requirements may not be properly met because there is no systematic process","Requirements are documented too carefully","Testing happens too early","The system is changed too frequently"],c:0},

        {q:"Why can Opportunistic development result in high maintenance costs?",a:["There is no clear plan for maintenance and design can deteriorate, making future changes difficult","The model requires too much documentation","The model requires too many testing stages","The model prevents developers from changing code"],c:0},

        {q:"What is the central idea of the Waterfall model?",a:["Complete one major stage before moving to the next, with defined outcomes for each stage","Continuously change requirements throughout development","Build multiple prototypes and discard them","Perform testing before defining requirements"],c:0},

        {q:"Which project would be the best fit for the Waterfall model?",a:["A project with stable, well-understood requirements and clear milestones and deliverables","A project where requirements change every week","A project where customers do not know what they want","A project requiring constant experimentation"],c:0},

        {q:"Why does Waterfall struggle when requirements change frequently?",a:["Changes can require significant rework across design, code, and testing","Waterfall has no documentation","Waterfall does not have defined stages","Waterfall prevents developers from writing code"],c:0},

        {q:"A government project has stable requirements, strict documentation requirements, and contract-driven milestones. Which process model may be appropriate?",a:["Waterfall","Opportunistic","Evolutionary Prototyping","Only Agile"],c:0},

        {q:"A company discovers a major requirement mistake late in a Waterfall project. Why could fixing it be expensive?",a:["The mistake may affect completed design, code, and testing stages and require significant rework","Waterfall does not allow requirements to exist","Waterfall automatically deletes previous work","Waterfall prevents testing"],c:0},

        {q:"Which statement best describes a limitation of Waterfall?",a:["It provides structure and predictability but handles changing requirements poorly","It has no defined stages","It does not allow documentation","It is designed specifically for constantly changing requirements"],c:0},

        {q:"What is the V-Model?",a:["An extension of Waterfall that connects development activities with corresponding testing activities","A version of Opportunistic development without coding","A model that completely eliminates requirements","A prototype-only development process"],c:0},

        {q:"What is the main difference between Verification and Validation in the V-Model?",a:["Verification asks whether we are building the product right, while Validation asks whether we are building the right product","Verification asks what customers want, while Validation writes the code","Verification happens only after deployment, while Validation happens before requirements","There is no difference between them"],c:0},

        {q:"A developer reviews a design against its specification without executing the software. Is this primarily verification or validation?",a:["Verification","Validation","Maintenance","Implementation"],c:0},

        {q:"A testing team executes the completed software to determine whether it meets customer needs. Is this primarily verification or validation?",a:["Validation","Verification","Specification","Design"],c:0},

        {q:"In the V-Model, what testing activity corresponds to Business Requirements?",a:["Acceptance Testing","Unit Testing","Component Testing","System/Integration Testing"],c:0},

        {q:"In the V-Model, what testing activity corresponds to Low-Level Design?",a:["Unit Testing","Acceptance Testing","System Testing","Integration Testing"],c:0},

        {q:"Why does the V-Model encourage thinking about testing while requirements and design are being created?",a:["Development decisions on the left side guide corresponding testing activities on the right side","Testing can only be performed before requirements exist","It prevents developers from writing code","It eliminates the need for validation"],c:0},

        {q:"What is a major strength of the V-Model?",a:["Testing is considered early and systematically, with a clear relationship between development and testing","It completely eliminates rework","It handles constantly changing requirements extremely well","It requires no documentation"],c:0},

        {q:"What is a major limitation of the V-Model?",a:["It remains relatively rigid and can have difficulty accommodating changing requirements","It has no connection between development and testing","It does not support defect detection","It has no defined development stages"],c:0},

        {q:"What is the central idea behind the Prototyping model?",a:["Build an early version, let customers evaluate it, refine requirements, and repeat until requirements are better understood","Complete all requirements before showing anything to customers","Avoid customer feedback until deployment","Build the final system immediately without experimentation"],c:0},

        {q:"A customer cannot clearly explain what they want from a new application. Which process model is particularly appropriate according to the slideshow?",a:["Prototyping","Waterfall","Opportunistic development","V-Model only"],c:0},

        {q:"Why are prototypes useful when requirements are unclear?",a:["Customers can evaluate something concrete and provide feedback that helps clarify missing or misunderstood requirements","Prototypes eliminate the need for customers","Prototypes guarantee the final system will have no defects","Prototypes prevent requirements from changing"],c:0},

        {q:"What is the key difference between throw-away and evolutionary prototyping?",a:["Throw-away prototypes are discarded after learning, while evolutionary prototypes are progressively refined toward the required system","Throw-away prototypes become the final product while evolutionary prototypes are discarded","Both approaches always produce the final system immediately","There is no difference between the two"],c:0},

        {q:"A team creates a quick user-interface prototype to discover what customers actually want, then discards the prototype before building the real system. What type of prototyping is this?",a:["Throw-away prototyping","Evolutionary prototyping","Waterfall prototyping","V-Model prototyping"],c:0},

        {q:"A team repeatedly improves its prototype based on user feedback until the prototype becomes the required system. What type of prototyping is this?",a:["Evolutionary prototyping","Throw-away prototyping","Opportunistic development","Waterfall"],c:0},

        {q:"A customer assumes that a prototype is ready for production even though it was built only to answer specific questions. What problem does this demonstrate?",a:["A prototype may be mistaken for a finished product even though its purpose is learning and evaluation","Waterfall requirements are too stable","The V-Model does not support testing","Prototypes cannot receive customer feedback"],c:0},

    {q:"What is the main focus of the Spiral Model?",a:["Identifying and reducing important risks throughout development","Completing all requirements before any development begins","Delivering the entire system before collecting feedback","Avoiding prototypes and experiments during development"],c:0},

    {q:"A team understands the requirements for a new AI-based feature, but they are unsure whether the technology will perform accurately enough. Which process model best addresses this situation?",a:["Spiral Model because it uses risk analysis to investigate uncertain solutions","Waterfall because all requirements should be completed before development","Opportunistic development because the team should immediately start coding","V-Model because testing only happens after the implementation is complete"],c:0},

    {q:"What are the four main sectors of the Spiral Model?",a:["Determine objectives, identify and resolve risks, develop the next version, review and plan the next phase","Gather requirements, write documentation, deploy the system, retire the system","Design the interface, write code, release the product, collect complaints","Plan the entire project, build everything, test everything, deliver everything"],c:0},

    {q:"In the Spiral Model, what happens during the 'Determine Objectives' sector?",a:["The team identifies objectives, alternatives, and constraints for the next cycle","The team deploys the finished product to all users","The team performs only final acceptance testing","The team removes all previous prototypes from the project"],c:0},

    {q:"What is the purpose of the 'Identify & Resolve Risks' sector in the Spiral Model?",a:["To analyze risks, explore alternatives, and reduce uncertainty before making larger commitments","To ensure every requirement is permanently fixed before development starts","To replace all testing with customer interviews","To complete the final system documentation before coding begins"],c:0},

    {q:"A Spiral Model loop has finished development and validation. What should happen next?",a:["The team reviews what was learned and plans the next phase","The team automatically ends the entire project","The team returns to the original requirements without considering new information","The team discards the software regardless of its quality"],c:0},

    {q:"What does moving outward through the Spiral Model loops generally represent?",a:["More knowledge, more investment, and a more complete system","Less testing, less knowledge, and fewer project commitments","A reduction in requirements and a smaller final system","A move away from risk analysis toward completely fixed planning"],c:0},

    {q:"What is the purpose of the first Spiral Model loop?",a:["To explore whether the idea can work using techniques such as experiments, prototypes, or feasibility studies","To deliver every planned feature to customers","To complete the final production system","To perform only maintenance activities"],c:0},

    {q:"A team uses a small experiment to determine whether a new technology is feasible before committing significant resources. Which Spiral loop activity does this best represent?",a:["Loop 1 — Explore","Loop 2 — Understand & Refine","Loop 3 — Develop Further","Later loops — Toward the Complete System"],c:0},

    {q:"What is the main purpose of Loop 2 in the Spiral Model?",a:["To understand what has been learned, refine requirements, and investigate remaining risks and alternatives","To immediately release the complete system to customers","To eliminate all future planning from the project","To perform only final acceptance testing"],c:0},

    {q:"Which activities are associated with Loop 3 of the Spiral Model?",a:["Design, implementation, and testing to further develop and validate the solution","Only brainstorming and identifying initial project objectives","Only gathering customer opinions without building anything","Only planning the project's budget and schedule"],c:0},

    {q:"Which statement correctly describes the relationship between the Spiral Model and prototyping?",a:["Prototypes can be used as risk-reduction techniques within the Spiral Model, but the Spiral Model is not the same as prototyping","The Spiral Model and prototyping are exactly the same process model","Prototyping cannot be used during Spiral development","The Spiral Model is simply another name for evolutionary prototyping"],c:0},

    {q:"What is a major strength of the Spiral Model?",a:["Major risks can be identified and addressed before larger commitments are made","All project requirements are guaranteed to remain unchanged","It eliminates the need for experienced risk analysis","It always requires exactly four development loops"],c:0},

    {q:"Why can the Spiral Model have significant management overhead?",a:["Repeated risk analysis, development, and evaluation require additional effort","Every loop must produce a completely separate final product","The model does not allow any automation","The model requires every developer to work independently"],c:0},

    {q:"Why does the Spiral Model require risk expertise?",a:["Effective identification and analysis of important risks can be difficult","Every project must use the same predetermined risk list","Risk analysis is performed only after deployment","Risk expertise is needed to prevent developers from writing code"],c:0},

    {q:"Which project is the best fit for the Spiral Model?",a:["A large, complex system with significant technical uncertainty and high-risk decisions","A tiny project with no significant uncertainty and a very small scope","A simple program where requirements and implementation are already completely known","A small script that will be discarded after one use"],c:0},

    {q:"What is the key idea behind choosing a software process model?",a:["Different projects have different needs, so the process should match the project's requirements, change, feedback, risk, and context","Every software project should use exactly the same process model","Agile should always be selected regardless of project characteristics","The oldest available process model should always be selected"],c:0},

    {q:"What is the main difference between Plan-Driven and Agile development?",a:["Plan-Driven emphasizes more planning upfront, while Agile plans throughout development and adapts to change","Plan-Driven does not involve planning, while Agile requires all planning before coding","Plan-Driven uses testing while Agile does not","Agile requires all requirements to be finalized before development"],c:0},

    {q:"How are requirements generally handled in Plan-Driven development compared with Agile development?",a:["Plan-Driven defines requirements earlier, while Agile allows requirements to evolve","Plan-Driven avoids requirements, while Agile fixes every requirement permanently","Both approaches require all requirements to remain unchanged","Agile defines all requirements before development and Plan-Driven discovers them after deployment"],c:0},

    {q:"A project uses short iterations, regularly delivers increments, and incorporates changing requirements. Which approach does this describe?",a:["Agile development","Opportunistic development","Traditional Waterfall development","Strictly plan-driven development"],c:0},

    {q:"Which statement about planning in Agile is correct?",a:["Agile involves planning throughout development rather than eliminating planning","Agile means the team does not need a plan","Agile requires every project decision to be made before development begins","Agile replaces planning with random development"],c:0},

    {q:"Why can Agile be useful for software projects?",a:["Teams often learn what they really need while building the software and receiving feedback","Software requirements never change once development begins","Agile prevents customers from changing priorities","Agile eliminates the need for users to provide feedback"],c:0},

    {q:"A team delivers a working feature, receives user feedback, learns from it, and changes the next version. Which Agile cycle does this demonstrate?",a:["Deliver → Feedback → Learn → Adapt → Deliver Again","Plan → Freeze → Document → Deploy → Stop","Design → Code → Ignore Feedback → Release → Repeat","Requirements → Contract → Implementation → Retirement"],c:0},

    {q:"Why does the lecture emphasize that Agile is more than simply being fast?",a:["Moving quickly without feedback can result in moving quickly in the wrong direction","Agile requires developers to avoid delivering software quickly","Agile means completing the entire project before collecting feedback","Being fast automatically guarantees software quality"],c:0},

    {q:"Which of the following best describes the Agile mindset?",a:["Deliver value, collaborate, learn from feedback, embrace useful change, and improve continuously","Follow the original plan regardless of new information","Avoid customer involvement until the project is complete","Focus primarily on producing documentation instead of working software"],c:0},

    {q:"Which statement is one of the four Agile Manifesto values?",a:["Individuals and interactions over processes and tools","Processes and tools over individuals and interactions","Comprehensive documentation over working software","Following a plan over responding to change"],c:0},

    {q:"A customer requests an important change after seeing the first working version of a system. According to the Agile Manifesto in practice, what should the team do?",a:["Discuss the value and impact of the change, then adapt appropriately","Reject the request because the original requirements were finalized","Implement the change immediately without discussing its impact","Ignore the request until the entire system is completed"],c:0},

    {q:"What does 'Working software over comprehensive documentation' mean in the Agile Manifesto?",a:["Working software is valued more, while documentation still has value","Agile teams should never create documentation","Documentation is always more important than working software","Agile teams should only document the project after it is cancelled"],c:0},

    {q:"Which Agile theme focuses on delivering useful software early and frequently?",a:["Value","Change","People","Quality & Improvement"],c:0},

    {q:"Which Agile theme emphasizes collaboration, communication, and trust within the team?",a:["People","Value","Change","Quality & Improvement"],c:0},

    {q:"When is Agile particularly helpful?",a:["When requirements may evolve, frequent delivery creates value, and customers can provide feedback","When requirements must never change and customer feedback is impossible","When the project cannot be divided into useful increments","When stakeholders are unavailable throughout development"],c:0},

    {q:"A team cannot regularly access customers for feedback and the project requires strict regulatory traceability. What should the team recognize about Agile?",a:["Agile may face challenges because customer availability and compliance requirements can affect how it is applied","Agile automatically eliminates the need for customer involvement and traceability","Agile requires the team to remove all documentation","Agile guarantees that regulatory requirements no longer apply"],c:0},

    {q:"Why can too little documentation become a problem for an Agile project?",a:["It can make maintenance and onboarding more difficult","It guarantees that requirements will never change","It prevents working software from being delivered","It eliminates the need for technical discipline"],c:0},

    {q:"What is the relationship between Agile and Scrum?",a:["Agile is a set of values, principles, and a mindset, while Scrum is one framework for applying Agile ideas","Agile and Scrum are exactly the same thing","Scrum is a software development language and Agile is a testing tool","Agile is a Scrum-specific documentation standard"],c:0},

    {q:"A team argues that Agile means accepting every requirement change immediately. Which response is most accurate?",a:["Agile welcomes useful change, but teams still need to discuss value, impact, and appropriate adaptation","Agile requires every requested change to be implemented immediately","Agile prohibits all requirement changes after development starts","Agile means requirements do not need to be evaluated"],c:0},

    {q:"What is the main idea behind Extreme Programming (XP)?",a:["Take proven software-development practices and apply them continuously and intensively","Avoid automated testing so developers can work faster","Complete all requirements before writing any code","Use large releases with long periods between feedback"],c:0},

    {q:"When is XP particularly applicable?",a:["When requirements change frequently, the team is small and collaborative, and automated testing is possible","When requirements never change and the team works independently","When customer feedback is unavailable and testing cannot be automated","When development consists of one large release with no intermediate versions"],c:0},

    {q:"What does XP require regarding tests and builds?",a:["All tests should run with each build and all tests must pass for the build to be accepted","Tests should only be performed after the entire project is completed","Only the newest feature needs to be tested after each release","Tests are optional when the development team is experienced"],c:0},

    {q:"What is incremental planning in XP?",a:["Selecting release stories based on available time and relative priority, then breaking stories into development tasks","Creating a complete detailed plan that cannot change during development","Allowing developers to choose features without considering priorities","Planning only after the final software release"],c:0},

    {q:"What is the goal of small releases in XP?",a:["Develop minimal useful functionality that provides business value and release it frequently","Delay all releases until every planned feature is completed","Release large amounts of functionality as rarely as possible","Release unfinished software without collecting feedback"],c:0},

    {q:"What does the XP practice of simple design recommend?",a:["Do enough design to meet the current requirements and no more","Design every possible future feature before development begins","Avoid design completely and immediately begin coding","Create the most complex architecture possible for future expansion"],c:0},

    {q:"What is Test-First Development in XP?",a:["Writing automated unit tests for new functionality before implementing the functionality","Writing tests only after the software has been released","Testing only the user interface before writing the application logic","Allowing customers to manually test every line of code"],c:0},

    {q:"A developer notices that an existing section of code can be simplified without changing its behavior. Which XP practice addresses this?",a:["Refactoring","Collective Ownership","Planning Game","On-Site Customer"],c:0},

    {q:"What is pair programming?",a:["Two developers work together, checking each other's work and providing continuous support","Two customers independently write requirements for the same feature","Two teams develop completely separate versions of the same system","A developer writes code while another developer performs only project management"],c:0},

    {q:"What is the purpose of collective ownership in XP?",a:["All developers share responsibility for the code so that no isolated islands of expertise develop","Only the original developer is allowed to modify a section of code","Each developer owns a permanent section of the system and cannot modify other areas","Customers are given direct control over the source code"],c:0},

    {q:"What happens during continuous integration in XP?",a:["Completed work is integrated into the whole system and the unit tests must pass after integration","Developers wait until the end of the project before combining their code","Only documentation is integrated after each task","The entire system is rewritten after every completed task"],c:0},

    {q:"Why does XP promote a sustainable pace?",a:["Excessive overtime can reduce code quality and medium-term productivity","Developers should work as many hours as possible to maximize output","Shorter work hours eliminate the need for testing","Sustainable pace allows teams to avoid releasing software frequently"],c:0},

    {q:"What is the role of the on-site customer in XP?",a:["A representative of the end user is available to the team and brings system requirements to them","The customer writes all of the source code for the development team","The customer is responsible only for testing after deployment","The customer manages the development team's working hours"],c:0},

    {q:"What is the main purpose of fine-grained feedback in XP?",a:["To shorten the feedback loop so problems and misunderstandings can be discovered earlier","To reduce communication between developers and customers","To postpone feedback until after the final release","To eliminate the need for automated testing"],c:0},

    {q:"Which sequence best represents the continuous process emphasized in XP?",a:["Integrate → Test → Improve → Deliver → Repeat","Plan → Freeze → Code → Stop → Deploy","Design → Document → Wait → Release → Retire","Code → Release → Ignore feedback → Rewrite → Stop"],c:0},

    {q:"A development team wants to prevent knowledge about the system from becoming concentrated in one developer. Which XP practices are most directly relevant?",a:["Collective ownership, pair programming, and shared understanding","Small releases, simple design, and planning only","Sprint planning, velocity, and product backlog","Acceptance criteria, user stories, and story points"],c:0},

    {q:"What is Scrum?",a:["An Agile framework for organizing iterative development","A programming language used to implement Agile systems","A testing method that replaces unit testing","A documentation standard for software projects"],c:0},

    {q:"What is a Product Backlog?",a:["A list of work the Scrum team may need to address","A list containing only completed features","A list of bugs that cannot be fixed","A schedule containing only developer vacations"],c:0},

    {q:"Which item could appear in a Product Backlog?",a:["Features, user stories, engineering improvements, architecture work, documentation, or investigation","Only customer-facing features that will appear in the final interface","Only tasks assigned to the ScrumMaster","Only defects discovered after deployment"],c:0},

    {q:"What is the purpose of a Sprint?",a:["To complete a selected amount of work within a fixed-length period and produce a product increment","To continue indefinitely until every Product Backlog item is completed","To replace the Product Backlog with a permanent project plan","To perform only documentation work"],c:0},

    {q:"What happens to unfinished work when a Sprint ends?",a:["It does not extend the Sprint and returns to the Product Backlog","The Sprint is automatically extended until the work is finished","It is permanently deleted from the Product Backlog","It automatically becomes part of the next Sprint without replanning"],c:0},

    {q:"What is velocity in Scrum?",a:["An estimate of how much Product Backlog effort a team can cover in one Sprint","The number of developers assigned to a Scrum team","The number of bugs found during testing","The amount of time remaining before a Sprint ends"],c:0},

    {q:"How should previous Sprint velocity be used?",a:["Observed velocity can help the team determine how much work it can reasonably select for the next Sprint","Previous velocity should be ignored because every Sprint must contain the same amount of work","Velocity determines which programming language the team must use","Velocity guarantees that every future Sprint will have identical results"],c:0},

    {q:"What is the purpose of the Daily Scrum?",a:["To review progress, identify problems, and coordinate what the team plans to do next","To allow the ScrumMaster to assign every task individually","To replace Sprint Reviews and Retrospectives","To create the entire Product Backlog from scratch each day"],c:0},

    {q:"Which sequence best represents the purpose of the end-of-Sprint review process?",a:["Review the product → review how the team worked → learn → feed improvements into the next Sprint","Deploy the product → freeze requirements → stop testing → begin a new project","Write requirements → code everything → avoid feedback → repeat the same Sprint","Assign tasks → remove the Product Backlog → restart development"],c:0},

    {q:"What is a user story?",a:["A short description of functionality from the perspective of a user or stakeholder","A detailed technical design document written only for developers","A list of programming tasks without a user or business purpose","A complete specification of every system component"],c:0},

    {q:"Which format best represents a typical user story?",a:["As a <type of user>, I want <user requirement> so that <rationale or benefit>","The system must <technical implementation> using <programming language> because <developer preference>","Developer: <task>; Tester: <bug>; Customer: <deadline>","If <developer action>, then <database query>, because <technical constraint>"],c:0},

    {q:"Which user story is strongest according to the lecture?",a:["As a student, I want to book an available counselling appointment so that I can receive support without calling the clinic","As a user, I want a good website","As a student, I want login, booking, cancellation, payment, reminders, profile editing, and AI recommendations","Build the wellness system with all required features"],c:0},

    {q:"What does the 'I' in INVEST stand for?",a:["Independent","Integrated","Iterative","Important"],c:0},

    {q:"What does the 'N' in INVEST mean?",a:["Negotiable","Necessary","Networked","Normalized"],c:0},

    {q:"What does the 'V' in INVEST mean?",a:["Valuable","Verified","Versioned","Visual"],c:0},

    {q:"What does the 'T' in INVEST mean?",a:["Testable","Traceable","Technical","Timed"],c:0},

    {q:"What are the Three C's of a User Story?",a:["Card → Conversation → Confirmation","Code → Compile → Commit","Customer → Coding → Completion","Create → Change → Correct"],c:0},

    {q:"What is the purpose of the Conversation in the Three C's?",a:["To discuss the story with stakeholders and explore its real value and details","To automatically generate the source code for the story","To permanently finalize every technical implementation detail","To replace acceptance tests with informal discussion"],c:0},

    {q:"What is the purpose of acceptance criteria?",a:["To define the conditions that must be satisfied for a user story to be accepted","To determine which developer should receive the story","To estimate the team's velocity without testing the story","To describe the complete architecture of the software"],c:0},

    {q:"Which format is used for the acceptance-test structure shown in the lecture?",a:["Given → When → Then","Who → What → Why","Plan → Build → Release","Card → Conversation → Confirmation"],c:0},

    {q:"What is the main purpose of the Planning Game?",a:["To plan work by combining customer priorities with developer estimates and risk information","To allow developers to choose requirements without customer involvement","To create a fixed plan that cannot change during development","To replace user stories with technical documentation"],c:0},

    {q:"Who participates in Release Planning?",a:["The customer and developers","Only the developers","Only the customer","Only the project manager"],c:0},

    {q:"What is the main goal of Release Planning?",a:["Select user stories and decide the schedule","Convert every user story into programming tasks immediately","Assign individual tasks to specific developers","Review completed software from the previous iteration"],c:0},

    {q:"What is the main goal of Iteration Planning?",a:["Convert user stories into tasks and assign them","Determine the long-term business strategy of the organization","Select the product's entire feature set","Create the final project budget"],c:0},

    {q:"What is the customer's primary responsibility during the Planning Game?",a:["Make decisions about requirements","Provide developer effort estimates","Calculate team velocity","Assign programming tasks to developers"],c:0},

    {q:"What is the developer's responsibility during Release Planning?",a:["Provide effort estimates, estimation confidence, risk assessment, and team velocity","Determine which requirements are most valuable to customers","Approve all business requirements without customer input","Set the organization's marketing priorities"],c:0},

    {q:"During the Exploration phase of the Planning Game, what happens?",a:["Customers provide or confirm stories while developers estimate difficulty, ask questions, and break large stories into smaller ones","Customers select stories and developers immediately begin coding them","Developers assign all tasks and calculate individual workloads","The team reviews the completed product and closes the project"],c:0},

    {q:"During the Commitment phase of the Planning Game, what happens?",a:["Customers prioritize stories by business value while developers consider risk and velocity before stories are selected","Developers write acceptance tests while customers perform software testing","Customers assign tasks directly to individual developers","Developers permanently freeze the Product Backlog"],c:0},

    {q:"What is the purpose of the Steering phase of the Planning Game?",a:["Adjust the plan during the iteration as new stories, changes, or removals arise","Prevent any changes to the plan after the iteration begins","Estimate all future projects at the beginning of development","Replace the customer with the development team"],c:0},

    {q:"Why is exact effort estimation difficult?",a:["Software work is difficult to predict precisely and estimates can be affected by complexity, uncertainty, and incomplete knowledge","Software tasks always take exactly the same amount of time","Developers are always given complete information before estimating","Every software project uses identical technology and requirements"],c:0},

    {q:"Which approach uses formulas derived from historical data for effort estimation?",a:["Formal estimation models such as COCOMO, SLIM, and SEER-SEM","Planning poker","Expert estimation only","Velocity tracking"],c:0},

    {q:"What is expert estimation?",a:["Using the judgment and opinions of one or more expert developers to estimate effort","Using only a mathematical formula based on historical project data","Allowing customers to assign story points without developer input","Calculating effort only after the work has been completed"],c:0},

    {q:"What is combination-based estimation?",a:["Using both formal estimation models and expert judgment","Using only customer opinions","Using only the team's previous velocity","Using only the number of lines of code"],c:0},

    {q:"What is the main idea behind story points?",a:["They estimate relative effort by comparing one user story with another","They represent exact numbers of hours required to complete a story","They measure only the financial cost of a user story","They measure only the number of developers assigned to a story"],c:0},

    {q:"Which three factors are considered when estimating story points?",a:["Amount of work, complexity of work, and risk or uncertainty","Number of developers, project budget, and customer satisfaction","Programming language, documentation size, and office location","Schedule length, number of meetings, and number of customers"],c:0},

    {q:"Story A requires more work, is technically more difficult, and has greater uncertainty than Story B. What should generally happen to their story-point estimates?",a:["Story A should receive more story points than Story B","Story A should receive fewer story points than Story B","Both stories should automatically receive the same number of points","Story points cannot be used to compare the stories"],c:0},

    {q:"Why does the lecture emphasize relative effort rather than absolute effort when using story points?",a:["Comparing stories helps teams estimate difficulty without pretending that an exact amount of time can be predicted","Story points are intended to represent exact hours for every developer","Relative estimates eliminate the need to compare different stories","Story points are calculated directly from project salary costs"],c:0},

    {q:"Why can estimating software work directly in hours be difficult?",a:["Humans are poor at estimating time and development work does not progress linearly","Hours always produce estimates that are too large","Software development always takes exactly the same amount of time","Hours cannot be used to measure any form of software work"],c:0},

    {q:"What is a characteristic of story points in Scrum according to the lecture?",a:["They represent relative effort and may use a Fibonacci sequence such as 1, 2, 3, 5, 8, 13, and 21","They always represent exact one-hour blocks","They must always equal the number of lines of code","They are determined only by the customer"],c:0},

    {q:"What happens first in Planning Poker?",a:["A story is selected for effort estimation","The highest estimate is automatically accepted","The customer assigns points to each developer","The team calculates its final velocity"],c:0},

    {q:"During Planning Poker, what happens after everyone secretly selects an estimate?",a:["Everyone reveals their cards simultaneously","The developer with the highest estimate automatically wins","Only the customer reveals their estimate","The lowest estimate becomes the final answer"],c:0},

    {q:"During Planning Poker, two developers choose very different estimates. What should happen next?",a:["The developers with the lowest and highest estimates explain their reasoning, then everyone revises their estimates","The highest estimate automatically becomes the final estimate","The lowest estimate automatically becomes the final estimate","The story is immediately removed from the Product Backlog"],c:0},

    {q:"What is team velocity?",a:["The amount of story points completed by a team during an iteration","The number of developers working during an iteration","The amount of time remaining in an iteration","The number of user stories currently in the Product Backlog"],c:0},

    {q:"How can a team improve its estimates over multiple iterations?",a:["Use previous performance, compare similar stories, and build domain knowledge from experience","Ignore previous iterations and estimate every story from scratch","Increase every estimate by the same number of story points","Allow customers to determine all future story-point values"],c:0},

    {q:"What does the 'Yesterday's Weather' rule suggest about future team velocity?",a:["The team's recent performance is a useful guide because today's results are likely to be more similar to recent results than unrelated values","The team should always double its previous velocity","The team should never use previous performance when planning","The team's future velocity should always equal the largest historical velocity"],c:0},

    {q:"When should risk management take place?",a:["At the start of a project, at the start of Agile iterations, and at the start of major phases","Only after the software has been released","Only when a customer reports a defect","Only after the final project review"],c:0},

    {q:"What are the four steps of risk management presented in the lecture?",a:["Risk identification, risk analysis, risk management planning, and risk review","Risk coding, risk testing, risk deployment, and risk retirement","Risk estimation, risk programming, risk release, and risk maintenance","Risk planning, coding, documentation, and customer approval"],c:0},

    {q:"Which of the following is a project risk?",a:["A risk affecting the project schedule, development process, or resources","A risk affecting only the quality of the finished software","A risk affecting only the organization's competitors","A risk affecting only the user interface design"],c:0},

    {q:"A development team adopts a new game engine and is unsure whether it will perform well. What type of risk is this?",a:["Product risk","Project risk","Business risk","Scheduling risk"],c:0},

    {q:"A competitor releases a new product and the company's sales may decrease. What type of risk is this?",a:["Business risk","Product risk","Project risk","Implementation risk"],c:0},

    {q:"When analyzing the risk of a user story, what does completeness measure?",a:["How well the details of the story are known","How many developers are assigned to the story","How many lines of code the story requires","How much money the customer will spend"],c:0},

    {q:"A user story is highly likely to change during development. Which risk-analysis factor does this describe?",a:["High volatility","High completeness","High simplicity","Low complexity"],c:0},

    {q:"A user story is technically difficult and complicated to implement. Which risk-analysis factor should receive a higher value?",a:["Complexity","Completeness","Volatility","Priority"],c:0},

    {q:"A user story has a risk score of 5 using the lecture's completeness, volatility, and complexity scoring. How is the risk classified?",a:["High risk","Low risk","Medium risk","No risk"],c:0},

    {q:"A user story has Complete = 0, Medium Volatility = 1, and Complex = 2. What is its total risk score and classification?",a:["3, which is Medium risk","2, which is Medium risk","4, which is High risk","5, which is High risk"],c:0}
]
  }
};

window.questionCodes = {
  CompArch: "COMP-2453",
  CloudComp: "COMP-4312",
  SocIndi: "SOCI-2755",
  DataSci: "COMP-4112",
  SoftEngi: "COMP-3415"
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
    hudText: "#ffffff",
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
    danger: "#d94b4b"
  }
};
