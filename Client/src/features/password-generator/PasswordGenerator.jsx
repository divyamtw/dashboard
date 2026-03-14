import { useState, useEffect, useCallback, useRef } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(12);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  const [savePasswordName, setSavePasswordName] = useState("");
  const [savePassword, setSavePassword] = useState("");

  const [savedPasswords, setSavedPasswords] = useState(() => {
    const storedPassword = localStorage.getItem("savedPasswords");
    return storedPassword ? JSON.parse(storedPassword) : [];
  });

  const passwordRef = useRef(null);
  const namePassRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (includeNumbers) charset += "0123456789";
    if (includeSymbols) charset += "!@#$%^&*()_+";

    for (let i = 0; i < length; i++) {
      let randomIndex = Math.floor(Math.random() * charset.length);
      pass += charset.charAt(randomIndex);
    }

    setPassword(pass);
  }, [length, includeNumbers, includeSymbols]);

  const copyToClipboard = useCallback((text) => {
    window.navigator.clipboard.writeText(text);
  }, []);

  const copyGeneratedPassword = useCallback(() => {
    passwordRef.current?.select();
    copyToClipboard(password);
    setSavePassword(password);
    setTimeout(() => namePassRef.current?.focus(), 0);
  }, [password, copyToClipboard]);

  useEffect(() => {
    generatePassword();
  }, [length, includeNumbers, includeSymbols, generatePassword]);

  useEffect(() => {
    localStorage.setItem("savedPasswords", JSON.stringify(savedPasswords));
  }, [savedPasswords]);

  const handleSave = () => {
    if (!savePasswordName || !savePassword) return;

    setSavedPasswords((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: savePasswordName,
        password: savePassword,
      },
    ]);
    setSavePasswordName("");
    setSavePassword("");
  };

  const handleDelete = (id) => {
    setSavedPasswords((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="bg-background h-full w-full rounded-l-3xl border-l border-t border-b border-border shadow-2xl overflow-hidden relative flex flex-col lg:flex-row">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-primary/2 blur-[100px] pointer-events-none rounded-full"></div>

      {/* Left Section: Generator (Fixed/Independent Scroll) */}
      <div className="w-full lg:w-[55%] p-6 lg:p-10 overflow-y-auto scrollbar-thin relative z-10 flex flex-col">
        <div className="w-full h-full space-y-8">
          <header className="space-y-2">
            <h1 className="text-4xl font-extrabold text-primary tracking-tight glow-text leading-tight">
              Password Generator
            </h1>
            <p className="text-muted-foreground text-base">
              Create secure, randomized passwords with a single click.
            </p>
          </header>

          <div className="space-y-8">
            {/* Password Display */}
            <div className="space-y-3">
              <label className="text-xs font-bold uppercase tracking-widest text-muted-foreground ml-1">
                Generated Password
              </label>
              <div className="relative group">
                <input
                  type="text"
                  value={password}
                  readOnly
                  ref={passwordRef}
                  className="w-full rounded-2xl bg-secondary/30 px-6 py-5 text-2xl font-mono text-foreground border border-border/50 focus:border-primary outline-none transition-all pr-16 shadow-inner"
                />
                <button
                  onClick={copyGeneratedPassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all active:scale-90 shadow-lg shadow-primary/20"
                  title="Copy to clipboard"
                >
                  <i className="ri-file-copy-line text-xl"></i>
                </button>
              </div>
            </div>

            {/* Controls Group */}
            <div className="dashboard-card p-8 space-y-8 bg-secondary/10 border-border/30">
              {/* Length Control */}
              <div className="space-y-5">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-foreground uppercase tracking-wider">
                    Length
                  </span>
                  <span className="text-xl font-black text-primary bg-primary/10 px-4 py-1 rounded-xl border border-primary/20">
                    {length}
                  </span>
                </div>
                <input
                  type="range"
                  min={8}
                  max={64}
                  value={length}
                  onChange={(e) => setLength(parseInt(e.target.value))}
                  className="w-full h-2.5 rounded-full appearance-none cursor-pointer accent-primary"
                  style={{
                    background: `linear-gradient(to right, hsl(142, 71%, 45%) 0%, hsl(142, 71%, 45%) ${((length - 8) / (64 - 8)) * 100}%, hsl(240, 6%, 15%) ${((length - 8) / (64 - 8)) * 100}%, hsl(240, 6%, 15%) 100%)`,
                  }}
                />
              </div>

              {/* Toggles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex items-center justify-between p-4 rounded-2xl bg-background/50 border border-border/40 hover:border-primary/40 cursor-pointer transition-all active:scale-95">
                  <span className="text-sm font-bold">Include Numbers</span>
                  <input
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={() => setIncludeNumbers((prev) => !prev)}
                    className="w-6 h-6 rounded-lg border-border text-primary focus:ring-primary accent-primary"
                  />
                </label>
                <label className="flex items-center justify-between p-4 rounded-2xl bg-background/50 border border-border/40 hover:border-primary/40 cursor-pointer transition-all active:scale-95">
                  <span className="text-sm font-bold">Include Symbols</span>
                  <input
                    type="checkbox"
                    checked={includeSymbols}
                    onChange={() => setIncludeSymbols((prev) => !prev)}
                    className="w-6 h-6 rounded-lg border-border text-primary focus:ring-primary accent-primary"
                  />
                </label>
              </div>

              <button
                onClick={generatePassword}
                className="w-full py-5 rounded-2xl bg-primary text-primary-foreground font-black text-lg hover:shadow-[0_0_30px_-5px_hsl(var(--primary))] transition-all active:scale-[0.97] flex items-center justify-center gap-3"
              >
                <i className="ri-refresh-line text-xl"></i>
                Refresh Character Set
              </button>
            </div>

            {/* Save to Vault Form */}
            <div className="dashboard-card p-8 space-y-5 border-dashed bg-transparent border-border/40">
              <h2 className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground underline decoration-primary/40 underline-offset-8">
                Quick Save to Vault
              </h2>
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  placeholder="Account Label (e.g. GitHub)"
                  value={savePasswordName}
                  onChange={(e) => setSavePasswordName(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSave()}
                  className="flex-1 rounded-xl bg-secondary/30 px-5 py-3.5 border border-border/50 focus:border-primary outline-none transition-all text-sm font-medium"
                  ref={namePassRef}
                />
                <input
                  type="text"
                  placeholder="Password"
                  value={savePassword}
                  onChange={(e) => setSavePassword(e.target.value)}
                  className="flex-1 rounded-xl bg-secondary/30 px-4 py-3 border border-border/50 focus:border-primary outline-none transition-all font-mono text-sm"
                />
              </div>
              <button
                onClick={handleSave}
                disabled={!savePasswordName || !savePassword}
                className="w-full py-4 rounded-xl bg-foreground text-background font-bold hover:bg-foreground/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all uppercase tracking-widest text-xs"
              >
                Secure Save
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section: Vault (Scrollable) */}
      <div className="w-full lg:w-[45%] bg-secondary/5 p-6 lg:p-10 overflow-y-auto scrollbar-thin relative z-10 border-t lg:border-t-0 lg:border-l border-border/50 flex flex-col">
        <div className="w-full space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="font-black text-2xl flex items-center gap-3 tracking-tight">
              <i className="ri-shield-keyhole-fill text-primary text-3xl"></i>
              Saved Vault
            </h2>
            <span className="text-[10px] font-black uppercase tracking-widest text-primary/80 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
              {savedPasswords.length} items
            </span>
          </div>

          <div className="space-y-4">
            {savedPasswords.length > 0 ? (
              savedPasswords.map((item) => (
                <div
                  key={item.id}
                  className="dashboard-card p-0 overflow-hidden group border-border/30 hover:border-primary/30 bg-background/40 backdrop-blur-sm transition-all hover:translate-x-1"
                >
                  <div className="p-5 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold truncate max-w-50 text-foreground/90">
                        {item.name}
                      </span>
                      <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button
                          onClick={() => copyToClipboard(item.password)}
                          className="p-2 hover:bg-primary/10 hover:text-primary rounded-lg transition-colors"
                          title="Copy password"
                        >
                          <i className="ri-file-copy-line"></i>
                        </button>
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="p-2 hover:bg-destructive/10 hover:text-destructive rounded-lg transition-colors"
                          title="Delete"
                        >
                          <i className="ri-delete-bin-line"></i>
                        </button>
                      </div>
                    </div>
                    <div className="text-xs font-mono text-muted-foreground truncate bg-black/20 px-4 py-3 rounded-xl border border-white/5 font-medium group-hover:text-primary transition-colors">
                      {item.password}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="dashboard-card border-dashed border-2 py-24 flex flex-col items-center justify-center text-muted-foreground/40 bg-transparent">
                <i className="ri-safe-2-line text-6xl mb-4 animate-pulse"></i>
                <p className="text-sm font-bold uppercase tracking-widest">
                  Vault is empty
                </p>
                <p className="text-[10px] mt-2 opacity-60">
                  Generate and save a password to see it here
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
