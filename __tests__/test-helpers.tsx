/**
 * Test helpers for React Native testing with react-test-renderer
 */

import ReactTestRenderer from 'react-test-renderer';

/**
 * Find text in the component tree
 */
export const getByText = (tree: ReactTestRenderer.ReactTestInstance, text: string): ReactTestRenderer.ReactTestInstance | null => {
  try {
    return tree.find((node) => {
      if (node.children) {
        return node.children.some((child) => {
          if (typeof child === 'string') {
            return child === text || child.includes(text);
          }
          return false;
        });
      }
      return false;
    });
  } catch {
    return null;
  }
};

/**
 * Find all instances of text in the component tree
 */
export const getAllByText = (tree: ReactTestRenderer.ReactTestInstance, text: string): ReactTestRenderer.ReactTestInstance[] => {
  const results: ReactTestRenderer.ReactTestInstance[] = [];
  
  const search = (node: ReactTestRenderer.ReactTestInstance) => {
    if (node.children) {
      node.children.forEach((child) => {
        if (typeof child === 'string' && (child === text || child.includes(text))) {
          results.push(node);
        }
      });
    }
    if (node.children) {
      node.children.forEach((child) => {
        if (ReactTestRenderer.isValidElement(child)) {
          search(child as any);
        }
      });
    }
  };
  
  search(tree);
  return results;
};

/**
 * Find by placeholder text
 */
export const getByPlaceholderText = (tree: ReactTestRenderer.ReactTestInstance, placeholder: string): ReactTestRenderer.ReactTestInstance | null => {
  try {
    return tree.find((node) => {
      return node.props?.placeholder === placeholder;
    });
  } catch {
    return null;
  }
};

/**
 * Simulate press event
 */
export const fireEvent = {
  press: (instance: ReactTestRenderer.ReactTestInstance) => {
    if (instance.props && typeof instance.props.onPress === 'function') {
      instance.props.onPress();
    }
  },
  changeText: (instance: ReactTestRenderer.ReactTestInstance, text: string) => {
    if (instance.props && typeof instance.props.onChangeText === 'function') {
      instance.props.onChangeText(text);
    }
  },
};

/**
 * Render component using react-test-renderer
 */
export const render = (component: React.ReactElement) => {
  const tree = ReactTestRenderer.create(component);
  const root = tree.root; // Store root immediately while tree is mounted
  return {
    tree,
    root,
    getByText: (text: string) => {
      return getByText(root, text);
    },
    getAllByText: (text: string) => {
      return getAllByText(root, text);
    },
    getByPlaceholderText: (placeholder: string) => {
      return getByPlaceholderText(root, placeholder);
    },
    UNSAFE_getByType: (type: string) => {
      try {
        return root.findAllByType(type as any);
      } catch {
        return [];
      }
    },
    unmount: () => tree.unmount(),
  };
};

