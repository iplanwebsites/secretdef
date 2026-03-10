import { usePageContext } from 'vike-react/usePageContext';
import { Logo } from '../../components/logo';

export default function ErrorPage() {
  const pageContext = usePageContext();
  const is404 = pageContext.is404;

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="mb-12">
        <Logo className="text-lg" />
      </div>

      <div className="flex flex-col items-start gap-4">
        <span className="font-mono text-6xl font-extrabold text-primary">
          {is404 ? '404' : '500'}
        </span>
        <h1 className="text-2xl font-bold text-foreground">
          {is404 ? 'Page not found' : 'Something went wrong'}
        </h1>
        <p className="text-muted-foreground max-w-md">
          {is404
            ? "This page doesn't exist. Maybe you were looking for the docs?"
            : 'An unexpected error occurred. Please try again.'}
        </p>
        <div className="mt-4 flex gap-3">
          <a
            href="/"
            className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Home
          </a>
          <a
            href="/docs"
            className="inline-flex items-center px-4 py-2 rounded-md border border-border text-sm font-medium hover:bg-muted transition-colors"
          >
            Docs
          </a>
        </div>
      </div>
    </div>
  );
}
