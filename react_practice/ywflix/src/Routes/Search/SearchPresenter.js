import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";

const Container = styled.div`
  padding: 0px 20px;
`;

const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;

const Input = styled.input`
  // 이 설정 봐두기.. 까만 배경에 input창 있어보이게 바꿔줌
  all: unset;
  font-size: 28px;
  width: 100%;
`;

const SearchPresenter = ({movieResults, tvResults, searchTerm, loading, error, handleSubmit, updateTerm}) => (
  <Container>
    <Form onSubmit={handleSubmit}>
      <Input 
        placeholder="Search Movies or TV Shows..." 
        onChange={updateTerm} 
        values={searchTerm}
      />
    </Form>

    {loading ? <Loader/> : (
      <>
        {movieResults && movieResults.length > 0 && (
          <Section title="Movie Results">
            {movieResults.map(movie => (
              <span key={movie.id}>{movie.title}</span>
            ))}
          </Section>
        )}

        {tvResults && tvResults.length > 0 && (
          <Section title="TV Results">
            {tvResults.map(show => (
              <span key={show.id}>{show.name}</span>
            ))}
          </Section>
        )}

        {error && <Message color="#e74c3c" text={error}/>}
        {tvResults && movieResults && tvResults.length === 0 && movieResults.length === 0 && (
          <Message color="#95a5a6" text="Nothing found"/>
        )}
      </>
    )}
  </Container>
);

SearchPresenter.propTypes = {
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;