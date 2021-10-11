// AUTHOR: Aman Agarwal
// JavaScript Concept: Regular Expressions
// GITHUB: https://github.com/amanag25

// REGULAR EXPRESSIONS


// Regular expressions are patterns of characters,special symbols and digits used to extract or match patterns in given strings of data.
// We can create enormus amounts of patterns using constructs such as Character classes, Assertions, Groups and Ranges,Quantifiers,Unicode property escapes etcetra.
//We are provided with different methods in javascript to compare these regular expressions to our data like exec(),match(),test(),replace(),split() etcetra.
//There are many usecases of regular expressions such as 
//Checking validity of data when some user is submitting his or her data in a datafield of a form
//searching for a given pattern of string in some given data etcetra



// Let's say we want to register a user in our website and we want his data in valid formats so in this case 
//we can make use of regular expressions

function registration()
{

    // these are data points submitted by the user
    var name= "AmanAgarwal";
    var email= "aman@gmail.com";
    var uname= "amanag";
    //for entring password
    var pwd= "bigMan19@2";			

    
    //password validation code
    var pwd_expression = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    // This expression basically ensures that password must contian a lowercase character[a-z],an uppercase character [A-Z], a digit[0-9] and a special symbol [#?!@$%^&*-]

    // Name validation expression code
    var letters = /^[A-Za-z]+$/;
    // this expression ensures that the name should only be comprised of lower case or uppercase letters

    //email validation expression code
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/;
    // this ensures that the first part of email id should be composed of letters or digits followed by a  @ and then the second part composed of letters and digits followed by a  . and then the last part consiting of letter and is of length 2 to 4


    // this code checks whether the entries submitted are valid and if they are valid it validates the user
    if(name=='')
    {
        console.log('Please enter your name');
    }
    else if(!letters.test(name))
    {
        console.log('Name field required only alphabet characters');
    }
    else if(email=='')
    {
        console.log('Please enter your user email id');
    }
    else if (!filter.test(email))
    {
        console.log('Invalid email');
    }
    else if(uname=='')
    {
        console.log('Please enter the user name.');
    }
    else if(!letters.test(uname))
    {
        console.log('User name field required only alphabet characters');
    }
    else if(pwd=='')
    {
        console.log('Please enter Password');
    }
   
    else if(!pwd_expression.test(pwd))
    {
        console.log ('Upper case, Lower case, Special character and Numeric letter are required in Password filed');
    }
   
    else if(pwd.length < 6)
    {
        console.log ('Password minimum length is 6');
    }
    else if(pwd.length > 12)
    {
        console.log ('Password max length is 12');
    }
    else
    {				                            
          console.log(" This is a valid user");
    }
}
