/**
 * Test utilities for Four Paws of Hope Mobile tests
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';

/**
 * Helper to find text in rendered component tree
 */
export const findTextInTree = (tree: ReactTestRenderer.ReactTestInstance, text: string): ReactTestRenderer.ReactTestInstance | null => {
  try {
    return tree.find((node) => {
      return node.children.some((child) => {
        if (typeof child === 'string') {
          return child.includes(text);
        }
        return false;
      });
    });
  } catch {
    return null;
  }
};

/**
 * Helper to find all instances of text in tree
 */
export const findAllTextInTree = (tree: ReactTestRenderer.ReactTestInstance, text: string): ReactTestRenderer.ReactTestInstance[] => {
  const results: ReactTestRenderer.ReactTestInstance[] = [];
  
  const search = (node: ReactTestRenderer.ReactTestInstance) => {
    if (node.children) {
      node.children.forEach((child) => {
        if (typeof child === 'string' && child.includes(text)) {
          results.push(node);
        } else if (ReactTestRenderer.isValidElement(child)) {
          // Continue searching
        }
      });
    }
    node.children.forEach((child) => {
      if (ReactTestRenderer.isValidElement(child)) {
        search(child as any);
      }
    });
  };
  
  search(tree);
  return results;
};

/**
 * Helper to simulate press event
 */
export const press = (instance: ReactTestRenderer.ReactTestInstance) => {
  if (instance.props && typeof instance.props.onPress === 'function') {
    instance.props.onPress();
  }
};

/**
 * Helper to simulate text change
 */
export const changeText = (instance: ReactTestRenderer.ReactTestInstance, text: string) => {
  if (instance.props && typeof instance.props.onChangeText === 'function') {
    instance.props.onChangeText(text);
  }
};

