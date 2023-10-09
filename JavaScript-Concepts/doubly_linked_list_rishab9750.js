class NodeValueDL {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.previous = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    addHead(element) {
        var node = new NodeValueDL(element);
        if (this.head == null) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.head.previous = node;
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    addTail(element) {
        var node = new NodeValueDL(element);
        if (this.tail == null) {
            this.tail = node;
            this.head = node;
        }
        else {
            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;
        }
        this.size++;
    }

    addAtindex(element, index) {
        const node = new NodeValueDL(element);
        let i = 0;
        var curr;

        if (index < 0 || index >= this.size) { return console.log("Enter valid index"); }

        if (index == 0) {
            curr = this.head;
            curr.previous = node;
            node.next = curr;
            this.head = node;
        }
        else {
            curr = this.head;
            var prev;

            while (i < index) {
                i++;
                prev = curr;
                curr = curr.next;
            }

            prev.next = node;
            node.next = curr;
            curr.previous = node;
            node.previous = prev;
        }
        this.size++;
    }

    printList() {
        var curr = this.head;
        var str = "";
        while (curr != null) {
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
    }

    removeElement(element) {
        var curr = this.head;
        var prev = null;
        while (curr != null) {
            if (curr.element == element) {
                if (prev == null) {
                    var nextNode = curr.next;
                    nextNode.previous = null;
                    this.head = curr.next;
                }
                else {
                    if (!curr.next) {
                        prev.next = null;
                        this.tail = prev;
                    }
                    else {
                        var nextNode = curr.next;
                        prev.next = nextNode;
                        nextNode.previous = prev;
                    }
                }
            }

            prev = curr;
            curr = curr.next;
        }
        this.size--;
    }

    removeAt(index) {
        var curr = this.head.next;
        var prev = null;
        var currTail = this.tail.previous;
        let i = 0;
        if (index < 0 || index >= this.size) { return console.log("Enter Valid index") }

        if (index == 0) {
            curr.previous = null;
            this.head = curr;
        }
        else if (index == this.size - 1) {
            currTail.next = null;
            this.tail = currTail;
        } else {
            while (i < index) {
                i++;
                prev = curr.previous;
                curr = curr.next;
            }
            prev.next = curr;
            curr.previous = prev;
        }
        this.size--;
    }
}

function testList() {
    const list = new DoubleLinkedList();
    list.addHead(10);
    list.addTail(20);
    list.addTail(30);
    list.addTail(40);
    list.addAtindex(5, 3);
    list.removeAt(5)
    // console.log("Head", list.head);
    // console.log("Tail", list.tail);

    list.printList()
}

testList()

