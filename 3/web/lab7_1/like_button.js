'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
    constructor(props) {
        super(props);
        this.commentID = 1;
        this.state = {liked: false};
    }

    render() {
        if (this.state.liked) {
            return 'Вам понравилось ' + this.commentID;
        }
        
        return e(
            'button',
            {'onClick': () => this.setState({liked: true})},
            "Like",
        )
    }

}

const domContainer = document.querySelectorAll(".like_button_container");

domContainer.forEach((field) => {
    ReactDOM.render(e(LikeButton), field);
  });
  