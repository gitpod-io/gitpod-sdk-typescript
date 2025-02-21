import { Disposables } from '../src/lib/disposables';

/**
 * A utility function that wraps the main logic with proper signal handling and cleanup.
 * It ensures that disposables are cleaned up properly when the process is interrupted.
 *
 * @param fn The main function that receives disposables and returns a promise
 * @returns A promise that resolves to the result of the function
 */
export async function withCleanup<T>(fn: (disposables: Disposables) => Promise<T>): Promise<T> {
  let disposablesCleanup: (() => Promise<void>) | undefined;

  // Setup signal handlers for cleanup
  const signalHandler = async (signal: NodeJS.Signals) => {
    console.log(`\nReceived ${signal}. Cleaning up...`);
    if (disposablesCleanup) {
      await disposablesCleanup();
    }
    process.exit(0);
  };

  process.on('SIGINT', signalHandler);
  process.on('SIGTERM', signalHandler);
  process.on('SIGQUIT', signalHandler);

  try {
    return await Disposables.with(async (disposables) => {
      // Store cleanup function for signal handlers
      disposablesCleanup = () => disposables.cleanup();
      return await fn(disposables);
    });
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}
