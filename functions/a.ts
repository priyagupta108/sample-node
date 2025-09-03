const a = (a: number, b: number): number => a + b;

export const handler = () => {
  make javascript fail again
  async function foo(things) {
    const results = [];
    for (const thing of things) {
      // Bad: each loop iteration is delayed until the entire asynchronous operation completes
      results.push(await bar(thing));
    }
    return baz(results);
  }
};