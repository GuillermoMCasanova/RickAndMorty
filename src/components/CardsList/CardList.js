// React
import React from 'react';
// Local components
import CharacterCard from '../../components/CharacterCard/CharacterCard';
// Local styles
import './CardList.css';
// Third party components
import Skeleton from 'react-loading-skeleton';
import InfiniteScroll from 'react-infinite-scroll-component';

class CardList extends React.Component {
  state = {
    loading: false,
    error: null,
    searchQuery: '',
    data: {
      info: {
        count: 0,
        pages: null,
        next: 'https://rickandmortyapi.com/api/character/',
        prev: null,
      },
      results: [],
    },
  };

  fecthData = () => {
    this.setState({
      loading: true,
      error: null,
    });

    fetch(this.state.data.info.next)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          data: {
            ...data,
            results: this.state.data.results.concat(data.results),
          },
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  };

  searchData = () => {
    this.setState({
      loading: true,
      error: null,
    });

    fetch(
      `https://rickandmortyapi.com/api/character/?name=${this.state.searchQuery}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          data,
          loading: false,
        });
      })
      .catch((error) => {
        this.setState({ error, loading: false });
      });
  };

  handleChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  componentDidMount() {
    this.fecthData();
  }

  render() {
    return (
      <>
        <div className='input-group mb-3 container'>
          <input
            value={this.state.searchQuery}
            onChange={this.handleChange}
            type='text'
            className='form-control'
            placeholder='Search character by name'
          />
          <div className='input-group-append'>
            <button
              onClick={this.searchData}
              className='btn btn-primary'
              type='button'
            >
              Search
            </button>
          </div>
        </div>
        <ul>
          <InfiniteScroll
            className='cardlist-container'
            dataLength={this.state.data.results.length}
            next={this.fecthData}
            hasMore={this.state.data.info.next}
            loader={<Skeleton />}
          >
            {this.state.data.results.map((character) => (
              <li key={character.id} className='cardlist-item'>
                <CharacterCard character={character} />
              </li>
            ))}
          </InfiniteScroll>
        </ul>
      </>
    );
  }
}

export default CardList;
