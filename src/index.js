import { types as t, template } from '@babel/core';

const wrapper = template(`
    (function(IDENTIFIER) {
      if(typeof IDENTIFIER === 'undefined') throw new Error();
      IDENTIFIER = VALUE;
      return IDENTIFIER;
    })(IDENTIFIER);
`);

export default function transformWalrusOperator() {
  return {
    name: 'transform-walrus-operator',
    visitor: {
      AssignmentExpression(path) {
        if (path.node.operator !== ':=') return;

        const IDENTIFIER = path.node.left.name;
        const VALUE = path.node.right;

        // Get the iife wrapper Node
        const wrappedBody = wrapper({
          IDENTIFIER,
          VALUE,
        });

        path.replaceWith(wrappedBody);

        return;
      },
    },
  };
}
