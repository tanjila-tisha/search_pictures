import React from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import Pager from "./Pager";

class App extends React.Component {
  state = {
    images: [],
    totalResult: 0,
    pageNo: 1,
    term: "",
    message: "",
  };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, page: 1 },
    });

    this.setState({
      images: response.data.results,
      totalResult: response.data.total,
      term: term,
      message: !response.data.total ? "No result found" : "",
    });
  };

  goToPage = async (pageNo) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: this.state.term, page: pageNo },
    });

    this.setState({
      images: response.data.results,
      totalResult: response.data.total,
      pageNo: pageNo,
    });
  };

  render() {
    const {images, totalResult, term, message, pageNo} = this.state;
    const maxPage = Math.ceil(totalResult / 10);

    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        {message &&
          `${message} on key word ${term}`}
        <Pager
          pageNo={pageNo}
          maxPageNo={maxPage}
          goToPage={this.goToPage}
          totalResult={totalResult}
        />
        <ImageList images={images} />

        <Pager
          pageNo={pageNo}
          maxPageNo={maxPage}
          goToPage={this.goToPage}
          totalResult={totalResult}
        />
      </div>
    );
  }
}

export default App;
