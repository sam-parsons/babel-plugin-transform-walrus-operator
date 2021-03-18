import { types as t } from '@babel/core';

export default function transformWalrusOperator() {
  return {
    name: 'transform-walrus-operator',
    visitor: {
      AssignmentExpression(path) {
        if (path.node.operator === ':=') console.log('here');
      },
    },
  };
}
