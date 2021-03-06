exports.up = async (db) => {
  await db.runSql(
    `
      CREATE TABLE youtube_subscriptions (
        id SERIAL PRIMARY KEY,
        chat_id INT UNIQUE NOT NULL REFERENCES chats(chat_id),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `,
  );

  return null;
};

exports.down = async (db) => {
  await db.runSql(
    `
      DROP TABLE youtube_subscriptions;
    `,
  );

  return null;
};

exports._meta = {
  version: 1,
};
