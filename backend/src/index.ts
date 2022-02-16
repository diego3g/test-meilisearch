import { MeiliSearch } from "meilisearch";
import videos from './videos.json';

;(async () => {
  const client = new MeiliSearch({
    host: 'http://127.0.0.1:7700',
    apiKey: 'masterKey',
  })

  const index = client.index('videos')

  await index.addDocuments(videos)
})()