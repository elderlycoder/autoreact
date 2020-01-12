import React from "react";
import Article from "./Article";
import "./News.css";

class News extends React.Component {
  state = {
    counter: 0
  };

  render() {
    const data = this.props.data;
    let newsTemplate;
    if (data.length) {
      newsTemplate = this.props.data.map(function(item) {
        return <Article key={item.id} data={item} />;
      });
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>;
    }

    return (
      <div className="news">
        {newsTemplate}
        <p
          onClick={this.handleCounter}
          className={data.length > 0 ? "" : "none"}
        >
          Всего новостей: {data.length}
        </p>
      </div>
    );
  }
}
// const News = (props) =>{
//    {/*this в данном случае == News */}

//    return (
//       const newsTemplate = props.data.map(function(item, index) {
//    <div key={index}>
//    <p className="news__author">{item.author}:</p>
//    <p className="news__text">{item.text}</p>
//    </div>
//       }
//    )
// )

// }
export default News;
