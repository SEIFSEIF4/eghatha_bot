interface KVNamespace {
  get(key: string): Promise<string | null>;
  put(key: string, value: string): Promise<void>;
  delete(key: string): Promise<void>;
  list(): Promise<{ keys: { name: string }[] }>;
}

export interface Env {
  BOT_TOKEN: string;
  CHANNEL_ID: string;
  POLL_STORE: KVNamespace;
  SUBSCRIBED_CHATS_STORE: KVNamespace;
  ADMIN_ID: string;
}

declare global {
  function getMiniflareBindings(): Env;
}
