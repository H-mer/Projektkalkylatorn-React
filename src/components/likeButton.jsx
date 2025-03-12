import { useState } from "react";

function LikeButton({ initialCount }) {  // Använder props
  const [count, setCount] = useState(initialCount);  // Använder state

  return (
    <button onClick={() => setCount(count + 1)}>
      👍 Like {count}
    </button>
  );
}

export default LikeButton;
