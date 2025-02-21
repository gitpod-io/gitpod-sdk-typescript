/**
 * A utility class to manage cleanup actions (disposables) in a LIFO order.
 *
 * Example:
 * ```typescript
 * const disposables = new Disposables();
 * try {
 *   // Add cleanup actions
 *   disposables.add(() => cleanupSomething());
 *   disposables.add(() => cleanupSomethingElse());
 *   // Do work that needs cleanup
 *   doSomething();
 *   doSomethingElse();
 * } finally {
 *   // Cleanup actions will be executed in reverse order
 *   await disposables.cleanup();
 * }
 * ```
 */
export class Disposables {
  private actions: (() => any | Promise<any>)[] = [];

  /**
   * Add a cleanup action to be executed when cleanup is called.
   *
   * @param action A function that performs cleanup when called
   */
  add(action: () => any | Promise<any>): void {
    this.actions.push(action);
  }

  /**
   * Execute all cleanup actions in reverse order.
   *
   * If any cleanup action raises an exception, it will be logged but won't prevent
   * other cleanup actions from executing.
   */
  async cleanup(): Promise<void> {
    for (const action of this.actions.reverse()) {
      try {
        await action();
      } catch (error) {
        console.error('cleanup action failed:', error);
      }
    }
  }

  /**
   * Helper function to manage disposables with automatic cleanup.
   *
   * @param fn Function that receives disposables and returns a promise
   * @returns The result of the function execution
   */
  static async with<T>(fn: (disposables: Disposables) => Promise<T>): Promise<T> {
    const disposables = new Disposables();
    try {
      return await fn(disposables);
    } finally {
      await disposables.cleanup();
    }
  }
}
