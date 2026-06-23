export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-8xl mb-4">🍦</div>
        <h1 className="text-4xl font-serif font-bold mb-2">404</h1>
        <p className="text-muted-foreground">This scoop has melted away.</p>
        <a href="/" className="mt-6 inline-block text-primary hover:underline">← Back to Scoops & Dreams</a>
      </div>
    </div>
  );
}
