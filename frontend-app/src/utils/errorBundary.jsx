// ErrorBoundary.js

import React from "react";
import { APP_DEBUG } from "../config/env";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        if (APP_DEBUG === true) {
            console.log('Error caught:', error, errorInfo);
            this.setState({
                error: error,
                errorInfo: errorInfo
            });
        }
    }

    render() {
        if (this.state.hasError) {
            // Menampilkan error di layar hanya jika APP_DEBUG adalah true
            if (APP_DEBUG === true) {
                return (
                    <div>
                        <h1>Something went wrong.</h1>
                        {this.state.error && <p>Error: {this.state.error.message}</p>}
                    </div>
                );
            } else {
                return <h1>Something went wrong.</h1>;
            }
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
