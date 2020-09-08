import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi } from "api";
import { tvApi } from "../../api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    // 사용자가 입력하기 기다릴 것이므로
    // 초기에 로딩할 것이 없을 것이므로
    loading: false
  };
  
  handleSubmit = async() => {
    const { searchTerm } = this.state;
    if(searchTerm !== ""){
      this.searchByTerm(searchTerm);
    }
  }

  searchByTerm = async() => {
    const { searchTerm } = this.state;
    try {
      const {
        data: { results: movieResults } 
      } = await moviesApi.search(searchTerm);
      const {
        data: { results: tvResults } 
        } = await tvApi.search(searchTerm);
      
      console.log(movieResults, tvResults);

      this.setState({ loading: true });
    } catch {
      this.setState({ error: "검색 결과를 찾을 수 없습니다." })
    } finally {
      this.setState({ loading: false })
    }
  }

  render() {
    const { movieResults, tvResults, searchTerm, error, loading } = this.state;
    return <SearchPresenter 
      movieResults={movieResults}
      tvResults={tvResults}
      searchTerm={searchTerm}
      error={error}
      loading={loading}
      handleSubmit={this.handleSubmit}
    />;
  }
}