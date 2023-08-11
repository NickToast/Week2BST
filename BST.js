/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
        this.data = data;
        /**
       * These properties are how this node is connected to other nodes to form
       * the tree. Similar to .next in a SinglyLinkedList except a BST node can
       * be connected to two other nodes. To start, new nodes will not be
       * connected to any other nodes, these properties will be set after
       * the new node is instantiated.
       *
       * @type {BSTNode|null}
       */
        this.left = null;
      /** @type {BSTNode|null} */
        this.right = null;
    }
}

/**
   * Represents an ordered tree of nodes where the data of left nodes are <= to
   * their parent and the data of nodes to the right are > their parent's data.
   */
class BinarySearchTree {
    constructor() {
        /**
       * Just like the head of a linked list, this is the start of our tree which
       * branches downward from here.
       *
       * @type {BSTNode|null}
       */
        this.root = null;
    }

    /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() {
        // if (this.root == null) {
        //     return null;
        // }
        return this.root === null; // ? true : false; //if there is no value at root, that means there are no children
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    min(current = this.root) {
        if (this.isEmpty()){
            return null;
        }
        // if (current.left === null) {
        //     return current;
        // } else {
        //     current = current.left;
        // }
        while (current.left != null) {
            current = current.left;
        }
        return current.data;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    minRecursive(current = this.root) {
        if (this.isEmpty()){
            return null;
        }
        if (current.left === null) {
            return current.data;
        } else {
            return this.minRecursive(current.left);
        }
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max(current = this.root) {
        if (this.isEmpty()){
            return null;
        }
        while (current.right != null) {
            current = current.right;
        }
        return current.data;
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    maxRecursive(current = this.root) {
        if (this.isEmpty()){
            return null;
        }
        if (current.right === null) {
            return current.data;
        } else {
            return this.maxRecursive(current.right);
        }
    }

    /**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
    contains(searchVal) {
        //check if root is null
        if (this.isEmpty()) {
            //if it is null, return false because there is no values in the tree
            return null;
        }
        let current = this.root;
        while (current != null) {
            if (current.data == searchVal) {
                return true;
            }
            if (searchVal < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

/**
   * Determines if this tree contains the given searchVal.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} searchVal The number to search for in the node's data.
   * @returns {boolean} Indicates if the searchVal was found.
   */
    containsRecursive(searchVal, current = this.root) {
        if (this.root === null) {
            return false;
        }
        while (current != null) {
            if (current.data == searchVal) {
                return true;
            }
            if (searchVal < current.data) {
                return this.containsRecursive(searchVal, current.left);
            } else {
                return this.containsRecursive(searchVal, current.right);
            }
        }
        return false;
    }

    /**
   * Calculates the range (max - min) from the given startNode.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} startNode The node to start from to calculate the range.
   * @returns {number|null} The range of this tree or a sub tree depending on if the
   *    startNode is the root or not.
   */
    range(startNode = this.root) {
        if (this.isEmpty()) {
            return null;
        }
        //We can just use our previous functions max() and min() to get the max and min easily, if we did not want to use these functions, we can rewrite those two function codes into this one
        // let max = this.max(), min = this.min();

        //Without min max functions
        //define max and min to hold integers
        let max = 0, min = 0;
        let current = this.root;
        //traverses through tree to the right to get the max value
        while (startNode.right != null) {
            //if right node is not null, set max to the right node's data
            max = startNode.right.data;
            //set startNode to the right node to traverse through the tree until max value
            startNode = startNode.right;
        }
        //traverses through tree to the left to get the max value (uses current which is a different variable than startNode to go the other way)
        while (current.left != null) {
            //if left node is not null, set min to the left node's data
            min = current.left.data;
            //set startNode to the left node to traverse through the tree until min value
            current = current.left;
        }
        return `The range for this binary tree is ${min}-${max}.`
    }

    /**
   * Inserts a new node with the given newVal in the right place to preserve
   * the order of this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} newVal The data to be added to a new node.
   * @returns {BinarySearchTree} This tree.
   */
    insert(newVal) {
        if (this.isEmpty()) {
            this.root = new BSTNode(newVal);
            return this;
        }
        let current = this.root;
        while (current) {
            if (newVal < current.data) {
                if (current.left == null) {
                    current.left = new BSTNode(newVal);
                    return this;
                }
                current = current.left;
            } else {
                if (current.right == null) {
                    current.right = new BSTNode(newVal);
                    return this;
                }
                current = current.right;
            }
        }
    }

    /**
   * Inserts a new node with the given newVal in the right place to preserve
   * the order of this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {number} newVal The data to be added to a new node.
   * @param {Node} curr The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {BinarySearchTree} This tree.
   */
    insertRecursive(newVal, curr = this.root) {
        if (this.isEmpty()){
            this.root = new BSTNode(newVal)
            return this;
        }
        if (newVal < curr.data){
            if (curr.left == null){
                curr.left = new BSTNode(newVal);
                return this;
            }
            return this.insertRecursive(newVal, curr.left);
        }
        if (newVal > curr.data) {
            if (curr.right == null){
                curr.right = new BSTNode(newVal);
                return this;
            }
            return this.insertRecursive(newVal, curr.right);
        }
    }

    /**
   * DFS Preorder: (CurrNode, Left, Right)
   * Converts this BST into an array following Depth First Search preorder.
   * Example on the fullTree var:
   * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
   * @param {Node} node The current node during the traversal of this tree.
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
    toArrPreorder(node = this.root, vals = []) {
        if (node === null) {
            return vals;
        }
        if (node) {
            vals.push(node.data);
            this.toArrPreorder(node.left, vals);
            this.toArrPreorder(node.right, vals);
        }
        return vals;
    }

    /**
   * DFS Inorder: (Left, CurrNode, Right)
   * Converts this BST into an array following Depth First Search inorder.
   * See debugger call stack to help understand the recursion.
   * Example on the fullTree var:
   * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
   * @param {Node} node The current node during the traversal of this tree.
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
    toArrInorder(node = this.root, vals = []) {
        if (node === null) {
            return vals;
        }
        if (node) {
            this.toArrInorder(node.left, vals);
            vals.push(node.data);
            this.toArrInorder(node.right, vals);
        }
        return vals;
    }

    /**
   * DFS Postorder (Left, Right, CurrNode)
   * Converts this BST into an array following Depth First Search postorder.
   * Example on the fullTree var:
   * [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]
   * @param {Node} node The current node during the traversal of this tree.
   * @param {Array<number>} vals The data that has been visited so far.
   * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
   */
    toArrPostorder(node = this.root, vals = []) {
        if (node === null) {
            return vals;
        }
        if (node) {
            this.toArrPostorder(node.left, vals);
            this.toArrPostorder(node.right, vals);
            vals.push(node.data);
        }
        return vals;
    }

    /**
   * BFS order: horizontal rows top-down left-to-right.
   * Converts this BST into an array following Breadth First Search order.
   * Example on the fullTree var:
   * [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]
   * @param {Node} current The current node during the traversal of this tree.
   * @returns {Array<number>} The data of all nodes in BFS order.
   */
    toArrLevelorder(current = this.root) {
        if (current === null) {
            return [];
        }
        // let queue = [current];
        // let result = [];

        // while (queue.length) {
        //     let levelArray = [];
        //     let levelSize = queue.length;
        //     while (levelSize) {
        //         let current = queue.shift();
        //         if (current.left) queue.push(current.left);
        //         if (current.right) queue.push(current.right);

        //         levelArray.push(current.data);
        //         levelSize--;
        //     }
        //     result.push(levelArray);
        // }
        // return result;

        //RUBEN SOLUTION
        let vals = [];
        let newVals = [];
        if (current) {
            newVals.push(current);
        }
        while (newVals.length > 0) {
            let whileVals = newVals.shift();
            vals.push(whileVals.data);
            if (whileVals.left) {
                newVals.push(whileVals.left);
            }
            if (whileVals.right) {
                newVals.push(whileVals.right);
            }
            
        }
        return vals;
    }

    /**
   * Recursively counts the total number of nodes in this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during the traversal of this tree.
   * @returns {number} The total number of nodes.
   */
    size(node = this.root) {
        if (node === null) {
            return 0;
        }
        if (node) {
            return 1 + this.size(node.left) + this.size(node.right);
        }
    }

    /**
   * Calculates the height of the tree which is based on how many nodes from
   * top to bottom (whichever side is taller).
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during traversal of this tree.
   * @returns {number} The height of the tree.
   */
    height(node = this.root) {
        if (node === null) {
            return 0;
        }
        if (node) {
            let leftHeight = this.height(node.left);
            let rightHeight = this.height(node.right);
            if (leftHeight > rightHeight) {
                return 1 + leftHeight;
            } else {
                return 1 + rightHeight;
            }
        }

        //RUBEN SOLUTION
        // return 1 + Math.max(this.height(node.left), this.height(node.right));
    }

    /**
   * Determines if this tree is a full tree. A full tree is a tree where every
   * node has both a left and a right except for the leaf nodes (last nodes)
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} node The current node during traversal of this tree.
   * @returns {boolean} Indicates if this tree is full.
   */
    isFull(node = this.root) {
        if (node === null) {
            return false;
        }
        if (!node.left && !node.right) {
            return true;
        }
        if (node.left && node.right) {
            return this.isFull(node.left) && this.isFull(node.right);
        }
        return false;
    }


    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);
    
        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );
    
        this.print(node.left, spaceCnt);
    }
}

const emptyTree = new BinarySearchTree();

const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

//TESTING
console.log("One Node Tree Tests")
oneNodeTree.print();
console.log("Min")
console.log(oneNodeTree.min());
console.log("-----------------");
console.log("Max")
console.log(oneNodeTree.max());
console.log("-----------------");
console.log("=================");

/* twoLevelTree
root
10
/   \
5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

console.log("Two Level Tree Min")
console.log(twoLevelTree.min());
console.log("-----------------");
twoLevelTree.print();
console.log("=================");

/* threeLevelTree 
root
10
/   \
5     15
/ \    / \
2   6  13  
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

console.log("Three Level Tree Tests");
threeLevelTree.print();
console.log("Min")
console.log(threeLevelTree.min());
console.log("-----------------");
console.log("Max")
console.log(threeLevelTree.max());
console.log("-----------------");
console.log("Min Recursive");
console.log(threeLevelTree.minRecursive());
console.log("-----------------");
console.log("Max Recursive");
console.log(threeLevelTree.maxRecursive());
console.log("-----------------");
console.log("Contains 13?");
console.log(threeLevelTree.contains(13));
console.log("-----------------");
console.log("Contains Recursive 15?");
console.log(threeLevelTree.containsRecursive(15));
console.log("-----------------");
console.log("Range");
console.log(threeLevelTree.range());
console.log("-----------------");
console.log("Insert");
threeLevelTree.insert(7);
threeLevelTree.print();
console.log("ToArrPreorder");
threeLevelTree.print();
console.log(threeLevelTree.toArrPreorder());
console.log("-----------------");
console.log("ToArrInorder");
console.log(threeLevelTree.toArrInorder());
console.log("-----------------");
console.log("ToArrPostorder");
console.log(threeLevelTree.toArrPostorder());
console.log("-----------------");
console.log("ToArrLevelorder");
console.log(threeLevelTree.toArrLevelorder());
console.log("-----------------");
console.log("Size");
console.log(threeLevelTree.size());
console.log("-----------------");
console.log("Height");
console.log(threeLevelTree.height());
console.log("-----------------");


/* fullTree
                      root
                  <-- 25 -->
                /            \
              15             50
            /    \         /    \
          10     22      35     70
        /   \   /  \    /  \   /  \
      4    12  18  24  31  44 66  90
  */
  /***************** Uncomment after insert method is created. ****************/
// const fullTree = new BinarySearchTree();
// fullTree
//     .insert(25)
//     .insert(15)
//     .insert(10)
//     .insert(22)
//     .insert(4)
//     .insert(12)
//     .insert(18)
//     .insert(24)
//     .insert(50)
//     .insert(35)
//     .insert(70)
//     .insert(31)
//     .insert(44)
//     .insert(66)
//     .insert(90);
// fullTree.print();