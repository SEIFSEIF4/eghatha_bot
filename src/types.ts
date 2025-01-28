interface KVNamespace {
  get(key: string): Promise<string | null>;
  put(key: string, value: string): Promise<void>;
  delete(key: string): Promise<void>;
}

export interface Env {
  BOT_TOKEN: string;
  CHANNEL_ID: string;
  POLL_STORE: KVNamespace;
}

declare global {
  function getMiniflareBindings(): Env;
}
