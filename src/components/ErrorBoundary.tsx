import React from 'react';
import {} from 'react-router';

export class ErrorBoundary extends React.Component<
  { fallback?: React.ReactNode; children: React.ReactNode },
  { error?: unknown; path?: string }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = {};
  }

  componentDidCatch(error: unknown) {
    this.setState({ error, path: this.getPath() });
  }

  private getPath() {
    const { pathname } = window.location;
    return pathname;
  }

  componentDidUpdate() {
    const { error, path } = this.state;
    if (error && path !== this.getPath()) {
      this.setState({
        error: undefined,
      });
    }
  }

  render() {
    const { fallback, children } = this.props;
    const { error } = this.state;

    if (error) {
      if (fallback) return fallback;
      else return <section>页面出错了</section>;
    }
    return children;
  }
}
