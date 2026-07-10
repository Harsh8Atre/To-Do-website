const WelcomeMessage = () => {
  return (
    <div className="rounded-[24px] border border-dashed border-slate-700 bg-slate-800/50 p-8 text-center">
      <div className="mb-4 text-4xl">✨</div>
      <h2 className="text-xl font-semibold text-white">Your day looks clear</h2>
      <p className="mt-2 text-sm text-slate-400">
        Add your first task and let this space help you stay calm and focused.
      </p>
    </div>
  );
};

export default WelcomeMessage;
