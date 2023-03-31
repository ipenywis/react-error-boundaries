import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { UsingState } from "./errorHanlding/usingState";
import { UsingErrorBoundaries } from "./errorHanlding/usingErrorBoundaries";
import { UsingTheRightWay } from "./errorHanlding/usingTheRightWay";
import { ErrorBoundary } from "react-error-boundary";
import { ProductsFetchingError } from "./components/errors/ErrorBoundrayComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* <UsingState /> */}
      {/* <UsingErrorBoundaries /> */}
      <ErrorBoundary
        FallbackComponent={ProductsFetchingError}
        onError={() => console.log("Error happened!")}
      >
        <UsingTheRightWay />
      </ErrorBoundary>
    </div>
  );
}

export default App;
