import { useState, Fragment } from "react";
import './App.css';
import { Provider } from 'react-redux';
import ReactIcon from './assetes/image/reactIcon.png'
import ExpenseItem from "./components/Expense/ExpensesItem";
import CardList from "./components/Card/CardList";
import Counter from "./components/Counter/Counter";
import Form from './components/Form/Form'
import Parent from "./components/StateLifting/parent";
import List from "./components/List/List";
import Login from './components/Login/Login'
import DynamicStyle from './components/DynamicStyle/DynamicStyle'
import StyeldComponent from "./components/StyledComponent/StyledComponent";
import ErrorMessage from './components/Error/ErrorMessage'
import Calculator from "./components/Calculator/Calculator";
import UserData from "./components/Project2/UserInfo";
import FragmentComponent from "./components/Fragment/Fragment";
import RefComponent from "./components/RefComponent/RefComponent";
import UseEffect from './components/UseEffect/UseEffect'
import UseReducerComponent from './components/UseReducerComponent/UseReducerComponent'
import ContextAPI from "./components/ContextAPI/ContextAPI";
import ForwardRef from './components/ForwardRef/Parent';
import Header from './components/Layout/Header';
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from './store/CartProvider'
import ShowParagraph from './components/Optimization/ShowParagraph'
import MemoComponent from "./components/Optimization/memo";
import UseCallbackComponent from "./components/Optimization/useCallback";
import Batching from "./components/Optimization/Batching";
import ClassComponent from './components/ClassComponent/classComponent'
import LifecycleExample from "./components/ClassComponent/LifeCycleMethods";
import ErrorBoundary from "./components/ClassComponent/ErrorBoundary";
import HTTPRequest from './components/HTTP/FetchData'
import PostData from './components/HTTP/PostData'
import AsyncAwait from './components/HTTP/AsyncAwait'
import CustomHook from './components/CustomHooks/index'
import CustomHookHTTP from './components/CustomHooks/CustomHookHTTP/index'
import FormInput from './components/FormInput/Form'
import store from './components/Redux/store';
import CounterRedux from './components/Redux/counter'
import ClassCounter from "./components/Redux/classCounter";
import LoginRedux from "./components/Redux/LoginComponent/Login";
import ReduxProject from './components/ReduxProject/MealApp/index'
import RouterComponent from './components/Router/Router'
import UseFetcherComponent from './components/UseFetcher/index'
import DeferComponent from './components/DeferComponent/defer'
import AuthentictionComponent from './components/Authentication/Login'
import LazyLoading from "./components/LazyLoading";
import QueryComponent from './components/ReactQuery/index'
import Animation from './components/Animation/index'

const content = [
  [
    "React is extremely popular",
    "It makes building complex, interactive UIs a breeze",
    "It's powerful & flexible",
    "It has a very active and versatile ecosystem"
  ],
  [
    "Components, JSX & Props",
    "State",
    "Hooks (e.g., useEffect())",
    "Dynamic rendering"
  ],
  [
    "Official web page (react.dev)",
    "Next.js (Fullstack framework)",
    "React Native (build native mobile apps with React)"
  ],
  [
    "Vanilla JavaScript requires imperative programming",
    "Imperative Programming: You define all the steps needed to achieve a result",
    "React on the other hand embraces declarative programming",
    "With React, you define the goal and React figures out how to get there"
  ]
];

const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

export default function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };


  return (
    <Provider store={store}>
      <CartProvider>
        <header style={{ marginTop: '700px' }}>
          <img src={ReactIcon} alt="React logo" />
          <div>
            <h1>React.js</h1>
            <p>i.e., using the React library for rendering the UI</p>
          </div>
        </header>

        <div id="tabs">
          <menu>
            <button
              className={activeContentIndex === 0 ? "active" : ""}
              onClick={() => setActiveContentIndex(0)}
            >
              Why React?
            </button>
            <button
              className={activeContentIndex === 1 ? "active" : ""}
              onClick={() => setActiveContentIndex(1)}
            >
              Core Features
            </button>
            <button
              className={activeContentIndex === 2 ? "active" : ""}
              onClick={() => setActiveContentIndex(2)}
            >
              Related Resources
            </button>
            <button
              className={activeContentIndex === 3 ? "active" : ""}
              onClick={() => setActiveContentIndex(3)}
            >
              React vs JS
            </button>
          </menu>
          <div id="tab-content">
            <ul>
              {content[activeContentIndex].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <ExpenseItem title={expenses[0].title} date={expenses[0].date} amount={expenses[0].amount} />
          <ExpenseItem title={expenses[1].title} date={expenses[1].date} amount={expenses[1].amount} />
          <ExpenseItem title={expenses[2].title} date={expenses[2].date} amount={expenses[2].amount} />
          <ExpenseItem title={expenses[3].title} date={expenses[3].date} amount={expenses[3].amount} />
        </div>

        <div style={{ marginTop: '100px' }}>
          <h1>React Leanring Course Key concepts</h1>
          <CardList />
        </div>

        <div>
          <Counter />
        </div>

        <div>
          <Form />
        </div>
        <div style={{ marginTop: '50px' }}>
          <h2>State Lifting Example</h2>
          <Parent />
        </div>

        <div>
          <List />
        </div>

        <div style={{ marginTop: '50px' }}>
          <h2>Conditional render with return</h2>
          <Login />
        </div>

        <div style={{ marginTop: '50px' }}>
          <h2>Dynamic Style Example</h2>
          <DynamicStyle />
        </div>

        <div>
          <h2>Styled Component Example</h2>
          <StyeldComponent />
        </div>

        <div>
          <ErrorMessage />
        </div>

        <div>
          <Calculator />
        </div>

        <div>
          <UserData />
        </div>

        <div style={{ display: 'flex', margin: '0 auto', alignItems: 'center', flexDirection: 'column' }}>
          <h2>Fragment Example</h2>
          <FragmentComponent />
        </div>

        <div>
          <RefComponent />
        </div>

        <div>
          <h2>UseEffect Example</h2>
          <UseEffect />
        </div>

        <div style={{ marginTop: '50px' }}>
          <h2>UseReducer Example</h2>
          <UseReducerComponent />
        </div>

        <div style={{ marginTop: '50px' }}>
          <ContextAPI />
        </div>

        <div style={{ marginTop: '50px' }}>
          <ForwardRef />
        </div>

        <div>

          <Fragment>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <main>
              <Meals />
            </main>
          </Fragment>

        </div>

        <div>
          <h1>
            Optimization Techniques
          </h1>
          <ShowParagraph />

          <MemoComponent />

          <UseCallbackComponent />

          <Batching />
        </div>

        <div>
          <h1>Class Component example</h1>
          <ErrorBoundary>
            <ClassComponent />
          </ErrorBoundary>

          <LifecycleExample />
        </div>

        <div style={{ marginTop: '50px' }}>
          <HTTPRequest />

          <PostData />

          <AsyncAwait />
        </div>

        <div style={{ marginTop: '50px' }}>
          <h1>Custom Hooks Example</h1>
          <CustomHook />
          <CustomHookHTTP />
        </div>

        <div style={{ margin: '50px auto' }}>
          <h1>Form Example</h1>
          <FormInput />
        </div>

        <h1>Redux Example</h1>
        <div style={{ height: '700px', flexDirection: 'column', width: '700px', display: 'flex', margin: 'auto', justifyContent: 'center', backgroundColor: 'red', marginTop: '20px', paddingTop: '20px 50px' }}>
          <CounterRedux />
          <ClassCounter />

          <LoginRedux />
        </div>

        <div>
          <h1>Redux Project</h1>
          <ReduxProject />
        </div>

        <div style={{ margin: '50px auto' }}>
          <h1>Router Example</h1>
          <RouterComponent />
        </div>

        <div>
          <h1>UseFetcher Example</h1>
          <UseFetcherComponent />
        </div>

        <div>
          <h1>Defer Example in react</h1>
          <DeferComponent />
        </div>

        <div>
          <h1>Authentication Example</h1>
          <AuthentictionComponent />
        </div>

        <div>
          <LazyLoading />
        </div>

        <div style={{ marginTop: '50px' }}>

          <h1>Tantack Query/ react Query Example</h1>
          <QueryComponent />
        </div>

        <div>
          <Animation />
        </div>
      </CartProvider>
    </Provider>
  );
}
