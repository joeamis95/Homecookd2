import _ from 'lodash'
import faker from 'faker'
import React, { Component } from 'react'
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

export default class LocationSearch extends Component {
  state = {}
  render() {

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search/>
        </Grid.Column>
        <Grid.Column width={10}>
        </Grid.Column>
      </Grid>
    )
  }
}
