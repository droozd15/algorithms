/**
 * Array like reduce, but for tree elements.
 * Supports post- and pre-order
 */

/**
 * Функция работает аналогично `Array.prototype.reduce`, только
 * для элементов дерева. Поддерживает пред- и пост-порядок прохода.
 */

export type TreeItem<T> = T & {
  children: TreeItem<T>[],
};

export function reduceTree<T, S>(
  root: TreeItem<T>,
  reducer: (state: S, item: T) => S,
  initialState: S,
  traversal: 'pre-order' | 'post-order',
): S {
  let state: S = initialState

  if (traversal === 'pre-order') {
    state = reducer(state, root);
  }

  for (let i = 0; i < root.children.length; i++) {
    state = reduceTree(root.children[i], reducer, state, traversal)
  }

  if (traversal === 'post-order') {
    state = reducer(state, root);
  }

  return state
}

