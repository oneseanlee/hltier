const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 mx-auto rounded-2xl bg-muted flex items-center justify-center">
          <div className="w-8 h-8 rounded-lg bg-primary/20" />
        </div>
        <h1 className="text-2xl font-medium text-foreground">Empty Project</h1>
        <p className="text-muted-foreground text-sm max-w-xs">
          A blank canvas ready for your ideas
        </p>
      </div>
    </div>
  );
};

export default Index;
