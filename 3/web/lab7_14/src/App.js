import React, { Component } from "react";
import "./styles.css"; // Импортируем CSS файл

class App extends Component {
  constructor() {
    super();
    this.state = {
      authorized: false,
      unreadMessages: [
        "Call your mom!",
        "New spam email available. All links are definitely safe to click."
      ]
    };
  }

  changeAuthorization = () => {
    this.setState({
      authorized: !this.state.authorized
    });
  };

  render() {
    return (
      <div>
        <span>
          Вы {this.state.authorized ? "" : "не"} авторизованы на этом сайте!
        </span>
        <span>
          <button onClick={() => this.changeAuthorization()}>
            {this.state.authorized ? "Put out" : "Put in"}
          </button>
        </span>
        <hr />
        <div>
          {this.state.unreadMessages.length > 0 && (
            <p>You have {this.state.unreadMessages.length} unread messages!</p>
          )}
          <p></p>
        </div>
      </div>
    );
  }
}

export default App;
