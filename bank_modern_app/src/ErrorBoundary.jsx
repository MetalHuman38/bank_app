// ErrorBoundary.js
import React from "react";
import CustomFallbackUI from "./CustomFallbackUI";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    console.error("Caught an error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <CustomFallbackUI />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
