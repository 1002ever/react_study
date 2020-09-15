import React from "react";
import HomePresenter from "./HomePresenter";
import { moviesApi } from "api";


export default class extends React.Component{
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: 12,
    loading: true
  };

  async componentDidMount(){
    // 1. 영화 데이터를 불러오기 시도
    // 2. 못 불러오면 error 메시지 갱신
    // 3. 뭐가 됐든 loading: false 로 갱신
    try{
      const {
        data: { results: nowPlaying }
      } = await moviesApi.nowPlaying();
      const {
        data: { results: upcoming }
      } = await moviesApi.upcoming();
      const {
        data: { results: popular }
      } = await moviesApi.popular();
      this.setState({
        nowPlaying,
        upcoming,
        popular
      });
    } catch{
      this.setState({
        error: "영화 정보를 찾을 수 없습니다."
      });
    } finally{
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;

    return <HomePresenter 
      nowPlaying={nowPlaying}
      upcoming={upcoming}
      popular={popular}
      error={error}
      loading={loading}
    />;
  }
}