// AUTHOR: Mayank Choudhary
// JavaScript Concept: Document Object Modeling
// GITHUB: https://github.com/Mayank151c

/* 
   Document Object Modeling is one of the interesting concept,
   mainly when it come to build dynamic website so in this 
   documentation i will be going introduce you to all the 
   major concept about it one by one.
*/

/*`````````````````````````````````````````````````````````/
   EXAMPLE TO BUILD DYANMIC TABLE (2X2) THROUGH JAVASCRIPT
/*`````````````````````````````````````````````````````````*/
/*
  DOM mainly deals with html elements so first we see 
  How html elements can be created.

  SYNTAX: document.createElement(tagName)
*/

//creating table
var table = document.createElement('table')

//creating row
var tr1 = document.createElement('tr')
var tr2 = document.createElement('tr')

//creating column
var td1 = document.createElement('td')
var td2 = document.createElement('td')
var td3 = document.createElement('td')
var td4 = document.createElement('td')

/*
  Now we are interested to put some content to these tags
 
  SYNTAX: element.innerHTML = content
  
  similar method - 
        innerText - to set or fetch text inside tag
*/
td1.innerHTML = 'Mobile'
td2.innerHTML = 'Laptop'
td3.innerHTML = 'Iphone'
td4.innerHTML = 'Tablet'

/*
  After creating element we need to append or prepend
  them to some other elements

  SYNTAX: elementName.append(elementToBeAppend)
  
  similar methods - 
        appendChild(e) = the elements comes after last,
        prepend(e)     = the elements comes at the top &
                        all other elements are pushed down
*/

//appending elements to first row
tr1.appendChild(td1)
tr1.appendChild(td2)

//appending elements to first row
tr2.appendChild(td3)
tr2.appendChild(td4)

//appending rows to table
table.append(tr1)
table.append(tr2)

/*
  Now the important part is, how to add this table
  on the webpage i.e how to select elements from
  webpage.

  SYNTAX: document.getElementById(ElementsId)
  
  similar methods -
       getElementsByClassName(id) - remember the classname can be assign to
                                multiple object so use its element as array
       getElementsByTagName(tag) - selects elements by tagname
*/

// this element is supposed to present in the html
var product = document.getElementById('product')

product.innerHTML = table

// Now the table will be visible over the webpage dyanmically
