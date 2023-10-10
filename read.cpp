Operators in C / C++
Difficulty Level : Easy

Operators are the foundation of any programming language. Thus the functionality of the C/C++ programming language is incomplete without the use of operators. We can define operators as symbols that help us to perform specific mathematical and logical computations on operands. In other words, we can say that an operator operates the operands. 
For example, consider the below statement: 
 

c = a + b;
Here, ‘+’ is the operator known as the addition operator and ‘a’ and ‘b’ are operands. The addition operator tells the compiler to add both of the operands ‘a’ and ‘b’. 
 



C/C++ has many built-in operator types and they are classified as follows: 
 

Arithmetic Operators: These are the operators used to perform arithmetic/mathematical operations on operands. Examples: (+, -, *, /, %,++,–). Arithmetic operators are of two types: 
Unary Operators: Operators that operate or work with a single operand are unary operators. For example: (++ , –)
Binary Operators: Operators that operate or work with two operands are binary operators. For example: (+ , – , * , /)
Relational Operators: These are used for the comparison of the values of two operands. For example, checking if one operand is equal to the other operand or not, an operand is greater than the other operand or not, etc. Some of the relational operators are (==, >= , <= ). To learn about each of these operators in detail go to this link.
Logical Operators:  Logical Operators are used to combine two or more conditions/constraints or to complement the evaluation of the original condition in consideration. The result of the operation of a logical operator is a boolean value either true or false. For example, the logical AND represented as ‘&&’ operator in C or C++ returns true when both the conditions under consideration are satisfied. Otherwise, it returns false. Therefore, a && b returns true when both a and b are true (i.e. non-zero). To learn about different logical operators in detail please visit this link.
Bitwise Operators: The Bitwise operators are used to perform bit-level operations on the operands. The operators are first converted to bit-level and then the calculation is performed on the operands. The mathematical operations such as addition, subtraction, multiplication, etc. can be performed at bit-level for faster processing. For example, the bitwise AND represented as & operator in C or C++ takes two numbers as operands and does AND on every bit of two numbers. The result of AND is 1 only if both bits are 1. To learn bitwise operators in detail, visit this link.
Assignment Operators: Assignment operators are used to assign value to a variable. The left side operand of the assignment operator is a variable and the right side operand of the assignment operator is a value. The value on the right side must be of the same data type as the variable on the left side otherwise the compiler will raise an error. 
Different types of assignment operators are shown below: 
“=”: This is the simplest assignment operator. This operator is used to assign the value on the right to the variable on the left. 
For example: 
 
a = 10;
b = 20;
ch = 'y';
 
“+=”: This operator is combination of ‘+’ and ‘=’ operators. This operator first adds the current value of the variable on left to the value on the right and then assigns the result to the variable on the left. 
Example: 
 
(a += b) can be written as (a = a + b)
If initially value stored in a is 5. Then (a += 6) = 11.
“-=”: This operator is a combination of ‘-‘ and ‘=’ operators. This operator first subtracts the value on the right from the current value of the variable on left and then assigns the result to the variable on the left. 
Example: 
 
(a -= b) can be written as (a = a - b)
If initially value stored in a is 8. Then (a -= 6) = 2.
“*=”: This operator is combination of ‘*’ and ‘=’ operators. This operator first multiplies the current value of the variable on left to the value on the right and then assigns the result to the variable on the left. 
Example: 
 
(a *= b) can be written as (a = a * b)
If initially, the value stored in a is 5. Then (a *= 6) = 30.
“/=”: This operator is combination of ‘/’ and ‘=’ operators. This operator first divides the current value of the variable on left by the value on the right and then assigns the result to the variable on the left. 
Example: 
 
(a /= b) can be written as (a = a / b)
If initially, the value stored in a is 6. Then (a /= 2) = 3.
Other Operators: Apart from the above operators there are some other operators available in C or C++ used to perform some specific task. Some of them are discussed here: 
sizeof operator: sizeof is much used in the C/C++ programming language. It is a compile-time unary operator which can be used to compute the size of its operand. The result of sizeof is of the unsigned integral type which is usually denoted by size_t. Basically, the sizeof the operator is used to computing the size of the variable. To learn about the sizeof operator in detail you may visit this link.
Comma Operator: The comma operator (represented by the token,) is a binary operator that evaluates its first operand and discards the result, it then evaluates the second operand and returns this value (and type). The comma operator has the lowest precedence of any C operator. Comma acts as both operator and separator. To learn about comma in detail visit this link.
Conditional Operator: Conditional operator is of the form Expression1? Expression2: Expression3. Here, Expression1 is the condition to be evaluated. If the condition(Expression1) is True then we will execute and return the result of Expression2 otherwise if the condition(Expression1) is false then we will execute and return the result of Expression3. We may replace the use of if..else statements with conditional operators. To learn about conditional operators in detail, visit this link.
 




Operator precedence chart

The below table describes the precedence order and associativity of operators in C / C++. The precedence of the operator decreases from top to bottom. 
 

Precedence	Operator	Description	Associativity
1	()	Parentheses (function call)	left-to-right
[]	Brackets (array subscript)	 
.	Member selection via object name	 
->	Member selection via a pointer	 
++/–	Postfix increment/decrement	 
2	++/–	Prefix increment/decrement	right-to-left
+/-	Unary plus/minus	 
!~	Logical negation/bitwise complement	 
(type)	Cast (convert value to temporary value of type)	 
*	Dereference	 
&	Address (of operand)	 
sizeof	Determine size in bytes on this implementation	 
3	*,/,%	Multiplication/division/modulus	left-to-right
4	+/-	Addition/subtraction	left-to-right
5	<< , >>	Bitwise shift left, Bitwise shift right	left-to-right
6	< , <=	Relational less than/less than or equal to	left-to-right
> , >=	Relational greater than/greater than or equal to	left-to-right
7	== , !=	Relational is equal to/is not equal to	left-to-right
8	&	Bitwise AND	left-to-right
9	^	Bitwise exclusive OR	left-to-right
10	|	Bitwise inclusive OR	left-to-right
11	&&	Logical AND	left-to-right
12	||	Logical OR	left-to-right
13	?:	Ternary conditional	right-to-left
14	=	Assignment	right-to-left
+= , -=	Addition/subtraction assignment	 
*= , /=	Multiplication/division assignment	 
%= , &=	Modulus/bitwise AND assignment	 
^= , |=	Bitwise exclusive/inclusive OR assignment	 
<>=	Bitwise shift left/right assignment	 
15	,	expression separator	left-to-right
