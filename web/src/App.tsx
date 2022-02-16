import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';

const searchClient = instantMeiliSearch(
  'http://127.0.0.1:7700',
  'masterKey',
);

const App = () => (
  <InstantSearch
    indexName="videos"
    searchClient={searchClient}
  >
    <SearchBox />
    <Hits hitComponent={Hit} />
  </InstantSearch>
);

const Hit = ({ hit }: { hit: any }) => <Highlight attribute="title" hit={hit} />;

export default App