CREATE TABLE users (
  id TEXT PRIMARY KEY,
  username TEXT NOT NULL,
  normalized_username TEXT NOT NULL UNIQUE,
  pin_verifier TEXT,
  created_at TEXT NOT NULL
);

CREATE TABLE quizzes (
  id TEXT PRIMARY KEY,
  owner_id TEXT NOT NULL REFERENCES users(id),
  title TEXT NOT NULL,
  course_name TEXT NOT NULL,
  course_key TEXT NOT NULL,
  theme TEXT NOT NULL,
  allow_short_answer INTEGER NOT NULL DEFAULT 0,
  questions_json TEXT NOT NULL,
  music_json TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE INDEX quizzes_created_at ON quizzes(created_at DESC);
CREATE INDEX quizzes_owner_id ON quizzes(owner_id);

CREATE TABLE sessions (
  token_hash TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  expires_at INTEGER NOT NULL
);

CREATE INDEX sessions_expires_at ON sessions(expires_at);

CREATE TABLE login_failures (
  rate_key TEXT PRIMARY KEY,
  count INTEGER NOT NULL,
  expires_at INTEGER NOT NULL
);
