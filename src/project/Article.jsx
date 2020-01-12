import React from "react";

class Article extends React.Component{
   state = {
      visible: false, // определили начальное состояние
      }
      handleReadMoreClck = (e) => { // добавили метод
         e.preventDefault()
         this.setState({ visible: true })
         }
   render(){
      const {visible} = this.state
      const {author, text, bigText} = this.props.data
      return (
         <div>
            <p className="news__author">{author}:</p>
            <p className="news__text">{text}</p>
            {// в этом случае получится слева true и будет применена ссылка Подробнее
            !visible && <a onClick={this.handleReadMoreClck} href="#" className='news__readmore'>Подробнее</a>
               }  
            {visible && <p className="news__text">{bigText}</p>}
          </div>
      )
   }

}

export default Article