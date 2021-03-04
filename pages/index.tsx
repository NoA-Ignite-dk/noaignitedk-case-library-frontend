import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  VoiceSearch
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
// import { useRouter } from 'next/router'
import Link from 'next/link'

const searchClient = algoliasearch('ZY2QYX1R0L', 'e8b08bc3dceb9ccd66698c4defc6a566');

const Index = (): JSX.Element => (

  <div>
    {/* <header className="header">
      <div className="container">
      </div>
    </header> */}

    <div className="container">
      <InstantSearch searchClient={searchClient} indexName="dev_cases">
        <div className="search-panel">
          <div className="search-panel__results">
            <VoiceSearch
              // Optional parameters
              searchAsYouSpeak={true}
              translations={{
                buttonTitle: 'Voice Search',
                disabledButtonTitle: 'Voice Search Disabled',
              }}
            />
            <div className="searchbox">
            <SearchBox
              translations={{
                placeholder: 'Start your search here',
              }}
            />
            </div>
            {/*
 // @ts-ignore */}
            <Hits hitComponent={Hit}
            />

            <div className="pagination">
              <Pagination />
            </div>
          </div>
        </div>
      </InstantSearch>
    </div>
  </div>

);

{/*
 // @ts-ignore */}
const Hit = (props) => {
  // const router = useRouter()
  // const { details } = router.query

  return (
    <>
      <Link href="/post/[details]" as={`/post/${props.hit.objectID}`}>
        <article>
          <h1>
            {props.hit.title}
          </h1>
          <h2 className="line-height-small" style={{ fontWeight: 700, marginTop: "40px" }}><Highlight attribute="client_name" hit={props.hit} /></h2>
          <p className="medium-text">{props.hit.short_text}</p>
          <p className="small-text">
            <Highlight attribute="keywords" hit={props.hit} />
          </p>
        </article>
      </Link>
    </>
  );
}


Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};


export default Index;
