import React from "react";
import { SearchBar } from 'react-native-elements';

export default class SearchInput extends React.Component {
    state = {
      search: '',
    };
  
    updateSearch = (search) => {
      this.setState({ search });
    };
  
    render() {
      const { search } = this.state;
  
      return (
        <SearchBar
          placeholder="Keyword Search... Or Browse Articles Above..."
          containerStyle={{marginHorizontal: 20, marginTop: 15, borderRadius: 10}}
          inputContainerStyle={{borderRadius: 10, margin: 'auto'}}
          fontSize={'auto'}
          onChangeText={this.updateSearch}
          value={search}
          platform={'default'}
          lightTheme={true}
        />
      );
    }
  }