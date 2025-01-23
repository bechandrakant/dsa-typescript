export class BT_Node {
  value: number;
  left: BT_Node | null;
  right: BT_Node | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  root: BT_Node | null;
  constructor() {
    this.root = null;
  }

  insert(value: number) {
    let newNode = new BT_Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let temp = this.root;
      while (true) {
        if (temp.value == value) return undefined;
        else if (temp.value < value) {
          if (temp.right) temp = temp.right;
          else {
            temp.right = newNode;
            return;
          }
        } else {
          if (temp.left) temp = temp.left;
          else {
            temp.left = newNode;
            return;
          }
        }
      }
    }
  }

  contains(value: number) {
    if (this.root === null) return false;
    let temp: BT_Node | null = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else if (value === temp.value) {
        return true;
      }
    }
    return false;
  }
}
