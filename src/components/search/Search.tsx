import { Index, SerialisedIndexData } from 'elasticlunr'
import React, { Component } from 'react'
import { Link } from 'gatsby'

interface IProps {
  searchIndex: SerialisedIndexData<any>
}

interface IResult {
  date: string
  id: string
  path: string
  tags: string[]
  title: string
}

interface IState {
  query: string
  results: IResult[]
}

interface IEvent {
  target: {
    value: string
  }
}

export class Search extends Component<IProps, unknown> {
  state: IState
  index: Index<any>

  constructor(props: IProps) {
    super(props)

    this.index = Index.load(props.searchIndex)
    this.state = {
      query: '',
      results: []
    }
  }

  render(): JSX.Element {
    return (
      <div>
        <input type="search" placeholder="Search" aria-label="Search" value={this.state.query} onChange={this.search} />
        <div>
          {this.state.results.map(page => (
            <div key={page.id} className="container mt-5">
              <Link to={page.path} className="text-dark">
                <h2>{page.title}</h2>
              </Link>
              <small className="d-block text-info">
                <i>Erstellt am {page.date}</i>
              </small>
            </div>
          ))}
        </div>
      </div>
    )
  }

  search = (evt: IEvent): void => {
    const query = evt.target.value
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        // @ts-ignore TODO Remove when typings are fixed at the plugin
        .search(query, { expand: true }) // Accept partial matches
        // Map over each ID and return the full document
        .map(({ ref }): JSX.Element => this.index.documentStore.getDoc(ref) as JSX.Element)
    })
  }
}
