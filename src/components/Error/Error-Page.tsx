import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

  return (
    <div id="error-page"  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        {typeof error === 'string' ? (
          <p>
            <i>{error}</i>
          </p>
        ) : (
          <p>
            <i>{(error as Error)?.message}</i>
          </p>
        )}
      </div>
    </div>
  );
}