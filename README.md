# React UseEffect Hook Memory Leak

This repository demonstrates a common memory leak in React applications caused by a missing cleanup function in the `useEffect` hook.  The `bug.js` file contains the problematic code.  The `bugSolution.js` provides the corrected version.

## Bug Description

A `setTimeout` is used inside `useEffect` without a cleanup function to clear the timeout before the component unmounts.  This results in a memory leak because the timeout continues to run even after the component is no longer rendered, leading to unnecessary memory usage and potential performance issues.

## Solution

The solution involves adding a cleanup function to the `useEffect` hook's return value.  This function clears the timeout using `clearTimeout` before the component unmounts, preventing the memory leak.

## How to Reproduce

1. Clone the repository.
2. Navigate to the directory in your terminal.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Observe the console for the memory leak (or lack thereof, after applying the solution).