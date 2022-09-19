import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.sass';
import App from './componetns/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)



















/* const Header = () => {         // Компоненты это всегда функции с большой буквы
  return <h2>Hello world!</h2>
}

const Field = () => {
  const holder = "Enter here";
  const styleField ={
    width: '300px',
    color: 'blue',
    borderRadius: '5px'
  }
  return <input 
              style={styleField} // помещаем стили из оьекта 
              type="text" 
              placeholder={holder}  // можно поместить переменную с содержимым
              className="first"
              autoComplete=''
              htmlFor=""/>
              
   
}

const Btn = () => { 
  const logged = false;
  const text = "Log in";   // можно помещать <p>, ()=>, итд.  исключение это {обьекты}
  return <button>{logged ? "Enter" : text}</button>// синтаксис c тернарным оператором  
}

const App = () => {  // собираем компоненты в одно приложение 
  return (
    <div>
      <Header/>
      <Field/>
      <Btn/>
    </div>
  ) 
} */

/* class WhoAmI extends Component{
  constructor(props){
    super(props);
    this.state = {
      years: 26
    }
    this.nextYear = this.nextYear.bind(this)  // навешиваем  обработчик события  на экземпляр обьекта  
  }

  nextYear() {                // метод изменяет года записывая в years измененный параметр
     this.setState(state => ({
      years: ++state.years
  }))
  }
  render(){                                   // метод возвращает нас верстку
    const {name, surname, link} = this.props;
    const {years} = this.state;
    return (                                      //  на кнопке обработчик события вызывает метод по изм лет 
      <>                                          
        <button onClick={this.nextYear}>++</button>
        <h1>My name {name}, surname -{surname}, years ={years} </h1>
        <a href={link}>My profile</a>
      </>
  )
  }
}

const All = () => {
  return (
    <>
      <WhoAmI name= 'Artem' surname='Novikov' link='telegram.com' />
      <WhoAmI name= 'Andy' surname='Novikov' link='telegram.com' />
      <WhoAmI name= 'Serg' surname='Novikov' link='telegram.com' />
    </>
  )
} */
