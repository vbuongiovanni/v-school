import React, {useState, createContext} from "react";
import axios from "axios";

const UserContext = createContext();
// create instance of axios for interceptor
const userAxios = axios.create();
// config userAxios to always have bearer token on authorization header
  userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

const UserProvider = (props) => {

  const initialState = {
    user : JSON.parse(localStorage.getItem("user")) || {},
    token : localStorage.getItem("token") || "",
    todos : []
  };

  const [userState, setUserState] = useState(initialState);


  const getUserTodos = () => {
    userAxios.get("/api/todo/user")
      .then(res => {
        setUserState(prevState => ({...prevState, todos : res.data}))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  const signup = (credentials) => {
    axios.post("/auth/signup", credentials)
      .then(res => {
        const {user, token} = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        setUserState(prevUserState => {
          return ({
            ...prevUserState,
            user, 
            token
          })
        })
      })
      .catch(err => console.log(err.response.data.errMsg))
  };

  const login = (credentials) => {
    axios.post("/auth/login", credentials)
      .then(res => {
        const {user, token} = res.data;
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        getUserTodos();
        setUserState(prevUserState => {
          return ({
            ...prevUserState,
            user, 
            token
          })
        })
      })
      .catch(err => console.log(err.response.data.errMsg))
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUserState({
      user : {},
      token : "",
      todos : []
    })
  }

  const addTodo = (newTodo) => {
    // using custom instance of axios, since it has bearer token baked in:
    userAxios.post("/api/todo", newTodo)
      .then(res => {
        setUserState(prevUserState => ({...prevUserState, todos : [...prevUserState.todos, res.data]}))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }


  return (
    <UserContext.Provider value={{...userState, signup, login, logout, addTodo}}>
      {props.children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProvider};