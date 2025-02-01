```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This will cause a memory leak if the component unmounts before the timeout
    const timeoutId = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    // Cleanup function is missing to clear the timeout
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}

export default MyComponent;
```