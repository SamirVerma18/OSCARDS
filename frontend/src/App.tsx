import { createSignal, onMount } from "solid-js";

const App = () => {
  const [message, setMessage] = createSignal("Loading...");

  onMount(() => {
    fetch("api/hello/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage("Error: " + err.message));
  });

  return (
    <div class="tw-p-6">
      <h1 class="text-2xl font-bold mb-4">SolidJS + Django</h1>
      <p>{message()}</p>
    </div>
  );
};

export default App;
