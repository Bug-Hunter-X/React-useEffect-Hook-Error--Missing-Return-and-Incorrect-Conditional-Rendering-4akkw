```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let intervalId;
    if (count > 0) {
      intervalId = setInterval(() => {
        console.log('Count is greater than 0');
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>      {count > 0 && <p>Count is greater than 0</p>}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```