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

  CloudComp: [
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
  ],


  SocIndi: {
    review: [
    ],
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
    {q:"Which function is used to create plots of the iris dataset?", a:["plot()","irisplot()","graph()","draw()"], c:0}
  ]
};

window.questionCodes = {
  CompArch: "COMP-2453",
  CloudComp: "COMP-4312",
  SocIndi: "SOCI-2755",
  DataSci: "COMP-4112"
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
