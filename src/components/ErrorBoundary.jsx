import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Portfolio ErrorBoundary caught:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#050714] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-6 shadow-glow-sm">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-heading mb-3">
            Neural State Calibration Interrupted
          </h1>
          <p className="text-slate-400 max-w-md text-sm mb-8 leading-relaxed">
            An unexpected client exception was intercepted by the error containment boundary.
          </p>
          <button
            onClick={this.handleReload}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 text-slate-900 font-bold text-sm shadow-glow-sm hover:shadow-glow-md"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Re-initialize Application</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
