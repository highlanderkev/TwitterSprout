import * as React from 'react';
import { helloWorld } from '../utils/userSearchService';

export function HelloWorldComponent() {
  return <p>{renderHelloWorld()}</p>;
}

async function renderHelloWorld() {
  const result = await helloWorld();
  return <p>{result}</p>
}
