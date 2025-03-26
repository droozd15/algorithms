import {reduceTree, TreeItem} from './reduceTree';

type MyData = {
  value: number
};

const tree: TreeItem<MyData> = {
  value: 1,
  children: [
    {
      value: 2,
      children: [],
    },
    {
      value: 3,
      children: [
        {
          value: 4,
          children: [
            {
              value: 5,
              children: [],
            },
            {
              value: 15,
              children: [],
            },
          ],
        },
      ],
    },
    {
      value: 6,
      children: [],
    },
  ],
};

const addWithConsole = (state, item) => {
  console.log(item.value);
  return state + item.value
}
const postOrder = reduceTree<MyData, number>(tree, addWithConsole, 0 , 'post-order')
console.log('result post order', postOrder)

const preOrder = reduceTree<MyData, number>(tree, addWithConsole, 0 , 'pre-order')
console.log('result pre order', preOrder)


