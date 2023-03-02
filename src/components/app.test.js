/**
 * @jest-environment jsdom
 */
import { Node, createItems,render, addItems, lists } from "./app";

describe('add and remove group', () => {
  it('should add a task to the list', () => {
    const todoList = new Node(description);
    createItems('Write code');
    expect(todoList.lists).toHaveLength(1);
    expect(todoList.lists[0]).toEqual({
      id: 1,
      description: 'Write code',
      completed: false,
    });
  });
});