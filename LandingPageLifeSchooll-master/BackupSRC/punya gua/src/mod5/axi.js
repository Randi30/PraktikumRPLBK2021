import { Fragment } from "react";
import { React, Component } from "react";
import axios from "axios";
import "../App.css";
import ReactModal from "react-modal";

export default class Axi extends Component {
  state = {
    posts: [],
    isLoading: true,
    errors: null,
  };

  getPosts() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then((response) => {
        this.setState({
          posts: response.data,
          isLoading: false,
        });
      })
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getPosts();
  }

  render() {
    const { isLoading, posts } = this.state;
    return (
      <Fragment>
        <h2>Random Post</h2>
        <div className="conta-card">
          {!isLoading ? (
            posts.map((post) => {
              const { id, name, email, body } = post;
              return (
                <div className="card-margin">
                  <div className="box-card" key={id}>
                    <h1 className="title-card">Card Name</h1>
                    <h2>{name}</h2>
                    <p>{email}</p>
                    <p>{body}</p>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </Fragment>
    );
  }
}
