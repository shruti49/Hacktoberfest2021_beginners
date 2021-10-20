{
    /** 
    Auther: Sikhumbuzo Sithole
    JavaScript Concept: Linked List
    GITHUB: https://github.com/sssithole
    **/

    /** 
    LinkedList is the dynamic data structure, as we can add or remove elements at ease, and it can even grow as needed. Just like arrays, linked lists store elements sequentially, but don’t store the elements contiguously like an array. 
    ***/

    // Syntax

    // User defined class node
    class Node {
        // constructor
        constructor(element)
        {
            this.element = element;
            this.next = null
        }
    }

    //ADDING ELEMENTS
    // adds an element at the end
    // of list
    add(element)
    {
        // creates a new node
        var node = new Node(element);
  
        // to store current node
        var current;
        // if list is Empty add the
        // element and make it head
        if (this.head == null)
            this.head = node;
        else {
            current = this.head;
  
            // iterate to the end of the
            // list
            while (current.next) {
                current = current.next;
            }
  
            // add node
            current.next = node;
        }
        this.size++;
    }

    // insert element at the position index
    // of the list
    insertAt(element, index)
    {
        if (index < 0 || index > this.size)
            return console.log("Please enter a valid index.");
        else {
            // creates a new node
            var node = new Node(element);
            var curr, prev;
  
            curr = this.head;
  
            // add the element to the
            // first index
            if (index == 0) {
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;
                var it = 0;
  
                // iterate over the list to find
                // the position to insert
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
  
                // adding an element
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }


    // removes a given element from the
    // list
    removeElement(element)
    {
	    var current = this.head;
	    var prev = null;

	    // iterate over the list
	    while (current != null) {
    		// comparing element with current
		    // element if found then remove the
	    	// and return true
    		if (current.element === element) {
			    if (prev == null) {
		    		this.head = current.next;
	    		} else {
    				prev.next = current.next;
			    }
			    this.size--;
			    return current.element;
		    }
		    prev = current;
		    current = current.next;
	    }
	    return -1;
    }

}
